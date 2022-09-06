
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

// const PORT = process.env.PORT || 3000;
const PORT = process.env.PORT || 3000;

app.get('/', function (req, res) {
   res.json('Hello from index');
})

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`));