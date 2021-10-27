{
    let sendOtp = function(){
        // console.log('here 01');
        let btn = $('#otp-btn');
        btn.click(function(e){
            e.preventDefault();
            // console.log('here');

            $.ajax({
                type : 'post',
                url : '/admin/send-otp',
                data : {
                    username : $('#user').val()
                },
                success : function(data){
                    $('#otp-form').prepend('<label for="otp-btn">Enter Otp</label><input type = "text" name = "password" placeholder = "Enter Otp" required></input> <input type = "submit" class = "btn btn-primary" value = "Login"></input>')
                   

                    $('#otp-btn').remove();
                },
                error : function(error){
                    console.log(error.responseText);
                }
            })
        })
    }

    sendOtp();
}