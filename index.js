function receivesAFunction(callback){
    
    return callback();
    }
    function callback(){
         return "Callback it is!"}
    
    receivesAFunction();
    
    function returnsANamedFunction(){
        return function names(){return 'I\'m a named funtion'}
    }
    returnsANamedFunction();
    
    function returnsAnAnonymousFunction(){
        return function(){return "I'm Anonymous!"};
    }