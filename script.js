 
  function main() {
    let userConfirmed = confirm("Tell me three most important words 💚");
    
    if (!userConfirmed) {
      return;
    }
  
    let words = [];
    for (let i = 0; i < 3; i++) {
      do {
        word = getUserInput();
      } while (!isValidWord(word));

      do {
        format = prompt("Choose formatting for the word:\n- uppercase\n- lowercase\n- capitalize");
      } while (format !== "uppercase" && format !== "lowercase" && format !== "capitalize");

      words.push(formatWord(word, format));
    }
  
    console.log(`${words[0]} ${words[1]} ${words[2]}!`);
  }

//функція для запиту 
  function getUserInput() {
    return prompt("Tell me three most important words 💚");
  }

//функція для форматування слів відповідно до ТЗ
function formatWord(word, format) {
    switch (format) {
      case "uppercase":
        return word.toUpperCase();
      case "lowercase":
        return word.toLowerCase();
      case "capitalize":
        return word.charAt(0).toUpperCase() + word.slice(1);
      default:
        return null;
    }
}

// функція для перевірки слова на валідність відповідно до ТЗ
function isValidWord(word) {
    return word !== null && word !== "" && isNaN(word);
}
main();
  