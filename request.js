const readline = require('readline').createInterface({

    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('a really Interesting string with some words', name => {
    console.log(`Hey there ${name}!`);
    readline.close();
  })

  function segmen(str){
  var str   = "my car is red";
  var stringArray = str.split(/(\s+)/);

  console.log(stringArray);
  }
  
  function wordseg(str){
  const chars = str.split('');
  console.log(chars);
  }



  stopwords = ['i','me','my','myself','we','our','ours','ourselves','you','your','yours','yourself','yourselves','he','him','his','himself','she','her','hers','herself','it','its','itself','they','them','their','theirs','themselves','what','which','who','whom','this','that','these','those','am','is','are','was','were','be','been','being','have','has','had','having','do','does','did','doing','a','an','the','and','but','if','or','because','as','until','while','of','at','by','for','with','about','against','between','into','through','during','before','after','above','below','to','from','up','down','in','out','on','off','over','under','again','further','then','once','here','there','when','where','why','how','all','any','both','each','few','more','most','other','some','such','no','nor','not','only','own','same','so','than','too','very','s','t','can','will','just','don','should','now']



function remove_stopwords(str) {
    res = []
    const words = str.split(' ')
    for(i=0;i<words.length;i++) {
       word_clean = words[i].split(".").join("")
       if(!stopwords.includes(word_clean)) {
           res.push(word_clean)
       }
    }
    return(res.join(' '))
}
console.log(remove_stopwords("I will go to the place where there are things for me"));







function removeDuplicateCharacters(string) {
    return string
      .split(' ')
      .filter(function(item, pos, self) {
        return self.indexOf(item) == pos;
      })
      .join(' ');
  }
  console.log(removeDuplicateCharacters('I will will go to the places where there are are  things for me'));












  
function wordsReverser(string){
    return string.split("").reverse().join("").split(" ").reverse().join(" ")
    }
    
    console.log(wordsReverser('New string, same results.'));












    
function retnum(str) { 
    var num = str.replace(/[^0-9]/g, '');
    return parseInt(num,10);
}



console.log('abca12bc45qw678rtay'.replace(/[^0-9]/g, ''));
console.log('#box2'.replace(/[^0-9]/g, ''));
                                                  
module.exports = {
    segmen,
    wordseg,
    remove_stopwords,
    removeDuplicateCharacters,
    wordsReverser,
    retnum,
};