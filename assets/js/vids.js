var images = document.querySelectorAll('.kg-gallery-image img');

console.log(document.querySelector('.gh-content'))

images.forEach(function (image) {
  var container = image.closest('.kg-gallery-image');
  var width = image.attributes.width.value;
  var height = image.attributes.height.value;
  var ratio = width / height;
  container.style.flex = ratio + ' 1 0%';
});

$(document).ready(function () {
  var $postContent = document.querySelector(".gh-content");
  console.log($postContent)
  $postContent.fitVids();
});
