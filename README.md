# Task 2 — Node.js User Filter

A Node.js script that fetches user data from JSONPlaceholder API, filters users by company keywords, and formats the output using modern ES6 JavaScript.

## Features
- Fetches live data from `https://jsonplaceholder.typicode.com/users`
- Filters users whose company name/catchPhrase/bs contains **"group"** or **"service"** (case-insensitive)
- Uses **ES6** features: `async/await`, arrow functions, object destructuring, template literals
- Formats output as: `User: [Name] | Email: [Email] | City: [City]`

## How to Run

```bash
node app.js
```

## Expected Output

```
=== Filtered & Formatted Users ===

User: Patricia Lebsack | Email: Julianne.OConner@kory.org | City: South Elvis
User: Kurtis Weissnat | Email: Telly.Hoeger@billy.biz | City: Howemouth
User: Nicholas Runolfsdottir V | Email: Sherwood@rosamond.me | City: Aliyaview

Total matched users: 3
```

## Tech Stack
- Node.js (v18+)
- Vanilla JavaScript (ES6)
- JSONPlaceholder API
