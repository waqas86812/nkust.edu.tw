/*設Header Flash初始值*/
function loadFlash(myPath)
{
	var elems=document.styleSheets[0];
	elemsRules = elems.cssRules ? elems.cssRules : elems.rules;
	var h_height;var h_width;
	for (i=0; i<elemsRules.length; i++){
		if (elemsRules[i].selectorText=="#header"){ //find the #header rule within stylesheet
			elemsRules[i].style.height ? h_height=elemsRules[i].style.height : h_height='100%';
			elemsRules[i].style.width ? h_width=elemsRules[i].style.width : h_width='100%';
		break
		}
	}

	var so = new SWFObject(myPath, "mymovie", h_width, h_height, "8", "");
	so.addParam("wmode", "opaque");
	so.write("flashDiv");
	
	var headObj=document.getElementById('header');
	for(var i=0;i<headObj.childNodes.length;i++)
	{
		if((headObj.childNodes[i].id == 'flashDiv'))
		{
			headObj.childNodes[i].style.display='block';
		}
		else if(headObj.childNodes[i].tagName == 'DIV' && headObj.childNodes[i].id != 'menu')
		{	headObj.childNodes[i].style.display='none';
		}
		
	}
}