// hitokoto.js

$.getJSON('https://v1.hitokoto.cn', function (data) {
    $('#hitokoto').attr({
        
    }).append(data.hitokoto).append(
        $('<div>').addClass('detail').text(data.from)
    );
});



//  以下原始代码
//     $.getJSON('https://v1.hitokoto.cn', function (data) {
 //   $('#hitokoto').attr({
//        'href': 'http://z.jiang.pub/',
//        'target': '_blank'
//    }).append(data.hitokoto).append(
 //       $('<div>').addClass('detail').text(data.from)
 //   );
//    });  