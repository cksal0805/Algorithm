def card_reverse(cards):
  zero = 0;
  one = 0;
  if cards[0] == 0:
    zero += 1
  else:
    one += 1
  for i in range(1,len(cards) - 1):
    if cards[i] != cards[i + 1]:
      if cards[i+1] == 0:
        zero += 1
      else:
        one += 1
  return(min(zero,one))