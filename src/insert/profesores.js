db.profesores.insertOne({
    id_profesor: 1,
    nombre: "Manuel Alvarez Bohorquez",
    edad: 52,
    mujer: false,
    fechaNacimiento: new Date("12-06-1970"),
    ultimosDestinos: [
        "Carmona",
        "Paradas"
    ],
    residencia:"Paradas",
    destinoActual:"Marchena",
    centro:"Lopez de Arenas",
    sueldo: 3200
})

db.profesores.insertMany([
    {
        id_profesor: 2,
        nombre: "Natalia Galindo Hernandez",
        edad: 51,
        mujer: true,
        fechaNacimiento: new Date("24-09-1969"),
        ultimosDestinos: [
            "Arahal",
            "Sevilla",
            "Marchena"
        ],
        residencia:"Marchena",
        destinoActual:"Marchena",
        centro: "Isidro Arsenegui",
        sueldo: 2900
    },
    {
        id_profesor: 3,
        nombre: "Francisco Luna Martinez",
        edad: 32,
        mujer: false,
        fechaNacimiento: new Date("10-10-1990"),
        ultimosDestinos: [
            "Antejuela",
            "Camas",
            "Sevilla"
        ],
        residencia:"Tomares",
        destinoActual:"Sevilla",
        centro: "Punta del Verde",
        sueldo: 3000
    },
    {
        id_profesor: 4,
        nombre: "Sara Moreno Bellido",
        edad: 38,
        mujer: true,
        fechaNacimiento: new Date("08-04-1984"),
        ultimosDestinos: [
            "Cadiz",
            "Jerez",
            "Sevilla",
            "Marchena"
        ],
        residencia:"Marchena",
        destinoActual:"Marchena",
        centro: "Lopez de Arenas",
        sueldo: 2500
    },
    {
        id_profesor: 5,
        nombre: "Pablo Cabrera Colorado",
        edad: 29,
        mujer: false,
        fechaNacimiento: new Date("30-01-1993"),
        ultimosDestinos: [
            "Tomares",
            "Moron",
            "Sevilla",
            "Arahal"
        ],
        residencia:"Marchena",
        destinoActual:"Arahal",
        centro: "La Campiña",
        sueldo: 2300
        

    }
    
])