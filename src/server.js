import express from 'express';
const app = express();

//Routes
import indexRoutes from './routes/index-routes.js';
import taskRoutes from './routes/tasks-routes.js';

//Settings
app.set('port',process.env.PORT || 3000);

//middlewares
app.use(express.json());

//routes
app.use(indexRoutes);
app.use('/tasks',taskRoutes);

export default app;