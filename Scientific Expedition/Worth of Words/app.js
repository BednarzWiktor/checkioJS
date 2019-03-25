const VALUES = {'e': 1,  'a': 1, 'i': 1, 'o': 1, 'n': 1, 'r': 1,
                't': 1,  'l': 1, 's': 1, 'u': 1, 'd': 2, 'g': 2,
                'b': 3,  'c': 3, 'm': 3, 'p': 3, 'f': 4, 'h': 4,
                'v': 4,  'w': 4, 'y': 4, 'k': 5, 'j': 8, 'x': 8,
                'q': 10, 'z': 10};

function worthOfWords(words) {
    let points=[];
    for (let i in words) {
      let current=0;
      for (let j in words[i]) {
        current+=VALUES[words[i][j].toLowerCase()];
      }
      points.push(current);
    }
    return words[points.indexOf(Math.max(...points))];
}

console.log(worthOfWords(['hi', 'quiz', 'bomb', 'president']))
