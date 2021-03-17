function solution(N) {
  const binaryNum = N.toString(2);
  const binaryGaps = binaryNum.slice(binaryNum.indexOf('1') + 1, binaryNum.lastIndexOf('1'));
  const gapCount = binaryGaps.split('1').map(v => v.length);
  return gapCount.length ? Math.max(...gapCount) : 0;
}
