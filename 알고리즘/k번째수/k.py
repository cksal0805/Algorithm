def solution(array, commands):
  newData = []
  answer = []
  for idx,i in enumerate(commands):
      newData = array[i[0]-1:i[1]]
      newData.sort()
      answer.append(newData[i[2]-1])
  return answer