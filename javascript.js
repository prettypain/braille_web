function get_spot_num(number){
    number = Number(number);
    switch(number){
        case 0: return [2, 3, 4];
        case 1: return [1];
        case 2: return [1,3];
        case 3: return [1,2];
        case 4: return [1,2,4];
        case 5: return [1,4];
        case 6: return [1,2,3];
        case 7: return [1,2,3,4];
        case 8: return [1,3,4];
        case 9: return [2,3];
    }
}
function draw_dot(target, set_value){
    target = $(target+" .dot");

    for(let i=0; i<target.length; i++){
        $(target[i]).css("background-color", "#fff");
    }


    //본격적으로 그리기
    for(let i=0; i<set_value.length; i++){
        let spot = get_spot_num(set_value[i]);

        for(let j=0; j<spot.length; j++){
            $(target[i*6 + spot[j]-1]).css("background-color",default_color);
        }
    }
}
$(document).ready(function(){
    console.log("jquery on");
    default_color = "black";
    let class_name = [".hour", ".minute"];
    for(let i=0; i<class_name.length; i++){
        target = $(class_name[i]).children();

        for(let j=0; j<target.length; j++){
            $(target[j]).addClass("dot");
        }
    }

    setInterval(function(){ 
        const now = new Date();
        hours = now.getHours();
        minutes = now.getMinutes();
        

        //시간 설정
        let hour_last = hours%10; //1의 자리
        let hour_first = hours.toString().length==2 ? hours.toString()[0] : 0; //10의 자리
        let minute_last = minutes%10; //1의 자리
        let minute_first = minutes.toString().length==2 ? minutes.toString()[0] : 0; //10의 자리

        let set_times = [[hour_first, hour_last], [minute_first, minute_last]];


        //그리기
        for(let i=0; i<class_name.length; i++){
            draw_dot(class_name[i],set_times[i]);
        }
    }, 1000);
    setInterval(function(){ 
        const now = new Date();
        let sec = now.getSeconds();
        let mil_sec = now.getMilliseconds();
        let foot = document.getElementById("foot");
        foot.innerHTML = sec + ":" + mil_sec;
    }, 10);
})