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

    //filtrando comida segun su valor de categoria
      var catProduct = $(this).attr('category');
      console.log(catProduct);

     $('.category-item').removeClass('item-active');
     $(this).addClass('item-active');
  

     //ocultando comida     
    $('.product-item').css('transform', 'scale(0)');

    function hideFood () {
     $('.product-item').hide();
     } setTimeout(hideFood, 400);

     //mostrando comida segun categoria
     function showFood() {
      $('.product-item[category="'+catProduct+'"]').show();
      $('.product-item[category="'+catProduct+'"]').css('transform', 'scale(1)');
    } setTimeout(showFood, 400);
       
    

     //mostrar todos los productos en boton de "todos"
      $('.category-item[category="all"]').click(function(){
      $('.product-item').show();
      });

      });
   });

     

