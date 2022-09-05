    // Ramiro Gustavo Cabrera Mendiola 
    // Ejercicios Semana Uno 
    // EJercicio : #9 Spiral Matrix
    
class Solution {
    public List<Integer> spiralOrder(int[][] matrix) {
        int topRow = 0;
        int botRow = matrix.length-1;
        int leftCol = 0;
        int rightCol = matrix[0].length - 1;
        int total = matrix.length * matrix[0].length;
        
        List<Integer> res = new ArrayList<>();
        
        while(true){
            for(int i=leftCol; i<=rightCol; i++) res.add(matrix[topRow][i]);
            for(int i=topRow+1; i<=botRow; i++) res.add(matrix[i][rightCol]);

            topRow++;
            rightCol--;
            
            if(res.size() == total) break;

            for(int i=rightCol; i>=leftCol; i--) res.add(matrix[botRow][i]);
            for(int i=botRow-1; i>=topRow; i--) res.add(matrix[i][leftCol]);
            
            leftCol++;
            botRow--;
            
            if(res.size() == total) break;
        }
        
        return res;
    }
}