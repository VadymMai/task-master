$(document).ready(function(){
	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "server.php",
			data: $(this).serialize(),
			success: function(response){
				var result = $.parseJSON(response);
				$.each(result, function(key, value) {
  					$("#"+key).html(value);
  					if (value == '') {
  						$("#"+key).addClass('warning');
  					} else {
  						$("#"+key).removeClass('warning');
  					}
				});
			}
		})
		return false;
	});
});