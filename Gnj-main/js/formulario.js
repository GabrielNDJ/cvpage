window.addEventListener('load', () => {
	const form = document.getElementById('form');
	const nombre = document.getElementById('nombre');
	const email = document.getElementById('email');
	const mensaje = document.getElementById('mensaje');
	const asunto = document.getElementById('asunto');


	form.addEventListener('submit', (e) => {
		e.preventDefault()
		validaCampos()
	})

	const validaCampos = () => {
		const nombreValor = nombre.value.trim();
		const emailValor = email.value.trim();
		const mensajeValor = mensaje.value.trim();
		const asuntoValor = asunto.value.trim();

		//Validar nombre
		if (nombreValor === '') {
			validaFalla(nombre, 'El nombre es requerido');
		} else if (nombreValor.length < 3) {
			validaFalla(nombre, 'El nombre debe tener al menos 3 caracteres')			;
			//Regex para validar nombre con espacios
		} else if (!/^[a-zA-Z ]+$/.test(nombreValor)) {
			validaFalla(nombre, 'El nombre solo puede contener letras');
		} else if (nombreValor.length > 30) {
			validaFalla(nombre, 'El nombre no debe tener más de 30 caracteres');
		} else {
			validaOk(nombre);
		}

		//Validar email
		if (emailValor === '') {
			validaFalla(email, 'El email es requerido');
		}
		//regex para validar email
		else if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValor)) {
			validaOk(email);
		} else {
			validaFalla(email, 'El email no es valido');
		}

		//Validar mensaje
		if (mensajeValor === '') {
			validaFalla(mensaje, 'Ingrese su mensaje.')
		} else if (mensajeValor.length < 10) {
			validaFalla(mensaje, 'Mensaje demasiado corto.')
		} else {
			validaOk(mensaje)
		}


		//Validar asunto
		if (asuntoValor === '') {
			validaFalla(asunto, 'Ingrese su asunto.')
		} else if (asuntoValor.length < 4) {
			validaFalla(asunto, 'Asunto demasiado corto.')
		} else {
			validaOk(asunto)
		}
	}

	const validaFalla = (input, msje) => {
		const formControl = input.parentElement
		const aviso = formControl.querySelector('p')
		aviso.innerText = msje
		formControl.className = 'form-control falla'
	}

	const validaOk = (input, msje) => {
		const formControl = input.parentElement
		formControl.className = 'form-control ok'
	}
});