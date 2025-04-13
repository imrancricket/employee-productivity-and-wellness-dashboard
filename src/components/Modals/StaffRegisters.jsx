import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Grid, MenuItem, TextField, colors } from '@mui/material';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { addStaff } from '../../features/slices/StaffSlice';


const initialValues = {
    first_name: "",
    middle_name: "",
    last_name: "",
    joining_date: "",
    gender: "",
    department: "",
    position: "",
    phone: "",
    email: ""
};

export default function ScrollDialog({ open, onClose }) {

    const [scroll, setScroll] = React.useState('paper');
    const descriptionElementRef = React.useRef(null);
    const dispatch = useDispatch();
    // const selector = useSelector(state => state);

    React.useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);

    const { values, handleChange, handleBlur, handleSubmit, errors, touched } = useFormik({
        initialValues: initialValues,
        // validationSchema: CoursesSchema,
        onSubmit: (values) => {
            dispatch(addStaff(values))
        }
    })

    const genderList = [
        { name: "MALE" },
        { name: "FEMALE" },
        { name: "OTHERS" }
    ];

    return (
        <React.Fragment>
            <Dialog
                open={open}
                onClose={onClose}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
                maxWidth={"lg"}
            >
                <form onSubmit={handleSubmit}>
                    <DialogTitle id="scroll-dialog-title" variant='p' component={"h4"} color={"#17a2b8"}>BASIC INFORMATION</DialogTitle>
                    <DialogContent dividers={scroll === 'paper'}>
                        <DialogContentText
                            id="scroll-dialog-description"
                            ref={descriptionElementRef}
                            tabIndex={-1}
                        >
                            <Grid container rowSpacing={2} columnSpacing={2}>

                                <Grid item xs={4}>
                                    <TextField label="First Name"
                                        fullWidth
                                        id="outlined-basic"
                                        variant="outlined"
                                        size="small"
                                        name='first_name'
                                        value={values.first_name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        helperText={errors.first_name}
                                        FormHelperTextProps={{ sx: { color: "red" } }}
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField label="Middle Name"
                                        fullWidth
                                        id="outlined-basic"
                                        variant="outlined"
                                        size="small"
                                        name='middle_name'
                                        value={values.middle_name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        helperText={errors.middle_name}
                                        FormHelperTextProps={{ sx: { color: "red" } }}
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField label="Last Name"
                                        fullWidth
                                        id="outlined-basic"
                                        variant="outlined"
                                        size="small"
                                        name='last_name'
                                        value={values.last_name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        helperText={errors.last_name}
                                        FormHelperTextProps={{ sx: { color: "red" } }}
                                    />
                                </Grid>
                                <Grid item xs={3}>
                                    <TextField label="Joining Date"
                                        fullWidth
                                        id="outlined-basic"
                                        variant="outlined"
                                        size="small"
                                        name='joining_date'
                                        value={values.joining_date}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        helperText={errors.joining_date}
                                        FormHelperTextProps={{ sx: { color: "red" } }}
                                    />
                                </Grid>
                                <Grid item xs={3}>
                                    <TextField label="Gender"
                                        fullWidth
                                        id="outlined-basic"
                                        variant="outlined"
                                        size="small"
                                        name='gender'
                                        value={values.gender}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        helperText={errors.gender}
                                        FormHelperTextProps={{ sx: { color: "red" } }}
                                        select>
                                        {genderList.map((item) => {
                                            return (
                                                <MenuItem key={item.name} value={item.name}>
                                                    {item.name}
                                                </MenuItem>
                                            )
                                        })}
                                    </TextField>
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField label="Department"
                                        fullWidth
                                        id="outlined-basic"
                                        variant="outlined"
                                        size="small"
                                        name='department'
                                        value={values.department}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        helperText={errors.department}
                                        FormHelperTextProps={{ sx: { color: "red" } }}
                                    />
                                </Grid>
                                <Grid item xs={3}>
                                    <TextField label="Position"
                                        fullWidth
                                        id="outlined-basic"
                                        variant="outlined"
                                        size="small"
                                        name='position'
                                        value={values.position}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        helperText={errors.position}
                                        FormHelperTextProps={{ sx: { color: "red" } }}
                                    />
                                </Grid>
                                <Grid item xs={3}>
                                    <TextField label="Phone"
                                        fullWidth
                                        id="outlined-basic"
                                        variant="outlined"
                                        size="small"
                                        name='phone'
                                        value={values.phone}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        helperText={errors.phone}
                                        FormHelperTextProps={{ sx: { color: "red" } }}
                                    />
                                </Grid>
                                <Grid item xs={3}>
                                    <TextField label="Email"
                                        fullWidth
                                        id="outlined-basic"
                                        variant="outlined"
                                        size="small"
                                        name='email'
                                        value={values.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        helperText={errors.email}
                                        FormHelperTextProps={{ sx: { color: "red" } }}
                                    />
                                </Grid>
                            </Grid>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={onClose}>Cancel</Button>
                        <Button onClick={onClose} type='submit'>Submit</Button>
                    </DialogActions>
                </form>
            </Dialog>
        </React.Fragment>
    );
}