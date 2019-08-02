$(document).ready(function() {
	
  		AOS.init();


  	$("#entrar").on('click', function(event) {
  		$('#capa').fadeOut();
  		$(this).fadeOut();  		
  		function conteudo(){
  			$('#conteudo').fadeIn(1000);  				
  		}
  		setTimeout(conteudo,500);
  		console.log("carregou!");
  		
  	});

});