


//funciones que modifican el index

function inicio(){
	mostrarCabecera();
}

function borrarControl(){
	
	$('#control').remove();
}

function mostrarCabecera(){
	$('#cabecera').remove();
	$('#control').append('<div id="cabecera"><h2>Panel de Control</h2><input type="text" id="nombre" placeholder="introduce tu nombre">');

}

function botonNombre(){
	$('#cabecera').append('<button type="button" id="nombreBtn" class="btn-primary');
	$('#nombreBtn').on('click',function(){
		$('nombreBtn').remove();
		crearUsuario($('#nombre').val());
		//control de 
	});
}

//funciones de comunicaciones con el servidor

function crearUsuario(nombre){
	if (nombre=""){
		nombre="jugador";
	}
	$.getJSON('/crearUsuario/'+nombre,function(datos)){
		//datos tiene la respuesta del servidor

		//mostrar los datos del usuario
	});

	//mostrar datos
}