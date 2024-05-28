const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');  // Import cors
const userRoutes = require('./routes/userRoutes');
const sequelize = require('./config/database');

const app = express();

app.use(cors());  // Use cors middleware
app.use(bodyParser.json());

app.use('/api', userRoutes);

sequelize.sync()
  .then(() => {
    console.log('Database synced');
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch(err => {
    console.log('Error syncing database:', err);
  });
