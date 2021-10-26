// {
//     let startExam = function(){
//         // console.log('here 01');
//         let btn = $('#otp-btn');
//         btn.click(function(e){
//             e.preventDefault();
//             // console.log('here');

//             $.ajax({
//                 type : 'post',
//                 url : '/admin/send-otp',
//                 data : {
//                     username : $('#user').val()
//                 },
//                 success : function(data){
//                     $('#otp-form').prepend('<input type = "text" name = "password"  required></input> <input type = "submit" value = "Login"></input>')
                   

//                     $('#otp-btn').remove();
//                 },
//                 error : function(error){
//                     console.log(error.responseText);
//                 }
//             })
//         })
//     }

//     sendOtp();
// }