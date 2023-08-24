import React from 'react'
import { Box, Button } from '@mui/material';
import Sidebar_Navigation from '../Navigation/sidebar';

export default function EventRequest() {

    return (
        <Box sx={{ display: 'flex' }}>
            <Box sx={{ width: '300px', height: '100vh' }}>
                <Sidebar_Navigation />
            </Box>
            <Box sx={{ maxWidth: '500px', margin: 'auto', display: 'flex', flexDirection: 'column', marginTop: '10px' }}>
                <h1 style={{ textAlign: 'center' }}>Event Request form</h1>
                <article>
                    <p>
                        If you are looking to host an event in your community, please fill out this form in its entirety.
                        Please also be advised that events must be approved by the property management company before they
                        take place. All fields must be completed.
                    </p>
                </article>
                <form>
                    <fieldset>
                        <label htmlFor="eventName"> Name of event you wish to host: </label>
                        <input type='text' name='Event Name' style={{ width: '45%' }} />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="eventDate"> Date of event: </label>
                        <input type='text' name='Event Date' style={{ width: '70%' }} />
                    </fieldset>
                    <fieldset>
                        <label htmlFor='altDate'>Alternative date for event in case of Inclimate weather: </label>
                        <input type='text' name='Alt Date' style={{ width: '90%' }} />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="eventLocation"> Where will the event be held: Address or cross streets. </label>
                        <input type='text' name='Event Locale' style={{ width: '80%' }} />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="eventCity">City the event will be in? </label>
                        <input type="text" name='City of Event' style={{ width: '60%' }} />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="managerInfo">Manager contact information: </label>
                        <textarea name='Event Description' style={{ width: '100%', height: '80px', wordWrap: 'break-word' }} />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="boardInfo"> Board/Comittee Members contact infomation regarding planning: </label>
                        <textarea name='Board INFO' style={{ width: '100%', height: '80px', wordWrap: 'break-word' }} />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="budget">Budget for event? </label>
                        <input type="text" name='Budget' style={{ width: '70%' }} />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="eventDescription"> Event description/Theme: </label>
                        <textarea name='Event Description' style={{ width: '100%', height: '80px', wordWrap: 'break-word' }} />
                    </fieldset>
                    <fieldset>
                        <label htmlFor='eventTime'> Time of event: Please enter start and end time. </label>
                        <input type="text" name='Event Time' style={{ width: '95%' }} />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="homeowners">Number of homeowners? </label>
                        <input type="text" name='BNumHomeowners' style={{ width: '60%' }} />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="attendees">Number of Attendees? </label>
                        <input type="text" name='attendees' style={{ width: '65%' }} />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="ageRange">Age Range: </label>
                        <input type="text" name='Age Range' style={{ width: '80%' }} />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="alcohol">Will there be alcohol? </label>
                        <input type="text" name='alcohol' style={{ width: '65%' }} />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="budget">Will there be food trucks? If so describe Locale. </label>
                        <textarea name='Event Description' style={{ width: '100%', height: '80px', wordWrap: 'break-word' }} />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="budget">Will vendors have access to water and power? If so please explain. </label>
                        <textarea name='Event Description' style={{ width: '100%', height: '80px', wordWrap: 'break-word' }} />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="specDiet">Is there a special Diet Requirement? Allergies?</label>
                        <textarea name='Event Description' style={{ width: '100%', height: '80px', wordWrap: 'break-word' }} />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="importInfo">Any other important infomration we need to know?</label>
                        <textarea name='Import INFO' style={{ width: '100%', height: '80px', wordWrap: 'break-word' }} />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="eventPlanner"> Will you require the services of an Event planner? </label>
                        <input type="text" name='EVENTP' style={{ width: '25%' }} />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="eventPlanner"> Would you like Eventful Edge to manage event marketing? </label>
                        <input type="text" name='EVENTP' style={{ width: '15%' }} />
                    </fieldset>
                    <Button type='submit'>Submit</Button>
                </form>
            </Box>

        </Box>
    )
};
