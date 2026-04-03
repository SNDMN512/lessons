"use strict";

let title = prompt("Как называется ваш проект?");
let screens = prompt("Какие типы экранов нужно разработать?");
let screenPrice = +prompt("Сколько будет стоить данная работа?");
let adaptive = confirm("Нужен ли адаптив на сайте?");
let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?");

const showTypeof = function(variable) {
    return `${variable} ${typeof variable}`;
    
}

const getRollbackMessage = function(price) {
    if (price > 30000) {
        return "Даем скидку в 10%"
    } else if (price >= 15000 && fullPrice <= 30000) {
    return "Даем скидку в 5%"
    } else if (price >= 0 && fullPrice < 15000) {
    return "Скидка не предусмотрена"
    } else {
    return "Что-то пошло не так"
    }

}

const allServicePrices = function (price1, price2) {
    return price1 + price2
}
    
const getAllServicePrices = allServicePrices(servicePrice1, servicePrice2);

const getFullPrice = function () {
    return screenPrice + getAllServicePrices
}

const fullPrice = getFullPrice(screenPrice, getAllServicePrices);

const getTitle = function (str) {
    const titleUpTrim = str.trim()[0].toUpperCase() + str.trim().slice(1).toLocaleLowerCase()
    return titleUpTrim;
}

const getServicePercentPrices = function (price) {
    if (price > 30000) {
        return price - price/100*10
    } else if (price >= 15000 && price <= 30000) {
        return price - price/100*5
    } else if (price >= 0 && price < 15000) {
        return price
    } else {
        return "Что то пошло не так";
    }
}

console.log(`Тип данных: ${showTypeof(title)}`);
console.log(getTitle(title));
console.log(`Стоимость вёрстки и дополнительных услуг без учёта скидки: ${fullPrice}`);
console.log(`Стоимость дополнительных услуг: ${getAllServicePrices}`);
console.log(getRollbackMessage(fullPrice));
console.log(`Стоимость услуг с учётом скидки: ${getServicePercentPrices(fullPrice)}`);