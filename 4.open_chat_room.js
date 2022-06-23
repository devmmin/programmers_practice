// 풀이
function solution(record) {
  var answer = [];
  let uuid_list = {};
  record.forEach((field) => {
    const action = field.split(' ')[0];
    if (action === 'Enter' || action === 'Change') {
      const uuid = field.split(' ')[1];
      const nickname = field.split(' ')[2];
      uuid_list[uuid] = nickname;
    }
  });

  record.forEach((field) => {
    const action = field.split(' ')[0];
    if (action !== 'Change') {
      const message =
        action === 'Enter' ? '님이 들어왔습니다.' : '님이 나갔습니다.';
      const uuid = field.split(' ')[1];
      answer.push(`${uuid_list[uuid]}${message}`);
    }
  });
  return answer;
}

// 풀이 2
function solution2(record) {
  const userInfo = {};
  const action = [];
  const stateMapping = {
    Enter: '님이 들어왔습니다.',
    Leave: '님이 나갔습니다.',
  };

  record.forEach((v) => {
    const [state, id, nick] = v.split(' ');

    if (state !== 'Change') {
      action.push([state, id]);
    }

    if (nick) {
      userInfo[id] = nick;
    }
  });

  return action.map(([state, uid]) => {
    return `${userInfo[uid]}${stateMapping[state]}`;
  });
}

const record = [
  'Enter uid1234 Muzi',
  'Enter uid4567 Prodo',
  'Leave uid1234',
  'Enter uid1234 Prodo',
  'Change uid4567 Ryan',
];

solution(record);
