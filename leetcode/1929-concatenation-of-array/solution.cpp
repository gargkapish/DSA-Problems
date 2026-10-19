// Runtime: 0 ms
// Memory: 16.7 MB

class Solution {
public:
    vector<int> getConcatenation(vector<int>& a) {
        int n = a.size();
        vector<int>ans(2*n);
        for(int i=0; i<n; i++){
            ans[i]= a[i];
            ans[i+n]= a[i];
        }
        return ans;
    }
};