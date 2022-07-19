var slider = [ 0,0,1,0,0,0]
var sliderReal = [ true,true,false,true,true,true]
var showcase = slider.indexOf(2);
while(slider.length < 0) {
    slider++;
    if (sliderReal) {
        console.log(slider())
    }
}