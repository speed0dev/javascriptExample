// 2021.09.10
// LDebug.js

function isNull(v){return(v===undefined || v==null || v.length <= 0)? true:false;} 
function isNum(value){
	return(!isNaN(parseFloat(value)) && isFinite(value));
};


let L_ = function(a){};
let btnTest = function(a, b){};

const LDEBUG = (function(b){

	const layerId_ = "_DEBUG_";
	//const BTN_TAG = "<span style='margin:4px;'><a title='' href='#'>"+{{CAPTION}}+"</a></span>";
	const CAP_TAG = "<a title='' href='#'>{{CAPTION}}</a>";
	
	function btnTest_(caption, eventFuc, id_){
		
		let id = id_||layerId_;		
		let div = document.getElementById(id)||null;
		//console.log(div);
		if(div == null){
			return ;
		}
		
		let capTag = CAP_TAG.replace("{{CAPTION}}", caption);	//
		let newBtn = document.createElement("span");
		newBtn.innerHTML = capTag;
		newBtn.style.margin = "4px";

		let btn = div.appendChild(newBtn);
		
		let callFunc = eventFuc;
		btn.onclick = (function(e){
			callFunc(e);
		});
	}


	if(b){
		L_ = console.log;
		btnTest = btnTest_;
	}


	return {
		enable: function(){
			L_ = console.log;
			btnTest = btnTest_;
		}
		,disable: function(){
			L_ = function(e){};
			btnTest = function(a,b){};
		}
	}
})(true);



