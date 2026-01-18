const dataTR = {
  heroSection: {
    name: "Yağmur Gamze Çimen",
    greeting: "Merhaba,",
    headline: "Yaratıcı düşünen",
    headline2: "Minimalizm seven",
    intro:
      "Merhaba, ben Yağmur. Frontend odaklı çalışan bir full-stack geliştiriciyim. Ölçeklenebilir, sağlam ve kullanıcı deneyimi güçlü arayüzler geliştirmek istiyorsanız, tanışalım.",
    profileImage: "images/profile.jpeg",
    socials: [
      {
        logo: "images/github.png",
        altText: "Github",
        link: "https://github.com/ygmrci",
      },
      {
        logo: "images/linkedin.png",
        altText: "LinkedIn",
        link: "www.linkedin.com/in/yagmurgamzecimen",
      },
    ],
    ctaText: { hireMe: "Hire Me", viewProjects: "Projeleri Gör" },
  },
  nav: {
    skills: "Yetenekler",
    projects: "Projeler",
    hireMe: "İletişime Geç",
    darkMode: "KARANLIK MOD",
    switchToEn: "ENGLISH'YE GEÇ",
    switchToTr: "TÜRKÇE'YE GEÇ",
  },

  skillsSection: {
    title: "Yetenekler",
    description:
      "Modern ve ölçeklenebilir web uygulamaları geliştirirken kullandığım teknolojiler ve araçlar.",
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
    title: "Profil",
    leftTitle: "Profil",
    rightTitle: "Hakkımda",
    items: [
      { label: "Doğum tarihi", value: "10.10.2001" },
      { label: "İkamet Şehri", value: "Ankara" },
      {
        label: "Eğitim Durumu",
        value: "Hacettepe Ünv. Jeoloji Müh. Lisans, 2024",
      },
      { label: "Tercih Ettiği Rol", value: "Frontend, UI" },
    ],
    description:
      "Modern, kullanıcı dostu ve test edilebilir web arayüzleri geliştirmeye odaklanmış bir ön uç geliştiricisiyim. Ağırlıklı olarak React ve Next.js ile çalışıyorum ve fikirleri gerçek ürünlere dönüştürmekten keyif alıyorum.",
  },

  projectsSection: {
    title: "Projeler",
    cta: {
      viewSite: "Siteyi Aç",
      comingSoon: "Yakında",
    },
    projects: [
      {
        id: "artStoryAI",
        title: "ARTSTORY AI",
        description:
          "Bitirme projesi: Yapay zeka destekli sanat hikâyesi oluşturma.",
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
        description: "Rick and Morty karakter listeleme uygulaması.",
        image: "rick.png",
        tags: ["Next.js", "Axios", "SSR"],
        githubUrl: "https://github.com/ygmrci/rick-and-morty-wiki",
        liveUrl: "",
      },
      {
        id: "weather",
        title: "HAVA DURUMU",
        description:
          "Weather API kullanılarak geliştirilmiş hava durumu uygulaması.",
        image: "react-weather.png",
        tags: ["React", "React Router", "Weather API"],
        githubUrl: "https://github.com/ygmrci/weather-with-react",
        liveUrl: "",
      },
      {
        id: "movie",
        title: "FİLM UYGULAMASI",
        description:
          "TMDB benzeri, harici API kullanılarak geliştirilmiş film sitesi.",
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
        title: "MİGROS MONEY CARD",
        description:
          "Nesne yönelimli programlama (OOP) ile geliştirilmiş uygulama.",
        image: "migros.png",
        tags: ["HTML", "CSS", "JavaScript"],
        githubUrl: "https://github.com/ygmrci/Migros_Money_Kart",
        liveUrl: "",
      },
    ],
  },

  contactSection: {
    title: "Yeni ürünün için\nbirlikte çalışalım.",
    email: "yagmurgamzecimen@gmail.com",
    phone: "+90 541 696 57 23",
    links: [
      { key: "blog", label: "Kişisel Blog", href: "#" },
      { key: "github", label: "Github", href: "https://github.com/ygmrci" },
      {
        key: "linkedin",
        label: "Linkedin",
        href: "https://www.linkedin.com/in/yagmurgamzecimen/",
      },
    ],
  },
};
export default dataTR;
