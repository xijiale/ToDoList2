/**
 * Created by Administrator on 2017/3/9.
 */
define (function (require,exports) {
    var $ = require('jquery');
    exports.loop = function (text,arry) {
        for (var i = 0; i < arry.length; i++) {
            if (arry[i] == text) {
                var pushIndex = i;
            }
        }
        return pushIndex;
    }
})
