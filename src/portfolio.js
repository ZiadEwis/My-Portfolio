/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Ziad AbdElhaleem",
  title: "Hi all, I'm Ziad",
  subTitle: emoji(
    "Computer and Communication Engineering student with strong foundations in backend development, object-oriented design, and database systems. Experienced in building scalable applications using Spring Boot, ASP.NET Core, and SQL, with strong problem-solving skills and competitive programming background. 🚀"
  ),
  resumeLink: "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ZiadEwis",
  linkedin: "https://www.linkedin.com/in/ziad-abdelhaleem/",
  gmail: "ziadabdelhaleem63@gmail.com",
  // gitlab: "",
  // facebook: "",
  // medium: "",
  // stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "BACKEND DEVELOPER PASSIONATE ABOUT BUILDING SCALABLE AND ROBUST APPLICATIONS",
  skills: [
    emoji(
      "⚡ Build scalable backend services using Spring Boot and ASP.NET Core with RESTful APIs"
    ),
    emoji("⚡ Design and manage relational databases with MySQL and SQL Server"),
    emoji(
      "⚡ Apply OOP, SOLID principles, and clean architecture to write maintainable code"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "Spring Boot",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: ".NET",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Alexandria University",
      logo: require("./assets/images/alexandriaUniLogo.png"),
      subHeader: "Bachelor of Computer and Communication Engineering",
      duration: "Expected Graduation: August 2028",
      desc: "GPA: 3.61",
      descBullets: [
        "Sawiris Distinction Scholarship (SDS) — Fully funded scholarship awarded to top 50 students in Egypt"
      ]
    },
    {
      schoolName: "DEPI — Full Stack .NET Developer Track",
      logo: require("./assets/images/depiLogo.png"),
      subHeader: "Ministry of Communications and Information Technology (MCIT)",
      duration: "Nov 2025 — Present",
      desc: "Digital Egypt Pioneers Initiative (DEPI) — Full Stack .NET Developer training program.",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend Development", //Insert stack or technology you have experience in
      progressPercentage: "85%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Data Structures & Algorithms",
      progressPercentage: "80%"
    },
    {
      Stack: "Database Design",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Member",
      company: "ACM Student Chapter Alexandria",
      companylogo: require("./assets/images/acmLogo.png"),
      date: "Oct 2024 — Present",
      desc: "Worked on ACM website using React and Spring Boot and contributed to organizing programming contests and technical events.",
      descBullets: []
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "APPLICATIONS AND SYSTEMS I HAVE BUILT",
  projects: [
    {
      image: require("./assets/images/projectIcon.png"),
      projectName: "Book-Store E-Commerce System",
      projectDesc: "Full-stack e-commerce platform built using React, Node.js (Express), and MySQL. Includes authentication, cart, orders, admin dashboard, and fully normalized relational database with 15+ tables.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/SeifShaheen/Book-Store"
        }
      ]
    },
    {
      image: require("./assets/images/projectIcon.png"),
      projectName: "Skill Forge Learning Platform",
      projectDesc: "Java desktop Learning Management System using Swing and SOLID principles. Includes role-based dashboards, quiz engine, course management, and JSON persistence.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/ZiadEwis/Skill-Forge-2"
        }
      ]
    },
    {
      image: require("./assets/images/projectIcon.png"),
      projectName: "Sudoku Game Application",
      projectDesc: "Java Swing Sudoku game using MVC architecture with puzzle generator, validation engine, and auto-solver.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/ZiadEwis/Sudoku-V3"
        }
      ]
    },
    {
      image: require("./assets/images/projectIcon.png"),
      projectName: "Spell-Checker Project",
      projectDesc: "High-performance spell checker in C using AVL trees for fast lookup and word correction suggestions.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/davidyassa/ds_assign_5"
        }
      ]
    },
    {
      image: require("./assets/images/projectIcon.png"),
      projectName: "Hotel Management System",
      projectDesc: "C-based hotel management system with authentication, reservations, and file-based persistence.",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Scholarships, Competitive Programming Rankings, and Recognitions",

  achievementsCards: [
    {
      title: "Sawiris Distinction Scholarship (SDS)",
      subtitle:
        "Fully funded scholarship awarded to top 50 students in Egypt.",
      image: require("./assets/images/scholarshipIcon.png"),
      imageAlt: "Sawiris Scholarship Logo",
      footerLink: []
    },
    {
      title: "ECPC Qualification 2025",
      subtitle:
        "Ranked 14th place in ECPC qualification contest from my college.",
      image: require("./assets/images/competitionIcon.png"),
      imageAlt: "ECPC Logo",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false",
  blogs: [],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+20 1026350786",
  email_address: "ziadabdelhaleem63@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
