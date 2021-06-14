// debug.js



function isNull(v){ return (v === undefined || v == null || v.length <= 0) ? true : false; }  /** Null üũ */
function isNum(value) {
	return (!isNaN(parseFloat(value)) && isFinite(value));
};


var L_ = function(a){};
var btnTest = function(a, b){};

const DEBUG = (function(b){
	if(b){
		L_ = console.log;
		btnTest = _AddBtn;
	}
	return {
		enable: function(){
			L_ = console.log;
			btnTest = _AddBtn;
		}
		,disable: function(){
			L_ = function(e){};
			btnTest = function(a,b){};
		}
	}
})(true);


//
function _AddBtn(caption, eventFuc, layerNm){

	let layerId_ = "_DEBUG_";
	if(!isNull(layerNm)){
		layerId_ = layerNm;
	}

	var debug = document.getElementById(layerId_);
	
	if(debug === undefined){
		return ;
	}
	
	

	var BTN_TAG = "<span style='margin:4px;'><a title='' href='#'>"+caption+"</a></span>";
	//var BTN_TAG = "<span style='margin:4px;'><button style='width:"+w+"px;' >" + caption+"</button></span>";
	
	try{	
		$("#_DEBUG_").append(BTN_TAG);
		var btn = document.getElementById(layerId_).lastChild;
		//btn.style.margin = "5px";
		
		var callFunc = eventFuc;
		btn.onclick = (function(e){
			callFunc(e);
		});
	}catch(e){
		
	}
}

