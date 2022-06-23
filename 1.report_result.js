// 풀이
function solution() {
  const answer = new Array(id_list.length);
  answer.fill(0);
  const report_list = {};

  id_list.forEach((user) => {
    report_list[user] = [];
  });

  report.forEach((user) => {
    const [user_id, report_id] = user.split(' ');
    if (!report_list[report_id].includes(user_id)) {
      report_list[report_id].push(user_id);
    }
  });

  for (const key in report_list) {
    if (report_list[key].length >= k) {
      report_list[key].forEach((user) => {
        answer[id_list.indexOf(user)] += 1;
      });
    }
  }
  return answer;
}

// 풀이2
function solution2(id_list, report, k) {
  let reports = [...new Set(report)].map((a) => {
    return a.split(' ');
  });
  let counts = new Map();
  for (const bad of reports) {
    counts.set(bad[1], counts.get(bad[1]) + 1 || 1);
  }
  let good = new Map();
  for (const report of reports) {
    if (counts.get(report[1]) >= k) {
      good.set(report[0], good.get(report[0]) + 1 || 1);
    }
  }
  let answer = id_list.map((a) => good.get(a) || 0);
  return answer;
}

// 풀이3
function solution(id_list, report, k) {
  const userList = id_list.reduce((result, currentId) => {
    result[currentId] = [0, []];
    return result;
  }, {});

  for (const id of new Set(report)) {
    const [REPORT_ID, ID] = id.split(' ');
    userList[REPORT_ID][1].push(ID);
    userList[ID][0]++;
  }

  const banned = id_list.filter((id) => userList[id][0] >= k);
  const emailList = id_list.map((id) => {
    return userList[id][1].filter((id) => {
      return banned.includes(id);
    }).length;
  });

  return emailList;
}

// 테스트 케이스 & 실행
const id_list = ['muzi', 'frodo', 'apeach', 'neo'];
const report = [
  'muzi frodo',
  'apeach frodo',
  'frodo neo',
  'muzi neo',
  'apeach muzi',
];

const k = 2;

solution2(id_list, report, k);

const id_list2 = ['con', 'ryan'];
const report2 = ['ryan con', 'ryan con', 'ryan con', 'ryan con'];
const k2 = 3;

solution2(id_list2, report2, k2);
