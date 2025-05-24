# Resume — Node.js + React

Цей проєкт складається з:

- **Express-серверу (Node.js)** — який віддає список резюме через API.
- **React-фронтенду** — який отримує ці дані з сервера та відображає у вигляді вебсторінки.



### 1. Клонування репозиторію
```bash
git clone https://github.com/Huston7/Resume_react.git
cd resume-viewer
```

---

### 2. Запуск сервера (Node.js + Express)

```bash
cd server
npm install
node server.js
```

Сервер запуститься на: `http://localhost:3001`

API доступне за адресою: [http://localhost:3001/api/resumes](http://localhost:3001/api/resumes)

---

### 3. Запуск клієнта (React)

```bash
cd ../client
npm install
npm run dev   
```

Клієнт зазвичай працює на: `http://localhost:3000`

---

## Важливо

- Клієнт отримує дані з сервера за адресою `http://localhost:3001/api/resumes`. Переконайтеся, що сервер **запущений перед запуском клієнта**.
- У коді клієнта має бути `fetch("http://localhost:3001/api/resumes")`.

---

## Залежності

### Сервер:
- `express`
- `cors`

### Клієнт:
- `react`
- `@mui/material`
- `@mui/icons-material`

---

