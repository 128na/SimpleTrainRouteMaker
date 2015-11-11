$().ready(function(){

	$('#menu-setting' ).on('click', function(){ popMenu( $('#pop-setting' ) ); });
	$('#menu-stations').on('click', function(){ popMenu( $('#pop-stations') ); });
	$('#menu-trains'  ).on('click', function(){ popMenu( $('#pop-trains'  ) ); });
	$('#menu-routes'  ).on('click', function(){ popMenu( $('#pop-routes'  ) ); });


$(function(){

		//グラフを描画するよ！
		var graph = function() {
				var $wrapper = $('#canvas');
				var $canvas = $('#canvas canvas');
				
				//Retina対応
				var scale = 2.0; //Retinaで2倍
				var w = $wrapper.width() * scale;
				var h = $wrapper.height() * scale;
				$canvas.attr({'width': w, 'height': h});
				$canvas.width(w/scale); $canvas.height(h/scale);

				$canvas.clearCanvas(); //キャンパスをクリア
				
				//横に3本線を描きます
				var bc = '#999999';
				var bw = 0.5 * scale;
				var pd = 14.0 * scale;
				$canvas.drawLine({
					strokeStyle: bc, strokeWidth: bw,
						x1: pd, y1: h - pd,
						x2: w - pd, y2: h - pd,
				});
				$canvas.drawLine({
					strokeStyle: bc, strokeWidth: bw,
						x1: pd, y1: h / 2,
						x2: w - pd, y2: h / 2,
				});
				$canvas.drawLine({
					strokeStyle: bc, strokeWidth: bw,
						x1: pd, y1: pd,
						x2: w - pd, y2: pd,
				});
			};

		graph(); //実行！

});


});

function popMenu( $target ){
	//自分以外は閉じる
	$target.siblings().addClass('none');
	//自分はトグる
	$target.toggleClass('none');
}

