var indexValue  = 1
showImage(indexValue);
function btm_slide(e){showImage(indexValue = e);}
function side_slide(e){showImage(indexValue += e);}
function showImage(e){

var i;
const img = document.querySelectorAll('img');
const slider = document.querySelectorAll('.btm-slides span');


 if(e > img.length){indexValue = 1}
        if(e < 1){
          indexValue = img.length}

        for(i = 0; i < img.length; i++){
          img[i].style.display = "none";
        }

        for(i = 0; i < slider.length; i++){
          slider[i].style.background = "rgba(255,255,255,0.1)";
        }

        img[indexValue-1].style.display = "block";
        slider[indexValue-1].style.background = "white";

}