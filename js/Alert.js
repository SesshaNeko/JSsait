var Send=document.getElementById('Send');
function test(){
    swal.fire(
    'Good job!',
    'You clicked the button!',
    'success');
    //console.log(this);
    this.style.background = 'red';
}

Send.onclick=test;
//document.querySelector('li').onclick= test;
var li=document.querySelectorAll('li');
li.forEach(function(element){
    element.onclick=test;
})
