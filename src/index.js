module.exports = function check(str, bracketsConfig) {
    const lBracket = [];
    const rBracket = [];
    const array = [];
    str = str.split('');
    
    bracketsConfig.forEach(item => {
        lBracket.push(item[0]);
        rBracket.push(item[1]);
    });

    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < lBracket.length; j++) {
            if (lBracket[j] == rBracket[j] && str[i] == rBracket[j]) {
                if (str[i] == rBracket[array[array.length - 1]]) {
                    array.pop(j);
                } else {
                    array.push(j);
                }
            } 
            else if (str[i] == lBracket[j]) {
                array.push(j);
            }
             else if (str[i] == rBracket[j]) {
                if (j == array[array.length - 1]) {
                    array.pop();
                } else {
                    return false;
                }
            }
        }
    }
    return array.length == 0;
}
