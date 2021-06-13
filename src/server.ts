import express from 'express';

import routes from './routes/index.routes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(3000, () => console.log('Server start on port 3000'));
