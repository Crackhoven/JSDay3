function randomNumber(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let random = randomNumber(-5, 25);
console.log(random);
if (random < 10) {
    console.log("The weather is shite")
} else {
    console.log("The weather is still shite but a bit warmer")
};

let arr1 = [1, 7, -3, 9];
console.log(Math.max(...arr1))

let random2 = randomNumber(-5, 40)
console.log(random2);

if (random2 < 10) {
    document.getElementsByClassName("card")[0].innerHTML = `<img src="https://cdn.pixabay.com/photo/2017/02/13/11/45/ice-2062433_960_720.jpg" class="card-img-top" alt="...">
    <div class="card-body">
        <p class="card-text">The weather is shite</p>
    </div>`;
} else if (random2 < 26) {
    document.getElementsByClassName("card")[0].innerHTML = `<img src="https://cdn.pixabay.com/photo/2013/08/11/04/24/city-171444_960_720.jpg" class="card-img-top" alt="...">
    <div class="card-body">
        <p class="card-text">It's a bit warmer but still shite</p>
    </div>`;
} else {
    document.getElementsByClassName("card")[0].innerHTML = `<img src="https://cdn.pixabay.com/photo/2016/09/08/13/58/desert-1654439_960_720.jpg" class="card-img-top" alt="...">
    <div class="card-body">
        <p class="card-text">It's fucking hot m8</p>
    </div>`;
}

let studentGrades = [
    ["Martin", 76],
    ["Thomas", 85],
    ["Klaus", 65],
    ["Maria", 93],
    ["David", 81]
]

let grades = 0;
for (let i = 0; i < studentGrades.length; i++) {
    grades += studentGrades[i][1];
}
let average = (grades / studentGrades.length);
console.log("Average grade: " + average + ' ' + check(average));

function check(result) {
    if (result < 60) {
        return ("Grade: F");
    } else if (result < 70) {
        return ("Grade: D");
    } else if (result < 80) {
        return ("Grade: C");
    } else if (result < 90) {
        return ("Grade: B");
    } else if (result < 100) {
        return ("Grade: A");
    }
}
for (let grade of studentGrades) {
    console.log(grade[0] + ' ' + grade[1] + ' ' + check(grade[1]));
    // check(grade[1]);
}

for (let i = 1; i < 101; i++) {
    if (i % 15 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
}