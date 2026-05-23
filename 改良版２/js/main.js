    var text =0;

$(".next").one("click", function(){

     if (text === 0 ){
     console.log("次へボタンが押されました");
     $("h3").html("これからぼくが光らせるタイルと同じタイルを押してみてね");
     $(".cc").fadeIn(1000);
     $(".cc").fadeOut(1000);
    } 
});

$(".c").one("click", function(){
     var text = 1 
     if (text === 1){
     console.log("正しいボタンを押したので次に進みます");
    $("h3").html("すごいすごい！君ともっと遊びたいな");
    $(".next").fadeOut(0);
    $(".asobu").fadeIn(0);
    }

});


$(".asobu").click(function(){

     if (text === 0 ){
     console.log("あそぶボタンが押されました");
     $("h3").html("やったね！それじゃあ、ゲームスタート！");
    $("h3").fadeOut(1000);
    }
    var num = Math.floor(Math.random() * 5);
    console.log(num, "箱の中身のチェック");
    if (num === 0) {
    $(".aa").fadeIn(1000);
    $(".aa").fadeOut(1000);
    $(".aa").delay(1000);
    } else if(num === 1){
    $(".bb").fadeIn(1000);
    $(".bb").fadeOut(1000);
   $(".bb").delay(1000);
    } else if(num === 2){
    $(".cc").fadeIn(1000);
    $(".cc").fadeOut(1000);
   $(".cc").delay(1000);
    } else if(num === 3){
    $(".dd").fadeIn(1000);
    $(".dd").fadeOut(1000);
   $(".dd").delay(1000);
    } else if(num === 4){
    $(".ee").fadeIn(1000);
    $(".ee").fadeOut(1000);
   $(".ee").delay(1000);
    } 


$(".a").on ("click",function(){
   var a = 0   
   if (a === num){
   $(".batu").fadeOut(0);
   $(".maru").fadeIn(0);
   } else if( a != num){
   $(".maru").fadeOut(0);
   $(".batu").fadeIn(0);
            $(this).delay(500).addClass("clicked");
}
});
$(".b").on ("click",function(){
   var b = 1   
   if (b === num){
   $(".batu").fadeOut(0);
   $(".maru").fadeIn(0);
   } else if( b != num){
         $(".maru").fadeOut(0);
   $(".batu").fadeIn(0); 
            $(this).delay(500).addClass("clicked");
}
});
$(".c").on ("click",function(){
   var c = 2   
   if (c === num){
         $(".batu").fadeOut(0);
   $(".maru").fadeIn(0);
   } else if( c != num){
         $(".maru").fadeOut(0);
   $(".batu").fadeIn(0);
            $(this).delay(500).addClass("clicked");
}
});
$(".d").on ("click",function(){
   var d = 3   
   if (d === num){
         $(".batu").fadeOut(0);
   $(".maru").fadeIn(0);
   } else if( d != num){
         $(".maru").fadeOut(0);
   $(".batu").fadeIn(0);
            $(this).delay(500).addClass("clicked");
}
});
$(".e").on ("click",function(){
   var e = 4   
   if (e === num){
         $(".batu").fadeOut(0);
   $(".maru").fadeIn(0);
   } else if( e != num){
         $(".maru").fadeOut(0);
   $(".batu").fadeIn(0);
      $(this).delay(500).addClass("clicked");

}
});
});

$(function() {
    // 条件: #target が存在する場合のみ実行
    if ($("#clicked").length > 0) {
        console.log("要素が存在するので処理を実行");
            var num = Math.floor(Math.random() * 5);
    console.log(num, "箱の中身のチェック");
    if (num === 0) {
    $(".aa").fadeIn(1000);
    $(".aa").fadeOut(1000);
    } else if(num === 1){
    $(".bb").fadeIn(1000);
    $(".bb").fadeOut(1000);
    } else if(num === 2){
    $(".cc").fadeIn(1000);
    $(".cc").fadeOut(1000);
    } else if(num === 3){
    $(".dd").fadeIn(1000);
    $(".dd").fadeOut(1000);
    } else if(num === 4){
    $(".ee").fadeIn(1000);
    $(".ee").fadeOut(1000);
    } 
$(".a").on ("click",function(){
   var a = 0   
   if (a === num){
   $(".batu").fadeOut(0);
   $(".maru").fadeIn(0);
   } else if( a != num){
   $(".maru").fadeOut(0);
   $(".batu").fadeIn(0);
}
});
$(".b").on ("click",function(){
   var b = 1   
   if (b === num){
   $(".batu").fadeOut(0);
   $(".maru").fadeIn(0);
   } else if( b != num){
         $(".maru").fadeOut(0);
   $(".batu").fadeIn(0);

}
});
$(".c").on ("click",function(){
   var c = 2   
   if (c === num){
         $(".batu").fadeOut(0);
   $(".maru").fadeIn(0);
   } else if( c != num){
         $(".maru").fadeOut(0);
   $(".batu").fadeIn(0);

}
});
$(".d").on ("click",function(){
   var d = 3   
   if (d === num){
         $(".batu").fadeOut(0);
   $(".maru").fadeIn(0);
   } else if( d != num){
         $(".maru").fadeOut(0);
   $(".batu").fadeIn(0);

}
});
$(".e").on ("click",function(){
   var e = 4   
   if (e === num){
         $(".batu").fadeOut(0);
   $(".maru").fadeIn(0);
   } else if( e != num){
         $(".maru").fadeOut(0);
   $(".batu").fadeIn(0);

}
});
    }
});

$("#el").fadeOut(500).promise()
  .then(() => $("#el").slideDown(500).promise())
  .then(() => $("#el").animate({ left: "100px" }, 500).promise())
  .then(() => $("#el").fadeIn(500).promise())
  .then(() => console.log("完了"));

// $(".a").on("click", function () {
//     var gu = 0
//     var num = Math.floor(Math.random() * 3);
//     console.log(num, "箱の中身のチェック");

//     if ( num === 0) { 
//     console.log("グーです");
//     $(".item4").html("グーです");
//     } else if( num === 1){
//     console.log("チョキです");
//     $(".item4").html("チョキです");
//     } else if( num === 2){
//     console.log("パーです");
//     $(".item4").html("パーです");
//     }
//     if ( num === gu){
//     console.log("あいこです");
//     $(".item5").html("あいこです");
//     } else if ( num === gu+1 ) {
//     console.log("勝ちです");
//     $(".item5").html("あなたの勝ち！");
//     } else if ( num === gu+2 ) {
//     console.log("負けです");
//     $(".item5").html("あなたの負け…");
//     }
// })