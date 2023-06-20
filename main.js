//VARIABLES
let TasaBanco = 0.97;

// FUNCION
function porcentual(valorCliente, TasaBanco) {
  return valorCliente * TasaBanco;
}

let Bienvenido = prompt(
  "Hola, ¿Sabías que ahora podes calcular el interés mensual de tu plazo fijo? Actualmente la TNA es del 97%. \n Calcular intereses para: \n 1 - 100.000  \n 2 - 500.000 \n 3 - 1.000.000 \n 4 - otro importe \n 0- Salir "
);

if (Bienvenido !== "0") {
  switch (Bienvenido) {
    case "1":
      alert(
        "TNA actual del 97% - Ganancia $8.083,33. Si te interesa abrir una cuenta con nosotros, por favor indicanos los datos que solicitamos a continuación"
      );
      let usuario = prompt("Ingresar nombre:");
      let mailUsuario = prompt("Ingresar mail:");
      alert("Estaremos enviando más información a:" + mailUsuario);
      console.log("Usuario" + usuario + " mail " + mailUsuario);
      break;

    case "2":
      alert(
        "TNA actual del 97% - Ganancia $40.416,66. Si te interesa abrir una cuenta con nosotros, por favor indicanos los datos que solicitamos a continuación"
      );
      let usuario1 = prompt("Ingresar nombre:");
      let mailUsuario1 = prompt("Ingresar mail:");
      alert("Estaremos enviando más información a:" + mailUsuario1);
      console.log("Usuario" + usuario1 + " mail " + mailUsuario1);
      break;

    case "3":
      alert(
        "TNA actual del 97% - Ganancia $80.833,33. Si te interesa abrir una cuenta con nosotros, por favor indicanos los datos que solicitamos a continuación"
      );
      let usuario2 = prompt("Ingresar nombre");
      let mailUsuario2 = prompt("Ingresaar mail");
      alert("Estaremos enviando más información a:" + mailUsuario2);
      console.log("Usuario" + usuario2 + " mail " + mailUsuario2);
      break;

    case "4":
      let valorCliente = Number(
        prompt("Por favor indique el valor que desea calcular su interés")
      );
      alert(
        "TNA actual del 97% - Ganancia" + porcentual(valorCliente, TasaBanco)
      );
      let usuario3 = prompt("Ingresar nombre:");
      let mailUsuario3 = prompt("Ingresar mail:");

      alert("Estaremos enviando más información al mail" + mailUsuario3);
      console.log("Usuario" + usuario3 + " mail " + mailUsuario3);
      break;

    default:
      alert("Opción no válida. Por favor vuelva a intentarlo.");
      break;

    case "0":
      alert(
        "Gracias por completar todos los campos, pronto entraremos en contacto"
      );
      break;
  }
}
alert("Gracias por operar con nosotros, hasta la próxima!");
