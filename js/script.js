$(document).ready(function () {

    // on load set first element center
    var containerMargin = (window.innerHeight / 2) - ($('.wrapper:first').innerHeight() / 2)
    $('.main-wrapper').css('margin-top', containerMargin);
    $('.main-wrapper').css('margin-bottom', containerMargin);

    $('.buttonok').click(function () {
        var tabToScroll = $(this).closest('.wrapper');
        $(tabToScroll).removeClass('active')
        $(tabToScroll).next().addClass('active');
        $('html,body').animate({ scrollTop: ($(tabToScroll).offset().top - $(tabToScroll).innerHeight() / 2) }, 'slow');
    })


    $(document).on("scroll", function () {
        var pageTop = $(document).scrollTop() + 400;
        var tags = $('.wrapper');
        for (var i = 0; i < tags.length; i++) {
            var tag = tags[i]

            if ($(tag).position().top <= pageTop) {
                $(tag).addClass("active")
                $(tag).siblings().removeClass("active")
            }
            else {
                $(tag).removeClass("active")
            }
        }
    })

    function nxt(el) {
        $(el).parent().siblings('.confirm-container').show();

    }

    $('input').keypress(function () {
        nxt($(this));
    })

    $('input').click(function () {
        nxt($(this));
    })
    $("input[type='radio']").change(function () {
        if ($(this).val() == "other") {
            $("#area").show();
        }
        else {
            $("#area").hide();
        }
    });

    $('input').click(function () {
        $(this).parent().parent().siblings('.confirm-container').show();
    })

    $('select').click(function () {
        nxt($(this));
    })

    // /validation for all text box/
    $('.buttonok').click(function () {
        var focusSet = false;
        if (!$('#textbox1').val()) {
            if ($("#textbox1").parent().next(".validation").length == 0) // only add if not added
            {
                $("#textbox1").parent().after("<div class='validation' style='color:red;margin-bottom: 20px;'>Please fill field.</div>");
            }
            e.preventDefault(); // prevent form from POST to server
            $('#textbox1').focus();
            focusSet = true;
        } else {
            $("#textbox1").parent().next(".validation").remove(); // remove it
        }
    });

    $('#buttonok').click(function () {
        var sEmail = $('#email').val();
        if ($.trim(sEmail).length == 0) {
            $("#ee").text("Enter the valid email.");
            $("#ee").css({"color": "red","font-size":"20px","padding":"2%"});
        }
        else{
            $("#ee").hide();
        }
    });

    $('#buttonok1').click(function () {
        var sEmail = $('#need').val();
        if ($.trim(sEmail).length == 0) {
            $("#ee1").text("Enter the text.");
            $("#ee1").css({"color": "red","font-size":"20px","padding":"2%"});
        }
        else{
            $("#ee1").hide();
        }
    });
    $('#buttonok7').click(function () {
        var sEmail = $('#ttt7').val();
        if ($.trim(sEmail).length == 0) {
            $("#ee7").text("Enter the text.");
            $("#ee7").css({"color": "red","font-size":"20px","padding":"2%"});
        }
        else{
            $("#ee7").hide();
        }
    });

    $('#buttonok8').click(function () {
        var sEmail = $('#ttt8').val();
        if ($.trim(sEmail).length == 0) {
            $("#ee8").text("Enter the text.");
            $("#ee8").css({"color": "red","font-size":"20px","padding":"2%"});
        }
        else{
            $("#ee8").hide();
        }
    });
    $('#buttonok9').click(function () {
        var sEmail = $('#ttt9').val();
        if ($.trim(sEmail).length == 0) {
            $("#ee9").text("Enter the text.");
            $("#ee9").css({"color": "red","font-size":"20px","padding":"2%"});
        }
        else{
            $("#ee9").hide();
        }
    });
});