/**
 * Created by miaomin on 5/21/2018.
 */
function once(fn){
    return function (...args){
        let res = fn.apply(this,args);
        return res;
    }
}

once(function(){
    console.log('kiss');
})();