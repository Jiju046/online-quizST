

// refactored
function handleChangeRight(list,image,result,liDisable,checkbox,resultRemove){
    $(`#${image}`).attr("src","./images/check.png")
    $(`#result${result}`).html("Correct!")
    $(`#result${result}`).css("color","green")
    $(`#li-${list}`).css("background-color","#D0F5BE")
    console.log("hi");
    // disable click
    $(`.l-${liDisable}`).removeAttr("id")
    $(`.check-box${checkbox}`).removeAttr("id")
    $(`.result${resultRemove}`).removeAttr("id")

}
function handleChangeWrong(list,image,result,liDisable,checkbox,resultRemove,right){
    $(`#${image}`).attr("src","./images/wrong.png")
    $(`#${right}`).attr("src","./images/check.png")
    $(`#result${result}`).html("Wrong!")
    $(`#result${result}`).css("color","red")
    $(`#li-${list}`).css("background-color","#FF6666")
    // disable click
    $(`.l-${liDisable}`).removeAttr("id")
    $(`.check-box${checkbox}`).removeAttr("id")
    $(`.result${resultRemove}`).removeAttr("id")
}

