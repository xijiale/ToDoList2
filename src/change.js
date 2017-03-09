define(function (require,exports) {
    var $ = require('jquery');
    var date = require('./data');
    var loop = require('./for');
    exports.cancel = function (arr1,arr2) {
        $('.content').on('change','.f',function () {
            var text3 = $(this).val();
            $('#task').append(date.create(text3));
            arr1.push(text3);
            $('#q1').text(arr1.length);
            arr2.splice(loop.loop(text3,arr2),1);
            $(this).parent().remove();
            $('#q2').text(arr2.length);
            window.localStorage.setItem('arr1',arr1);
            window.localStorage.setItem('arr2', arr2);
        });
    }


   /* exports.choose = function () {
        $('.content').on('click','r',function () {
            var text2 = $(this).val();
            var htmlTempl = funCreate.createDone(text2);
            htmlTempl.add();
           var htmlTemplUndo = funCreate.creatUndo(text2);
           htmlTemplUndo.delete();
        });
    };
    exports.cancel = function () {
        $('.content').on('change','.f',function () {
            var text3 = $(this).val();
            var htmlTempl = funCreate.createUndo(text3);
           htmlTempl.add();
           var htmlTemplDone = funCreate.createDone(text3);
           htmlTemplDone.delete();
        });
    }*/
});