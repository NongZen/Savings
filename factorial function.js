function factorial(n){
    let sum = 1
    for(let i = 1; i < (n+1) ; i++){
       sum = sum * i
    }
    sum = sum.toLocaleString("en-US")
    return(sum)
  }
