import { Routes, Route } from "react-router-dom";
import Doc from "./components/Doc";
import Wl from "./components/Waitlist";
import NavBar from "./components/Navbar";
import Blockone from "./components/Blockone";
import BlockTwo from "./components/BlockTwo";
import BlockThree from "./components/BlockThree";
import Blockfour from "./components/Blockfour";
import BlockFive from "./components/BlockFive";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/Doc" element={<Doc />} />
        <Route path="/waitlist" element={<Wl />} />
      </Routes>
      <div className="navi">
        <div className="navigationbar">
          <NavBar />
        </div>
        <div className="block1">
          <Blockone />
        </div>
        <div className="block2" style={{ marginTop: "20vh" }}>
          <BlockTwo />
        </div>
        <div className="block3">
          <BlockThree />
        </div>
        <div className="block4">
          <Blockfour />
        </div>
        <div className="block5">
          <BlockFive />
        </div>
        <div className="footerblock">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
