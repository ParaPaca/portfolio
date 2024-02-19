$(document).ready(function () {
  $(document).on("click", ".button-sharing", function () {
    var url = "";
    if (!$(this).hasClass("button-sharing--copy")) {
      if ($(this).hasClass("button-sharing--vk")) {
        url = "https://vk.com/share.php";
      } else if ($(this).hasClass("button-sharing--tg")) {
        url = "https://t.me/share/url";
      } else if ($(this).hasClass("button-sharing--wa")) {
        url = "https://api.whatsapp.com/send";
      }
      shareOnSocialMedia(url);
    }
  });

  $(".button-sharing--copy").click(function () {
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => {
        $(".notification").css("top", "0px");
        setTimeout(() => {
          $(".notification").css("top", "-140px");
        }, 2000);
      })
      .catch((error) => {
        console.error("Copy error: ", error);
      });
  });

  function shareOnSocialMedia(url) {
    var title = encodeURIComponent(
      "Запишите детей на бесплатный курс. Они узнают, как правильно пользоваться соцсетями и почему не стоит делать покупки в тайне от родителей"
    );
    var image = encodeURIComponent(
      "https://uploads-ssl.webflow.com/652e3b910db4e038fc628d24/652e77832ba2ce5e2ee8708a_home-opengraph.png"
    );
    var shareUrl = encodeURIComponent("https://security.foxford.ru/");
    var fullUrl = "";

    if (url && url.includes("vk")) {
      fullUrl = `${url}?title=${title}&image=${image}&url=${shareUrl}`;
    } else if (url && url.includes("t.me")) {
      fullUrl = `${url}?text=${title}&url=${shareUrl}`;
    } else if (url && url.includes("whatsapp")) {
      fullUrl = `${url}?text=${title}%20-%20${shareUrl}`;
    }
    window.open(fullUrl, "_blank");
  }
});
