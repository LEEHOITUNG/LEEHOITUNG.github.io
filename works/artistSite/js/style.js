$(".openbtn1").click(function () {//ボタンがクリックされたら
    $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
      $("#nav-menu").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
  });
  
  $("#nav-menu a").click(function () {//ナビゲーションのリンクがクリックされたら
      $(".openbtn1").removeClass('active');//ボタンの activeクラスを除去し
      $("#nav-menu").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
  });