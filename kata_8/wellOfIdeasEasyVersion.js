//https://www.codewars.com/kata/57f222ce69e09c3630000212/train/javascript
//Well of Ideas - Easy Version.  
let testData =['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good'];
const well = x  => {
    let current
    let count = 0
    for(i = 0; i < testData.length; i++){
console.log(`\n itteration. i= ${i}`);
current = x[i]
console.log(`current= ${current}`);
if(current === 'good'){
    console.log("current = good")
    count ++
    console.log(`count${count}`)
    
}

    }
if (count == 1 || count === 2) return 'Publish'
if (count >= 2) return 'I smell a series!'
if (count == 0) return 'Fail!'
return x
}
const result = well(testData)
console.log(result);