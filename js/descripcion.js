document.addEventListener("DOMContentLoaded", () => {
  let datoUrl = window.location.search;
  //traigo toda la URL y luego voy a la posicion 0, el titulo
  document
    .getElementById("titulo")
    .append(datoUrl.split("?nombre=")[1].split("%20").join(" ").split("&")[0]);

  //imagen
  document
    .getElementById("imagencard")
    .setAttribute("src", datoUrl.split("&")[1]);

  //ubicacion
  document
    .getElementById("location")
    .append(datoUrl.split("&")[2].split("%20").join(" "));

  //el estatus
  document.getElementById("status").append(datoUrl.split("&")[3]);

  //origen
  document
    .getElementById("origen")
    .append(datoUrl.split("&")[4].split("%20").join(" "));

  //genero
  document.getElementById("gender").append(datoUrl.split("&")[5]);
});

//el split transforma en un array, asi puedo usar la posicion de cada elemento en la URL
