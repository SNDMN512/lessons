"use strict";

let num = Math.floor(Math.random() * 100 + 1);
let attempts = 10;
let answer;
 
const upperCase = function (text) {
    return text.toUpperCase()
 }

 const deflectAttempts = function () {
    if (attempts == '1') {
        return `осталась ${attempts} попытка!`
    } else if (attempts >= 2 && attempts <= 4) {
        return `осталось ${attempts} попытки!`
    }
    return `осталось ${attempts} попыток!`
 }

function guessNumber (num) {
    const welcome = alert(upperCase("добро пожаловать в игру!"))
    const nameGame = alert(upperCase("угадайте число!"))
    function nameTheNumber () {
        while (attempts > 0) {
            alert(upperCase(deflectAttempts()))
            const playerNum = prompt("Назовите число от 1 до 100?", `Например, ${num}`)
            attempts--
            if (Number(attempts) > 0) {
                if (!playerNum) {
                    answer = alert(upperCase("игра окончена!"))
                    break
                } else if (!isNaN(parseInt(playerNum)) && isFinite(playerNum)) {
                    if (playerNum > num) {
                        answer = alert("Загаданное число меньше")
                        nameTheNumber()
                    } else if (playerNum < num) {
                        answer = alert("Загаданное число больше")
                        nameTheNumber()
                    } else if (playerNum == num) {
                        answer = alert(upperCase("поздравляю с победой!"))
                        if (confirm(upperCase("Хотите сыграть ещё?"))) {
                            num = Math.floor(Math.random() * 100 + 1)
                            attempts = 10
                            guessNumber(num)
                        } else {
                            answer = alert(upperCase("до скорых встреч!"))
                        } break
                    }
                } else if (isNaN(parseInt(playerNum)) && !isFinite(playerNum)) {
                    answer = alert(upperCase("Введите число!"))
                    nameTheNumber()
                }
            } else {
                answer = alert(upperCase("вы проиграли!"))
                answer = alert(upperCase(`было загадано число ${num}`))
                if (confirm(upperCase("Хотите сыграть ещё?"))) {
                    num = Math.floor(Math.random() * 100 + 1)
                    attempts = 10
                    guessNumber(num)
                } else {
                    answer = alert(upperCase("до скорых встреч!"))
                    break
                }
            } break
        }
    }
    nameTheNumber()
}
guessNumber(num)

