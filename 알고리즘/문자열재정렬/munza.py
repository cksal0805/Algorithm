def munza(m):
  char_arr = []
  number = 0
  result = ""
  for c in m:
    if c.isalpha():
      char_arr.append(c)
    else:
      number += int(c)
  char_arr.sort()
  if number != 0:
    char_arr.append(str(number))
  result = ''.join(char_arr)
  return result