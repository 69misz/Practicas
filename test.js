/*
1. CREAR 10 VARIABLES Y ASIGNARLE EL VALOR QUE HAGAN REFERENCIA A UNA PERSONA

EJEMPLO
let primerNombre = "JOSE"
let edad = 18
*/
let primerNombre = "MARIA"
let segundoNombre = "INES"
let apellido = "SOTO"
let numeroCelular = 70010207;
let edad = 24;
let nacionalidad = "BOLIVIANA"
let email = "sotozanabria9@gmail.com"
let profesion = "ADM. DE EMPTRESAS"
let especialidad = false;
let experienciaProfecional = false;

/*
2. CREAR UN ARRAY Y ASINAR 6 DE LOS VALORES DE LA PERSONA
Tips: let persona = ["JOSE",...];
*/

let maria = ['INES', 'SOTO', 24, 70010207, 'BOLIVIANA', 'sotozanabria9@gmail.com'];

/* 3. REALIZAR LA VALIDADCION SI LA PERSONA ES MAYOR DE EDAD "18".
if(<condicion>) {
    console.log(<mensaje>)
} else {
    console.log(<mensaje>)
}
- SI ES VERDADERO MOSTRAR EN CONSOLA EL MENSAJE "LA PERSONA ES MAYOR DE EDAD" 

- SI ES FALSO MOSTRAR EN CONSOLA EL MENSAJE "LA PERSONA ES MENOR DE EDAD" 
*/
if(edad >= 18) {
    console.log("LA PERSONA ES MAYOR DE EDAD");
} else {
    console.log("LA PERSONA ES MENOR DE EDAD");
}