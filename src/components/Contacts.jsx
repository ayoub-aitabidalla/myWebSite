import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

function Contacts() {
  return (
    <div className="w-full bg-gray-800 py-16">
      <div className="w-11/12 mx-auto max-w-screen-lg">
        <h3 className="text-4xl font-extrabold text-center text-white mb-12">
          Contact Me
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg flex flex-col items-center text-white hover:bg-gray-700 transition duration-300 ease-in-out">
            <FontAwesomeIcon icon={faEnvelope} className="text-4xl mb-4" />
            <p className="text-lg">ayoubaitabidalla1@gmail.com</p>
          </div>
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg flex flex-col items-center text-white hover:bg-gray-700 transition duration-300 ease-in-out">
            <FontAwesomeIcon icon={faPhone} className="text-4xl mb-4" />
            <p className="text-lg">06 56 98 83 81</p>
          </div>
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg flex flex-col items-center text-white hover:bg-gray-700 transition duration-300 ease-in-out">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-4xl mb-4" />
            <p className="text-lg text-center">El mers, Dcheira, Agadir</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
