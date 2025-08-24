import express from 'express';
import weatherRouter from './weather';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/weather', weatherRouter);

app.listen(PORT, () => {
  console.log(`Weather microservice running on port ${PORT}`);
});
