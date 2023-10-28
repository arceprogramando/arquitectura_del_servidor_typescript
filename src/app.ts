import express from 'express'
import cors from 'cors'
import configObject from './config/config';

const app = express();
const env = configObject;
console.log('🚀 ~ file: app.ts:7 ~ env:', env);
const corsOptions = {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
};

app.use(cors(corsOptions));
  

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('PORT', env.PORT || 8080);
app.set('NODE_ENV', env.NODE_ENV || 'development');
app.set('DB_CNN', env.DB_CNN);
app.set('DB_NAME', env.DB_NAME);
app.set('PERSISTENCE', env.PERSISTENCE);
app.set('BASE_URL', env.BASE_URL);



const PORT = 3000;

app.get('/ping',(_,res) => {
    console.log('someone pinged here !!')
    res.send(`La hora actual es ${new Date().toLocaleDateString()}`)
});

app.listen(PORT , ()=> {
    console.log(`Server running on port ${PORT}/ping`)
});
