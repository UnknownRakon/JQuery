$(document).ready(function () {	   
    $('#burger').click(
        function () {	
            $('ul.menu_body').slideToggle(200);
            $('div.menu').toggleClass("none")
        });	
    $('ul.menu_body li a').mouseover(
        function () {	
            $(this).animate({ fontSize: "14px", paddingLeft: "20px" }, 50 );    
        });	
    $('ul.menu_body li a').mouseout(
        function () {	
            $(this).animate({ fontSize: "12px", paddingLeft: "10px" }, 50 );    
        });
    });
$(document).ready(function () {	   
    $('li.order').find('button').click(
        function () {	
            $(this).html('<p>added</p>');
            $(this).css({'background-color' : '#a41b12', 'color' : '#fff'})    
        })
    })
$(document).ready(function () {
    $('#reviewButt').click(
        function () {
            $('div.who').find('img.photo').replaceWith('<img src="img/reviews/foto2.png" class="photo">')
        }
    )
    $('#reviewButt').dblclick(
        function () {
            $('div.who').find('img.photo').replaceWith('<img src="img/reviews/foto.png" class="photo">')
        }
    )
})