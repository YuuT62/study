const price = 1000;
const tax = 0.1;
console.log(price * tax);

const a = 80 + 90 + 60 + 85 + 100;
const b = 40 + 30 + 50 + 25 + 60;
if (a >= 300 && b >=300) {
    console.log("素晴らしい");
} else if (a >= 300 || b >= 300) {
    console.log("普通");
} else {
    console.log("頑張ろう");
}

const x = 1;
switch (x) {
    case 0:
        console.log("大吉");
        break;
    case 1:
        console.log("中吉");
        break;
}

const price1 = 1800;
const result1 = (price1 < 1000) ? "安い" : (price1 > 2000) ? "高い" : "丁度良い";
console.log(result1);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
double_even = numbers.map(function (number) {
    if (number % 2 === 0) {
        return number * 2;
    } else {
        return number;
    }
});
console.log(double_even);
let customer = [];
let name = ["佐藤", "田中", "鈴木"];
let result = name.map(function (item) {
    return item + "様";
});
customer.push(result);
console.log(customer);

let array = ["魚", "肉", "肉", "魚","肉", "魚","野菜"];
const array_filter = array.filter(function (item, num) {
    return array.indexOf(item) === num;
});
console.log(array_filter);







function advice(name, score) {
    if (score >= 0 && score < 30) {
        return `${name}君もう少し頑張りましょう`;
    } else if (score >= 30 && score < 70) {
        return `${name}君普通です`;
    } else if (score >= 70 && score <= 100) {
        return `${name}君良くできました`;
    } else {
        return "正しい数字を入力してください";
    }
}

console.log(advice("A", 80));
console.log(advice("B", 15));
console.log(advice("C", 50));
console.log(advice("C", 0));

const test = ["国語", "数学", "英語"];
test.push("理科");
test.push("社会");
console.log(test);
console.log(test.length);

for (let i = 1; i <= 50; i++){
    if (i % 15 === 0) {
        console.log(`${i}FizzBuzz`);
    } else if (i % 3 === 0) {
        console.log(`${i}Fizz`);
    } else if (i % 5 === 0) {
        console.log(`${i}Buzz`);
    } else {
        console.log(i);
    }
}

let water = 1000;
const drink = 180;
while (water > 0) {
    console.log(water)
    water -= drink;
}
console.log("水を飲み干した");

const strings = "HTML・CSS・JavaScript".split("・");
console.log(strings);
console.log(strings.join('').length);

const str = "HTMLとCSSとJavaScriptとPHP";

const indexOfJS = str.indexOf("JavaScript");
console.log(indexOfJS);

function eventDate(data) {
    const year = data.slice(0, 4);
    let month = data.slice(4, 6);
    if (month[0] === "0") {
        month = month[1];
    }
    let day = data.slice(6, 8)
    if (day[0] === "0") {
        day = day[1];
    }
    const event = data.slice(8);
    return `${year}年${month}月${day}日に${event}が開催されました。`;
}
console.log(eventDate("20210723東京オリンピック"));

// const pr = prompt('数字を入力してください');
// let con = confirm(`${pr}が入力されました`);
// if (con) {
//     if (pr % 2 === 0 && pr!="") {
//         alert('偶数');
//     } else if (pr % 2 === 1) {
//         alert('奇数');
//     } else {
//         alert('入力された値が不正です');
//     }
// } else {
//     alert('リロードしてやり直してください');
// }

// function say() {
//   alert("Hello");
// }
// const timerId = setInterval(say, 1000);

// function stop() {
//   clearInterval(timerId);
// }
// setTimeout(stop, 5000);

// let count1 = 0;
// function add() {
//     return console.log(count1++);
// }
// const timerId = setInterval(add, 1000);


const school = {
    name: "COACHTECH",
    month: 2,
    skills: ["html", "css", "js", "Vue.js", "php", "Laravel"],
    createSentense() {
        //処理を記述
        let data;
        this.skills.forEach(function (skill, index) {
            if (index === 0) {
                data=skill;
            } else {
                data += `と${skill}`;
            }
        });
        return `${this.name}は${this.month}ヶ月で${data}を学ぶことができます`;
    }
};

// console.log(school.createSentense());

// const btn = document.querySelector('button');
// btn.addEventListener("click", function () {
//     const red = prompt("クラス名を入力してください");
//     const classRed = document.getElementsByClassName(red);
//     classRed[0].style.color = "red";
// });


document.getElementById('section-2').style.color = 'red';

var baseElement = document.getElementById('section-2');
var section2node2 = baseElement.childNodes[5];
console.log(baseElement.childNodes);
console.log(section2node2);
section2node2.innerHTML = '子2は変更されました';
