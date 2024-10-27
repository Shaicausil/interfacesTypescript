interface Product {
    id: number;
    name: string;
    precio: number;
    descripcion?: string;
    cantidad: number;
}


interface Inventory {
    productos: Product[];     

    agregarProducto(product: Product): void;     
    buscarProducto(name: string): Product | undefined; 
}


const inventory: Inventory = {
    productos: [], 

    
    agregarProducto(product: Product): void {
        this.productos.push(product);
        console.log(`Producto ${product.name} agregado con éxito.`);
    },

    buscarProducto(name: string): Product | undefined {
        return this.productos.find(product => product.name.toLowerCase() === name.toLowerCase());
    }
};


const product1: Product = {
    id: 1,
    name: "Laptop",
    precio: 5500000,
    descripcion: "Laptop Ryzen 7",
    cantidad: 10
};

const product2: Product = {
    id: 2,
    name: "Teclado RGB",
    precio: 15000,
    cantidad: 50
};


inventory.agregarProducto(product1);
inventory.agregarProducto(product2);


const foundProduct = inventory.buscarProducto("Laptop");
if (foundProduct) {
    console.log(`Producto encontrado: ${foundProduct.name} - Precio: $${foundProduct.precio}`);
} else {
    console.log("Producto no encontrado.");
}