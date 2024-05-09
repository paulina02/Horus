import backgroundImage from "../images/fondoHeader.jpg";
import avionica from "../images/avionica.png";

const Areas = () => {
  return (
    <>
      <div
        id="areas"
        className="relative bg-cover bg-center h-[12rem] mt-28 mb-5"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white text-7xl font-bold">Nuestras Áreas</p>
        </div>
      </div>
      <div className="flex items-center max-w-4xl mx-auto px-4 py-8">
        <div className="w-1/2">
          <img src={avionica} alt="Image" className="h-auto w-[20rem]" />
        </div>
        <div className="w-1/2 pr-8">
          <h2 className="text-4xl font-bold mb-2">Aviónica</h2>
          <p className="text-gray-600 text-xl">
            <span>Área</span> que abarca desde el diseño de circuitos
            electrónicos y su fabricación hasta la programación de
            microcomputadoras e interfaz gráfica
          </p>
          <p className="text-gray-600 text-xl">
            Esta integrada por los siguientes subsistemas:
          </p>
        </div>
      </div>
    </>
  );
};

export default Areas;
