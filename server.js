const express = require('express')
const connection = require('./db')

require('dotenv').config()

const app = express()

app.get('/', (req, res) => {
    res.status(200).send("Welcome to the database")
})

// Question 1 goes here
app.get('/patients', (req, res) => {
    const sql = 'SELECT patient_id, first_name, last_name, date_of_birth FROM patients'

    connection.query(sql, (err, result) => {
        if(err) {
            console.error("Error executing query", err.stack)
            return
        }
        res.status(200).json(result)
    })
})


// Question 2 goes here
app.get('/providers', (req, res) => {
    const sql = 'SELECT first_name, last_name, provider_specialty FROM providers'

    connection.query(sql, (err, result) => {
        if(err) {
            console.error("Error executing query", err.stack)
            return
        }
        res.status(201).json(result)
    })
})


// Question 3 goes here
app.get('/patients/firstname', (req, res) => {
    const sql = 'SELECT first_name FROM patients'

    connection.query(sql, (err, result) => {
        if(err) {
            console.error("Error executing query", err.stack)
            return
        }
        res.status(201).json(result)
    })
})


// Question 4 goes here
app.get('/providers/specialty', (req, res) => {
    const sql = 'SELECT provider_specialty FROM providers'

    connection.query(sql, (err, result) => {
        if(err) {
            console.error('Error executing query', err.stack)
            return
        }
        res.status(201).json(result)
    })
})



// listen to the server
const PORT = 3500
app.listen(PORT, () => {
  console.log(`server is runnig on http://localhost:${PORT}`)
})