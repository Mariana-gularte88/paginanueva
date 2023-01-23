class Dato {
    constructor(nombreCliente, apellidoCliente, email) {
      this.nombreCliente = nombreCliente;
      this.apellidoCliente = apellidoCliente;
      this.email = email;
      
    }
  }

  const datos = [];
  
  /*****************************/
  //Si el LocalStorage tiene datos, los agrego al Array de Reservas.
  
  if (localStorage.getItem('datos')) {
    let dato = JSON.parse(localStorage.getItem('datos'));
    /* reservas.push(...reserva); */
    for (let i = 0; i < dato.length; i++) {
      datos.push(dato[i]);
    }
  }
  
  /*****************************/
  
  const formulario = document.getElementById('formulario');
  
  formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    agregarDato();
  });
  
  function agregarDato() {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email= document.getElementById('email').value;
    const nuevoDato= new Dato(nombre, apellido, email);
    datos.push(nuevoDato);
    //Agrego al LocalStorage:
    localStorage.setItem('datos', JSON.stringify(datos));
    formulario.reset();
  }
  
  const contenedorDatos = document.getElementById('contenedorDatos');
  
  const verDatos = document.getElementById('verDatos');
  
  verDatos.addEventListener('click', () => {
    verDatos();
  });
  
  function verDatos() {
    contenedorDatos.innerHTML = '';
    datos.forEach((dato) => {
      const div = document.createElement('div');
      div.innerHTML = `
                        <div>
                            <p>Nombre del Cliente: ${dato.nombreCliente}</p>
                            <p>Apellido del Cliente: ${dato.apellidoCliente}</p>
                            <p>Email: ${dato.email}</p>
                            
                        </div>
        
                        `;
      contenedorDatos.appendChild(div);
    });
  }
