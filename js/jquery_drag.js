$(function() {
  $( "#sortable" ).sortable({ revert: true,
    update: function( event, ui ) {
        var basketItems = $(this).sortable('toArray').toString();
     $.jnotify(basketItems, 5000);
        //alert(basketItems);
        //$.get('updatebasket.cfm', {basketItems:basketItems});
    }

  })//.draggable({
    //connectToSortable: "#trash-can",
    ////helper: "clone",
    //snap: true,
    //revert: "invalid"

  //});


  $("#trash-can").droppable({
     hoverClass: "droppable-hover",
     drop: function ( event, ui) {
     //$(this).append(ui.draggable);

        var element = ui.draggable;
        $(this).append(element);
        //element.fadeOut(1000);
        //$(ui.draggable).remove();
         $(ui.draggable).fadeOut(10);
  /*
        var element = $(ui.draggable).clone();
        $(this).append(element);
        element.fadeOut(1000);
        $(ui.draggable).remove();
 */            
     }
  });

  $( ".draggable" ).draggable({
    connectToSortable: "#sortable",
    helper: "clone",
    revert: "invalid"
  });


  $( "ul, li, .draggable, .boxe, .sortable" ).disableSelection();
    
});