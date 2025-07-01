import express from 'express';
import { PrismaClient } from '@prisma/client';
import cors from 'cors';
import bodyParser from 'body-parser';
import taskRoutes from './routes/taskRoutes';
import authMiddleware from './middleware/auth';

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(bodyParser.json());
app.use(authMiddleware);

app.use('/api/tasks', taskRoutes(prisma));

app.get('/', (req, res) => {
    res.send('Welcome to myTaskManager API');
});

export default app;