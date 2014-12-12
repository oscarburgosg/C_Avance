function cargarSelect2(valor) {
     var arrayValores=new Array( 
     	 new Array(1,1,"Ingresados"), 
         new Array(1,2,"Recepcionados"), 
         new Array(1,3,"Preevaluados"), 
         new Array(2,1,"En Trabajo"), 
         new Array(2,2,"Programado"), 
         new Array(2,3,"En espera"), 
         new Array(3,1,"Sub Estado"), 
         new Array(3,2,"Diagn&oacute;stico"), 
         new Array(3,3,"Aprobación cliente"), 
         new Array(3,4,"Definici&oacute;n cliente"),
         new Array(3,5,"Servicio de tercero - D y P") ,
         new Array(3,6,"QA") ,
         new Array(3,7,"Repuestos") ,
         new Array(3,8,"T&eacute;cnico") ,
         new Array(3,9,"Nave") ,
         new Array(3,10,"Soporte producto"),
         new Array(4,1,"Retiro"),
         new Array(4,1,"Por regularizar") );
     if(valor==0) {
          // desactivamos el segundo select 
         document.getElementById("select2").disabled=true; 
     }else{
         // eliminamos todos los posibles valores que contenga el select2 
         document.getElementById("select2").options.length=0; 
         // aÃ±adimos los nuevos valores al select2 
         document.getElementById("select2").options[0]=new Option("Selecciona una opcion", "0");
         for(i=0;i<arrayValores.length;i++) {
             // unicamente aÃ±adimos las opciones que pertenecen al id seleccionado
             // del primer select 
             if(arrayValores[i][0]==valor) { 
                 document.getElementById("select2").options[document.getElementById("select2").options.length]=new Option(arrayValores[i][2], arrayValores[i][1]); 
             } 
         }
          // habilitamos el segundo select 
         document.getElementById("select2").disabled=false;
    } 
} 
/** * Una vez selecciona una valor del segundo selecte, obtenemos la informaciÃ³n * de los dos selects y la mostramos */
function seleccinado_select2(value) {
    var v1 = document.getElementById("select1"); 
    var valor1 = v1.options[v1.selectedIndex].value; 
    var text1 = v1.options[v1.selectedIndex].text; 
    var v2 = document.getElementById("select2"); 
    var valor2 = v2.options[v2.selectedIndex].value; 
    var text2 = v2.options[v2.selectedIndex].text;
    
    //alert("Se ha seleccionado el valor "+valor1+" ("+text1+") del primer select y el valor "+valor2+" ("+text2+") del segundo select");
}