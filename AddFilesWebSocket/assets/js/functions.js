(function (io) {

  	$('#poke').click(function () {
		
		io.socket.post('/home/poke', function (resData, jwRes){
  			console.log(jwRes.statusCode);
  			console.log(resData);
  			$('#Infos').text("Message server : " + resData);
		});
	});
})(

  	io

);





	

