import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <div className="skill-list">
          <SkillList description="HTML + CSS 💪" color="violet"/>
          <SkillList description="Javascript 👌" color="yellow"/>
          <SkillList description="Web design 🙈" color="green"/>
          <SkillList description="Git and Github 😊" color="red"/>
          <SkillList description="React 😎" color="blue"/>
          <SkillList description="Svelte 😄" color="#F72C02"/>
        </div>
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
    <div>
      <span className="skill"  style={{ backgroundColor: props.color }}>{props.description}</span>
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
