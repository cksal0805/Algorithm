def amount(coins):
  target = 1
  for c in coins:
    if c > target:
      break
    else:
      target += c
  return target