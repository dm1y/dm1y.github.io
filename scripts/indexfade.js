/**
 * Created by Diana on 10/15/2015.
 */

$(document).ready(function() {

    $(".imgbox").css("display", "none");
    $(".imgbox").fadeIn(1500);

    $("a").click(function(event){
        event.preventDefault();
        linkLocation = this.href;
        $(".imgbox").fadeOut(600, redirectPage);
    });

    function redirectPage() {
        window.location = linkLocation;
    }

});