(function(){
	var projection_4526 = new ol.proj.Projection({
	    code: 'EPSG:4526',
	    extent: [35221333.3333333, 3522133.33333333, 38743466.6666667, 7044266.66666667],
	    units: 'm',
	    axisOrientation: 'enu'
	});
	ol.proj.addProjection(projection_4526);
	ol.proj.addCoordinateTransforms("EPSG:4326", "EPSG:4526",
	    function(coordinate) {
	        return proj4("EPSG:4326","EPSG:4526",coordinate);
	    },
	    function(coordinate) {
	        return proj4("EPSG:4526","EPSG:4326",coordinate);
	    }
	);
	ol.proj.addCoordinateTransforms("EPSG:3857", "EPSG:4526",
	    function(coordinate) {
	        return proj4("EPSG:3857","EPSG:4526",coordinate);
	    },
	    function(coordinate) {
	        return proj4("EPSG:4526","EPSG:3857",coordinate);
	    }
	);
	proj4.defs("EPSG:4526","+proj=tmerc +lat_0=0 +lon_0=114 +k=1 +x_0=38500000 +y_0=0 +ellps=GRS80 +units=m +no_defs");
})();
function generateUUID() {
    var d = new Date().getTime(),
        uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = (d + Math.random()*16)%16 | 0;
            d = Math.floor(d/16);
            return (c=='x' ? r : (r&0x3|0x8)).toString(16);
        });
    return uuid.replace(/-/g, "");
};



var global_masks = {};

function show_mask(id, msg){
	global_masks[id] = new ZYmask(id,msg);
	global_masks[id].open();
}
function hide_mask(id){
	global_masks[id].close();
	delete global_masks[id];
}
/*
 * domIdSelector  容器Id
 *
 * */
function ZYmask(domIdSelector, loadingMsg) {
	 loadingMsg = loadingMsg || '处理中...';
	 this.domWraper = document.querySelector('#'+domIdSelector);
	 this.domOrigin = document.createElement('div');
	 var height = Number(getComputedStyle(this.domWraper).height.replace(/px$/ig,''))/2 - 20 + 'px';

	 var width = Number(getComputedStyle(this.domWraper).width.replace(/px$/ig,''))/2 - 80 + 'px';
	 var positionStyle = 'overflow: hidden;margin-top:'+ height + ';margin-left:' + width;
	 var loadingStyle = 'font-size: 30px;color: #c9c9c9;float: left';
	 var textStyle = 'float: left;font-size: 18px;line-height: 30px;color:#fff';
	 var wrapStyle = 'position: absolute;top:0;left:0;z-index: 999;width: 100%;height:100%;background: rgba(0,0,0,0.5);display: none;';
	 this.domOrigin.innerHTML = '<div style="'+ positionStyle +'\">'
	     +'<i class="layui-icon layui-icon-loading layui-icon layui-anim layui-anim-rotate layui-anim-loop" style="'+ loadingStyle +'\"></i><p style="'+ textStyle +'\">'+ loadingMsg + '</p>' +
	     '</div>';
	 this.domOrigin.setAttribute('style', 'position: absolute;top:0;left:0;zIndex: 999;width: 100%;height:100%;background: rgba(0,0,0,0.5);display: none;');
	 this.domOrigin.setAttribute('style', wrapStyle);
	 this.domWraper.style.position = 'relative';
	     this.domWraper.appendChild(this.domOrigin)
 }
 ZYmask.prototype.open = function () {
     this.domOrigin.style.display = 'block'
 };
 ZYmask.prototype.close = function () {
     this.domOrigin.style.display = 'none'
 };

var zy = {
	map: {
		//放大操作
		zoomInFun: function(map) {
			 //获取地图视图
	        var view = map.getView();
	        //获得当前缩放级数
	        var zoom = view.getZoom();
	        view.setZoom(zoom + 1);
		},
		// 缩小操作
		zoomOutFun: function zoomOutFun(map) {
			 //获取地图视图
	       var view = map.getView();
	       //获得当前缩放级数
	       var zoom = view.getZoom();
	       view.setZoom(zoom - 1);
		},
		//将Zondy.Object.Feature的坐标点转成字符串返回
		stringifyFeatureCoordinates: function(feature){
			var dots = feature.fGeom.RegGeom[0].Rings[0].Arcs[0].Dots;
        	var feaCoordinateStr = "";
        	for(var m = 0; m < dots.length; m++){
        		feaCoordinateStr = feaCoordinateStr + dots[m].x + "," + dots[m].y + " ";
        	}
        	if(feaCoordinateStr.length > 0){
        		feaCoordinateStr = feaCoordinateStr.substring(0, feaCoordinateStr.length - 1);
        	}
        	return feaCoordinateStr;
		},
		//对中地的地图图元查询结果进行处理，将数据转换为json格式
		parseFeatureToJson: function(result){
			result.jsonData = [];
			if(result.SFEleArray == null){
				return result;
			}
			for(var i = 0; i < result.SFEleArray.length; i++){
				var obj = {};
				for(var m = 0; m < result.AttStruct.FldName.length; m++){
					obj[result.AttStruct.FldName[m]] = result.SFEleArray[i]["AttValue"][m];
				}
				var feature = result.getFeatureByIndex(i);
		        var coordinatesStr = this.stringifyFeatureCoordinates(feature);
		        obj.coordinatesStr = coordinatesStr;
				result.jsonData.push(obj);
			}
			return result;
		},
		parseAnalysisResult: function(result){

		}
	}
}
