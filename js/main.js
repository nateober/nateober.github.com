	function daysInMonth(m,y) {
    	return new Date(m, y, 0).getDate();
	}
	
  	function createCalendar(){
  	var today = new Date();
  	var month = today.getMonth();
  	var day = today.getDate();
  	var year = today.getFullYear();
  	var weekday = today.getDay();
  	
  
  	
  	var mn=new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
   	var dow=new Array("Sun", "Mon", "Tues", "Wednes", "Thurs", "Fri", "Satur");
		
  	var calstring = '&lt;&nbsp;<span class="now">' + mn[month] + '</span>&nbsp;&nbsp;1'; 
  	
  	for(i=2; i<=daysInMonth(month, year); i++){
  		if (i==today.getDate()){
  			calstring += ' &middot; <span class="now">[ ' + i + ' ]</span>';
  		}
  		else{
  			calstring += ' &middot; ' + i;
  			}
  	}
  	calstring += '&nbsp; &nbsp;<span class="now">' + dow[weekday] + 'day</span>&nbsp;&gt;';
  	$("#calendar").html(calstring); 
  } 
  
	$(document).ready(function() {
		createCalendar();
});

