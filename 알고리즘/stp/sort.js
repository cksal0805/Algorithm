const readline = require('readline');
const solution = (n, data) => {
	const startTime = [];
	const endTime = [];
	data.forEach((element) => {
		const splitEle = element.split(' ~ ');
		startTime.push(splitEle[0]);
		endTime.push(splitEle[1]);
	});
	startTime.sort().reverse();
	endTime.sort();
	if(startTime[0] > endTime[0]) {
		return -1;
	}
	return `${startTime[0]} ~ ${endTime[0]}`;
}

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let N = null;
  let count = 0;
	const data = [];
	for await (const line of rl) {
    if (!N) {
      N = +line;
    } else {
      data.push(line);
      count += 1;
    }
    if (N === count) {
      rl.close();
    }
  }
	console.log(solution(N, data));
	
	process.exit();
})();
