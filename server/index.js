const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let tasks = []; // ✅ MAKE SURE THIS EXISTS

// ROOT
app.get("/", (req, res) => {
  res.send("Team Task Manager API is running 🚀");
});

// GET
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// POST
app.post("/tasks", (req, res) => {
  const newTask = {
    id: Date.now(),
    title: req.body.title,
    description: req.body.description,
    assignedTo: req.body.assignedTo,
    status: req.body.status || "Pending"
  };

  tasks.push(newTask);
  res.json(newTask);
});

// DELETE
app.delete("/tasks/:id", (req, res) => {
  tasks = tasks.filter(t => t.id != req.params.id);
  res.json({ message: "Deleted" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running");
});