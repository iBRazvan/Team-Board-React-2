import "./App.css";
import Card from "./Card";

function App() {
  const data = [
    {
      name: "Sapovalov Alexandru",
      skillBrainPosition: "Mentor",
      actualJob: "Frontend Developer",
      shortDesctioption:
        "Front-End Developer and Tech enthusiast with 4+ years of experience building Web and cross-platform solutions in diverse areas of industry. As a SkillBrain mentor can share the experience, I've gained over these years and my love for programming with others.",
      socialMediaLiks: {
        gitHub: "https://github.com/shapovalov-sasha",
        linkedIn:
          "https://www.linkedin.com/in/%C8%99apovalov-alexandru-762b3b140/",
      },
      avatar: require("./images/sapovalov_alexandru.jpg"),
    },

    {
      name: "Botezatu Ionut-Razvan",
      skillBrainPosition: "Junior",
      actualJob: "Frontend Developer",
      shortDesctioption:
        "I am a self-driven front-end developer and have been in the industry for more than one year. I have a keen eye for detail and for my work I do. In addition, I have also finished an SkillBrain Front-End Web Development Training Course in 2022. I am a person who is able to control a situation rather than have a situation control me. (...)",
      socialMediaLiks: {
        gitHub: "https://github.com/iBRazvan",
        linkedIn:
          "https://www.linkedin.com/in/ionuț-răzvan-botezatu6199/",
      },
      avatar: require("./images/bri-modified.png"),
    },
  ];

  return (
    <div className="app-container">
      <h1>Andromeda Team</h1>
      <div className="content-container">
        <Card cardData={data[0]} />
        <Card cardData={data[1]} />
      </div>
    </div>
  );
}

export default App;
