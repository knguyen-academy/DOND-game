var $allCases = $('.caseNumDiv span');
var $myCaseP= $('.myCaseDiv p');
var $allCaseValue=$('#allCaseValue td');

var caseAmount = [0.1,1,5,10,25,50,75,100,200,300,400,500,750,1000,5000,10000,25000,50000,75000,100000,200000,300000,400000,500000,750000,1000000];   
var caseCount =0;
var myCaseNum, myCaseAmount;

//Shuffle array for each game
caseAmount.sort(function() {
    return .5 - Math.random();
  });

// Init case value
initCasesValue();

// Init case value
function initCasesValue()
{
    debugger
    // For each case, set case value = random caseAmount value 
    $allCases.each(function(index) {
        $(this).attr('value', caseAmount[index]);
    // set random value for each case from 0 to 25
    //    $(this).attr('value', Math.floor(Math.random() * 25) + 0  );
    // alert($(this).attr('id'));
    //    alert($('#case1').attr('value'));
        
      });
  
}

$allCases.click(function(){
    debugger
    var caseValue = $(this).attr('value');
    // increment number of picked cases
    caseCount++;
    
    // When case is selected, remove case from the board
    $(this).addClass("clicked");

    // my first case
    if (caseCount == 1)
    {
        myCaseNum = $(this).text();
        myCaseAmount =$(this).attr('value');
        $myCaseP.text(myCaseNum);
    // console.log(temp);
    }

    $allCaseValue.each(function(index){
    if (caseValue == $(this).attr('value'))
        {   
            $(this).addClass("picked");
        }
    });

   
    
})
