import mexplayImage from "../assets/images/Mexplay.webp";
import spotifyReplayImage from "../assets/images/SpotifyReplay.webp";
import toDoListImage from "../assets/images/ToDoList.webp";
import ts808Image from "../assets/images/TS-808.webp";
import cinehubImage from "../assets/images/Cinehub.webp";

export const PROJECTS = [
  {
    title: "Security Bank App",
    description:
      "A mobile app developed for both Android and iOS, designed to streamline and enhance banking operations for users. The app provides real-time account management, transaction monitoring, and financial planning tools, all integrated with advanced security features such as biometric authentication and encryption. My involvement in this project began in 2023, collaborating closely with various teams across the company to deliver a seamless and secure banking experience.",
    image: mexplayImage,
    tags: ["react", "javascript"],
    codeUrl: null,
    siteUrl: "https://mexplay.mx/",
    id: 0,
    technologies: [
      { name: "React Native", url: "https://reactjs.org/" },
      { name: "Typescript", url: "https://www.typescriptlang.org/" },
      { name: "Redux", url: "https://redux.js.org/" },
      { name: "Sass", url: "https://sass-lang.com/" },
      { name: "i18next", url: "https://www.i18next.com/" },
    ],
  },
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
      { name: "React", url: "https://react.dev/" },
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
      { name: "React", url: "https://react.dev/" },
      { name: "Typescript", url: "https://www.typescriptlang.org/" },
      { name: "tRPC", url: "https://trpc.io/" },
      { name: "Tailwind", url: "https://tailwindcss.com/" },
      { name: "NextAuth", url: "https://next-auth.js.org/" },
      { name: "Turborepo", url: "https://turbo.build/" },
      {
        name: "zustand",
        url: "https://docs.pmnd.rs/zustand/getting-started/introduction",
      },
    ],
  },
  {
    title: "2ner",
    description:
      "2ner is a versatile online tuner designed to help musicians of all levels keep their instruments perfectly in tune. Whether you’re a guitarist, bassist, violinist, or any other stringed instrument player, 2ner offers precise, real-time tuning with a user-friendly interface.",
    image: toDoListImage,
    tags: ["react", "javascript"],
    codeUrl: "https://github.com/felipeantoniob/todo-list#readme",
    siteUrl: "https://next-todo-app-two.vercel.app",
    id: 4,
    technologies: [
      { name: "Vite", url: "https://vitejs.dev/" },
      { name: "Typescript", url: "https://www.typescriptlang.org/" },
      { name: "Tailwind", url: "https://tailwindcss.com/" },
      { name: "React", url: "https://react.dev/" },
    ],
  },
  {
    title: "Cinehub",
    description:
      "A movie database app that allows users to search for movies and view details such as the plot summary, genres, and actors and uses the TMDB API to retrieve data on the movies.",
    image: cinehubImage,
    tags: ["react", "javascript"],
    codeUrl: "https://github.com/felipeantoniob/cinehub#readme",
    siteUrl: "https://cinehub.vercel.app",
    id: 2,
    technologies: [
      { name: "Next.js", url: "https://nextjs.org/" },
      { name: "Typescript", url: "https://www.typescriptlang.org/" },
      { name: "Tailwind", url: "https://tailwindcss.com/" },
      { name: "tRPC", url: "https://trpc.io/" },
      { name: "Prisma", url: "https://www.prisma.io/" },
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
] as const;
