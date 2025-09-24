import course from "../../assets/images/courses.webp";

const courses = [
  {
    id: 1,
    title: "Full-Stack MERN E-commerce Website",
    image: course, // same image for both
    description:
      "Build a full-stack MERN e-commerce application with product management, online payments, and user authentication.",
    links: {
      live: "https://your-ecommerce-site.com",
      github: "https://github.com/FouratMejri99/ecommerce",
    },
  },
  {
    id: 2,
    title: "Full-Stack JS Social Media App",
    image: course, // same image
    description:
      "Create a social media platform using Node.js, Express, React, and MongoDB with real-time chat and user authentication.",
    links: {
      live: "https://your-socialmedia-app.com",
      github: "https://github.com/FouratMejri99/social-media-app",
    },
  },
];

export default courses;
