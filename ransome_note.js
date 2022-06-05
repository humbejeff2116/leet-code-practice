/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    magazine = [...magazine];
    let ransomNoteIndex;
    let i = 0;
    let ransLen = ransomNote.length;
    
    for (i; i < ransLen; i++) {
        ransomNoteIndex = magazine.indexOf(ransomNote[i])
      
        if( ransomNoteIndex > - 1 ) {
            magazine[ransomNoteIndex] = null 
        } else {
            return false
        }   
    }
    
    return true   
};
