const express = require("express")
const app = express()
const port = 3000

// Tell Express to serve static files from the 'public' directory
// When a user requests '/', it will automatically look for 'public/index.html'
app.use(express.static("public"))

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})
