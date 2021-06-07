
document.addEventListener("DOMContentLoaded", () => {
  
  consultarApi();
  
});






function consultarApi() {

  let IDMunicipio = 7135;
  
  const url = `https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/EstacionesTerrestres/FiltroMunicipio/${IDMunicipio}`;
  Spinner();
  fetch(url)
  .then(respuesta => respuesta.json())
  .then(datos => {
    //console.log(datos);
    
    //console.log(datos.ListaEESSPrecio[0]['Precio Gasoleo A']);
    
    limpiarHTML();
    mostrarDatos(datos);
    
  })
  
  
}

function mostrarDatos(datos) {
  
  
  const resultado = document.getElementById('resultado');
  
  
  const { Municipio, Rótulo, Dirección, Horario } = datos;


  // DATOS DE LA GASOLINERA DE LA CARRETERA MONTROY
  const gasoleoA = datos.ListaEESSPrecio[0]['Precio Gasoleo A'];
  const gasoleoB = datos.ListaEESSPrecio[0]['Precio Gasoleo B'];
  const gasoleoPremium = datos.ListaEESSPrecio[0]['Precio Gasoleo Premium'];
  const gasolina95 = datos.ListaEESSPrecio[0]['Precio Gasolina 95 E5'];
  const gasolina98 = datos.ListaEESSPrecio[0]['Precio Gasolina 98 E5'];
  const calle = datos.ListaEESSPrecio[0].Dirección;
  const horario = datos.ListaEESSPrecio[0].Horario;
  const nombre = datos.ListaEESSPrecio[0].Rótulo;
  const lugar = datos.ListaEESSPrecio[0].Localidad;

  // DATOS DE LA GASOLINERA DE LA ENTRADA- SALIDA DEL PUEBLO
  const gasoleoA2 = datos.ListaEESSPrecio[1]['Precio Gasoleo A'];
  const gasoleoB2 = datos.ListaEESSPrecio[1]['Precio Gasoleo B'];
  const gasoleoPremium2 = datos.ListaEESSPrecio[1]['Precio Gasoleo Premium'];
  const gasolina952 = datos.ListaEESSPrecio[1]['Precio Gasolina 95 E5'];
  const gasolina982 = datos.ListaEESSPrecio[1]['Precio Gasolina 98 E5']
  const calle2 = datos.ListaEESSPrecio[1].Dirección;
  const horario2 = datos.ListaEESSPrecio[1].Horario;
  const nombre2 = datos.ListaEESSPrecio[1].Rótulo;
  const lugar2 = datos.ListaEESSPrecio[1].Localidad;

  console.log('Ponte en contacto conmigo mediante mi twitter: @garri4p');
  resultado.innerHTML += `
  
  <div class="col-12 card m-2 p-2">
  <h2 style="background-color: #f16875;" class="p-2">💰 Datos de Precios</h2>
  <p class="bg-primary text-white p-2">⛽ Gasolinera Carretera Montroy.</p>       
  <div class="col card-body">
  <p class=" card-title">Dirección: ${calle}</p>
  <p class=" card-title">Horario: ${horario}</p>
  <p class=" card-title">Gasolinera: ${nombre}</p>
  <p class=" card-title">Lugar: ${lugar}</p>
  <p class=" card-title">Tipo: Venta Público</p>
  <p class=" card-title fw-bold">Precio Gasoleo A: ${gasoleoA}</p>
  <p class=" card-title fw-bold">Precio Gasoleo B: ${gasoleoB}</p>
  <p class=" card-title fw-bold">Precio Gasoleo Premium : ${gasoleoPremium}</p>
  <p class=" card-title fw-bold">Precio Gasolina 95: ${gasolina95}</p>
  <p class=" card-title fw-bold">Precio Gasolina 98: ${gasolina98}</p>

  
  
  
  </div>
  </div>

  <!-- 2 GASOLINERA -->

  <div class="col-12 card m-2 p-2">
  <h2 style="background-color: #f28036;" class="p-2">💰 Datos de Precios</h2>
  <p class="bg-primary text-white p-2">⛽ Gasolinera Entrada-Salida Pueblo.</p>       
  <div class="col card-body">
  <p class=" card-title">Dirección: ${calle2}</p>
  <p class=" card-title">Horario: ${horario2}</p>
  <p class=" card-title">Gasolinera: ${nombre2}</p>
  <p class=" card-title">Lugar: ${lugar2}</p>
  <p class=" card-title">Tipo: Venta Público</p>
  <p class=" card-title fw-bold">Precio Gasoleo A: ${gasoleoA2}</p>
  <p class=" card-title fw-bold">Precio Gasoleo B: ${gasoleoB2}</p>
  <p class=" card-title fw-bold">Precio Gasoleo Premium : ${gasoleoPremium2}</p>
  <p class=" card-title fw-bold">Precio Gasolina 95: ${gasolina952}</p>
  <p class=" card-title fw-bold">Precio Gasolina 98: ${gasolina982}</p>
  
  
  
  </div>
  </div>
  
  
 
  
  `;
  
  
}

// // Limpiar Datos o campos una vez enviados
function limpiarHTML() {
  while (resultado.firstChild) {
    resultado.removeChild(resultado.firstChild);
  }
}


//Spinnner 
function Spinner(){

  limpiarHTML() 
  const divSpinner = document.createElement('div');
  divSpinner.classList.add('spinner');

  divSpinner.innerHTML = `
    
    <div class="rect1"></div>
    <div class="rect2"></div>
    <div class="rect3"></div>
    <div class="rect4"></div>
    <div class="rect5"></div>
 
    `;
  resultado.appendChild(divSpinner);


}


// time y footer

const fecha = new Date();
const anio = fecha.getFullYear();


document.getElementById('fecha').innerHTML = `

<p >Web para consultar el precio de los carburantes en Montserrat,46192 (Valencia) | Copyright © ${anio} 🔥 Proyecto realizado por: <a class="enlace" target="_blank" href="https://twitter.com/garri4p">@garri4p</a> </p>
`;

