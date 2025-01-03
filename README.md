# Fullstack Text Management Application

This is a fullstack application that enables users to add, view, and delete text entries. It is built using modern web development technologies.

## Tech Stack

- **Frontend:** [Next.js](https://nextjs.org/)
- **Backend:** [Prisma](https://www.prisma.io/) ORM
- **Database:** [PostgreSQL](https://www.postgresql.org/)
- **Deployment:** Database hosted on [Vercel](https://vercel.com/)

## Features

- **Add Text:** Users can add new text entries.
- **View Text:** Users can view all text entries.
- **Delete Text:** Users can delete existing text entries.

## Getting Started

### Prerequisites

- Node.js installed on your machine.
- Access to the `.env` file containing necessary environment variables.
  
### Screenshots


<img width="840" alt="Знімок екрана 2025-01-03 о 21 01 55" src="https://github.com/user-attachments/assets/acd303b2-d789-48f7-9387-cf260d78f2b5" />
<img width="664" alt="Знімок екрана 2025-01-03 о 21 02 12" src="https://github.com/user-attachments/assets/ab41a960-1b2e-4231-b53f-55bf243ce004" />
<img width="1728" alt="Знімок екрана 2025-01-03 о 21 03 00" src="https://github.com/user-attachments/assets/fdc54eab-f7be-4e2f-803f-eb9c6422694d" />

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/M-Maksym/fullstack-next-prisma.git
   ```

2. Navigate to the project directory:
   ```bash
   cd fullstack-next-prisma
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Obtain the `.env` file from the project administrator and place it in the root of the project.

### Running the Application

1. Run the development server:
   ```bash
   npm run dev
   ```

2. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Deployment

The application is designed to be deployed on Vercel. For detailed instructions, refer to the [Vercel Deployment Documentation](https://vercel.com/docs).

## Database Setup

The application uses PostgreSQL as its database, managed with Prisma. Ensure that the database URL is correctly set in the `.env` file.

## Environment Variables


Ensure these are correctly set in the `.env` file before running the application.

## License

This project is licensed under the MIT License.
