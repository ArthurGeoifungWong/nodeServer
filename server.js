const express = require('express')
const path = require('path')
const app = express()
const chalk = require('chalk')

const port = 3389
 
app.use(express.static(path.join(__dirname, 'public')))
 
app.listen(port, () => {
  console.log(`${chalk.black.bold.bgGreen(` INFO `)} Your server is running here: http://localhost:${port}/`)
})
