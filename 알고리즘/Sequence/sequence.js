const splitIntoFibonacci = function (S) {
  const max = (2 ** 31) - 1 // max 값
  let result = [] // 결과 값
  const validCheck = x => (x.length >= 2 && x[0] === '0') || (parseInt(x, 10) < 0) || (parseInt(x, 10) > max)
  const search = (index, acc = []) => {
    if (index > S.length - 1) { // 종료 시점
      if (acc.length >= 3) {
        result = acc
      }
      return
    }
    const accLength = acc.length;
    const a = acc[accLength - 2]
    const b = acc[accLength - 1]
    if (validCheck(a) || validCheck(b)) { // 체킹 후 유효하지 않으면(?) return
      return
    }
    let current = ''
    for (let i = index; i < S.length; i++) {
      current += S[i] // 뒤에 있는 문자열, 다시 재귀
      const num = parseInt(current, 10)
      if (!validCheck(current) && num === Number(a) + Number(b)) { // 피보나치가 만들어 지면 그 뒤부터 다시 checking
        search(i + 1, [...acc, num])
      }
    }
  }
  for (let i = 0; i < S.length; i++) {
    for (let j = i + 1; j < S.length; j++) {
      search(
        j + 1,
        [S.slice(0, i + 1), S.slice(i + 1, j + 1)],
      )
    }
  }
  return result.map(x => Number(x))
}
console.log(splitIntoFibonacci("123456579"));
