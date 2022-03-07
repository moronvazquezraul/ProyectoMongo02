// Se requiere conocer el valor del sueldo de los profesores varones que se han registrado, ademas del salario anual de estos.

db.profesores.aggregate([
    {
        $match: {
            mujer: false,
            edad: {$gte:30}
        }
    },
    {
        $group: {
            _id: '$sueldo',
            sueldoPorGenero:{$sum: '$sueldo'},
            sueldoPorGeneroAnual:{$sum:{$multiply:['$sueldo', 12]}}
            
        }
    }
]).pretty()

// Es necesario conocer la relacion de estudiantes y los centros que prestan estos estudios.
db.alumnos.aggregate([
    {
        $match:{estudios:{$regex: /Bachillerato/i}}
    },
    {
        $lookup: {
            from: "institutos",
            localField: "estudios",
            foreignField: "estudiosDisponibles",
            as: "centrosConBach"
        }
    },
    {
        $group: {_id: '$estudios'}
    }
])

//Busca un profesor que actualmente de clases en el centro llamado "Lopez de Arenas"
//con un sueldo superior a los 3200 euros, buscando y cargando la informacion del centro en cuestion y de aquellos que pueden ser sus alumnos.
//Ademas, muestra los centros anteriores en los que ha trabajado, para finalmente mostrar el sueldo anual que tiene en valor bruto.

db.profesores.aggregate(
[
    {
        $match: {
            centro: "Lopez de Arenas",
            sueldo: {
                $gte: 3200
            }
        }
    }
    ,
    {
        $lookup:
        {
            from: "institutos", 
            localField: "centro", 
            foreignField: "nombreCentro", 
            as: "profesoresFP"
        }
    },
    {
        $lookup: {
            from: 'alumnos',
            localField: 'centro',
            foreignField: 'centroEstudios',
            as: 'alumnosFP'
        }
    },
    {
        $unwind: 'ultimosDestinos'
    },
    { 
        $group:{
            _id: '$nombre',
            sueldoAnual: {$sum:{$multiply:['$sueldo' , 12]}}
            
        }
    }
]
).pretty()


//Actualiza la lista de destinos del profesor llamado 'Manuel' y suma el valor de su destino actual.
db.profesores.update(
    {id: 1},
    {
        $push:{
            ultimosDestinos: 'Marchena'
        }
    }
)




db.profesores.aggregate([
    {
        $match: {
            mujer: true,
            edad: {$gte:30}
        }
    },
    {
        $group: {
            _id: '$sueldo',
            sueldoPorGenero:{$sum: '$sueldo'},
            sueldoPorGeneroAnual:{$sum:{$multiply:['$sueldo', 12]}},
            
        }
    }
]).pretty()


