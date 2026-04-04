"use strict";

let title;
let screens;
let screenPrice;
let adaptive;
let allServicePrices;
let fullPrice;
let servicePercentPrice;
let service;
let servicePrice;

const isNumber = function (num) {
    num = String(num).trim()
    return !isNaN(parseFloat(num)) && isFinite(num)
}

const asking = function () {
    title = prompt("Как называется ваш проект?", "Калькулятор вёрстки")
    screens = prompt("Какие типы экранов нужно разработать?", "Простые, сложные, комбинированные")
    screenPrice = prompt("Сколько будет стоить данная работа?")

    while (!isNumber(screenPrice)) {
        screenPrice = prompt("Сколько будет стоить данная работа?")
    }

    adaptive = confirm("Нужен ли адаптив на сайте?")
}

const getAllServicePrices = function () {
    let sum = 0
        
    for (let i = 0; i < 2; i++) {
        service = prompt("Какой дополнительный тип услуги нужен?")
        servicePrice = prompt("Сколько это будет стоить?")
        while (!isNumber(servicePrice)) {
            prompt("Сколько это будет стоить?")
        }
    sum += Number(servicePrice)
    }
    return sum
}
    
const getFullPrice = function () {
    return Number(screenPrice) + allServicePrices
}

const getServicePercentPrice = function (price) {
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

const getTitle = function () {
    const titleUpTrim = title.trim()[0].toUpperCase() + title.trim().slice(1).toLocaleLowerCase()
    return titleUpTrim;
}

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

asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrice(fullPrice);
title = getTitle();

showTypeof(title);

console.log(`Тип данных: ${showTypeof(title)}`);
console.log(title);
console.log(`Стоимость вёрстки и дополнительных услуг без учёта скидки: ${fullPrice}`);
console.log(`Стоимость дополнительных услуг: ${allServicePrices}`);
console.log(getRollbackMessage(fullPrice));
console.log(`Стоимость услуг с учётом скидки: ${servicePercentPrice}`);