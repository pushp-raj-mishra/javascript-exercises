const repeatString = function(s,n) {
    if (n<0) {
        return 'ERROR';
    }
    let ans='';
    for (let i = 0; i < n; i++) {
        
        ans += s;

    }
    return ans;
};

// Do not edit below this line
module.exports = repeatString;
