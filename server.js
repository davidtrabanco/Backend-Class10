//para que __dirname funcione:
import path from 'path';
import {fileURLToPath} from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

import handlebars from "express-handlebars";
import express from "express";
import {productsRoute} from "./src/routes/productos.js";

//Configuro el servidor:
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./public'));

//COnfiguro el engine template en base al parámetro enviado:
app.use('/productos/:engine',(req,res,next)=>{

    switch (req.params.engine) {

        case 'pug':
            app.set('view engine', 'pug');
            next();
            break;

        case 'hbs':
            app.engine('hbs',handlebars.engine(
                {
                extname: ".hbs",
                defaultLayout: 'index.hbs',
                layoutsDir: __dirname + '/src/views/layouts',
                partialsDir: __dirname + '/src/views/partials/',
                }
            ))
            app.set('view engine', 'hbs')
            next();
            break;
        
        case 'ejs':
            app.set('view engine', 'ejs');
            next();
            break;

        default:
            app.set('view engine', 'pug');
            next();
            break;
 
    }
    
})

//establezco los routers:
app.use('/productos', productsRoute);

app.set('views', './src/views');

//Inicio el servidor:
const server = app.listen(8080,()=>console.log(`server up on port ${server.address().port}`));
server.on('error', err => console.error(err));