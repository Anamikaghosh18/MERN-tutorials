const express = require('express');
const users = require('./MOCK_DATA.json');
const mongoose = require("mongoose");
const app = express();
const PORT = 8000;

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/youtube-app-01')
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log('MongoDB connection error:', err));

// Schema
const userschema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: String,
    email: { type: String, required: true, unique: true },
    jobTitle: String,
    gender: { type: String, required: true }
});

const User = mongoose.model("user", userschema);

app.use(express.urlencoded({ extended: false }));

// Logging middleware
app.use((req, res, next) => {
    console.log("hello from middleware 1");
    next();
});

// Routes
app.get("/users", (req, res) => {
    const html = `
    <ul>
        ${users.map((user) => `<li>${user.first_name}</li>`).join('')}
    </ul>
    `;
    res.send(html);
});

app.get('/api/users', (req, res) => {
    return res.json(users);
});

app.get('/api/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const user = users.find(user => user.id === id);
    return res.json(user);
});

app.post('/api/users', (req, res) => {
    // TODO : create user 
    return res.json({ status: "pending" });
});

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
