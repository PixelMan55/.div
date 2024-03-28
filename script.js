let num = document.getElementById("amount")



function clickOne() {
num.innerHTML = Number(num.innerHTML)+1;
if (Number(num.innerHTML) >= 50) {
    document.getElementById("button5Div").style.display = "flex"
    
}
}
function clickTwo() {
    num.innerHTML = Number(num.innerHTML)-1;
    }
    function clickplus5() {
        num.innerHTML = Number(num.innerHTML)+5;
        }
        function clickminus5() {
            num.innerHTML = Number(num.innerHTML)-5;
            }

