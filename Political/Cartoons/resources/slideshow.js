//=====================================================        
//by default do not automatically advance in either direction
var autoNext = 0;
var autoPrev = 0;

//default advance delay is half a second
var autoAdavanceDelay = 500;
var timerID = -1;
//=====================================================        
function keyHeldEvent()
{
  //If the user has since relesaed the 2nd button that was pressed, but the primary
  //button is still held, reset its value to 1 so it can still have an effect
  if( autoNext == 2 && autoPrev == 0)
    autoNext = 1;
  if( autoPrev == 2 && autoNext == 0)
    autoPrev = 1;

  //auto advance
  if( autoNext == 1)
      nextImage();
  else if( autoPrev == 1 )
      previousImage();

  //wait delay period, then check again  
  if( autoNext == 1 || autoPrev == 1 )
   timerID = setTimeout("keyHeldEvent()", autoAdavanceDelay);
}
//=====================================================        
//Handle key release event
function keyUpEvent(key) 
{
  if (!key) 
  {
    key = event;
    key.which = key.keyCode;
  }
  switch (key.which) 
  {
    case 37: // leftkey
    case 38: // upkey
      autoPrev = 0;
      break;
    case 39: // rightkey
    case 40: // downkey
      autoNext = 0;
      break;
  }
}
//=====================================================        
//Handle key pressed by changing the current photo as appropriate
function keyDownEvent(key) 
{
  clearTimeout(timerID);

  if (!key) 
  {
    key = event;
    key.which = key.keyCode;
  }
  switch (key.which) 
  {
    case 36: // home
      firstImage()
      break;
    case 35: // end
      lastImage()
      break;
    case 37: // leftkey
    case 38: // upkey
      previousImage();
      autoPrev = 1;
      //if right/down key still pressed, degrade it but remember it's being held. this
      if( autoNext == 1 ) autoNext = 2;
      break;
    case 39: // rightkey
    case 40: // downkey
      nextImage(); 
      autoNext = 1; 
      //if left/up key still pressed, degrade it but remember it's being held. this
      if( autoPrev == 1 ) autoPrev = 2;
      break;
  }
  
  //wait delay period, then check if keys still held  
  if( autoNext == 1 || autoPrev == 1 )
    timerID = setTimeout("keyHeldEvent()", autoAdavanceDelay);
}
//=====================================================        
//This function determines which photo the user should see by default by
//parsing the URL. This allows the user to immediately jump into the 
//middle of the slideshow by passing a photo index in on the url string
function getPhotoNum(str)
{
  //find the index of the ='s sign
  index = str.indexOf("=")+1;
          
  //if index is 0 that means no ='s sign was found so default to the first photo.  
  if( index == 0 ) return 1;
  //else extract photo number
  else             return( parseInt( str.substring(index,str.length) ) );
}
//=====================================================        
//This function opens the current photo in a new window/tab
//using the largest image size
function expandImage()
{
   fileToOpen = "img/" + currentCollection + "/"+currentImage+".jpg"
   new_window = window.open(fileToOpen,'_new')
}
//=====================================================        
function showHideButtons()
{
  document.getElementById("prevImageButton").style.visibility = isFirstImage() ? "hidden" : "visible";
  document.getElementById("nextImageButton").style.visibility = isLastImage()  ? "hidden" : "visible";
}
//=====================================================        
//Reset the image and description shown using the current photo data
function loadImage(i)
{
  //reset photo counter
  currentImage = i;
  
  //show/hide prev/next buttons
  showHideButtons();
 
  //update photo number + description
  document.getElementById("photoNum").lastChild.nodeValue="Photo " + currentImage + " of " + numImages

   //replace description.
  //make sure to replace <br>'s with actual <br> elements, otherwise the user woudl see <br>. 
  //Now other such tags (like <p>) shoudl be in here because the
  //Javascript util function only inserts <br>'s for newlines and carrage returns.	  imageDescription = descriptions[currentImage-1];
  var oldDesc = document.getElementById("photoDesc");  var newDesc = document.createElement(oldDesc.nodeName);  newDesc.id = "photoDesc";
  var lastFoundBr = 0;  for (i = 0; i < imageDescription.length; i++)  {    if (imageDescription.substr(i, 4) == "<br>")	{	  newDesc.appendChild(document.createTextNode(imageDescription.substr(lastFoundBr, (i - lastFoundBr))));	  lastFoundBr = i + 4;	  newDesc.appendChild(document.createElement("BR"));	  i = i + 3;	}  }  newDesc.appendChild(document.createTextNode(imageDescription.substr(lastFoundBr, (i - lastFoundBr))));  oldDesc.parentNode.replaceChild(newDesc, oldDesc);

  //update photo shown
  document.currentPhoto.src="img/" + currentCollection + "/"+currentImage+"_slideshow.jpg"
  document.currentPhoto.alt=descriptions[currentImage-1];
}
//=====================================================        
//The following functions are used to navigate within the slideshow
function isLastImage()  { return (currentImage == numImages); }
function isFirstImage() { return (currentImage == 1);         }

function nextImage()     { if( !isLastImage() )  loadImage(currentImage + 1) }
function previousImage() { if( !isFirstImage() ) loadImage(currentImage - 1) }

function firstImage()    { loadImage( 1 )         }
function lastImage()     { loadImage( numImages ) }
//=====================================================        
//Define and set startup function in order to install key handlers
function startup() 
{
  var isOp = navigator.userAgent.indexOf('Opera') > -1 ? 1 : 0;
  if (!isOp) document.onkeydown = keyDownEvent;
  if (!isOp) document.onkeyup   = keyUpEvent;
}

window.onload = startup;
//=====================================================        
//Functions for showing and hiding div elements, used to show popups
function showElement(ID)
{  document.getElementById(ID).style.visibility = "visible"; }

function hideElement(ID)
{ document.getElementById(ID).style.visibility = "hidden"; }
//=====================================================        
