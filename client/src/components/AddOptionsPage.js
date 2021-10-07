
import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../store/creators/actionCreators'
import { useHistory } from 'react-router-dom'

function AddOptionsPage({ match }) {
    const history = useHistory()
    const decisionId = match.params.decisionId
    const [option, setOption] = useState({
        userId: localStorage.getItem('userId'),
        decisionId: decisionId
    })
    const [decision, setDecision] = useState({})

    useEffect(() => {
        loadDecision()
    }, [])

    const handleOptionChange = (e) => {

        setOption({
            ...option,
            [e.target.name]: e.target.value
        })
    }

    const loadDecision = () => {
        fetch(`https://yougotoptions.herokuapp.com/api/decision/info/${decisionId}`)
            .then(response => response.json())
            .then(result => {
                setDecision(result)
            })

    }

    const handleOptionSave = () => {
        fetch('https://yougotoptions.herokuapp.com/api/decisions/options', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(option)
        }).then(response => response.json())
            .then(result => {
                // props.onOptionsLoaded()
                if (result.success == true) {
                    history.push(`/add-factors/${decisionId}/${result.optionId}`)
                }
            })
    }


    return (
        <div id="formParent">
            <div >
            <p id="optionsDecisionTitle">Decision: <strong>{decision.decision_title}</strong></p>
            </div>
            <div id="nestedForm">
                <div id="inputDiv">

                    <h1 id="inputTitle">Add an Option</h1>
                    <label>Option Title</label>
                    <input className="input" name="optionTitle" onChange={handleOptionChange} type="text" placeholder="Enter option title"></input>
                    <label>Option Image Url</label>
                    <input className="input" name="optionImageUrl" onChange={handleOptionChange} type="text" placeholder="Enter option image url"></input>
                </div>
                <button id="inputButton" onClick={handleOptionSave}>Submit</button>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        onOptionsLoaded: (options) => dispatch(actionCreators.fetchOptions())
    }
}

export default connect(null, mapDispatchToProps)(AddOptionsPage)