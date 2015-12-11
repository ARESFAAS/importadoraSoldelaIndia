window.onload = function () {
    animateVideo($('#btnVideo1'), $('#frameVideo1'));
    animateVideo($('#btnVideo2'), $('#frameVideo2'));
    animateVideo($('#btnVideo3'), $('#frameVideo3'));
}
function animateVideo(divVideo, frameVideo) {
    var widthVideo = $('#divBody').width() / 1.5;
    var heightVideo = $('#divBody').height() / 1.5;
    divVideo.click(function () {
        $('#divVideoPlay').empty();
        var autoPlay = frameVideo.attr('src') + '?autoplay=1';
        frameVideo.clone().attr('src', autoPlay).attr('width', '100%').attr('height', '100%').appendTo('#divVideoPlay');
        $('#divVideoPlay').dialog({
            //open: function() {    
            //    $(this).closest(".ui-dialog")
            //    .find(".ui-dialog-titlebar-close")
            //    .removeClass("ui-dialog-titlebar-close")
            //    .html("<span class='ui-button-icon-primary ui-icon ui-icon-closethick'></span>");
            //},                
            width: widthVideo,
            height: heightVideo,
            show: "fade",
            hide: "fade",
            resizable: "false",
            modal: "true",
            close: function (event, ui) { $('#divVideoPlay').empty(); }
        });
    });
}