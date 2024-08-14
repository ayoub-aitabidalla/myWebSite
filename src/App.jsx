import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Import the Footer component
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import Experience from './components/Experience';
import ProjectDetails from './components/ProjectDetails';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/myWebSite" />} />
        <Route path="/myWebSite" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects/:projectTitle" element={<ProjectDetails />} />
        <Route path="*" element={<Navigate to="/myWebSite" />} />
      </Routes>
      <Footer /> 
    </Router>
  );
}

export default App;
