$(document).ready(function(){

    const slider1 = $(".slider1");
    const slider2 = $(".slider2");
    
    const prev = $(".prev");
    const next = $(".next");
    
    var direction;
    
    next.on("click", function(){
        direction = 1;
        //SLIDER 1
        let itemWidth1 = slider1.children().last().width();
        slider1.css("transform", `translate(${itemWidth1}px)`);
    
        //SLIDER 2
        let itemWidth2 = slider2.children().first().width();
        slider2.css("transform", `translate(-${itemWidth2}px)`);

        $("#right").attr("src", "./Assets/arrow-gray-right.png");
        $(".button-next").css("border", "1px solid #DADADA");

        setTimeout(function(){
            $("#right").attr("src", "./Assets/arrow-blue-right.png");
            $(".button-next").css("border", "1px solid #134880");
       }, 300)

        
    });
    
    prev.on("click", function(){
        direction = 0;
        //SLIDER 1
        let itemWidth1 = slider1.children().first().width();
        slider1.css("transform", `translate(-${itemWidth1}px)`);
        
        //SLIDER 2
        let itemWidth2 = slider2.children().last().width();
        slider2.css("transform", `translate(${itemWidth2}px)`);

        $("#left").attr("src", "./Assets/arrow-gray-left.png");
        $(".button-prev").css("border", "1px solid #DADADA");

        setTimeout(function(){
            $("#left").attr("src", "./Assets/arrow-blue-left.png");
            $(".button-prev").css("border", "1px solid #134880");
       }, 300)
    });
    
    slider1.on("transitionend", function(){
        if(direction == 1){
            slider1.prepend(slider1.children().last());
        }else {
            slider1.append(slider1.children().first());
        }
        
        slider1.css("transition", "none");
        slider1.css("transform", "translate(0)");
        setTimeout(function(){
            slider1.css("transition", "all 0.3s");
       })
    });
    
    slider2.on("transitionend", function(){
        if(direction == 1){
            slider2.append(slider2.children().first());
        }else {
            slider2.prepend(slider2.children().last());
        }
        
        slider2.css("transition", "none");
        slider2.css("transform", "translate(0)");
        setTimeout(function(){
            slider2.css("transition", "all 0.3s");
       })
    });
});



