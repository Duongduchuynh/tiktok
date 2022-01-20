import React from 'react';
import './CreateTournament.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormTour from './FormTour';
import TimeDate from './TimeDate';
const Createtournament = () => {
    return (
        <>
            <div className="bg-Ct">
                <div className="text-Ct">
                    <h3>Let's Start</h3>
                    <h1>Create New Tournament</h1>
                </div>
            </div>
            <div className="form-Ct">
                <TextField
                    sx={{ m: 1, minWidth: 500,}}
                    helperText=" "
                    id="demo-helper-text-aligned-no-helper"
                    label="Name Tournament"
                /><br/>
                 <TextField
                    sx={{ m: 1, minWidth: 500 }}
                    helperText=" "
                    id="demo-helper-text-aligned-no-helper"
                    label="Game"
                />
                
                <FormTour />
                {/* <TimeDate /> */}
               
            </div>
        </>
    );
}

export default Createtournament;
