function step1(){
    return Promise.resolve(10);
    
}
step1().then(result=>{
    console.log("step 1", result); // this is called try block
    return result+10;
}).then(result=>{
    console.log("step 2", result)
    return result+10;
}).then(result=>{
    console.log("step 3", result);
}).catch(error=>{
    console.log("Error",error);
});
