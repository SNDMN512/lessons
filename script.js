"use strict";

const appData = {
    title: '',
    screens: '',
    screenPrice: 0,
    adaptive: true,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    service: '',
    servicePrice: 0,
    
    isNumber: function (num) {
        num = String(num).trim()
        return !isNaN(parseFloat(num)) && isFinite(num)
    },
    asking: function () {
        appData.title = prompt("Как называется ваш проект?", "Калькулятор вёрстки")
        appData.screens = prompt("Какие типы экранов нужно разработать?", "Простые, сложные, комбинированные")
        appData.screenPrice = prompt("Сколько будет стоить данная работа?")

        while (!appData.isNumber(appData.screenPrice)) {
            appData.screenPrice = prompt("Сколько будет стоить данная работа?")
        }

        appData.adaptive = confirm("Нужен ли адаптив на сайте?")
    },
    getAllServicePrices: function () {
        let sum = 0
        
        for (let i = 0; i < 2; i++) {
            appData.service = prompt("Какой дополнительный тип услуги нужен?")
            appData.servicePrice = prompt("Сколько это будет стоить?")
            while (!appData.isNumber(+appData.servicePrice)) {
                +prompt("Сколько это будет стоить?")
            }
        sum += +appData.servicePrice
        }
        return sum
    },
    getFullPrice: function () {
        return +appData.screenPrice + appData.allServicePrices
    },
    getServicePercentPrice: function (price) {
        if (price > 30000) {
            return price - price/100*10
        } else if (price >= 15000 && price <= 30000) {
            return price - price/100*5
        } else if (price >= 0 && price < 15000) {
            return price
        } else {
            return "Что то пошло не так";
        }
    },
    getTitle: function () {
        const titleUpTrim = appData.title.trim()[0].toUpperCase() + appData.title.trim().slice(1).toLocaleLowerCase()
        return titleUpTrim;
    },
    getRollbackMessage: function(price) {
        if (price > 30000) {
            return "Даем скидку в 10%"
        } else if (price >= 15000 && price <= 30000) {
        return "Даем скидку в 5%"
        } else if (price >= 0 && price < 15000) {
        return "Скидка не предусмотрена"
        } else {
        return "Что-то пошло не так"
        }
    },
    logger: function () {
        console.log(appData.fullPrice);
        console.log(appData.allServicePrices);
        console.log(appData.servicePercentPrice);
    },
    start: function () {
        appData.asking();
        appData.allServicePrices = appData.getAllServicePrices();
        appData.fullPrice = appData.getFullPrice();
        appData.servicePercentPrice = appData.getServicePercentPrice(appData.fullPrice);
        appData.title = appData.getTitle();
        appData.logger()
    },
}

appData.start()







