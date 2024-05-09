import backgroundImage from "../images/fondoHeader.jpg";

const Subfooter = () => {
  return (
    <>
      <div
        className="relative bg-cover bg-center h-[38rem] mt-28 mb-5"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center h-32 md:h-48">
            <div className="text-white  md:text-xl mt-2 text-center">
              <p className="text-6xl mt-48">
                ¡Ayúdanos a alcanzar las estrellas!
              </p>
            </div>
            <div className="text-white  md:text-xl mt-2 text-center">
              <p className="text-4xl mt-8">
                Cada donación nos acerca a un paso más al espacio
              </p>
            </div>
            <button className="bg-blue-500 hover:bg-blue-800 text-white font-bold text-4xl py-6 px-11 rounded-lg shadow-lg mt-28">
              Volverme un patrocinador
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subfooter;
