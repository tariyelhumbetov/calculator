var operant1 = "";
var operant2 = "";
var operator = "";
var cavab = "";




$(".num").on("click", function () {
    if (cavab) {
        return
    }
    else if (operator !== "") {
        operant2 += this.value
    } else {
        operant1 += this.value
    }
    $(".calc").html(operant1 + operator + operant2)
})

$(".operator").on("click", function () {
    operator = this.value
    $(".calc").html(operant1 + operator + operant2);


})


$(".c").on("click", function () {
    operant1 = "";
    operant2 = "";
    operator = "";
    cavab = "";
    $(".calc").html("")
    $(".result").html("")

})

$(".equal").on("click", function () {
    console.log(operant1);
    console.log(operant2);
    console.log(operator);
    if (operator == "/") {
        cavab = parseInt(operant1)/parseInt(operant2);
        $(".result").html(cavab)
    }else if(operator === "*") {
        cavab = parseInt(operant1)*parseInt(operant2);
        $(".result").html(cavab)
    }else if(operator==="+"){
        cavab=parseInt(operant1)+parseInt(operant2);
        $(".result").html(cavab)
    }else if(operator ==="-"){
        cavab=parseInt(operant1)-parseInt(operant2);
        $(".result").html(cavab)
    }
})
