"use strict";

const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: true,
    rollback: 10,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    services: {},
    servicePrice: 0,
    
    isNumber: function (num) {
        num = String(num).trim()
        return !isNaN(parseFloat(num)) && isFinite(num)
    },
    asking: function () {
        
        appData.title = prompt("Как называется ваш проект?", "Калькулятор вёрстки")
        while (appData.isNumber(appData.title)) {
            alert("Введите строку!")
            appData.title = prompt("Как называется ваш проект?", "Калькулятор вёрстки")
        }
        for (let i = 0; i < 2; i++) {
            let name = ''
            name = prompt("Какие типы экранов нужно разработать?")
            while (appData.isNumber(name)) {
                alert("Введите строку!")
                name = prompt("Какие типы экранов нужно разработать?")
            }
            let price = 0
            price = prompt("Сколько будет стоить данная работа?")
            while (!appData.isNumber(price)) {
                alert("Введите число!")
                price = prompt("Как называется ваш проект?", "Калькулятор вёрстки")
            }
            appData.screens.push({id: i, name: name, price: price})

            appData.screenPrice = appData.screens.reduce(function(sum, item) {
                return sum += +item.price
            }, 0)
        }
        
        for (let i = 0; i < 2; i++) {
            let name = ''
            name = prompt("Какой дополнительный тип услуги нужен?")
            while (appData.isNumber(name)) {
                let message = alert("Введите строку!")
                name = prompt("Какой дополнительный тип услуги нужен?")
            }
            let price = 0
            price = prompt("Сколько это будет стоить?")
            while (!appData.isNumber(price)) {
                let message = alert("Введите число!")
                price = prompt("Сколько это будет стоить?")
            }
            appData.services[name+i] = +price
        }
        appData.adaptive = confirm("Нужен ли адаптив на сайте?")
    
    },
    getAllServicePrices: function () {

        for (let key in appData.services) {
            appData.allServicePrices += appData.services[key]
        }
    },
    getFullPrice: function () {
        appData.fullPrice = +appData.screenPrice + appData.allServicePrices
    },
    getServicePercentPrice: function () {
        appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100))
    },
    getTitle: function () {
        const titleUpTrim = appData.title.trim()[0].toUpperCase() + appData.title.trim().slice(1).toLocaleLowerCase()
        appData.title = titleUpTrim;
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
        console.log(appData.screens);
        console.log(appData.screenPrice);
        console.log(appData.services);
    },
    start: function () {
        appData.asking();
        appData.getAllServicePrices();
        appData.getFullPrice();
        appData.getServicePercentPrice();
        appData.getTitle();
        appData.logger()
    },
}

appData.start()