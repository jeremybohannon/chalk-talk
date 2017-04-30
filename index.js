// When the document is ready..
$(document).ready(function(){
  //When the main image is hovered over
  $('#homebrian').hover(function(){
      //On hover set the image with the height and width
      var image = $(this);
      var width = image.width();
      var height = image.height();
      //set the images new height and width +20
      image.css('width', width + 20);
      image.css('height', height + 20);
    },
    function(){
      //On hover out set the image with the height and width
      var image = $(this);
      var width = image.width();
      var height = image.height();
      //set the images new height and width -20
      image.css('width', width - 20);
      image.css('height', height - 20);
    })
})
