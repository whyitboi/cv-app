import { GeneralInfo } from "./components/GeneralInfo";
import { Education } from "./components/Education";
import { WorkExperience } from "./components/WorkExperience";
import "./styles/style.css";

export default function App() {
  return (
    <main>
      <h1>CV Builder</h1>
      <GeneralInfo />
      <Education />
      <WorkExperience />
    </main>
  );
}
