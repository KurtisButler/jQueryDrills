$(document).ready(function () {
  let $element = $("#btnSubmit");
  let $input = $("input[type='text']");
  let $list = $("<ul></ul>")
$('body').append('<div id="theDiv"><div/>');
$("body").append($list)




  $("#btnSubmit").on("click", function (event) {
      
    
    
  });

  $element.attr("disabled",true);

  $input.keyup(function () {
   if ($input.val() == ""){
    $element.attr("disabled", true);
   } else {
       $element.attr("disabled", false);
   }
  });



  $element.on("click", notify);
  function notify(event){event.preventDefault()

let listItem = $("<li></li");
$list.text($input.val());

    // alert("Button has been clicked");
    // let newH2 = $("<h2>" + $("#inputText").val() + "</h2>");
    // $("#theDiv").append(newH2);
    // newH2.mouseover(function(event) {
    //     console.log(event);
    //         $(event.target).css({'background-color': "purple", 'border-radius': '10px'});
    //   });
}




});
