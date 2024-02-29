/*---------------------------------------RESETEAR TURNO---------------------------------------------------*/
function resetNumero() {
  const numeroTurno = document.getElementById("numeroTurno");

  if (numeroTurno instanceof HTMLElement) {
    numeroTurno.innerHTML = "00";
  }
}

const btnReset = document.getElementById("btn-reset");
if (btnReset !== null && btnReset !== undefined) {
  btnReset.addEventListener("click", resetNumero);
}

/*---------------------------------------INTRODUCIR TURNO---------------------------------------------------*/
function introduceTurno() {
  const numeroManual = document.getElementById("turno");
  if (numeroManual instanceof HTMLInputElement) {
    const valorInput = numeroManual.value;
    let valorInputInt = parseInt(valorInput);

    if (!isNaN(valorInputInt)) {
      let numeroTurno = document.getElementById("numeroTurno");

      if (numeroTurno instanceof HTMLElement) {
        numeroTurno.innerHTML = valorInput.padStart(2, "0");
      }
    } else {
      window.alert("Introduce un numero");
    }
  }
}

/*if (isNaN(formatoNumero)) {
    window.alert("Introduce un numero");
  } else {
    (document.getElementById("numeroTurno") as HTMLInputElement).innerHTML =
      numeroManual.padStart(2, "0");
  }*/

const btnCambiar = document.getElementById("btn-cambiar");
if (btnCambiar !== null && btnCambiar !== undefined) {
  btnCambiar.addEventListener("click", introduceTurno);
}
/*---------------------------------------SIGUIENTE NUMERO---------------------------------------------------*/
function numeroSiguiente() {
  const numeroMarcador = document.getElementById("numeroTurno");

  if (numeroMarcador instanceof HTMLElement) {
    const valor = numeroMarcador.innerHTML;
    const numeroActualFormateado = parseInt(valor);
    const numeroSiguiente = numeroActualFormateado + 1;
    let numeroString = numeroSiguiente.toString().padStart(2, "0");
    numeroMarcador.innerHTML = numeroString;
  }
}

const btnSiguiente = document.getElementById("btn-siguiente");
if (btnSiguiente !== null && btnSiguiente !== undefined) {
  btnSiguiente.addEventListener("click", numeroSiguiente);
}

/*---------------------------------------NUMERO ANTERIOR---------------------------------------------------*/
function numeroAnterior() {
  const numeroMarcador = document.getElementById("numeroTurno");

  if (numeroMarcador instanceof HTMLElement) {
    const valor = numeroMarcador.innerHTML;
    const numeroActualFormateado = parseInt(valor);
    const numeroAnterior = numeroActualFormateado - 1;
    let numeroString = numeroAnterior.toString().padStart(2, "0");

    if (numeroAnterior > 0) {
      numeroMarcador.innerHTML = numeroString;
    } else {
      resetNumero();
    }
  }
}

const btnAnterior = document.getElementById("btn-anterior");
if (btnAnterior !== null && btnAnterior !== undefined) {
  btnAnterior.addEventListener("click", numeroAnterior);
}
