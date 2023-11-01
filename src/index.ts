import express, { json } from 'express';
import router from './routes';
import sneakersRouter from './routes/sneakers';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({
  origin: 'http://localhost:3000'
}))
app.use(json());

app.use('/', router);
app.use('/sneakers', sneakersRouter);

app.listen(port, async () => {
  try {
    console.log(`server started in ${port} port.`);
  } catch (err) {
    console.error('crashed starting app');
  }
});
