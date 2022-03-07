db.estudiantes.insertOne({
    idEstudiante:1,
    nombreCompleto: "Raul Moron Vazquez",
    edad: 19,
    centroEstudios: "Punta del Verde",
    genero: "hombre",
    nacimiento: new Date("22-01-2003"),
    estudios: [
        "Primaria",
        "Pecundaria",
        "Bachillerato"
    ],
    cursoActual: "1 DAM",
    localidadNacimiento: "Marchena",
    localidadResidencia: "Sevilla",
    trabajador: false
}) 

db.estudiantes.insertMany([
    {
        idEstudiante:2,
        nombreCompleto: "Jorge Moron Vazquez",
        edad: 15,
        centroEstudios: "Lopez de Arenas",
        genero: "hombre",
        nacimiento: new Date("24-05-2007"),
        estudios: [
            "Primaria"
        ],
        cursoActual: "3 ESO",
        localidadNacimiento: "Marchena",
        localidadResidencia: "Marchena",
        trabajador: false
    },
    {
        idEstudiante:3,
        nombreCompleto: "Jose Arras Gavira",
        edad: 19,
        centroEstudios: "La Campiña",
        genero: "hombre",
        nacimiento: new Date("22-12-2003"),
        estudios: [
            "Primaria",
            "Secundaria"
        ],
        cursoActual: "Sistemas Microinformaticos",
        localidadNacimiento: "Marchena",
        localidadResidencia: "Arahal",
        trabajador: true
    },
    {
        idEstudiante:4,
        nombreCompleto: "Manuela Monzon Martinez",
        edad: 24,
        centroEstudios: "Isidro Arsenegui",
        genero: "mujer",
        nacimiento: new Date("12-04-1998"),
        estudios: [
            "Primaria",
            "Secundaria",
            "Bachillerato",
            
        ],
        cursoActual: "2 DAM",
        localidadNacimiento: "Puebla de Cazalla",
        localidadResidencia: "Marchena",
        trabajador: false
    },
    {
        idEstudiante:5,
        nombreCompleto: "Maria Martinez Hernandez",
        edad: 20,
        centroEstudios: "Punta del verde",
        genero: "mujer",
        nacimiento: new Date("25-03-2002"),
        estudios: [
            "Primaria",
            "Secundaria",
            "Bachillerato",
            
        ],
        cursoActual: "1 DAM",
        localidadNacimiento: "Lora del Rio",
        localidadResidencia: "Sevilla",
        trabajador: true
    }


])