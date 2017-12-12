// Slowly fade in image (5 seconds) and then slide it up (2 seconds).
   $().ready(function() {
   $("#splash").fadeIn(500).fadeOut(1000);

    $('.search-panel .dropdown-menu').find('a').click(function(e) {
     e.preventDefault();
     var param = $(this).attr("href").replace("#","");
     var concept = $(this).text();
    $('.search-panel span#search_concept').text(concept);
    $('.input-group #search_param').val(param);
     });
   });