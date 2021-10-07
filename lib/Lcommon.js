//-----------------------
// 2021.09.10
// LDebug.js
//

function isNull(v){return(v===undefined || v==null || v.length <= 0)? true:false;} 

function isNum(value){
	return(!isNaN(parseFloat(value)) && isFinite(value));
};

