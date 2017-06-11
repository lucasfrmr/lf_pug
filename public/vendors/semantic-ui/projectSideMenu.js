$(document).ready(function(){
  $('.ui.menu.button').click(function(){
		$('.ui.sidebar')
		  .sidebar({
		    overlay: false
		  })
			.sidebar('toggle')
		;
  });
});