import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Avatar, Box, IconButton } from '@mui/material';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CustomizedDialogs from './Modals/StudentRegisters';

const columns = {
    "student": [
        { id: 'roll_no', label: 'ROLL NO.', minWidth: 50 },
        {
            id: 'profile', label: 'PROFILE', minWidth: 70, renderCell: (row) => {
                return (
                    <Avatar>{`${row?.first_name[0] || ""}${row?.last_name[0] || ""}`}</Avatar>
                )
            }
        },
        {
            id: 'first_name',
            label: 'NAME',
            minWidth: 170,
            align: 'center'
        },
        {
            id: 'department',
            label: 'DEPARTMENT',
            minWidth: 50,
            align: 'center'
        },
        {
            id: 'email',
            label: 'EMAIL',
            minWidth: 50,
            align: 'center'
        },
        {
            id: "contact_no",
            label: "PHONE",
            align: 'center',
            minWidth: 50
        },
        {
            id: "academic",
            label: "ADMISSINO DATE",
            align: "center",
            minWidth: 50,
        },
        {
            id: "action",
            label: "ACTIONS",
            align: "center",
            minWidth: 100
        }
    ],
    "staff": [
        {
            id: 'profile',
            label: 'PROFILE',
            minWidth: 70,
            renderCell: (name) => {
                return (
                    <Avatar>{`${name?.split(' ')[0][0]}${name?.split(' ')[1][0]}`}</Avatar>
                )
            }
        },
        {
            id: 'name',
            label: 'NAME',
            minWidth: 170,
            align: 'center'
        },
        {
            id: "phone",
            label: "PHONE",
            align: 'center',
            minWidth: 50
        },
        {
            id: 'designation',
            label: 'DESIGNATION',
            minWidth: 50,
            align: 'center',
            renderCell: () => {
                return "N/A"
            }
        },
        {
            id: 'email',
            label: 'EMAIL',
            minWidth: 50,
            align: 'center'
        },
        {
            id: "joinning_date",
            label: "JOINNING DATE",
            align: "center",
            minWidth: 50,
            renderCell: () => {
                return "N/A"
            }
        },
        {
            id: "action",
            label: "ACTIONS",
            align: "center",
            minWidth: 100
        }
    ],
    "syllabus": [
        { id: 's_no', label: 'S.NO.', minWidth: 50 },
        { id: 'subject', label: 'SUBJECT', minWidth: 100 },
        { id: 'semester', label: 'SEMESTER', minWidth: 50, align: 'center' },
        { id: 'code', label: 'CODE', minWidth: 50, align: 'center' },
        { id: 'action', label: 'ACTIONS', minWidth: 170, align: 'center' }
    ]
};

// const rows = {
//     "student": [
//         { roll_no: 1, profile: null, name: "IMRAN HUSSAIN", department: "Computer Science", email: "imran@gmail.com", phone: 7894561230, admission: "2024-04-01" },
//         { roll_no: 1, profile: null, name: "IMRAN HUSSAIN", department: "Computer Science", email: "imran@gmail.com", phone: 7894561230, admission: "2024-04-01" },
//     ],
//     "staff": [
//         { roll_no: 1, profile: null, name: "IMRAN HUSSAIN", department: "Computer Science", email: "imran@gmail.com", phone: 7894561230, admission: "2024-04-01" },
//         { roll_no: 1, profile: null, name: "IMRAN HUSSAIN", department: "Computer Science", email: "imran@gmail.com", phone: 7894561230, admission: "2024-04-01" },
//     ],
//     "syllabus": [
//         { s_no: 1, subject: "IMRAN HUSSAIN", semester: "Computer Science", code: "imran@gmail.com" },
//         { s_no: 1, subject: "IMRAN HUSSAIN", semester: "Computer Science", code: "imran@gmail.com" },
//     ]
// };

export default function StickyHeadTable(props) {
    // const { type, rows } = props;
    const { type, rows } = props;
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [openModal, setOpenModal] = React.useState(false);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const updateStudent = (id) => {

        let formData = new FormData();
        formData.append("id", id)
        fetch("http://localhost:8081/api/update/panel/student", {
            method: "PUT",
            body: formData
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data, "--------data")
            })
            .catch((err) => {
                console.log(err, "---------err")
            })
    }

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns[type]?.map((column, index) => (
                                <TableCell
                                    // key={column.id}
                                    key={index}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row, index) => {
                                console.log(row,"----------------row")
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                                        {columns[type]?.map((column) => {
                                            const value = row[column?.id];
                                            return (
                                                <>
                                                    <TableCell key={index} align={column.align}>
                                                        {column?.renderCell ? column.renderCell(row) : value || "N/A"}
                                                        {column.label == 'ACTIONS' ? <Box display={"flex"} justifyContent={"flex-end"} gap={1}>
                                                            <IconButton >
                                                                <RemoveRedEyeIcon sx={{ fontSize: 20 }} />
                                                            </IconButton>
                                                            <IconButton onClick={() => {
                                                                updateStudent(row.id);
                                                                <CustomizedDialogs opens={openModal} onCloses={() => { setOpenModal(false) }} />
                                                            }}>
                                                                <EditIcon sx={{ fontSize: 20 }} />
                                                            </IconButton>
                                                            <IconButton >
                                                                <DeleteIcon sx={{ fontSize: 20 }} />
                                                            </IconButton>
                                                        </Box> : null}
                                                    </TableCell>
                                                </>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}