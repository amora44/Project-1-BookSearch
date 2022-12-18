$.ajax('https://www.googleapis.com/books/v1/volumes?q=key=AIzaSyAvrrPM1i1rCx_HHEYcXZqOwBuZsimUhLo')


function searchBooks() {
    var searchTerm = $("#search").val();
    $.ajax({
      url: "https://www.googleapis.com/books/v1/volumes?q=" + searchTerm,
      type: "GET",
      success: function(results) {
        displayResults(results);
      }
    });
  }





