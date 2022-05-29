require(
    [
        'jquery',
        'Magento_Ui/js/modal/modal',
        'mage/translate'
    ],
    function(
        $,
        modal,
        $t
    ) {
        let options = {
            type: 'popup',
            title: $t('Please Enter Number from 1 to 50'),
            responsive: true,
            innerScroll: true,
            modalClass: 'guessing-modal',
            buttons: [{
                text: $t('Guess'),
                class: 'btn-guess',
                click: function (event) {
                    let GenerateGuess = parseInt(Math.floor((Math.random() * 50) + 1));
                    let inputValue = parseInt($('body').find('#guess-value').val());
                    let msg ='';

                    if(inputValue == GenerateGuess){
                        $("#guess-value").attr('disabled' , true);
                        msg = $t('Congratulation! You guessed the number correctly');
                    }
                    else if(inputValue < GenerateGuess){
                        msg = $t('Number entered is below than random number');
                    }
                    else{
                        msg = $t('Number entered is greater than random number');
                    }
                    $('body').find('.show-msg').text(msg).show();
                }
            }]
        };

        $("#guess-value").keypress( function(e) {
            var current_val = $(this).val();
            var typing_char = String.fromCharCode(e.which);
            if (parseFloat(current_val + "" +typing_char) > 50) {
                return false;
            }
        });

        modal(options, $('#popup-modal'));
        $("#clickMe").on('click',function(){
            $("#popup-modal").modal("openModal");
        });

    }
);
