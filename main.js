// console.log("main's connected")


var elems = $('.main-section');
// console.log(elems);
for(var i=0;i<elems.length;i++){
    // console.log(elems[i]) 
    elems[i].addEventListener('click', acordion);
}
function acordion(e){
    var nextElem = this.nextSibling.nextSibling;
    // console.dir(nextElem.nextElementSibling.classList[1]);
    // console.log(this);
    // console.dir(nextElem.classList);
    if(this.children[1].innerHTML == '+'){
        this.children[1].innerHTML = '-';
        nextElem.classList.remove('hidden');
    }else{
        
        this.children[1].innerHTML = '+';
        nextElem.classList.add('hidden');
        if( nextElem.classList.length > '1'){
            if( nextElem.children[1].innerHTML == '-'){
                nextElem.nextElementSibling.classList.add('hidden');
                nextElem.children[1].innerHTML = '+'
            }   
        }

    }
    
}
var subElem = $('.text');
for(var k = 0; k <  $('.text').length; k++){
    subElem[k].addEventListener('click',subAcordion);
}
// console.log(subElem);
function subAcordion(){
    var nextElem = this.nextSibling.nextSibling;
    if(this.children[1].innerHTML == '+'){
        this.children[1].innerHTML = '-';
        nextElem.classList.remove('hidden');
    }else{
        this.children[1].innerHTML = '+';
        nextElem.classList.add('hidden');
    }
    // console.dir(this.classList);
}