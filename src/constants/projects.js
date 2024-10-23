import bootcampImage from "../assets/CSE.gif";
import devswearImage from "../assets/devswear.jpeg";
import cubeRacerImage from "../assets/cube-racer-2.jpeg";
import wallpaperAppImage from "../assets/wallpaper.jpeg";
import CNImage from "../assets/CN.gif";
const flappyBirdImage = "https://i.ibb.co/MG5RmTt/flappy-bird.jpg";

export const projects = [
    {
        image: devswearImage,
        title: "E-commerce website",
        projectLink: "https://devswear.vercel.app/",
        codeLink: "https://github.com/Brijendra-Singh2003/devswear",
        description: "An e-commerce platform showcasing themed apparel and accessories with user authentication, cart functionality and payment gateway integration.",
        tags: ["frontend", "web", "backend", "full-stack"],
        technologies: ["Next.js", "React.js", "Postgres", "Stripe"],
    },
    {
        image: bootcampImage,
        title: "Collage, Freshers Portal",
        projectLink: "https://csebootcamp2.vercel.app/",
        codeLink: "https://github.com/Brijendra-Singh2003/BootCamp_2.0",
        description: "A portal for freshers to learn about their own batchmates, seniors, societies and access shared resources like notes, questions, and slides.",
        tags: ["frontend", "web", "backend", "full-stack"],
        technologies: ["Next.js", "React.js", "MongoDB"],
    },
    {
        image: wallpaperAppImage,
        title: "Wallpaper App",
        codeLink: "https://github.com/Brijendra-Singh2003/wallpaper_app/",
        description: "A react-native app to browse and download wallpapers.",
        tags: ["frontend", "app",],
        technologies: ["React-Native", "Expo"],
    },
    {
        image: CNImage,
        title: "CN IIIT-BH website",
        projectLink: "https://coding-ninja.vercel.app/",
        codeLink: "https://github.com/Brijendra-Singh2003/Coding-Ninja",
        description: "A website for our collage's Coding Ninjas Student Chapter to post information about upcomming events as well as past events organised by them.",
        tags: ["frontend", "web",],
        technologies: ["React.js", "TailwindCSS"],
    },
    {
        image: cubeRacerImage,
        title: "Cube Run",
        codeLink: "https://github.com/Brijendra-Singh2003/cube-run",
        description: "A mobile game inspired by the popular game \"Traffic Racer\" where players navigate a car through busy traffic, aiming to go as fast as possible while avoiding collisions.",
        tags: ["app", "game"],
        technologies: ["C#", "Unity"],
    },
    {
        image: flappyBirdImage,
        title: "Flappy Bird",
        codeLink: "https://github.com/Brijendra-Singh2003/flappy-birf",
        description: "A game made with Unity where the player have to cross as many obsticles as possible without colliding with them.",
        tags: ["app", "game"],
        technologies: ["C#", "Unity"],
    },
];