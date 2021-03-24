function solution(today, limit) {
  const rows = document.getElementsByTagName('tr');
  let counter = 0;
  for(let i = 0; i < rows.length; i++) {
      const cells = rows[i].getElementsByTagName("td");
      const brrowedDate = new Date(cells[1].firstChild.data);
      const returnedDate = cells[2].firstChild ? new Date(cells[2].firstChild.data) : null;
      const currentTrStyle = rows[i].style.backgroundColor;
      if(returnedDate === null) {
          const diffDate = brrowedDate-new Date(today);
          const result = Math.ceil( diffDate / (60*1000*60*24));
          if(Math.abs(result) > limit && currentTrStyle !== 'red') {
              counter++;
          } else if(Math.abs(result) < limit && currentTrStyle === 'red') {
              counter++;
          }
      } else {
          const diffDate = brrowedDate-returnedDate;
          const result = Math.ceil( diffDate / (60*1000*60*24));
          if(Math.abs(result) > limit && currentTrStyle !== 'red') {
              counter++;
          } else if(Math.abs(result) < limit && currentTrStyle === 'red') {
              counter++;
          }
      }
  }
  return counter;
}