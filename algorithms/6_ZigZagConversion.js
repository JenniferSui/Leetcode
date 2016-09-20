var convert = function(s, numRows) {
    var len = s.length;
    if(numRows <= 1) return s;

    var m = numRows;
    var n = Math.ceil(len / (m - 1));
    var array = [];
    var tmp = "";

    for (var i = 0; i < m; i++) {
        array[i] = [];
    }

    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            if (j % 2 === 0 && i < m - 1) {
                var res = (m-1) * j + i;
                if (res < len) array[i][j] = res;
            }
            else if (j % 2 > 0 && i > 0) {
                var res = (m-1) * j + m - i-1;
                if (res < len) array[i][j] = res;
            }
        }
    }


    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            if (array[i].length > 0 && array[i][j] !== undefined) {
                tmp += s[array[i][j]];
            }
        }
    }
    return tmp;
};
