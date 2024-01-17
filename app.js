
const express=require('express');
const app = express();
const connection=require('./db');
const cors = require('cors');
app.use(cors());



app.get('/api/traffic', (request, response) => {
    connection.execute('SELECT * FROM traffic.output', (error, result, fields) => {
        if (error) {
            console.log(error.message);
            return response.status(500).json({ error: 'Internal Server Error' });
        }
        response.json(result);
    });
});
app.listen(3000,()=>{
    console.log("The server is started running on the port 3000");
    });

    