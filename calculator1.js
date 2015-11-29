function Calculator(ID) {	
	//html
	//显示栏
	var main = document.getElementById(ID);
	var textbox = document.createElement("input");
		//textbox.style.width = 320 + "px";
		//textbox.style.height = 50 + "px";
		//textbox.style.textAlign = "right";
		//textbox.style.fontSize = 20 + "px";
		//textbox.style.color = "#666";
		textbox.setAttribute("id","result");
		textbox.setAttribute("type","button");
		textbox.setAttribute("value","0");
	main.appendChild(textbox);
	//创建table
	var Table = document.createElement("table");
	main.appendChild(Table);
	//前三行
	var i,j,k;
	var row = new Array(),column = new Array(),button = new Array();
	for(i=0;i<3;i++)
	{
		row[i] = document.createElement("tr");
		//row[i].style.width = 300 + "px";
		//row[i].style.height = 50 + "px";
		Table.appendChild(row[i]);
		for(j=0,k=i*5;j<5;j++)
		{
			column[k] = document.createElement("td");
			//column[k].style.width = 60 + "px";
			//column[k].style.height = 50 + "px";
			row[i].appendChild(column[k]);
			button[k] = document.createElement("input");
			button[k].setAttribute("type","button");
			//button[k].style.width = 60 + "px";
			//button[k].style.height = 50 + "px"
			column[k].appendChild(button[k]);
			k++;
		}
	}
	//第四行
	row[3] = document.createElement("tr");
	//row[3].style.width = 300 + "px";
	//row[3].style.height = 50 + "px";
	Table.appendChild(row[3]);
	for(j=0,k=15;j<5;j++)
	{
		column[k] = document.createElement("td");
		//column[k].style.width = 60 + "px";
		//column[k].style.height = 50 + "px";
		row[3].appendChild(column[k]);
		button[k] = document.createElement("input");
		button[k].setAttribute("type","button");
		//button[k].style.width = 60 + "px";
		//button[k].style.height = 50 + "px";
		column[k].appendChild(button[k]);
		k++;
	}
	column[19].setAttribute("colspan","2");
	button[19].setAttribute("id","equal");
	//column[19].style.height = 100 + "px";
	//button[19].style.height = 100 + "px";
	//第五行
	row[4] = document.createElement("tr");
	//row[4].style.width = 300 + "px";
	//row[4].style.height = 50 + "px";
	Table.appendChild(row[4]);
	for(j=0,k=20;j<3;j++)
	{
		column[k] = document.createElement("td");
		//column[k].style.width = 60 + "px";
		//column[k].style.height = 50 + "px";
		row[4].appendChild(column[k]);
		button[k] = document.createElement("input");
		button[k].setAttribute("type","button");
		//button[k].style.width = 60 + "px";
		//button[k].style.height = 50 + "px"
		column[k].appendChild(button[k]);
		k++;
	}
	column[20].setAttribute("rowspan","2");
	button[20].setAttribute("id","zero");
	//column[20].style.width = 120 + "px";
	//button[20].style.width = 120 + "px";

	//赋值name
	var names = new Array("back","CE","C","sign","root","seven","eight","nine","divide","percent","four","five","six","time","dao","one","two","three","minus","equal","zero","dot","plus");
	//赋值value
	var values = new Array("<--","CE","C","±","√","7","8","9","/","%","4","5","6","*","1/x","1","2","3","-","=","0",".","+");
	for(k=0;k<23;k++)
	{	
		button[k].name=names[k];
		button[k].value=values[k];
	}
	//调用函数
	// var functions = new Array("back(this)","clearone(this)","clear(this)","sign(this)","sqrt(this)","numGet(this)","numGet(this)","numGet(this)","countGet(this)","countGet(this)","numGet(this)","numGet(this)","numGet(this)","countGet(this)","reciprocal(this)","numGet(this)","numGet(this)","numGet(this)","countGet(this)","equal(this)","numGet(this)","countGet(this)")
	// for(k=0;k<23;k++)
	// 	button[k].onclick = function(){functions[k]};
}
	
	