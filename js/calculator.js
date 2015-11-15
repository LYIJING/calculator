var second = "";
var first = "";
var count = "";
var flag = 0;//第一次操作
var afer = 0;//上一次计算得到结果后直接按的按数为第一操作数

function num(obj)
{	
	second = second+obj.value;
	document.getElementById("result").innerHTML = second;
}

function countg(obj)//改变存储操作数
{
	if(flag == 0)
	{
		first = second;
		second = "";
		count = obj.value;
	}

	if(flag == 1)
	{
		second = "";
		count = obj.value;
	}
}

function equal()
{
	if(count == "+")
	{
		first = (first-0) + (second-0);
		document.getElementById("result").innerHTML = first;
		flag = 1;
		after = 1;
	}

	if(count == "-")
	{
		first = (first-0) - (second-0);
		document.getElementById("result").innerHTML = first;
		flag = 1;
	}

	if(count == "*")
	{
		first = (first-0) * (second-0);
		document.getElementById("result").innerHTML = first;
		flag = 1;
	}

	if(count == "/")
	{
		first = (first-0) / (second-0);
		document.getElementById("result").innerHTML = first;
		flag = 1;
	}

	if(count == "%")
	{
		first = (first-0) % (second-0);
		document.getElementById("result").innerHTML = first;
		flag = 1;
	}
	
}

