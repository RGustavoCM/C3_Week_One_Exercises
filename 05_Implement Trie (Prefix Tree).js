    // Ramiro Gustavo Cabrera Mendiola 
    // Ejercicios Semana Uno 
    // EJercicio : #5 Implemetnt Trie 
    
class TrieNode {
    constructor() {
        this.children = {};
        this.endOfWord = false;
    }
}


var Trie = function() {
    this.root = new TrieNode();
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let curr = this.root;
    
    for(let c of word) {
        if(!curr.children[c])
            curr.children[c] = new TrieNode();
        curr = curr.children[c];
    }
    
    curr.endOfWord = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let curr = this.root;
    
    for(let c of word) {
        if(!curr.children[c]) return false;
        curr = curr.children[c];
    }
            
    return curr.endOfWord;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let curr = this.root;
    
    for(let c of prefix) {
        if(!curr.children[c]) return false;
        curr = curr.children[c];
    }
    
    return true;
}