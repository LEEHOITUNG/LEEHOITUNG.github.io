
window.addEventListener('scroll', function () {
    const nav = document.querySelector('.header_navigation');
    const mainVisual = document.querySelector('.header_mainvisual');

    if (window.scrollY >= mainVisual.offsetHeight) {
        nav.classList.add('fixed');
    } else {
        nav.classList.remove('fixed');
    }

    fadeAnime();
});

// // 画面をスクロールをしたら動かしたい場合の記述
// $(window).scroll(function () {
//     fadeAnime();/* アニメーション用の関数を呼ぶ*/
// });// ここまで画面をスクロールをしたら動かしたい場合の記述

function fadeAnime() {



    $('.fadeLeftTrigger').each(function () { //fadeLeftTriggerというクラス名が
        var elemPos = $(this).offset().top - 20;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('fadeLeft');// 画面内に入ったらfadeLeftというクラス名を追記
        } else {
            $(this).removeClass('fadeLeft');// 画面外に出たらfadeLeftというクラス名を外す
        }
    });

    $('.fadeUpTrigger').each(function () { //fadeUpTriggerというクラス名が
        var elemPos = $(this).offset().top - 20;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('fadeUp');// 画面内に入ったらfadeUpというクラス名を追記
        } else {
            $(this).removeClass('fadeUp');// 画面外に出たらfadeUpというクラス名を外す
        }
    });


}

