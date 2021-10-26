{
    let addQuestion = function(){
        let addform = $('#add-form');
        let btn = $("#add-btn");
        btn.click(function(e){
            e.preventDefault();

            $.ajax({
                type : 'post',
                url : '/test/create/save-question',
                data : addform.serialize(),
                success : function(data){
                    addform[0].reset();
                    console.log(data.message);
                },
                error : function(error){
                    console.log(error.responseText);
                }
                
            })
        })

    }
    addQuestion();
}
