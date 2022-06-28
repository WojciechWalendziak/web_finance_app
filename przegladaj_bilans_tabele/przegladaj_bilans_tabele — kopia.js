
function start()
{
	var table, tr, td, txtValue, day = 0, month = 0, year = 0, end_year = 0, end_month = 0, end_day = 0, rows, not_sorted, i, x, y, sort_action, sum_row, period, period_string, cell_one, cell_two;
	var today = new Date()

	table = document.getElementById("income_Table");
	not_sorted = true;
	while (not_sorted) {
		not_sorted = false;
		rows = table.rows;
		for (i = 1; i < (rows.length - 1); i++) {
		sort_action = false;
		x = rows[i].getElementsByTagName("td")[1];
		y = rows[i + 1].getElementsByTagName("td")[1];
		if (Number(x.innerHTML) > Number(y.innerHTML)) {
			sort_action = true;
			break;
		}
		}
		if (sort_action) {
			rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
			not_sorted = true;
		}
	}
	sum_row = table.insertRow(rows.length);
	total_income = 0;
	for (i = 1; i < (rows.length - 1); i++) {
		x = rows[i].getElementsByTagName("td")[1];
		total_income = total_income + Number(x.innerHTML);
	}
	cell_one = sum_row.insertCell(0);
	cell_two = sum_row.insertCell(1);
	cell_one.innerHTML = "TOTAL INCOME";
	cell_two.innerHTML = total_income;
	table = document.getElementById("expence_Table");
	not_sorted = true;
	while (not_sorted) {
		not_sorted = false;
		rows = table.rows;
		for (i = 1; i < (rows.length - 1); i++) {
			sort_action = false;
			x = rows[i].getElementsByTagName("td")[1];
			y = rows[i + 1].getElementsByTagName("td")[1];
			if (Number(x.innerHTML) > Number(y.innerHTML)) {
				sort_action = true;
				break;
			}
		}
		if (sort_action) {
			rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
			not_sorted = true;
		}
	}
	sum_row = table.insertRow(rows.length);
	total_expence = 0;
	for (i = 1; i < (rows.length - 1); i++) {
		x = rows[i].getElementsByTagName("td")[1];
		total_expence = total_expence + Number(x.innerHTML);
	}
	cell_one = sum_row.insertCell(0);
	cell_two = sum_row.insertCell(1);
	cell_one.innerHTML = "TOTAL EXPENCE";
	cell_two.innerHTML = total_expence;

	end_year = today.getFullYear();
	end_month = today.getMonth()+1;
	end_day = today.getDate();

	select_field = document.getElementById("select_field").value;
	period = document.getElementById("period").value;
	alert(select_field);
	period_string = String(period);
	alert(select_field);
	if(period == "biezacy_rok")
	{
		for (i = 0; i < tr.length; i++) {
			td = tr[i].getElementsByTagName("td")[2];
			if (td) {
			  txtValue = td.textContent || td.innerText;
			  day = txtValue.substring(0, 2);
			  month = txtValue.substring(3, 5);
			  year = txtValue.substring(6, 10);
			  
			  if (year < end_year) 
			  {
				  tr[i].style.display = "none";
			  } 
			  else 
			  {
				  if (month == end_month)
				  {
					  if (day > end_day)
					  {
						  tr[i].style.display = "none";
					  }
				  }
				  else
				  {
					  if (month < end_month - 1)
					  {
						  tr[i].style.display = "none";
					  }
					  else
					  {
						  if (day < end_day)
						  {
							  tr[i].style.display = "none";
						  }
					  }
				  }
			  }
			}
		}
	}
	else if(period == "niestandardowy")
	{
		var add_form = document.createElement("form");
		var add_label_1 = document.createElement("label");
		var add_label_2 = document.createElement("label");
		var add_input = document.createElement("input");
		var row = table.insertRow(0);

		add_form.setAttribute("id", "new_form");
		add_label_1.setAttribute("for",'id_from_input');
		add_label_1.innerHTML = "Here goes the text";
		add_label_2.setAttribute("for",'id_from');
		add_label_2.innerHTML = "Here goes the text";
		
		add_input.setAttribute("type", "date");
		add_input.setAttribute("name", "date_max");
		
		add_form.appendChild(add_label_1);
		add_form.appendChild(add_input);
		add_form.appendChild(add_label_2);
		add_form.appendChild(add_input);
		select_field.appendChild(add_form);
	}
	switch (period) {
		case "biezacy_miesiac":
		  alert("Sunday");
		  break;
		case "poprzedni_miesiac":
		  alert("Monday");
		  break;
		case "biezacy_rok":
			{
				for (i = 0; i < tr.length; i++) {
					td = tr[i].getElementsByTagName("td")[2];
					if (td) {
					  txtValue = td.textContent || td.innerText;
					  day = txtValue.substring(0, 2);
					  month = txtValue.substring(3, 5);
					  year = txtValue.substring(6, 10);
					  
					  if (year < end_year) 
					  {
						  tr[i].style.display = "none";
					  } 
					  else 
					  {
						  if (month == end_month)
						  {
							  if (day > end_day)
							  {
								  tr[i].style.display = "none";
							  }
						  }
						  else
						  {
							  if (month < end_month - 1)
							  {
								  tr[i].style.display = "none";
							  }
							  else
							  {
								  if (day < end_day)
								  {
									  tr[i].style.display = "none";
								  }
							  }
						  }
					  }
					}
				}
			};
		  break;
		case "niestandardowy":
			{
				var add_form = document.createElement("form");
				var add_label_1 = document.createElement("label");
				var add_label_2 = document.createElement("label");
				var add_input = document.createElement("input");
				var row = table.insertRow(0);
		
				add_form.setAttribute("id", "new_form");
				add_label_1.setAttribute("for",'id_from_input');
				add_label_1.innerHTML = "Here goes the text";
				add_label_2.setAttribute("for",'id_from');
				add_label_2.innerHTML = "Here goes the text";
				
				add_input.setAttribute("type", "date");
				add_input.setAttribute("name", "date_max");
				
				add_form.appendChild(add_label_1);
				add_form.appendChild(add_input);
				add_form.appendChild(add_label_2);
				add_form.appendChild(add_input);
				select_field.appendChild(add_form);
			}
		  break;
	  }
}

