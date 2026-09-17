//sumnevery matab koi aaisa condition jo true ho    
//every matlab sari conditions true ho
//sum matlab kuch conditions hee true ho
 
let marks=[80,90,75,95];
let lowmarks=marks.some(mark=>mark<40);
console.log(lowmarks);
let highmarks=marks.every(mark=>mark>=40);
console.log(highmarks);