import React, { useState } from 'react'
import { Box, Button, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import StickyHeadTable from '../components/Table';
import ScrollDialog from '../components/Modals/StaffRegisters';

function Staff() {
  const [openModal, setOpenModal] = useState(false);
  const [staff, setStaff] = useState([]);
  return (
    <>
      <Box>
        <Box sx={{ display: "flex", justifyContent: "flex-start", marginBottom: 5 }}>
          <Typography variant="h4" component={"h4"}>Staff</Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            sx={{ marginLeft: 3 }}
            onClick={() => {
              setOpenModal(!openModal);
            }}
          >
            <AddIcon sx={{ fontSize: 25 }} />
          </Button>
        </Box>
        <ScrollDialog open={openModal} onClose={() => { setOpenModal(false) }} />
        <StickyHeadTable type="staff" rows={staff} />
      </Box>
    </>
  )
}

export default Staff;