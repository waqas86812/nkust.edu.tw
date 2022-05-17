




var cooljs_0 =
{
    borderWidth:1,
    borderColor:"#666666",
    backgroundColor:[ "white", "#B6BDD2" ],
    textClass:[ "clsCMOn", "clsCMOver" ],
    size:[ 30, 200 ],
    itemoff:[0,'+previousItem-1px'],
    leveloff:['+parentItem-1px',0 ]
};

var cooljs_1 =
{
    itemoff:[ '+previousItem-1px', 0 ]

};
 
var cooljs_2 =
{
    leveloff:[ 0, '+parentItem-1px' ]
};
var y  = 120;
var x;	
var width ="";
	if(!isie())
	{
		var	width = window.innerWidth;
	}
	else
	{
		var width = document.documentElement.clientWidth;
	}
	//alert(width);
if(width > 1024)
	{
		x = (width-1024)/2+120;
	}
	else
	{
		x = 120+8;
	}
	//alert(x);
window.onresize = function () {
	if(!isie())
	{
		var new_width = window.innerWidth;
	}
	else
	{
		var new_width = document.documentElement.clientWidth+17;
	}
	//alert(new_width);
	var new_x=0;
	if(new_width > 1024)
	{
		new_x = (new_width-1024)/2+120;
	}
	else
	{
		new_x = 120+8;
	}
	//alert(new_x);
	document.getElementById('cj_menu_r').style.left=new_x+"px";
}
function isie(){return (typeof document.all != 'undefined' && typeof window.opera == 'undefined' && navigator.vendor != 'KDE');}