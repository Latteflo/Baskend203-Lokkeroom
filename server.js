const express = require('express');
const app = express();
app.use(express.json());
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

const homePage= require('./src/routes/home');
const usersRouter = require('./src/routes/users');
const lobbiesRouter = require('./src/routes/lobbies');
const messagesRouter = require('./src/routes/messages');

app.use('/', homePage);
app.use('/', usersRouter);
app.use('/', lobbiesRouter);
app.use('/api', messagesRouter);
app.use('/api/users', usersRouter);
app.use('/api/lobbies', lobbiesRouter);
app.use('/api/messages', messagesRouter);


const port = 3000;

app.listen(port, () => {
  console.log(`WE are aliiiveee on http://localhost:${port}`);
});

