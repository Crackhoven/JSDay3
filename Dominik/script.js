function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let random = randomNumber(-5, 25);
console.log(random);
if (random < 10) {
    console.log("The weather is cold")
} else {
    console.log("The weather is moderate")
};

let arr1 = [1, 7, -3, 9];
console.log(Math.max(...arr1))

let random2 = randomNumber(-5, 40)
console.log(random2);

if (random2 < 10) {
    document.getElementsByClassName("card")[0].innerHTML = `<img src="https://cdn.pixabay.com/photo/2017/02/13/11/45/ice-2062433_960_720.jpg" class="card-img-top" alt="...">
    <div class="card-body">
        <p class="card-text">The weather is cold</p>
    </div>`;
} else if (random2 < 26) {
    document.getElementsByClassName("card")[0].innerHTML = `<img src="https://cdn.pixabay.com/photo/2013/08/11/04/24/city-171444_960_720.jpg" class="card-img-top" alt="...">
    <div class="card-body">
        <p class="card-text">The weather is moderate</p>
    </div>`;
} else {
    document.getElementsByClassName("card")[0].innerHTML = `<img src="https://cdn.pixabay.com/photo/2016/09/08/13/58/desert-1654439_960_720.jpg" class="card-img-top" alt="...">
    <div class="card-body">
        <p class="card-text">It's hot oof</p>
    </div>`;
}

let studentGrades = [
    ["Martin", 76], ["Thomas", 85], ["Klaus", 65], ["Maria", 93], ["David", 81]
 ]

// for(let points of studentGrades){
//     console.log(points[1]);
//     if(points[1] < 60){
//         console.log("F");
//     }else if (points[1] < 70) {
//         console.log("D");
//     }else if (points[1] < 80) {
//         console.log("C");2
//     }else if (points[1] < 90) {
//         console.log ("B");
//     }else { 
//         console.log ("A");
//     }      
// }

let grades = 0
for (let i = 0; i < studentGrades.length; i++) {
    grades += studentGrades [i] [1];
}

let average = (grades / studentGrades.length);
console.log("Average grade: " + average + " " + check(average));

function check(points) {
    if(points < 60){
        return ("F");
    }else if (points < 70) {
        return ("D");
    }else if (points < 80) {
        return ("C");
    }else if (points < 90) {
        return  ("B");
    }else { 
        return  ("A");
    }  
}
for (let grade of studentGrades) {
    console.log(grade[0] + " " + grade[1] + " " + check(grade[1]));
}

for (let i = 1; i < 101; i++) {
    if (i%15==0) 
    console.log("FizzBuzz");
    else if (i%3==0) 
    console.log("Fizz");
    else if (i%5==0) 
    console.log("Buzz");
    else
    console.log (i);
}