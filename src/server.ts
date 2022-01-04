import express from 'express';
import swaggerUi from 'swagger-ui-express';

import routes from './routes/index.routes';
import swaggerFile from './swagger.json';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(routes);

app.listen(3000, () => console.log('Server start on port 3000'));
