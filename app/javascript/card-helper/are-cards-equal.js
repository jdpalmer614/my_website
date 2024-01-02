
//Add this to the card-helper or deck-helper
export function areCardsEqual(card1, card2) {
  return (
    card1.color === card2.color &&
    card1.shape === card2.shape &&
    card1.shade === card2.shade &&
    card1.number === card2.number
  );
}