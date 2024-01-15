const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'screens', 'index.html'));
});

app.get('/favoritePersonalities', (req, res) => {
    res.sendFile(path.join(__dirname, 'screens', 'favoritePersonalities.html'));
});

app.get('/favoriteCities', (req, res) => {
    res.sendFile(path.join(__dirname, 'screens', 'favoriteCities.html'));
});

app.get('/favoriteTouristSpots', (req, res) => {
    res.sendFile(path.join(__dirname, 'screens', 'favoriteTouristSpots.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'screens', 'contact.html'));
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
