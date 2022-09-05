/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

    // Ramiro Gustavo Cabrera Mendiola 
    // Ejercicios Semana Uno 
    // EJercicio : #4 Binary Tree Level Order Traversal
    
 const levelOrder = function(root) {
    if (root === null) return [];
    
    const queue = [root], ans = [], tmp = [], tmpVals = [];
    
    while (queue.length > 0) {
        const { val, left, right } = queue.shift();
        tmpVals.push(val);
        left && tmp.push(left);
        right && tmp.push(right);
        
        if (queue.length === 0) {
            queue.push(...tmp)
            tmp.length = 0;
            ans.push([...tmpVals]);
            tmpVals.length = 0;
        }
    }
    
    return ans;
}