const express = require('express');
const { port } = require('./config.json');

const app = express();

app.get('/', (request, response) => {
    return response.sendFile('index.html', { root: '.' });
});

app.get('/reminders', (request, response) => {
    return response.sendFile('reminders.html', { root: '.' });
});

app.get('/calendar', (request, response) => {
    return response.sendFile('calendar.html', { root: '.' });
});

app.get('/login', (request, response) => {
    return response.sendFile('login.html', { root: '.' });
});

app.get('/setup', (request, response) => {
    return response.sendFile('setup.html', { root: '.' });
});

app.get('/assets/index', (request, response) => {
    return response.sendFile('styles/index.css', { root: '.' });
});

app.get('/assets/main', (request, response) => {
    return response.sendFile('styles/main.css', { root: '.' });
});

app.get('/assets/reminders', (request, response) => {
    return response.sendFile('styles/reminders.css', { root: '.' });
});

app.get('/assets/background', (request, response) => {
    return response.sendFile('assets/badBackground.png', { root: '.' });
});

app.get('/assets/main_script', (request, response) => {
    return response.sendFile('scripts/main.js', { root: '.' });
});

app.get('/assets/index_script', (request, response) => {
    return response.sendFile('scripts/index.js', { root: '.' });
});

app.listen(port, () => console.log(`App listening at http://localhost:${port}`));
