import * as yup from "yup";

export const StudentSchema = yup.object({
  first_name: yup.string().required("First Name is required"),
  middle_name: yup.string(),
  last_name: yup.string().required("Last Name is required"),
  contact_no: yup.string()
    .matches(/^\d{10}$/, "Contact Number must be 10 digits")
    .required("Contact Number is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirm_password: yup.string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
  address: yup.string().required("Address is required"),
  pincode: yup.string()
    .matches(/^\d{6}$/, "Pincode must be 6 digits")
    .required("Pincode is required"),
  roll_no: yup.string().required("Roll Number is required"),
  faculty_name: yup.string().required("Faculty Name is required"),
  department: yup.string().required("Department is required"),
  branch: yup.string().required("Branch is required"),
  academic: yup.string().required("Academic Year is required"),
  gender: yup.string().required("Gender is required"),
});

export const CoursesSchema = yup.object({
  add_branch: yup.string().required("Branch name is required"),
  active_students: yup
    .string()
    .required("Number of active students is required"),
});

export const SyllabusSchema = yup.object({
  course_name: yup.string().required("Course name is required"),
  code: yup.string().required("Subject code is required"),
  subject: yup.string().required("Subject name is required"),
});
