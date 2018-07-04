
$case = $('.caseNumDiv span');
debugger
$myCase = $('.myCaseDiv p');

$case.click(function(){
    debugger
    $(this).addClass("clicked");
    // $myCase.innerText="test";
    alert($myCase.id);
})
