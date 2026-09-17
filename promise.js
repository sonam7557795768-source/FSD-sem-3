const promise=new Promise((resolve,reject)=>{
    let success=true;
    if(success){
        resolve("operation successful");
    }else{
        reject("operation failes");
    }
});
promise.then(result=>{ // agar koi error aa rahi hai to usko resolve aaise karege
    console.log(result)
})
.catch(error=>{
    console.log(error);
})