$(function(){

    $("#go").on("click", function(event) {
        event.preventDefault();
    
        $("#apples").removeClass("d-none");
        $("#apples").text($("#lname").val() + " " + $("#fname").val());
      
        return false;
    })

    });