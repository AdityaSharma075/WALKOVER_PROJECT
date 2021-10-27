{
    let addQuestion = function(){
        let addform = $('#add-form');
        let alladdform = $('*#add-form');
        alladdform.hide();
        let btn = $("#add-btn");
        $('*#display-add-form-btn').hide();
        let addbtn = $('#display-add-form-btn');
        addbtn.show();
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

        addbtn.click(function(e){
            
            e.stopPropagation();

            addform.show();
        })
        $(document).click(function(e){
            alladdform.hide();
        })

        addform.click(function(e){
            e.stopPropagation();
        });
    }
    addQuestion();
}
