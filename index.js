//ejemplo de cors
const cors = require('cors');//modulo de cors
const express = require('express');
const app = express();

//usando cors te permite hacer que otra pagina acceda a mi como localhost.
//es mi permiso para paginas unicas
app.use(cors({
    origin: ['https://www.section.io', 'https://www.google.com'] //debes quitarle el ultimo guion https://www.section.io/
}));

//una api para paginas publicas
app.use(cors({
    origin: '*' // todo tiene permiso
}));

//para una api privada (normal) o lista blanca - permitida
//manipulamos los elementos del arreglo de forma dinamica ya no es estatica como el ejemplo anterior
const whitelist = ['https://www.section.io', 'https://www.google.com'];

const corsOptions = {
    origin: (origin, callback) => {
        if (whitelist.indexOf(origin) !== 1){
            callback(null, true);
        } else {
            callback(new console.error());
        }
    }
};

//bloquear peticiones Y que solo puedan ser accedidas desde ciertos metodos autorizados
app.use(cors({
    origin: ['https://www.section.io', 'https://www.google.com'], //solo puedes acceder desde estos dominios
    methods: ['GET', 'POST', 'DELETE', 'UPDATE'] //solo puedes hacer esos
}));


//arreglo que puede ser accedido por otros equipos
const ingredientes = [
    {
        "id" : "1",
        "item" : "huevos"
    },
    {
        "id" : "2",
        "item" : "leche"
    },
    {
        "id" : "3",
        "item" : "hot-cakes"
    },
    {
        "id" : "4",
        "item" : "chilaquiles"
    },
];

app.get('/ingredientes', function(request, response){
    response.send(ingredientes);
});

//aplicar cors solamente en la pagina actual. NO a todo como son por defecto
app.get('/ingredientes', cors(),function(request, response){ //solo va a afectar a /ingredientes
    response.send(ingredientes);
});

app.listen(3004);