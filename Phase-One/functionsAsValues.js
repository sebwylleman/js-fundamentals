const lowercaseMessage = (string) => {
  return string.toLowerCase();
};

const transform = (string, lowercaseMessage) => {
  return lowercaseMessage(string);
};

transform('WHY ARE YOU SHOUTING?', lowercaseMessage);
