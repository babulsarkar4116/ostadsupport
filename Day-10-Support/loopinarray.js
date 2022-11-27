// Array ar moddhe loop== for loop chalabo
// Object ar moddhe loop== for in loop chalabo

var numbers=[45,87,89,56,32,51,42,87,67,89,90,188,120,134];

// for (let el of numbers){
//     console.log(el);
// }

// for (let el of numbers){
//     if (el>=50){
//         console.log(el);
//     }
// }

const b=numbers.length

for(let i=0;i<b;i++){
    if(numbers[i]==51){
        break
        // continue
    }
    console.log("The printed number is", numbers[i]);
}