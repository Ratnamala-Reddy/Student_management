const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 8080;

app.use(cors({
  origin: 'https://student-management-frontend-o3kp.onrender.com',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
app.use(express.json());
require('./Models/db');
const StudentRouter = require('./Routes/StudentRoutes');

app.get('/', (req, res) => {
    res.send('Student Management Server is Running');
});

app.use('/api/Students', StudentRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
