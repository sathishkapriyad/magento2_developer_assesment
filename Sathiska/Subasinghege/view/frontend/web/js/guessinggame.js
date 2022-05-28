(function  () {
    require(["jquery"], function($) {
        var appendthis =  ("<div class='modal-overlay js-modal-close'></div>");
        $('a[data-modal-id]').click(function(e) {
            e.preventDefault();

            $('form#game-form').trigger("reset");
            $(".congratessul").empty();
            $(".congrateserr").empty();
            $("#gamenumber").empty();
            $("#gameinput").attr('disabled' , false);
            $("#generatenum").show();
            $("body").append(appendthis);
            $(".modal-overlay").fadeTo(500, 0.7);

            //$(".js-modalbox").fadeIn(500);
            var modalBox = $(this).attr('data-modal-id');
            $('#'+modalBox).fadeIn($(this).data());
        });


        $(".js-modal-close, .modal-overlay").click(function() {
            $(".modal-box, .modal-overlay").fadeOut(500, function() {
                $(".modal-overlay").remove();
            });
        });

        $(window).resize(function() {
            $(".modal-box").css({
                top: ($(window).height() - $(".modal-box").outerHeight()) / 2,
                left: ($(window).width() - $(".modal-box").outerWidth()) / 2
            });
        });

        $(window).resize();

        $("#gameinput").keypress( function(e) {
            var current_val = $(this).val();
            var typing_char = String.fromCharCode(e.which);
            if (parseFloat(current_val + "" +typing_char) > 50) {
                return false;
            }
        });

        $('#generatenum').click(function(e) {
            e.preventDefault();
            if($("#gameinput").val()){
                $("#gamenumber").empty().append(Math.floor(Math.random() * 50));
                var gameinputval = $("#gameinput").val();
                var generatenumval = $("#gamenumber").text();
                if(gameinputval == generatenumval){
                    $(".congrateserr").empty();
                    $("#generatenum").hide();
                    $("#gameinput").attr('disabled' , true);
                    $(".congratessul").empty().append("Congrates! <p>You gussed the number correctly");
                }else{
                    if(gameinputval < generatenumval){
                        $(".congrateserr").empty().append("You need to guess higher. Try again");
                    }else{
                        $(".congrateserr").empty().append("You need to guess lower. Try again");
                    }
                }
            }else{
                $(".congrateserr").empty().append("Please guess the number in box.");
            }
        });
    });
})();



