import { kebabCase, kebabArray } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
    id: 0,
    title: "Farmsgate Web Application",
    desc: "A dynamic marketplace designed for farms to sell their produce. Built with React for seamless interactivity and TailwindCSS for a responsive, modern design.",
    img: "/static/projects/Farmsgate.png",
    link: "https://farmsgate-frontend-pb.vercel.app/",
    tags: ["React", "TailwindCSS", "CSS", "Firebase"],
  },
  {
    id: 1,
    title: "CerebralHub",
    desc: "A visually appealing and highly interactive business website for an advertising agency based in Lagos. Designed with user experience in mind, ensuring effortless navigation and a modern aesthetic.",
    img: "/static/projects/cerebral.png",
    link: "https://www.cerebralhub.com",
    tags: ["HTML", "CSS", "Javascript"],
  },
  {
    id: 2,
    title: "Gamsu Foundation",
    desc: "A clean, minimalistic webpage for the Gamaliel & Susan Onosode Foundation, focusing on simplicity and ease of use while highlighting the foundation's mission and initiatives.",
    img: "/static/projects/gamsu.png",
    link: "https://www.onosodefoundation.org/",
    github: "",
    tags: ["React", "CSS", "JSON"],
  },
  {
    id: 3,
    title: "Odufa's Landing Page",
    desc: "A vibrant and engaging landing page designed to showcase the music and unique style of Odufa, a rising Nigerian pop talent. The design highlights his artistic persona while offering an immersive experience for visitors.",
    img: "/static/projects/odufa.png",
    link: "https://odufa.vercel.app",
    tags: ["React", "TailwindCSS", "API"],
  },
  {
    id: 4,
    title: "NITDA POC Project",
    desc: "An interactive web-based video designed as a proof of concept for NITDA, demonstrating innovative solutions and showcasing the potential of digital technology in a user-friendly format.",
    img: "/static/projects/nitda.png",
    link: "https://project774-poc.vercel.app/",
    tags: ["HTML", "CSS"],
  },
  {
    id: 5,
    title: "Utricle Studios",
    desc: "A sleek, visually striking website created for a Lagos-based animation studio, showcasing their portfolio of creative work and highlighting their unique animation style and expertise.",
    img: "/static/projects/utricle.png",
    link: "https://utricle.netlify.app/",
    tags: ["React", "TailwindCSS"],
  },
  {
    id: 6,
    title: "Admin Dashboard",
    desc: "A highly interactive and intuitive admin dashboard for the Farmsgate web app, designed to provide seamless management of the marketplace with real-time data and user-friendly controls.",
    img: "/static/projects/admin_dash.png",
    link: "https://farmsgate-admin.vercel.app/",
    tags: ["React", "TailwindCSS"],
  },
  {
    id: 7,
    title: "NEF Foods",
    desc: "An easy-to-navigate marketplace offering a wide range of food items, available for purchase in both bulk and smaller quantities, catering to various needs and preferences.",
    img: "/static/projects/neffoods.png",
    link: "https://neffoodmarket.com/",
    tags: ["Wordpress"],
  },
  {
    id: 8,
    title: "Techlink",
    desc: "A pet project designed to streamline and simplify the organization and discovery of tech events in Nigeria, making it easier for professionals to stay updated and connected within the tech community.",
    img: "/static/projects/techlink.png",
    link: "https://techlink-fe.vercel.app/",
    tags: ["React", "Tailwind CSS"],
  },
];

export const allTags = []

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag))
});

export const allKebabTags = allTags.map(tag => (
  kebabCase(tag)
))

export default projects
