
let isMobile = {
	Android: function() {return navigator.userAgent.match(/Android/i);},
	BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
	iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
	Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
	Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
	any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
};
let body = $('body');
if(isMobile.any()){
    body.addClass('touch');
    let arrowMenu = $('.arrow');
   arrowMenu.on('click', function () {
       $(this).toggleClass('arrow-rotate')
       $(this).next().toggleClass('open-submenu')
       
   })
 
}else{
    body.addClass('mouse')
    
}

let selected = function () {
    let selectHead = $(".select__head");
    let selectItem = $(".select__item");
    function openSelect (params) {
        $(this).parent().toggleClass("is-active");
    }
    
    function selectChoose() {
        let text = $(this).text();
        let select = $(this).closest('.select');
        let currentText = select.find('.select__val');
        currentText.text(text)
        select.toggleClass('is-active');

        
    }

    selectHead.on("click", openSelect);
    selectItem.on('click',selectChoose)

    
    
}
selected();

let searchF = $('.search__val');


function searchIn(params) {
    let valInput = $(this).val();
    let elements = $('.search__item');
    if(valInput != ''){
        $(this).closest('.search').addClass('is-active')
        elements.each( function (el) {
            if($(this).text().search(valInput) > -1 ){ 
                $(this).removeClass("hidden");
                $(this).on("click",function () {
                searchF.val($(this).text());
                elements.addClass("hidden");
                    
                })
            }else{
                $(this).addClass("hidden")
            }
            
        })
    }else{
        elements.addClass("hidden");
        $(this).closest('.search').removeClass('is-active')
    }
    
}

searchF.on('input', searchIn)

function burger() {
    $('.burger__img').toggleClass('close');
    $('.header__menu-block').toggleClass('header__menu-block--open');
    
}
function showPopup() {
    $('.popup').removeClass('close');
}
function closePopup() {
    $('.popup').addClass('close');
    
}
// $('.popup__btn-close').on('click', closePopup);

$('.popup__button').on('click',function () {
 let emailInput = $('.popup__input[type = email]');
 if(emailInput.val() != ""){
    alert('thank you for order');
    closePopup() ;
    emailInput.val('');

 }else{
    alert(' fill email please');

 }
    
    
})