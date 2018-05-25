function timer(fn,ms){
    return setInterval(fn,ms);
}

function pr(){
    console.log('Keyboard...');
}

let _timer = timer(pr,3000);