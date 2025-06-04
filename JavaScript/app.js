const global = document.querySelectorAll('.global')

for(let i = 0; i < global.length; i++){
    global[i].addEventListener('mousemove', function(){
        remove();
        global[i].classList.add(`crecer${i+1}`, 'organizarTexto');
})
global[i].addEventListener('mouseout', function(){

    global[i].classList.remove(`crecer${i+1}`, 'organizarTexto');
    global[i].classList.add('global');
})
}
function remove(){
    for(let i = 0; i < global.length; i++){
        global[i].classList.remove('global');
    }
}