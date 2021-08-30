function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(visualFlair = "*") {
    return function(adjective="special") {
        return `You are ${visualFlair}${adjective}${visualFlair}!`;
    };
}

const Calculator = {
    add: function() {
        return 1 + 3;
    },
    subtract: function() {
        return 1 - 3;
    },
    multiply: function() {
        return 1 * 3;
    },
    divide: function() {
        return 10 / 5;
    }
}

function actionApplyer(startingInt, functionsArray) {
    if (functionsArray.length === 0) {
        return startingInt;
    } else {
        functionsArray.forEach(fn => startingInt = fn(startingInt));
        return startingInt;
    }

}