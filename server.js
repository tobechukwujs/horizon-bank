require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./db');
require('./models');
const routes = require('./routes');
const errorHandler = require('./middleware/errorHandler');
const transactionsRouter = require('./routes/transactions');
const transfersRouter = require('./routes/transfers');

const beneficiariesRouter = require('./routes/beneficiaries');

const app = express();

app.use(express.json());

// Route-level routers for feature groupings
app.use('/api/transactions', transactionsRouter);
app.use('/api/beneficiaries', beneficiariesRouter);
app.use('/api/transfers', transfersRouter);

// Catch-all API router 
app.use('/api', routes);

// Error handler 
app.use(errorHandler);

sequelize.sync().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
});

