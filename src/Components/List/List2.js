import React from 'react'
import {Paper} from '@material-ui/core';
import Title2 from '../Tittle/Tittle2';
import Card2 from '../Card/Card2';
import Inputplace2 from '../InputPlace/InputPlace2';
import '../styles/list.css';


class List extends React.Component {
    state={
        currentIndex:-1,
        list: this.returnlist()
    }
    returnlist() {
        if(localStorage.getItem('newcard2')==null)
        localStorage.setItem('newcard2',JSON.stringify([]))
        return JSON.parse(localStorage.getItem('newcard2'))
    }
    onAddoredit=(data)=>{
        var list = this.returnlist()
        list.push(data)
        localStorage.setItem('newcard2',JSON.stringify(list))
        this.setState(list)
    
    }
    handledelete=index=>{
        var list = this.returnlist()
        list.splice(index,1)
        localStorage.setItem('newcard2',JSON.stringify(list))
        this.setState({list,index:-1})
    }
    render(){
        const list = this.state.list;
        const card = list.map(item=> < Card2 key={item.id} rap={item.newcard2} handledelete={this.handledelete} />)
        return (
            <div>
                <Paper className="paper">
                    <Title2/>
                    {card}
                    <Inputplace2 onAddoredit={this.onAddoredit}/>
                    
                </Paper>
                
            </div>
        )

    }
    
}

export default List;