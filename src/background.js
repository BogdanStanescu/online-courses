import React from 'react'
import './background.css'
import DashboardIcon from '@material-ui/icons/Dashboard';
import AssignmentIcon from '@material-ui/icons/Assignment';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';


function background() {
    return (
        <div className = "main__background">
            <div className="app__title">
                <h1> Desktop </h1>
            </div>

            <div className="app__sidebar">
                <div className="sidebar__option sidebar__option--active">
                    <DashboardIcon  fontSize="large"/>
                </div>

                <div className="sidebar__option">
                    <AssignmentIcon fontSize="large"/>
                </div>

                <div className="sidebar__option">
                    <SupervisorAccountIcon fontSize="large"/>
                </div>



            </div>

        </div>
    )
}

export default background
