// src/data/projectsData.js
import crm from "../../assets/images/crm/crm.png";
import ecommerce from "../../assets/images/ecommerce/ecommerce.png";
import footballanalytics from "../../assets/images/football/footballanalytics.png";
import restaurant from "../../assets/images/restaurant/restaurant.png";

const projects = [
  {
    id: 1,
    title: "E-commerce Website",
    image: ecommerce,
    fullDescription:
      "Full-stack MERN app with product management, online payments, and user authentication.",
    links: {
      live: "https://your-ecommerce-site.com",
      github: "https://github.com/FouratMejri99/ecommerce",
    },
  },
  {
    id: 2,
    title: "CRM Dashboard",
    image: crm,
    fullDescription:
      "Full-stack MERN solution for managing clients, leads, and sales data with analytics.",
    links: {
      live: "https://crm-marketplace-gamma.vercel.app/login",
      github: "https://github.com/FouratMejri99/CrmMarketplace.git",
    },
  },
  {
    id: 3,
    title: "Football Stats",
    image: footballanalytics,
    fullDescription:
      "Full-stack MERN app for football analytics, stats, and reports.",
    links: {
      live: "https://xmatch.vercel.app/",
      github: "https://github.com/FouratMejri99/xmatch",
    },
  },
  {
    id: 4,
    title: "Restaurant Website",
    image: restaurant,
    fullDescription:
      "Full-stack MERN website with menu display, online reservations, and admin panel.",
    links: {
      live: "https://restaurant-ag8a.vercel.app/",
      github: "https://github.com/FouratMejri99/restaurant.git",
    },
  },
];

export default projects;
