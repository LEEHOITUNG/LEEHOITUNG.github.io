// マウスオーバー イベントハンドラー
const mouseOverHandler = function (event) {
	$(this).addClass('border_change')
}

// マウスアウトイベントハンドラー
const mouseOutHandler = function (event) {
	$(this).removeClass('border_change')
}

// マウスオーバーイベント
$('.works_site').on('mouseover', mouseOverHandler)
// マウスアウトイベント
$('.works_site').on('mouseout', mouseOutHandler)


function fadeAnime() {

	$('.fadeInTrigger').each(function () { //fadeInTriggerというクラス名が
		var elemPos = $(this).offset().top - -300;//要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight) {
			$(this).addClass('fadeIn');// 画面内に入ったらfadeInというクラス名を追記
		}
	});

	$('.fadeRightTrigger').each(function () { //fadeRightTriggerというクラス名が
		var elemPos = $(this).offset().top - -300;//要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight) {
			$(this).addClass('fadeRight');// 画面内に入ったらfadeRightというクラス名を追記
		}
	});

	$('.fadeUpTrigger').each(function () { //fadeUpTriggerというクラス名が
		var elemPos = $(this).offset().top - -300;//要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight) {
			$(this).addClass('fadeUp');// 画面内に入ったらfadeUpというクラス名を追記
		}
	});

}


$(window).scroll(function () {
	fadeAnime();
});

$(document).ready(function () {
	// ボタンをクリックしたらモーダルを表示
	$('#openDetail1').click(function () {
		$('#modal1').fadeIn(); // モーダルをフェードイン
	});

	$('#openDetail2').click(function () {
		$('#modal2').fadeIn(); // モーダルをフェードイン
	});

	$('#openDetail3').click(function () {
		$('#modal3').fadeIn(); // モーダルをフェードイン
	});

	// 閉じるボタンをクリックしたらモーダルを閉じる
	$('.close-btn').click(function () {
        $(this).closest('.modal').fadeOut();
	});

	// モーダルの外側をクリックしたらモーダルを閉じる
	$(window).click(function (event) {
        if ($(event.target).is('.modal')) {
			$(this).fadeOut();
		  }
	});
});

