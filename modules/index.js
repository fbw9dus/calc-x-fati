import {calculateAspectRatio} from './aspect-ratio.js'
import {modulo,percentage,percentageOf,difference} from './percentage.js'

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
 ratioResultWidth.value = newValues[0].value;
 ratioResultHeight.value = newValues[1].value;
    
 })

 
 