// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Tymofii
// Created on: Sep 2024
// This file contains the JS functions for index.html


"use strict"

function multiplyNumbers() {

  const firstNumber = parseInt(document.getElementById('firstNumberInput').value)
  let secondNumber = parseInt(document.getElementById('secondNumberInput').value)

  let result = 0
  let counter = 0

  let isNegative = secondNumber < 0
  if (isNegative == true) {
    secondNumber = -secondNumber;
  }

  while (counter < secondNumber) {
    result += firstNumber
    counter++
  }

  if (isNegative == true) {
    result = -result
  }

  document.getElementById("multiplicationResult").innerHTML = "<p>" + firstNumber + " x " + secondNumber + " = " + result + "</p>"
}

