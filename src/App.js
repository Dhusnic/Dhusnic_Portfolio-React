import './App.css';
import HomePage from './components/Home';
import PaperPage from './components/Paper';
import ProjectPage from './components/Project';
import SkillPage from './components/Skills';
import Courses from './components/Courses';
import ResumePage from './components/ResumePage';
import {BrowserRouter,Route,Routes} from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/paper" element={<PaperPage/>}/>
          <Route path="/project" element={<ProjectPage/>}/>
          <Route path="/skills" element={<SkillPage/>}/>
          <Route path="/resume" element={<ResumePage/>}/>
          <Route path="/courses" element={<Courses/>}/>
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
