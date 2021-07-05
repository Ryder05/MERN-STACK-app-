function log1(req,res,next){
    console.log("Osama midlleware")
    next()
}
function log2(req,res,next){
    console.log("Yessin midlleware")
    next()
}
module.exports = { log1, log2};