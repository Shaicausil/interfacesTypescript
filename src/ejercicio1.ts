interface Vehicle {
    modelo: string;
    año: number;
    color: string;
    kilometraje: number;
}

interface Car extends Vehicle {
    numeroPuertas: number;
    esElectrico: boolean;
}

interface Motorcycle extends Vehicle {
    tipo: "sport" | "cruiser" | "deportiva";
    tieneSidecar: boolean;
}

class agregarCarro implements Car {
    modelo: string;
    año: number;
    color: string;
    kilometraje: number;
    numeroPuertas: number;
    esElectrico: boolean;

    constructor(modelo: string, año: number, color: string, kilometraje: number, numeroPuertas: number, esElectrico: boolean) {
        this.modelo = modelo;
        this.año = año;
        this.color = color;
        this.kilometraje = kilometraje;
        this.numeroPuertas = numeroPuertas;
        this.esElectrico = esElectrico;
    }

    mostrarInfo(): void {
        console.log(`Carro:
        Modelo: ${this.modelo}
        Año: ${this.año}
        Color: ${this.color}
        Kilometraje: ${this.kilometraje} km
        Número de puertas: ${this.numeroPuertas}
        Es eléctrico: ${this.esElectrico ? "Si" : "No"}`);
    }

}

class agregarMoto implements Motorcycle {
    modelo: string;
    año: number;
    color: string;
    kilometraje: number;
    tipo: "sport" | "cruiser" | "deportiva";
    tieneSidecar: boolean;

    constructor(modelo: string, año: number, color: string, kilometraje: number, tipo: "sport" | "cruiser" | "deportiva", tieneSidecar: boolean) {
        this.modelo = modelo;
        this.año = año;
        this.color = color;
        this.kilometraje = kilometraje;
        this.tipo = tipo;
        this.tieneSidecar = tieneSidecar;
    }

    mostrarInfo(): void {
        console.log(`Moto:
        Modelo: ${this.modelo}
        Año: ${this.año}
        Color: ${this.color}
        Kilometraje: ${this.kilometraje} km
        Tipo: ${this.tipo}
        Tiene sidecar: ${this.tieneSidecar ? "Si" : "No"}`);
    }
}


const carro = new agregarCarro("Chevrolet Camaro ss", 2020, "Negro", 4500, 3, true);
const moto = new agregarMoto("Super Duke 1290", 2023, "Negro", 12000, "sport", false);

carro.mostrarInfo();
moto.mostrarInfo();