
import { useState } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../store/creators/actionCreators'

function AddDecisionPage(props) {

    const [decision, setDecision] = useState({
        userId: localStorage.getItem('userId')
    })
    const handleDecisionChange = (e) => {
        // console.log(e.target.name, e.target.value)

        setDecision({
            ...decision,
            [e.target.name]: e.target.value
        })
    }

   

    const handleDecisionSave = () => {
        fetch('https://yougotoptions.herokuapp.com/api/decisions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(decision)
        }).then(response => response.json())
        .then(result => {
            // fetch all decisions again
        //    props.onDecisionsLoaded()
            if(result.success == true) {
                
                props.history.push(`/add-option/${result.decisionId}`)
            }
        })
    }
    return (
    <div id="form">
        <div id="inputDiv">
        <h1 id="inputTitle">Add a Decision</h1>
        <label>Decision Title</label>
        <input className="input" name = "decisionTitle" onChange= {handleDecisionChange} type = "text" placeholder= "Enter decision title"></input>
        </div>
        <button id="inputButton" onClick = {handleDecisionSave}>Submit</button>
        
    </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDecisionsLoaded: (decisions) => dispatch(actionCreators.fetchDecisions())
    }
}

export default connect(null, mapDispatchToProps)(AddDecisionPage)