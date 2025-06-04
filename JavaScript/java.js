function mostrarFormulario() {
    var frame = document.getElementById("frameFormulario");
    frame.src = "formulario.html";
    frame.style.display = "block";
}

function agregarReceta() {
      
      const titulo = document.getElementById("titulo").value;
      const fecha = document.getElementById("fecha").value;
      const ingredientes = document.getElementById("ingredientes").value;
      const truco = document.getElementById("truco").value;
      
      const contenedor = document.getElementById("contenedorRecetas");

  
      const article = document.createElement("article");

      if (titulo=="" || fecha=="" || ingredientes==""){
        
         alert("Por favor llene el formulario!!");
        
      }else{

        article.innerHTML = `
        <h2>${titulo}</h2>
        <p class="meta">Publicado en: ${fecha}</p>
        <p>Ingredientes:<br>${ingredientes.replace(/\n/g, "<br>")}</p>
        <p><strong>Truco:</strong><br>${truco}</p>
      `;

      contenedor.appendChild(article);


      document.getElementById("titulo").value = "";
      document.getElementById("fecha").value = "";
      document.getElementById("ingredientes").value = "";
      document.getElementById("truco").value = "";
      }

      
    }

    function validar(){

      const nombre = document.getElementById("Nombre").value;
      const correo = document.getElementById("Correo").value;
      const consulta = document.getElementById("Consulta").value;

      if (nombre=="" || correo=="" || consulta==""){
        
         alert("Por favor llene todos los campos de su Consulta!");

      }else{

        alert("Su consulta ha sido Enviada");

      document.getElementById("Nombre").value = "";
      document.getElementById("Correo").value = "";
      document.getElementById("Consulta").value = "";
      

      }
      
    }




