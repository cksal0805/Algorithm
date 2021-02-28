const cloneGraph = function(graph, hash = new Map()) {
  if (hash.has(graph)) {
    return hash.get(graph)
  }
  let result = Array.isArray(graph)? [] : {};
  hash.set(graph, result)
  for (let node in graph) {
      if(graph.hasOwnProperty(node)) {
          if(isObject(graph[node])) {
         result[node] =  cloneGraph(graph[node], hash)
      }else {
          result[node] = graph[node]
      } 
    }
  }
  return result
  function isObject(graph){
      return typeof graph === 'object' && graph !== null
  }
};