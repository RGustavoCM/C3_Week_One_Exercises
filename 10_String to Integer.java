    // Ramiro Gustavo Cabrera Mendiola 
    // Ejercicios Semana Uno 
    // EJercicio : #10 String To Integer
    
    class Solution {
    public int myAtoi(String s) {
        s = s.trim(); //esto elimina el espacio
        if(s.length()==0) return 0; // comprobando si la cadena está vacía después de eliminar todo el espacio delante y detrás
        boolean neg = false;
        int i=0;
        if(s.charAt(0)=='-' || s.charAt(0)=='+') {
            neg = (s.charAt(0)=='-')?true:false;
            i++; // primer índice denota signo tan incrementado
        }
        int res = 0;
        for(;i<s.length();i++) {
            int dig = s.charAt(i) - '0'; //convierte char a int
            if(dig<0 || dig>9) break; // se rompe si no es un dígito
            if((Integer.MAX_VALUE-dig)/10<res) return (neg? Integer.MIN_VALUE: Integer.MAX_VALUE);
			// maneja el desbordamiento -> verificando si realizamos la función a continuación (res * 10 + dig), ¿excederá el max_value? si excede de acuerdo a la señal estamos devolviendo el valor
            res = res*10 + dig;
        }
        if(neg)
            res = -1 * res;
        return res;
    }
}