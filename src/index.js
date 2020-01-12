const express = require('express')
require('./db/mongoose')
const app = express()

const userRouter = require('./routes/users')
const taskRouter = require('./routes/tasks')

const port = process.env.PORT

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})