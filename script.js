// DOM variables 
const displayNumberX = document.getElementById('numX');
const displayNumberY = document.getElementById('numY');
const displaySign = document.getElementById('signs');
const line = document.querySelector('.line');
const resultOperation = document.getElementById('result');
const containerNumbers = {
  // variables number buttons
  1: document.getElementById('num1'),
  2: document.getElementById('num2'),
  3: document.getElementById('num3'),
  4: document.getElementById('num4'),
  5: document.getElementById('num5'),
  6: document.getElementById('num6'),
  7: document.getElementById('num7'),
  8: document.getElementById('num8'),
  9: document.getElementById('num9'),
  0: document.getElementById('num0'),
  allNumbers: document.querySelectorAll('.number')
};
const containerSynbols = {
  // symbol variables
  P: document.getElementById('sign+'),
  N: document.getElementById('sign-'),
  M: document.getElementById('sign*'),
  D: document.getElementById('sign/'),
  C: document.getElementById('reset'),
  S: document.getElementById('same'),
  allSynbols: document.querySelectorAll('.signs')
};
// variables numbers and signs
let numberX;
let numberY;
let symbols;
let mathOperation;
let state = 'assigningX';
let stateResult = false;
let reuseResult = 0;

//calculator function
function numbersOnScreen() {
  containerNumbers[1].addEventListener('click', () => {
    if (state === 'assigningX') {
      displayNumberX.textContent += '1';
    } else if (state === 'assigningY') {
      displayNumberY.textContent += '1';
    }
  });
  containerNumbers[2].addEventListener('click', () => {
    if (state === 'assigningX') {
      displayNumberX.textContent += '2';
    } else if (state === 'assigningY') {
      displayNumberY.textContent += '2';
    }
  });
  containerNumbers[3].addEventListener('click', () => {
    if (state === 'assigningX') {
      displayNumberX.textContent += '3';
    } else if (state === 'assigningY') {
      displayNumberY.textContent += '3';
    }
  });
  containerNumbers[4].addEventListener('click', () => {
    if (state === 'assigningX') {
      displayNumberX.textContent += '4';
    } else if (state === 'assigningY') {
      displayNumberY.textContent += '4';
    }
  });
  containerNumbers[5].addEventListener('click', () => {
    if (state === 'assigningX') {
      displayNumberX.textContent += '5';
    } else if (state === 'assigningY') {
      displayNumberY.textContent += '5';
    }
  });
  containerNumbers[6].addEventListener('click', () => {
    if (state === 'assigningX') {
      displayNumberX.textContent += '6';
    } else if (state === 'assigningY') {
      displayNumberY.textContent += '6';
    }
  });
  containerNumbers[7].addEventListener('click', () => {
    if (state === 'assigningX') {
      displayNumberX.textContent += '7';
    } else if (state === 'assigningY') {
      displayNumberY.textContent += '7';
    }
  });
  containerNumbers[8].addEventListener('click', () => {
    if (state === 'assigningX') {
      displayNumberX.textContent += '8';
    } else if (state === 'assigningY') {
      displayNumberY.textContent += '8';
    }
  });
  containerNumbers[9].addEventListener('click', () => {
    if (state === 'assigningX') {
      displayNumberX.textContent += '9';
    } else if (state === 'assigningY') {
      displayNumberY.textContent += '9';
    }
  });
  containerNumbers[0].addEventListener('click', () => {
    if (state === 'assigningX') {
      displayNumberX.textContent += '0';
    } else if (state === 'assigningY') {
      displayNumberY.textContent += '0';
    }
  });

  containerSynbols.allSynbols.forEach((e) => {
    e.addEventListener('click', () => {
      state = 'assigningY';
    })
  });
  containerSynbols['C'].addEventListener('click', () => {
    state = 'assigningX';
  });
}
function synbolsMathOnScreen() {
  containerSynbols['P'].addEventListener('click', () => {
    displaySign.textContent = '';
    displaySign.textContent = '+';
    numberX = displayNumberX.textContent;
    mathOperation = '+';
  })
  containerSynbols['N'].addEventListener('click', () => {
    displaySign.textContent = '';
    displaySign.textContent = '-';
    numberX = displayNumberX.textContent;
    mathOperation = '-';
  })
  containerSynbols['M'].addEventListener('click', () => {
    displaySign.textContent = '';
    displaySign.textContent = '×';
    numberX = displayNumberX.textContent;
    mathOperation = '*';
  })
  containerSynbols['D'].addEventListener('click', () => {
    displaySign.textContent = '';
    displaySign.textContent = '÷';
    numberX = displayNumberX.textContent;
    mathOperation = '/';
  })
  containerSynbols['S'].addEventListener('click', () => {
    numberY = displayNumberY.textContent;
    operationResult();
  })
}
function operationResult() {
  let result = 0;
  switch (mathOperation) {
    case '+':
      result = parseFloat(numberX) + parseFloat(numberY);
      break;
    case '-':
      result = parseFloat(numberX) - parseFloat(numberY);
      break;
    case '*':
      result = parseFloat(numberX) * parseFloat(numberY);
      break;
    case '/':
      result = parseFloat(numberX) / parseFloat(numberY);
      break;
  }
  resultOperation.textContent = result;
  reuseResult = result;
}
function resetCalculator() {
  displayNumberX.textContent = '';
  displayNumberY.textContent = '';
  displaySign.textContent = '';
  resultOperation.textContent = '';
  line.style.opacity = '100';
  displaySign.style.opacity = '100';
  displayNumberX.style.opacity = '100';
  displayNumberY.style.opacity = '100';
  numberX;
  numberY;
  mathOperation;
}
containerSynbols['C'].addEventListener('click', () => {
  resetCalculator()
});
function resetResultOnNumberX() {
  displayNumberY.textContent = '';
  displaySign.textContent = '';
  resultOperation.textContent = '';
  line.style.opacity = '100';
  displaySign.style.opacity = '100';
  displayNumberX.style.opacity = '100';
  displayNumberY.style.opacity = '100';
  numberY;
}
containerSynbols.S.addEventListener('click', () => {
  if (result !== 0) {
    resultOperation.style.opacity = '100'
    line.style.opacity = '0';
    displaySign.style.opacity = '0';
    displayNumberX.style.opacity = '0';
    displayNumberY.style.opacity = '0';
    stateResult = true;
  }
  containerNumbers['allNumbers'].forEach((e) => {
    e.addEventListener('click', () => {
      if (stateResult === true) {
        resetCalculator()
        state = 'assigningX';
        stateResult = false;
      }
    })
  })
  containerSynbols['allSynbols'].forEach((e) => {
    e.addEventListener('click', () => {
      if (stateResult === true) {
        resetResultOnNumberX()
        displayNumberX.textContent = reuseResult
        state = 'assigningY';
        stateResult = false;
      }
    })
  })
})

numbersOnScreen()
synbolsMathOnScreen()