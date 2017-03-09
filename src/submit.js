/**
 * Created by Administrator on 2017/3/6.
 */
//创建元素
define(function (require,exports) {
    var $ = require('jquery');
    var date = require('./date');
    var funStorage = require('./storage');
    var doneList = [];
    var undoList= [];
    funStorage.storage();
    exports.sub = function (text) {
        $("#sub").on('click',function () {
            $('#task').append(date.create(text));
            undoList.push(text);
            $('#q1').text(undoList.length);
            if(window.localStorage) {
                window.localStorage.setItem('undoList', undoList);
            }
        });
        return undoList;
    };
    /*exports.createUndo = function (val) {
        undoList.push(val);
        var element = "<div class='arr'><input type='checkbox' class='inputtype r' id='selector' value=" + val + "><span>" + val + "</span> <i class='fa fa-minus-circle d' aria-hidden='true' id='delete' data-value=" + val + "></i></div>";
        return{
            add: function () {
                $('#task').append(element);
                window.localStorage.setItem('undoList', undoList);
            },
            count: function () {
                $('#q1').text(undoList.length);
                return undoList;
            },
            delete: function () {
                $('.content').on('click','.d',function () {
                    element.remove();
                    for (var i = 0; i < undoList.length; i++) {
                        if (undoList[i] == val) {
                            var pushIndex = i;
                        }
                    }
                    undoList.splice(pushIndex,1);
                    $('#q1').text(undoList.length);
                    window.localStorage.setItem('undoList',undoList);
                });
            }
        };
    };
    exports.createDone = function (val) {

        doneList.push(val);
         var element = "<div class='array'><input type='checkbox' class='inputtype f' checked='checked' value="+val+"><span>"+val+"</span><i class='fa fa-minus-circle t' aria-hidden='true' data-value="+val+"></i></div>";
        return{
            add: function () {
                $('#taskl').append(element);
                window.localStorage.setItem('doneList', doneList);
            },
            count: function () {
                $('#q2').text(doneList.length);
                return doneList;
            },
            delete: function () {
                $('.content').on('click','.t',function () {
                    element.remove();
                    for (var i = 0; i < doneList.length; i++) {
                        if (doneList[i] == val) {
                            var pushIndex = i;
                        }
                    }
                    doneList.splice(pushIndex,1);
                    $('#q2').text(doneList.length);
                    window.localStorage.setItem('doneList',doneList);
                });
            }
        };
    }
    // funStorage.storage(undoList,doneList);*/
})
