import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import router from './routes/index.js';

const app = express();
dotenv.config();
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
const mongodb = 'mongodb+srv://hiteshgn009:61OJMAd36PqPgrvO@cluster0.wlgjjze.mongodb.net/contactMe?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5005;

app.listen(PORT, () => console.log('server'));
app.get('/', (req, res) => {
  res.send('welcome')
})
app.use('/', router)

mongoose.connect(mongodb, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log(`server is running on port ${PORT}`)).catch(err => console.log(err));