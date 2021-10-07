
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'


function AddFactorsPage({ match }) {

    const history = useHistory()

    const decisionId = match.params.decisionId
    const optionId = match.params.optionId

    const [decision, setDecision] = useState({})
    const [option, setOption] = useState({})
    const [factor, setFactor] = useState({
        userId: localStorage.getItem('userId'),
        decisionId: decisionId,
        optionId: optionId

    })


    useEffect(() => {
        loadDecision()
    }, [])


    const handleFactorChange = (e) => {
        setFactor({
            ...factor,
            [e.target.name]: e.target.value
          
        });
        
    }


    const loadDecision = () => {
        fetch(`https://yougotoptions.herokuapp.com/api/decision/info/${decisionId}`)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                setDecision(result)
                const selectedOption = result.options.filter(option => option.id == optionId)[0]
                setOption(selectedOption)
                setFactor({
                    ...factor,
                    totalPoints: selectedOption.total_points
                })
            }).catch(err => {
                console.log(err)
            })
    }

    const handleFactorSave = () => {
        fetch('http://localhost:8080/api/decisions/options/factors', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(factor)
        }).then(response => response.json())
            .then(result => {
                if (result.success == true) {
                    // history.push(`/details/${decisionId}`)
                    

                    loadDecision()
                    document.getElementById("pointDropDown").value = ""
                    document.getElementById("proCon").value = ""
                    document.getElementById("facDescription").value =""
                }
            }).catch(err => {
                console.log(err)
            })
    }

    const goToDecisionDetailsPage = () => {
        history.push(`/details/${decisionId}`)
    }


    return (
        <div id="formParent">
            <div id="decOptTitles">
                <p className="decisionTitle decision">Decision: <strong>{decision.decision_title}</strong></p>
                <p className="decisionTitle option">Option: <strong>{option.option_title}</strong></p>
            </div>
            <div id="factorsNestedForm">
                <h1 id="inputTitle">Add Factors</h1>
                <div id="factorsOnly">
                    <div id="factorButtonDiv">
                        <input id= "facDescription" className="input factorDescirption" name="factorDescription" onChange={handleFactorChange} type="text" placeholder="Enter factor description"></input>
                        
                    </div>
                    <div><label>Pro or Con?</label>
                        <select id="proCon" className="input dropDown" name="categoryId" defaultValue={""} onChange={handleFactorChange}>
                            <option value="" disabled hidden>Pro/Con</option>
                            <option value="2">Pro</option>
                            <option value="3">Con</option>
                        </select>
                    </div>
                    <label>Choose factor points</label>
                    <select id="pointDropDown" className="input dropDown" name="points" defaultValue={""} onChange={handleFactorChange}>
                        <option value="" disabled hidden>Points</option>
                        <option value="-5">-5</option>
                        <option value="-3">-3</option>
                        <option value="-1">-1</option>
                        <option value="1">1</option>
                        <option value="3">3</option>
                        <option vlaue="5">5</option>

                    </select>
                    <button id="submitBtn" className="inputButton" onClick={handleFactorSave}>Submit</button>
                </div>
                <div>
                    <button className="inputButton details" onClick={goToDecisionDetailsPage}>Go to Decision Detials Page</button>
                </div>
            </div>
        </div >
    )

}

export default AddFactorsPage