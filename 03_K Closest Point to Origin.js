/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */

    // Ramiro Gustavo Cabrera Mendiola 
    // Ejercicios Semana Uno 
    // EJercicio : #3 K Closest Point To Origin 
    
class Heap {
    constructor(type, vals = []) {
        this.type = type // el único caso sería min para esta Q
        this.data = [undefined] // 1 montón indexado
        
        for (const val of vals) {
            this.insert(val)
        }
    }

    getSize() { // devolver el tamaño real del montón
        return this.data.length - 1
    }

    // agrega un nuevo valor al montón
    insert(val) { 
        this.data.push(val);
        const size = this.getSize();
        if (size === 1) return;
        
        let lastInd = size;
        let startReached = this.data[Math.floor(lastInd / 2)] === undefined
        let orderSwitch = this.compare(this.data[lastInd], 
                                       this.data[Math.floor(lastInd / 2)]) > 0;
        // tamizar un valor en la matriz
        while (!startReached && orderSwitch){
            let temp = this.data[Math.floor(lastInd / 2)];
            this.data[Math.floor(lastInd / 2)] = this.data[lastInd];
            this.data[lastInd] = temp;
            
            lastInd = Math.floor(lastInd / 2);
            startReached = this.data[Math.floor(lastInd / 2)] === undefined
            if (!startReached) {
                orderSwitch = this.compare(this.data[lastInd], 
                                            this.data[Math.floor(lastInd / 2)]) > 0;  
            }

        }
    }
    
    // esta función de comparación es todo lo que necesitará cambiar para manejar cualquier tipo de datos en el montón
    compare(a, b) { // Modificada para acomodar a montones mínimos o máximos.
        const distA = a[0];
        const distB = b[0];
        if (this.type === 'min') { 
            return distB - distA
        } else {
            return distA - distB
        }
    }

    
    // elimina el valor superior del montón y lo devuelve
    pop() {
        const top = this.data[1] // La eliminaremos de la matriz
        const size = this.getSize();
        if (size > 1) {
            this.data[1] = this.data.pop();
            this.heapify(1);
        } else if (size === 1) {
            this.data.pop(); // Si es el único val, quítalo.
        } 
        return top;
    }

    // devuelve el primer valor del montón
    peek() {
        let top = null;
        const size = this.getSize();
        if (size >= 1) top = this.data[1];
        return top;
    }

    // devuelve la estructura de datos a una estructura de montón válida
    heapify(i) {
        const size = this.getSize();
        const childOffset = i * 2
        if (childOffset > size) {
            return
        }
        
        const childLeftI = childOffset;
        const childRightI = childOffset + 1;
        
        const switchChildLeft = this.data[childLeftI] !== undefined && 
              this.compare(this.data[childLeftI], this.data[i]) > 0;
        const switchChildRight = this.data[childRightI] !== undefined && 
              this.compare(this.data[childRightI], this.data[i]) > 0;
        
        if (switchChildLeft || switchChildRight) {
            if (this.data[childRightI] === undefined || 
                this.compare(this.data[childRightI], 
                             this.data[childLeftI]) <= 0) {
                const temp = this.data[childLeftI];
                this.data[childLeftI] = this.data[i];
                this.data[i]= temp;
                this.heapify(childLeftI)
            } else {
                const temp = this.data[childRightI];
                this.data[childRightI] = this.data[i];
                this.data[i]= temp;
                this.heapify(childRightI)
            }
        }
    }
}

var kClosest = function(points, k) {
    const distances = points.map((ele) => [Math.sqrt(ele[0] ** 2 + ele[1] ** 2), ele]);
    const maxHeap = new Heap('max', distances);

    while (maxHeap.getSize() > k) {
        maxHeap.pop();
    }
    const res = maxHeap.data.slice(1).map(ele => ele[1])
    
    return res;
};