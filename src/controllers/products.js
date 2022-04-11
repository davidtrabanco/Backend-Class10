import {products} from "./classProdcuts.js";

export const controller = {};

//GET '/productos' -> devuelve todos los productos.
controller.get = (req,res)=>{
    const productExist = products.products.length > 0 ? true : false;
    res.render('showProducts', 
    {
        productsList: products.getAllProducts(),
        listExists: productExist,
    })
}

//POST '/productos' -> recibe y agrega un producto
controller.post = (req,res)=>{
    const product = req.body;
    products.addProduct(product);
    res.redirect('/')
}

