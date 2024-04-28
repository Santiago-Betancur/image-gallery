$(document).ready(function () {
  //Function to load Images
  function loadImages() {
    $.ajax({
      url: "https://api.unsplash.com/photos/random?count=10&client_id=HOMxlDuxxEq1z3AFb1m49G51bckOBcTM--BiJUHSOc4",
      type: "GET",
      dataType: "json",
      success: function (data) {
        data.forEach(function (photo) {
          let imageUrl = photo.urls.small;
          var imageElement = $('<img loading="lazy">')
            .attr("src", imageUrl)
            .attr("alt", "Loaded Image");
          $("#gallery").append(imageElement);
        });
      },
      error: function (error) {
        console.log("Error", error);
      },
    });
  }

  // Initially load some images
  loadImages();
  //Handle click event on 'Load More Images' button
  $("#loadMore").click(function () {
    loadImages();
  });
});
