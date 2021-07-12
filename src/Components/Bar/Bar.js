import React from 'react';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import {IconButton, Avatar} from '@material-ui/core'
import AddSharpIcon from '@material-ui/icons/AddSharp';
import PollOutlinedIcon from '@material-ui/icons/PollOutlined';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import ErrorOutlineOutlinedIcon from '@material-ui/icons/ErrorOutlineOutlined';
import BusinessOutlinedIcon from '@material-ui/icons/BusinessOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import '../Bar/Bar.css';

function Bar() {
    return (
        <div className="bar">
            <div className="leftBar">
            <IconButton>
                <BusinessOutlinedIcon/>
            </IconButton>
                
            <IconButton>
            <HomeOutlinedIcon/>
            </IconButton>
            <IconButton>
            <PollOutlinedIcon/>
            <h3 className="head">Boards</h3>

            </IconButton>
            <form className="forms">
                <input type="text" placeholder="search"/>
                <IconButton>
                <SearchOutlinedIcon/>

                </IconButton>
                
                
            </form>

           

            </div>
            <div className="middle">
              
                <h1>
                    Kanban
                </h1>


            </div>
            <div className="rightBar">
            <IconButton>
            <NotificationsOutlinedIcon/>

            </IconButton>
           
            <IconButton>
            <AddSharpIcon/>
            </IconButton>
            <IconButton>
            <ErrorOutlineOutlinedIcon/>

            </IconButton>
            
                <Avatar/>
            

            </div>
           

            
           
        </div>
    )
}

export default Bar