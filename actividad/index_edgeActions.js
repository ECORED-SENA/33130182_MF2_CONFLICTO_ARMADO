/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2627, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4112, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5597, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         rtas_incorrectas=0;
         rtas_correctas=0;
         pregunta="";
         rta_pre1="";
         rta_pre2="";
         rta_pre3="";
         rta_pre4="";
         
         
         //pregunta1
         $('.pre_1').click(function(event) { 	
             var rta =$(this).attr('id');
             //pregunta="pregunta2";
         
             if(rta=='Stage_btna_1'){
         		//sym.$('x1').attr('src','images/chulo.svg');	
         		rtas_correctas++;	
         		// Reproducir una pista de audio 
         		rta_pre1="si";
         		//alert(rta_pre1=="");
         		sym.$("bien")[0].play();
         		// Ocultar un elemento 
         		sym.$("bien1").show();
         
         		sym.play("res1")
         
             }else{
         		// Mostrar un elemento 
         		//sym.$('x1').attr('src','images/x.svg');		
         		rtas_incorrectas++;	
         		// Reproducir una pista de audio 
         		sym.$("mal22")[0].play();
         		sym.$("mal1").show();
         		sym.play("pre2");
         		// Mostrar un elemento 
         		//sym.$("negativo").show();
         
             }
         
         })
         
         //pregunta2
         $('.pre_2').click(function(event) { 	
             var rta =$(this).attr('id');
             //pregunta="pregunta2";
         
             if(rta=='Stage_btnb_2'){
         		//sym.$('x1').attr('src','images/chulo.svg');	
         		rtas_correctas++;	
         		// Reproducir una pista de audio 
         		rta_pre2="si";
         		//alert(rta_pre1=="");
         		sym.$("bien")[0].play();
         		// Ocultar un elemento 
         		sym.$("bien2").show();
         
         		sym.play("res2")
         
             }else{
         		// Mostrar un elemento 
         		//sym.$('x1').attr('src','images/x.svg');		
         		rtas_incorrectas++;	
         		// Reproducir una pista de audio 
         		sym.$("mal22")[0].play();
         		sym.$("mal2").show();
         		sym.play("pre3");
         		// Mostrar un elemento 
         		//sym.$("negativo").show();
         
             }
         
         })
         
         //pregunta3
         $('.pre_3').click(function(event) { 	
             var rta =$(this).attr('id');
             //pregunta="pregunta2";
         
             if(rta=='Stage_btnc_3'){
         		//sym.$('x1').attr('src','images/chulo.svg');	
         		rtas_correctas++;	
         		// Reproducir una pista de audio 
         		rta_pre3="si";
         		//alert(rta_pre1=="");
         		sym.$("bien")[0].play();
         		// Ocultar un elemento 
         		sym.$("bien3").show();
         
         		sym.play("res3")
         
             }else{
         		// Mostrar un elemento 
         		//sym.$('x1').attr('src','images/x.svg');		
         		rtas_incorrectas++;	
         		// Reproducir una pista de audio 
         		sym.$("mal22")[0].play();
         		sym.$("mal3").show();
         		sym.play("pre4");
         		// Mostrar un elemento 
         		//sym.$("negativo").show();
         
             }
         
         })
         
         //pregunta4
         $('.pre_4').click(function(event) { 	
             var rta =$(this).attr('id');
             //pregunta="pregunta2";
         
             if(rta=='Stage_btnd_4'){
         		//sym.$('x1').attr('src','images/chulo.svg');	
         		rtas_correctas++;	
         		// Reproducir una pista de audio 
         		rta_pre4="si";
         		//alert(rta_pre1=="");
         		sym.$("bien")[0].play();
         		// Ocultar un elemento 
         		sym.$("bien4").show();
         
         	   sym.play("res4");
         
             }else{
         		// Mostrar un elemento 
         		//sym.$('x1').attr('src','images/x.svg');		
         		rtas_incorrectas++;	
         		// Reproducir una pista de audio 
         		sym.$("mal22")[0].play();
         		sym.$("mal4").show();
         		sym.play("fin");
         		// Mostrar un elemento 
         		//sym.$("negativo").show();
         
             }
         
         })

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7066, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8355, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9368, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10381, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11394, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_instrucciones}", "click", function(sym, e) {
         // insert code for mouse click here
         // Show an element 
         sym.$("instrucciones").show();
         
         sym.getSymbol("instrucciones").play();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2953, function(sym, e) {
         //alert(rta_pre1);// introducir código aquí
         if(rta_pre1=="si"){
         	// Mostrar un elemento 
         	sym.$("bien1").show();	
         	// Ocultar un elemento 
         }else{
         	   sym.$("mal1").show();
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4438, function(sym, e) {
         //alert(rta_pre1);// introducir código aquí
         if(rta_pre1=="si"){
         	// Mostrar un elemento 
         	sym.$("bien1").show();	
         	// Ocultar un elemento 
         }else{
         	   sym.$("mal1").show();
         }
         
         if(rta_pre2=="si"){
         	// Mostrar un elemento 
         	sym.$("bien2").show();	
         	// Ocultar un elemento 
         }else{
         	   sym.$("mal2").show();
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5923, function(sym, e) {
         //alert(rta_pre1);// introducir código aquí
         if(rta_pre1=="si"){
         	// Mostrar un elemento 
         	sym.$("bien1").show();	
         	// Ocultar un elemento 
         }else{
         	   sym.$("mal1").show();
         }
         
         if(rta_pre2=="si"){
         	// Mostrar un elemento 
         	sym.$("bien2").show();	
         	// Ocultar un elemento 
         }else{
         	   sym.$("mal2").show();
         }
         
         if(rta_pre3=="si"){
         	// Mostrar un elemento 
         	sym.$("bien3").show();	
         	// Ocultar un elemento 
         }else{
         	   sym.$("mal3").show();
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8763, function(sym, e) {
         //alert(rta_pre1);// introducir código aquí
         if(rta_pre1=="si"){
         	// Mostrar un elemento 
         	sym.$("bien1").show();	
         	// Ocultar un elemento 
         }else{
         	   sym.$("mal1").show();
         }
         
         if(rta_pre2=="si"){
         	// Mostrar un elemento 
         	sym.$("bien2").show();	
         	// Ocultar un elemento 
         }else{
         	   sym.$("mal2").show();
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9776, function(sym, e) {
         //alert(rta_pre1);// introducir código aquí
         if(rta_pre1=="si"){
         	// Mostrar un elemento 
         	sym.$("bien1").show();	
         	// Ocultar un elemento 
         }else{
         	   sym.$("mal1").show();
         }
         
         if(rta_pre2=="si"){
         	// Mostrar un elemento 
         	sym.$("bien2").show();	
         	// Ocultar un elemento 
         }else{
         	   sym.$("mal2").show();
         }
         if(rta_pre3=="si"){
         	// Mostrar un elemento 
         	sym.$("bien3").show();	
         	// Ocultar un elemento 
         }else{
         	   sym.$("mal3").show();
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10789, function(sym, e) {
         //alert(rta_pre1);// introducir código aquí
         if(rta_pre1=="si"){
         	// Mostrar un elemento 
         	sym.$("bien1").show();	
         	// Ocultar un elemento 
         }else{
         	   sym.$("mal1").show();
         }
         
         if(rta_pre2=="si"){
         	// Mostrar un elemento 
         	sym.$("bien2").show();	
         	// Ocultar un elemento 
         }else{
         	   sym.$("mal2").show();
         }
         
         if(rta_pre3=="si"){
         	// Mostrar un elemento 
         	sym.$("bien3").show();	
         	// Ocultar un elemento 
         }else{
         	   sym.$("mal3").show();
         }
         
         if(rta_pre4=="si"){
         	// Mostrar un elemento 
         	sym.$("bien4").show();	
         	// Ocultar un elemento 
         }else{
         	   sym.$("mal4").show();
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7750, function(sym, e) {
         //alert(rta_pre1);// introducir código aquí
         if(rta_pre1=="si"){
         	// Mostrar un elemento 
         	sym.$("bien1").show();	
         	// Ocultar un elemento 
         }else{
         	   sym.$("mal1").show();
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_pre2}", "click", function(sym, e) {
         sym.play("pre2");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_pre2Copy}", "click", function(sym, e) {
         sym.play("pre3");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_pre2Copy2}", "click", function(sym, e) {
         sym.play("pre4");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11902, function(sym, e) {
         //alert(rta_pre1);// introducir código aquí
         if(rta_pre1=="si"){
         	// Mostrar un elemento 
         	sym.$("bien1").show();	
         	// Ocultar un elemento 
         }else{
         	   sym.$("mal1").show();
         }
         
         if(rta_pre2=="si"){
         	// Mostrar un elemento 
         	sym.$("bien2").show();	
         	// Ocultar un elemento 
         }else{
         	   sym.$("mal2").show();
         }
         
         if(rta_pre3=="si"){
         	// Mostrar un elemento 
         	sym.$("bien3").show();	
         	// Ocultar un elemento 
         }else{
         	   sym.$("mal3").show();
         }
         
         if(rta_pre4=="si"){
         	// Mostrar un elemento 
         	sym.$("bien4").show();	
         	// Ocultar un elemento 
         }else{
         	   sym.$("mal4").show();
         }
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12000, function(sym, e) {
         // introducir código aquí
         if(rtas_correctas>=3){	
         
         		// Mostrar un elemento 
         		sym.$("logrado").show();		
         		sym.getSymbol("logrado").play();		
         
         		// Reproducir una pista de audio 
         		sym.$("victoria")[0].play();
         
         	}else{
         
         			// Mostrar un elemento 
         		sym.$("no_logrado").show();		
         		sym.getSymbol("no_logrado").play();	
         
         		// Reproducir una pista de audio 
         		sym.$("mal22")[0].play();
         
         	}

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${flechapunteda-red}", "click", function(sym, e) {
         sym.play("fin");

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'instrucciones'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Rectangle}", "click", function(sym, e) {
         // insert code for mouse click here
         // Hide an element 
         sym.getSymbolElement().hide();
         

      });
      //Edge binding end

   })("instrucciones");
   //Edge symbol end:'instrucciones'

   //=========================================================
   
   //Edge symbol: 'logrado'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Rectangle4}", "click", function(sym, e) {
         window.close();

      });
      //Edge binding end

   })("logrado");
   //Edge symbol end:'logrado'

   //=========================================================
   
   //Edge symbol: 'no_logrado'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Rectangle4}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         window.close();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle3}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         location.reload();

      });
      //Edge binding end

   })("no_logrado");
   //Edge symbol end:'no_logrado'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-647223614");