interface Database {
    connect(): void;
    disconnect(): void;
    find(query: string): any[];
    insert(data: any): void;
    update(id: number, data: any): void;
    delete(id: number): void;
}


class MySQLDatabase implements Database {
    connect(): void {
        console.log("Conectado a la base de datos MySQL.");
    }

    disconnect(): void {
        console.log("Desconectado de la base de datos MySQL.");
    }

    find(query: string): any[] {
        console.log(`Buscando en MySQL con query: ${query}`);
        return [{ id: 1, name: "Ejemplo de dato de MySQL" }];
    }

    insert(data: any): void {
        console.log("Insertando en MySQL:", data);
    }

    update(id: number, data: any): void {
        console.log(`Actualizando en MySQL el registro con ID ${id}:`, data);
    }

    delete(id: number): void {
        console.log(`Eliminando en MySQL el registro con ID ${id}`);
    }
}


class SQLiteDatabase implements Database {
    connect(): void {
        console.log("Conectado a la base de datos SQLite.");
    }

    disconnect(): void {
        console.log("Desconectado de la base de datos SQLite.");
    }

    find(query: string): any[] {
        console.log(`Buscando en SQLite con query: ${query}`);
        return [{ id: 2, name: "Ejemplo de dato de SQLite" }]; 
    }

    insert(data: any): void {
        console.log("Insertando en SQLite:", data);
    }

    update(id: number, data: any): void {
        console.log(`Actualizando en SQLite el registro con ID ${id}:`, data);
    }

    delete(id: number): void {
        console.log(`Eliminando en SQLite el registro con ID ${id}`);
    }
}


const mySQLDb = new MySQLDatabase();
mySQLDb.connect();
mySQLDb.insert({ name: "Nuevo Registro" });
mySQLDb.find("SELECT * FROM tabla");
mySQLDb.disconnect();

const sqliteDb = new SQLiteDatabase();
sqliteDb.connect();
sqliteDb.insert({ name: "Otro Registro" });
sqliteDb.find("SELECT * FROM otra_tabla");
sqliteDb.disconnect();