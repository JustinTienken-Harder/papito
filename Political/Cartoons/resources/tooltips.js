tooltipID = "?";
//------------------------------
function showTooltip(e, tooltip)
{  
  //record tooltip id
  this.tooltipID = tooltip;
  
  //add mouse move listener
  if (document.addEventListener) 
    document.addEventListener("mousemove", moveTooltip, true);
  else if (document.attachEvent) 
    document.attachEvent("on" + "mousemove", moveTooltip);

  //position and show tooltip  
  moveTooltip(e, this.tooltipID);	
  document.getElementById(this.tooltipID).style.visibility = "visible"; 
}
//------------------------------
function hideTooltip()
{ 
  //hide tooltip
  document.getElementById(tooltipID).style.visibility = "hidden"; 

  //remove mouse move action listener
  if (document.removeEventListener) 
    document.removeEventListener("mousemove", moveTooltip, true);
  else if (document.detachEvent) 
    document.detachEvent("on" + "mousemove", moveTooltip);
}
//------------------------------
function moveTooltip(e) 
{
  //get mouse position in abosolute coordinates
  var x = e.pageX? e.pageX: e.clientX + viewport.scrollX;
  var y = e.pageY? e.pageY: e.clientY + viewport.scrollY;

  //offset by 8 pixels horizontal (so as not to be under mouse), then
  //offset up the height of the tooltip div object
//  x = x + 8;
  x = x + 16;
//  x = x - document.getElementById(tooltipID).offsetWidth/2;
  y = y + 16 - document.getElementById(tooltipID).offsetHeight;

  //move the tooltip
  shortcutStyle = document.getElementById(tooltipID).style; 
  shortcutStyle.left = x + "px";
  shortcutStyle.top = y + "px";
}
//------------------------------
