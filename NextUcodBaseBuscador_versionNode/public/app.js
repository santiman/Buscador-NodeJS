$( document ).ready(function() {
		$( "#buscar" ).click(function() {
			cargarCasas();
		});
	});

function insertarOfertas(casas) {
   forEach(casas,function(elemento){
  		var insertar = "<div class="'card horizontal ofertas'"><div class="'card-image'"><img src="'img/home.jpg'"></div><div class="'card-stacked'"><div class="'card-content'"><div><b>Direccion: " + elemento.Direccion +
      "</b><p></p></div><div><b>Ciudad: " + elemento.Ciudad +
      "</b><p></p></div><div><b>Telefono: " + elemento.Telefono +
      "</b><p></p></div><div><b>Código postal: " + elemento.Codigo_Postal +
      "</b><p></p></div><div><b>Precio: " + elemento.Tipo +
      "</b><p></p></div><div><b>Tipo: " + elemento.Precio +
      "</b><p></p></div></div><div class="'card-action right-align'"><a href="'#'">Ver más</a></div></div></div>";
  		$(".lista").append(insertar);
  	});
  }

function  cargarCasas(){
	$.ajax({
  	url: "./data.json",
  	success: function(datos){
  		insertarOfertas(datos);
  	}
	});
}



//Inicializador del elemento Slider
$("#rangoPrecio").ionRangeSlider({
  type: "double",
  grid: false,
  min: 0,
  max: 100000,
  from: 1000,
  to: 20000,
  prefix: "$"
})

function setSearch() {
  let busqueda = $('#checkPersonalizada')
  busqueda.on('change', (e) => {
    if (this.customSearch == false) {
      this.customSearch = true
    } else {
      this.customSearch = false
    }
    $('#personalizada').toggleClass('invisible')
  })
}

setSearch()
