{
    let result = function(){
        // console.log('here 01');
        let btn = $('#submit-btn');
        let form = $('#exam-form');
        let container = $('#exam-container')
        btn.click(function(e){
            e.preventDefault();
            

            $.ajax({
                type : 'post',
                url : '/test/submit',
                data : form.serialize(),
                
                success : function(data){
                    form.remove();
                    container.prepend(`<h1>You have Succesfully Submitted the exam </h1> <h2>Your score is ${data.data.score}</h2>` )
                },
                error : function(error){
                    console.log(error.responseText);
                }
            })
        })
    }

    result();
}