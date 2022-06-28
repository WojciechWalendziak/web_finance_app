
function start()
{
	var income_table, expence_table, income_td, expence_rows, income_rows, expence_td, txtValue, day = 0, month = 0, year = 0, end_year = 0, end_month = 0, end_day = 0, rows, not_sorted, i, x, y, sort_action, sum_row, period, period_string, cell_one, cell_two;
	var today = new Date()

	income_table = document.getElementById("income_Table");
	not_sorted = true;
	while (not_sorted) {
		not_sorted = false;
		income_rows = income_table.rows;
		for (i = 1; i < (income_rows.length - 1); i++) {
		sort_action = false;
		x = income_rows[i].getElementsByTagName("td")[1];
		y = income_rows[i + 1].getElementsByTagName("td")[1];
		if (Number(x.innerHTML) > Number(y.innerHTML)) {
			sort_action = true;
			break;
		}
		}
		if (sort_action) {
			income_rows[i].parentNode.insertBefore(income_rows[i + 1], income_rows[i]);
			not_sorted = true;
		}
	}
	income_sum_row = income_table.insertRow(income_rows.length);
	total_income = 0;
	for (i = 1; i < (income_rows.length - 1); i++) {
		x = income_rows[i].getElementsByTagName("td")[1];
		total_income = total_income + Number(x.innerHTML);
	}
	cell_one = income_sum_row.insertCell(0);
	cell_two = income_sum_row.insertCell(1);
	cell_one.innerHTML = "TOTAL INCOME";
	cell_two.innerHTML = total_income;
	expence_table = document.getElementById("expence_Table");
	not_sorted = true;
	while (not_sorted) {
		not_sorted = false;
		expence_rows = expence_table.rows;
		for (i = 1; i < (expence_rows.length - 1); i++) {
			sort_action = false;
			x = expence_rows[i].getElementsByTagName("td")[1];
			y = expence_rows[i + 1].getElementsByTagName("td")[1];
			if (Number(x.innerHTML) > Number(y.innerHTML)) {
				sort_action = true;
				break;
			}
		}
		if (sort_action) {
			expence_rows[i].parentNode.insertBefore(expence_rows[i + 1], expence_rows[i]);
			not_sorted = true;
		}
	}
	expence_sum_row = expence_table.insertRow(expence_rows.length);
	total_expence = 0;
	for (i = 1; i < (expence_rows.length - 1); i++) {
		x = expence_rows[i].getElementsByTagName("td")[1];
		total_expence = total_expence + Number(x.innerHTML);
	}
	cell_one = expence_sum_row.insertCell(0);
	cell_two = expence_sum_row.insertCell(1);
	cell_one.innerHTML = "TOTAL EXPENCE";
	cell_two.innerHTML = total_expence;

	end_year = today.getFullYear();
	end_month = today.getMonth()+1;
	end_day = today.getDate();

	select_field = document.getElementById("select_field").value;
	period = document.getElementById("period").value;
	period_string = String(period);
	
	switch (period) {
		case "biezacy_miesiac":
			{
				for (i = 0; i < expence_rows.length; i++) {
					expence_td = expence_rows[i].getElementsByTagName("td")[2];
					if (expence_td) {
						txtValue = expence_td.textContent || expence_td.innerText;
						day = Number(txtValue.substring(0, 2));
						month = Number(txtValue.substring(3, 5));
						year = Number(txtValue.substring(6, 10));
						if (year < end_year) 
						{
							expence_rows[i].style.display = "none";
						} 
						else 
						{ if(end_month != month)
							{
								expence_rows[i].style.display = "none";
							}
						}
					  }
					}
				for (i = 0; i < income_rows.length; i++) {
					income_td = income_rows[i].getElementsByTagName("td")[2];
					if (income_td) {
					  txtValue = income_td.textContent || income_td.innerText;
					  day = Number(txtValue.substring(0, 2));
					  month = Number(txtValue.substring(3, 5));
					  year = Number(txtValue.substring(6, 10));
					  if (income_td) {
						txtValue = income_td.textContent || income_td.innerText;
						day = Number(txtValue.substring(0, 2));
						month = Number(txtValue.substring(3, 5));
						year = Number(txtValue.substring(6, 10));
						if (year < end_year) 
						{
							income_rows[i].style.display = "none";
						} 
						else 
						{ if(end_month != month)
							{
								income_rows[i].style.display = "none";
							}
						}
					  }
					}
				}
			};
		  break;
		case "poprzedni_miesiac":
			{
				for (i = 0; i < expence_rows.length; i++) {
					expence_td = expence_rows[i].getElementsByTagName("td")[2];
					alert(expence_td.innerHTML);
					if (expence_td) {
					  txtValue = expence_td.textContent || expence_td.innerText;
					  day = Number(txtValue.substring(0, 2));
					  month = Number(txtValue.substring(3, 5));
					  year = Number(txtValue.substring(6, 10));
					  if (year < end_year && end_month != 1) 
					  {
						expence_rows[i].style.display = "none";
					  } 
					  else 
					  { if(end_month == 1)
						{
							if (month == 12)
							{
								if (day < end_day)
								{
									expence_rows[i].style.display = "none";
								}
							}
							else{
								if (month < 12)
								{
									expence_rows[i].style.display = "none";
								}
							}
						}
						else
						{
							if (month == end_month - 1)
							{
								if (day < end_day)
								{
									expence_rows[i].style.display = "none";
								}
							}
							else
							{
								if (month < end_month - 1)
								{
									expence_rows[i].style.display = "none";
								}
							}
						}
					  }
					}
				}
				for (i = 0; i < income_rows.length; i++) {
					income_td = income_rows[i].getElementsByTagName("td")[2];
					if (income_td) {
					  txtValue = income_td.textContent || income_td.innerText;
					  day = Number(txtValue.substring(0, 2));
					  month = Number(txtValue.substring(3, 5));
					  year = Number(txtValue.substring(6, 10));
					  alert("jest");
					  if (year < end_year && month != 1) 
					  {
						income_rows[i].style.display = "none";
					  } 
					  else 
					  {
						  if (month == end_month)
						  {
							  if (day > end_day)
							  {
								income_rows[i].style.display = "none";
							  }
						  }
						  else
						  {
							  if (month < end_month - 1)
							  {
								income_rows[i].style.display = "none";
							  }
							  else
							  {
								  if (day < end_day)
								  {
									income_rows[i].style.display = "none";
								  }
							  }
						  }
					  }
					}
				}
			};
		  break;
		case "biezacy_rok":
			{
				for (i = 0; i < expence_rows.length; i++) {
					expence_td = expence_rows[i].getElementsByTagName("td")[2];
					if (expence_td) {
					  txtValue = expence_td.textContent || expence_td.innerText;
					  day = Number(txtValue.substring(0, 2));
					  month = Number(txtValue.substring(3, 5));
					  year = Number(txtValue.substring(6, 10));
					  if (year < end_year - 1) 
					  {
						expence_rows[i].style.display = "none";
					  } 
					  else 
					  {
						if(year == end_year - 1)
						  if (month == end_month)
						  {
							  if (day < end_day)
							  {
								expence_rows[i].style.display = "none";
							  }
						  }
						  else
						  {
							  if (month < end_month)
							  {
								expence_rows[i].style.display = "none";
							  }
						  }
					  }
					}
				}
				for (i = 0; i < income_rows.length; i++) {
					income_td = income_rows[i].getElementsByTagName("td")[2];
					if (income_td) {
					  txtValue = income_td.textContent || income_td.innerText;
					  day = Number(txtValue.substring(0, 2));
					  month = Number(txtValue.substring(3, 5));
					  year = Number(txtValue.substring(6, 10));
					  if (year < end_year - 1) 
					  {
						expence_rows[i].style.display = "none";
					  } 
					  else 
					  {
						if(year == end_year - 1)
						  if (month == end_month)
						  {
							  if (day < end_day)
							  {
								expence_rows[i].style.display = "none";
							  }
						  }
						  else
						  {
							  if (month < end_month)
							  {
								expence_rows[i].style.display = "none";
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

