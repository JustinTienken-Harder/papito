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
  ],
});

export default router;
