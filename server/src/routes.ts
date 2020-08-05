import express from 'express';
import ClassesController from './controllers/ClassesController';

const routes = express.Router();
const classesControllers = new ClassesController();

routes.get('/', (req, res) => {
  return res.json({ message: 'Hello World' });
});

routes.get('/classes', classesControllers.index);
routes.post('/classes', classesControllers.create);

export default routes;
