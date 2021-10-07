
import { useEffect, useState } from 'react'

import { useHistory } from 'react-router-dom'


function DecisionListPage(props) {
  
  const history = useHistory()
  const [decisions, setDecisions] = useState ([])
  // const decisionId = match.params.Id


  const goToDecisionDetailsPage = (id) => {
 
    history.push(`/details/${id}`)
  }

  useEffect(() => {
    // props.onDecisionsLoaded()
    loadDecisions()
  }, [])

  const loadDecisions = () => {
    fetch(`https://yougotoptions.herokuapp.com/api/decisions/${localStorage.getItem('userId')}`)
    .then(response => response.json())
    .then(decisions => {
        setDecisions(decisions)
    })
    
  }

 

  const handleDecisionDelete = (id) => {
      fetch(`https://yougotoptions.herokuapp.com/decisions/${id}`, {
        method: 'DELETE'

      }).then(response => response.json())
      .then(result => {
          console.log(result)
         loadDecisions()
          // props.onDecisionsLoaded()
      })
  }

 


  const decisionItems = decisions.map(decision => {
    let id = decision.id
    return (
      <li key= {decision.id}>
        <div id= "detailsDiv">
          <h2 id="decisionTitle">{decision.decision_title}</h2>
          <button id="deleteButton" onClick = {() => handleDecisionDelete(decision.id)}>X</button>
          <button id="detailsBtn" onClick = {() => goToDecisionDetailsPage(id)}>See Details</button>
        </div>
      </li>
    )
  })



  return (
    <ul>
      {decisionItems}
    </ul>
  )

}


export default DecisionListPage