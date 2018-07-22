

function Calcular () 
{
 	var numeroInicial;
	var baseInicial;
	var resultado;
	var baseFinal;
	var validaBase =[];
	var validaBasePantalla;
	var numeroParaConvertir;

 //------------------------------------------------------------
//TOMA LOS VALORES POR PANTALLA

	numeroInicial=document.getElementById('numeroInicial').value;
	baseInicial=document.getElementById('baseInicial').value;
	baseFinal=document.getElementById('baseFinal').value;
	numeroInicial=numeroInicial.toUpperCase ();

//------------------------------------------------------------
//VALIDO Q LAS BASES SEAN DISTINTAS

	if (baseInicial===baseFinal) {alert ("Ambas bases son iguales. Debes seleccionar bases diferentes!!!");}
		else 

//------------------------------------------------------------
//TRANSFORMA EL NRO RECIBIDO EN ARRAY PARA EVALUAR SU BASE

	validaBase=Array.from(numeroInicial); // En validaBase se guarda el nro ingresado como un string
	//console.log("valores del array:  "+validaBase); // muestra los componentes del array como string

//------------------------------------------------------------
//VALIDO Q EL NRO INICIAL CORRESPONDA A LA BASE

		switch (baseInicial){

								case "Decimal": { 	function baseCorrectaDiez (valor){
																						return valor<=9;
																					  }
													console.log("verifica base 10: "+validaBase.every(baseCorrectaDiez));
													validaBasePantalla=validaBase.every(baseCorrectaDiez);  
													if (validaBasePantalla===false){alert("el nro no pertenece a la base elegida.");}
														else	numeroParaConvertir=parseInt(numeroInicial,10); // Paso el nro a decimal, para poder cambiarlo de base luego 
													break;
												}

								case "Binario": { 	function baseCorrectaDos (valor){
																					return valor<=1;
																					}
													console.log("verifica base 2: "+validaBase.every(baseCorrectaDos));					
													validaBasePantalla=validaBase.every(baseCorrectaDos);  
													if (validaBasePantalla===false){alert("el nro no pertenece a la base elegida.");}
														else	numeroParaConvertir=parseInt(numeroInicial,2); // Paso el nro a decimal, para poder cambiarlo de base luego 
													break;
												}

					
								case "Octal":	 { 	function baseCorrectaOcho (valor){
																					return valor<=7;
																					  }
													console.log("verifica base 8: "+validaBase.every(baseCorrectaOcho));
													validaBasePantalla=validaBase.every(baseCorrectaOcho);
													if (validaBasePantalla===false){alert("el nro no pertenece a la base elegida.");}
														else	numeroParaConvertir=parseInt(numeroInicial,8); // Paso el nro a decimal, para poder cambiarlo de base luego 
													break;
													}			
					

								case "Hexadecimal": { function baseCorrectaDieciseis (valor){
													return valor<=9 || valor==="A" || valor==="B" || valor==="C" || valor==="D" || valor==="E" || valor==="F";
																							}
													console.log("verifica base 16: "+validaBase.every(baseCorrectaDieciseis));
													validaBasePantalla=validaBase.every(baseCorrectaDieciseis);
													if (validaBasePantalla===false){alert("el nro no pertenece a la base elegida.");}
														else	numeroParaConvertir=parseInt(numeroInicial,16); // Paso el nro a decimal, para poder cambiarlo de base luego 
													break;
													}
							}

//------------------------------------------------------------
//ASIGNA LA BASE FINAL SEGÚN CADA CASO, PARA REALIZAR EL CALCULO.

		switch (baseFinal) {

							case "Decimal": { 	baseFinal=10;					
												break;
												}

							case "Binario": { 	baseFinal=2;					
												break;
												}

							
							case "Octal":	 { 	baseFinal=8;
												break;
												}			
							

							case "Hexadecimal": { baseFinal=16;
												break;
												}

							}

//------------------------------------------------------------
//CONVIERTE EL NRO A LA BASE FINAL Y LO MUESTRA POR PANTALLA

//console.log("numeroParaConvertir:   "+numeroParaConvertir);
resultado=numeroParaConvertir.toString (baseFinal); 

document.getElementById('resultado').value=resultado;

}//FIN DE LA FUNCIÓN



