import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx";
import Nosotros from "./components/Nosotros.jsx";
import Misiones from "./components/Misiones.jsx";
import Areas from "./components/Areas.jsx";
import Subsistemas from "./components/Subsistemas.jsx";
import Subfooter from "./components/Subfooter.jsx";
import Footer from "./components/Footer.jsx";
import "./index.css";
/* import "./components/stylesheet.css";
 */
function App() {
  return (
    <div>
      <Navbar />
      <div>
        <Header />
        <Nosotros />
        <Misiones />
        <Areas />
        <Subsistemas />
        <Subfooter />
        <Footer />
      </div>
    </div>
  );
}

export default App;
