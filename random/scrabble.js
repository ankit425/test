/*

Scrabble

Give a variable number of words, create a program to output the word with the maximum score, based on the following scoring system:
The score of a word is calculated based on its character values, according to this table:
e, a, i, o, n, r, t, l, s, u are equal 1 point
d, g    2 points
b, c, m, p    3 points
f, h, v, w, y 4 points
k 5 points
j, x 8 points
q, z 10 points

The max length of a word is 10 letters.

For example: 
input { "This",  "is", "a", "cool" , "Challenge" }
output : Challenge


*/

(function() {

  const getWords = sentence => {
      return sentence.split(' ');
  }
  
  const checkSubstring = (query, str) => {
      return (str.includes(query));
  }
  
  const calculatePoints = word => {
  
      if (word.length > 10) {
          return 0;
      }
      
      word = word.toLowerCase();
      var totalPoints = 0;
      
      for (var i = 0; i < word.length; i++) {
      
          var currentChar = word[i];
          
          if(checkSubstring(currentChar, 'eaionrtlsu')) {
              totalPoints += 1;
          }
          
          else if (checkSubstring(currentChar, 'dg')) {
              totalPoints += 2;
          }
          
          else if (checkSubstring(currentChar, 'bcmp')) {
              totalPoints += 3;
          }
          
          else if (checkSubstring(currentChar, 'fhvwy')) {
              totalPoints += 4;
          }
          
          else if (checkSubstring(currentChar, 'k')) {
              totalPoints += 5;
          }
          
          else if (checkSubstring(currentChar, 'jx')) {
              totalPoints += 8
          }
          
          else if (checkSubstring(currentChar, 'qz')) {
              totalPoints += 10;
          }
          
          else {
              totalPoints = 0;
              break
          }
              
      }
      
      return totalPoints;
  }
  
  
  const checkPoints = sentence => {
  
      var words = getWords(sentence);
      var points = [];
      
      for (var i = 0; i < words.length; i++) {
          points.push(calculatePoints(words[i]));
      
      }

      var maxPoints = points[0];
      var maxIndex = 0;
      
      console.log('Words: ');
      for (var i = 0; i < words.length; i++) {
      
          console.log(words[i] + ' ('+  points[i] + ')');
          
          if (points[i] > maxPoints) {
              maxPoints = points[i];
              maxIndex = i;
          }
      }
      
      return('\nMax Word: ' + words[maxIndex] + '(' + points[maxIndex] + ')');
  }
  
  var testString = 'This is a cool Challenge';
  console.log(checkPoints(testString));
  
}());	