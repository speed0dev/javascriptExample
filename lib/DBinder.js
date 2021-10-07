/**
 * JK jeon
 * info: jsonData - html bind
 */


// 통함적기능
// Comp.js
// Util적 기능




const DBinder = (()=>{
	
	//const doc_ = document;
	//const eId_ = document.getElementById;		//document가 생성되기전에 호출됨

	const testCount_ = 10;
	
		
	function tagBind_(id, data){	// id: div id=
		L_(" id:" + id);
		let d = document.getElementById(id);
		let c = d.childNodes||null;
		if(c != null){
			for(let i=0;i<c.length;i++){
				searchDataFor_(i, d.childNodes[i], 0, data);  // idx, obj, level
			}
		}
	}
	
	
	// test
	let dataObj = {aaa: "AAAA", bbb: "bbbb", ccc: "cccc", ddd: "dddd"};

	//
	function nodeInfo_(idx, node, level){
		
		L_( node.nodeName );
		if(node.nodeName == "#text"){
			
			return;
		}
		L_("{level:" + level + " idx::" + idx + " nodeType:" + node.nodeType + " tagName:" + node.tagName);
		L_(node);
		L_("  attr bind:" + node.getAttribute("data-bind")||null);
		L_("  attr data-for:" + node.getAttribute("data-for")||null);
		L_("}");
		
	}


	// attr 중 data-for 를 갯수만큼 생성 해주는 기능
	// 1. data-bind-for 갯수만큼 앞에추가
	// 2. 복사대상은 마지막에 제거
	function searchDataFor_(idx, node, level, data){
			
		//
		//nodeInfo_(idx, node, level);
		
		// do action
		if(node.nodeName == "#text"){
			return;
		}	
			

		if(node.hasAttribute("data-bind-for")){

			// data-for //접근불가
			let forData = node.getAttribute("data-bind-for");
			L_(forData);


			node.removeAttribute("data-bind-for");
			node.removeAttribute("data-bind-for");
			
			
			let newNode = null;
			
			// 생성
			for(let ii=0;ii<5;ii++){		//test
				newNode = node.cloneNode(true);  // deep copy
				newNode.removeAttribute("id");
				newNode.removeAttribute("name");

				newNode.removeAttribute("data-bind-for");		//
				newNode.setAttribute("data-bind-idx", ii);
				newNode.setAttribute("data-bind-item", dataObj);  //obj 들어갈수 있는가??? - 안됨.

				node.parentNode.insertBefore(newNode, node);		// 바로앞에 추가	
			}

			node.remove();
		}

		
		if(node.hasChildNodes()){  // has Child가 있으면
			let level_ = level+1;
			for(let j=0;j<node.childNodes.length;j++){
				searchDataFor_(j, node.childNodes[j], level_, data);
			}
		}
		
	}



	return {
	
		tagBind: function(id, data){
			
			//
			tagBind_(id, data);
		}		
	}


})();



