/**
 * Created by Administrator on 2017/3/7.
 */
define (function (require,exports) {
    var $ = require('jquery');
    exports.create = function (text) {
        var htmlTempl = "<div class='arr'><input type='checkbox' class='inputtype r' id='selector' value="+text+"><span>"+text+"</span> <i class='fa fa-minus-circle d' aria-hidden='true' id='delete' data-value="+text+"></i></div>";
        return htmlTempl;
    }
});
