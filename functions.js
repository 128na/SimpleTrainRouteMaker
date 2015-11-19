


MapEditor.prototype.importModel = function(o){
	//pushのほうがいいかもね
	this.settings  =  new Settings(o.settings);
	this.designs   =  new Designs (o.designs );
	this.trains    =  o.trains;

	this.renderAll();
};

MapEditor.prototype.initCanvas = function(w, h){
	w = w || this.settings.width;
	h = h || this.settings.height;

	//ref : http://jsdo.it/haii/u5B1
	// デバイスのピクセル比を取得する
	var dpr = window.devicePixelRatio || 1;

	// 取得した値をキャンバスの幅と高さに掛ける
	this.canvas.width  = w * dpr;
	this.canvas.height = h * dpr;

	// キャンバスの表示自体が大きくならないように、CSSで元のサイズを設定しておく
	this.canvas.style.width  = w + 'px';
	this.canvas.style.height = h + 'px';

	// 描画時のスケールも設定しておく
	this.context.scale(dpr, dpr);
	this.context.clearRect(0, 0, w * dpr, h * dpr);
};
MapEditor.prototype.renderAll = function(){

	this.renderRoutes();
//	this.renderStops();
//	this.renderLabels();

	console.log('rendered.');
};
MapEditor.prototype.renderRoutes = function(){
	for (var i = 0; i < this.trains.length; i += 1) {
		for (var j = 0; j < this.trains[i].routes.length; j += 1) {
			this.renderRoute(this.trains[i].routes[j]);
		}
	}
};
MapEditor.prototype.renderRoute = function( route ){
	if( !route || route.points.length < 2 ){ return; }
	console.log('route:',route);

	var ctx   = this.context;

	//線のパラメータ設定
	var design = this.getRouteDesign(route.deisgn.id);

	ctx.lineWidth   = design.lineWidth; 
	ctx.lineCap     = design.lineCap; 
	ctx.lineJoin    = design.lineJoin; 
	ctx.miterLimit  = design.miterLimit; 
	ctx.strokeStyle = design.strokeStyle; 

	//パスの開始座標を指定する
	ctx.beginPath();

	for (var i = 0; i < route.points.length; i += 1) {
		var convPoint = this.convertCoordinate( route.points[i] );

		if (i === 0){
			ctx.moveTo(convPoint.x, convPoint.y);
		}
		else{
			//座標を指定してラインを引いていく
			ctx.lineTo(convPoint.x, convPoint.y);
		}
	}
	//現在のパスを輪郭表示する
	ctx.stroke();
	console.log('rendered line');
};
//	design
	MapEditor.prototype.getRouteDesign = function( id ){
		for (var i = 0; i < this.designs.route.length; i += 1) {
			if (this.designs.route[i].id === id){
				return this.designs.route[i];
			}
		}
	};
	MapEditor.prototype.getStopDesign = function( id ){
		for (var i = 0; i < this.designs.stop.length; i += 1) {
			if (this.designs.stop[i].id === id){
				return this.designs.stop[i];
			}
		}
	};
	MapEditor.prototype.getLabelDesign = function( id ){
		for (var i = 0; i < this.designs.label.length; i += 1) {
			if (this.designs.label[i].id === id){
				return this.designs.label[i];
			}
		}
	};

//misc
	MapEditor.prototype.convertCoordinate = function( input ){
		var grided = {};
		//グリッドスケールの適用
		grided.x = input.x * this.settings.grid;
		grided.y = input.y * this.settings.grid;

		var coor = {};
		//斜交座標へ変換
		coor.x = grided.x + grided.y / Math.tan(this.settings.angle / 180 * Math.PI);
		coor.y = grided.y;

		var fixed = {};
		//左上原点->左下原点へ変換
		fixed.x = coor.x;
		fixed.y = this.canvas.height - coor.y;

		//console.log("in:%o, out:%o",input,fixed);
		return fixed;
	};

