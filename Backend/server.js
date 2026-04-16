const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

// COST API
app.get("/api/cost", (req, res) => {
  const data = [
    { month: "FEB", actual: 900, projected: 600, runRate: 0.45 },
    { month: "MAR", actual: 700, projected: 300, runRate: 0.25 },
    { month: "APR", actual: 500, projected: 600, runRate: 0.3 },
    { month: "MAY", actual: 900, projected: 720, runRate: 0.4 },
    { month: "JUN", actual: 700, projected: 500, runRate: 0.35 },
    { month: "JUL", actual: 500, projected: 600, runRate: 0.32 },
    { month: "AUG", actual: 550, projected: 750, runRate: 0.38 },
  ]

  res.json(data)
})

// COMPLIANCE API
app.get("/api/compliance", (req, res) => {
  const data = [
    { name: "SECURITY", value: 30, remaining: 70 },
    { name: "TAGGING", value: 50, remaining: 50 },
    { name: "CERTIFICATES", value: 65, remaining: 35 },
    { name: "PATCHING", value: 75, remaining: 25 },
    { name: "SOX", value: 60, remaining: 40 },
    { name: "CLOUD OP", value: 25, remaining: 75 },
  ]

  res.json(data)
})


//  INVENTORY API 
app.get("/api/inventory", (req, res) => {
  const data = [
    { date: "AUG 02", max: 400, mid: 320, min: 250 },
    { date: "AUG 03", max: 700, mid: 550, min: 240 },
    { date: "AUG 04", max: 1000, mid: 780, min: 260 },
    { date: "AUG 05", max: 500, mid: 450, min: 240 },
    { date: "AUG 06", max: 700, mid: 480, min: 280 },
  ]

  res.json(data)
})

// ✅ STORAGE API 
app.get("/api/storage", (req, res) => {
  const data = [
    { name: "EBS", percent: 30.12, size: 1.25 },
    { name: "S3", percent: 36.14, size: 1.5 },
    { name: "GLACIER", percent: 18.07, size: 0.75 },
    { name: "OTHER", percent: 15.66, size: 0.65 },
  ]

  res.json(data)
})


// ✅ UTILIZATION API 
app.get("/api/utilization", (req, res) => {
  const data = [
    { time: "1", cpu: 10, io1: 120, io2: 150, disk1: 45, disk2: 25 },
    { time: "2", cpu: 8, io1: 150, io2: 130, disk1: 50, disk2: 20 },
    { time: "3", cpu: 11, io1: 130, io2: 160, disk1: 45, disk2: 30 },
    { time: "4", cpu: 9, io1: 160, io2: 120, disk1: 48, disk2: 22 },
    { time: "5", cpu: 10, io1: 140, io2: 150, disk1: 52, disk2: 28 },
    { time: "6", cpu: 12, io1: 170, io2: 130, disk1: 46, disk2: 24 },
    { time: "7", cpu: 9, io1: 130, io2: 160, disk1: 50, disk2: 30 },
    { time: "8", cpu: 11, io1: 160, io2: 140, disk1: 47, disk2: 22 },
    { time: "9", cpu: 10, io1: 150, io2: 170, disk1: 52, disk2: 28 },
  ]

  res.json(data)
})


// ✅ MONITORING API
app.get("/api/monitoring", (req, res) => {
  const data = {
    totalRequests: "3.4M",
    uniqueUsers: 3412,

    apps: [
      {
        name: "TMNG 1.0",
        status: "LIVE",
        network: "12.0K IN / 21.0K OUT",
        latency: "53ms",
        dots: [
          { index: 1, type: "yellow" },
          { index: 32, type: "red" },
        ],
      },
      {
        name: "TMNG 1.1",
        status: "LIVE",
        network: "13.0K IN / 24.0K OUT",
        latency: "45ms",
        dots: [
          { index: 6, type: "red" },
          { index: 70, type: "yellow" },
        ],
      },
    ],
  }

  res.json(data)
})

app.listen(5000, () => {
  console.log("✅ Server running on http://localhost:5000")
})