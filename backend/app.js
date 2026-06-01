const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();

const estimationRouter = require('./routes/estimation');
const usersRouter = require('./routes/users');
const flooringRoutes = require('./routes/flooringRoutes');

app.use(cors());
app.use(express.json());

// Routes
app.use('/users', usersRouter);
app.use('/estimation', estimationRouter);
app.use('/api', flooringRoutes);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server running on port ${port}`));
