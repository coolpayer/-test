 $(document).ready(function(){
 	$('.modal-trigger').leanModal();
 	$('select').material_select();
 	$(".button-collapse").sideNav();

 	$('.search-li').on('click', function () {
 		$(".search_sect").slideToggle('slow');
 	})
 });

