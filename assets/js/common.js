$(function () {
  function smoothscroll() {
    var pagetop = $(".page-top");
    // ボタン非表示
    pagetop.hide();
    // 100px スクロールしたらボタン表示
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        pagetop.fadeIn();
      } else {
        pagetop.fadeOut();
      }
    });
    pagetop.click(function () {
      $("body, html").animate({ scrollTop: 0 }, 500);
      return false;
    });
  }
  smoothscroll();


  function fixBnr() {
    var bnr = $(".fix-bnr");
    // ボタン非表示
    bnr.hide();
    // 100px スクロールしたらボタン表示
    $(window).scroll(function () {
      if ($(this).scrollTop() > 600) {
        bnr.fadeIn();
      } else {
        bnr.fadeOut();
      }
    });
  }
  fixBnr();
  
  //SP用 ハンバーガーメニュー
  function menuToggle() {
    var state = false;
    var menuBtn = "#navToggle";
    var spMenu = ".header__nav-area";

    $(menuBtn).click(function () {
      if (state == false) {
        $("body").addClass("is-fix");
        $(this).addClass("is-active");
        $(spMenu).addClass("is-active");
        $(spMenu).slideDown();
        state = true;
      } else if (state == true) {
        $("body").removeClass("is-fix");
        $(this).removeClass("is-active");
        $(spMenu).removeClass("is-active");
        $(spMenu).slideUp();
        state = false;
      }
    });
  }
  function headerChildMenu() {
    $(".navParent > a").on("click", function () {
      $(this).next(".header__child-nav").stop().slideToggle();
      $(this).toggleClass("is-on");
      return false;
    });
  }



  //PC用 メガメニュー
  function megaMenu() {
      $(".header__nav__item.navParent").on({
        mouseenter: function () {
          $(".header__bg").addClass("is-cover");
          $("body").addClass("is-overlay");
          $(this).find(".header__child-nav").stop().slideDown();
        },
        mouseleave: function () {
          $(".header__bg").removeClass("is-cover");
          $("body").removeClass("is-overlay");
          $(this).find(".header__child-nav").stop().slideUp();
        },
      });

  }

  //PC SP 切り替え
  function switchByWidth() {

    /*$("body").find(".header__nav__item.js-parent").off();*/
    if (window.matchMedia("(max-width: 1298px)").matches && !$("body").hasClass("is-mobile")) {
      //SP
      $("body").addClass("mobile");
      $("body").removeClass("desktop");
      $("html").removeClass("is-large-font");
      $("#js-navToggle").removeClass("is-large-font");
      $(".header__child-nav").removeAttr("style");
      $(".header__nav").removeAttr("style");
      menuToggle();
      headerChildMenu();
    } else if (window.matchMedia("(min-width:1299px)").matches && !$("body").hasClass("is-desktop")) {
      //PC
      $("body").addClass("desktop");
      $("body").removeClass("mobile");
      $(".header__nav").removeAttr("style");
      $(".header__child-nav").removeAttr("style");
      megaMenu();
    }
  }
  switchByWidth();
  //ロードとリサイズの両方で同じ処理を付与する
  $(window).on('resize', switchByWidth);
});

// TOP メインビジュアル
$(function () {
  $("#mainVisualSlide").slick({
    arrows: true,
    prevArrow: '<div class="slick-prev-arr">&lt;</div>',
    nextArrow: '<div class="slick-next-arr">&gt;</div>',
    dots: true,
    speed: 1000,
    slidesToShow: 1,
    fade: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  });
});


