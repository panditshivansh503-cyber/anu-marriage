# Anu Marriage — LocalStorage Edition

A complete marriage expenditure manager using Next.js, JavaScript, Tailwind CSS, Lucide React, Recharts and browser localStorage.

## No database required

There is no MongoDB, Mongoose, Express, API server, Firebase or Supabase in this version.

All people and expenses are saved in the browser's localStorage.

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Features

- Dashboard
- Add people
- Add/edit/delete expenses
- Person assignment
- Search
- Person/category/payment filters
- Sorting
- Person details
- Total expenditure
- Person-wise expenditure
- Category-wise charts
- Monthly reports
- Responsive sidebar and tables
- Indian Rupee formatting

## Important

Because this version uses localStorage:
- Data survives page refreshes in the same browser.
- Data is not automatically shared between devices.
- Clearing browser site data removes the saved data.
- There is no login or cloud synchronization.

For a cloud version later, MongoDB can be added without redesigning the UI.
