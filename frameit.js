//start

if (window.test){
	var kalle = "5";
}
else {
	var kalle = "10"; 
}
var reload='0';
var wholeurl = location.href;
var urlarr = new Array();
urlarr = wholeurl.split("/"); 
var topframe_url='http://hem.passagen.se/TopFrame/new/topwindow_v4.shtml/'+urlarr[3]+'/'
if(self == top) {
	var url=window.location.href;
	if (kalle == 5)
	{
		if (url.indexOf('?k?k') != -1){
			var frameset='<html><frameset rows="150,89,*" frameborder="0" border="0" framespacing="0"><frame SRC="http://www.passagen.se/hemsidor/topbanner/" name="banner" scrolling="no" noresize><frame src="'+topframe_url+'" name="PasTop" scrolling="no" noresize><frame src="http://hem.passagen.se/TopFrame/new/loop.html" name="PasMain" scrolling="auto" noresize></frameset></html>';
			}
			else
			{
			var frameset='<html><frameset rows="150,89,*" frameborder="0" border="0" framespacing="0"><frame SRC="http://www.passagen.se/hemsidor/topbanner/" name="banner" scrolling="no" noresize><frame src="'+topframe_url+'" name="PasTop" scrolling="no" noresize><frame src="'+url+'?k" name="PasMain" scrolling="auto" noresize></frameset></html>';
			}
	}
	else
	{
		if (url.indexOf('?k?k') != -1){
			var frameset='<html><frameset rows="89,*" frameborder="0" border="0" framespacing="0"><frame src="'+topframe_url+'" name="PasTop" scrolling="no" noresize><frame src="http://hem.passagen.se/TopFrame/new/loop.html" name="PasMain" scrolling="auto" noresize></frameset></html>';
			}
			else
			{
			var frameset='<html><frameset rows="89,*" frameborder="0" border="0" framespacing="0"><frame src="'+topframe_url+'" name="PasTop" scrolling="no" noresize><frame src="'+url+'?k" name="PasMain" scrolling="auto" noresize></frameset></html>';
			}
	}
	document.write(frameset);
}

if(self != top && parent.frames.length > "1") {
	if (parent.frames[0].location.href == topframe_url) {
		setTimeout("parent.document.title = document.title;","800");
		if(parent.reload =='0') {
			parent.reload ='1'
		}
		else {
			parent.frames[0].location.reload();
		}
	}	
}


if (document.referrer.indexOf('http://hem.passagen.se') == -1) 
	{
	window.open('http://www.passagen.se/hemsidor/TopFrame/lopsedel/v3/','Startpage','status=no,scrollbars=no,width=504,height=675');
	self.focus();
	}

