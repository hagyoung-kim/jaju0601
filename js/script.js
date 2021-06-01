$(window).load(function(){
    visualslider();
    subMenuShow();
    mobileNav();
    mobilebtn();
    headerScroll();
    addrBtn();
})


function visualslider(){
    $("#visual_wrap ul").slick({
        
        slide : "li",
        slidesToShow : 3,
        slidesToScroll : 1,
        autoplay : true,
        autoplaySpeed : 1000,
        dots : false,
        arrows : false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                  dots: false
              }  
            },
            {
              breakpoint: 468,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                  dots: false
              }
                
            }
            
        ]

    });
}



function subMenuShow(){
    var $mainMenu = $("#nav > ul > li > a");
    var $subMenu = $("ul.submenu");
    
    $mainMenu.on("mouseenter", onShow);
    $("#header_wrap").on("mouseleave", outShow);
    
    
    function onShow(){
        var clickNum = $mainMenu.index($(this));
        
        $subMenu.removeClass("on");
        $subMenu.eq(clickNum).addClass("on");
    }
    
    function outShow(){
        $subMenu.removeClass("on");
    }
}



function mobileNav(){
    $("#mobile_nav .submenu").slideUp(0);
    $("#mobile_nav > ul > li > a").on("click", onSubShow);
    
    var openMenu = false;
    
    function onSubShow(){
        var openMenu = $(this).next().is(":hidden");
        
        $("#mobile_nav > ul > li").removeClass("on");
        $(this).parent().addClass("on");
        
        if(openMenu){
            $("mobile_nav .submenu").slideUp(0);
            $(this).next().slideDown(500);
        }else{
            $("#mobile_nav .submenu").slideUp(500);
            return false;
        }
    }
}






function mobilebtn(){
    var openMenu = false;
    
    $("#mobile_nav").css({"opacity":0, "top":"-100%"});
    $("nav").css({"top":"-100%"});
    
    
    $("#mobile_btn").on("click", onNav);
    
    function onNav(){
        if(openMenu == false){
            setTimeout(function(){
                $("#mobile_btn .line01").addClass("on");
                $("#mobile_btn .line03").addClass("on");
            },300)
            setTimeout(function(){
                $("#mobile_btn a").addClass("on");
            },600)
            
            $("#mobile_nav").animate({"opacity":1, "top":0},500, "easeOutCubic");
            $("#nav").animate({"top":60},500, "easeOutCubic");
            $("body").css({"overflow":"hidden"});
            
            
            openMenu = true;
            
            return false;
        }else if(openMenu == true){
            $("#mobile_btn a").removeClass("on");
            $("#mobile_btn .line01").removeClass("on");
            $("#mobile_btn .line02").removeClass("on");
            $("#mobile_btn .line03").removeClass("on");
            
            $("#mobile_nav").animate({"opacity":0, "top":"-100%"},500, "easeOutCubic");
            $("#nav").animate({"top":"-100%"}, 500,"easeOutCubic", function(){
                $("#mobile_nav .submenu").slideUp(0);
                $("#mobile_nav > ul > li").removeClass("on");
            });
            
            $("body").css({"overflow":"scroll"});
            
            openMenu = false;
            return false;
        }
    }   
}






function headerScroll(){
    $(window).on("scroll", onScroll)
    
    function onScroll(){
        var headerTop = $(window).scrollTop();
        var headerWidth = $(window).outerWidth();
        
        
        if(headerTop > 50 && headerWidth >= 1024){
            $("#header_wrap").addClass("on");
            //$("#mobile_btn a span").addClass("on");
        }else{
            $("#header_wrap").removeClass("on");
        }
    }
}




function addrBtn(){ //푸터 상세주소보기 버튼
    
    $(".addr_wrap").slideUp(0);
    $(".address_m button").on("click", onAddr)
    
    function onAddr(){
        $(".addr_wrap").slideToggle(300);
        $(this).find("span").toggleClass("on");
    }
}
































