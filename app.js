const express = require('express');
const app = express();

const { getElementById, getIndexById, updateElement,
  seedElements, createElement } = require('./main');

const PORT = process.env.PORT || 4009;
// Use static server to serve the Express Yourself Website
app.use(express.static('public'));

// Import and mount the expressionsRouter
const expressionsRouter = require('./routes/expressions.js');
app.use('/expressions', expressionsRouter);

// Import and mount the animalsRouter
const animalsRouter = require('./routes/animals.js');
app.use('/animals', animalsRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
