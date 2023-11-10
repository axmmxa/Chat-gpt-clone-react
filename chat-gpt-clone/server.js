const PORT = 8000
const express = require('express')
const cors = require('cors')

const app = express()
app.use(express.json)
app.use(cors())


const API_KEY = "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"


app.post('/completions', async(req, res) => {
    const options = {
        method: "Post",
        headers: {
            "Authorization": `Bearer ${API_KEY}`,
            "Content-Type": "application/JSON"
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{role: "user", content: "how are you"}],
            max_tokens: 100,
        })
    }
    try {
          const response = await fetch('https://api.openai.com/v1/completions', options)
          const data = await response.json()
    } catch(error) {
        console.error(error)
    }
})
 
app.listen( PORT, ()=> console.log("Your Server is running on Port" + PORT))

