import React from 'react'
import '../styles/inputCard.css';



class  Inputcard extends React.Component {
    state = {
        newcard2: [],
    }

    handleclick=e=> {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handlesubmit=e=>{
        this.props.onaddoredit(this.state)

    }
    

    render(){
        
        return(
            <div className="card">
                <form class="confirm" onSubmit={this.handlesubmit}>
                    <input name="newcard2" placeholder="enter a title for this card" value={this.state.newcard2} onChange={this.handleclick}/>
                    <button type="submit">Adicionar</button>
                </form>
            </div>
        )
    }
}

export default Inputcard