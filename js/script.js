//script to operate right side article list navigation
$("#article_dates_list li").click(function(e){
	$("#article_month ").toggle();	
	});//end function
$("#article_month li").click(function(){
	
	$("#article_list").toggle();
});//end article_month click

//$("#article_dates_list").hover(function(e){alert("hi");});