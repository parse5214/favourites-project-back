import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import router from './routes/routes.js';

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true, limit: '30mb' }));
app.use(express.json({ extended: true, limit: '30mb' }));

app.use(cors());

app.use('/requests', router);

mongoose.connect(process.env.DB_URL)
  .then(() => app.listen(PORT, () => console.log(`Server running in port ${PORT}`)))
  .catch(error => console.log(error));
