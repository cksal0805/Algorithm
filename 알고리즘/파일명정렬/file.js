function solution(files) {
  var answer = [];
  let parse_files = [];

  const reg = /(\d+)/g;
  for (let i = 0; i < files.length; i++) {
    parse_files.push({ index: i, value: files[i].split(reg) });
  }
  parse_files.sort((a,b) => {
    const a_head = a.value[0].toUpperCase();
    const b_head = b.value[0].toUpperCase();

    if (a_head > b_head) {
      return 1;
    }
    else if (a_head < b_head) {
      return -1;
    }
    else{
      const a_number = Number(a.value[1]);
      const b_number = Number(b.value[1]);
      if (a_number > b_number) {
        return 1;
      }
      else if (a_number < b_number) {
        return -1;
      }
      else {
        return 0;
      }
    }
  })
  parse_files.map(v => {
    answer.push(files[v.index])
  })
  console.log(parse_files);
  return answer;
}
console.log(solution(["img12.png", "img10.png", "img02.png", "img1.png", "IMG01.GIF", "img2.JPG"]))