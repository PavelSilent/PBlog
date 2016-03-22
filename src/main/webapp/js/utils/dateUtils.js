function getCurrentDate()
{
  	var currentDate = new Date();

  	var month = (currentDate.getMonth() + 1);
  	if (month < 10)
  	{
  		month = "0" + month;
  	}

  	var minutes = currentDate.getMinutes()
  	if (minutes < 10)
  	{
  		minutes = "0" + minutes;
  	}

	var dateString = currentDate.getDate() + "." + month + "." + currentDate.getFullYear();
	var timeString = currentDate.getHours() + ":" + minutes;

	return {"date":dateString, "time":timeString};
}