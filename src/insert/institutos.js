db.institutos.insertOne(
    {   
        id_centro: 1,
        nombreCentro: "Punta del Verde",
        ubicacion: "Sevilla",
        cp: 41012,
        aforoMax: 1500,
        fechaInauguracion: new Date ("12-02-1992"),
        activo: true,
        estudiosDisponibles: [
            "ESO",
            "Bachillerato",
            "DAM",
            "DAW",
            "ASIR",
            "Administracion"
        ],
        instalaciones: [
            "recreo",
            "recepcion",
            "aparcamiento",
            "sala de emprendimiento",
            "biblioteca",
            "secretaria",
            "servicios",
            "aulas",
            "aulas tic",
            "sala de profesores"
        ]

}
)
db.institutos.insertMany([
    {   id_centro: 2,
        nombreCentro: "Lopez de Arenas",
        ubicacion: "Marchena",
        cp: 41620,
        aforoMax: 900,
        fechaInauguracion: new Date ("17-12-1978"),
        activo: true,
        estudiosDisponibles: [
            "ESO",
            "Bachillerato",
            "Administracion"
        ],
        instalaciones: [
            "recreo",
            "recepcion",
            "aparcamiento",
            "biblioteca",
            "secretaria",
            "servicios",
            "aulas",
            "aulas tic",
            "sala de profesores",
            "Gimnasio"
        ]},
        {   id_centro: 3,
            nombreCentro: "Isidro Arsenegui",
            ubicacion: "Marchena",
            cp: 41620,
            aforoMax: 1100,
            fechaInauguracion: new Date ("09-03-1981"),
            activo: true,
            estudiosDisponibles: [
                "ESO",
                "Bachillerato",
                "Cocina",
                "DAW",
                "Sistemas Microinformaticos"
            ],
            instalaciones: [
                "recreo",
                "recepcion",
                "aparcamiento",
                "biblioteca",
                "secretaria",
                "servicios",
                "aulas",
                "aulas tic",
                "sala de profesores",
                "Gimnasio",
                "salon de actos"
            ]},
            {   id_centro: 4,
                nombreCentro: "La Campiña",
                ubicacion: "Arahal",
                cp: 41600,
                aforoMax: 1900,
                fechaInauguracion: new Date ("09-11-1998"),
                activo: true,
                estudiosDisponibles: [
                    "ESO",
                    "Bachillerato",
                    "Administracion",
                    "Servicios Microinformaticos"
                ],
                instalaciones: [
                    "recreo",
                    "recepcion",
                    "aparcamiento",
                    "biblioteca",
                    "secretaria",
                    "servicios",
                    "aulas",
                    "aulas tic",
                    "sala de profesores"
                ]},
                {   id_centro: 5,
                    nombreCentro: "Nervion",
                    ubicacion: "Sevilla",
                    cp: 41005,
                    aforoMax: 1130,
                    fechaInauguracion: new Date ("23-02-1980"),
                    activo: true,
                    estudiosDisponibles: [
                        "ESO",
                        "Bachillerato",
                        "Administracion",
                        "DAM",
                        "DAW",
                        "ASIR"
                    ],
                    instalaciones: [
                        "recreo",
                        "recepcion",
                        "aparcamiento",
                        "biblioteca",
                        "secretaria",
                        "servicios",
                        "aulas",
                        "aulas tic",
                        "sala de profesores",
                        "Gimnasio"
                    ]},
                    {   id_centro: 6,
                        nombreCentro: "Punta Cana",
                        ubicacion: "Paradas",
                        cp: 41610,
                        aforoMax: 780,
                        fechaInauguracion: new Date ("23-02-1960"),
                        activo: false,
                        estudiosDisponibles: [
                            "ESO",
                        ],
                        instalaciones: [
                            "recreo",
                            "recepcion",
                            "aparcamiento",
                            "secretaria",
                            "servicios",
                            "aulas",
                            "sala de profesores"
                            
                        ]}


])