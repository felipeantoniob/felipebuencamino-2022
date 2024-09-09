import mexplayImage from "../assets/images/Mexplay.webp";
import spotifyReplayImage from "../assets/images/SpotifyReplay.webp";
import toDoListImage from "../assets/images/ToDoList.webp";
import ts808Image from "../assets/images/TS-808.webp";
import cinehubImage from "../assets/images/Cinehub.webp";

export const PROJECTS = [
  {
    title: "Mexplay",
    description:
      "An online casino website and mobile app catering to the Mexican market that offers users the opportunity to play a wide range of casino games, bet on sports, and win prizes.",
    image: mexplayImage,
    tags: ["react", "javascript"],
    codeUrl: null,
    siteUrl: "https://mexplay.mx/",
    id: 0,
    technologies: [
      { name: "React", url: "https://reactjs.org/" },
      { name: "Typescript", url: "https://www.typescriptlang.org/" },
      { name: "Redux", url: "https://redux.js.org/" },
      { name: "styled-components", url: "https://styled-components.com/" },
      { name: "i18next", url: "https://www.i18next.com/" },
    ],
  },
  {
    title: "Spotify Replay",
    description:
      "A web app where users can view their top artists, tracks, and genres on Spotify. They can also generate playlists based on their personalized data to share with friends.",
    image: spotifyReplayImage,
    tags: ["react", "javascript"],
    codeUrl: "https://github.com/felipeantoniob/spotify-replay#readme",
    siteUrl: "https://spotify-replay.vercel.app/",
    id: 1,
    technologies: [
      { name: "Next.js", url: "https://nextjs.org/" },
      { name: "Typescript", url: "https://www.typescriptlang.org/" },
      { name: "tRPC", url: "https://trpc.io/" },
      { name: "Prisma", url: "https://www.prisma.io/" },
      { name: "Tailwind", url: "https://tailwindcss.com/" },
      {
        name: "zustand",
        url: "https://docs.pmnd.rs/zustand/getting-started/introduction",
      },
    ],
  },
  {
    title: "TS-808",
    description:
      "An interactive drum machine website where users can play 16 drum pads with their mouse or keyboard. The drum samples were sampled from a Roland TR-808 drum machine.",
    image: ts808Image,
    tags: ["react", "javascript"],
    codeUrl: "https://github.com/felipeantoniob/TS-808#readme",
    siteUrl: "https://ts-808.vercel.app/",
    id: 3,
    technologies: [
      { name: "Vite", url: "https://vitejs.dev/" },
      { name: "Vitest", url: "https://vitest.dev/" },
      { name: "Typescript", url: "https://www.typescriptlang.org/" },
      { name: "Tailwind", url: "https://tailwindcss.com/" },
    ],
  },
  {
    title: "To-Do List",
    description:
      "A simple to-do list website where users can add items to the list, mark items as complete or incomplete, edit items, and delete items.",
    image: toDoListImage,
    tags: ["react", "javascript"],
    codeUrl: "https://github.com/felipeantoniob/todo-list#readme",
    siteUrl: "https://next-todo-app-two.vercel.app",
    id: 4,
    technologies: [
      { name: "Next.js", url: "https://nextjs.org/" },
      { name: "Typescript", url: "https://www.typescriptlang.org/" },
      { name: "Bootstrap", url: "https://getbootstrap.com/" },
      { name: "Sass", url: "https://sass-lang.com/" },
      { name: "Framer-motion", url: "https://www.framer.com/motion/" },
      { name: "Cypress", url: "https://docs.cypress.io/" },
    ],
  },
];
