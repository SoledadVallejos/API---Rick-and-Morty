//DOMContentLoaded disparado cuando el documento HTML ha sido completamente cargado y parseado
document.addEventListener("DOMContentLoaded", () => {
  fetchData();
});

//Traigo la informacion
const fetchData = async () => {
  //Funcion async espera la informacion
  try {
    const res = await fetch("https://rickandmortyapi.com/api/character"); //url await = promesa
    const data = await res.json(); // la informacion transformo a json
    console.log(data);
    verCard(data); //se pinta con la data
  } catch (error) {
    console.log(error);
  }
};

const verCard = (data) => {
  let card = "";

  data.results.forEach((element) => {
    /* card  */
    card += `<div  class="card shadow p-3 mb-4 bg-body rounded" style="width: 22rem;">
        
      <img
        src="${element.image}"
        alt=""
        class="bd-placeholder-img card-img-top"
      />
      
      <div class="card-body text-bg-dark rounded-bottom">
        <h2 class="fw-bold pb-2">${element.name}</h2>
        <h6>
          ⭕ ${element.status} - <samp class="text-muted fw-semibold">${element.species}</samp>
        </h6>
        <p>
          Last known location: <br />
          <samp class="text-muted fw-semibold">${element.location.name}</samp>
        </p>
        <p>
          Origin: <br />
          <samp class="text-muted fw-semibold">${element.origin.name}</samp>
        </p>

        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button type="button" class="btn btn-danger">
              View
            </button>
            
          </div>
          <small class="text-muted"> Gender: ${element.gender}</small>
        </div>
      </div>
    </div>`;
  });
  document.getElementById("card").innerHTML = card;
};
