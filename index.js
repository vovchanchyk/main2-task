// select-------
let selectHead = $(".select__head");
let selectItem = $(".select__item");

selectHead.on("click", function () {
  $(this).parent().toggleClass("is-active");
});

selectItem.on("click", function () {
  let text = $(this).text();
  let select = $(this).closest(".select");
  let currentText = select.find(".select__val");
  currentText.text(text);
  select.toggleClass("is-active");
});

//клик по экрану------
$(document).on("click", function (event) {
  if (
    $(".select").is(event.target) != true &&
    $(".select").has(event.target).length === 0
  ) {
    $(".select").removeClass("is-active");
  }
});

// поле поиска---------
let searchF = $(".search__val");

function searchIn() {
  let valInput = $(this).val();
  let elements = $(".search__item");
  if (valInput != "") {
    $(this).closest(".search").addClass("is-active");
    elements.each(function (el) {
      if ($(this).text().search(valInput) > -1) {
        $(this).removeClass("hidden");
        $(this).on("click", function () {
          searchF.val($(this).text());
          elements.addClass("hidden");
          $(this).closest(".search").removeClass("is-active");
        });
      } else {
        $(this).addClass("hidden");
      }
    });
  } else {
    elements.addClass("hidden");
    $(this).closest(".search").removeClass("is-active");
  }
}

searchF.on("input", searchIn);
// бургур----------
function burger() {
  $(".burger__img").toggleClass("close");
  $(".header__menu-block").toggleClass("header__menu-block--open");
  $("body").toggleClass("noscroll");
}

function showPopup() {
  $(".popup").removeClass("close");
  $("body").addClass("noscroll");
}

let inputs = document.querySelectorAll(".login input");

function closePopup() {
  $(".popup").addClass("close");
  $("body").removeClass("noscroll");
  $("label").text("");
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].value = "";
  }
}

$("#close").on("click", closePopup);

$(".popup").on("click", function (event) {
  if (
    $(".login").is(event.target) != true &&
    $(".login").has(event.target).length === 0 &&
    $(event.target).is("#btn-login") != true
  ) {
    closePopup();
  }
});

let eye = $(".showPass");
function showPass() {
  let input = $("#password");
  if (input.attr("type") == "password") {
    input.attr("type", "text");
    eye.toggleClass("fa-eye");
    eye.toggleClass("fa-eye-slash");
  } else {
    input.attr("type", "password");
    eye.toggleClass("fa-eye");
    eye.toggleClass("fa-eye-slash");
  }
}
eye.on("click", function () {
  showPass();
});


$(".popup .login").validate({
  rules: {
    email: {
      required: true,
      email: true,
    },
    login: {
      required: true,
    },
    password: {
      required: true,
    },
  },
  messages: {
    email: {
      required: "пожалуйста заполните это поле",
      email: " пожалуйста введите валидный email",
    },
    login: {
      required: "пожалуйста заполните это поле",
    },
    password: {
      required: "пожалуйста заполните это поле",
    },
  },
});

let btnTop = document.querySelector(".btn-goUp");
window.addEventListener("scroll", function () {
  if (pageYOffset > 600) {
    btnTop.style.display = "block";
    btnTop.innerHTML = Math.round(pageYOffset);
  } else {
    btnTop.style.display = "none";
  }
});

btnTop.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
