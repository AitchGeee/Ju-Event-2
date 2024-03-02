import {
    Box,
    Button,
    Container,
    FormControl,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    SelectChangeEvent,
    TextField,
    Typography
} from '@mui/material';
import {DateField, DesktopDatePicker, TimePicker} from '@mui/x-date-pickers';
import dayjs, {Dayjs} from 'dayjs';
import {useState} from 'react';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {DemoContainer} from '@mui/x-date-pickers/internals/demo';
import EventsLayout from '../../layouts/pages/EventsLayout';


export default function AddEvent() {
    function handleInputChange(arg0: string, value: string): void {
        throw new Error('Function not implemented.');
    }


    const [dateValue, setDateValue] = useState<Dayjs | null>(dayjs());


    const [eventLocation, setEventLocation] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setEventLocation(event.target.value as string);
    };
    return (
        //forget password sign in sign up notification by email/sms for example , add phone number
        <EventsLayout index={2} pageName={'Add Event'}>
            <Container
                component="main"
                maxWidth="xs"
                style={{
                    marginTop: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Paper
                    elevation={3}
                    style={{padding: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center'}}
                >
                    <Typography component="h1" variant="h5">
                        Add Event
                    </Typography>
                    <form style={{width: '100%', marginTop: '1rem'}}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="eventName"
                            label="Event Name"
                            name="eventName"
                            autoFocus/>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            multiline
                            maxRows={4}
                            rows={4}
                            id="eventDescription"
                            label="Event Description"
                            name="eventDescription"
                            autoFocus/>

                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DatePicker']}>
                                <DesktopDatePicker label="Event Date"/>


                                <TimePicker label="Event Time"/>

                            </DemoContainer>
                        </LocalizationProvider>

                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="eventDuration"
                            label="Event Duration"
                            name="eventDuration"
                            autoFocus/>

                        <Box sx={{minWidth: 120}}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Event Location</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={eventLocation}
                                    label="Event Location"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={1}>IT</MenuItem>
                                    <MenuItem value={2}>Business</MenuItem>
                                    <MenuItem value={3}>Science</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>

                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="eventCapacity"
                            label="Event Capacity"
                            name="eventCapacity"
                            autoFocus/>

                        <Button
                            type="button"
                            fullWidth
                            variant="contained"
                            color="success"
                            style={{marginTop: '2rem'}}

                        >
                            Add Event
                        </Button>
                    </form>
                </Paper>

            </Container>
        </EventsLayout>
    );
};
 