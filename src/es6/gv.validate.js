const $select    = jQuery('.form-group select');
const $input     = jQuery('.form-group input');
const $form      = jQuery('#aval-form');
const $submit = jQuery('#aval-form .btn-submit');
const $cal       = jQuery('#trabajo');


jQuery(document).ready( ()=>{

	//Fecha quemada

	const fecha = new Date();
	const dia = fecha.getDate();
	const mes = fecha.getMonth();
	const year = fecha.getFullYear();

	const $fechaHoy = `${year}/${mes}/${dia} `;

	jQuery('.fecha').text($fechaHoy);


	//metodo para aceptar texto con espacios y caracteres especiales

	jQuery.validator.addMethod('letras', function(val, el){
		return this.optional(el) || /^[a-z" "ñÑáéíóúÁÉÍÓÚ,.;]+$/i.test(val);
	});


	//Ubicacion de mensaje de error//
	const errorPlacement = (error, element)=>{

		// console.lo/(element[0].name)
		if( element[0].name === 'avalTipo' ){
			error.insertAfter(element.parent().parent().parent().parent().next())
		}else{
			error.insertAfter(element.parent())

		}
	};

	$form.validate({
		debug: true,

		errorElement: 'div',
		errorClass: 'msn-place',

		rules: {
		  avalTipo: 		{required:true},
		  nombre: 			{required:true,letras:true},
		  apellidos: 		{required:true,letras:true },
		  cc: 				{required:true,digits:true },
		  expedicion:		{required:true,letras:true },
		  direccionCasa:	{required:true },
		  depCasa:	{required:true },
		  ciudadCasa:	{required:true },
		  telCasa:	{required:true, digits:true },
		  direccionTrabajo:	{required:true },
		  depTrabajo:	{required:true },
		  ciudadTrabajo:	{required:true },
		  telTrabajo:	{required:true, digits:true },
		  correo:	{required:true, email:true },
		  telCelular:	{required:true, digits:true, minlength:10 }

		},


		messages: {

		  avalTipo:{
		  	required: 'Debe seleccionar una opci&oacute;n'
		  },
		  nombre:{
		  	required:'Ind&iacute;quenos su nombre',
		  	letras: 'Solo ingrese letras'
		  },
		  apellidos:{
		  	required:'Ind&iacute;quenos su apellidos',
		  	letras: 'Solo ingresa letras'
		  },
		  cc:{
		  	required:'Ind&iacute;quenos su n&uacute;mero de identificaci&oacute;n',
		  	digits: 'Solo se aceptan n&uacute,meros sin espacios ni puntos.'
		  },
		  expedicion:{
		  	required:'Ind&iacute;quenos el lugar de expedici&oacute;n',
		  	letras: 'Solo ingrese letras'

		  },
		  direccionCasa:{
		  	required:'Ind&iacute;quenos una direcci&oacute;n de residencia',

		  },
		  depCasa:{
		  	required:'Ind&iacute;quenos el departamento en el que reside',

		  },
		  ciudadCasa:{
		  	required:'Ind&iacute;quenos la ciudad en la que reside',

		  },
		  telCasa:{
		  	required:'Ind&iacute;quenos un tel&eacute;fono',
		  	digits: 'Solo se aceptan n&uacute,meros sin espacios ni puntos.'

		  },
		  direccionTrabajo:{
		  	required:'Ind&iacute;quenos una direcci&oacute;n de trabajo',

		  },
		  depTrabajo:{
		  	required:'Ind&iacute;quenos el departamento en el que trabaja',

		  },
		  ciudadTrabajo:{
		  	required:'Ind&iacute;quenos la ciudad en la que trabaja',

		  },
		  telTrabajo:{
		  	required:'Ind&iacute;quenos un tel&eacute;fono',
		  	digits: 'Solo se aceptan n&uacute,meros sin espacios ni puntos.'

		  },
		  correo:{
		  	required:'Ind&iacute;quenos un correo electr&oacute;nico',
		  	email: 'Ingrese un correo electr&oacute;nico v&aacute;lido.'

		  },
		  telCelular:{
		  	required:'Ind&iacute;quenos un tel&eacute;fono',
		  	digits: 'Solo se aceptan n&uacute,meros sin espacios ni puntos.',
		  	minlength: 'Ingrese un tel&eacute;fono v&aacute;lido.'

		  }


		},

		errorPlacement

	});

	
/*No pasar de acá para el DOM ready*/
});