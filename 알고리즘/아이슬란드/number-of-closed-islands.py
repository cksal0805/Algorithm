class Solution:
  def closedIsland(self, grid: List[List[int]]) -> int:
    result = 0
    m,n = len(grid), len(grid[0])
    def dfs(i,j):
      if 0 <= i < m and 0 <= j < n and not grid[i][j]:
        grid[i][j] = 1
        dfs(i+1,j)
        dfs(i-1,j)
        dfs(i,j+1)
        dfs(i,j-1)
    for i in range(m):
      dfs(i,0)
      dfs(i,n-1)
    for j in range(n):
      dfs(0,j)
      dfs(m-1,j)
    for i in range(m):
      for j in range(n):
        if not grid[i][j]:
          result+=1
          dfs(i,j)
    return result
