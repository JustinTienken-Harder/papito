import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LinkList from "../components/LinkList.vue";
import Gallery from "../components/Gallery.vue";
import { homeNav } from "../utils/mainNavData.js";

console.log(homeNav[1].nestedDir[0].nestedDir[0].nestedDir[0].navUrl);

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
    path: "/papito-paul.blogspot",
    name:"Papito-Paul's Blog",
    beforeEnter() {
     location.href = "http://papito-paul.blogspot.com";
      return false; // Prevent Vue Router from handling the navigation internally
    }
  },
    {
      path: "/CameraPictures/",
      name: "CameraPictures",
      component: LinkList,
      props: { navData: homeNav[1].nestedDir }
    },
    {
      path: "/CameraPictures/2002/",
      name: "CameraPictures 2002",
      component: LinkList,
      props: { navData: homeNav[1].nestedDir[0].nestedDir }
    },
    {
      path: "/CameraPictures/2002/October/",
      name: "CameraPictures 2002 October",
      component: Gallery,
      props: {
        photosUrl: homeNav[1].nestedDir[0].nestedDir[0].nestedDir[0].navUrl,
      }
    },
    {
      path: "/CameraPictures/2002/November/",
      name: "CameraPictures 2002 November",
      component: Gallery,
      props: {
        photosUrl: homeNav[1].nestedDir[0].nestedDir[1].nestedDir[0].navUrl,
      }
    },
    {
      path: "/CameraPictures/2002/December/",
      name: "CameraPictures 2002 December",
      component: Gallery,
      props: {
        photosUrl: homeNav[1].nestedDir[0].nestedDir[2].nestedDir[0].navUrl,
      }
    },
    {
      path: "/CameraPictures/2003/",
      name: " CameraPictures 2003",
      component: LinkList,
      props: { navData: homeNav[1].nestedDir[1].nestedDir }
    },
    {
      path: "/CameraPictures/2003/January/",
      name: "CameraPictures 2003 January ",
      component: Gallery,
      props: {
        photosUrl: homeNav[1].nestedDir[1].nestedDir[0].nestedDir[0].navUrl,
      }
    },
    {
      path: "/CameraPictures/2003/February/",
      name: "CameraPictures 2003 February",
      component: Gallery,
      props: {
        photosUrl: homeNav[1].nestedDir[1].nestedDir[1].nestedDir[0].navUrl,
      }
    },
    {
      path: "/CameraPictures/2003/March/",
      name: "CameraPictures 2003 March",
      component: Gallery,
      props: {
        photosUrl: homeNav[1].nestedDir[1].nestedDir[2].nestedDir[0].navUrl,
      }
    },
    {
      path: "/CameraPictures/2003/April/",
      name: "CameraPictures 2003 April",
      component: Gallery,
      props: {
        photosUrl: homeNav[1].nestedDir[1].nestedDir[3].nestedDir[0].navUrl,
      }
    },
    {
      path: "/CameraPictures/2003/May/",
      name: "CameraPictures 2003 May",
      component: Gallery,
      props: {
        photosUrl: homeNav[1].nestedDir[1].nestedDir[4].nestedDir[0].navUrl,
      }
    },
    {
      path: "/CameraPictures/2003/June/",
      name: "CameraPictures 2003 June",
      component: Gallery,
      props: {
        photosUrl: homeNav[1].nestedDir[1].nestedDir[5].nestedDir[0].navUrl,
      }
    },
    {
      path: "/CameraPictures/2003/July/",
      name: "CameraPictures 2003 July",
      component: Gallery,
      props: {
        photosUrl: homeNav[1].nestedDir[1].nestedDir[6].nestedDir[0].navUrl,
      }
    },
    {
      path: "/CameraPictures/2003/August/",
      name: "CameraPictures 2003 August",
      component: Gallery,
      props: {
        photosUrl: homeNav[1].nestedDir[1].nestedDir[7].nestedDir[0].navUrl,
      }
    },
    {
      path: "/CameraPictures/2003/September/",
      name: "CameraPictures 2003 September",
      component: Gallery,
      props: {
        photosUrl: homeNav[1].nestedDir[1].nestedDir[8].nestedDir[0].navUrl,
      }
    },
    {
      path: "/CameraPictures/2003/October/",
      name: "CameraPictures 2003 October",
      component: Gallery,
      props: {
        photosUrl: homeNav[1].nestedDir[1].nestedDir[9].nestedDir[0].navUrl,
      }
    },
    {
      path: "/CameraPictures/2003/November/",
      name: "CameraPictures 2003 November",
      component: Gallery,
      props: {
        photosUrl: homeNav[1].nestedDir[1].nestedDir[10].nestedDir[0].navUrl,
      }
    },
    {
      path: "/CameraPictures/2003/December/",
      name: "CameraPictures 2003 December",
      component: Gallery,
      props: {
        photosUrl: homeNav[1].nestedDir[1].nestedDir[11].nestedDir[0].navUrl,
      }
    },
     {
      path: "/CameraPictures/2004/",
      name: " CameraPictures 2004",
      component: LinkList,
      props: { navData: homeNav[1].nestedDir[2].nestedDir }
    },
    {
      path: "/CameraPictures/2004/January/",
      name: "CameraPictures 2004 January ",
      component: Gallery,
      props: {
        photosUrl: homeNav[1].nestedDir[2].nestedDir[0].nestedDir[0].navUrl,
      }
    },
    {
      path: "/CameraPictures/2004/February/",
      name: "CameraPictures 2004 February",
      component: Gallery,
      props: {
        photosUrl: homeNav[1].nestedDir[2].nestedDir[1].nestedDir[0].navUrl,
      }
    },
    {
      path: "/CameraPictures/2004/March/",
      name: "CameraPictures 2004 March",
      component: Gallery,
      props: {
        photosUrl: homeNav[1].nestedDir[2].nestedDir[2].nestedDir[0].navUrl,
      }
    },
    {
      path: "/CameraPictures/2004/April/",
      name: "CameraPictures 2004 April",
      component: Gallery,
      props: {
        photosUrl: homeNav[1].nestedDir[2].nestedDir[3].nestedDir[0].navUrl,
      }
    },
    {
      path: "/CameraPictures/2004/June/",
      name: "CameraPictures 2004 June",
      component: Gallery,
      props: {
        photosUrl: homeNav[1].nestedDir[2].nestedDir[4].nestedDir[0].navUrl,
      }
    },
    {
      path: "/CameraPictures/2004/July/",
      name: "CameraPictures 2004 July",
      component: Gallery,
      props: {
        photosUrl: homeNav[1].nestedDir[2].nestedDir[5].nestedDir[0].navUrl,
      }
    },
    {
      path: "/CameraPictures/2004/August/",
      name: "CameraPictures 2004 August",
      component: Gallery,
      props: {
        photosUrl: homeNav[1].nestedDir[2].nestedDir[6].nestedDir[0].navUrl,
      }
    },
    {
      path: "/CameraPictures/2004/September/",
      name: "CameraPictures 2004 September",
      component: Gallery,
      props: {
        photosUrl: homeNav[1].nestedDir[2].nestedDir[7].nestedDir[0].navUrl,
      }
    },
    {
      path: "/CameraPictures/2004/October/",
      name: "CameraPictures 2004 October",
      component: Gallery,
      props: {
        photosUrl: homeNav[1].nestedDir[2].nestedDir[8].nestedDir[0].navUrl,
      }
    },
    {
      path: "/CameraPictures/2004/November/",
      name: "CameraPictures 2004 November",
      component: Gallery,
      props: {
        photosUrl: homeNav[1].nestedDir[2].nestedDir[9].nestedDir[0].navUrl,
      }
    },
    {
      path: "/CameraPictures/2004/December/",
      name: "CameraPictures 2004 December",
      component: Gallery,
      props: {
        photosUrl: homeNav[1].nestedDir[2].nestedDir[10].nestedDir[0].navUrl,
      }
    },
    {
      path: "/CameraPictures/2005/",
      name: " CameraPictures 2005",
      component: LinkList,
      props: { navData: homeNav[1].nestedDir[3].nestedDir }
    },
    {
      path: "/CameraPictures/2005/January/",
      name: "CameraPictures 2005 January ",
      component: Gallery,
      props: {
        photosUrl: homeNav[1].nestedDir[3].nestedDir[0].nestedDir[0].navUrl,
      }
    },
    {
      path: "/CameraPictures/2005/February/",
      name: "CameraPictures 2005 February",
      component: Gallery,
      props: {
        photosUrl: homeNav[1].nestedDir[3].nestedDir[1].nestedDir[0].navUrl,
      }
    },
    {
      path: "/CameraPictures/2005/March/",
      name: "CameraPictures 2005 March",
      component: Gallery,
      props: {
        photosUrl: homeNav[1].nestedDir[3].nestedDir[2].nestedDir[0].navUrl,
      }
    },
    {
      path: "/CameraPictures/2005/April/",
      name: "CameraPictures 2005 April",
      component: Gallery,
      props: {
        photosUrl: homeNav[1].nestedDir[3].nestedDir[3].nestedDir[0].navUrl,
      }
    },
    {
      path: "/CameraPictures/2005/May/",
      name: "CameraPictures 2005 May",
      component: Gallery,
      props: {
        photosUrl: homeNav[1].nestedDir[3].nestedDir[4].nestedDir[0].navUrl,
      }
    },
    {
      path: "/CameraPictures/2005/June/",
      name: "CameraPictures 2005 June",
      component: Gallery,
      props: {
        photosUrl: homeNav[1].nestedDir[3].nestedDir[5].nestedDir[0].navUrl,
      }
    },
    {
      path: "/CameraPictures/2005/July/",
      name: "CameraPictures 2005 July",
      component: Gallery,
      props: {
        photosUrl: homeNav[1].nestedDir[3].nestedDir[6].nestedDir[0].navUrl,
      }
    },
    {
      path: "/CameraPictures/2005/August/",
      name: "CameraPictures 2005 August",
      component: Gallery,
      props: {
        photosUrl: homeNav[1].nestedDir[3].nestedDir[7].nestedDir[0].navUrl,
      }
    },
    {
      path: "/CameraPictures/2005/September/",
      name: "CameraPictures 2005 September",
      component: Gallery,
      props: {
        photosUrl: homeNav[1].nestedDir[3].nestedDir[8].nestedDir[0].navUrl,
      }
    },
    {
      path: "/CameraPictures/2005/October/",
      name: "CameraPictures 2005 October",
      component: Gallery,
      props: {
        photosUrl: homeNav[1].nestedDir[3].nestedDir[9].nestedDir[0].navUrl,
      }
    },
    {
      path: "/CameraPictures/2005/November/",
      name: "CameraPictures 2005 November",
      component: Gallery,
      props: {
        photosUrl: homeNav[1].nestedDir[3].nestedDir[10].nestedDir[0].navUrl,
      }
    },
    {
      path: "/CameraPictures/2005/December/",
      name: "CameraPictures 2005 December",
      component: Gallery,
      props: {
        photosUrl: homeNav[1].nestedDir[3].nestedDir[11].nestedDir[0].navUrl,
      }
    },
    {
      path: "/CameraPictures/2006/",
      name: " CameraPictures 2006",
      component: LinkList,
      props: { navData: homeNav[1].nestedDir[4].nestedDir }
    },
    {
      path: "/CameraPictures/2006/January/",
      name: "CameraPictures 2006 January ",
      component: Gallery,
      props: {
        photosUrl: homeNav[1].nestedDir[4].nestedDir[0].nestedDir[0].navUrl,
      }
    },
    {
      path: "/CameraPictures/2006/February/",
      name: "CameraPictures 2006 February",
      component: Gallery,
      props: {
        photosUrl: homeNav[1].nestedDir[4].nestedDir[1].nestedDir[0].navUrl,
      }
    },
    {
      path: "/CameraPictures/2006/March/",
      name: "CameraPictures 2006 March",
      component: Gallery,
      props: {
        photosUrl: homeNav[1].nestedDir[4].nestedDir[2].nestedDir[0].navUrl,
      }
    },
    {
      path: "/CameraPictures/2006/April/",
      name: "CameraPictures 2006 April",
      component: Gallery,
      props: {
        photosUrl: homeNav[1].nestedDir[4].nestedDir[3].nestedDir[0].navUrl,
      }
    },
    {
      path: "/CameraPictures/2006/May/",
      name: "CameraPictures 2006 May",
      component: Gallery,
      props: {
        photosUrl: homeNav[1].nestedDir[4].nestedDir[4].nestedDir[0].navUrl,
      }
    },
    {
      path: "/CameraPictures/2006/June/",
      name: "CameraPictures 2006 June",
      component: Gallery,
      props: {
        photosUrl: homeNav[1].nestedDir[4].nestedDir[5].nestedDir[0].navUrl,
      }
    },
    {
      path: "/CameraPictures/2006/July/",
      name: "CameraPictures 2006 July",
      component: Gallery,
      props: {
        photosUrl: homeNav[1].nestedDir[4].nestedDir[6].nestedDir[0].navUrl,
      }
    },
    {
      path: "/CameraPictures/2006/August/",
      name: "CameraPictures 2006 August",
      component: Gallery,
      props: {
        photosUrl: homeNav[1].nestedDir[4].nestedDir[7].nestedDir[0].navUrl,
      }
    },
    {
      path: "/CameraPictures/2006/September/",
      name: "CameraPictures 2006 September",
      component: Gallery,
      props: {
        photosUrl: homeNav[1].nestedDir[4].nestedDir[8].nestedDir[0].navUrl,
      }
    },
    {
      path: "/CameraPictures/2006/October/",
      name: "CameraPictures 2006 October",
      component: Gallery,
      props: {
        photosUrl: homeNav[1].nestedDir[4].nestedDir[9].nestedDir[0].navUrl,
      }
    },
    {
      path: "/CameraPictures/2006/November/",
      name: "CameraPictures 2006 November",
      component: Gallery,
      props: {
        photosUrl: homeNav[1].nestedDir[4].nestedDir[10].nestedDir[0].navUrl,
      }
    },
    {
      path: "/CameraPictures/2006/December/",
      name: "CameraPictures 2006 December",
      component: Gallery,
      props: {
        photosUrl: homeNav[1].nestedDir[4].nestedDir[11].nestedDir[0].navUrl,
      }
    },
    
    {
      path: "/CameraPictures/2007/",
      name: " CameraPictures 2007",
      component: LinkList,
      props: { navData: homeNav[1].nestedDir[5].nestedDir }
    },
    {
      path: "/CameraPictures/2007/January/",
      name: "CameraPictures 2007 January ",
      component: Gallery,
      props: {
        photosUrl: homeNav[1].nestedDir[5].nestedDir[0].nestedDir[0].navUrl,
      }
    },
    {
      path: "/CameraPictures/2007/February/",
      name: "CameraPictures 2007 February",
      component: Gallery,
      props: {
        photosUrl: homeNav[1].nestedDir[5].nestedDir[1].nestedDir[0].navUrl,
      }
    },
    {
      path: "/CameraPictures/2007/March/",
      name: "CameraPictures 2007 March",
      component: Gallery,
      props: {
        photosUrl: homeNav[1].nestedDir[5].nestedDir[2].nestedDir[0].navUrl,
      }
    },
    {
      path: "/CameraPictures/2007/April/",
      name: "CameraPictures 2007 April",
      component: Gallery,
      props: {
        photosUrl: homeNav[1].nestedDir[5].nestedDir[3].nestedDir[0].navUrl,
      }
    },
    {
      path: "/CameraPictures/2007/May/",
      name: "CameraPictures 2007 May",
      component: Gallery,
      props: {
        photosUrl: homeNav[1].nestedDir[5].nestedDir[4].nestedDir[0].navUrl,
      }
    },
    {
      path: "/CameraPictures/2007/June/",
      name: "CameraPictures 2007 June",
      component: Gallery,
      props: {
        photosUrl: homeNav[1].nestedDir[5].nestedDir[5].nestedDir[0].navUrl,
      }
    },
    {
      path: "/CameraPictures/2007/July/",
      name: "CameraPictures 2007 July",
      component: Gallery,
      props: {
        photosUrl: homeNav[1].nestedDir[5].nestedDir[6].nestedDir[0].navUrl,
      }
    },
    {
      path: "/CameraPictures/2007/August/",
      name: "CameraPictures 2007 August",
      component: Gallery,
      props: {
        photosUrl: homeNav[1].nestedDir[5].nestedDir[7].nestedDir[0].navUrl,
      }
    },
    {
      path: "/CameraPictures/2007/September/",
      name: "CameraPictures 2007 September",
      component: Gallery,
      props: {
        photosUrl: homeNav[1].nestedDir[5].nestedDir[8].nestedDir[0].navUrl,
      }
    },
    {
      path: "/CameraPictures/2007/October/",
      name: "CameraPictures 2007 October",
      component: Gallery,
      props: {
        photosUrl: homeNav[1].nestedDir[5].nestedDir[9].nestedDir[0].navUrl,
      }
    },
    {
      path: "/CameraPictures/2007/November/",
      name: "CameraPictures 2007 November",
      component: Gallery,
      props: {
        photosUrl: homeNav[1].nestedDir[5].nestedDir[10].nestedDir[0].navUrl,
      }
    },
    {
      path: "/CameraPictures/2007/December/",
      name: "CameraPictures 2007 December",
      component: Gallery,
      props: {
        photosUrl: homeNav[1].nestedDir[5].nestedDir[11].nestedDir[0].navUrl,
      }
    },
    {
      path: "/CameraPictures/2008/",
      name: " CameraPictures 2008",
      component: LinkList,
      props: { navData: homeNav[1].nestedDir[6].nestedDir }
    },
    {
      path: "/CameraPictures/2008/January/",
      name: "CameraPictures 2008 January ",
      component: Gallery,
      props: {
        photosUrl: homeNav[1].nestedDir[6].nestedDir[0].nestedDir[0].navUrl,
      }
    },
    {
      path: "/CameraPictures/2008/February/",
      name: "CameraPictures 2008 February",
      component: Gallery,
      props: {
        photosUrl: homeNav[1].nestedDir[6].nestedDir[1].nestedDir[0].navUrl,
      }
    },
    {
      path: "/CameraPictures/2008/March/",
      name: "CameraPictures 2008 March",
      component: Gallery,
      props: {
        photosUrl: homeNav[1].nestedDir[6].nestedDir[2].nestedDir[0].navUrl,
      }
    },
    {
      path: "/CameraPictures/2008/April/",
      name: "CameraPictures 2008 April",
      component: Gallery,
      props: {
        photosUrl: homeNav[1].nestedDir[6].nestedDir[3].nestedDir[0].navUrl,
      }
    },
    {
      path: "/CameraPictures/2008/May/",
      name: "CameraPictures 2008 May",
      component: Gallery,
      props: {
        photosUrl: homeNav[1].nestedDir[6].nestedDir[4].nestedDir[0].navUrl,
      }
    },
    {
      path: "/CameraPictures/2008/June/",
      name: "CameraPictures 2008 June",
      component: Gallery,
      props: {
        photosUrl: homeNav[1].nestedDir[6].nestedDir[5].nestedDir[0].navUrl,
      }
    },
    {
      path: "/CameraPictures/2008/July/",
      name: "CameraPictures 2008 July",
      component: Gallery,
      props: {
        photosUrl: homeNav[1].nestedDir[6].nestedDir[6].nestedDir[0].navUrl,
      }
    },
    {
      path: "/CameraPictures/2008/August/",
      name: "CameraPictures 2008 August",
      component: Gallery,
      props: {
        photosUrl: homeNav[1].nestedDir[6].nestedDir[7].nestedDir[0].navUrl,
      }
    },
    {
      path: "/CameraPictures/2008/September/",
      name: "CameraPictures 2008 September",
      component: Gallery,
      props: {
        photosUrl: homeNav[1].nestedDir[6].nestedDir[8].nestedDir[0].navUrl,
      }
    },
    {
      path: "/CameraPictures/2008/October/",
      name: "CameraPictures 2008 October",
      component: Gallery,
      props: {
        photosUrl: homeNav[1].nestedDir[6].nestedDir[9].nestedDir[0].navUrl,
      }
    },
    {
      path: "/CameraPictures/2008/November/",
      name: "CameraPictures 2008 November",
      component: Gallery,
      props: {
        photosUrl: homeNav[1].nestedDir[6].nestedDir[10].nestedDir[0].navUrl,
      }
    },
    {
      path: "/CameraPictures/2008/December/",
      name: "CameraPictures 2008 December",
      component: Gallery,
      props: {
        photosUrl: homeNav[1].nestedDir[6].nestedDir[11].nestedDir[0].navUrl,
      }
    },
    {
      path: "/CameraPictures/2009/",
      name: " CameraPictures 2009",
      component: LinkList,
      props: { navData: homeNav[1].nestedDir[7].nestedDir }
    },
    {
      path: "/CameraPictures/2009/January/",
      name: "CameraPictures 2009 January ",
      component: Gallery,
      props: {
        photosUrl: homeNav[1].nestedDir[7].nestedDir[0].nestedDir[0].navUrl,
      }
    },
    {
      path: "/CameraPictures/2009/February/",
      name: "CameraPictures 2009 February",
      component: Gallery,
      props: {
        photosUrl: homeNav[1].nestedDir[7].nestedDir[1].nestedDir[0].navUrl,
      }
    },
    {
      path: "/CameraPictures/2009/March/",
      name: "CameraPictures 2009 March",
      component: Gallery,
      props: {
        photosUrl: homeNav[1].nestedDir[7].nestedDir[2].nestedDir[0].navUrl,
      }
    },
    {
      path: "/2006-Europe/",
      name: "Ruby and Sam in Europe 2006",
      component: LinkList,
      props: { navData: homeNav[3].nestedDir }
    },
    {
      path: "/2006-Europe/Flottsboro/",
      name: "Flottsboro",
      component: Gallery,
      props: {
        photosUrl: homeNav[3].nestedDir[0].nestedDir[0].navUrl,
      }
    },
  ],
});

export default router;
