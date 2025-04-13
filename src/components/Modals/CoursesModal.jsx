import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Grid, TextField, colors } from '@mui/material';
import { useFormik } from 'formik';
import { CoursesSchema, SyllabusSchema } from "../../yupSechma/YupSechma";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addCourses } from '../../features/slices/CoursesSlice';
import { addSyllabus } from '../../features/slices/SyllabusSlice';


const initialValuesForCourse = {
    add_branch: "",
    active_students: "",
    about_branch: ""
};

const initialValuesForSyllabus = {
    course_name: "",
    code: "",
    subject: ""
}

export default function ScrollDialog({ open, onClose, type }) {

    const [scroll, setScroll] = React.useState('paper');
    const descriptionElementRef = React.useRef(null);
    const dispatch = useDispatch();

    React.useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);

    const textFieldList = {
        "courses": [
            { label: "Add Branch", name: "add_branch" },
            { label: "Active Students", name: "active_students" },
            { label: "About Branch", name: "about_branch" }
        ],
        "syllabus": [
            { label: "Course Name", name: "course_name" },
            { label: "Code", name: "code" },
            { label: "Subject", name: "subject" }
        ]
    }

    const { values, handleChange, handleBlur, handleSubmit, errors, touched } = useFormik({
        initialValues: type === "courses" ? initialValuesForCourse : initialValuesForSyllabus,
        // validationSchema: type === "courses" ? CoursesSchema : SyllabusSchema,
        onSubmit: (values) => {
            type === "courses" ? dispatch(addCourses(values)) : dispatch(addSyllabus(values))
        }
    })

    return (
        <React.Fragment>
            <Dialog
                open={open}
                onClose={onClose}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <form onSubmit={handleSubmit}>
                    <DialogTitle id="scroll-dialog-title" variant='h4' component={"h4"}>{type == "courses" ? "Add Courses" : "Add Syllabus"}</DialogTitle>
                    <DialogContent dividers={scroll === 'paper'}>
                        <DialogContentText
                            id="scroll-dialog-description"
                            ref={descriptionElementRef}
                            tabIndex={-1}
                        >
                            <Grid container rowSpacing={2}>
                                {
                                    textFieldList[type]?.map((item) => {
                                        return (
                                            <Grid item xs={12}>
                                                <TextField key={item.name}
                                                    label={item.label}
                                                    fullWidth
                                                    name={item.name}
                                                    value={values[item.name]}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    helperText={errors[item.name]}
                                                    FormHelperTextProps={{ error: true }}
                                                    touched={touched}
                                                />
                                            </Grid>
                                        )
                                    })
                                }
                            </Grid>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={onClose}>Cancel</Button>
                        <Button type='submit'>Submit</Button>
                    </DialogActions>
                </form>
            </Dialog>
        </React.Fragment>
    );
}