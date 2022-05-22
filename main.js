//Search function for tables
$(document).ready(function(){
$("#tableSearch").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#restaurantTableBody tr").filter(function() {
    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
});
});

// Tooltip pop up
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
});

// CSV format table export
$('#restaurantTable').tableExport({type:'csv'});