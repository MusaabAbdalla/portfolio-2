import project1 from "../projects/project-1.jpg";
import project2 from "../projects/project-2.jpg";
import project3 from "../projects/project-3.jpg";

export const HERO_CONTENT = `Hi! I'm Musaab Abdalla, a front-end developer with a passion for creating clean, user-friendly websites and applications. I have hands-on experience with HTML, CSS, Tailwind, Bootstrap, React, and Next.js. I'm also expanding my skills into back-end development to become a more versatile developer. With an eye for design and a love for coding, I enjoy bringing ideas to life on the web. Let’s build something great together!`;

export const ABOUT_TEXT = `I am a passionate and versatile front-end developer who recently completed my studies in Front-End Development at Noroff. I have a strong foundation in building efficient, user-friendly web applications, with expertise in technologies like React, Next.js, HTML, CSS, Tailwind, and Bootstrap. My journey in web development started with a fascination for design and functionality, and it has grown into a career where I constantly seek to learn and adapt to new challenges. I enjoy working in collaborative environments and love solving problems to deliver high-quality solutions. Outside of coding, I like staying active and exploring new technologies.`;

export const PROJECTS = [
  {
    title: "Holidaze",
    image: project1,
    description:
      "Holidaze is a modern accommodation booking site that allows users to browse, book, and manage venues. This project was built as part of a semester assignment to demonstrate modern web development techniques using Vite, React, Tailwind CSS, and shadcn.",
    technologies: ["HTML", "CSS", "React", "TailwindCss", "Vite"],
    liveUrl: "https://musaab-abdalla-holidaze.netlify.app",
    githubUrl: "https://github.com/MusaabAbdalla/project-exam-2/tree/main",
  },
  {
    title: "eStore",
    image: project2,
    description:
      "eStore is a React-powered e-commerce store is a great example of using React, React Router, Context API, and Tailwind CSS. It features reusable components and manages state smoothly with the useReducer hook, creating a fun and seamless shopping experience.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
    liveUrl: "https://musaab-estore.netlify.app/",
    githubUrl: "https://github.com/MusaabAbdalla/eStore/tree/main",
  },
  {
    title: "Community Auction",
    image: project3,
    description: `An auction site is looking to launch a website where users can add items to be bid on and bid on items other users have put up for auction.

When a new user joins the website, they are given 1000 credits to use on the site. They can get credits by selling items and use credit by buying items. Non-registered users can search through the listings, but only registered users can make bids on listings.`,
    technologies: ["HTML", "CSS", "VanillaJS", "Bootstrap"],
    liveUrl: "https://musaababdalla.github.io/Semester-Project-2/listings.html",
    githubUrl: "https://github.com/MusaabAbdalla/Semester-Project-2",
  },
];

export const CONTACT = {
  address: "Brattholmneset 4040,Alesund, Norway",
  phoneNo: "+17 4562 669 00 ",
  email: "Jamboosan209@gmail.com",
};
