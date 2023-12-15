function manufacture(gifts, materials) {
    let giftsThatCanBeMade = [];
    gifts.forEach((gift) => {
      let giftCanBeMade = true;
  
      for (let i = 0; i < gift.length; i++) {
        const currentCharacter = gift[i];
        if (!materials.includes(currentCharacter)) {
          giftCanBeMade = false;
          break
        }
      }
      if (giftCanBeMade) {
        giftsThatCanBeMade.push(gift);
      }
    });
  
    return giftsThatCanBeMade;
  }