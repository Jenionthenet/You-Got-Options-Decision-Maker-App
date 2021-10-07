const express = require('express')
const app = express()
const models = require('./models')
const { Op } = require('sequelize')
const bcrypt = require( 'bcryptjs')
const cors = require('cors')
const Sequelize = require('sequelize')
const PORT = process.env.PORT || 8080

app.use(cors())
app.use(express.json())

app.get('/api/decisions/:userId', (req, res) => {
    const userId = req.params.userId
       models.Decision.findAll({
           where: {user_id: userId},
           include: [{model: models.User, as: 'user'}]
        })
    .then(decisions => {
        res.json(decisions)
    })
})

app.post('/api/decisions', (req, res) => {
    const decisionTitle = req.body.decisionTitle
    const userId = req.body.userId

    const decision = models.Decision.build({
        decision_title: decisionTitle,
        user_id: userId
    })
    decision.save()
    .then(savedDecision => {
        res.json({success: true, decisionId: savedDecision.id})
    })
})



app.post('/api/decisions/options', (req, res) => {
    const userId = req.body.userId
    const decisionId = req.body.decisionId
    const optionTitle = req.body.optionTitle
    const optionImageUrl = req.body.optionImageUrl

    const option = models.Option.build({
        option_title: optionTitle,
        option_image_url: optionImageUrl,
        user_id: userId,
        decision_id: decisionId,
        total_points: 0

    })
    option.save()
    .then(savedOption => {
        res.json({success: true, optionId: savedOption.id})
    })

})
    
app.post('/api/decisions/options/factors', (req, res) => {
    const factorDescription = req.body.factorDescription
    const points = parseInt(req.body.points)
    const categoryId = parseInt(req.body.categoryId)
    const optionId = parseInt(req.body.optionId)
    const decisionId = parseInt(req.body.decisionId)
    const userId = parseInt(req.body.userId)
    const totalPoints = parseInt(req.body.totalPoints)
    console.log(req.body)
    console.log(points)
    console.log(totalPoints)
    try {
        const factor = models.Factor.build({
            factor_description: factorDescription,
            points: points,
            category_id: categoryId,
            option_id: optionId,
            decision_id: decisionId,
            user_id: userId
        })
        factor.save()
        .then(savedFactor => {
            models.Option.update(
               { total_points: totalPoints + points}, 
                { where: {id: optionId}} 
                
                
            ).then(updatedOption => {
                res.json({success: true, factorId: savedFactor.id})
            })    
            
        }) 
        
    } catch (error) {
        // print the error details
  console.log(error);

    }
})



app.delete('/decisions/:decisionId', (req, res) => {
    const decisionId = parseInt(req.params.decisionId)

    models.Decision.destroy({
        where: {
            id: decisionId
        }
    }).then(decisions => {
        res.json({success: true})
    })
})


app.delete('/decisions/options/:optionId', (req, res) => {
    const optionId = parseInt(req.params.optionId)

    models.Option.destroy({
        where: {
            id: optionId
        }
    }).then(options => {
        res.json({success: true})
    })
})


app.delete('/decisions/options/factors/:factorId/:optionId', (req, res) => {
    
    const factorId = parseInt(req.params.factorId)
    const optionId = parseInt(req.params.optionId)
    // const totalPoints = parseInt(req.body.totalPoints)
    // const points = parseInt(req.body.points)

    // models.Option.update(
    //     { total_points: totalPoints + points}, 
    //      { where: 
    //         {id: optionId}
         
         
        
    // }).then(
        models.Factor.destroy({
        where: {
            id: factorId,
            option_id: optionId

        }
    }).then(factors => {
        res.json({success: true})

    

    })
})



app.get('/api/decision/info/:id', (req, res) => {
    const id = req.params.id
    models.Decision.findOne({
        where: {id: id
        },
        include: [
            {model: models.Option, as: 'options', 
            include: [
                {model: models.Factor, as: 'factors'}] },
            
        ]

    })
    .then(decision => {
        res.json(decision)
    })
})





app.post('/register', (req, res) => {
    // if (!req.body.username || !req.body.password || !req.body.email) {
    //     return res.status(400).json({
    //       error: 'Please include username, password, and email.'
    //     })
    //   }
    const username = req.body.username
    const password = req.body.password
    const email = req.body.email
    bcrypt.genSalt(10, (error, salt) => {
        bcrypt.hash(password, salt, (error, hash) => {
            if (!error) {
                const user = models.User.build({
                    username: username,
                    password: hash,
                    email:email
                })
                user.save().then(savedUser => {
                    console.log(savedUser)
                    res.json({success: true})
                })
            } else {
                return res.status(400).send({ error: "Something went wrong."})
            }
        })
    })

})

app.post('/login', (req, res) => {
    const username = req.body.username
    const password = req.body.password
    const email = req.body.email

    console.log(username, password)

    models.User.findOne({
        where: {
            username: username
        }
    }).then((user) => {
        bcrypt.compare(password, user.password, function(err, result) {
            if(result) {
                // sending over the user
                let userToSend = {
                    username: user.username,
                    id: user.id
                }
                res.json({success: true, user: userToSend})
            }else {
                // 401 status-  that request applied but lacks validity
                res.status(401).send({error: 'Invalide username or password'})
            }
        })
    })
})



// localhost:8080
app.listen(PORT, () => {
    console.log('Server is running ...')
})