const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i= 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }
  
  return gifts; 

}

wrapGifts(gifts);

function writeCards(namesArray, eventName) {
  let messagesArray= [];

  for (let i=0; i < namesArray.length; i++){
    let message = `Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`;
    messagesArray.push(message);
  }
   return messagesArray;
}

const names = ["Alice", "Bob", "Carol"];
const event = "birthday";

const messages = writeCards(names,event);
console.log(messages);

function countDown(number) {
  while (number >= 0) {
    console.log(number);
    number--;
  }
}

countDown(10);

