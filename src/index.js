import {calculateAspectRatio} from './modules/aspect-ratio'
var moment = require('moment')
var endDate = "2019-12-25"
var timeLeft = moment(endDate) - moment()
timeLeft = moment.duration(timeLeft, "milliseconds")


console.log("left:",timeLeft.days(), timeLeft.hours(),timeLeft.minutes(),timeLeft.seconds())

import {modulo,percentage,percentageOf,difference} from './modules/percentage.js'
var firstModulo = document.querySelector('#modulo_1')
var secondModulo = document.querySelector('#modulo_2')
var modulo_result = document.querySelector('#modulo_result')
secondModulo.addEventListener("keyup",function(){
  modulo_result.value =  modulo(firstModulo.value,secondModulo.value)
})
var firstPercentage = document.querySelector('#percentage_1')
var secondPercentage = document.querySelector('#percentage_2')
var percentage_result = document.querySelector('#percentage_result')
secondPercentage.addEventListener("keyup",function(){
    percentage_result.value = percentage(firstPercentage.value,secondPercentage.value)
})
var firstPercentageOf = document.querySelector('#percentageOf_1')
var secondPercentageOf = document.querySelector('#percentageOf_2')
var percentageOf_result = document.querySelector('#percentageOf_result')
secondPercentageOf.addEventListener("keyup",function(){
    percentageOf_result.value = percentageOf(firstPercentageOf.value,secondPercentageOf.value)
})
var firstDifference = document.querySelector('#difference_1')
var secondDifference = document.querySelector('#difference_2')
var difference_result = document.querySelector('#difference_result')
secondDifference.addEventListener("keyup",function(){
    difference_result.value = difference(firstDifference.value,secondDifference.value)
})

var originalWidth = document.querySelector('#ratio_1');
var originalHeight = document.querySelector('#ratio_2');
var ratioResultWidth = document.querySelector('#ratio_result-width');
var ratioResultHeight = document.querySelector('#ratio_result-height');
 var newValues =[ratioResultWidth,ratioResultHeight] 
 ratioResultWidth.addEventListener("keyup",function(){
    calculateAspectRatio(originalWidth.value,originalHeight.value,newValues)
  })


/*



// Your code goes here!

var ratio_1 = document.querySelector('#ratio_1')
var ratio_2 = document.querySelector('#ratio_2')
var ratio_new_height = document.querySelector('#ratio_result-height')
var ratio_new_width  = document.querySelector('#ratio_result-width')
var newValues = [ratio_new_height, ratio_new_width]

newValues.forEach(input =>{
    input.addEventListener('keyup', getResult)
})
function getResult(){
    var origWidth = parseInt(ratio_1.value)
    var origHeight = parseInt(ratio_2.value)
    calculateAspectRatio(ratio_1,ratio_2, newValues)

}
*/