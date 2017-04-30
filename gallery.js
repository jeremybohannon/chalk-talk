// When the document is ready..
$(document).ready(function(){
  //Initialize variables
  // Get all objects with class name..
  var images = $('.mySlides');
  var dots = $('.dot');

  //Set index to first image
  var imageIndex = 1;

  //Variables to set colors
  var defaultColor = 'rgba(30, 140, 150, 0.23)';
  var highlightColor = '#2c3e50';

  var numOfImages = images.length;

  //Show first image
  showImage(imageIndex);

  //When a button is clicked, the next or previous picture should be shown
  $('#leftButton').click(function(){
    showImage(imageIndex -= 1);
  });

  $('#rightButton').click(function(){
    showImage(imageIndex += 1);
  });

  //This function will handle showing the images.
  // It will set all images to display none (and the buttons to default color)
  // Then the image we want to see is set to display block
  function showImage(newIndex){
    if (newIndex > numOfImages) {imageIndex = 1; newIndex = 1;}
    if (newIndex < 1) {imageIndex = numOfImages; newIndex = numOfImages}

    imageIndex = newIndex;

    //For all images set them to display none
    for (i = 0; i < numOfImages; i++) {
       images[i].style.display = 'none';
       dots[i].style.backgroundColor = defaultColor;
    }

    //For the image we want to see set it to block
    images[newIndex - 1].style.display = 'block';
    dots[newIndex - 1].style.backgroundColor = highlightColor
  }

  //When a dot is hovered...
  $('.dot').hover(function(){
    //Run the showImage function on the current Dot. This allows the dots to control what image is seens
    var currentDot = $(this);
    showImage(parseInt(currentDot.attr('id')));
  });

})
