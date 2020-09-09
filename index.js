$(function(){
    $("#go").on("click", function(event) {
        event.preventDefault();
    
        $("#apples").text($("#lname").val() + " " + $("#fname").val());
        $("#apples").removeClass("d-none");
        return false;
    })

    });
// if both first and last name are filled then submit 
// make the jumbotron last,first below the text fields
// need to access button id (if clicked) then submit 
// into the vars listed here and display as jumbotext