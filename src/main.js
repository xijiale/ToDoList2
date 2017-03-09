define(function (require,exports) {
     var $ = require('jquery');
    var del = require('./delete');
    var sub = require('./submit');
     //var todoChange = require('./change');

    // var todoStorage = require('./storage');
    // var funCreate = require('./elementCreate');
        var text = $('#todoInput').val();
        if (!text) {
            alert("不能为空！");
            return;
        }
        del.delete(sub.sub(text));

});