///////////////////////////////////////////////////////////////////////////////////////////////
// ConnectedText javascript utilities.
// Copyright (C) 2004-2005 ConnectedText
// http://www.connectedtext.com
// Can be freely distributed
///////////////////////////////////////////////////////////////////////////////////////////////


PositionX = 100;
PositionY = 100;

defaultWidth  = 500;
defaultHeight = 500;

if (parseInt(navigator.appVersion.charAt(0)) >= 4)
{
  var isNN = (navigator.appName == "Netscape")?1:0;
  var isIE = (navigator.appName.indexOf("Microsoft") != -1)?1:0;
}

var optNN = 'scrollbars=no,width='+defaultWidth+',height='+defaultHeight+',left='+PositionX+',top='+PositionY;
var optIE = 'scrollbars=no,width=150,height=100,left='+PositionX+',top='+PositionY;

///////////////////////////////////////////////////////////////////////////////////////////////
// Opens an Image Popup Window

function popImage(imageURL, imageTitle)
{
  if (isNN){imgWin=window.open('about:blank','',optNN);}
  if (isIE){imgWin=window.open('about:blank','',optIE);}

  with (imgWin.document)
  {
     writeln('<html><head><title>Loading...</title><style>body{margin:0px;}</style>');
     writeln('<script>');
     writeln('var isNN,isIE;');
     writeln('if (parseInt(navigator.appVersion.charAt(0))>=4){');
     writeln('isNN=(navigator.appName=="Netscape")?1:0;');
     writeln('isIE=(navigator.appName.indexOf("Microsoft")!=-1)?1:0;}');
     writeln('function reSizeToImage(){');
     writeln('if (isIE) {');
     writeln('window.resizeTo(100,100);');
     writeln('width=100-(document.body.clientWidth-document.images[0].width);');
     writeln('height=100-(document.body.clientHeight-document.images[0].height);');
     writeln('window.resizeTo(width,height);}');
     writeln('if (isNN) {');       
     writeln('window.innerWidth=document.images["IMG"].width;');
     writeln('window.innerHeight=document.images["IMG"].height;}}');
     writeln('function doTitle(){document.title="' + imageTitle + '";}');
     writeln('</script>');
     writeln('</head><body bgcolor=000000 scroll="no" onload="reSizeToImage(); doTitle(); self.focus()" onblur="self.close()">');
     writeln('<img name="IMG" src="' + imageURL + '" style="display:block"></body></html>');

     close();		
  }
}
