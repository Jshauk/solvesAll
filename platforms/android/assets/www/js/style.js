/**
 * Created by gavin on 6/19/14.
 */
$(window).bind("load", function() {

//    var x = 1;
//    while( x < 2){
//        $('#header').css('height', '11%');
        var top = $('#header').css('height'),
//          width = $('#showLeft').css('height'),
         height = $('#header').css('height');
//         tall = $('input').css('height') * 2;

        $('.main').css('margin-top', top);
//        $('#showLeft').css('width', width);
        $('#menuTitle').css('height', height);
//    $('input').css('height', tall);
//        x = x + 2;
//    }
});

function calcStyle(){
    var heightCalc = $('#calc').outerHeight(),
         widthCalc = $('#calc').outerWidth(),
         widthCalc = widthCalc / 2,
        heightCalc = heightCalc / 2;

    $('#calc').css('margin-top', -heightCalc);
    $('#calc').css('margin-left', -widthCalc);
}