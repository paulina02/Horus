import backgroundImage from "../images/fondoHeader.jpg";
import mteeka from "../images/teeka.png";
import teeka1 from "../images/teeka1.jpeg";
import teeka2 from "../images/teeka2.jpeg";
import mjinne from "../images/jinne.png";
import jinne1 from "../images/jinne1.jpeg";
import jinne2 from "../images/jinne2.jpeg";
import { Divider } from "@tremor/react";
import { useState } from "react";
import Modal from "./Modal";

const Misiones = () => {
  const [isImageClicked, setIsImageClicked] = useState(false);
  const [clickedImage, setClickedImage] = useState(null);

  const handleImageClick = (image) => {
    setClickedImage(image);
    setIsImageClicked(true);
  };

  const handleCloseModal = () => {
    setIsImageClicked(false);
  };
  return (
    <>
      <div
        id="misiones"
        className="relative bg-cover bg-center h-[12rem] mt-28 mb-5"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white text-7xl font-bold">Nuestras Misiones</p>
        </div>
      </div>
      <div className="flex items-center max-w-4xl mx-auto px-4 py-8">
        <div className="w-1/2 pr-8">
          <h2 className="text-4xl font-bold mb-2">Misión Teeka</h2>
          <p className="text-gray-600 text-xl">
            Teeka es un Proyecto interdisciplinario orientado a la medición de
            las condiciones atmosféricas en la región de Guaymas y Empalme. Para
            poder llevar a cabo lo anterior, se propone el desarrollo de un
            vehiculo lanzador (Suwaka) capad de liberar una carga útil(IIi) a
            una altura de 500m.
          </p>
        </div>
        <div className="w-1/2">
          <img src={mteeka} alt="Image" className="h-auto w-[20rem]" />
        </div>
      </div>
      <div className="flex items-center max-w-4xl mx-auto px-4 py-8">
        <div className="flex gap-8">
          <img
            src={teeka1}
            alt=""
            className="w-auto h-[32rem]"
            onClick={() => handleImageClick(teeka1)}
          />
          <img
            src={teeka2}
            alt=""
            className="w-auto h-[32rem]"
            onClick={() => handleImageClick(teeka2)}
          />
        </div>
        {isImageClicked && (
          <Modal image={clickedImage} onClose={handleCloseModal} />
        )}
      </div>
      <Divider />
      <div className="flex items-center max-w-4xl mx-auto px-4 py-8">
        <div className="w-1/2 pr-8">
          <h2 className="text-4xl font-bold mb-2">Misión Jinne</h2>
          <p className="text-gray-600 text-xl">
            Misión Jinne conlleva el diseño y fabricacion de un CanSat, capaz de
            proteger 2 huevos de gallina durante el trayecto de subida, y
            durante la caída libre de 450 metros de altura. Asi como activar un
            sistema de recuperación que desacelera su caída a 10 m/s2 mientras
            mide y transmite datos atmosféricos a una interfaz humano-máquina.
          </p>
        </div>
        <div className="w-1/2">
          <img src={mjinne} alt="Image" className="h-auto w-[20rem]" />
        </div>
      </div>
      <div className="flex items-center max-w-4xl mx-auto px-4 py-8">
        <div className="flex gap-8">
          <img
            src={jinne1}
            alt=""
            className="w-auto h-[32rem]"
            onClick={() => handleImageClick(jinne1)}
          />
          <img
            src={jinne2}
            alt=""
            className="w-auto h-[18rem]"
            onClick={() => handleImageClick(jinne2)}
          />
        </div>
        {isImageClicked && (
          <Modal image={clickedImage} onClose={handleCloseModal} />
        )}
      </div>
    </>
  );
};

export default Misiones;
