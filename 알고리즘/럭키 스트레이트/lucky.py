def lucky(N):
  left = 0
  right = 0
  for i in range(0,int((len(N)/2))):
    left += N[i]
  for j in range(int((len(N)/2)),len(N)):
    right += N[j]
  print(int((len(N)/2)))
  if left == right:
    return("LUCKY")
  else:
    return("READY")
