
window.onload = function current_date()
{
	var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; 
  var yyyy = today.getFullYear();

  if (dd < 10) {
    dd = '0' + dd;
  }

  if (mm < 10) {
    mm = '0' + mm;
  } 
      
  today = mm + '/' + dd + '/' + yyyy;
  document.getElementById("date").setAttribute("placeholder", today);
}