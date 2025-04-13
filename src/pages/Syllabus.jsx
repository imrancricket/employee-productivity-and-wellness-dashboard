import { Box, Radio, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setWellnessBadge } from "../features/slices/SyllabusSlice";

function Syllabus() {
  const dispatch = useDispatch();
  const [activityList, setActivityList] = useState([
    {
      id: 1,
      text: "Stand tall and roll your arms — feel the energy flow!",
      completed: false,
    },
    {
      id: 2,
      text: "Take a refreshing 5-minute walk — clear your mind",
      completed: false,
    },
    {
      id: 3,
      text: "Gently stretch your neck — release the tension",
      completed: false,
    },
    {
      id: 4,
      text: "Close your eyes, breathe deeply for 60 seconds — just be",
      completed: false,
    },
  ]);

  const markActivityCheck = (id) => {
    const updateList = activityList.map((item) => {
      return item.id === id ? { ...item, completed: !item.completed } : item;
    });
    setActivityList(updateList);
  };

  const handleSubmit = () => {
    const filteredList = activityList.some((a) => a.completed === false);
    if (filteredList) {
      alert("Please complete all activities!");
      return;
    }
    alert("Great you have achieve daily wellness activities");
    const abc = activityList.map((i, idx) => {
      return { ...i, completed: false };
    });
    dispatch(setWellnessBadge(1));
    setActivityList(abc);
  };

  return (
    <>
      <Box>
        <h4>Wellness Activities</h4>
        <h5 style={{ marginLeft: 15 }}>
          Take a minute for yourself — feel better, work better.
        </h5>
        <div>
          <div style={{ marginTop: "20px", marginLeft: "25px" }}>
            {activityList.map((item, index) => {
              return (
                <div
                  key={index}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <p style={{ color: "#4a5568", fontSize: "15px" }}>
                    {item.text}
                  </p>
                  <div>
                    <Radio
                      checked={item.completed}
                      onChange={() => {
                        markActivityCheck(item.id);
                      }}
                      name="radio-buttons"
                      inputProps={{ "aria-label": "A" }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              variant={"contained"}
              style={{ textTransform: "none" }}
              onClick={handleSubmit}
            >
              Done
            </Button>
          </div>
        </div>
      </Box>
    </>
  );
}

export default Syllabus;
