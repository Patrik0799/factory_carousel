$(document).ready(() => {

    const slider1 = $(".slider_one");
    const slider2 = $(".slider_two");
    
    const prev = $(".prev");
    const next = $(".next");
    
    let direction;

    next.hover(() => {
        $("#right").attr("src", "./Assets/arrow-blue-right.png");
        next.css("border", "1px solid #134880");
    }, () => {
        $("#right").attr("src", "./Assets/arrow-gray-right.png");
        next.css("border", "1px solid #DADADA");
    });

    prev.hover(() => {
        $("#left").attr("src", "./Assets/arrow-blue-left.png");
        prev.css("border", "1px solid #134880");
    }, () => {
        $("#left").attr("src", "./Assets/arrow-gray-left.png");
        prev.css("border", "1px solid #DADADA");
    });

    next.on("click", () => {
        direction = 1;
        //SLIDER 1
        let itemWidth1 = slider1.children().last().width();
        slider1.css("transform", `translate(${itemWidth1 + 10}px)`);
        //SLIDER 2
        let itemWidth2 = slider2.children().last().width();
        slider2.css("transform", `translate(${itemWidth2 + 10}px)`);
    });
    
    prev.on("click", () => {
        direction = 0;
        //SLIDER 1
        let itemWidth1 = slider1.children().first().width();
        slider1.css("transform", `translate(-${itemWidth1 + 10}px)`);
        //SLIDER 2
        let itemWidth2 = slider2.children().first().width();
        slider2.css("transform", `translate(-${itemWidth2 + 10}px)`);
    });
    
    slider1.on("transitionend", () => {
        if(direction == 1){
            slider1.prepend(slider1.children().last());
        }else {
            slider1.append(slider1.children().first().hide().fadeIn(500));
        }
        
        slider1.css("transition", "none");
        slider1.css("transform", "translate(0)");
        setTimeout(() => {
            slider1.css("transition", "all 0.5s");
       })
    });
    
    slider2.on("transitionend", () => {
        if(direction == 1){
            slider2.prepend(slider2.children().last());
        }else {
            slider2.append(slider2.children().first().hide().fadeIn(500));
        }
        
        slider2.css("transition", "none");
        slider2.css("transform", "translate(0)");
        setTimeout(() => {
            slider2.css("transition", "all 0.5s");
       })
    });
});



