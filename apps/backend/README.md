# Backend – User Management

This is the backend API for the User Management system, built with Node.js, Express, and Prisma.

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

Create a `.env` file in this folder with:

```
DATABASE_URL=your_postgres_connection_string
JWT_SECRET=your_jwt_secret
```

### 3. Run database migrations

```bash
npx prisma migrate dev --name init
```

### 4. Generate Prisma client

```bash
npx prisma generate
```

### 5. Start the development server

```bash
npm run dev
```

API will be available at `http://localhost:5000/api`.

## Useful Scripts

- `npx prisma studio` – Open Prisma Studio to view and edit your database.
- `npm run build` – Build for production.
- `npm start` – Start in production mode.

## Troubleshooting

- Ensure PostgreSQL is running and accessible.
- Check `.env` values if you get connection/auth errors.
