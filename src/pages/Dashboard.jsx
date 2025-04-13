import React, { useEffect, useState } from "react";
import BasicCard from "../components/Cards";
import { Box, Typography, Grid2 } from "@mui/material";
import CelebrationIcon from "@mui/icons-material/Celebration";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import { useSelector } from "react-redux";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import Chatbot from "../components/chatBotUi";

function Dashboard() {
  const [greetingText, setGreetingText] = useState("");
  const selector = useSelector((s) => s.add_students);
  const selectorWellness = useSelector((s) => s.add_syllabus);

  const data = [
    {
      id: 1,
      course: "Upcoming Activity",
      total_students: "Innovation weekend",
      icon: <CelebrationIcon />,
    },
    {
      id: 2,
      course: "Remark",
      total_students: "Great improvement in this week.",
      icon: <SentimentSatisfiedAltIcon />,
    },
  ];
  useEffect(() => {
    const curHr = new Date().getHours();
    if (curHr < 12) {
      setGreetingText("good morning");
    } else if (curHr < 18) {
      setGreetingText("good afternoon");
    } else {
      setGreetingText("good evening");
    }
  }, [greetingText]);

  return (
    <>
      <Box>
        <Typography variant="h4" component={"h4"} color={"#4a5568"}>
          Hello Harry,{greetingText}!
        </Typography>

        <Grid2 container spacing={4} marginTop={2}>
          {data.map((item, index) => {
            return (
              <>
                <Grid2 item xs={4} key={index}>
                  <BasicCard
                    course={item.course}
                    total_students={item.total_students}
                    icon={item.icon}
                  />
                </Grid2>
              </>
            );
          })}
          {selector.message && (
            <Grid2 item xs={4}>
              <BasicCard
                course={"Celebrate Your Extra Effort!"}
                total_students={selector.message + "⭐"}
                icon={<EmojiEventsIcon />}
              />
            </Grid2>
          )}
          {selectorWellness.badge > 0 && (
            <Grid2 item xs={4}>
              <BasicCard
                course={"Daily Champion"}
                total_students={
                  "You’ve completed all your activities today! 🥷"
                }
                icon={<EmojiEventsIcon />}
              />
            </Grid2>
          )}
        </Grid2>
      </Box>
      {/* <Chatbot /> */}
    </>
  );
}

export default Dashboard;
