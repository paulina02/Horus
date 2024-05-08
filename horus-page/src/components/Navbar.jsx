import "../index.css";
import logo from "../images/logofull.png";

const Navbar = () => {
  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-white">
              <img src={logo} alt="" className="max-w-12" />
            </span>
          </div>
          <div className="hidden sm:block">
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-black hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Nosotros
              </a>
              <a
                href="#"
                className="text-black hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Misiones
              </a>
              <a
                href="#"
                className="text-black hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Patrocinadores
              </a>
              <a
                href="#"
                className="text-black hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                <button>Unete al Equipo!</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
