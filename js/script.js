$(function () {
  $(".p-open__key")
    .mousedown(function (e) {
      $(".p-open__key")
        .data("clickPointX", e.pageX - $(".p-open__key").offset().left)
        .data("clickPointY", e.pageY - $(".p-open__key").offset().top);
      $(document).mousemove(function (e) {
        $(".p-open__key").css({
          "top": e.pageY - $(".p-open__key").data("clickPointY") + "px",
          "left": e.pageX - $(".p-open__key").data("clickPointX") + "px",
        });
        // $(".p-open__key").data("top",$(".p-open__key").offset().top);
        // $(".p-open__key").data("left",$(".p-open__key").offset().left);
        // $(".p-open__hole").data("holetop",$(".p-open__hole").offset().top);
        // $(".p-open__hole").data("holeleft",$(".p-open__hole").offset().left);
      });
    })
    .mouseup(function () {
      $(document).off("mousemove");
      // const top = Number($(".p-open__key").data("top"));
      // const left = Number($(".p-open__key").data("left"));
      // const holetop = Number($(".p-open__hole").data("holetop"));
      // const holeleft = Number($(".p-open__hole").data("holeleft"));
      // console.log(holetop);
      // if(top > holetop + 100 && top < holetop - 100){
      const rect = {
        "key": $(this).get(0).getBoundingClientRect(),
        "hole": $(".p-open__hole").get(0).getBoundingClientRect(),
      };
      const over =(
        rect.hole.left < rect.key.right &&
        rect.key.left < rect.hole.right &&
        rect.hole.top  < rect.key.bottom &&
        rect.key.top < rect.hole.bottom
      );
        // $(".p-open__hole--circle").css("background-color",over?"red":"");
        // $(".p-open__hole--trapezoid").css("background-color",over?"red":"");
        $(".p-open__box__top").addClass(over?"open":"");
        $(".p-open__box__bottom").addClass(over?"open":"");
        $(".p-open").addClass(over?"none":"");
    });
});

// // メニュータブをクリックしてサイドバーを開いて暗くする

// $(function () {
//   $(".p-menutab--open").click(function () {
//     if (window.matchMedia("(max-width: 766px)").matches) {
//       $(".p-sidebar").animate({
//         "margin-left": "-328px",
//       });
//     } else {
//       $(".p-sidebar").animate({
//         "margin-left": "-428px",
//       });
//     }
//     $(".p-menutab--bg").css("visibility", "visible");
//   });
// });

// // Xボタンクリックしてサイドバーを閉じて明るく戻す
// $(function () {
//   $(".p-menutab--close").click(function () {
//     $(".p-sidebar").animate({
//       "margin-left": "0px",
//     });
//     $(".p-menutab--bg").css("visibility", "hidden");
//   });
// });

// // 画面幅動かした時にサイドバーを閉じて明るく戻す
// $(function () {
//   let timer = null;
//   $(window).resize(function () {
//     clearTimeout(timer);
//     timer = setTimeout(function () {
//       $(".p-sidebar").animate({
//         "margin-left": "0px",
//       });
//       $(".p-menutab--bg").css("visibility", "hidden");
//     }, 50);  //0.05秒以上resizeが静止すれば発火する
//   });
// });

// // p-frontBottomの高さを文字の高さに応じて伸縮させる
// $(function () {
//   $(window).resize(function () {
//     const title = $(".p-frontBottom__title").outerHeight(true);
//     const underbar = $(".p-frontBottom__underbar").outerHeight(true);
//     const text = $(".p-frontBottom__text").outerHeight(true);
//     $(".p-frontBottom").css("height", title + underbar + text);
//   });
// });
