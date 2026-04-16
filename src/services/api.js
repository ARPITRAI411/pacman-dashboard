import axios from "axios"

const API = axios.create({
  baseURL: "http://localhost:5000/api",
})

export const getCostData = () => API.get("/cost")
export const getComplianceData = () => API.get("/compliance")
export const getInventoryData = () => API.get("/inventory")
export const getStorageData = () => API.get("/storage")
export const getUtilizationData = () => API.get("/utilization")
export const getMonitoringData = () => API.get("/monitoring")