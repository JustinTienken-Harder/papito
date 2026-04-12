import hashlib
from pathlib import Path
import json 

from bs4 import BeautifulSoup




def find_all_jpgs(root: str = ".") -> list[Path]:
    return list(Path(root).rglob("*.jpg")) + list(Path(root).rglob("*.JPG"))


def hash_jpgs(paths: list[Path]) -> list[str]:
    hashes = []
    for path in paths:
        sha256 = hashlib.sha256(path.read_bytes()).hexdigest()
        hashes.append(sha256)
    return hashes

def find_a_description(path: str = ".") -> list[str]:
    description = "" 
    path = path.replace(".JPG", ".html")
    path = path.replace(".jpg", ".html")
    if Path(path).exists():
        with open(path, "r") as f:
            soup = BeautifulSoup(f, "html.parser")
            description = soup.find("div", class_="name")
            if "IMG_3253" in path:
                print(description)
                print(description.get_text())
            if description:
                return description.get_text()
    return description

def get_all_descriptions(jpg_paths: list[Path]) -> list[str]:
    descriptions = []
    for jpg in jpg_paths:
        # try:
        description = find_a_description(str(jpg))
        # except Exception as e:
        if description:
            descriptions.append(description)
        else:
            descriptions.append("")
    return descriptions


jpg_list = find_all_jpgs()
print(f"Found {len(jpg_list)} JPG files:")
example = "/Users/justintienken-harder/papito-website/2006-Europe/000-Flottsboro/slides/IMG_3253.html"
descriptions = get_all_descriptions(jpg_list)

img_hashes = hash_jpgs(jpg_list)
hash_to_description = dict(zip(img_hashes, descriptions))
img_to_description = dict(zip([str(d) for d in jpg_list], descriptions))
img_to_hash = dict(zip([str(d) for d in jpg_list], img_hashes))
# json.dump(hash_to_description, open("hash_to_description.json", "w"), indent=4)
# json.dump(img_to_description, open("img_to_description.json", "w"), indent=4)
json.dump(img_to_hash, open("new_img_to_hash.json", "w"), indent=4)