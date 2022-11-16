function error(){
    try {
        aleeeeert("Alertita");
    }
    catch(error) {
        throw new EvalError('Se ha producido un error, error13.js', 100);
    }
}