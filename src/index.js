import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA"
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D"
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF"
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33"
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB"
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00"
  }
];

const skillEmojiMap = new Map();
skillEmojiMap.set("beginner", "👶");
skillEmojiMap.set("intermediate", "👍");
skillEmojiMap.set("advanced", "💪");

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div className="avatar">
      <img src="flask-name.svg" alt="image of the developer"/>
    </div>
  )
}

function Intro() {
  return (
    <div>
      <h1> Peter Griffin </h1>
      <p> Hi there, heh-heh, it's Peter Griffin, here from Quahog, Rhode Island, probably supposed to say somethin' smart but, uh… yeah, that ship sailed right past the Drunken Clam. I got my wife Lois, my weird kids, and a talking dog who thinks he's better than me, but joke's on him, I'm the one with the theme song. Freakin' sweet.</p>
    </div>
  )
}

function SkillList(props) {
  return (
    <div className="skill-list">
      {skills.map(item => <Skill color={item.color} description={item.skill} skill={item.level}/>)}
    </div>
  )
}

function Skill({color, description, skill}) {
    return (
    <div>
      <span className="skill"  style={{ backgroundColor: color }}>{description} {skillEmojiMap.get(skill)}</span>
    </div>
  )
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
