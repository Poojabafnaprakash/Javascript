const mental_Threshold = 100.00
const tax_rate = 0.10
const phone_cost = 300.00;
const accessory_price = 30.00

var acc_balance = 500.00
var money = 0;

function cal_tax(amt)
{
	return amt * tax_rate;
}

function formatToDolar(amt)
{
	return "$" + amt.toFixed(2);
}


while(money < acc_balance)
{
	money = money + phone_cost;

	if (money < mental_Threshold)
		money += accessory_price;

}

money = money + cal_tax(money);

console.log(formatToDolar(money));

if(money > acc_balance)
{
	console.log("Cost of the phone is more than expected");
}