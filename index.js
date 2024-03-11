const top1 = document.querySelector("#top1")
const top2 = document.querySelector("#top2")
const left1 = document.querySelector("#left1")
const left2 = document.querySelector("#left2")
const right1 = document.querySelector("#right1")
const right2 = document.querySelector("#right2")
const bot1 = document.querySelector("#bot1")
const bot2 = document.querySelector("#bot2")

const topScoreElement = document.querySelector("#topScore")
const leftScoreElement = document.querySelector("#leftScore")
const rightScoreElement = document.querySelector("#rightScore")
const botScoreElement = document.querySelector("#botScore")

const topStatusElement = document.querySelector("#topStatus")
const leftStatusElement = document.querySelector("#leftStatus")
const rightStatusElement = document.querySelector("#rightStatus")
const botStatusElement = document.querySelector("#botStatus")

const randomNumberGenerator = () => {
    const randomNumber = Math.floor(Math.random() * 52);
    return randomNumber
}

const pickedNumber = [];
const cardDrawn = []
let topScore = 0
let rightScore = 0
let leftScore = 0
let botScore = 0

const scoreCounter = (randomNumber) => {
    if (randomNumber < 4) {
        return 2
    }

    if (randomNumber < 8) {
        return 3
    }

    if (randomNumber < 12) {
        return 4
    }

    if (randomNumber < 16) {
        return 5
    }

    if (randomNumber < 20) {
        return 6
    }

    if (randomNumber < 24) {
        return 7
    }

    if (randomNumber < 28) {
        return 8
    }

    if (randomNumber < 32) {
        return 9
    }

    if (randomNumber < 36) {
        return 10
    }

    if (randomNumber < 40) {
        return 1
    }

    return 10
}

const recursiveFunction = (element, elementName, position) => {
    const randomNumber = randomNumberGenerator();
    let isExist = false;

    for (let i = 0; i < pickedNumber.length; i++) {
        const number = pickedNumber[i]

        if (number === randomNumber) {
            isExist = true
        }
    }
    
    // const isExist = pickedNumber.indexOf(randomNumber) > -1

    if (isExist) {
        if (pickedNumber.length < 52) {
            recursiveFunction(elementName)
        }
    } else {
        if (cardDrawn.indexOf(elementName) === -1) {
            element.setAttribute("src", `./images/cards/${randomNumber}-cards.png`);
            pickedNumber.push(randomNumber);
            cardDrawn.push(elementName)
            switch (position) {
                case 'top':
                    topScore += scoreCounter(randomNumber)
                    break;
                case 'left':
                    leftScore += scoreCounter(randomNumber)
                    break;
                case 'right':
                    rightScore += scoreCounter(randomNumber)
                    break;
                case 'bot':
                    botScore += scoreCounter(randomNumber)
                    break;
            
                default:
                    break;
            }
        }
    }
}

const cardOnClick = (element, elementName, position) => {
    recursiveFunction(element, elementName, position)

    switch (position) {
        case 'top':
            if (cardDrawn.indexOf('top1') > -1 && cardDrawn.indexOf('top2') > -1) {
                topScoreElement.innerHTML = topScore.toString().slice(-1);
            }
            break;
        case 'bot':
            if (cardDrawn.indexOf('bot1') > -1 && cardDrawn.indexOf('bot2') > -1) {
                botScoreElement.innerHTML = botScore.toString().slice(-1);
            }
            break;
        case 'left':
            if (cardDrawn.indexOf('left1') > -1 && cardDrawn.indexOf('left2') > -1) {
                leftScoreElement.innerHTML = leftScore.toString().slice(-1);
            }
            break;
        case 'right':
            if (cardDrawn.indexOf('right1') > -1 && cardDrawn.indexOf('right2') > -1) {
                rightScoreElement.innerHTML = rightScore.toString().slice(-1);
            }
            break;
    
        default:
            break;
    }

    const allCardsDrawn = [
        cardDrawn.indexOf('top1') > -1,
        cardDrawn.indexOf('top2') > -1,
        cardDrawn.indexOf('bot1') > -1,
        cardDrawn.indexOf('bot2') > -1,
        cardDrawn.indexOf('left1') > -1,
        cardDrawn.indexOf('left2') > -1,
        cardDrawn.indexOf('right1') > -1,
        cardDrawn.indexOf('right2') > -1
    ]

    if (!allCardsDrawn.includes(false)) {
        // WINNER
        if (
            (topScore.toString().slice(-1) > botScore.toString().slice(-1)) &&
            (topScore.toString().slice(-1) > leftScore.toString().slice(-1)) &&
            (topScore.toString().slice(-1) > rightScore.toString().slice(-1))
        ) {
            topStatusElement.innerHTML = 'Winner'
            botStatusElement.innerHTML = 'Lose'
            leftStatusElement.innerHTML = 'Lose'
            rightStatusElement.innerHTML = 'Lose'
        }

        if (
            (botScore.toString().slice(-1) > topScore.toString().slice(-1)) &&
            (botScore.toString().slice(-1) > leftScore.toString().slice(-1)) &&
            (botScore.toString().slice(-1) > rightScore.toString().slice(-1))
        ) {
            botStatusElement.innerHTML = 'Winner'
            topStatusElement.innerHTML = 'Lose'
            leftStatusElement.innerHTML = 'Lose'
            rightStatusElement.innerHTML = 'Lose'
        }

        if (
            (leftScore.toString().slice(-1) > topScore.toString().slice(-1)) &&
            (leftScore.toString().slice(-1) > botScore.toString().slice(-1)) &&
            (leftScore.toString().slice(-1) > rightScore.toString().slice(-1))
        ) {
            leftStatusElement.innerHTML = 'Winner'
            botStatusElement.innerHTML = 'Lose'
            topStatusElement.innerHTML = 'Lose'
            rightStatusElement.innerHTML = 'Lose'
        }

        if (
            (rightScore.toString().slice(-1) > topScore.toString().slice(-1)) &&
            (rightScore.toString().slice(-1) > botScore.toString().slice(-1)) &&
            (rightScore.toString().slice(-1) > leftScore.toString().slice(-1))
        ) {
            rightStatusElement.innerHTML = 'Winner'
            leftStatusElement.innerHTML = 'Lose'
            botStatusElement.innerHTML = 'Lose'
            topStatusElement.innerHTML = 'Lose'
        }

        // 2 DRAW
        if (
            (topScore.toString().slice(-1) === botScore.toString().slice(-1)) &&
            (topScore.toString().slice(-1) > leftScore.toString().slice(-1)) &&
            (topScore.toString().slice(-1) > rightScore.toString().slice(-1))
        ) {
            topStatusElement.innerHTML = 'Draw'
            botStatusElement.innerHTML = 'Draw'
            leftStatusElement.innerHTML = 'Lose'
            rightStatusElement.innerHTML = 'Lose'
        }

        if (
            (topScore.toString().slice(-1) > botScore.toString().slice(-1)) &&
            (topScore.toString().slice(-1) === leftScore.toString().slice(-1)) &&
            (topScore.toString().slice(-1) > rightScore.toString().slice(-1))
        ) {
            topStatusElement.innerHTML = 'Draw'
            leftStatusElement.innerHTML = 'Draw'
            botStatusElement.innerHTML = 'Lose'
            rightStatusElement.innerHTML = 'Lose'
        }

        if (
            (topScore.toString().slice(-1) > botScore.toString().slice(-1)) &&
            (topScore.toString().slice(-1) > leftScore.toString().slice(-1)) &&
            (topScore.toString().slice(-1) === rightScore.toString().slice(-1))
        ) {
            topStatusElement.innerHTML = 'Draw'
            rightStatusElement.innerHTML = 'Draw'
            leftStatusElement.innerHTML = 'Lose'
            botStatusElement.innerHTML = 'Lose'
        }

        if (
            (botScore.toString().slice(-1) > topScore.toString().slice(-1)) &&
            (botScore.toString().slice(-1) === leftScore.toString().slice(-1)) &&
            (botScore.toString().slice(-1) > rightScore.toString().slice(-1))
        ) {
            botStatusElement.innerHTML = 'Draw'
            leftStatusElement.innerHTML = 'Draw'
            topStatusElement.innerHTML = 'Lose'
            rightStatusElement.innerHTML = 'Lose'
        }

        if (
            (botScore.toString().slice(-1) > topScore.toString().slice(-1)) &&
            (botScore.toString().slice(-1) > leftScore.toString().slice(-1)) &&
            (botScore.toString().slice(-1) === rightScore.toString().slice(-1))
        ) {
            botStatusElement.innerHTML = 'Draw'
            rightStatusElement.innerHTML = 'Draw'
            leftStatusElement.innerHTML = 'Lose'
            topStatusElement.innerHTML = 'Lose'
        }

        if (
            (leftScore.toString().slice(-1) > topScore.toString().slice(-1)) &&
            (leftScore.toString().slice(-1) > botScore.toString().slice(-1)) &&
            (leftScore.toString().slice(-1) === rightScore.toString().slice(-1))
        ) {
            leftStatusElement.innerHTML = 'Draw'
            rightStatusElement.innerHTML = 'Draw'
            botStatusElement.innerHTML = 'Lose'
            topStatusElement.innerHTML = 'Lose'
        }

        // 3 DRAW
        if (
            (topScore.toString().slice(-1) === botScore.toString().slice(-1)) &&
            (topScore.toString().slice(-1) === leftScore.toString().slice(-1)) &&
            (topScore.toString().slice(-1) > rightScore.toString().slice(-1))
        ) {
            topStatusElement.innerHTML = 'Draw'
            botStatusElement.innerHTML = 'Draw'
            leftStatusElement.innerHTML = 'Draw'
            rightStatusElement.innerHTML = 'Lose'
        }

        if (
            (botScore.toString().slice(-1) > topScore.toString().slice(-1)) &&
            (botScore.toString().slice(-1) === leftScore.toString().slice(-1)) &&
            (botScore.toString().slice(-1) === rightScore.toString().slice(-1))
        ) {
            botStatusElement.innerHTML = 'Draw'
            leftStatusElement.innerHTML = 'Draw'
            rightStatusElement.innerHTML = 'Draw'
            topStatusElement.innerHTML = 'Lose'
        }

        if (
            (leftScore.toString().slice(-1) === topScore.toString().slice(-1)) &&
            (leftScore.toString().slice(-1) > botScore.toString().slice(-1)) &&
            (leftScore.toString().slice(-1) === rightScore.toString().slice(-1))
        ) {
            leftStatusElement.innerHTML = 'Draw'
            topStatusElement.innerHTML = 'Draw'
            rightStatusElement.innerHTML = 'Draw'
            botStatusElement.innerHTML = 'Lose'
        }

        if (
            (rightScore.toString().slice(-1) === topScore.toString().slice(-1)) &&
            (rightScore.toString().slice(-1) === botScore.toString().slice(-1)) &&
            (rightScore.toString().slice(-1) > leftScore.toString().slice(-1))
        ) {
            rightStatusElement.innerHTML = 'Draw'
            topStatusElement.innerHTML = 'Draw'
            botStatusElement.innerHTML = 'Draw'
            leftStatusElement.innerHTML = 'Lose'
        }

        // All draw
        if (
            (topScore.toString().slice(-1) === botScore.toString().slice(-1)) &&
            (topScore.toString().slice(-1) === leftScore.toString().slice(-1)) &&
            (topScore.toString().slice(-1) === rightScore.toString().slice(-1))
        ) {
            topStatusElement.innerHTML = 'Draw'
            rightStatusElement.innerHTML = 'Draw'
            topStatusElement.innerHTML = 'Draw'
            botStatusElement.innerHTML = 'Draw'
        }
    }
}

top1.addEventListener("click", () => cardOnClick(top1, 'top1', 'top'))
top2.addEventListener("click", () => cardOnClick(top2, 'top2', 'top'))
left1.addEventListener("click", () => cardOnClick(left1, 'left1', 'left'))
left2.addEventListener("click", () => cardOnClick(left2, 'left2', 'left'))
right1.addEventListener("click", () => cardOnClick(right1, 'right1', 'right'))
right2.addEventListener("click", () => cardOnClick(right2, 'right2', 'right'))
bot1.addEventListener("click", () => cardOnClick(bot1, 'bot1', 'bot'))
bot2.addEventListener("click", () => cardOnClick(bot2, 'bot2', 'bot'))
