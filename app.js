$(document).ready(function(){
  	
	$('#title').fadeIn(1000);
	$('#subtitle').fadeIn(2000);
	$('#exploreButton').fadeIn(2500);


  	$(window).scroll(function(){
  		if ($(window).scrollTop() > $(window).height()) {
  			$('#navbar').css({"background-color":"#343A40"});
  			$('#navbar').css({"border-bottom" : "2px solid #03b698"});
  		}
  		else
  			$('#navbar').css({"background-color":"transparent"});
  			$('#navbar').css({"border-bottom" : "1px solid grey"});

  	})

  	
	


});