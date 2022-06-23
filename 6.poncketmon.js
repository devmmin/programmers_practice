// 풀이
function solution(nums) {
  let answer = 0;
  const category = [...new Set(nums)];
  const limit = nums.length / 2;
  answer = category.length > limit ? limit : category.length;
  return answer;
}

// 풀이 2
function solution(nums) {
  const max = nums.length / 2;
  const arr = [...new Set(nums)];

  return arr.length > max ? max : arr.length;
}

const nums = [3, 1, 2, 3];
const nums2 = [3, 3, 3, 2, 2, 4];
const nums3 = [3, 3, 3, 2, 2, 2];
solution(nums);
