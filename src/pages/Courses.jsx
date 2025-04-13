import React, { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const rows = [
  {
    id: 1,
    question: "Who should I report to if I face any issues at work?",
    answer: `You should first reach out to your immediate supervisor or team lead for any work-related concerns. If the issue is more personal, sensitive, or involves your direct manager, you can escalate it to the HR representative assigned to your department. We're here to support you — never hesitate to speak up.`,
  },
  {
    id: 2,
    question: "What’s the company’s expectation of work hours and breaks?",
    answer: `Our standard working hours are 9:30 AM to 6:30 PM (Monday to Friday), with a flexible 1-hour break for lunch. We also encourage short 5–10 minute wellness breaks during the day to recharge. Punctuality and consistency are appreciated, but if you need flexibility, just communicate with your manager in advance.`,
  },
  {
    id: 3,
    question: "How will my performance be reviewed or evaluated?",
    answer: "Performance is usually evaluated based on a combination of",
    list: [
      "Task completion & quality of work",
      "Timeliness and consistency",
      "Communication and collaboration",
      "Willingness to learn and take feedback",
    ],
  },
  {
    id: 4,
    question: "Who can I contact if I need access to a Git Repository?",
    answer:
      "For Git access, you should reach out to your project lead or technical mentor. They will initiate access or raise a request with the DevOps or IT team if necessary.",
  },
];

function Courses() {
  return (
    <>
      <Box
        sx={{ display: "flex", justifyContent: "flex-start", marginBottom: 5 }}
      >
        <div>
          {rows.map((item, index) => (
            <Accordion key={index}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{ backgroundColor: "#ECFDF5" }}
              >
                <p style={{color:"#4a5568"}}>
                  <span style={{ color: "#065F46" }}>Question: </span>
                  {item.question}
                </p>
              </AccordionSummary>
              <AccordionDetails sx={{ color: "#95a2b7" }}>
                {`Ans. ${item.answer}`}
                {item.list && item.list.map((i, idx) => <li key={idx}>{i}</li>)}
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </Box>
    </>
  );
}

export default Courses;
