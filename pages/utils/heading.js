export default function makeFirstLetterCapital(word){
   if(word === undefined){
       return "";
   }
    var firstWord = word[0];
    firstWord = firstWord.toUpperCase();
    return firstWord+word.slice(1,word.length);

}