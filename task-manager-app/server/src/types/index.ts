export interface Task {
    id: string;
    title: string;
    description: string;
    completed: boolean;
    createdAt: Date;
    updatedAt: Date;
}

export interface CreateTaskRequest {
    title: string;
    description: string;
}

export interface UpdateTaskRequest {
    title?: string;
    description?: string;
    completed?: boolean;
}

export interface TaskResponse {
    task: Task;
}

export interface TasksResponse {
    tasks: Task[];
}