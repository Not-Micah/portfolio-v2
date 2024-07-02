export const navLinks = [
    { label: "About", link: "#about" },
    { label: "Experience", link: "#experience" },
    { label: "Work", link: "#work" },
    { label: "Contact", link: "#contact" }
]

export const experiences = [
  {
    label: "Game Development",
    key: "game",
    date: "August 2022 - December 2022",
    display: (
      <ul className="list">
        <li className="list-item">Although quite unconventional, I decided to learn game development through the <span className="underline">Python</span> library <span className="underline">&quot;Pygame&quot;</span>.</li>
        <li className="list-item">In late November 2023, I published a game on itch.io called <a href="" className="underline">The Impossible Platformer</a>.</li>
        <li className="list-item">Through Pygame I grew my programming logic extensively. Additionally, I explored Gidot for roughly a month before deciding to quit game development.</li>
      </ul>
    ),
  },
  {
    label: "Mobile App Development",
    key: "app",
    date: "December 2022 - August 2023",
    display: (
      <ul className="list">
        <li className="list-item">Again, I took a rather unconventional approach to app development through <span className="underline">Python&apos;s Kivy/KivyMD library</span>.</li>
        <li className="list-item">Over the course of summer, I developed and published four mobile apps on the Google Play Store called the <a href="" className="underline">&quot;Simple Work Series&quot;</a>.</li>
        <li className="list-item">This was my first delve into the concept of front-end and back-end development. In addition, I learnt quite a bit on debugging with Android Studio and packaging applications with Buildozer.</li>
        <li className="list-item">After some time of using Kivy, I switched to <span className="underline">Kotlin</span> and gained some basic usage with the language.</li>
      </ul>
    ),
  },
  {
    label: "Web Development",
    key: "web",
    date: "November 2023 - Current",
    display: (
      <ul className="list">
        <li className="list-item">Web development is by far where I&apos;m most passionate in.</li>
        <li className="list-item">Currently, I work with the technologies: <span className="underline">React, Tailwind, NextJS and Firebase</span> with a preference for <span className="underline">TypeScript</span> over JavaScript.</li>
        <li className="list-item">Despite the short time in web development, I have published a number of websites such as <span className="underline">Verbum, Versle and Me2</span>, which can you see below.</li>
        <li className="list-item">I plan to further develop my skills in web development and pursue it in the near future.</li>
      </ul>
    ),
  },
];

export const workProjects = [
  {
    label: "Verbum",
    description: "A web app with a database of 300+ verses, allowing users to filter verses based on different criteria such as topics.",
    techs: ["React", "NextJS", "Tailwind CSS", "Mongo"],
    imgPath: "/verbum.png",
    link: "https://verbum-beta.vercel.app"
  },
  {
    label: "Versle",
    description: "A simple Wordle-style game, but instead of guessing the daily word, you guess the bible book which the daily verse comes from!",
    techs: ["React", "NextJS", "Tailwind CSS", "Mongo"],
    imgPath: "/versle.png",
    link: "https://versle.vercel.app"
  },
  {
    label: "Micahfy",
    description: "A Spotify clone with basic functionality such as account management, adding/removing/liking songs and playing songs.",
    techs: ["React", "NextJS", "Tailwind CSS", "Supabase"],
    imgPath: "/micahfy.png",
    link: "https://micahfy.vercel.app"
  },
  {
    label: "Me2",
    description: "Social media app for students; algorithm based filtering allows students with similar interests to chat and share socials.",
    techs: ["React", "NextJS", "Tailwind CSS", "Firebase"],
    imgPath: "/me2.png",
    link: ""
  },
];

export const statistics = [
  {display: (
    <div className="flex flex-col gap-y-2">
      <p className="text-lg font-medium">Peaking in <span className="underline">July 2024</span> with</p>
      <span
          className="bg-clip-text text-transparent text-5xl font-extrabold font-nerd"
          style={{
            backgroundImage: 'linear-gradient(90deg, #f56565, #feb2b2)',
          }}
        >
          140,000+
        </span>
      <p className="text-lg font-medium"><span className="italic mr-1">(unique)</span> monthly visitors</p>
    </div>
  )},
  {display: (
    <div className="flex flex-col gap-y-2">
      <p className="text-lg font-medium">Accumulating over</p>
      <span
          className="bg-clip-text text-transparent text-5xl font-extrabold font-nerd"
          style={{
            backgroundImage: 'linear-gradient(90deg, #f56565, #feb2b2)',
          }}
        >
          1,000,000+
        </span>
      <p className="text-lg font-medium"><span className="italic mr-1">(lifetime)</span> page visits</p>
    </div>
  )}
]

import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export const socials = [
  {icon: <FaGithub />, link: "https://github.com/Not-Micah"},
  {icon: <FaInstagram />, link: "https://www.instagram.com/micahtid/"},
  {icon: <FaDiscord />, link: "https://discord.gg/xt6xHhv3"},
  {icon: <SiGmail />, link: ""}
]