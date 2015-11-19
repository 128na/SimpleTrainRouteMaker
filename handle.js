
$().ready(function(){

	var STRM = {
		canvas : document.getElementById('canvas'),
		settings : {
			grid   : 10,
			angle  : 60,
			height : $(window).height()*0.8,
			width  : $(window).width()*0.9
		}
	};

	var me = new MapEditor( STRM );

	var popMenu = function( $target ){
		//自分以外は閉じる
		$target.siblings().addClass('none');
		//自分はトグる
		$target.toggleClass('none');
	}


	$('#menu-setting' ).on('click', function(){ popMenu( $('#pop-setting' ) ); });
	$('#menu-stations').on('click', function(){ popMenu( $('#pop-stations') ); });
	$('#menu-trains'  ).on('click', function(){ popMenu( $('#pop-trains'  ) ); });
	$('#menu-routes'  ).on('click', function(){ popMenu( $('#pop-routes'  ) ); });


	me.importModel(testModel);

	console.log(me);
});
