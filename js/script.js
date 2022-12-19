$.ajax('https://www.googleapis.com/books/v1/volumes?q=key=AIzaSyAvrrPM1i1rCx_HHEYcXZqOwBuZsimUhLo')
    
function render(data) {
    $("results").empty();
    
    $.each(data.items, function(i, item) {
        var title= item.volumeInfo.title;
        var authors = item.volumeInfo.authors;
        var categories = item.volumeInfo.categories;
        var coverImageUrl = item.volumeInfo.imageLinks.thumbnail;
        var width = item.volumeInfo.imageLinks.width;
        var height = item.volumeInfo.imageLinks.height;
            
            
        $("#results").append(
            "<img src='" + coverImageUrl + "' style='width: " + width + "px; height: " + height + "px;'>" +
            "<h2>" + title + "</h2>" +
            "<p>By " + authors + "</p>" +
            "<p>Categories: " + categories + "</p>" 
        );
    });
}   
$("#form").submit(function(e) {
     e.preventDefault();

     var searchBook = $("#search-book").val();

    $.ajax({
      url: "https://www.googleapis.com/books/v1/volumes?q=" + searchBook,
      type: "GET",
      success: function(data) {
        render(data);
      }
    });
  });

  $("#clear-btn").click(function() {
    $("#results").empty();
  });




