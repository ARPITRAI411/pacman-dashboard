import { Dashboard } from './components/Dashboard'
import {  Routes, Route } from "react-router-dom"
import CostDetailsPage from "./components/DetailsRaoutes/CostDetailspage"
import { Header } from "./components/Header"
import Pacman from "./assets/pacman_bg.jpg"
import MonitoringDetailsPage from "./components/DetailsRaoutes/MonitoringDetailsPage"
import InventoryDetailsPage from "./components/DetailsRaoutes/InventoryDetailsPage"
import UtilizationDetailsPage from "./components/DetailsRaoutes/UtilizationDetailsPage"
import ComplianceDetailsPage from "./components/DetailsRaoutes/ComplianceDetailsPage"
import StorageDetailsPage from "./components/DetailsRaoutes/StorageDetailsPage"
function App() {
  return  (
    <div  className="min-h-screen bg-cover bg-center bg-no-repeat font-sans text-gray-900"
      style={{
        backgroundImage: `url(${Pacman})`,
      }}
     >
      <Header />
      <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/cost-details" element={<CostDetailsPage />} />
            <Route path="/monitoring-details" element={<MonitoringDetailsPage />} />
            <Route path="/inventory-details" element={<InventoryDetailsPage />} />
            <Route path="/utilization-details" element={<UtilizationDetailsPage />} />
            <Route path="/compliance-details" element={<ComplianceDetailsPage />} />
            <Route path="/storage-details" element={<StorageDetailsPage />} />
          </Routes>
          </div>
    
  )

}

export default App
