function pluralise(count, word) {
  return count > 1 ? `${word}s` : word;
}

function capitalise(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export {pluralise, capitalise};
