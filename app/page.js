"use client";

import { useEffect, useState } from "react";
import { Container, Typography, Card, CardContent, Avatar, IconButton } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

export default function Resume() {
  const [resumes, setResumes] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3001/api/resumes")
      .then((res) => res.json())
      .then((data) => setResumes(data))
      .catch((err) => console.error("Error fetching resumes:", err));
  }, []);

  const nextResume = () => setIndex((prev) => (prev + 1) % resumes.length);
  const prevResume = () => setIndex((prev) => (prev - 1 + resumes.length) % resumes.length);

  if (resumes.length === 0) return <Typography>Loading...</Typography>;

  return (
    <Container maxWidth="md" style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh" }}>
      <IconButton onClick={prevResume}>
        <ArrowBack fontSize="large" />
      </IconButton>
      <Card sx={{ maxWidth: 600, padding: 3, textAlign: "center" }}>
        <Avatar src={resumes[index].avatar} sx={{ width: 100, height: 100, margin: "auto" }} />
        <CardContent>
          <Typography variant="h4">{resumes[index].name}</Typography>
          <Typography variant="h6" color="text.secondary">{resumes[index].title}</Typography>
          <Typography variant="body1">Age: {resumes[index].age}</Typography>
          <Typography variant="body1">Address: {resumes[index].address}</Typography>
          <Typography variant="body1">Email: {resumes[index].email}</Typography>
          <Typography variant="body1">Phone: {resumes[index].phone}</Typography>
          <Typography variant="body1" sx={{ backgroundColor: "#4caf50", color: "white", padding: "5px", borderRadius: "5px" }}>
            {resumes[index].status}
          </Typography>
          <Typography variant="h6" mt={2}>Experience</Typography>
          {resumes[index].experience.map((exp, i) => (
            <Typography key={i} variant="body2">{exp}</Typography>
          ))}
          <Typography variant="h6" mt={2}>Tech Skills</Typography>
          <Typography variant="body2">{resumes[index].skills}</Typography>
          <Typography variant="h6" mt={2}>Languages</Typography>
          <Typography variant="body2">{resumes[index].languages}</Typography>
        </CardContent>
      </Card>
      <IconButton onClick={nextResume}>
        <ArrowForward fontSize="large" />
      </IconButton>
    </Container>
  );
}
