
class Products{
    constructor() {
        this.products = [
            {"title":"Coca Cola",
            "price":"210",
            "thumbnail":"https://cdn0.iconfinder.com/data/icons/vectr-examples/458/food-coke-128.png",
            "id":1},
            {"title":"Cerveza"
            ,"price":"350",
            "thumbnail":"https://cdn1.iconfinder.com/data/icons/drink-beverage/512/26-beer-bottle-glass-drink-128.png",
            "id":2},
            {"title":"Smoothie",
            "price":"140",
            "thumbnail":"https://cdn1.iconfinder.com/data/icons/drink-beverage/512/15-juice-cup-smoothie-plastic-128.png"
            ,"id":3}
        ];
        this.nextId=4;
    }

    getAllProducts(){
        return this.products;
    }

    getProductById(id){
        const productFound = this.products.filter( product => product.id === parseInt(id) );
        return productFound.length > 0 ? productFound : { error : 'producto no encontrado' };
    }

    addProduct(product){
        product["id"]=this.nextId;
        this.nextId++;
        this.products.push(product);
        return product;
    }

    updateProduct(id, newProduct){
        this.products.map(product => {
            if ( product.id === parseInt(id) ){
                //creo un array con los Keys del producto enviado:
                const keys = Object.keys(newProduct)
                //actualizo solo los Keys enviados:
                keys.forEach(key => {
                    product[key]=newProduct[key];
                });
            }
        })
    }
    
    deteleProduct(id){
        this.products = this.products.filter( product => product.id !== parseInt(id) );
        return { message : `El Id:${id} ha sido eliminado` };
    }

}

export const products = new Products;