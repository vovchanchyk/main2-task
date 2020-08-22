let isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  },
};
let body = $("body");
if (isMobile.any()) {
  body.addClass("touch");
  let arrowMenu = $(".arrow");
  arrowMenu.on("click", function () {
    $(this).toggleClass("arrow-rotate");
    $(this).next().toggleClass("open-submenu");
  });
} else {
  body.addClass("mouse");
}

let selected = function () {
  let selectHead = $(".select__head");
  let selectItem = $(".select__item");
  function openSelect(params) {
    $(this).parent().toggleClass("is-active");
  }

  function selectChoose() {
    let text = $(this).text();
    let select = $(this).closest(".select");
    let currentText = select.find(".select__val");
    currentText.text(text);
    select.toggleClass("is-active");
  }

  selectHead.on("click", openSelect);
  selectItem.on("click", selectChoose);
};

selected();
$(document).on("click", function (event) {
  if (
    $(".select").is(event.target) != true &&
    $(".select").has(event.target).length === 0
  ) {
    $(".select").removeClass("is-active");
  }
});

let searchF = $(".search__val");

function searchIn(params) {
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

function burger() {
  $(".burger__img").toggleClass("close");
  $(".header__menu-block").toggleClass("header__menu-block--open");
}
function showPopup() {
  $(".popup").removeClass("close");
}
function closePopup() {
  $(".popup").addClass("close");
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

let eye = $('.showPass')

function showPass() {
  let input = $("#password");
  if (input.attr("type") == "password") {
    input.attr("type", "text");
    eye.toggleClass("fa-eye");
    eye.toggleClass("fa-eye-slash");
  }else{
    input.attr("type", "password");
    eye.toggleClass("fa-eye");
    eye.toggleClass("fa-eye-slash");
  }
}
eye.on('click', function () {
    showPass();
})

$('#password').on('input', function () {
    if($(this).val()!='' &&( $(this).val().length < 5 || $(this).val().length > 9 )){
        $(this).parent().addClass('incorrect')
    }else{
        $(this).parent().removeClass('incorrect')  
    }
})


function validPass() {
    let valPass = $('#password').val();
    let reg = /[A-Za-z1-9]{5,9}/;
    if(valPass.length <= 9 && reg.test(valPass)){
        return true;
    }    
}

function validEmail() {
    let valEmail = $('#email').val();
    let re = /\S+@\S+\.\S+/;
    if( valEmail != "" && re.test(valEmail)){
        return true
    }else{
        alert('enter valid email')
        
    }
    
}

function validName() {
    let valName = $('#name').val();
    if(valName != ''){
        return true
    }
    
}


function correct() {
    if(validName() && validPass() && validEmail() != true){
        $('#email').val('')
        $('#email').attr('placeholder','enter the input')    
    }else if(validPass() != true && validEmail() && validName()){
        $('#password').val('')
        $('#password').attr('placeholder','enter the input')
    }else if(validPass() && validEmail() && validName() != true){
        $('#name').val('')
        $('#name').attr('placeholder','enter the input')
    }else if(validPass() && validEmail() && validName()){
        alert('thank you')
        $('.login__input').val('')
        closePopup()
    }else{
        $('.login__input').val('')
        $('.login__input').attr('placeholder','enter the input')
    }
    
}

$('.login__btn').on('click', function () {
    correct()
    console.log(1)
    
})