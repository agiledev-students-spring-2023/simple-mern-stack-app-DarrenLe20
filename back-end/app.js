require('dotenv').config({ silent: true }) // load environmental variables from a hidden file named .env
const express = require('express') // CommonJS import style!
const morgan = require('morgan') // middleware for nice logging of incoming HTTP requests
const cors = require('cors') // middleware for enabling CORS (Cross-Origin Resource Sharing) requests.
const mongoose = require('mongoose')

const app = express() // instantiate an Express object
app.use(morgan('dev', { skip: (req, res) => process.env.NODE_ENV === 'test' })) // log all incoming requests, except when in unit test mode.  morgan has a few logging default styles - dev is a nice concise color-coded style
app.use(cors()) // allow cross-origin resource sharing

// use express's builtin body-parser middleware to parse any data included in a request
app.use(express.json()) // decode JSON-formatted incoming POST data
app.use(express.urlencoded({ extended: true })) // decode url-encoded incoming POST data

// connect to database
mongoose
  .connect(`${process.env.DB_CONNECTION_STRING}`)
  .then(data => console.log(`Connected to MongoDB`))
  .catch(err => console.error(`Failed to connect to MongoDB: ${err}`))

// load the dataabase models we want to deal with
const { Message } = require('./models/Message')
const { User } = require('./models/User')

// a route to handle fetching all messages
app.get('/messages', async (req, res) => {
  // load all messages from database
  try {
    const messages = await Message.find({})
    res.json({
      messages: messages,
      status: 'all good',
    })
  } catch (err) {
    console.error(err)
    res.status(400).json({
      error: err,
      status: 'failed to retrieve messages from the database',
    })
  }
})

// a route to handle fetching a single message by its id
app.get('/messages/:messageId', async (req, res) => {
  // load all messages from database
  try {
    const messages = await Message.find({ _id: req.params.messageId })
    res.json({
      messages: messages,
      status: 'all good',
    })
  } catch (err) {
    console.error(err)
    res.status(400).json({
      error: err,
      status: 'failed to retrieve messages from the database',
    })
  }
})
// a route to handle logging out users
app.post('/messages/save', async (req, res) => {
  // try to save the message to the database
  try {
    const message = await Message.create({
      name: req.body.name,
      message: req.body.message,
    })
    return res.json({
      message: message, // return the message we just saved
      status: 'all good',
    })
  } catch (err) {
    console.error(err)
    return res.status(400).json({
      error: err,
      status: 'failed to save the message to the database',
    })
  }
})

// a route to provide "About US" text for the front-end
app.get('/about', (req, res) => {
  // send back some text as JSON
  res.json({
    p1: "My name is Quoc Anh Le, or Darren Le, and I am currently a senior at New York University majoring in Computer Science and Economics. I'm an international student and aspiring software developer from Vietnam and have been in the United States for 4 years, the first in my family to go to a foreign university.",
    p2: 'I am proficient in Python, Java, C, and Javascript as well as being familiar with multiple frameworks like React and Flask. I have experience working as a front-end developer and am currently working on becoming a full-time data engineer post-graduation.',
    p3: 'In my free time, I enjoy playing video games, watching movies, and jogging. I also enjoy learning new things and am always open to new experiences.',
    p4: 'GitHub: https://github.com/DarrenLe20',
    img_src:
      'https://media.licdn.com/dms/image/D5603AQHU2R5Odjlkkg/profile-displayphoto-shrink_800_800/0/1664848366224?e=1681948800&v=beta&t=hOAJYGNL3CZ2ihjdr2bziqUzwZ6MhUkWtDyT0wM-A4Y',
  })
})

// export the express app we created to make it available to other modules
module.exports = app // CommonJS export style!
