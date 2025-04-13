import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { MenuItem, TextField, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import BasicDatePicker from "../date_picker/DatePicker";
import { useFormik } from "formik";
import { addStudents } from "../../features/slices/StudentSlice";
import { useDispatch } from "react-redux";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Uploader } from "rsuite";
import "rsuite/dist/rsuite.css";
import { StudentSchema } from "../../yupSechma/YupSechma";
import Grid from "@mui/material/Grid2";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const initialValues = {
  first_name: "",
  middle_name: "",
  last_name: "",
  contact_no: "",
  email: "",
  password: "",
  confirm_password: "",
  address: "",
  pincode: "",
  roll_no: "",
  faculty_name: "",
  department: "",
  branch: "",
  academic: "",
  gender: "",
};

const facultyNameList = [
  { name: "V.K Sharma" },
  { name: "Ram Kumar" },
  { name: "Abdul Khan" },
];

export default function CustomizedDialogs({ opens, onCloses, setRows }) {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = React.useState(false);
  const [fileInfo, setFileInfo] = React.useState(null);

  const { values, handleSubmit, handleChange, errors, touched, handleBlur } =
    useFormik({
      initialValues: initialValues,
      validationSchema: StudentSchema,
      onSubmit: (values) => {
        let formData = new FormData();
        for (let [name, value] of Object.entries(values)) {
          formData.append(name, value);
        }
        formData.append("profile", fileInfo);

        console.log(values, "-------formData");

        fetch("http://localhost:5081/api/create/panel/student", {
          method: "POST",
          headers: {
              'Content-Type': 'application/json'
          },
          body: formData,
        })
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log(data, "--------data");
            if (data.type == "success") {
              setRows((prev) => [...prev, data.data.student]);
              dispatch(addStudents(data.data.student));
            }
          })
          .catch((err) => {
            console.log(err.message, "--------err");
          });
      },
    });

  return (
    <React.Fragment>
      <BootstrapDialog
        onClose={onCloses}
        aria-labelledby="customized-dialog-title"
        open={opens}
        maxWidth={"lg"}
      >
        <form onSubmit={handleSubmit}>
          <DialogTitle
            // sx={{ m: 0, p: 2, fontFamily: "sans-serif" }}
            id="customized-dialog-title"
            className="text-center m-0 p-2 font-sans !text-3xl !text-blue-500 !font-bold"
          >
            Add Student
          </DialogTitle>
          <IconButton
            aria-label="close"
            onClick={onCloses}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
          <DialogContent dividers>
            <Grid container spacing={2} sx={{ marginBottom: 2 }}>
              <Grid size={{ xs: 4}}>
                <TextField
                  label="First Name"
                  fullWidth
                  size="large"
                  name="first_name"
                  value={values.first_name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.first_name && !!errors.first_name}
                  helperText={touched.first_name && errors.first_name}
                />
              </Grid>
              <Grid size={{ xs: 4}}>
                <TextField
                  label="Middle Name"
                  fullWidth
                  size="large"
                  name="middle_name"
                  value={values.middle_name}
                  onChange={handleChange}
                />
              </Grid>
              <Grid size={{ xs: 4}}>
                <TextField
                  label="Last Name"
                  fullWidth
                  size="large"
                  name="last_name"
                  value={values.last_name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.last_name && !!errors.last_name}
                  helperText={touched.last_name && errors.last_name}
                />
              </Grid>
              <Grid size={{ xs: 4}}>
                <TextField
                  label="Contact Number"
                  fullWidth
                  size="large"
                  type="number"
                  name="contact_no"
                  value={values.contact_no}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.contact_no && !!errors.contact_no}
                  helperText={touched.contact_no && errors.contact_no}
                />
              </Grid>
              <Grid size={{ xs: 4}}>
                <TextField
                  label="Email"
                  fullWidth
                  size="large"
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.email && !!errors.email}
                  helperText={touched.email && errors.email}
                />
              </Grid>
              <Grid size={{ xs: 4}}>
                <TextField
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  fullWidth
                  size="large"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.password && !!errors.password}
                  helperText={touched.password && errors.password}
                  type="password"
                  InputProps={{
                    endAdornment: false ? (
                      <IconButton>
                        <Visibility />
                      </IconButton>
                    ) : (
                      <IconButton>
                        <VisibilityOff />
                      </IconButton>
                    ),
                  }}
                />
              </Grid>
              <Grid size={{ xs: 4}}>
                <TextField
                  id="outlined-basic"
                  type="password"
                  label="Confirm Password"
                  variant="outlined"
                  fullWidth
                  size="large"
                  name="confirm_password"
                  value={values.confirm_password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.confirm_password && !!errors.confirm_password}
                  helperText={
                    touched.confirm_password && errors.confirm_password
                  }
                  InputProps={{
                    endAdornment: false ? (
                      <IconButton>
                        <Visibility />
                      </IconButton>
                    ) : (
                      <IconButton>
                        <VisibilityOff />
                      </IconButton>
                    ),
                  }}
                />
              </Grid>
              <Grid size={{ xs: 12}}>
                <TextField
                  id="outlined-basic"
                  label="Address"
                  variant="outlined"
                  fullWidth
                  size="large"
                  multiline
                  rows={4}
                  name="address"
                  value={values.address}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.address && !!errors.address}
                  helperText={touched.address && errors.address}
                />
              </Grid>
              <Grid size={{ xs: 4}}>
                <TextField
                  id="outlined-basic"
                  label="Pincode"
                  variant="outlined"
                  fullWidth
                  size="large"
                  type="number"
                  name="pincode"
                  value={values.pincode}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.pincode && !!errors.pincode}
                  helperText={touched.pincode && errors.pincode}
                />
              </Grid>
              <Grid size={{ xs: 4}}>
                <BasicDatePicker size="large" />
              </Grid>
              <Grid size={{ xs: 4}}>
                <TextField
                  id="outlined-basic"
                  label="Roll Number"
                  variant="outlined"
                  fullWidth
                  size="large"
                  name="roll_no"
                  value={values.roll_no}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.roll_no && !!errors.roll_no}
                  helperText={touched.roll_no && errors.roll_no}
                />
              </Grid>
              <Grid size={{ xs: 4}}>
                <TextField
                  id="outlined-basic"
                  label="Faculty Name"
                  variant="outlined"
                  fullWidth
                  size="large"
                  name="faculty_name"
                  value={values.faculty_name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.faculty_name && !!errors.faculty_name}
                  helperText={touched.faculty_name && errors.faculty_name}
                  select
                >
                  {facultyNameList.map((item, index) => {
                    return (
                      <MenuItem key={index} value={item.name}>
                        {item.name}
                      </MenuItem>
                    );
                  })}
                </TextField>
              </Grid>
              <Grid size={{ xs: 4}}>
                <TextField
                  id="outlined-basic"
                  label="Department"
                  variant="outlined"
                  fullWidth
                  size="large"
                  name="department"
                  value={values.department}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.department && !!errors.department}
                  helperText={touched.department && errors.department}
                />
              </Grid>
              <Grid size={{ xs: 4}}>
                <TextField
                  id="outlined-basic"
                  label="Branch"
                  variant="outlined"
                  fullWidth
                  size="large"
                  name="branch"
                  value={values.branch}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.branch && !!errors.branch}
                  helperText={touched.branch && errors.branch}
                />
              </Grid>
              <Grid size={{ xs: 4}}>
                <TextField
                  id="outlined-basic"
                  label="Academic Year"
                  variant="outlined"
                  fullWidth
                  size="large"
                  name="academic"
                  value={values.academic}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.academic && !!errors.academic}
                  helperText={touched.academic && errors.academic}
                />
              </Grid>
              <Grid size={{ xs: 4}}>
                <TextField
                  id="outlined-basic"
                  label="Gender"
                  variant="outlined"
                  fullWidth
                  size="large"
                  name="gender"
                  value={values.gender}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.gender && !!errors.gender}
                  helperText={touched.gender && errors.gender}
                />
              </Grid>
            </Grid>
            <Divider />
            <Grid container sx={{ marginTop: 3 }}>
              <Grid size={{ xs: 6}}>
                <Typography variant="p" component={"h5"}>
                  Profile :-
                </Typography>
                <Uploader
                  draggable
                  autoUpload={false}
                  onChange={(file) => {
                    setFileInfo(file[0].blobFile);
                  }}
                >
                  <div
                    style={{
                      height: 200,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      borderWidth: 4,
                      borderColor: "#ccc",
                      borderStyle: "dashed",
                      borderRadius: "10px",
                      color: "#666",
                      cursor: "pointer",
                      position: "relative",
                    }}
                  >
                    <CloudUploadIcon style={{ fontSize: 50, color: "#000", marginBottom: 10 }} />
                    <span>Click or Drag files to this area to upload</span>
                  </div>
                </Uploader>
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions className="justify-start mx-2 my-2">
            <Button
              autoFocus
              size="large"
              variant="outlined"
              onClick={onCloses}
              className="w-full"
            >
              Discard
            </Button>
            <Button autoFocus size="large" variant="outlined" type="submit" className="w-full">
              Save
            </Button>
          </DialogActions>
        </form>
      </BootstrapDialog>
    </React.Fragment>
  );
}
