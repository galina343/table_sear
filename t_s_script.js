
function addStyle1(){
  $("#st1, #st2, #st3, #st4,#st5 ").css("background", "red");
}

function addStyle2(){
  $("#s1, #s2, #s3, #s4,#s5, #s6,#s7").css("background", "green");
}

function addStyle3(){
  $("#d1,#d2, #d3, #d4,#d5, #d6,#d7, #d8, #d9, #d10,#d11, #d12,#d13, #d14, #d15, #d16,#d17, #d18,#d19, #d20, #d21, #d22,#d23, #d24,#d25, #d26, #d27, #d28,#d29, #d30,#d31, #d32, #d33, #d34,#d35,#d36, #d37").css("background", "yellow");
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
		
		$(document).ready(function(){
            $("#search_3").keyup(function(){
                _this = this;
                $.each($("#mytable_3 tbody tr"), function() {
                    if($(this).text().toLowerCase().indexOf($(_this).val().toLowerCase()) === -1)
                       $(this).hide();
                    else
                       $(this).show();                
                });
            });
        });
