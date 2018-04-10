$(document).ready(function() {
  //Sets the default color for the color picker
  $("#colorPicker").val("#c6a530");
  let isClicked = false;

  // Variable: Select color
  let color = $("#colorPicker").val();

  // Variable: Select grid size
  let rowCount = $("#inputHeight").val();
  let colCount = $("#inputWidth").val();

  // When size is submitted by the user, call makeGrid()
  $("#submit").click(function() {
    makeGrid();
  });

  // Event listeners to add/remove color
  //Single Click Event
  $("#pixelCanvas")
    .on("click", "td", function(e) {
    gridCol = $("#colorPicker").val();
    $(this).css("background-color", gridCol);
    isClicked = false;
    })
    .on("dblclick", "td", function(e) {
      $(e.target).css("background-color", "white");
    })
    .on("mousedown", function(e) {
      //Check: Is the mouse clicked but not released?
      e.preventDefault();
      isClicked = true;
    })
    .on("mouseover", "td", function(e) {
      //Check: Is the mouse clicked?
      if (isClicked) {
    gridCol = $("#colorPicker").val();
    $(this).css("background-color", gridCol);
      }
    });
  
  function makeGrid() {
    resetGrid(); //Resets the grid and removes old pixel art
    //Creates table row parents
    for (let rows = 0; rows < rowCount; rows++) {
      let gridVal = $("<tr></tr>");
      $("#pixelCanvas").append('<tr class="gridRow"></tr>');
      //alert(gridVal);
    }
    //Creates and append table data (columns) into parent table rows
    for (let cols = 0; cols < colCount; cols++) {
      $("tr").append('<td class="gridCol"></td>');
    }
  }

  //Resets grid without refreshing the page
  function resetGrid() {
    rowCount = $("#inputHeight").val(); //resets height
    colCount = $("#inputWidth").val(); //resets width
    $(".gridRow").remove(); //removes old grid
  }

});


