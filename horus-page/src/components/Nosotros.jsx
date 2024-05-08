import teamImage from "../images/equipo.jpeg";

const Nosotros = () => {
  return (
    <>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <p className="text-6xl font-bold text-left mb-8">Nosotros</p>
        <p className="text-xl mb-8">
          Fundado en el Instituto Tecnológico de Sonora campus Guaymas en Mayo
          de 2022. Somos un grupo multidisciplinario que busca potenciar en los
          jóvenes habilidades técnicas y humanas mediante el desarrollo de
          proyectos aeroespaciales.
        </p>
        <p className="text-xl mb-8">
          Trabajamos en el desarrollo de cohetes experimentales satélites
          pequeños y vehículos tipo Rover. Divulgamos nuestro trabajo para
          despertar el interés en niños, niñas, adolescentes y jóvenes en
          carreras STEAM
        </p>
      </div>
      <div
        className="relative bg-cover bg-center h-[31rem]"
        style={{ backgroundImage: `url(${teamImage})` }}
      ></div>
    </>
  );
};

export default Nosotros;
