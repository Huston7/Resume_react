const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3001;

app.use(cors());

const resumes = [
  {
    name: "Igor Pyavka",
    title: "Developer",
    age: 19,
    address: "24058, Kyiv",
    email: "igor@company.com",
    phone: "+1 256 254 84 56",
    status: "Open to new challenges",
    experience: [
      "2018 - Present: Senior Developer at Tech Solutions",
      "2015 - 2018: Software Engineer at WebCorp",
      "2012 - 2015: Junior Developer at CodeMasters",
    ],
    skills: "HTML, CSS, JavaScript, React, Node.js, Python, SQL",
    languages: "English, Ukrainian, Russian",
    avatar: "/img/profile.jpg",
  },
  {
    name: "John Doe",
    title: "Software Engineer",
    age: 25,
    address: "1234 Elm Street, San Francisco, CA, USA",
    email: "johndoe@example.com",
    phone: "+1 987 654 32 10",
    status: "Looking for new opportunities",
    experience: [
      "2019 - Present: Full-stack Developer at Startup X",
      "2017 - 2019: Frontend Developer at WebTech",
    ],
    skills: "React, Vue, Angular, Node.js, PHP, MySQL",
    languages: "English, Spanish",
    avatar: "/img/john.jpg",
  },
];

app.get("/api/resumes", (req, res) => {
  res.json(resumes);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});