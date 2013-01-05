	function daysInMonth(m,y) {
    	return new Date(m, y, 0).getDate();
	}
	
  	function createCalendar(){
  	var today = new Date();
  	var month = today.getMonth();
  	var day = today.getDate();
  	var year = today.getFullYear();
  	var weekday = today.getDay();
  	
  
  	
  	var mn=new Array();
  	mn[0]="January"; mn[1]="February"; mn[2]="March"; mn[3]="April"; 
  	mn[4]="May"; mn[5]="June"; mn[6]="July"; mn[7]="August"; 
  	mn[8]="September"; mn[9]="October"; mn[10]="November"; mn[11]="December";
  	
  	var dow=new Array();
  	dow[0]="Sun";dow[1]="Mon";dow[2]="Tues";dow[3]="Wednes";
  	dow[4]="Thurs";dow[5]="Fri";dow[6]="Satur";
  	
  	var calstring = '&lt;&nbsp;<span class="now">' + mn[month] + "</span>&nbsp;&nbsp;1"; 
  	
  	for(i=2; i<=daysInMonth(month, year); i++){
  		if (i==today.getDate()){
  			calstring += ' &middot; <span class="now">[ ' + i + " ]</span>";
  		}
  		else{
  			calstring += " &middot; " + i;
  			}
  	}
  	calstring += '&nbsp; &nbsp;<span class="now">' + dow[weekday] + "day</span>&nbsp;&gt;";
  	document.getElementById("calendar").innerHTML=calstring; 
  } 
  
  function social(){
  	//console.log(window.innerWidth + ", " + document.width);
    if(window.innerWidth < 850){
    	document.getElementById("social-vert").style.display="none";
    	document.getElementById("social-hor").style.display="block";
    	document.getElementById("calendar").style.display="none";
    	document.getElementById("smallpic").style.display="block";
    	document.getElementById("bigpic").style.display="none";
    	
    	var size = document.getElementById("innerpage").offsetWidth;
    	size = size - 45;
    	document.getElementById("interests").style.width=size + "px";
	}
	
	if(window.innerWidth > 850){
    	document.getElementById("social-vert").style.display="block"; 
    	document.getElementById("social-hor").style.display="none";
    	document.getElementById("calendar").style.display="block";
    	document.getElementById("smallpic").style.display="none";
    	document.getElementById("bigpic").style.display="block";
    	var size = document.getElementById("bigpic").width;
    	size = size - 42;
    	document.getElementById("interests").style.width= size + "px";
	}
	
}

	function init(){
		createCalendar();
		social();
		window.onresize = social;
	}