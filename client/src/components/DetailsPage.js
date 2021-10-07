import { useState, useEffect } from 'react'
import OptionList from './OptionList'

import { useHistory } from 'react-router-dom'

function DetailsPage({ match }) {

    const history = useHistory()

    const decisionId = match.params.decisionId

    const [decision, setDecision] = useState({
        options: [],
        factors: []
    })

    useEffect(() => {
        loadDecision()
    }, [])

    const loadDecision = () => {
        fetch(`https://yougotoptions.herokuapp.com/api/decision/info/${decisionId}`)
            .then(response => response.json())
            .then(result => {
                setDecision(result)
                console.log(result)
            })
    }

    const handleAddOption = (decision) => {
        history.push(`/add-option/${decisionId}`)
    }

    return (
        <div id="detailDecisionDiv">

            <h1 id="detailDecisionTitle">Decision:<strong> {decision.decision_title}</strong></h1>
            <button id="addOptionBtn" className="addOptionBtn" onClick={() => handleAddOption(decision)}>Add an Option</button>
            <div id="flexDiv">
                <OptionList options={decision.options} onOptionDeleted={() => loadDecision()} />
                
            </div>
        </div>
    )
}

export default DetailsPage