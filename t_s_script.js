
function addStyle1(){
  $("#st1, #st2, #st3, #st4,#st5 ").css("background", "red");
}

function addStyle2(){
  $("#st1,#st2,#st3, #st4, #st5").css("fontWeight", "bold");
}


        $(document).ready(function(){
            $("#search").keyup(function(){
                _this = this;
                $.each($("#mytable tbody tr"), function() {
                    if($(this).text().toLowerCase().indexOf($(_this).val().toLowerCase()) === -1)
                       $(this).hide();
                    else
                       $(this).show();                
                });
            });
        });


        $(document).ready(function(){
            $("#search_2").keyup(function(){
                _this = this;
                $.each($("#mytable_2 tbody tr"), function() {
                    if($(this).text().toLowerCase().indexOf($(_this).val().toLowerCase()) === -1)
                       $(this).hide();
                    else
                       $(this).show();                
                });
            });
        });
