
{
    let loginType = function(){
        let passbtn = $('#login-pass-btn');
        let otpbtn = $('#login-otp-btn');
        // $('#pass-form').hide();
        $('#otp-form').hide();
        passbtn.click(function(e){
            $('#pass-form').show();
            $('#otp-form').hide();

        })
        otpbtn.click(function(e){
            $('#pass-form').hide();
            $('#otp-form').show();

        })

    }
    loginType();

}