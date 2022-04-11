import {Router} from "express";
import {controller} from "../controllers/products.js";

export const productsRoute = Router();

//a) Un formulario de carga de productos en la ruta raíz 
//(configurar la ruta '/productos' para recibir el POST, y redirigir al mismo formulario).
productsRoute.post('/', controller.post)

//b) Una vista de los productos cargados 
//(utilizando plantillas de handlebars) en la ruta GET '/productos'.
productsRoute.get('/:engine', controller.get)

