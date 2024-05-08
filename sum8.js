let ages=[23 , 34 , 45 , 56 , 78]
let old = 0
for(x=0; x<=ages.length-1; x++){
    if(ages[x]> old){
        old =ages[x]
    }
}
console.log(old)