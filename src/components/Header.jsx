import backgroundImage from "../images/fondoHeader.jpg";
import logo from "../images/AdminLTELogo.png";

const Header = () => {
  return (
    <header
      className="relative bg-cover bg-center h-[31rem]"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center h-32 md:h-48">
          <img src={logo} alt="Logo" className="h-16 mt-24 md:h-24" />
          <div className="text-white  md:text-xl mt-2 text-center">
            <p className="text-6xl mt-8">“Juntos volamos alto”</p>
          </div>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="absolute bottom-0 w-full"
      >
        <path
          fill="#fff"
          fillOpacity="1"
          d="M0,128L60,144C120,160,240,192,360,208C480,224,600,224,720,213.3C840,203,960,181,1080,170.7C1200,160,1320,160,1380,160L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </header>
  );
};

export default Header;
