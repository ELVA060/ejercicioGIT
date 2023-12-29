let horaActual = prompt("Ingresa la hora actual (en formato de 24 horas):");
    horaActual = parseInt(horaActual);

    if (horaActual >= 0 && horaActual < 12) {
        console.log("Es hora de desayunar.");
    } else if (horaActual >= 12 && horaActual < 18) {
        console.log("Es una buena tarde para dar un paseo.");
    } else if (horaActual >= 18 && horaActual <= 23) {
        console.log("Es hora de cenar y relajarse.");
    } else {
        console.log("Hora no válida. ¡Planifica bien tu día!");
    }

    console.log("Fin del programa.");
/* 

Desarrolla un programa para ayudar a los usuarios a planificar su día. Pide al usuario que ingrese la hora actual y, en función de esa hora, sugiere realizar actividades específicas. Por ejemplo, si es por la mañana, sugiere desayunar; si es por la tarde, sugiere dar un paseo.

Aclaración: Si es por la mañana, aparecerá el mensaje "Es hora de desayunar".

*/

const hora = prompt("Ingrese la hora actual");


if (isNaN(hora) || hora < 0 || hora > 23) {
  alert('Hora invalida')
} else {
  if (hora >= 6 && hora <= 12) {
    alert('Es hora de desayunar')
  }
  else if (hora > 12 && hora <= 20) {
    alert('Da un paseo')
  }
  else {
    alert('Es hora de dormir')
  }
}