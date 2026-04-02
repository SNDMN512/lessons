let title = "project1";
const screens = "Простые, Сложные, Интерактивные";
let screenPrice = 500;
let rollback = 3;
let fullPrice = 1000;
let adaptive = true;

console.log(typeof(title), typeof(fullPrice), typeof(adaptive));
console.log(screens.length);
console.log(`${screenPrice}$`);
console.log(`${fullPrice}$`);
console.log(screens.toLowerCase().split(","));
console.log(`${fullPrice*(rollback/100)}%`);




