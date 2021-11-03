import axios from 'axios'
import express from 'express'
import process from 'process'

// Initiate ExpressJS
const app = express()

// Set Axios defaults
axios.defaults.timeout = 2500
axios.defaults.baseURL = process.env.BALENA_SUPERVISOR_ADDRESS
axios.defaults.headers.common.Authorization = `Bearer ${process.env.BALENA_SUPERVISOR_API_KEY}`

// ExpressJS setup
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

// Functions
function removeApiKeys (obj) {
  // Remove headers so the API key never leaves the device or enters logs
  if (obj.config?.headers?.Authorization) { delete obj.config.headers.Authorization }
  if (obj.request?._header) { delete obj.request._header }
  return obj
}

// Routes
app.post('/api', function (req, res) {
  const params = req.body.params
  const path = req.body.path
  const type = req.body.type

  // Construct the payload
  const payload = {
    method: type,
    data: params,
    url: path
  }

  // Sned the request
  axios(payload)
    .then((response) => {
      // Return the same http code as Axios request
      res.status(response.status)
      // Return only the data recieved from Axios (no headers)
      res.json(response.data)
    })
    .catch(function (error) {
      // Remove all API keys before handling the response
      const err = removeApiKeys(error)

      // Mirror the Axios status code
      if (err.response) {
        res.status(err.response.status)
      } else {
        res.status(500)
      }

      // Log to the console and return the error to the UI
      console.log(err)
      res.json(err)
    })
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
})
