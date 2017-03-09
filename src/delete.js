/**
 * Created by Administrator on 2017/3/6.
 */
//删除模块
define (function (require,exports) {
    var $ = require('jquery');
    var date = require('./date');
    var funStorage = require('./storage');
    var sub = require('./submit');
    var loop = require('./for');
    funStorage.storage();
    exports.delete = function (arry) {
        $('.content').on('click','.d',function () {
            $(this).parent().remove();
            var text6 = $(this).attr('data-value');
            arry.splice(loop.loop(text6,arry),1);
            $('#q1').text(arry.length);
            window.localStorage.setItem(arry,arry);
        });
    }
})