README.md

Java Script / Jqeury Event Handlers

Event Handlers-
http://www.elijahmanor.com/differences-between-jquery-bind-vs-live-vs-delegate-vs-on/

http://api.jquery.com/category/events/form-events/

.bind() - This type of event handler registers directly to DOM element.  It will be attached to all elements that match the selector used on it. It is basically a long version of .click()
.bind() can work across various browsers and can be fast as it works on individual selectors. However, it does not work on elements added dynamically,  and has performance concerns with large numbers of elements, because it fires individually.  Meaning .bind() is called over and over again for each item it matches. Because it is loaded upfront, it can cause problems with reloading. 

$("p").bind("click",function(){
  alert("The paragraph was clicked.");
});

Documentation- http://api.jquery.com/bind/
                http://www.w3schools.com/Jquery/event_bind.asp


.delegate() - Instead of attaching information the selector or event information to the document you can choose where it is anchored.  It uses delegation which allows you to attach a single event listener to a parent element that will fire all decendants matching the selector, whether they exist now or in the future. Meaning that they can be added dynamically. 

.delegate() does support chaining.  It still itereates over a selector or event like .bind().  Because, you can be more specific about where it roots. There is often less data to sort through. .delegate() can work dynamically and can be wired-up before document ready.

$( "table" ).delegate( "td", "click", function() {
  $( this ).toggleClass( "chosen" );
});
Event delegation explained-
http://learn.jquery.com/events/event-delegation/

http://api.jquery.com/delegate/

.on() - .bind() .live() and .delegate() are one liners for the .on() function.  Those all use .live()under the covers.   .on() can be called in several different ways that determine its preformance.  This makes it an overloaded and its behavoir less specific.  It does however bring uniformity to your JQuery code.

$(document).on(event, selector, function(){ //do stuff here })


.aniamte - allows you to set certain animations with Jquery
    

  $("button").click(function(){
  $("#box").animate({height:"300px"});
  });  

  http://www.w3schools.com/Jquery/eff_animate.asp

  http://www.w3schools.com/Jquery/tryit.
  asp?filename=tryjquery_eff_animate



.slideToggle- Allows you to open an html area/box by clicking it.  There is also a simple  .slideDown() and .slideUp() handler but the slideToggle allows you to open and close the space. 

http://www.w3schools.com/Jquery/jquery_slide.asp

.attr() - gets the value of the first element in the set of matched elements. 
.addClass- adds specific clsses to the matched elements.


