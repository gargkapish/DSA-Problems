// Runtime: 2 ms
// Memory: 60.5 MB

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let n=s.length;
    let low=0;
    let high=n-1;
    while(low<=high){
        let temp=s[low];
        s[low]=s[high];
        s[high]=temp;

        low++;
        high--;
    }

};