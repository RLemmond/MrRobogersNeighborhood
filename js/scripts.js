function substituteNumber(text) {
  const values = text.split(",");

  const substitutedValues = [];
  values.forEach((value) => {
    if (value.includes("3")) {
      substitutedValues.push("Won't you be my neighbor?");
    } else if (value.includes("2")) {
      substitutedValues.push("Boop!");
    } else if (value.includes("1")) {
      substitutedValues.push("Beep!");
    } else {
      substitutedValues.push(value);
    }
  });
  return substitutedValues.join(",");
}

const generateList = (num) => {
  const substitutedNumbers = [];

  for (let i = 0; i <= num; i++) {
    substitutedNumbers.push(substituteNumber(i.toString()));
  }

  return substitutedNumbers;
};

function displaySubstitutedNumbers() {
  const userInput = parseInt(document.getElementById("userInput").value);
  const substitutedNumbers = generateList(userInput);
  const outputList = document.getElementById("outputList");

  outputList.innerHTML = "";

  substitutedNumbers.forEach((number) => {
    const listItem = document.createElement("li");
    listItem.textContent = number;
    outputList.appendChild(listItem);
  });

  document.getElementById("userInput").value = "";
}