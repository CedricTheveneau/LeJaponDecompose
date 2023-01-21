const splashScreen = () => {
  document.addEventListener("DOMContentLoaded", (e) => {
    document.querySelector(".splash").classList.add("display-none");
  });
};
splashScreen();

$(document).ready(function () {
  $("li").on("click", function () {
    $("li").removeClass("clicked");
    $(this).addClass("clicked");
  });
});
