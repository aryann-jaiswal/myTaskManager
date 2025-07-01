import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class TaskController {
    private prisma: PrismaClient;

    constructor(prisma: PrismaClient) {
        this.prisma = prisma;
    }

    async createTask(req: Request, res: Response) {
        const { title, description, userId } = req.body;
        try {
            const newTask = await this.prisma.task.create({
                data: {
                    title,
                    description,
                    userId: Number(userId),
                },
            });
            res.status(201).json(newTask);
        } catch (error) {
            res.status(500).json({ error: 'Failed to create task' });
        }
    }

    async getTasks(req: Request, res: Response) {
        try {
            const tasks = await this.prisma.task.findMany();
            res.status(200).json(tasks);
        } catch (error) {
            res.status(500).json({ error: 'Failed to retrieve tasks' });
        }
    }

    async getTaskById(req: import('express').Request, res: import('express').Response) {
        // Implement logic to get a task by ID
        // Example:
        // const task = await TaskModel.findById(req.params.id);
        // if (!task) return res.status(404).send({ message: 'Task not found' });
        // res.send(task);
        res.status(501).send({ message: 'getTaskById not implemented' });
    }


    async updateTask(req: Request, res: Response) {
        const { id } = req.params;
        const { title, description } = req.body;
        try {
            const updatedTask = await this.prisma.task.update({
                where: { id: Number(id) },
                data: { title, description },
            });
            res.status(200).json(updatedTask);
        } catch (error) {
            res.status(500).json({ error: 'Failed to update task' });
        }
    }

    async deleteTask(req: Request, res: Response) {
        const { id } = req.params;
        try {
            await this.prisma.task.delete({
                where: { id: Number(id) },
            });
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: 'Failed to delete task' });
        }
    }
}

export default TaskController;