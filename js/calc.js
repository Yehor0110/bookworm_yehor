
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
   price += parseInt(cleaning.checked == true.dataTimeBedrooms);
   price += (is_html.checked == true) ? parseInt(is_html.value) : 0;
   price = parseInt(count.value) * price;
 
   result.innerHTML = price;

}