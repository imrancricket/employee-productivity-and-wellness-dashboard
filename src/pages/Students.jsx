import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import PositionedSnackbar from "../components/snackBar";
import { useDispatch } from "react-redux";
import { setBadge } from "../features/slices/StudentSlice";

const Students = () => {
  const [openModal, setOpenModal] = useState(false);
  const [showTextField, setShowTextField] = useState(false);
  const [feedbackText, setFeedbackText] = useState("");
  const [extraFeedbackText, setExtraFeedbackText] = useState("");
  const [snackState, setSnackState] = useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = snackState;
  const [snackMessage, setSnackMessage] = useState("");
  const [error, setError] = useState("");
  const [isError, setIsError] = useState("");

  const dispatch = useDispatch();

  const handleSubmitExtraFeedback = () => {
    if (extraFeedbackText.trim().length <= 0) {
      setIsError("Required*");
      return;
    }
    setSnackState({ vertical: "top", horizontal: "center", open: true });
    setOpenModal(false);
  };

  const handleClose = () => {
    setSnackState({ ...snackState, open: false });
  };

  const handleSubmit = () => {
    if (feedbackText.trim().length <= 0) {
      setError("Required**");
      return;
    }
    setOpenModal(true);
    setFeedbackText("");
  };

  return (
    <>
      <Box>
        <p style={{ fontSize: "16px", fontWeight: "bold", color: "#4a5568" }}>
          Hope your week brings great progress! Take a deep breath and share
          your feelings.🙂
        </p>
        <div
          style={{
            display: "flex",
            marginTop: 10,
            columnGap: 10,
          }}
        >
          <div style={{ width: "70%" }}>
            <TextField
              sx={{ width: "100%" }}
              id="outlined-multiline-static"
              label="share your feedback.....*"
              multiline
              rows={4}
              value={feedbackText}
              onChange={(e) => {
                setFeedbackText(e.target.value);
              }}
              helperText={error}
            />
          </div>
          <div style={{}}>
            <Button variant="outlined" onClick={handleSubmit}>
              Submit
            </Button>
          </div>
        </div>
        {openModal && (
          <Dialog
            open={openModal}
            onClose={() => setOpenModal(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle
              id="alert-dialog-title"
              sx={{ fontSize: "20px", color: "#4a5568" }}
            >
              {"Tell Us What Made You Feel Great This Week😊"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                <div>
                  <h4 style={{ fontSize: "16px" }}>
                    Tell us about something you're proud of this week!
                  </h4>
                  <RadioGroup
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    onChange={(e) => {
                      const currValue = e.target.value;
                      if (currValue === "1") {
                        setShowTextField(true);
                      } else {
                        setShowTextField(false);
                      }
                    }}
                  >
                    <FormControlLabel
                      sx={{}}
                      value="1"
                      control={<Radio size={"small"} />}
                      label="Yes, I did something extra!"
                    />
                    <FormControlLabel
                      value="0"
                      control={<Radio size={"small"} />}
                      label="Not this time, but I'm trying!"
                    />
                  </RadioGroup>
                </div>
                {showTextField && (
                  <div style={{ marginTop: 20 }}>
                    <TextField
                      sx={{ width: "100%" }}
                      placeholder="Tell us what you did"
                      value={extraFeedbackText}
                      onChange={(e) => setExtraFeedbackText(e.target.value)}
                      helperText={isError}
                    />
                  </div>
                )}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button
                style={{ textTransform: "none" }}
                onClick={() => {
                  setOpenModal(false);
                }}
              >
                Cancel
              </Button>
              <Button
                variant={"contained"}
                style={{ textTransform: "none" }}
                onClick={() => {
                  if (showTextField) {
                    setSnackMessage(
                      "Great job! You've unlocked the ⭐ 'Extra Mile' badge!"
                    );
                    dispatch(setBadge("Extra Mile"));
                  } else {
                    setSnackMessage(
                      "That's okay! Progress is a journey — keep going, you're doing great 💪"
                    );
                  }
                  handleSubmitExtraFeedback();
                }}
                autoFocus
              >
                Save
              </Button>
            </DialogActions>
          </Dialog>
        )}
        <PositionedSnackbar
          handleClose={handleClose}
          open={open}
          vertical={vertical}
          horizontal={horizontal}
          message={snackMessage}
        />
      </Box>
    </>
  );
};
export default Students;