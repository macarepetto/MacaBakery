

function mostrarPestaña(foto) {
	div1 = document.getElementById('Foto1');
	div2 = document.getElementById('Foto2');
	div3 = document.getElementById('Foto3');
	div1.style.display = 'none';
	div2.style.display = 'none';
	div3.style.display = 'none';
	divSeleccionado = document.getElementById(foto);
	divSeleccionado.style.display = 'block';
}

function validarEmail(email) {
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if (email.value.match(mailformat))
		return true;
	else
		return false;

}

function validarFormulario() {
	//valido el nombre
	nombre = document.getElementById('nombre');
	email = document.getElementById('email');
	indice = document.getElementById('evento').selectedIndex;

	// Valido que el campo nombre no esté vacío
	if (nombre.value.length == 0) {
		alert("Tiene que escribir su nombre");
		document.form.interes.focus()
		return 0;
	}

	// Verifico que el campo email no esté vacío
	if (email.value.length == 0) {
		alert("Tiene que escribir una dirección de email.");
		document.form.interes.focus()
		return 0;
	}

	// Valido que el email sea válido
	if (validarEmail(email) == false) {
		alert("La dirección de email es incorrecta.");
		document.form.interes.focus()
		return 0;
	}

	//Valido el evento
	if (evento.value == "") {
		alert("Debe seleccionar un motivo de su contacto.")
		document.form.interes.focus()
		return 0;
	}

	//el formulario se envia
	alert("Muchas gracias por su consulta./n Pronto nos comunicaremos con usted.");
}

