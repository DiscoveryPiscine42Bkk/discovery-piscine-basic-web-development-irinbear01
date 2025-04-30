function calculate() {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    const operatorType = document.getElementById("operators").value;
    
    let result


  switch (operatorType) {
    case "+":
      result = Number(num1) + Number(num2);
      break;
    case "-":
      result = Number(num1) - Number(num2);
      break;
    case "*":
      result = Number(num1) * Number(num2);
      break;
    case "%":
      result = Number(num1) % Number(num2);
      break;
    case "/":
      if (Number(num1) === 0) {
        result = "Error! Division by zeror";
      } else {
        result = Number(num1) / Number(num2);
      }
      break;
    default:
      result = "Invalid operator";
  }

  document.getElementById("result").innerText = "Result: " + result
}
