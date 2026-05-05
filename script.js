function mezclar(lista) {
  for (let i = lista.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [lista[i], lista[j]] = [lista[j], lista[i]];
  }
  return lista;
}

function generarParejas() {
  let varones = document.getElementById("varones").value
    .split("\n")
    .map(nombre => nombre.trim())
    .filter(nombre => nombre !== "");

  let mujeres = document.getElementById("mujeres").value
    .split("\n")
    .map(nombre => nombre.trim())
    .filter(nombre => nombre !== "");

  varones = mezclar(varones);
  mujeres = mezclar(mujeres);

  let resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  let numeroComputadora = 1;
  let cantidadParejasMixtas = Math.min(varones.length, mujeres.length);

  for (let i = 0; i < cantidadParejasMixtas; i++) {
    resultado.innerHTML += `<p><strong>Computadora ${numeroComputadora}:</strong> ${varones[i]} + ${mujeres[i]}</p>`;
    numeroComputadora++;
  }

  let sobrantes = [];

  if (varones.length > cantidadParejasMixtas) {
    sobrantes = sobrantes.concat(varones.slice(cantidadParejasMixtas));
  }

  if (mujeres.length > cantidadParejasMixtas) {
    sobrantes = sobrantes.concat(mujeres.slice(cantidadParejasMixtas));
  }

  sobrantes = mezclar(sobrantes);

  for (let i = 0; i < sobrantes.length - 1; i += 2) {
    resultado.innerHTML += `<p><strong>Computadora ${numeroComputadora}:</strong> ${sobrantes[i]} + ${sobrantes[i + 1]}</p>`;
    numeroComputadora++;
  }

  if (sobrantes.length % 2 !== 0) {
    resultado.innerHTML += `<p>${sobrantes[sobrantes.length - 1]} quedó sin pareja.</p>`;
  }

  if (varones.length === 0 && mujeres.length === 0) {
    resultado.innerHTML = "<p>Por favor, escribí algunos nombres.</p>";
  }
}

function limpiarTodo() {
  document.getElementById("varones").value = "";
  document.getElementById("mujeres").value = "";
  document.getElementById("resultado").innerHTML = "Todavía no generaste parejas.";
}