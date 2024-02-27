/*---------------------------------------RESETEAR TURNO---------------------------------------------------*/
function resetNumero() {
  (document.getElementById("numeroTurno") as HTMLInputElement).innerHTML = "00";
}

const btnReset = document.getElementById("btn-reset");
if (btnReset !== null && btnReset !== undefined) {
  btnReset.addEventListener("click", resetNumero);
}

/*---------------------------------------INTRODUCIR TURNO---------------------------------------------------*/
function introduceTurno() {
  const numeroManual = (document.getElementById("turno") as HTMLInputElement)
    .value;

  if (isNaN(parseInt(numeroManual))) {
    window.alert("Introduce un numero");
  } else {
    (document.getElementById("numeroTurno") as HTMLInputElement).innerHTML =
      numeroManual.padStart(2, "0");
  }
}
const btnCambiar = document.getElementById("btn-cambiar") as HTMLInputElement;
btnCambiar.addEventListener("click", introduceTurno);

/*---------------------------------------SIGUIENTE NUMERO---------------------------------------------------*/
function numeroSiguiente() {
  const numeroMarcador = (
    document.getElementById("numeroTurno") as HTMLInputElement
  ).innerHTML;

  const numeroActualFormateado = parseInt(numeroMarcador);
  const numeroSiguiente = numeroActualFormateado + 1;
  const numeroString = numeroSiguiente.toString().padStart(2, "0");

  (document.getElementById("numeroTurno") as HTMLInputElement).innerHTML =
    numeroString;
}

const btnSiguiente = document.getElementById("btn-siguiente");
if (btnSiguiente !== null && btnSiguiente !== undefined) {
  btnSiguiente.addEventListener("click", numeroSiguiente);
}

/*---------------------------------------NUMERO ANTERIOR---------------------------------------------------*/
function numeroAnterior() {
  const numeroMarcador = (
    document.getElementById("numeroTurno") as HTMLInputElement
  ).innerHTML;

  const numeroActualFormateado = parseInt(numeroMarcador);
  const numeroAnterior = numeroActualFormateado - 1;

  if (numeroAnterior > 0) {
    const numeroString = numeroAnterior.toString().padStart(2, "0");

    (document.getElementById("numeroTurno") as HTMLInputElement).innerHTML =
      numeroString;
  } else {
    resetNumero();
  }
}

const btnAnterior = document.getElementById("btn-anterior");
if (btnAnterior !== null && btnAnterior !== undefined) {
  btnAnterior.addEventListener("click", numeroAnterior);
}
