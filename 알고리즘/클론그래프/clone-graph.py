import copy
class Solution(object):
    def cloneGraph(self, node):
        copy_node = copy.deepcopy(node)
        return copy_node