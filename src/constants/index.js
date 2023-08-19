import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    tifin_app,
    carrent,
    jobit,
    tripguide,
    threejs,
    logo_ggits,
    st_logo,
    carPrice,
    SM_app,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "450+ DSA Questions",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    
  ];
  
  const experiences = [
    {
      title: "ST. Antony's HR. SEC. School",
      company_name: "Sonkatch",
      icon: st_logo,
      iconBg: "#383E56",
      date: "July 2018 - April 2020",
     
    },
    {
      title: "Gyan Ganga Institute of Technology and Science",
      company_name: "Jabalpur",
      icon: logo_ggits,
      iconBg: "#E6DEDD",
      date: "September 2020 - Present",
     
    },
    
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Jabalpur Tifin Service",
      description:
        "Jabalpur Tifin Service (JTS) is a web application that enables users to explore and order tifin services available in the Jabalpur area",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "Express.js",
          color: "pink-text-gradient",
        },
      ],
      image: tifin_app,
      source_code_link: "https://github.com/ankit-dot/Tifin-app",
    },
    {
      name: "Car Price Prediction",
      description:
        " Car Price Prediction is an website, where data meets intuition. Harnessing the power of Flask and cutting-edge Machine Learning, we offer accurate and reliable predictions for the Price of your second hand Car",
      tags: [
        {
          name: "Flask",
          color: "blue-text-gradient",
        },
        {
          name: "Machine Learning",
          color: "green-text-gradient",
        },
        {
          name: "Python",
          color: "pink-text-gradient",
        },
      ],
      image: carPrice,
      source_code_link: "https://github.com/ankit-dot/CarPricePrediction_app",
    },
    {
      name: "Social Media App",
      description:
        "our Social Media App built on the dynamic MERN stack. Seamlessly combining the power of MongoDB, Express.js, React, and Node.js.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "nodejs",
          color: "pink-text-gradient",
        },
        {
          name: "expressjs",
          color: "green-text-gradient",
        },
      ],
      image: SM_app,
      source_code_link: "https://github.com/ankit-dot/SocialMediaApp",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };