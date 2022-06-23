// 풀이
function solution(lottos, win_nums) {
  let answer = [];
  const zero = lottos.filter((v) => v === 0).length;
  const correct = lottos.filter((v) => win_nums.includes(v)).length;
  answer[0] = Math.min(7 - (zero + correct), 6);
  answer[1] = Math.min(7 - correct, 6);
  return answer;
}

// 풀이2
function solution2(lottos, win_nums) {
  const rank = [6, 6, 5, 4, 3, 2, 1];

  let minCount = lottos.filter((v) => win_nums.includes(v)).length;
  let zeroCount = lottos.filter((v) => !v).length;

  const maxCount = minCount + zeroCount;

  return [rank[maxCount], rank[minCount]];
}

const lotto = [44, 1, 0, 0, 31, 25];
const win_nums = [31, 10, 45, 1, 6, 19];
const lotto2 = [0, 0, 0, 0, 0, 0];
const win_nums2 = [38, 19, 20, 40, 15, 25];
const lotto3 = [45, 4, 35, 20, 3, 9];
const win_nums3 = [20, 9, 3, 45, 4, 35];

solution(lotto3, win_nums3);
