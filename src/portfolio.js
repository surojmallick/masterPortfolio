/* Change this file to get your personal Portfolio */

// Website related settings
const settings = {
  isSplash: true,
};

// SEO Related settings
const seo = {
  title: "Suroj Mallick's Portfolio",
  description:
    "Graphic Designer, App & Web Developer, and Video Editor creating clean, modern, and impactful digital experiences.",
  og: {
    title: "Suroj Mallick Portfolio",
    type: "website",
    url: "https://surojmallick.com/",
  },
};

// Home Page
const greeting = {
  title: "Hi, I'm Suroj Mallick 👋",
  logo_name: "Suroj Mallick",
  nickname: "suroj",
  subTitle:
    "Graphic Designer • App & Web Developer • Video Editor",
  resumeLink: "",
  portfolio_repository: "https://github.com/SurojMallick",
  githubProfile: "https://github.com/SurojMallick",
};

// Social Media Links
const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/SurojMallick",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/",
    fontAwesomeIcon: "fa-instagram",
    backgroundColor: "#E4405F",
  },
  {
    name: "YouTube",
    link: "https://youtube.com/",
    fontAwesomeIcon: "fa-youtube",
    backgroundColor: "#FF0000",
  },
];

// WHAT I DO SECTION (UPDATED)
const skills = {
  data: [
    {
      title: "Graphic Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Logo, poster, banner & social media design",
        "⚡ Branding, thumbnails & creative visuals",
        "⚡ Clean, modern and eye‑catching designs",
      ],
      softwareSkills: [
        { skillName: "Photoshop", fontAwesomeClassname: "simple-icons:adobephotoshop" },
        { skillName: "Illustrator", fontAwesomeClassname: "simple-icons:adobeillustrator" },
        { skillName: "Canva", fontAwesomeClassname: "simple-icons:canva" },
      ],
    },
    {
      title: "App & Web Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Responsive websites & web apps",
        "⚡ Android apps & progressive web apps",
        "⚡ Fast, SEO‑friendly and scalable builds",
      ],
      softwareSkills: [
        { skillName: "HTML", fontAwesomeClassname: "simple-icons:html5" },
        { skillName: "CSS", fontAwesomeClassname: "simple-icons:css3" },
        { skillName: "JavaScript", fontAwesomeClassname: "simple-icons:javascript" },
        { skillName: "React", fontAwesomeClassname: "simple-icons:react" },
        { skillName: "Flutter", fontAwesomeClassname: "simple-icons:flutter" },
      ],
    },
    {
      title: "Video Editing",
      fileName: "VideoImg",
      skills: [
        "⚡ YouTube, reels & short‑form videos",
        "⚡ Color grading, transitions & motion graphics",
        "⚡ Clean, engaging and professional edits",
      ],
      softwareSkills: [
        { skillName: "Premiere Pro", fontAwesomeClassname: "simple-icons:adobepremierepro" },
        { skillName: "After Effects", fontAwesomeClassname: "simple-icons:adobeaftereffects" },
        { skillName: "CapCut", fontAwesomeClassname: "simple-icons:capcut" },
      ],
    },
  ],
};

// REMOVED SECTIONS (Education, Experience, Open Source pages)
const competitiveSites = { competitiveSites: [] };
const degrees = { degrees: [] };
const certifications = { certifications: [] };
const experience = null;

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "A collection of my work in design, development, and video editing.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_avatar.png",
    description:
      "Feel free to reach out for graphic design, web/app development, or video editing work.",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
