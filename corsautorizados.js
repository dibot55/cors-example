//cors en una lista blanca privada

const express = require('express');
const cors = require('express-cors');

const app = express();

// Agrega el middleware de CORS
app.use(cors({
    allowedOrigins: [
    'https://ejemplo.com',
    'https://otro-ejemplo.com'
    ]
}));

// Agrega tus rutas y otras configuraciones

//especificar tipos de solicitudes http con get y post
app.use(cors({
    allowedOrigins: [
    'https://ejemplo.com',
    'https://otro-ejemplo.com'
    ],
    methods: ['GET', 'POST']
    }));
//En este caso, se ha configurado el middleware de CORS para que solo se permitan solicitudes GET y POST 
//desde los dominios autorizados.

//manipular los cors de manera dinamica
app.use(cors({
    allowedOrigins: function(request) {
      // Devuelve una lista de dominios autorizados
      // en función de la información del usuario que
      // ha iniciado sesión en la aplicación
    if (request.user.admin) { //EL user y el admin es un ejemplo para iniciar sesion como admin
        //desde dominios autorizados
        return ['https://ejemplo.com', 'https://otro-ejemplo.com'];
    } else {
        return ['https://otro-ejemplo.com'];
    }
    }
    }));