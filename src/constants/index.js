import Speechemotion from "../assets/projects/Speech_Emotion_Recognition_Using_Artificial_Intelligence_Approach_Photo.jpg";
import Portfolio from "../assets/projects/Portfolio1.jpg";
import RLS from "../assets/projects/RLS.jpg";
import DiscordBot from "../assets/projects/Discord.jpg";
import MedicineReminder from "../assets/projects/Medicine_Reminder_App.jpg";
import healthCare from "../assets/projects/Health_Care_App.jpg";
import NewsApp from "../assets/projects/News_App.jpg";
import MusicApp from "../assets/projects/Music_App.jpg";
import TourGuide from "../assets/projects/Android_Tour_Guide_App.jpg";

export const HERO_CONTENT = `A passionate and dedicated Software Engineer with skills in Python, Node.js, React, and SQL. I have a profound love for developing innovative software solutions. Let's create transformative software solutions together.`;

export const ABOUT_ME = `I graduated in 2023 from the Faculty of Computers and Artificial Intelligence, specializing in efficient and effective commercial solutions. My focus is on streamlining processes and enhancing productivity through cutting-edge technology.

I stay updated with the latest advancements, ensuring I deliver solutions that meet the evolving needs of businesses and individuals. With a strong foundation in computer science and artificial intelligence, I'm eager to take on projects that challenge my skills and push boundaries.

Let's connect and create transformative software solutions together.`;

export const EXPERIENCES = [
  {
    year: "FEB 2023 - JUN 2024",
    role: "Software Developer",
    company: "Freelancer",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Python", "React.js", "Node.js", "SQL","Discord API","REST API","Java"],
  }
];

export const PROJECTS = [
  {
    title: "Portfolio",
    image: Portfolio,
    description:
      "The Interactive Portfolio Showcase is a dynamic web application built with React, Framer Motion, and Tailwind CSS, featuring responsive design, smooth animations, and an engaging user experience.",
    technologies: ["React.js", "Framer Motion", "Tailwind CSS"],
  },
  {
    title: "Django Register Login System (RLS)",
    image: RLS,
    description:
      "Django Register Login System provides a secure and efficient user authentication solution, featuring registration, login, and SMTP-based email verification. It ensures a seamless and secure user experience for web applications.",
    technologies: ["Python", "Django", "HTML", "CSS"],
  },
  {
    title: "Speech Emotion Recognition Using Artificial Intelligence Approach",
    image: Speechemotion,
    description:
      "Developed and fine-tuned a Generative Adversarial Network (GAN) to generate synthetic emotional speech data, increasing the training dataset size by 50%. Conducted extensive testing and validation, achieving an accuracy rate of 94% in classifying emotions from speech across a dataset of 10,000 samples. Collaborated with a cross-functional team to ensure seamless integration of the enhanced emotion recognizer into production systems, reducing deployment time by 30%.  ",
    technologies: ["Python", "Machine Learning", "Deep Learning", "Artificial Intelligence"],
  },
  {
    title: "KND Watchdog - Discord Bot",
    image: DiscordBot,
    description:
      "KND Watchdog is a sophisticated Discord bot designed for Keysndeals Website to enhance workplace productivity and time management. It enables employees to log their work hours, record breaks, and document meeting times seamlessly within Discord. The bot provides comprehensive tracking of working time, offering accurate and up-to-date time sheets that reflect all activities. GC Watchdog simplifies time management for businesses, ensuring efficient and transparent monitoring of employee schedules.",
    technologies: ["Node.js", "Discord API", "mySQL"],
  },
  {
    title: "Time Keeper - Discord Bot",
    image: DiscordBot,
    description:
      "Time Keeper is a powerful Discord bot tailored for real estate agents, offering advanced time management and productivity tracking. Beyond core functionalities such as logging work hours, taking breaks, and recording meeting times, Time Keeper includes specialized features for lead management. It allows agents to track the time spent on lead activities, providing comprehensive insights into productivity and lead engagement. Time Keeper ensures precise and transparent tracking of all work-related activities, making it an essential tool for real estate professionals seeking to optimize their time and efficiency.",
    technologies: ["Node.js", "Discord API", "mySQL"],
  },
  {
    title: "Medicine Reminder App",
    image: MedicineReminder,
    description:
      "Medicine Reminder App helps users stay on top of their health by sending timely reminders to take their medications. It ensures consistent medication adherence, making it easier to manage daily doses and maintain a healthy routine.",
    technologies: ["Flutter"],
  },
  {
    title: "Health Care App",
    image: healthCare,
    description:
      "Health Care App empowers users to manage their health with ease, offering features like appointment scheduling, health tracking, and personalized wellness tips. It's your all-in-one tool for maintaining a healthier lifestyle.",
    technologies: ["C#", "MySQL"],
  },
  {
    title: "Android News Feed App Using Java and API",
    image: NewsApp,
    description:
      "Simple News Feed App Connected with Guardian API . The App is Compatible With All Android devices.",
    technologies: ["Java", "API"],
  },
  {
    title: "Android Music App Player Using Java",
    image: MusicApp,
    description:
      "Simple Music App Player with 3 Fragments and Compatible with All android devices.",
    technologies: ["Java"],
  },
  {
    title: "Android Tour Guide App Using Java",
    image: TourGuide,
    description:
      "Simple Tour Guide App for Egypt includes the best Places for Tourists to Visit . The App is Compatible With All Android devices.",
    technologies: ["Java"],
  },
];

export const CONTACT = {
  Address: "Cairo ,Egypt",
  phoneNumber: "+0000000000 ",
  Email: "me@example.com",
};
