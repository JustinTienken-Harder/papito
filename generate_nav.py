import os
import json

def scan_directory(base_path, relative_path="", max_depth=3, current_depth=0):
    """
    Recursively scan directory and create navigation structure
    """
    if current_depth >= max_depth:
        return None
        
    full_path = os.path.join(base_path, relative_path) if relative_path else base_path
    
    if not os.path.exists(full_path) or not os.path.isdir(full_path):
        return None
    
    try:
        entries = sorted([entry for entry in os.listdir(full_path) 
                         if os.path.isdir(os.path.join(full_path, entry)) 
                         and not entry.startswith('.')])
    except PermissionError:
        return None
    
    # Check if there's a 'slides' folder - if so, this is a gallery endpoint
    has_slides = 'slides' in entries
    if has_slides:
        # This is a gallery directory, return base structure with absolute path
        return {
            "navUrl": f"/{relative_path}/" if relative_path else "/",
            "navBase": True,
        }
    
    if not entries:
        # Leaf directory without slides - return base structure
        return {
            "navUrl": f"/{relative_path}/" if relative_path else "/",
            "navBase": True,
        }
    
    nested_dirs = []
    for entry in entries:
        entry_relative_path = os.path.join(relative_path, entry).replace('\\', '/') if relative_path else entry
        
        nested_structure = scan_directory(base_path, entry_relative_path, max_depth, current_depth + 1)
        
        if nested_structure:
            if isinstance(nested_structure, dict) and "navUrl" in nested_structure and nested_structure.get("navBase"):
                # This is a leaf node (gallery endpoint)
                nav_item = {
                    "navText": entry,
                    "navUrl": f"{entry}/",
                    "navBase": False,
                    "nestedDir": [nested_structure]
                }
            else:
                # This has further nesting
                nav_item = {
                    "navText": entry,
                    "navUrl": f"{entry}/",
                    "navBase": False,
                    "nestedDir": nested_structure if isinstance(nested_structure, list) else [nested_structure]
                }
        else:
            # No subdirectories or hit max depth
            nav_item = {
                "navText": entry,
                "navUrl": f"/{entry_relative_path}/",  # Absolute path for leaf nodes
                "navBase": False,
            }
        
        nested_dirs.append(nav_item)
    
    return nested_dirs

def generate_main_nav_data():
    """
    Generate the complete navigation data structure
    """
    base_path = "."  # Current directory
    
    # Define the main categories from your existing nav
    main_categories = {
        "Digital Camera Pictures": {
            "navUrl": "CameraPictures/",
            "folder": "CameraPictures"
        },
        "(old) Digital 2002-2008": {
            "navUrl": "Kpic/",
            "folder": "Kpic"
        },
        "Ruby and Sam in Europe 2006": {
            "navUrl": "2006-Europe/",
            "folder": "2006-Europe"
        },
        "Ruby in Sweden 2006": {
            "navUrl": "2006-05Ruby/",
            "folder": "2006-05Ruby",
            "navBase": True
        },
        "Ruby's Christmas 2005": {
            "navUrl": "ruby/",
            "folder": "ruby"
        },
        "Video Picture": {
            "navUrl": "VidPics/200507/",
            "folder": "VidPics"
        },
        "Baja Trips": {
            "navUrl": "Baja/",
            "folder": "Baja"
        },
        "Colombia Scanned Pictures": {
            "navUrl": "Colombia/",
            "folder": "Colombia"
        },
        "Old Colombia Pictures": {
            "navUrl": "ColombiaViejo/",
            "folder": "ColombiaViejo"
        },
        "Favorites Scanned Pictures and Slides": {
            "navUrl": "Favorites/",
            "folder": "Favorites"
        }
    }
    
    home_nav = [
        {
            "navText": "Papito-Paul's Blog",
            "navUrl": "http://papito-paul.blogspot.com",
        }
    ]
    
    # Process each category
    for nav_text, config in main_categories.items():
        folder_name = config["folder"]
        nav_url = config["navUrl"]
        is_base = config.get("navBase", False)
        
        if os.path.exists(folder_name) and os.path.isdir(folder_name):
            nested_structure = scan_directory(base_path, folder_name)
            
            nav_item = {
                "navText": nav_text,
                "navUrl": nav_url,
            }
            
            if is_base:
                nav_item["navBase"] = True
            else:
                nav_item["navBase"] = False
                
            if nested_structure and len(nested_structure) > 0:
                nav_item["nestedDir"] = nested_structure
                
            home_nav.append(nav_item)
        else:
            # Folder doesn't exist, add as simple link
            nav_item = {
                "navText": nav_text,
                "navUrl": nav_url,
            }
            if is_base:
                nav_item["navBase"] = True
            home_nav.append(nav_item)
    
    return home_nav

def generate_js_file(nav_data, output_file="mainNavData.js"):
    """
    Generate the JavaScript file with the navigation data
    """
    js_content = "const homeNav = " + json.dumps(nav_data, indent=2) + ";\n\nexport { homeNav };\n"
    
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(js_content)
    
    print(f"Generated {output_file} with {len(nav_data)} main navigation items")

if __name__ == "__main__":
    print("Scanning directories and generating navigation data...")
    nav_data = generate_main_nav_data()
    generate_js_file(nav_data, "src/utils/mainNavData2.js")
    print("Done!")