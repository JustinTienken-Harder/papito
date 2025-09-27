
const homeNav = [
    {
        navText: "Papito-Paul's Blog",
        navUrl: "http://papito-paul.blogspot.com"
    },
    {
        navText: "Digital Camera Pictures",
        navUrl: "CameraPictures/",
        navBase: false,
        nestedDir: [
            {
            navText:"2002",
            navUrl: "CameraPictures/2002/",
            navBase: false,
            nestedDir: [
                {
                    navText:"October",
                    navUrl: "CameraPictures/2002/October/",
                    navBase: false,
                    nestedDir:[
                        {
                            navUrl:"CameraPictures/2002/October/2002/slides/",
                            navBase: true
                        }
                    ]
                },
            ]
            
            },
            {
            navText:"2003",
            navUrl: "CameraPictures/2003/",
            navBase: false,
            
            },
            {
            navText:"2004",
            navUrl: "CameraPictures/2004/",
            navBase: false,
            
            },
            {
            navText:"2005",
            navUrl: "CameraPictures/2005/",
            navBase: false,
            
            },
            {
            navText:"2006",
            navUrl: "CameraPictures/2006/",
            navBase: false,
            
            },
            {
            navText:"2007",
            navUrl: "CameraPictures/2007/",
            navBase: false,
            
            },
            {
            navText:"2008",
            navUrl: "CameraPictures/2008/",
            navBase: false,
            
            },
            {
            navText:"2009",
            navUrl: "CameraPictures/2009/",
            navBase: false,
            
            },
        ]
    },
    {
        navText: "(old) Digital 2002-2008",
        navUrl: "Kpic/"
    },
    {
        navText: "Ruby and Sam in Europe 2006",
        navUrl: "2006-Europe/"
    },
    {
        navText: "Ruby in Sweden 2006",
        navUrl: "2006-05Ruby/",
        navBase: true
    },
    {
        navText: "Ruby's Christmas 2005",
        navUrl: "ruby/"
    },
    {
        navText: "Video Picture",
        navUrl: "VidPics/200507/"
    },
    {
        navText: "Panoramics",
        navUrl: "Kpic/pano/"
    },
    {
        navText: "Baja Trips",
        navUrl: "Baja/"
    },
    {
        navText: "Colombia Scanned Pictures",
        navUrl: "Colombia/"
    },
    {
        navText: "Old Colombia Pictures",
        navUrl: "ColombiaViejo/"
    },
    {
        navText: "Favorites Scanned Pictures and Slides",
        navUrl: "Favorites/"
    }
   
];


export {
   homeNav
}