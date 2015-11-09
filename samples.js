var samples = 
[
	{
		"name" : "東海道本線(東京－熱海)",
		"author" : "128Na",
		"description" : "JR東日本東海道本線のサンプルデータです。",

		"stations" : [
			{ 
				"name" : "東京",
				"stops" : [
					{ "id" : 0 },
					{ "id" : 5 },
					{ "id" : 6 },
					{ "id" : 10 },
					{ "id" : 45 },
					{ "id" : 105 }
				]
			},
			{ "name" : "有楽町" },
			{
				"name" : "新橋",
				"stops" : [
					{ "id" : 0 },
					{ "id" : 5 },
					{ "id" : 6 },
					{ "id" : 10 }
				]
	 		},
			{ "name" : "浜松町" },
			{ "name" : "田町" },
			{ 
				"name" : "品川",
				"stops" : [
					{ "id" : 0 },
					{ "id" : 5 },
					{ "id" : 6 },
					{ "id" : 10 },
					{ "id" : 45 }
				]
			},
			{ "name" : "大井町" },
			{ "name" : "大森" },
			{ "name" : "蒲田" },
			{ 
				"name" : "川崎",
				"stops" : [
					{ "id" : 0 },
					{ "id" : 5 },
					{ "id" : 6 }
				]
			},
			{ "name" : "鶴見" },
			{ "name" : "新子安" },
			{ "name" : "東神奈川" },
			{ 
				"name" : "横浜",
				"stops" : [
					{ "id" : 0 },
					{ "id" : 5 },
					{ "id" : 6 },
					{ "id" : 20 },
					{ "id" : 21 },
					{ "id" : 105 }
				]
			},
			{
				"name" : "保土ヶ谷",
				"stops" : []
	 		},
			{
				"name" : "東戸塚",
				"stops" : []
	 		},
			{ 
				"name" : "戸塚",
				"stops" : [
					{ "id" : 5 },
					{ "id" : 6 },
					{ "id" : 20 },
					{ "id" : 21 }
				]
			},
			{ 
				"name" : "大船",
				"stops" : [
					{ "id" : 5 },
					{ "id" : 6 },
					{ "id" : 10 },
					{ "id" : 20 },
					{ "id" : 21 }
				]
			},
			{ 
				"name" : "藤沢",
				"stops" : [
					{ "id" : 5 },
					{ "id" : 6 },
					{ "id" : 10 },
					{ "id" : 20 },
					{ "id" : 21 }
				]
			},
			{ 
				"name" : "辻堂",
				"stops" : [
					{ "id" : 5 },
					{ "id" : 20 }
				]
			},
			{ 
				"name" : "茅ヶ崎",
				"stops" : [
					{ "id" : 5 },
					{ "id" : 6 },
					{ "id" : 10 },
					{ "id" : 20 },
					{ "id" : 21 }
				]
			},
			{ 
				"name" : "平塚",
				"stops" : [
					{ "id" : 5 },
					{ "id" : 6 },
					{ "id" : 10 },
					{ "id" : 20 },
					{ "id" : 21 }
				]
			},
			{ 
				"name" : "大磯",
				"stops" : [
					{ "id" : 5 },
					{ "id" : 20 }
				]
			},
			{ 
				"name" : "二宮",
				"stops" : [
					{ "id" : 5 },
					{ "id" : 20 }
				]
			},
			{ 
				"name" : "国府津",
				"stops" : [
					{ "id" : 5 },
					{ "id" : 6 },
					{ "id" : 10 },
					{ "id" : 20 },
					{ "id" : 21 }
				]
			},
			{ 
				"name" : "鴨宮",
				"stops" : [
					{ "id" : 5 },
					{ "id" : 20 }
				]
			},
			{ 
				"name" : "小田原",
				"stops" : [
					{ "id" : 5 },
					{ "id" : 6 },
					{ "id" : 10 },
					{ "id" : 20 },
					{ "id" : 21 }
				]
			},
			{ 
				"name" : "早川",
				"stops" : [
					{ "id" : 5 },
					{ "id" : 6 }
				]
			},
			{ 
				"name" : "根府川",
				"stops" : [
					{ "id" : 5 },
					{ "id" : 6 }
				]
			},
			{ 
				"name" : "真鶴",
				"stops" : [
					{ "id" : 5 },
					{ "id" : 6 }
				]
			},
			{ 
				"name" : "湯河原",
				"stops" : [
					{ "id" : 5 },
					{ "id" : 6 }
				]
			},
			{ 
				"name" : "熱海",
				"stops" : [
					{ "id" : 5 },
					{ "id" : 6 },
					{ "id" : 105 }
				]
			}
			
		],
		"trains" : [
			{
				"id" : 0,
				"name" : "京浜東北線",
				"lineColor" : "rgb(0,178,229)",
				"sections"  : [ { "from" : 0, "to" : 13 } ]
			},
			{
				"id" : 5,
				"name" : "普通",
				"lineColor" : "rgb(246,139,30)"
			},
			{
				"id" : 6,
				"name" : "快速アクティー",
				"lineColor" : "rgb(255,0,0)"
			},
			{
				"id" : 10,
				"name" : "通勤快速",
				"lineColor" : "rgb(101,49,142)",
				"sections"  : [ { "from" : 0, "to" : 26 } ]
			},
			{
				"id" : 20,
				"name" : "普通(湘南新宿ライン)",
				"lineColor" : "rgb(0,128,0)",
				"sections"  : [ { "from" : 10, "to" : 26 } ]
			},
			{
				"id" : 21,
				"name" : "特別快速(湘南新宿ライン)",
				"lineColor" : "rgb(255,0,0)",
				"sections"  : [ { "from" : 10, "to" : 26 } ]
			},
			{
				"id" : 45,
				"name" : "特急ひたち",
				"lineColor" : "rgb(201,23,30)",
				"sections" : [ { "from" : 0, "to" : 5 } ]
			},
			{
				"id" : 105,
				"name" : "特急スーパービュー踊り子",
				"lineColor" : "rgb(0,164,151)"
			}
		]
	},
	{
		"name" : "阪神本線(梅田－元町)",
		"author" : "128Na",
		"description" : "阪神電車阪神本線のサンプルデータです。",
		"stations": [
			{
				"name": "梅田",
				"stops": [
					{　"id": 0　},
					{　"id": 1　},
					{　"id": 2　},
					{　"id": 4　},
					{　"id": 5　},
					{　"id": 6　}
				]
			},
			{
				"name": "福島",
				"stops": [
					{ "id": 0 },
					{ "id": 1 }
				]
			},
			{
				"name": "野田",
				"stops": [
					{ "id": 0 },
					{ "id": 1 },
					{ "id": 2 },
					{ "id": 4 }
				]
			},
			{ "name": "淀川" },
			{ "name": "姫島" },
			{
				"name": "千船",
				"stops": [
					{ "id": 0 },
					{ "id": 1 }
				]
			},
			{ "name": "杭瀬" },
			{ "name": "大物" },
			{
				"name": "尼崎",
				"stops": [
					{ "id": 0 },
					{ "id": 1 },
					{ "id": 2 },
					{ "id": 3 },
					{ "id": 5 },
					{ "id": 6 }
				]
			},
			{ "name": "出屋敷" },
			{ "name": "尼崎センタープール前" },
			{
				"name": "武庫川",
				"stops": [
					{ "id": 0 },
					{ "id": 1 },
					{ "id": 2 }
				]
			},
			{
				"name": "鳴尾",
				"stops": [
					{ "id": 0 },
					{ "id": 1 }
				]
			},
			{
				"name": "甲子園",
				"stops": [
					{ "id": 0 },
					{ "id": 1 },
					{ "id": 2 },
					{ "id": 3 },
					{ "id": 4 },
					{ "id": 5 },
					{ "id": 6 }
				]
			},
			{ "name": "久寿川" },
			{
				"name": "今津",
				"stops": [
					{ "id": 0 },
					{ "id": 2 },
					{ "id": 3 },
					{ "id": 4 }
				]
			},
			{
				"name": "西宮",
				"stops": [
					{ "id": 0 },
					{ "id": 2 },
					{ "id": 3 },
					{ "id": 5 },
					{ "id": 6 }
				]
			},
			{ "name": "香櫨園" },
			{
				"name": "打出",
				"stops": [
					{ "id": 0 },
					{ "id": 4 }
				]
			},
			{
				"name": "芦屋",
				"stops": [
					{ "id": 0 },
					{ "id": 3 },
					{ "id": 4 },
					{ "id": 5 },
					{ "id": 6 }
				]
			},
			{
				"name": "深江",
				"stops": [
					{ "id": 0 },
					{ "id": 4 }
				]
			},
			{
				"name": "青木",
				"stops": [
					{ "id": 0 },
					{ "id": 4 }
				]
			},
			{
				"name": "魚崎",
				"stops": [
					{ "id": 0 },
					{ "id": 3 },
					{ "id": 5 },
					{ "id": 6 }
				]
			},
			{ "name": "住吉" },
			{
				"name": "御影",
				"stops": [
					{ "id": 0 },
					{ "id": 5 },
					{ "id": 6 }
				]
			},
			{ "name": "石屋川" },
			{ "name": "新在家" },
			{ "name": "大石" },
			{ "name": "西灘" },
			{ "name": "岩屋" },
			{ "name": "春日野道" },
			{
				"name": "神戸三宮",
				"stops": [
					{ "id": 0 },
					{ "id": 3 },
					{ "id": 5 },
					{ "id": 6 }
				]
			},
			{
				"name": "元町",
				"stops": [
					{ "id": 0 },
					{ "id": 3 },
					{ "id": 5 },
					{ "id": 6 }
				]
			}
		],
		"trains": [
			{
				"name": "普通",
				"lineColor": "rgb(0,0,128)"
			},
			{
				"name": "区間急行",
				"lineColor": "rgb(255,128,0)",
				"sections": [
					{
						"from": "0",
						"to": "13"
					}
				]
			},
			{
				"name": "急行",
				"lineColor": "rgb(255,128,0)",
				"sections": [
					{
						"from": "0",
						"to": "16"
					}
				]
			},
			{
				"name": "快速急行",
				"lineColor": "rgb(0,153,204)",
				"sections": [
					{
						"from": "7",
						"to": "32"
					}
				]
			},
			{
				"name": "区間特急",
				"lineColor": "rgb(255,0,0)",
				"sections": [
					{
						"from": "0",
						"to": "21"
					}
				]
			},
			{
				"name": "特急",
				"lineColor": "rgb(255,0,0)"
			},
			{
				"name": "直通特急",
				"lineColor": "rgb(255,204,51)"
			}
		]
	},	
	{
		"name" : "京急本線(泉岳寺－浦賀)",
		"author" : "128Na",
		"description" : "京浜急行電鉄京急本線のサンプルデータです。",
		"stations": [
			{
				"id": 0,
				"name": "泉岳寺",
				"stops": [
					{
						"id": 1
					},
					{
						"id": 2
					},
					{
						"id": 3
					}
				]
			},
			{
				"id": 1,
				"name": "品川",
				"stops": [
					{
						"id": 0
					},
					{
						"id": 1
					},
					{
						"id": 2
					},
					{
						"id": 3
					},
					{
						"id": 4
					}
				]
			},
			{
				"id": 2,
				"name": "北品川",
				"stops": [
					{
						"id": 0
					}
				]
			},
			{
				"id": 3,
				"name": "新馬場",
				"stops": [
					{
						"id": 0
					}
				]
			},
			{
				"id": 4,
				"name": "青物横丁",
				"stops": [
					{
						"id": 0
					},
					{
						"id": 1
					},
					{
						"id": 2
					}
				]
			},
			{
				"id": 5,
				"name": "鮫洲",
				"stops": [
					{
						"id": 0
					}
				]
			},
			{
				"id": 6,
				"name": "立会川",
				"stops": [
					{
						"id": 0
					},
					{
						"id": 1
					}
				]
			},
			{
				"id": 7,
				"name": "大森海岸",
				"stops": [
					{
						"id": 0
					}
				]
			},
			{
				"id": 8,
				"name": "平和島",
				"stops": [
					{
						"id": 0
					},
					{
						"id": 1
					},
					{
						"id": 2
					}
				]
			},
			{
				"id": 9,
				"name": "大森町",
				"stops": [
					{
						"id": 0
					}
				]
			},
			{
				"id": 10,
				"name": "梅屋敷",
				"stops": [
					{
						"id": 0
					}
				]
			},
			{
				"id": 11,
				"name": "京急蒲田",
				"stops": [
					{
						"id": 0
					},
					{
						"id": 1
					},
					{
						"id": 2
					},
					{
						"id": "3"
					},
					{
						"id": "5"
					},
					{
						"id": "6"
					}
				]
			},
			{
				"id": 12,
				"name": "糀谷",
				"stops": [
					{
						"id": "5"
					}
				]
			},
			{
				"id": 13,
				"name": "大鳥居",
				"stops": [
					{
						"id": "5"
					}
				]
			},
			{
				"id": 14,
				"name": "穴守稲荷",
				"stops": [
					{
						"id": "5"
					}
				]
			},
			{
				"id": 15,
				"name": "天空橋",
				"stops": [
					{
						"id": "5"
					}
				]
			},
			{
				"id": 16,
				"name": "羽田空港国際線タ｜ミナル",
				"stops": [
					{
						"id": "5"
					},
					{
						"id": "6"
					}
				]
			},
			{
				"id": 17,
				"name": "羽田空港国内線タ｜ミナル",
				"stops": [
					{
						"id": "5"
					},
					{
						"id": "6"
					}
				]
			},
			{
				"id": 18,
				"name": "雑色",
				"stops": [
					{
						"id": 0
					}
				]
			},
			{
				"id": 19,
				"name": "六郷土手",
				"stops": [
					{
						"id": 0
					}
				]
			},
			{
				"id": 20,
				"name": "京急川崎",
				"stops": [
					{
						"id": 0
					},
					{
						"id": 1
					},
					{
						"id": 2
					},
					{
						"id": 3
					}
				]
			},
			{
				"id": 21,
				"name": "八丁畷",
				"stops": [
					{
						"id": 0
					}
				]
			},
			{
				"id": 22,
				"name": "鶴見市場",
				"stops": [
					{
						"id": 0
					}
				]
			},
			{
				"id": 23,
				"name": "京急鶴見",
				"stops": [
					{
						"id": 0
					},
					{
						"id": 1
					}
				]
			},
			{
				"id": 24,
				"name": "花月園前",
				"stops": [
					{
						"id": 0
					}
				]
			},
			{
				"id": 25,
				"name": "生麦",
				"stops": [
					{
						"id": 0
					}
				]
			},
			{
				"id": 26,
				"name": "京急新子安",
				"stops": [
					{
						"id": 0
					}
				]
			},
			{
				"id": 27,
				"name": "子安",
				"stops": [
					{
						"id": 0
					}
				]
			},
			{
				"id": 28,
				"name": "神奈川新町",
				"stops": [
					{
						"id": 0
					},
					{
						"id": 1
					},
					{
						"id": 2
					}
				]
			},
			{
				"id": 29,
				"name": "仲木戸",
				"stops": [
					{
						"id": 0
					},
					{
						"id": 1
					}
				]
			},
			{
				"id": 30,
				"name": "神奈川",
				"stops": [
					{
						"id": 0
					}
				]
			},
			{
				"id": 31,
				"name": "横浜",
				"stops": [
					{
						"id": 0
					},
					{
						"id": 1
					},
					{
						"id": 2
					},
					{
						"id": 3
					}
				]
			},
			{
				"id": 32,
				"name": "戸部",
				"stops": [
					{
						"id": 0
					}
				]
			},
			{
				"id": 33,
				"name": "日ノ出町",
				"stops": [
					{
						"id": 0
					},
					{
						"id": 1
					}
				]
			},
			{
				"id": 34,
				"name": "黄金町",
				"stops": [
					{
						"id": 0
					}
				]
			},
			{
				"id": 35,
				"name": "南太田",
				"stops": [
					{
						"id": 0
					}
				]
			},
			{
				"id": 36,
				"name": "井土ヶ谷",
				"stops": [
					{
						"id": 0
					},
					{
						"id": 1
					}
				]
			},
			{
				"id": 37,
				"name": "弘明寺",
				"stops": [
					{
						"id": 0
					},
					{
						"id": 1
					}
				]
			},
			{
				"id": 38,
				"name": "上大岡",
				"stops": [
					{
						"id": 0
					},
					{
						"id": 1
					},
					{
						"id": 2
					},
					{
						"id": 3
					},
					{
						"id": 4
					}
				]
			},
			{
				"id": 39,
				"name": "屏風浦",
				"stops": [
					{
						"id": 0
					}
				]
			},
			{
				"id": 40,
				"name": "杉田",
				"stops": [
					{
						"id": 0
					},
					{
						"id": 1
					}
				]
			},
			{
				"id": 41,
				"name": "京急富岡",
				"stops": [
					{
						"id": 0
					}
				]
			},
			{
				"id": 42,
				"name": "能見台",
				"stops": [
					{
						"id": 0
					},
					{
						"id": 1
					}
				]
			},
			{
				"id": 43,
				"name": "金沢文庫",
				"stops": [
					{
						"id": 0
					},
					{
						"id": 1
					},
					{
						"id": 2
					},
					{
						"id": 3
					},
					{
						"id": 4
					}
				]
			},
			{
				"id": 44,
				"name": "金沢八景",
				"stops": [
					{
						"id": 0
					},
					{
						"id": 1
					},
					{
						"id": 2
					},
					{
						"id": "3"
					},
					{
						"id": "4"
					},
					{
						"id": "5"
					}
				]
			},
			{
				"id": 45,
				"name": "六浦",
				"stops": [
					{
						"id": "5"
					}
				]
			},
			{
				"id": 46,
				"name": "神武寺",
				"stops": [
					{
						"id": "5"
					}
				]
			},
			{
				"id": 47,
				"name": "新逗子",
				"stops": [
					{
						"id": "5"
					}
				]
			},
			{
				"id": 48,
				"name": "追浜",
				"stops": [
					{
						"id": 0
					},
					{
						"id": 2
					}
				]
			},
			{
				"id": 49,
				"name": "京急田浦",
				"stops": [
					{
						"id": 0
					}
				]
			},
			{
				"id": 50,
				"name": "安針塚",
				"stops": [
					{
						"id": 0
					}
				]
			},
			{
				"id": 51,
				"name": "逸見",
				"stops": [
					{
						"id": 0
					}
				]
			},
			{
				"id": 52,
				"name": "汐入",
				"stops": [
					{
						"id": 0
					},
					{
						"id": 2
					}
				]
			},
			{
				"id": 53,
				"name": "横須賀中央",
				"stops": [
					{
						"id": 0
					},
					{
						"id": 2
					},
					{
						"id": 3
					},
					{
						"id": 4
					}
				]
			},
			{
				"id": 54,
				"name": "県立大学",
				"stops": [
					{
						"id": 0
					}
				]
			},
			{
				"id": 55,
				"name": "堀ノ内",
				"stops": [
					{
						"id": 0
					},
					{
						"id": 2
					},
					{
						"id": "3"
					},
					{
						"id": "4"
					},
					{
						"id": "7"
					}
				]
			},
			{
				"id": 56,
				"name": "京急大津",
				"stops": [
					{
						"id": "7"
					}
				]
			},
			{
				"id": 57,
				"name": "馬堀海岸",
				"stops": [
					{
						"id": "7"
					}
				]
			},
			{
				"id": 58,
				"name": "浦賀",
				"stops": [
					{
						"id": "7"
					}
				]
			},
			{
				"id": 59,
				"name": "新大津",
				"stops": [
					{
						"id": 2
					},
					{
						"id": "3"
					},
					{
						"id": "4"
					}
				]
			},
			{
				"id": 60,
				"name": "北久里浜",
				"stops": [
					{
						"id": 2
					},
					{
						"id": "3"
					},
					{
						"id": "4"
					}
				]
			},
			{
				"id": 61,
				"name": "京急久里浜",
				"stops": [
					{
						"id": 2
					},
					{
						"id": "3"
					},
					{
						"id": "4"
					}
				]
			},
			{
				"id": 62,
				"name": "ＹＲＰ野比",
				"stops": [
					{
						"id": 2
					},
					{
						"id": "3"
					}
				]
			},
			{
				"id": 63,
				"name": "京急長沢",
				"stops": [
					{
						"id": 2
					},
					{
						"id": "3"
					}
				]
			},
			{
				"id": 64,
				"name": "津久井浜",
				"stops": [
					{
						"id": 2
					},
					{
						"id": "3"
					}
				]
			},
			{
				"id": 65,
				"name": "三浦海岸",
				"stops": [
					{
						"id": 2
					},
					{
						"id": "3"
					}
				]
			},
			{
				"id": 66,
				"name": "三崎口",
				"stops": [
					{
						"id": 2
					},
					{
						"id": "3"
					}
				]
			}
		],
		"trains": [
			{
				"id": 0,
				"name": "普通",
				"lineColor": "rgb(51,51,51)",
				"sections": [
					{
						"from": "1",
						"to": "55"
					}
				]
			},
			{
				"id": 1,
				"name": "エアポート急行",
				"lineColor": "rgb(13,131,195)",
				"sections": [
					{
						"from": "0",
						"to": "44"
					}
				]
			},
			{
				"id": 2,
				"name": "特急",
				"lineColor": "rgb(234,1,4)",
				"sections": [
					{
						"from": 0,
						"to": 66
					}
				]
			},
			{
				"id": 3,
				"name": "快特",
				"lineColor": "rgb(55,148,18)",
				"sections": [
					{
						"from": 0,
						"to": 66
					}
				]
			},
			{
				"id": 4,
				"name": "ウイング号",
				"lineColor": "rgb(250,151,21)",
				"sections": [
					{
						"from": "1",
						"to": "61"
					}
				]
			},
			{
				"id": 7,
				"name": "普通（支線）",
				"lineColor": "rgb(51,51,51)",
				"sections": [
					{
						"from": "55",
						"to": "58"
					}
				]
			},
			{
				"id": 5,
				"name": "エアポート急行（支線）",
				"lineColor": "rgb(13,131,195)",
				"sections": [
					{
						"from": "11",
						"to": "17"
					},
					{
						"from": "44",
						"to": "47"
					}
				]
			},
			{
				"id": 6,
				"name": "快特（支線）",
				"lineColor": "rgb(55,148,18)",
				"sections": [
					{
						"from": "11",
						"to": "17"
					}
				]
			}
		]
	},
	{
		"name" : "東海道・山陽・九州新幹線(東京－鹿児島中央)",
		"author" : "128Na",
		"description" : "東から西を結ぶ新幹線のサンプルデータです",
		"stations": [
			{
				"id": 0,
				"name": "東京",
				"stops": [
					{
						"id": 0
					},
					{
						"id": 1
					},
					{
						"id": 2
					}
				]
			},
			{
				"id": 1,
				"name": "品川",
				"stops": [
					{
						"id": 0
					},
					{
						"id": 1
					},
					{
						"id": 2
					}
				]
			},
			{
				"id": 2,
				"name": "新横浜",
				"stops": [
					{
						"id": 0
					},
					{
						"id": 1
					},
					{
						"id": 2
					}
				]
			},
			{
				"id": 3,
				"name": "小田原",
				"stops": [
					{
						"id": 2
					}
				]
			},
			{
				"id": 4,
				"name": "熱海",
				"stops": [
					{
						"id": 1
					},
					{
						"id": 2
					}
				]
			},
			{
				"id": 5,
				"name": "三島",
				"stops": [
					{
						"id": 1
					},
					{
						"id": 2
					}
				]
			},
			{
				"id": 6,
				"name": "新富士",
				"stops": [
					{
						"id": 2
					}
				]
			},
			{
				"id": 7,
				"name": "静岡",
				"stops": [
					{
						"id": 1
					},
					{
						"id": 2
					}
				]
			},
			{
				"id": 8,
				"name": "掛川",
				"stops": [
					{
						"id": 2
					}
				]
			},
			{
				"id": 9,
				"name": "浜松",
				"stops": [
					{
						"id": 1
					},
					{
						"id": 2
					}
				]
			},
			{
				"id": 10,
				"name": "豊橋",
				"stops": [
					{
						"id": 2
					}
				]
			},
			{
				"id": 11,
				"name": "三河安城",
				"stops": [
					{
						"id": 2
					}
				]
			},
			{
				"id": 12,
				"name": "名古屋",
				"stops": [
					{
						"id": 0
					},
					{
						"id": 1
					},
					{
						"id": 2
					}
				]
			},
			{
				"id": 13,
				"name": "岐阜羽島",
				"stops": [
					{
						"id": 2
					}
				]
			},
			{
				"id": 14,
				"name": "米原",
				"stops": [
					{
						"id": 2
					}
				]
			},
			{
				"id": 15,
				"name": "京都",
				"stops": [
					{
						"id": 0
					},
					{
						"id": 1
					},
					{
						"id": 2
					}
				]
			},
			{
				"id": 16,
				"name": "新大阪",
				"stops": [
					{
						"id": "0"
					},
					{
						"id": "1"
					},
					{
						"id": "2"
					},
					{
						"id": "3"
					},
					{
						"id": "4"
					},
					{
						"id": "5"
					},
					{
						"id": "6"
					}
				]
			},
			{
				"id": 17,
				"name": "新神戸",
				"stops": [
					{
						"id": "0"
					},
					{
						"id": "1"
					},
					{
						"id": "3"
					},
					{
						"id": "4"
					},
					{
						"id": "5"
					},
					{
						"id": "6"
					}
				]
			},
			{
				"id": 18,
				"name": "西明石",
				"stops": [
					{
						"id": "1"
					},
					{
						"id": "3"
					}
				]
			},
			{
				"id": 19,
				"name": "姫路",
				"stops": [
					{
						"id": "1"
					},
					{
						"id": "3"
					},
					{
						"id": "5"
					}
				]
			},
			{
				"id": 20,
				"name": "相生",
				"stops": [
					{
						"id": "1"
					},
					{
						"id": "3"
					}
				]
			},
			{
				"id": 21,
				"name": "岡山",
				"stops": [
					{
						"id": "0"
					},
					{
						"id": "1"
					},
					{
						"id": "3"
					},
					{
						"id": "4"
					},
					{
						"id": "5"
					},
					{
						"id": "6"
					}
				]
			},
			{
				"id": 22,
				"name": "新倉敷",
				"stops": [
					{
						"id": "3"
					}
				]
			},
			{
				"id": 23,
				"name": "福山",
				"stops": [
					{
						"id": "3"
					},
					{
						"id": "5"
					}
				]
			},
			{
				"id": 24,
				"name": "新尾道",
				"stops": [
					{
						"id": "3"
					}
				]
			},
			{
				"id": 25,
				"name": "三原",
				"stops": [
					{
						"id": "3"
					}
				]
			},
			{
				"id": 26,
				"name": "東広島",
				"stops": [
					{
						"id": "3"
					}
				]
			},
			{
				"id": 27,
				"name": "広島",
				"stops": [
					{
						"id": "0"
					},
					{
						"id": "3"
					},
					{
						"id": "4"
					},
					{
						"id": "5"
					},
					{
						"id": "6"
					}
				]
			},
			{
				"id": 28,
				"name": "新岩国",
				"stops": [
					{
						"id": "3"
					}
				]
			},
			{
				"id": 29,
				"name": "徳山",
				"stops": [
					{
						"id": "3"
					}
				]
			},
			{
				"id": 30,
				"name": "新山口",
				"stops": [
					{
						"id": "3"
					},
					{
						"id": "5"
					}
				]
			},
			{
				"id": 31,
				"name": "厚狭",
				"stops": [
					{
						"id": "3"
					}
				]
			},
			{
				"id": 32,
				"name": "新下関",
				"stops": [
					{
						"id": "3"
					}
				]
			},
			{
				"id": 33,
				"name": "小倉",
				"stops": [
					{
						"id": "0"
					},
					{
						"id": "3"
					},
					{
						"id": "4"
					},
					{
						"id": "5"
					},
					{
						"id": "6"
					}
				]
			},
			{
				"id": 34,
				"name": "博多",
				"stops": [
					{
						"id": 0
					},
					{
						"id": 6
					},
					{
						"id": 4
					},
					{
						"id": 5
					},
					{
						"id": 3
					},
					{
						"id": 7
					}
				]
			},
			{
				"id": 35,
				"name": "博多南",
				"stops": [
					{
						"id": 7
					}
				]
			},
			{
				"id": 36,
				"name": "新鳥栖",
				"stops": [
					{
						"id": "4"
					},
					{
						"id": "5"
					}
				]
			},
			{
				"id": 37,
				"name": "久留米",
				"stops": [
					{
						"id": "4"
					},
					{
						"id": "5"
					}
				]
			},
			{
				"id": 38,
				"name": "筑後船小屋",
				"stops": [
					{
						"id": "4"
					}
				]
			},
			{
				"id": 39,
				"name": "新大牟田",
				"stops": [
					{
						"id": "4"
					}
				]
			},
			{
				"id": 40,
				"name": "新玉名",
				"stops": [
					{
						"id": "4"
					}
				]
			},
			{
				"id": 41,
				"name": "熊本",
				"stops": [
					{
						"id": "4"
					},
					{
						"id": "5"
					},
					{
						"id": "6"
					}
				]
			},
			{
				"id": 42,
				"name": "新八代",
				"stops": [
					{
						"id": "5"
					}
				]
			},
			{
				"id": 43,
				"name": "新水俣",
				"stops": [
					{
						"id": "5"
					}
				]
			},
			{
				"id": 44,
				"name": "出水",
				"stops": [
					{
						"id": "5"
					}
				]
			},
			{
				"id": 45,
				"name": "川内",
				"stops": [
					{
						"id": "5"
					}
				]
			},
			{
				"id": 46,
				"name": "鹿児島中央",
				"stops": [
					{
						"id": "5"
					},
					{
						"id": "6"
					}
				]
			}
		],
		"trains": [
			{
				"id": 0,
				"name": "のぞみ",
				"lineColor": "rgb(255,255,0)",
				"sections": [
					{
						"from": "0",
						"to": "34"
					}
				]
			},
			{
				"id": 1,
				"name": "ひかり",
				"lineColor": "rgb(255,0,0)",
				"sections": [
					{
						"from": "0",
						"to": "21"
					}
				]
			},
			{
				"id": 2,
				"name": "（東海）こだま",
				"lineColor": "rgb(0,0,255)",
				"sections": [
					{
						"from": "0",
						"to": "16"
					}
				]
			},
			{
				"id": 3,
				"name": "（西日本）こだま",
				"lineColor": "rgb(0,0,255)",
				"sections": [
					{
						"from": "16",
						"to": "34"
					}
				]
			},
			{
				"id": 4,
				"name": "つばめ",
				"lineColor": "rgb(64,224,208)",
				"sections": [
					{
						"from": "34",
						"to": "41"
					}
				]
			},
			{
				"id": 5,
				"name": "さくら",
				"lineColor": "rgb(255,128,180)",
				"sections": [
					{
						"from": "16",
						"to": "46"
					}
				]
			},
			{
				"id": 6,
				"name": "みずほ",
				"lineColor": "rgb(255,165,0)",
				"sections": [
					{
						"from": "16",
						"to": "46"
					}
				]
			},
			{
				"id": 7,
				"name": "（博多南線）こだま",
				"lineColor": "rgb(0,0,255)",
				"sections": [
					{
						"from": "34",
						"to": "35"
					}
				]
			}
		]
	}
];
