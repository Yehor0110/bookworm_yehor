
var periodic = document.getElementById("cleaning-1");
console.log(periodic);
var oneTime = document.getElementById("cleaning-2");
console.log(oneTime);
var endOfLease = document.getElementById("cleaning-3");
console.log(endOfLease);

var sum_cleaning = document.getElementById("sum_cleaning");

botton.addEventListener("submit", calculator);

function calculator() {
	var price = 0;
	price += parseInt(periodic.checked == true.dataTimeBedrooms);
	price += parseInt(oneTime.checked == true.dataTimeBedrooms);
	price += parseInt(endOfLease.checked == true.dataTimeBedrooms);
 
   result.innerHTML = price;

}
