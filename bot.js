var dummyIndex = 0;
const arrTxt = document.getElementById('row1').innerText.split(' ');
const input = document.querySelector('#inputfield');
console.log(dummyIndex);
function typingBot(){
    if(dummyIndex < arrTxt.length){
        document.querySelector('#inputfield').value = arrTxt[dummyIndex]; 
        let e = $.Event('keyup');//nyomot distackoverflow
        e.which= 32;
        $('#inputfield').trigger(e);
        dummyIndex++;
        setTimeout('typingBot()', arrTxt.length);
    }
}
setTimeout('typingBot()', arrTxt.length);
