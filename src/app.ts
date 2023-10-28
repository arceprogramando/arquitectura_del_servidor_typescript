import express from 'express'

const app = express();

app.use(express.json())

const PORT = 3000 

app.get('/ping',(_,res) => {
    console.log('someone pinged here !!')
    res.send(`La hora actual es ${new Date().toLocaleDateString()}`)
});

app.listen(PORT , ()=> {
    console.log(`Server running on port ${PORT}/ping`)
});
