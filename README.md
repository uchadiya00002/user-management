## Getting Started

### 1. Install dependencies

From the monorepo root:

```sh
npm install
```

This will install dependencies for both frontend and backend using workspaces.

---

### 2. Set up environment variables

- Create a `.env` file in `apps/backend/` with your database and JWT secret:

```
DATABASE_URL=your_postgres_connection_string
JWT_SECRET=your_jwt_secret
```

---

### 3. Run database migrations

From the backend folder:

```sh
cd apps/backend
npm run prisma:migrate
```

---

### 4. Generate Prisma client

```sh
npm run prisma:generate
```

---

### 5. Start the backend server

```sh
npm run dev --workspace=apps/backend
```

Backend will run on `http://localhost:5000`.

---

### 6. Start the frontend server

From the monorepo root:

```sh
npm run dev --workspace=apps/frontend
```

Frontend will run on `http://localhost:3000`.

---

### 7. Access the application

- Open [http://localhost:3000](http://localhost:3000) in your browser for the frontend.
- Backend API is at [http://localhost:5000/api](http://localhost:5000/api).

---

### 8. Default accounts

- Register a new user via the frontend `/auth/signup`.
- To create an admin, set `role: "ADMIN"` in the database manually or extend the registration form.

---

### 9. Useful scripts

- **Backend:**
  - `npm run prisma:studio` (open Prisma Studio for DB management)
  - `npm run start --workspace=apps/backend` (start backend in production mode)
- **Frontend:**
  - `npm run build --workspace=apps/frontend` (build frontend for production)
  - `npm run start --workspace=apps/frontend` (start frontend in production mode)

---

### 10. Troubleshooting

- Make sure PostgreSQL is running and accessible.
- Check `.env` values if you get connection/auth errors.
