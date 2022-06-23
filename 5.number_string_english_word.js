// 풀이
function solution(s) {
  let answer = null;
  const numbers = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  s = s.replace(
    /zero|one|two|three|four|five|six|seven|eight|nine/gi,
    function (matched) {
      return numbers[matched];
    }
  );
  answer = Number(s);
  return answer;
}

// 풀이 2
function solution2(s) {
  let numbers = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  var answer = s;

  for (let i = 0; i < numbers.length; i++) {
    let arr = answer.split(numbers[i]);
    answer = arr.join(i);
  }

  return Number(answer);
}

// 풀이 3
function solution3(s) {
  let charSet = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  for (let [key, value] of Object.entries(charSet)) {
    let re = new RegExp(`${key}`, 'g');
    s = s.replace(re, value);
  }
  return parseInt(s);
}

const s = 'one4seveneight';
const s2 = '23four5six7';
const s3 = '2three45sixseven';
const s4 = '123';

solution(s);
solution2(s2);
solution(s3);
solution2(s4);
