module.exports = function(request,response,next){
    if(!request.session.user){
        request.session.user = {
            messages:[]
        };
    }
    next();
}