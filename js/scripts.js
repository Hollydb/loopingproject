$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    $("#food").show();
    $("input:checkbox[name=food]:checked").each(function(){
      var foodMode = $(this).val();
      foodArray.push(foodMode);
      debugger
      var backEnd =  runThrough(foodArray)
      console.log(backEnd)
      $('#food-response').append(backEnd + "<br>");
    });
  });
});
var foodArray = []

console.log(foodArray)
function runThrough(foodArray) {
  for (var i = 0; i<foodArray.length; i++) {
    if (foodArray[i] === "streetcar") {
      return ("The power of garbage");
    } else if (foodArray[i] === "taxi") {
      return ("This is working");
    }else if (foodArray[i] === "skateboard") {
      return ("Nerd alert");
    } else {
      return ("This works too");
    }
  }

}
