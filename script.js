"use strict";

$(document).ready(function() {
    
    $('#addItem').click(function(e){
        e.preventDefault();
     
        var userInput = $("#todoItem").val();
      
        $("#todoItem").val("");
        
        var li = $('<li class="listItem"></li>');
        li.append('<span class="dotodo">' + userInput + '</span>');
        var img = $('<img src="http://png-5.findicons.com/files/icons/2226/matte_basic/32/trash_can1.png">');
        li.append(img);
        $(".allTodos").append(li);
    });
      
    $(".allTodos").delegate("li", "click", function(){
        $(this).toggleClass("todo_done");
    });

    $(".allTodos").delegate("img", "click", function(e){
        $(e.target).parent().remove();
    });

});