/**
 * Created by Administrator on 2017/3/7.
 */
define (function (require,exports) {
    var $ = require('jquery');
    var funCreate = require('./submit');
    exports.storage = function (arr1,arr2) {
        if(window.localStorage.getItem('arr1')){
            arr1 = window.localStorage.getItem('arr1').split(',');
        }
        if(window.localStorage.getItem('arr2')){
            arr2 = window.localStorage.getItem('arr2').split(',');
        }
        for (var k = 0; k < arr1.length; k++) {
            var text4 = arr1[k];
            var htmlTempl4 = funCreate.creatUndo(text4);
            htmlTempl4.add();
            htmlTempl4.count();
        }
        for (var i = 0; i < arr2.length; i++) {
            var text5 = arr2[i];
            var htmlTempl5 = funCreate.createDone(text5);
           htmlTempl5.add();
            htmlTempl5.count();
        }
    }
})