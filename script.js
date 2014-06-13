"use strict";

$(document).ready(function() {
    
    function deleteAllToDoItems()
    {
        // Find todo contains and remove  the contents
        $('.allTodos').empty();
    }

    // create click handler for deleteAll
    $("#deleteAll").click(function(){
        deleteAllToDoItems();
    });

    function buildTodoListItem(todoText) {
        // create empty li
        var li = $('<li></li>');
        li.addClass('listItem');

        // create span for input
        var todoSpan = $('<span></span>');
        todoSpan.addClass('dotodo');
        todoSpan.text(todoText);
        li.append(todoSpan);

        // create trash can image
        var trashcan = $('<img>');
        trashcan.attr("src", "http://png-5.findicons.com/files/icons/2226/matte_basic/32/trash_can1.png");

        // append trash can to li
        li.append(trashcan);

        return li;
    };


    $('#addItem').click(function(e){

        // preventing page refresh
        e.preventDefault();

        // get user input from form
        var userInput = $("#todoItem").val();

        // clear user input
        $("#todoItem").val("");

        // append li to allTodos container
        $(".allTodos").append(buildTodoListItem(userInput));
    });
      
    $(".allTodos").delegate("li", "click", function(){
        $(this).toggleClass("todo_done");
    });

    $(".allTodos").delegate("img", "click", function(e){
        $(e.target).parent().remove();
    });

});