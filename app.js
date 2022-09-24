const splash = document.querySelector(".splash");

document.addEventListener("DOMContentLoaded", (e) => {
  setTimeout(() => {
    splash.classList.add("display-none");
  }, 2000);
});

$(document).ready(function () {
  $("li").on("click", function () {
    $("li").removeClass("clicked");
    $(this).addClass("clicked");
  });
});
