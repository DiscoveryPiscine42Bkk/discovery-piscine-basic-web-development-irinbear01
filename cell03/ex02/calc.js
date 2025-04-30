setInterval(function(){alert("Please, use me...")}, 30000)

function calculate() {
  const num1 = document.getElementById("num1").value;
  const num2 = document.getElementById("num2").value;
  const operatorType = document.getElementById("operators").value;

  const n1 = Number(num1);
  const n2 = Number(num2);
  if (!Number.isInteger(n1) || !Number.isInteger(n2) || n1 < 0 || n2 < 0) {
    alert("Error :(");
    return;
  }

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
      if (Number(num2) === 0) {
        alert("It's over 9000!");
      } else {
        result = Number(num1) % Number(num2);
      }
      break;
    case "/":
      if (Number(num2) === 0) {
        alert("Division by zero");
      } else {
        result = Number(num1) / Number(num2);
      }
      break;
  }

  document.getElementById("result").innerText = "Result: " + result
  console.log(result)
}
