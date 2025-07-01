# task-manager-app
A task management application built with TypeScript, React, and Express.js to help users boost their productivity.

## Features
- User authentication with JWT
- Task creation, retrieval, updating, and deletion
- Responsive design using Tailwind CSS
- State management with Zustand/Redux
- API integration using Axios
- Database management with Prisma ORM and PostgreSQL

## Setup Instructions

### Prerequisites
- Node.js
- PostgreSQL
- Yarn or npm

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd task-manager-app
   ```

2. Install server dependencies:
   ```
   cd server
   npm install
   ```

3. Install client dependencies:
   ```
   cd client
   npm install
   ```

4. Set up the database:
   - Create a PostgreSQL database.
   - Update the database connection string in `prisma/schema.prisma`.

5. Run Prisma migrations:
   ```
   npx prisma migrate dev --name init
   ```

6. Start the server:
   ```
   cd server
   npm run dev
   ```

7. Start the client:
   ```
   cd client
   npm start
   ```

## Usage
- Navigate to `http://localhost:3000` to access the application.
- Use the login and registration pages to create an account and manage tasks.

## Deployment
- Deploy the server on Railway or Render.
- Deploy the client on Vercel.

## Contributing
Feel free to submit issues or pull requests for improvements and bug fixes.