import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import BuildingShopface from './pages/BuildingShopface';
import IlluminatedDesigns from './pages/IlluminatedDesigns';
import ReceptionInterior from './pages/ReceptionInterior';
import StructuralSignage from './pages/StructuralSignage';
import DirectionalWayfinding from './pages/DirectionalWayfinding';
import WindowGraphics from './pages/WindowGraphics';
import VehicleBranding from './pages/VehicleBranding';
import RetailPOS from './pages/RetailPOS';
import TruckLining from './pages/TruckLining';
import Success from './pages/Success';


function App() {
  useEffect(() => {
    const handleBackButtonEvent = (event) => {
      window.location.reload(true);
    };

    window.addEventListener('popstate', handleBackButtonEvent);

    return () => {
      window.removeEventListener('popstate', handleBackButtonEvent);
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/building-shopface" element={<BuildingShopface />} />
        <Route path="/illuminated-designs" element={<IlluminatedDesigns />} />
        <Route path="/reception-interior" element={<ReceptionInterior />} />
        <Route path="/structural-signage" element={<StructuralSignage />} />
        <Route path="/directional-wayfinding" element={<DirectionalWayfinding />} />
        <Route path="/window-graphics" element={<WindowGraphics />} />
        <Route path="/vehicle-branding" element={<VehicleBranding />} />
        <Route path="/retail-pos" element={<RetailPOS />} />
        <Route path="/truck-lining" element={<TruckLining />} />
        <Route path="/success" element={<Success />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;