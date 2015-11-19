var testModel = {
	name:"サンプルデータ",
	author:"128Na",
	description:"サンプルなのです",
	settings:{
		grid   : 50,
		angle  : 90
	},
	trains : [
		{
			routes : [
				{
					id     : 0,
					deisgn : {id:0},
					points : [
						{x:1,y:1},
						{x:20,y:1}
					]
				},
				{
					id     : 1,
					deisgn : {id:0},
					points : [
						{x:1,y:1},
						{x:1,y:10}
					]
				}
			],
			stops : [
				{
					id     : 0,
					deisgn : {id:0},
					point  : {x:0,y:0}
				}
			],
			labels : [
				{
					id     : 0,
					deisgn : {id:0},
					name   : "本線",
					owner : {type:"routes",id:0},
					point  : {x:0,y:0}
				}
			]
		},
	],
	designs : {
		route : [
			{
				id          : 0,
				lineWidth   : 10,
				lineCap     : "round",	//bevel, round, miter
				lineJoin    : "round",	//bevel, round, miter
				miterLimit  : 3.0,
				strokeStyle : 'rgba(255,0,0,0.5)'
			}
		],
		stop : [
			 {
				id     : 0,
				width  : 1,
				height : 1,
				radius : {topLeft:0.1,topRight:0.1,bottomRight:0,bottomLeft:0.1}
				//radius : 0.1
			}
		],
		label : [
			{
				id   : 0,
				font : "12px 'Times New Roman'"
			}
		]
	}
}
