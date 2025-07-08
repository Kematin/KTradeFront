import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { InventoryPage } from "./pages/Inventory";
import { OnSalePage } from "./pages/OnSale";
import { SoldPage } from "./pages/Sold";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<InventoryPage />} />
          <Route path="/on-sale" element={<OnSalePage />} />
          <Route path="/sold" element={<SoldPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;