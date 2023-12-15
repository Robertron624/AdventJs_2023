function findNaughtyStep(original, modified) {
    let naughtyStep = "";
  
    if (original.length == modified.length) return naughtyStep;
  
    if (original.length > modified.length) {
      for (let i = 0; i < original.length; i++) {
        if (original[i] != modified[i]) {
          naughtyStep = original[i];
          break;
        }
      }
    }
  
    if (original.length < modified.length) {
      for (let i = 0; i < modified.length; i++) {
        if (original[i] != modified[i]) {
          naughtyStep = modified[i];
          break;
        }
      }
    }
  
    return naughtyStep;
  }