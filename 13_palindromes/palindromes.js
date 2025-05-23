const palindromes = function (inp) {
    let str="";
    for(let i = 0; i < inp.length;i++){
        let x = inp[i];
        x = x.toLowerCase();
        if ((x>='0'&&x<='9')||(x>='a'&&x<='z')) {
            str+=x;
        }
    }
    str=str.toLowerCase();
    for(let i = 0; i<(str.length/2); i++){
        if(str[i]!=str[str.length-1-i]){
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
