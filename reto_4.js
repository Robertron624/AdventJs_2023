function decode(message) {
    let messageCopy = message;
    let regex = /\(([^()]+(\([^()]*\))*)\)/g;
    let matches = message.match(regex);
  
    if (!matches) return message;
  
    matches.forEach((match) => {
      let cleanWord = match.replace("(", "").replace(")", "");
      let reversed = cleanWord.split("").reverse().join("");
      messageCopy = messageCopy.replace(match, reversed);
    });
    matches = messageCopy.match(regex);
  
    if (!matches) return messageCopy;
  
    matches.forEach((match) => {
      let cleanWord = match.replace("(", "").replace(")", "");
      let reversed = cleanWord.split("").reverse().join("");
      messageCopy = messageCopy.replace(match, reversed);
    });
  
    return messageCopy;
  }