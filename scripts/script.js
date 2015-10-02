/**
 * Created by Diana on 10/1/2015.
 */

$(document).ready(function() {

    $('#compsci').click(function() {

        if ($(this).hasClass('addBorder')) {
            $(this).removeClass('addBorder');
            $('#cs').css("display", "none");
        } else {
            $(this).addClass('addBorder');
            $('#photo').removeClass('addBorder');
            $('#anime').removeClass('addBorder');
            $('#cs').css("display", "table-cell");
            $('#ai').css("display", "none");
            $('#ai').css("display", "none");
        }

    });

    $('#photo').click(function() {
        if ($(this).hasClass('addBorder')) {
            $(this).removeClass('addBorder');
            $('#ps').css("display", "none");
        } else {
            $(this).addClass('addBorder');
            $('#compsci').removeClass('addBorder');
            $('#anime').removeClass('addBorder');
            $('#ps').css("display", "table-cell");
            $('#cs').css("display", "none");
            $('#ai').css("display", "none");
        }
    });

    $('#anime').click(function() {
        if ($(this).hasClass('addBorder')) {
            $(this).removeClass('addBorder');
            $('#ai').css("display", "none");
        } else {
            $(this).addClass('addBorder');
            $('#compsci').removeClass('addBorder');
            $('#photo').removeClass('addBorder');
            $('#ai').css("display", "table-cell");
            $('#cs').css("display", "none");
            $('#ps').css("display", "none");
        }
    });

});