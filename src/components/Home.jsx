import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faDownload } from "@fortawesome/free-solid-svg-icons";
import meImage from "/src/assets/me.jpg";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Skills from "./Skills";
import Projects from "./Projects";
import Contacts from "./Contacts";
import Experience from "./Experience";
function Home() {
  return (
    <>
      <div className="w-11/12 mx-auto py-16 flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-8">
        <div className="flex-1">
          <div className="flex items-center space-x-2 text-blue-500">
            <span className="text-xl">💻</span>
            <span className="font-semibold text-lg">
            Software Engineering Student
            </span>
          </div>

          <h1 className="text-5xl font-bold text-white mt-4">
            Hello, I am <br />
            <span className="text-blue-600">Ayoub Ait Abidalla</span>
          </h1>

          <p className="text-gray-400 max-w-xl leading-relaxed mt-4">
            As a software engineering student, I am enthusiastic about
            developing responsive and user-centric applications. I focus on both
            front-end and back-end development, aiming to deliver high-quality
            code and exceptional user experiences. My commitment is to solving
            complex problems and building innovative solutions that align with
            industry standards and user needs.
          </p>

          <div className="mt-8 flex items-center space-x-4">
            <a
              href="#"
              className="inline-block px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition duration-300"
            >
              DOWNLOAD CV
              <FontAwesomeIcon icon={faDownload} className="ml-2" />
            </a>

            <div className="flex space-x-4">
              <a
                href="mailto:ayoubaitabidalla1@gmail.com"
                className="text-blue-600 hover:text-blue-400 transition duration-300"
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
              <a
                href="https://github.com/ayoub-aitabidalla"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-400 transition duration-300"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>

              <a
                href="https://www.linkedin.com/in/ayoub-ait-abidalla-13b603251/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-400 transition duration-300"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-400 transition duration-300"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
          </div>
        </div>

        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src={meImage}
            alt="Ayoub Ait Abidalla"
            className="w-60 h-60 object-cover rounded-full border-4 border-blue-600  shadow-lg"
          />
        </div>
      </div>
      <Experience />
      <Skills />
      <Projects />
      <Contacts />
    </>
  );
}

export default Home;
