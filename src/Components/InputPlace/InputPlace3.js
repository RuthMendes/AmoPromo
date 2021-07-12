import React from 'react';
import {Paper,Typography} from '@material-ui/core';
import '../styles/inputPlace.css';
import InputCard3 from '../Input/InputCard3';


class Inputplace extends React.Component {
    constructor(){
        super()
    this.state ={
        showMe:true
    }

    }
    operation(){
        this.setState({
            showMe:!this.state.showMe
        })
    }
    
    render(){
        
        const onaddoredit = this.props.onAddoredit

        return (
            <div className="place">
                {
                    this.state.showMe?
                    <InputCard3 onaddoredit={ onaddoredit} />:null

                }
                
               <Paper elevation={0} className="inputplace" onClick={()=>this.operation()}>
                    <Typography > + Add a Card</Typography>
                </Paper>
               
                </div>
        )

    }
}
    
    


export default Inputplace;