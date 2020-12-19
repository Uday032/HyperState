const express = require("express")
const app = express()

//routes
require('./routes/upload')(app);

// Take any port number of your choice which 
// is not taken by any other process 
app.listen(8080, function (error) {
    if (error) throw error
    console.log("Server created Successfully on PORT 8080")
})