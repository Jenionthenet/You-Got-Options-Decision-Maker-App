import FactorList from './FactorsList'
import { useHistory } from 'react-router'
function OptionList(props) {

    const history = useHistory()
    const options = props.options
    const decisionId = props.decsionId
    const optionId = props.id
    console.log(decisionId)
    // console.log(optionId)

    const handleOptionDelete = (id) => {

        fetch(`https://yougotoptions.herokuapp.com/decisions/options/${id}`, {
            method: 'DELETE'
        }).then(response => response.json())
            .then(result => {
                console.log(result)
                props.onOptionDeleted()

            })
    }

    const handleAddFactor = (decisionId, id) => {
        history.push(`/add-factors/${decisionId}/${id}`)
    }


    const optionItems = options.map((option, index) => {
        return (
            <div id="optionListContainer" key={index}>
                <div id="detailOptionsDiv">
                    <div id="optionTitleDiv">
                        <h2 id="optionTitle">{option.option_title}</h2>
                        <button id="deleteBtn" onClick={() => handleOptionDelete(option.id)}>X</button>
                    </div>
                    <div id="imgPointsDiv">
                        <img id="optionsImg" src={option.option_image_url} />

                        <div id="totalPointsDiv">
                            <p Id="totalPointsTitle">Total Points</p>
                            <h1 id="totalPoints">{option.total_points}</h1></div>
                    </div>


                    <FactorList factors={option.factors} onFactorDeleted={() => props.onOptionDeleted()} />
                </div>
                <button id="addFactorBtn"  onClick={() => handleAddFactor(option.decision_id, option.id)}>Add a Factor</button>
            </div>
        )
    })

    return (
        <>
            {optionItems}
        </>
    )
}

export default OptionList