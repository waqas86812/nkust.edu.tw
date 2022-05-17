//使用String物件之prototype屬性延伸String物件之方法
String.prototype.rTrim=rTrim;
String.prototype.lTrim=lTrim;
String.prototype.trim=trim;
 
//去除右邊之空白字元
function rTrim(){
    var orgStr= this.toString();
    var str=orgStr;
    while( str.length >0) {
        if (str.charAt(str.length-1) != ' '){
            break;
        }
        str=str.substring(0, str.length-1) ;
    }
    return str ;
}
 
//去除左邊之空白字元
function lTrim(){
    var orgStr= this.toString();
    var str=orgStr;
    while (str.length>0){
        if (str.charAt(0) != ' '){
            break;
        }
        str=str.substring(1, str.length) ;
    }
    return str;
}
 
//去除左右兩邊之空白字元
function trim(){
    var orgStr= this.toString();
    var str=orgStr;
    return str=(str.lTrim()).rTrim();
}