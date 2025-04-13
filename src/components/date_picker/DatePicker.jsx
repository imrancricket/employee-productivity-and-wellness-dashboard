import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { useState } from 'react';

export default function BasicDatePicker() {
    const [date, setDate] = useState("");
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
                <DatePicker label="Date Of Birth"
                    sx={{ width: "100%" }}
                    slotProps={{ textField: { size: "small" } }}
                    onChange={(e) => { setDate(e.$d) }}
                    maxDate={dayjs()}
                />
            </DemoContainer>
        </LocalizationProvider>
    );
}