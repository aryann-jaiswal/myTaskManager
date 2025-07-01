import { Router } from 'express';
import TaskController from '../controllers/taskController';
import { PrismaClient } from '@prisma/client'


export default function taskRoutes(prisma:PrismaClient) {
    const router = Router();
    const taskController = new TaskController(prisma);

    router.post('/tasks', taskController.createTask);
    router.get('/tasks', taskController.getTasks);
    router.get('/tasks/:id', taskController.getTaskById);
    router.put('/tasks/:id', taskController.updateTask);
    router.delete('/tasks/:id', taskController.deleteTask);

    return router;
}