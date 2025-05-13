import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Hakkimizda from "./Hakkimizda";
import Vizyon from "./Vizyon";
import Tarihce from "./Tarihce";
import Arge from "./Arge";
import Muhendislik from "./Muhendislik";
import Uretim from "./Uretim";
import Ekipmanlar from "./Ekipmanlar";
import Yetenekler from "./Yetenekler";
import Kalite from "./Kalite";
import Ik from "./Ik";
import Iletisim from "./Iletisim";

function App() {
  return (
    <div className="back font-['Poppins']">
      <Router basename="/Cncsite"> 
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Hakkimizda" element={<Hakkimizda />} />
          <Route path="/Vizyon" element={<Vizyon />} />
          <Route path="/Tarihce" element={<Tarihce />} />
          <Route path="/Arge" element={<Arge />} />
          <Route path="/Muhendislik" element={<Muhendislik />} />
          <Route path="/Uretim" element={<Uretim />} />
          <Route path="/Ekipmanlar" element={<Ekipmanlar />} />
          <Route path="/Yetenekler" element={<Yetenekler />} />
          <Route path="/Kalite" element={<Kalite />} />
          <Route path="/Ik" element={<Ik />} />
          <Route path="/Iletisim" element={<Iletisim />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
