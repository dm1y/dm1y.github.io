/**
 * Created by Diana on 10/2/2015.
 */

$(document).ready(function() {

    $('#compsci').click(function () {
        if ($(this).hasClass('addBorder')) {
            $(this).removeClass('addBorder');
            if ($('#cs').is(":visible"))
                $('#cs').hide(800);
        } else {
            $(this).addClass('addBorder');
            $('#photo').removeClass('addBorder');
            $('#anime').removeClass('addBorder');

            if ($('#ps').is(":visible"))
                $('#ps').hide(800, function () {
                    $('#cs').show(1000);
                });
            else if ($('#ai').is(":visible"))
                $('#ai').hide(800, function () {
                    $('#cs').show(1000);
                });
            else
                $('#cs').show(1000);
        }

    });

    $('#photo').click(function () {
        if ($(this).hasClass('addBorder')) {
            $(this).removeClass('addBorder');
            if ($('#ps').is(":visible"))
                $('#ps').hide(800);
        } else {
            $(this).addClass('addBorder');
            $('#compsci').removeClass('addBorder');
            $('#anime').removeClass('addBorder');
            if ($('#cs').is(":visible"))
                $('#cs').hide(800, function () {
                    $('#ps').show(1000);
                });
            else if ($('#ai').is(":visible"))
                $('#ai').hide(800, function () {
                    $('#ps').show(1000);
                });
            else
                $('#ps').show(1000);
        }
    });

    $('#anime').click(function () {
        if ($(this).hasClass('addBorder')) {
            $(this).removeClass('addBorder');
            if ($('#ai').is(":visible"))
                $('#ai').hide(800);
        } else {
            $(this).addClass('addBorder');
            $('#compsci').removeClass('addBorder');
            $('#photo').removeClass('addBorder');
            if ($('#cs').is(":visible"))
                $('#cs').hide(800, function () {
                    $('#ai').show(1000);
                });
            else if ($('#ps').is(":visible"))
                $('#ps').hide(800, function () {
                    $('#ai').show(1000);
                });
            else
                $('#ai').show(1000);
        }
    });

});
