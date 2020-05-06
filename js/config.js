//全局地图信息配置
var globalMapConfig = {
	//经纬度坐标系，画图元时需要
	projection: "EPSG:4326",
	//我们系统用的坐标系
	localProjection: "EPSG:4526",
	//地图服务器IP
	serverIp: "10.0.0.112",
	//地图服务器端口
	serverPort: "6160",
	//坐标系信息
	srsCnName: "高斯大地坐标系_中国2000_38带3_北2",
	//地图默认中心点坐标
	viewCenter: [38441428.42785, 3828000.39275],
	//地图范围-行政区
	projectionExtent:[38446904.8127,3820993.9438,38489800.043,3871604.8417],
	//导入坐标范围
	minX:38379906.892075,
	minY:3791299.29652517,
	maxX:38520881.804775,
	maxY:3874969.75312517,
	//最大分辨率
	maxResolution:13758.333333333334,
	//地图复位区域
	zoomToExtent: [38358233.33,3742266.67,38523333.33,3907366.67],
	//地图初始层级
	initZoom: 6,
	//地图最大层级
	maxZoom: 18,
	//最小层级
	minZoom: 5,
	//背景图地址url和图层名称
	bgLayerNameCn: "行政区划",
	bgLayerNameEn: "BGTC",
	bgWmsUrl: "/igs/rest/ogc/doc/XZQ/WMSServer",
	bgWmsLayerCode: "市级区划,县级区划",
	baseWtmsUrl:"/igs/rest/ogc/INDEX2019G/WMTSServer",
	baseWtmsLayerEn:"INDEX2019G",
	//baseUrlTile: "/igs/rest/ogc/INDEX2019G/WMTSServer",
	//高清影像url和图层名称
	imageLayerNameCn: "高清影像",
	imageLayerNameEn: "GQYX",
	imageWtmsLayerEn:"GFYX4101012019G",
	imageWtmsUrl:"/igs/rest/ogc/GFYX4101012019G/WMTSServer",
	//路网地址url和图层名称
	roadLayerNameCn: "交通路网",
	roadLayerNameEn: "ROADTC",
	roadWmsUrl: "/igs/rest/ogc/doc/LW4101002017GDZZW/WMSServer",
	roadWmsLayerCode: "X410100LW2017GLWHX,X410100LW2017GLWX,X410100LW2017GLWHXZJ,X410100LW2017GLWD",
	roadWtmsUrl:"/igs/rest/ogc/LW4101002017G/WMTSServer",
	roadWtmsLayerEn:"LW4101002017G",
	//roadUrlTile:"/igs/rest/ogc/LW4101002017G/WMTSServer",

	//现状图层url和图层名称
	xianzLayerNameCn: "土地利用现状",
	xianzLayerNameEn: "XIANZHUANG",
	xianzWmsUrl: "/igs/rest/ogc/doc/410101TDXZ2017GDZZW/WMSServer",//服务地址
	xianzWmsLayerCode: "X410101TDXZ2017GDLTB,X410101TDXZ2017GXZDW,X410101TDXZ2017GDLJX",//图层名称
	//专题信息 例子：(专题:DC,年度:2009,比例尺:G)
	xianzstrClassInfo: "(专题:TDXZ,年度:2017,比例尺:G)",
	//叠加分析表名，问实施要，多个中间用逗号隔开
	xianzstrTbl:"NCTDLY_YJFL,NCTDLY_EJFL,FRDTDLY_YJFL,FRDTDLY_EJFL,NCTDLY_QSYJ,NCTDLY_QSEJ,GDPDMJHZ,KTZ,KTZHZ,JBNTBHKQKTJ,TDLYXZTB", //
	xianzWmtsUrl:"/igs/rest/ogc/TDXZ4101012017G/WMTSServer",
	xianzWmtsLayerEn:"TDXZ4101012017G",

	//宗地图层url和图层名称
	zongdLayerNameCn: "宗地",
	zongdLayerNameEn: "ZONGDITC",
	zongdWmsUrl: "/igs/rest/ogc/doc/QS4101002019ZDJBXX/WMSServer",
	zongdWmsLayerCode: "D410100QS2019KZDJBXX",//ZDJBXX
	//专题信息 例子：(专题:DC,年度:2009,比例尺:G)
	zongdstrClassInfo: "(专题:QS,年度:2019,比例尺:K)",
	//叠加分析表名，问实施要，多个中间用逗号隔开
	zongdstrTbl:"ZDXX", //
	documentName:"QS4101002019ZDJBXX",



	//默认高亮样式
	highLightLandStyle: new ol.style.Style({
        //填充色
        fill: new ol.style.Fill({
            color: '#aa3300'//'#1269d3'
        }),
        //边线颜色
        stroke: new ol.style.Stroke({
            color: '#ffcc33',//'#ff0000',
            width: 2
        }),
        image: new ol.style.Circle({
            radius: 5,
            fill: new ol.style.Fill({
                color: '#ffcc33'
            })
        })
    }),

    //叠加分析重叠部分样式
	intersectLandStyle: function(textParam){
		var styleParam = new ol.style.Style({
			//填充色
			fill: new ol.style.Fill({
				color: 'rgba(0, 255, 0, 0.5)'
			}),
			//边线颜色
			stroke: new ol.style.Stroke({
				color: '#ffffff',
				width: 2
			}),
			image: new ol.style.Circle({
				radius: 5,
				fill: new ol.style.Fill({
					color: '#33ccff'
				})
			}),
			 text: new ol.style.Text({
	             //位置
	             textAlign: 'center',
	             //基准线
	             textBaseline: 'middle',
	             //文字样式
	             font: 'normal 14px 微软雅黑',
	             //文本内容
	             text: textParam,
	             //文本填充样式（即文字颜色）
	             fill: new ol.style.Fill({ color: '#aa3300' }),
	             stroke: new ol.style.Stroke({ color: '#ffcc33', width: 2 })
	         })
	    })
		return styleParam;

	}
};
//各业务功能地图信息配置
//其中stageCode与代码表的关系
//SELECT * FROM SYS_CODE C WHERE C.CODE_TYPE='13'
var mapBusinessType = {
	//建设用地即用地报批配置，阶段stage为JSYD，stageCode为03
	JSYD: {
		//为了给你看，程序无使用
		stage: "JSYD",
		//为了给你看，程序无使用
		stageCode: "03",
		//地图文档的中文名称，给用户显示看，可以自己任意修改
		layerNameCn: "用地报批",
		//审批图层信息
		audit:{
			//mapgis发布的地图文档服务名称，问实施要
			documentName: "BPYD",
			//地图的图层名称，问实施要
			typeName: "LBPYD410100BPYD",
			//图层在地图文档中的层级，问实施要
			layerIndex: 0,
			//地图文档服务地址，问实施要
			wmsUrl: "/igs/rest/ogc/doc/BPYD/WMSServer",
			//问实施要
			strClassInfo: "(专题:BPYD)",  //
			//上面的去掉小括号
			updateStrClassInfo: "专题:BPYD",
			//叠加分析表名，问实施要，多个中间用逗号隔开
			strTbl:"BPYDQKB", //
		},
		//正式图层信息
		formal: {
			//mapgis发布的地图文档服务名称，问实施要
			documentName: "BPSH",
			//地图的图层名称，问实施要
			typeName: "LBPSH410100JSYDBPSH",
			//图层在地图文档中的层级，问实施要
			layerIndex: 0,
			//地图文档服务地址，问实施要
			wmsUrl: "/igs/rest/ogc/doc/BPSH/WMSServer",
			//问实施要
			strClassInfo: "(专题:BPSH)",
			//上面的去掉小括号
			updateStrClassInfo: "专题:BPSH",
			//叠加分析表名，问实施要，多个中间用逗号隔开
			strTbl:"BPSHQKB",
		},
		//上手地块的地图配置信息，如果没有上手或不用选择上手地块，设置成null
		preStageLand: {
            documentName: "YDYS",
            typeName: "LYDYS410100YDYS",
            layerNameCn: "用地预审",
            layerIndex: 0,
            stageCode: "03",
            wmsUrl: "/igs/rest/ogc/doc/YDYS/WMSServer",
            strClassInfo: "(专题:YDYS)",
            updateStrClassInfo: "专题:YDYS",
            strTbl:"YDYSQKB"
        },
		//地图上需要显示的其它地图文档时，将其它地图文档配置到下面的数组中
		otherLayers:[/*{
			//地图文档的中文名称，给用户显示看，可以自己任意修改
			layerNameCn: "用地预审",
			//地图文档名称，问实施要
			layerNameEn: "YDYS",
			//地图文档url，问实施要
			layerUrl: "/igs/rest/ogc/doc/YSSH/WMSServer",
			//地图图层名称，多个中间用逗号隔开，问实施要
			layerCode: "LYSSH410100YDYSSH"
		}*/]
	},
	//用地预审地图配置，阶段stage为YDYS，stageCode为02
	YDYS: {
		//为了给你看，程序无使用
		stage: "YDYS",
		//为了给你看，程序无使用
		stageCode: "02",
		layerNameCn: "用地预审",
        businessFormal:{
            documentName: "YDYS",
            typeName: "LYDYS410100YDYS",
            layerIndex: 0,
            wmsUrl: "/igs/rest/ogc/doc/YDYS/WMSServer",
            strClassInfo: "(专题:YDYS)",
            updateStrClassInfo: "专题:YDYS",
            strTbl:"YDYSQKB"
        },
		formal:{
			documentName: "YSSH",
			typeName: "LYSSH410100YDYSSH",
			layerIndex: 0,
			wmsUrl: "/igs/rest/ogc/doc/YSSH/WMSServer",
			strClassInfo: "(专题:YSSH)",
			updateStrClassInfo: "专题:YSSH",
			strTbl:"YSSHQKB"
		},
		audit: {
			documentName: "YSYD",
			typeName: "LYSYD410100YSYD",
			layerIndex: 0,
			wmsUrl: "/igs/rest/ogc/doc/YSYD/WMSServer",
			strClassInfo: "(专题:YSYD)",
			updateStrClassInfo: "专题:YSYD",
			strTbl:"YSYDQKB"
		},
		preStageLand: null,
		otherLayers:[]
	},
	//土地储备地图配置，阶段stage为TDCB，stageCode为05
	TDCB: {
		//为了给你看，程序无使用
		stage: "TDCB",
		//为了给你看，程序无使用
		stageCode: "05",
		layerNameCn: "土地储备",
        formal:{
            documentName: "CBSH",
            typeName: "LCBSH410100TDCBSH",
            layerIndex: 0,
            wmsUrl: "/igs/rest/ogc/doc/CBSH/WMSServer",
            strClassInfo: "(专题:CBSH)",
            updateStrClassInfo: "专题:CBSH",
            strTbl:"CBSHTJ"
        },
        audit: {
            documentName: "CBYD",
            typeName: "LCBYD410100CBYD",
            layerIndex: 0,
            wmsUrl: "/igs/rest/ogc/doc/CBYD/WMSServer",
            strClassInfo: "(专题:CBYD)",
            updateStrClassInfo: "专题:CBYD",
            strTbl:"CBYDTJ"
        },
        preStageLand: {
            documentName: "JSYD",
            typeName: "LJSYD410100JSYD",
            layerNameCn: "用地报批",
            layerIndex: 0,
            wmsUrl: "/igs/rest/ogc/doc/JSYD/WMSServer",
            strClassInfo: "(专题:JSYD)",
            updateStrClassInfo: "专题:JSYD",
            strTbl:"JSYDQKB"
        },
		otherLayers:[]
	},
	//土地供应地图配置，阶段stage为TDGY，stageCode为06
	TDGY: {
		//为了给你看，程序无使用
		stage: "TDGY",
		//为了给你看，程序无使用
		stageCode: "06",
        layerNameCn: "土地供应",
        formal:{
            documentName: "GDSH",
            typeName: "LGDSH410100GDXMSH",
            layerIndex: 0,
            wmsUrl: "/igs/rest/ogc/doc/GDSH/WMSServer",
            strClassInfo: "(专题:GDSH)",
            updateStrClassInfo: "专题:GDSH",
            strTbl:"GDSHQKB"
        },
        audit: {
            documentName: "GDYD",
            typeName: "LGDYD410100GDYD",
            layerIndex: 0,
            wmsUrl: "/igs/rest/ogc/doc/GDYD/WMSServer",
            strClassInfo: "(专题:GDYD)",
            updateStrClassInfo: "专题:GDYD",
            strTbl:"GDYDQKB"
        },
        preStageLand: {
            documentName: "TDCB",
            typeName: "LTDCB410100TDCB",
            layerNameCn: "土地储备",
            layerIndex: 0,
            wmsUrl: "/igs/rest/ogc/doc/TDCB/WMSServer",
            strClassInfo: "(专题:TDCB)",
            updateStrClassInfo: "专题:TDCB",
            strTbl:"TDCBTJ"
        },
		otherLayers:[]
	}
};
var mapBusinessTypeCode = {};
mapBusinessTypeCode[mapBusinessType.JSYD.stageCode] = mapBusinessType.JSYD;
mapBusinessTypeCode[mapBusinessType.YDYS.stageCode] = mapBusinessType.YDYS;
mapBusinessTypeCode[mapBusinessType.TDCB.stageCode] = mapBusinessType.TDCB;
mapBusinessTypeCode[mapBusinessType.TDGY.stageCode] = mapBusinessType.TDGY;
