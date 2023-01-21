document.addEventListener("DOMContentLoaded", (e) => {
  document.querySelector(".splash").classList.add("display-none");
});

$(document).ready(function () {
  $("li").on("click", function () {
    $("li").removeClass("clicked");
    $(this).addClass("clicked");
  });
});
