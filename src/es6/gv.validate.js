const $select    = jQuery('.form-group select');
const $input     = jQuery('.form-group input');
const $form      = jQuery('#trabajo');
const $btnSubmit = jQuery('#trabajo .btn-submit');
const $cal       = jQuery('#trabajo');

//Estado activo de los campos//
const campoActive = (el) =>{

	jQuery(el)
		.focusin(function() {
			jQuery(this).parent().addClass('active')
		
		})
		.focusout(function() {

			let $self = jQuery(this);

			if (jQuery($self).val() != '' ){
				jQuery($self).parent().addClass('active')

			}else{
				jQuery($self).parent().removeClass('active')

			}
		});

};


jQuery(document).ready( ()=>{

	//inputs activos
	campoActive($input);

	//Selects activos

	$select.change(function () {
		let $self = jQuery(this);

		if(jQuery(this).val() != ''){
			jQuery($self)
			.parent().addClass('active')
		}else{
			jQuery($self)
			.parent().removeClass('active')

		}
	});


	//metodo para aceptar texto con espacios y caracteres especiales

	jQuery.validator.addMethod('letras', function(val, el){
		return this.optional(el) || /^[a-z" "ñÑáéíóúÁÉÍÓÚ,.;]+$/i.test(val);
	});


	//Ubicacion de mensaje de error//
	const errorPlacement = (error, element)=>{
		error.insertAfter(element.parent())
	};

	$form.validate({
		// debug: true,

		errorElement: 'div',
		errorClass: 'msn-place',

		rules: {

		  nombre: 			{required:true,letras:true},
		  apellidos: 		{required:true,letras:true },
		  municipio: 		{ required:true },
		  ciudad: 			{ required:true  },
		  telefono: 		{required:true, digits:true, minlength:9, maxlength:10 },
		  email: 			{required:true,	email:true},
		  politicas: 		{ required:true  }

		},


		messages: {
		  nombre:{
		  	required:'Indicanos tu nombre',
		  	letras: 'Solo ingresa letras'
		  },
		  apellidos:{
		  	required:'Indicanos tus apellidos',
		  	letras: 'Solo ingresa letras'
		  },
		  municipio:{
		  	required:'debes ingresar el lugar'
		  },
		  ciudad:{
		  	required:'debes ingresar una ciudad'
		  },
		  telefono:{
		  	required: 'Indicanos un tel&eacute;fono de contacto' ,
		  	digits:'Solo ingresa n&uacute;meros',
		  	minlength: 'N&uacute;mero no v&aacute;lido',
		  	maxlength: 'N&uacute;mero no v&aacute;lido'
		  },
		  email:{
		  	required: 'Indicanos un email' ,
		  	email: 'Formato de email inv&aacute;lido'
		  },
		  politicas:{
		  	required: 'Debes aceptar el aviso de privacidad'
		  }

		},

		errorPlacement

	});

	
/*No pasar de acá para el DOM ready*/
});