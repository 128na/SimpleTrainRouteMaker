//----------------------------------------------------------------------------//
var MapEditor = function(o){
	o = o || {};


	this.canvas		 = o.canvas		 || document.getElementById('canvas');
	this.context	 = this.canvas.getContext('2d');
	this.settings	 = new Settings(o.settings);
	this.designs	 = new Designs (o.designs );
	this.trains		 = o.trains || [];
		
	this.initCanvas();

	console.log('init',this);

	this.renderAll();
};

//----------------------------------------------------------------------------//
var Settings = function(o){
	o = o || {};
	this.grid		 = o.grid		 || 10;
	this.angle		 = o.angle		 || 90;
	this.width		 = o.width		 || $(window).width();
	this.height		 = o.height		 || $(window).height();
};
var Designs = function(o){
	o = o || {};
	this.route = o.route || [];
	this.stop  = o.stop  || [];
	this.label = o.label || [];
};

//----------------------------------------------------------------------------//
var Train = function(o){
	o = o || {};
	console.log('o:',o);
	this.routes		 = o.routes		 || [];
	this.stops		 = o.stops		 || [];
	this.labels		 = o.labels		 || [];
};
//----------------------------------------------------------------------------//
Train.prototype.Route = function(o){
	o = o || {};
	this.id			 = o.id			 || -1;
	this.design		 = o.design		 || {id:0};
	this.points		 = o.points		 || [{x:1,y:1},{x:2,y:1}];
};
Train.prototype.Stop = function(o){
	o = o || {};
	this.id			 = o.id			 || -1;
	this.design		 = o.design		 || {id:0};
	this.point		 = o.point		 || {x:1,y:1};
};
Train.prototype.Label = function(o){
	o = o || {};
	this.id			 = o.id			 || -1;
	this.name		 = o.name		 || 'ラベル';
	this.design		 = o.design		 || {id:0};
	this.points		 = o.points		 || [{x:1,y:1}];
	this.owner		 = o.owner		 || {type:"routes",id:0};
};

//----------------------------------------------------------------------------//
Designs.prototype.Route = function(o){
	o = o || {};
	this.id          = o.id			 || -1;
	this.lineWidth   = o.lineWidth	 || 10;
	this.lineCap     = o.lineCap	 || "round";	//bevel, round, miter
	this.lineJoin    = o.lineJoin	 || "round";	//bevel, round, miter
	this.miterLimit  = o.miterLimit	 || 3.0;
	this.strokeStyle = o.strokeStyle || 'rgba(255,0,0,0.5)';
	this.effects	 = o.effects	 || {};
};
Designs.prototype.Stop  = function(o){
	o = o || {};
	this.id			 = o.id			 || -1;
	this.width 		 = o.width		 || 1;
	this.height		 = o.height		 || 1;
	this.radius		 = o.radius		 || {topLeft:0.1,topRight:0.1,bottomRight:0,bottomLeft:0.1};
	this.effects	 = o.effects	 || {};
};
Designs.prototype.Label = function(o){
	o = o || {};
	this.id          = o.id			 || -1;
	this.font        = "12px 'Times New Roman'"
	this.effects	 = o.effects	 || {};
};

