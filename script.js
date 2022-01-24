function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    if(principal == '') {
        alert('Please enter a positive number for your amount');
        document.getElementById("principal").focus();
    } else if (principal <= 0) {
        alert('Please enter a value above zero the calculator only works for positive values')
        document.getElementById("principal").focus();
    } else{
        document.getElementById("result").innerHTML="\<br\>\<br\> If you deposit "+ "<span class='highlight'>" + principal + "</span>" + ",\<br\>at an interest rate of "+ "<span class='highlight'>" +rate+ "%</span>" + "\<br\>You will receive an amount of "+ "<span class='highlight'>" +interest+ "</span>" + ",\<br\>in the year " + "<span class='highlight'>" +year+ "</span>" + "\<br\>\<br\>";

}
};

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
};