var $allCases = $('.caseNumDiv span');
var $myCaseP = $('.myCaseDiv p');
var $allCaseValue = $('#allCaseValue td');
var $actionReq = $('#actionReq');
var $offerAmount = $('#offerAmount');
var $buttons = $('button');
var $dealBtn = $('#dealBtn');
var $nodealBtn = $('#nodealBtn');
var caseAmount = [0.1, 1, 5, 10, 25, 50, 75, 100, 200, 300, 400, 500, 750, 1000, 5000, 10000, 25000, 50000, 75000, 100000, 200000, 300000, 400000, 500000, 750000, 1000000];
var caseCount = 0, casesLeft = 26;
var myCaseNum, myCaseAmount, bankOffer = 200000, total=0, potMoney;
var flag='Y';
//Shuffle array for each game
caseAmount.sort(function () {
    return .5 - Math.random();
});

// Init Game
initGame();

// Init case value
initCasesValue();

// Init case value
function initCasesValue() {
    // debugger
    // For each case, set case value = random caseAmount value 
    $allCases.each(function (index) {
        $(this).attr('value', caseAmount[index]);
        // set random value for each case from 0 to 25
        //    $(this).attr('value', Math.floor(Math.random() * 25) + 0  );
        // alert($(this).attr('id'));
        //    alert($('#case1').attr('value'));

    });


}
function initGame() {
    $actionReq.text('Please choose your case');
    //cal total
    for (var i = 0; i < caseAmount.length; i++) {
        total += caseAmount[i];
    }
    potMoney = total;
}

function pickCase(){
    
}
function bankOfferCal(caseVal, n) {
    debugger
    // potMoney = potMoney - caseVal;
    var avgMoney = potMoney / casesLeft;
    switch (n) {
        case 7:
            bankOffer = avgMoney * 1 / 10
            break;
        case 12:
            bankOffer = avgMoney * 2 / 10
            break;
        case 16:
            bankOffer = avgMoney * 3 / 10
            break;
        case 19:
            bankOffer = avgMoney * 4 / 10
            break;
        case 21:
            bankOffer = avgMoney * 5 / 10
            break;
        case 22:
            bankOffer = avgMoney * 6 / 10
            break;       
        case 23:
            bankOffer = avgMoney * 7 / 10
            break;
        case 24:
            bankOffer = avgMoney * 8 / 10
            break;
        case 25:
            bankOffer = avgMoney * 0.5
            break;
        default:
        //do nothing
    }
return bankOffer;
}

// Click on case event
$allCases.click(function () {

    debugger
    //get clicked case value
    var caseValue = $(this).attr('value');

    if (flag == 'N') return;
    if ($(this).attr('class') == 'clicked') return;
    // increment number of cases when click
    ++caseCount;
    --casesLeft;
    potMoney = potMoney - caseValue;
    // button disable
    $buttons.attr("disabled", "disabled");
    // When case is selected, remove case from the board
    $(this).addClass("clicked");

    if (caseCount != 1) {
        //loop through all cases value (table's tds)
        for (var i = 0; i < $allCaseValue.length; i++) {

            // convert td's dollar format to numbers
            var rawCaseValue = Number($allCaseValue.eq(i).text().replace(/[^0-9\.-]+/g, ""));

            // if picked case value = td's value, cross out td's value
            if (caseValue == rawCaseValue) {
                $allCaseValue.eq(i).addClass("picked");
            }
        }
    }
    // my first case

    if (caseCount == 1) {
        myCaseNum = $(this).text();
        myCaseAmount = $(this).attr('value');
        $myCaseP.text(myCaseNum);
        $actionReq.text('Now select 5 cases')
        alert("You choose case " + myCaseNum + ". Now please pick 6 cases to eleminate");
        // console.log(temp);
    }

    else if (caseCount == 7) {
        bankOfferCal(caseValue, caseCount);
        $offerAmount.text(bankOffer);
        $buttons.removeAttr("disabled");
        flag = 'N'
        // alert("Your bank offer " + bankOffer );
    }

    else if (caseCount == 12) {
        bankOfferCal(caseValue, caseCount);
        $offerAmount.text(bankOffer);
        $buttons.removeAttr("disabled");
        flag = 'N'
        // alert("Your bank offer " + bankOffer );
    }

    else if (caseCount == 16) {
        bankOfferCal(caseValue, caseCount);
        $offerAmount.text(bankOffer);
        $buttons.removeAttr("disabled");
        flag = 'N'
        // alert("Your bank offer " + bankOffer );
    }

    else if (caseCount == 19) {
        bankOfferCal(caseValue, caseCount);
        $offerAmount.text(bankOffer);
        $buttons.removeAttr("disabled");
        flag = 'N'
        // alert("Your bank offer " + bankOffer );
    }

    else if (caseCount == 21) {
        bankOfferCal(caseValue, caseCount);
        $offerAmount.text(bankOffer);
        $buttons.removeAttr("disabled");
        flag = 'N'
        // alert("Your bank offer " + bankOffer );
    }

    else if (caseCount == 22) {
        bankOfferCal(caseValue, caseCount);
        $offerAmount.text(bankOffer);
        $buttons.removeAttr("disabled");
        flag = 'N'
        // alert("Your bank offer " + bankOffer );
    }

    else if (caseCount == 23) {
        bankOfferCal(caseValue, caseCount);
        $offerAmount.text(bankOffer);
        $buttons.removeAttr("disabled");
        flag = 'N'
        // alert("Your bank offer " + bankOffer );
    }

    else if (caseCount == 24) {
        bankOfferCal(caseValue, caseCount);
        $offerAmount.text(bankOffer);
        $buttons.removeAttr("disabled");
        flag = 'N'
        // alert("Your bank offer " + bankOffer );
    }

    else if (caseCount == 25) {
        bankOfferCal(caseValue, caseCount);
        $offerAmount.text(bankOffer);
        $buttons.removeAttr("disabled");
        flag = 'N'
        // alert("Your bank offer " + bankOffer );
    }
    else {
        //do nothing
    }

});

$dealBtn.click(function () {
    alert("You made a deal - your case value is " + myCaseAmount);
})


$nodealBtn.click(function () {
    flag='Y';
    $offerAmount.text('');
    if (caseCount == 7)
    { $actionReq.text('Now select 5 cases to eliminate')}
    if (caseCount == 12)
    { $actionReq.text('Now select 4 cases to eliminate')}
    if (caseCount == 16)
    { $actionReq.text('Now select 3 cases to eliminate')}
    if (caseCount == 19)
    { $actionReq.text('Now select 2 cases to eliminate')}
    if (caseCount == 21)
    { $actionReq.text('Now select 1 case to eliminate')}
    if (caseCount == 23)
    { $actionReq.text('Now select 1 case to eliminate')}
    if (caseCount == 24)
    { $actionReq.text('Now select 1 case to eliminate')}
    if (caseCount == 25)
    { 
        var answer = confirm("Do you want to swap your case?")
    if (answer) {
        $actionReq.text('Your swap case value is ' )
    }
    else {
        $actionReq.text('Your case value is ' + myCaseAmount)
    }}
})