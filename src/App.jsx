
import './App.css'
import { BrowserRouter as Router, Route ,Routes} from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contacts from './components/Contacts'
import Experience from './components/Experience'

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home/>}/>
        <Route path="/skills" element={ <Skills/>}/>
        <Route path="/projects" element={ <Projects/>}/>
        <Route path="/contacts" element={ <Contacts/>}/>
        <Route path="/experience" element={ <Experience/>}/>
        
        
      </Routes>
    </Router>


  )
}

export default App
