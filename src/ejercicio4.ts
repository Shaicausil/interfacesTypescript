interface BaseObject{
    id:number;
}

interface User extends BaseObject{
    nombre: string;
    email: string;
}

interface Products extends BaseObject{
    nombre: string;
    precio: number;
}

interface Order extends BaseObject{
    userId:number;
    productId:number;
    cantidad: number;
}

function imprimirDatos<X extends BaseObject>(item: X): void{
    console.log(`ID: ${item.id}`);
    console.log(JSON.stringify(item, null, 2));
}

const usuarios: User = {id: 1, nombre:`Alice`, email: `alice@ejemplo.com`};
const productos: Products = {id:1, nombre:`Portatil`, precio: 2500000}
const orden: Order = {id: 1, userId: 1, productId: 1, cantidad: 1}

imprimirDatos(usuarios);
imprimirDatos(productos);
imprimirDatos(orden);