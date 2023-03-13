var source = document.getElementById("card-template").innerHTML;
var template = Handlebars.compile(source);
var html = template(data);

document.getElementById("content").innerHTML = html;
console.log(html);

//jquery method
$("#content .card-footer .btn").on("click", function (event) {
  console.log("jquery");

  var index = $(".card").index(event.currentTarget);
  console.log("index = " + index);
  console.log(event.target.dataset.target);
});
