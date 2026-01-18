const dataEN = {
  heroSection: {
    name: "Yağmur Gamze Çimen",
    greeting: "Hi,",
    headline: "Creative thinker",
    headline2: "Minimalism lover",
    intro:
      "Hi, I’m Yağmur. I’m a full-stack developer. If you are looking for a Developer who can craft solid and scalable frontend products with great user experiences. Let’s shake hands with me.",
    profileImage: "images/profile.jpeg",
    socials: [
      {
        logo: "images/github.png",
        altText: "Github",
        link: "https://github.com/ygmrci",
      },
      {
        logo: "images/linkedin.png",
        altText: "Linkedin",
        link: "https://www.linkedin.com/in/yagmurgamzecimen/",
      },
    ],
    ctaText: { hireMe: "Hire Me", viewProjects: "View Projects" },
  },
  nav: {
    skills: "Skills",
    projects: "Projects",
    hireMe: "Hire me",
    darkMode: "DARK MODE",
    switchToEn: "SWITCH TO ENGLISH",
    switchToTr: "SWITCH TO TURKISH",
  },

  skillsSection: {
    title: "Skills",
    description:
      "Technologies and tools I use to build modern, scalable web applications.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Next.js",
      "Tailwind",
      "Axios",
      "Cypress",
    ],
  },

  aboutSection: {
    title: "Profile",
    leftTitle: "Profile",
    rightTitle: "About Me",
    items: [
      { label: "Birth date", value: "10.10.2001" },
      { label: "City", value: "Ankara" },
      {
        label: "Education",
        value: "Hacettepe Univ. Geological Engineering, 2024",
      },
      { label: "Preferred Role", value: "Frontend, UI" },
    ],
    description:
      "I am a frontend developer focused on building modern, user-friendly, and testable web interfaces.I work mainly with React and Next.js and enjoy turning ideas into real products.",
  },

  projectsSection: {
    title: "Projects",
    cta: {
      viewSite: "View Site",
      comingSoon: "Coming Soon",
    },
    projects: [
      {
        id: "artStoryAI",
        title: "ARTSTORY AI",
        description: "Capstone project: AI-powered art story generation.",
        image: "ArtStoryAI1.png",
        tags: [
          "Next.js",
          "Redux",
          "Context API",
          "GPT-4 Turbo",
          "Tailwind",
          "Python",
        ],
        githubUrl: "https://github.com/ygmrci/ArtStoryAI",
        liveUrl: "",
      },
      {
        id: "rick",
        title: "RICK AND MORTY",
        description: "Rick and Morty character listing application.",
        image: "rick.png",
        tags: ["Next.js", "Axios", "SSR"],
        githubUrl: "https://github.com/ygmrci/rick-and-morty-wiki",
        liveUrl: "",
      },
      {
        id: "weather",
        title: "WEATHER APP",
        description: "Current weather application using Weather API.",
        image: "react-weather.png",
        tags: ["React", "React Router", "Weather API"],
        githubUrl: "https://github.com/ygmrci/weather-with-react",
        liveUrl: "",
      },
      {
        id: "movie",
        title: "MOVIE APP",
        description:
          "A movie website similar to TMDB, built using an external API.",
        image: "react_film.png",
        tags: ["React", "React Router", "Axios", "Material UI"],
        githubUrl: "https://github.com/ygmrci/React_movies",
        liveUrl: "",
      },
      {
        id: "pizza",
        title: "Pizza Order",
        description:
          "A React-based pizza ordering application where users can customize their pizza, manage quantities, and place orders. End-to-end tests are implemented with Cypress.",
        image: "pizza.png",
        tags: ["React", "Tailwind", "Cypress"],
        githubUrl: "https://github.com/ygmrci/Order_Pizza_With_React",
        liveUrl: "https://order-pizza-with-react.vercel.app/",
      },
      {
        id: "moneyCard",
        title: "MIGROS MONEY CARD",
        description: "An application built using OOP inheritance principles.",
        image: "migros.png",
        tags: ["HTML", "CSS", "JavaScript"],
        githubUrl: "https://github.com/ygmrci/Migros_Money_Kart",
        liveUrl: "",
      },
    ],
  },
  contactSection: {
    title: "Let’s work together on\nyour next product.",
    email: "yagmurgamzecimen@gmail.com",
    phone: "+90 541 696 57 23",
    links: [
      { key: "blog", label: "Personal Blog", href: "#" },
      { key: "github", label: "Github", href: "https://github.com/ygmrci" },
      {
        key: "linkedin",
        label: "Linkedin",
        href: "https://www.linkedin.com/in/yagmurgamzecimen/",
      },
    ],
  },
  axiosSection: {
    title: "Axios Demo (Reqres POST)",
    description:
      "We create a payload based on selected language and POST it to Reqres.",
    button: "POST /workintech",
  },
};
export default dataEN;
