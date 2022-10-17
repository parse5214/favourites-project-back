import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';

import router from './routes/routes.js';

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true, limit: '30mb' }));
app.use(express.json({ extended: true, limit: '30mb' }));

app.use(cors());

app.use('/requests', router);

const DB_URL = "mongodb+srv://mikhail:liahkim789@cluster0.txpbpqp.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(DB_URL)
  .then(() => app.listen(PORT, () => console.log(`Server running in port ${PORT}`)))
  .catch(error => console.log(error));
