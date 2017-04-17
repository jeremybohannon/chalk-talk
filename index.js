$(document).ready(function(){
  var images = $('.mySlides');
  var dots = $('.dot');

  var imageIndex = 1;

  var defaultColor = 'rgba(30, 140, 150, 0.23)';
  var highlightColor = '#00b7c8';

  var numOfImages = images.length;

  showImage(imageIndex);

  $('#leftButton').click(function(){
    showImage(imageIndex -= 1);
  });

  $('#rightButton').click(function(){
    showImage(imageIndex += 1);
  });

  function showImage(newIndex){
    if (newIndex > numOfImages) {imageIndex = 1; newIndex = 1;}
    if (newIndex < 1) {imageIndex = numOfImages; newIndex = numOfImages}

    imageIndex = newIndex;

    for (i = 0; i < numOfImages; i++) {
       images[i].style.display = 'none';
       dots[i].style.backgroundColor = defaultColor;
    }

    images[newIndex - 1].style.display = 'block';
    dots[newIndex - 1].style.backgroundColor = highlightColor
  }


  $('.dot').hover(function(){
    var currentDot = $(this);
    showImage(parseInt(currentDot.attr('id')));
  });

})
