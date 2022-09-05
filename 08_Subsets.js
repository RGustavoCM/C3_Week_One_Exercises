    // Ramiro Gustavo Cabrera Mendiola 
    // Ejercicios Semana Uno 
    // EJercicio : #8 Subsets
    
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function(nums) {
    let curr = 0;

    let res = [];
    function recursion(curr, arr) {
      res.push([...arr]);
      //backtrack
      for (let i = curr; i < nums.length; i++) {
        arr.push(nums[i]);
        recursion(i + 1, arr);
        arr.pop();
      }
    }

    recursion(curr, []);

    return (res);
};