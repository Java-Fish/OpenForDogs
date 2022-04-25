$(document).ready(function(){
$("#tableSearch").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#restaurantTableBody tr").filter(function() {
    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
});
});
