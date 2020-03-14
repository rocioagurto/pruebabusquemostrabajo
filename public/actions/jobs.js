let button = document.getElementById("return");
button.addEventListener("click", function(){
    window.location.href = "/"
});

let form = document.getElementById ("formulario");


form.addEventListener("submit", function(event){
  event.preventDefault();
  let localizacion = 
  form.querySelector("#localizacion").value;
  console.log (localizacion);
  getJobs(localizacion)
});

const getJobs  = async localizacion =>{
  let url="https://corsanywhere.herokuapp.com/https://jobs.github.com/positions.json?"+"location="+localizacion;
  let respuesta = await axios.get(url);
  console.log(respuesta.data);
  let jobs = respuesta.data;

            jobs.forEach(job=>{
            var Tarjeta =`
            <div class=" container ui link items">
            <div class="item">
                <div class="ui tiny image">
                  <img src="${job.company_logo || ''}">
                </div>
                <div class="content">
                  <div class="header">Cargo a postular:${job.title}
                  </div>
                  <div class="meta">
                     <span>Empresa:${job.company}</span>
                  </div>
                  <div class="ui styled fluid accordion">
                  <div class="title">
                    <i class="dropdown icon"></i><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                    Ver detalles del cargo
                  </font></font></div>
                  <div class="content">
                   ${job.description} 
                  </div>
                 </div>
                </div>
                
                </div>
              </div>
            </div>
          `
        document.getElementById ('listado').innerHTML+=Tarjeta

    });

    $('.ui.accordion').accordion('refresh');
}



