import React from 'react'
import {Paper} from '@material-ui/core';
import Tittle1 from '../Tittle/Tittle1';
import Card from '../Card/Card1';
import '../styles/list.css';
import Inputplace from '../InputPlace/InputPlace1';

class List extends React.Component {
    state={
        currentIndex:-1,
        list: this.returnlist()
    }
    returnlist() {
        if(localStorage.getItem('newcard')==null)
        localStorage.setItem('newcard',JSON.stringify([]))
        return JSON.parse(localStorage.getItem('newcard'))
    }
    onAddoredit=(data)=>{
        var list = this.returnlist()
        list.push(data)
        localStorage.setItem('newcard',JSON.stringify(list))
        this.setState(list)
    
    }
    handledelete=index=>{
        var list = this.returnlist()
        list.splice(index,1)
        localStorage.setItem('newcard',JSON.stringify(list))
        this.setState({list,index:-1})
    }
    render(){
        const list = this.state.list;
        const card = list.map(item=> < Card key={item.id} rap={item.newcard} handledelete={this.handledelete} />)
        return (
            <div>
                <Paper className="paper">
                    <Tittle1/>
                    {card}
                    <Inputplace onAddoredit={this.onAddoredit}/>
                    
                </Paper>
                
            </div>
        )

    }
    
}

export default List;