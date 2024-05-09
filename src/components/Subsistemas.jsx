import backgroundImage from "../images/fondoHeader.jpg";
import telemetria from "../images/telemetria.png";
import potencia from "../images/potencia.png";
import control from "../images/control.png";
import electronica from "../images/electronica.png";
import { Divider } from "@tremor/react";

const Subsistemas = () => {
  return (
    <>
      <div
        id="subs"
        className="relative bg-cover bg-center h-[12rem] mt-28 mb-5"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white text-7xl font-bold">Subsistemas</p>
        </div>
      </div>
      <div className="flex items-center max-w-4xl mx-auto px-4 py-8">
        <div className="w-1/2">
          <img src={telemetria} alt="Image" className="h-auto w-[20rem]" />
        </div>
        <div className="w-1/2">
          <img src={potencia} alt="Image" className="h-auto w-[20rem]" />
        </div>
      </div>
      <div className="flex items-center max-w-4xl mx-auto px-4 py-8">
        <div className="w-1/2">
          <img src={control} alt="Image" className="h-auto w-[20rem]" />
        </div>
        <div className="w-1/2">
          <img src={electronica} alt="Image" className="h-auto w-[20rem]" />
        </div>
      </div>
      <Divider />
      <div className="flex items-center max-w-4xl mx-auto px-4 py-8">
        <div className="w-1/2">
          <img src={telemetria} alt="Image" className="h-auto w-[20rem]" />
        </div>
        <div className="w-1/2 pr-8">
          <h2 className="text-4xl font-bold mb-2">Telemetría</h2>
          <p className="text-gray-600 text-xl">
            Subsistema permite recopilar, desarrollar y transmitir informacion
            de un dispositivo electrónico a otro a través de la comunicación a
            distancia.
          </p>
        </div>
      </div>
      <Divider />
      <div className="flex items-center max-w-4xl mx-auto px-4 py-8">
        <div className="w-1/2">
          <img src={potencia} alt="Image" className="h-auto w-[20rem]" />
        </div>
        <div className="w-1/2 pr-8">
          <h2 className="text-4xl font-bold mb-2">Potencia</h2>
          <p className="text-gray-600 text-xl">
            Subsistema el cual es un conjunto de dispositivos que convierte
            energía de una forma primaria a energía eléctrica, la transporta y
            la distribuye a los consumidores finales.
          </p>
        </div>
      </div>
      <Divider />
      <div className="flex items-center max-w-4xl mx-auto px-4 py-8">
        <div className="w-1/2">
          <img src={control} alt="Image" className="h-auto w-[20rem]" />
        </div>
        <div className="w-1/2 pr-8">
          <h2 className="text-4xl font-bold mb-2">Control y manejo de datos</h2>
          <p className="text-gray-600 text-xl">
            Subsistema interactivo que se inicia automáticamente cuando se
            inicia el sistema, y es el susbsistema a tráves del cual el operador
            del sistemacontrola el sistema a tráves de la consola del sistema.
          </p>
        </div>
      </div>
      <Divider />
      <div className="flex items-center max-w-4xl mx-auto px-4 py-8">
        <div className="w-1/2">
          <img src={electronica} alt="Image" className="h-auto w-[20rem]" />
        </div>
        <div className="w-1/2 pr-8">
          <h2 className="text-4xl font-bold mb-2">Electrónica</h2>
          <p className="text-gray-600 text-xl">
            Subsistema de suministro eléctrico constituido por los elementos
            necesarios para llevar hasta los puntos de consumo y a tráves de
            grandes distancias, la energia eléctrica genera en las centrales
            eléctricas.
          </p>
        </div>
      </div>
    </>
  );
};

export default Subsistemas;
