import Header from "./Components/Header";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Navbar from "./Components/Nav";
import Members from "./Components/Members";
import Footer from "./Components/Footer";
import About from "./Components/About";

function WebContent() {
  return (
    <>
      <div className="bg-circle1"></div>
      <div className="bg-circle2"></div>

      <Header />
      <Navbar />
      <Home />
      <About />
      <Members />
      <Contact />
      <Footer />
    </>
  );
}
export default WebContent;
