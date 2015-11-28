


MapEditor.prototype.importModel = function(o){
	//pushのほうがいいかもね
	this.settings  =  new Settings(o.settings);
	this.designs   =  new Designs (o.designs );
	this.trains    =  o.trains;

	this.renderAll();
};

MapEditor.prototype.initCanvas = function(w, h){
	//座標が偶数になるよう調整
	w = Math.round( ((w || this.settings.width ) + this.margin * 2) / 2) * 2;
	h = Math.round( ((h || this.settings.height) + this.margin * 2) / 2) * 2;

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

	this.initCanvas();
	this.renderRoutes();
	this.renderStops();
	this.renderLabels();

	console.log('rendered.');
};
MapEditor.prototype.renderRoutes = function(){
	for (var i = 0; i < this.trains.length; i += 1) {
		for (var j = 0; j < this.trains[i].routes.length; j += 1) {
			this.renderRoute(this.trains[i].routes[j]);
		}
	}
};
MapEditor.prototype.renderStops = function(){
	for (var i = 0; i < this.trains.length; i += 1) {
		for (var j = 0; j < this.trains[i].stops.length; j += 1) {
			this.renderStop(this.trains[i].stops[j]);
		}
	}
};
MapEditor.prototype.renderLabels = function(){
	for (var i = 0; i < this.trains.length; i += 1) {
		for (var j = 0; j < this.trains[i].labels.length; j += 1) {
			this.renderLabel(this.trains[i].labels[j]);
		}
	}
};
MapEditor.prototype.renderRoute = function( route ){
	if( !route || route.points.length < 2 ){ return; }
	console.log('route:',route);

	var ctx    = this.context;
	var design = this.getRouteDesign(route.design.id);

	ctx.lineWidth   = design.lineWidth; 
	ctx.lineCap     = design.lineCap; 
	ctx.lineJoin    = design.lineJoin; 
	ctx.miterLimit  = design.miterLimit; 
	ctx.strokeStyle = design.strokeStyle; 

	//パスの開始座標を指定する
	ctx.beginPath();

	for (var i = 0; i < route.points.length; i += 1) {
		var p = this.fixPosition(route.points[i])
		if (i === 0){
			ctx.moveTo(p.x, p.y);
		}
		else{
			//座標を指定してラインを引いていく
			ctx.lineTo(p.x, p.y);
		}
	}
	//現在のパスを輪郭表示する
	ctx.stroke();
	console.log('rendered line');
};
MapEditor.prototype.renderStop = function( stop ){
	var ctx    = this.context;
	var design = this.getStopDesign( stop.design.id );

	var w = 0.5 * design.width;
	var h = 0.5 * design.height;
	var g = this.settings.grid;

	ctx.lineWidth   = design.lineWidth; 
	ctx.lineCap     = design.lineCap; 
	ctx.lineJoin    = design.lineJoin; 
	ctx.miterLimit  = design.miterLimit; 
	ctx.strokeStyle = design.strokeStyle; 
	ctx.fillStyle   = design.fillStyle; 

	var r = {
		tL : design.radius.topLeft     > w ? w : design.radius.topLeft,
		tR : design.radius.topRight    > w ? w : design.radius.topRight,
		bR : design.radius.bottomRight > w ? w : design.radius.bottomRight,
		bL : design.radius.bottomLeft  > w ? w : design.radius.bottomLeft
	};
	//四角の角
	var corner = {
		tL : {x:stop.point.x - w, y:stop.point.y + h},
		tR : {x:stop.point.x + w, y:stop.point.y + h},
		bR : {x:stop.point.x + w, y:stop.point.y - h},
		bL : {x:stop.point.x - w, y:stop.point.y - h}
	};
	//コーナーからの接点
	var tangent = {
		tL : {x:corner.tL.x + r.tL, y:corner.tL.y       },
		tR : {x:corner.tR.x       , y:corner.tR.y - r.tR},
		bR : {x:corner.bR.x - r.bR, y:corner.bR.y       },
		bL : {x:corner.bL.x       , y:corner.bL.y + r.bL}
	};
		corner.tL = this.fixPosition(corner.tL); 
		corner.tR = this.fixPosition(corner.tR); 
		corner.bR = this.fixPosition(corner.bR); 
		corner.bL = this.fixPosition(corner.bL); 

		tangent.tL = this.fixPosition(tangent.tL);
		tangent.tR = this.fixPosition(tangent.tR);
		tangent.bR = this.fixPosition(tangent.bR);
		tangent.bL = this.fixPosition(tangent.bL);

	console.log('r',r);
	console.log('cornet',corner);
	console.log('tangent',tangent);

	ctx.beginPath();
	ctx.moveTo(tangent.tL.x, tangent.tL.y);

	ctx.arcTo(corner.tR.x, corner.tR.y, tangent.tR.x, tangent.tR.y, r.tR);
	ctx.arcTo(corner.bR.x, corner.bR.y, tangent.bR.x, tangent.bR.y, r.bR);
	ctx.arcTo(corner.bL.x, corner.bL.y, tangent.bL.x, tangent.bL.y, r.bL);
	ctx.arcTo(corner.tL.x, corner.tL.y, tangent.tL.x, tangent.tL.y, r.tL);

	ctx.closePath();
	ctx.stroke();
	ctx.fill();
}

MapEditor.prototype.renderLabel = function( label ){
	var ctx    = this.context;
	var design = this.getLabelDesign( label.design.id );
	var conv   = this.fixPosition( label.point );

	ctx.miterLimit   = design.miterLimit; 
	ctx.strokeStyle  = design.strokeStyle; 
	ctx.fillStyle    = design.fillStyle; 
	ctx.font         = design.font
	ctx.fillText( label.name, conv.x, conv.y );
}

//	design getter
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
	MapEditor.prototype.fixPosition = function( input ){
		var fixed = {};
		//左上原点->左下原点へ変換
		fixed.x = this.margin + input.x;
		fixed.y = this.margin + this.canvas.height/2 - input.y;

		console.log("in:%o, out:%o",input,fixed);
		return fixed;
	};