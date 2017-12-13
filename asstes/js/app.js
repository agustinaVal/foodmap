// Slowly fade in image (5 seconds) and then slide it up (2 seconds).
   $(document).ready(function() {
   $("#splash").fadeIn(500).fadeOut(1000);

    $('.search-panel .dropdown-menu').find('a').click(function(e) {
     e.preventDefault();

     var param = $(this).attr("href").replace("#","");
     var concept = $(this).text();
    $('.search-panel span#search_concept').text(concept);
    $('.input-group #search_param').val(param);
     });


    
     
    //agregar la clase active al primer enlace
     $('.categoryList .category-item[category="all"]').addClass('.item-active');


     $('.category-item').click(function(){

      var catProduct = $(this).attr('category');
      console.log(catProduct);

     $('.category-item').removeClass('item-active');
     $(this).addClass('item-active');
  

     //ocultando comida
     $('.product-item').hide();

     //mostrando comida segun categoria
     $('.product-item[category="'+catProduct+'"]').show();

      });
   });

     

