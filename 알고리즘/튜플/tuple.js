function solution(s) {
  var answer = [];
  const array = eval(s.replace(/{/g, '[').replace(/}/g, ']')).flat();
  const countObj = {};
  const sortObj = [];
  array.forEach((x) => { 
    countObj[x] = (countObj[x] || 0)+1; 
  });
  for(let n in countObj) {
      sortObj.push([n, countObj[n]]);
  }
  sortObj.sort(function(a, b) {
    return  b[1] - a[1] ;
  });
  answer = sortObj.map((v) => Number(v[0]));
  return answer;
}
