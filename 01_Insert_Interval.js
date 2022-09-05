/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
    // Ramiro Gustavo Cabrera Mendiola 
    // Ejercicios Semana Uno 
    // EJercicio : #1 Insert Interval

 var insert = function (intervals, newInterval) {
    let i = 0;
    while (i < intervals.length && intervals[i][0] < newInterval[0]) {
      i++;
    }
  
    // Combinar newInterval en intervalos
    intervals = [...intervals.slice(0, i), newInterval, ...intervals.slice(i)]
  
    // Ahora arregla la superposición
    const result = [];
    for (let i = 0; i < intervals.length; ) {
      let upperLimit = intervals[i][1];
      let j = i + 1;
      while (j < intervals.length && upperLimit >= intervals[j][0]) {
        upperLimit = Math.max(upperLimit, intervals[j][1]);
        j++;
      }
      result.push([intervals[i][0], upperLimit]);
      i = j;
    }
    return result;
  };