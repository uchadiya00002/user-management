# User Management Frontend

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

### 1. Install dependencies

From the `apps/frontend` folder:

```bash
npm install
```

---

### 2. Set up environment variables

Create a `.env.local` file in `apps/frontend` if you need to set API endpoints or other secrets. Example:

```
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

---

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

---

### 4. Build for production

```bash
npm run build
npm start
```

---

### 5. Project Structure

- `app/` - Main Next.js app directory
- `components/` - Reusable React components
- `pages/` - Route pages (if using pages directory)
- `public/` - Static assets

---

### 6. API Integration

This frontend communicates with the backend API at `http://localhost:5000/api`.  
Update `NEXT_PUBLIC_API_URL` in `.env.local` if your backend runs elsewhere.

---

### 7. Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)

---

### 8. Deployment

Deploy easily on [Vercel](https://vercel.com/) or any Node.js hosting platform.

---

### 9. Troubleshooting

- Ensure the backend server is running and accessible.
- Check `.env.local` for correct API URL.
