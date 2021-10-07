

function FactorList (props) {

    const factors = props.factors
    const id = props.id
    const factor = props.factor
    const optionId = props.optionId

    console.log(factors)
    console.log('optionId')
    console.log(optionId)


    const handleFactorDelete = (id, optionId) => {
        
        fetch(`https://yougotoptions.herokuapp.com/decisions/options/factors/${id}/${optionId}` , {
            method: 'DELETE'
    }).then(response => response.json())
    .then(result => {
        console.log(result)
         props.onFactorDeleted()
    })
        
    }

    const factorItems = factors.map((factor) => {
        return (
            <li key ={factor.id}>
                <div id="factorListDiv">
                <h4 className="factorText">{factor.factor_description}</h4>
                <h4 className="factorText points">{factor.points}</h4>
                <button id="factorDeleteBtn" onClick = {() => handleFactorDelete(factor.id, factor.option_id)}>X</button>
                </div>
            </li>
        )
    })

    return (
        <ul>

            {factorItems}
        </ul>

    )
}

export default FactorList