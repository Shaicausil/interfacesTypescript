interface User {
    id: number;
    nombre: string;
    email: string;
}


interface Admin extends User {
    rol: "admin" | "superAdmin";
    permisos: string[];
}


function informacionUsuario(user: User | Admin): void {
    console.log(`ID: ${user.id}`);
    console.log(`Nombre: ${user.nombre}`);
    console.log(`Email: ${user.email}`);


    if ("rol" in user) {
        console.log(`Rol: ${user.rol}`);
        console.log(`Permisos: ${user.permisos.join(", ")}`);
    }
}


const usuario: User = {
    id: 1,
    nombre: "Johan Garcia",
    email: "Johan.garcia@example.com"
};

const adminUser: Admin = {
    id: 2,
    nombre: "Shaira Causil",
    email: "Shai.causil@example.com",
    rol: "admin",
    permisos: ["manage_users", "access_reports"]
};


informacionUsuario(usuario);
informacionUsuario(adminUser);