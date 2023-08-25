$(document).ready(function () {
  $(".section2").attr("style", "margin-top:" + $(".section1").height() + "px");
  $(window).on("resize", () => {
    $(".section2").attr(
      "style",
      "margin-top:" + $(".section1").height() + "px"
    );
  });
  $(".section3__content").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });
  $(".section11__chungnhan").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });
  $(".section13__review").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  if ($(window).width() < 1024) {
    $(".width50 .sure-smile").on("click", function () {
      $(".width50.content").removeClass("block");
      $(".width50.content1").addClass("block");
      setTimeout(() => {
        $(".width50.content1").css("left", "0");
      }, 200);
    });
    $(".width50 .Invisalign").on("click", function () {
      $(".width50.content").removeClass("block");
      $(".width50.content2").addClass("block");
      setTimeout(() => {
        $(".width50.content2").css("right", "0");
      }, 200);
    });
    $(document).on("click", function (event) {
      if (
        !$(event.target).closest(".width50 .sure-smile, .width50 .Invisalign")
          .length
      ) {
        $(".width50.content").removeClass("block");
        $(".width50.content1").css("left", "-1000px");
        $(".width50.content2").css("right", "-1000px");
      }
    });
  }

  let width = $(".width50.img .sure-smile ").width();
  let height = $(".width50.img .sure-smile").height();
  $(".width50 .sure-smile").attr(
    "style",
    "clip : rect( 0 ," + width / 2 + "px," + height + "px,0)"
  );
  $(".width50 .Invisalign").on("mouseover", function () {
    $(".width50 .sure-smile").attr(
      "style",
      "clip : rect( 0 ,0 ," + height + "px,0)"
    );
  });
  $(".width50 .Invisalign").on("mouseout", function () {
    $(".width50 .sure-smile").attr(
      "style",
      "clip : rect( 0 ," + width / 2 + "px," + height + "px,0)"
    );
  });
  $(".width50 .sure-smile").on("mouseover", function () {
    $(".width50 .sure-smile").attr(
      "style",
      "clip : rect( 0 ," + width + "px," + height + "px,0)"
    );
  });
  $(".width50 .sure-smile").on("mouseout", function () {
    $(".width50 .sure-smile").attr(
      "style",
      "clip : rect( 0 ," + width / 2 + "px," + height + "px,0)"
    );
  });

  var startDate = new Date();
  var endDate = new Date();
  endDate.setDate(startDate.getDate() + 10);

  function updateCountdown() {
    var now = new Date();
    var timeLeft = endDate - now;

    if (timeLeft <= 0) {
      $(".countdown-number").text("0");
    } else {
      var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      $("#days").text(days);
      $("#hours").text(hours);
      $("#minutes").text(minutes);
      $("#seconds").text(seconds);
    }
  }

  setInterval(updateCountdown, 1000);
  // let a = 0;
  // let c = (1200 - $(window).width()) / 100 + 3;

  // $(".section5_banner__next").on("click", function () {
  //   if (-a / 100 <= c) {
  //     let b = a - 200;
  //     $(".section5_banner__img img").attr("style", "left :" + b + "px");
  //     return (a -= 200);
  //   } else {
  //     console.log(a);
  //   }
  // });
  // $(".section5_banner__prev").on("click", function () {
  //   if (a < 0) {
  //     let b = a + 200;
  //     $(".section5_banner__img img").attr("style", "left :" + b + "px");
  //     return (a += 200);
  //   }
  // });
});
$(window).on("scroll", function () {
  let c = (1400 - $(window).width()) / 100;
  let a = c * -100;
  var scrollPosition = $(window).scrollTop();
  let imgPosition = $(".section4__lydo__content.content2").offset().top;
  if (scrollPosition > imgPosition) {
    $(".section5_banner__img img").attr("style", "left:" + a + "px");
  } else {
    $(".section5_banner__img img").attr("style", "left:0px");
  }
  let section123option = $(".section11__chungnhan ").offset().top;
  if (scrollPosition > section123option) {
    $(".section12__3option__item span ").addClass("animation");
  } else {
    $(".section12__3option__item span ").removeClass("animation");
  }
});
