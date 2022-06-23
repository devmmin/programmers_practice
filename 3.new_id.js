// 풀이
function solution(new_id) {
  const answer = new_id
    .toLowerCase() // 1
    .replace(/[^\w-_.]/g, '') // 2
    .replace(/\.+/g, '.') // 3
    .replace(/^\.|\.$/g, '') // 4
    .replace(/^$/, 'a') // 5
    .slice(0, 15)
    .replace(/\.$/, ''); // 6
  const len = answer.length;
  return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
}

// 풀이 2
const solution2 = (new_id) => {
  const id = new_id
    .toLowerCase()
    .replace(/[^\w\d-_.]/g, '')
    .replace(/\.{2,}/g, '.')
    .replace(/^\.|\.$/g, '')
    .padEnd(1, 'a')
    .slice(0, 15)
    .replace(/^\.|\.$/g, '');
  return id.padEnd(3, id[id.length - 1]);
};

// 풀이 3
const solution3 = (new_id) =>
  new_id
    .toLowerCase()
    .replace(/[^\w-_.]/g, '')
    .replace(/\.+/g, '.')
    .replace(/^\.|\.$/g, '')
    .replace(/^$/, 'a')
    .match(/^.{0,14}[^.]/)[0]
    .replace(/^(.)$/, '$1$1$1')
    .replace(/^(.)(.)$/, '$1$2$2');

const no1 = '...!@BaT#*..y.abcdefghijklm';
const no2 = 'z-+.^.';
const no3 = '=.=';
const no4 = '123_.def';
const no5 = 'abcdefghijklmn.p';

solution(no1);
solution(no2);
solution(no3);
solution(no4);
solution(no5);
