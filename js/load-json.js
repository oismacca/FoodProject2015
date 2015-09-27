$(document).ready(function(){
	$(document).bind('deviceready', function(){
		var output = $('#output');
	
		$.ajax({
			url: 'http://www.hungryinkal.com.au/appget_vendors.php',
			dataType: 'jsonp',
			jsonp: 'jsoncallback',
			timeout: 5000,
			success: function(data, status){
				$.each(data, function(i,item){ 
					var vendor = '<h1>'+item.vendorName+'</h1>'
					+ '<p>'+item.vendorAddress1+'<br>'
					+ item.vendorAddress2+'</p>';
				
					output.append(vendor);
				});
			},
			error: function(){
			   output.text('There was an error loading the data.');
			}
		});
	});
});