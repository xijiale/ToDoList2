/**
 * Created by Administrator on 2017/3/9.
 */
define(function (require,exports,module) {
    var data = require('./data');
    var $ = require('jquery');
    module.exports = {
        undoList:[],
        doneList:[],
        init:function () {
            console.log('init');
            this.bindUI();
            this.loadData();
        },
        loadData:function () {
            this.undoList = data.getData('undoList') || [];
            this.doneList = data.getData('doneList') || [];
            for (var k = 0; k < this.undoList.length; k++) {
                var text4 = this.undoList[k];
                var htmlTempl4 = "<div class='arr'><input type='checkbox' class='inputtype r' id='selector' value="+text4+"><span>"+text4+"</span> <i class='fa fa-minus-circle d' aria-hidden='true' id='delete' data-value="+text4+"></i></div>";
                $('#task').append(htmlTempl4);
                $('#q1').text(this.undoList.length);
            }
            for (var i = 0; i < this.doneList.length; i++) {
                var text5 = this.doneList[i];
                var htmlTempl5 = "<div class='array'><input type='checkbox' class='inputtype f' checked='checked' value="+text5+"><span>"+text5+"</span><i class='fa fa-minus-circle t' aria-hidden='true' data-value="+text5+"></i></div>";
                $('#taskl').append(htmlTempl5);
                $('#q2').text(this.doneList.length);
            }
        },
        bindUI:function () {
            //添加
            $("#sub").on('click',function () {
                var text1  = $('.enter').val();
                if (!text1) {
                    alert("不能为空！");
                    return;
                }
                this.undoList.push(text1);
                data.add('undoList',this.undoList);
                this.loadData();
               /* var htmlTempl1 = "<div class='arr'><input type='checkbox' class='inputtype r' id='selector' value="+text1+"><span>"+text1+"</span> <i class='fa fa-minus-circle d' aria-hidden='true' id='delete' data-value="+text1+"></i></div>";
                $('#task').append(htmlTempl1);
                //统计事件
                this.undoList.push(text1);
                $('#q1').text(this.undoList.length);
                //存储
                data.add('undoList',this.undoList);*/
            }.bind(this))

            //删除undo
            $('.content').on('click','.d',function () {
                $(this).parent().remove();
                var text6 = $(this).attr('data-value');
                data.remove('undoList',text6);
                this.loadData();
               /* for (var i = 0; i < this.undoList.length; i++) {
                    if (this.undoList[i] == text6) {
                        var pushIndex = i;
                    }
                }
                /!*this.undoList.splice(pushIndex,1);*!/

                /!*$('#q1').text--;*!/
                /!*window.localStorage.setItem('undoList',this.undoList);*!/*/
            }.bind(this))

            //勾选
            $('.content').on('click','.r',function () {
                var text2 = $(this).val();
                this.doneList.push(text2);
                data.add('doneList',this.doneList);
                data.remove('undoList',text2);
                this.loadData();
                /*var htmlTempl2 = "<div class='array'><input type='checkbox' class='inputtype f' checked='checked' value="+text2+"><span>"+text2+"</span><i class='fa fa-minus-circle t' aria-hidden='true' data-value="+text2+"></i></div>";
                $('#taskl').append(htmlTempl2);

                $('#q2').text(this.doneList.length);
                for (var i = 0; i < this.undoList.length; i++) {
                    if (this.undoList[i] == text2) {
                        var pushIndex = i;
                    }
                }
                this.undoList.splice(pushIndex,1);
                $(this).parent().remove();
                $('#q1').text(this.undoList.length);
                window.localStorage.setItem('doneList', this.doneList);
                window.localStorage.setItem('undoList',this.undoList);*/
            }.bind(this))

            //删除done
            $('.content').on('click','.t',function () {
                $(this).parent().remove();
                var text7 = $(this).attr('data-value');
                data.remove('doneList',text7);
                this.loadData();
                /*for (var i = 0; i < this.doneList.length; i++) {
                    if (this.doneList[i] == text7) {
                        var pushIndex = i;
                    }
                }
                this.doneList.splice(pushIndex,1);
                $('#q2').text(this.doneList.length);
                window.localStorage.setItem('doneList', this.doneList);*/
            }.bind(this))

            //勾选取消
            $('.content').on('change','.f',function () {
                var text3 = $(this).val();
                this.undoList.push(text3);
                data.add('undoList',this.undoList);
                data.remove('doneList',text3);
                this.loadData();
               /* var htmlTempl3 = "<div class='arr'><input type='checkbox' class='inputtype r' id='selector'><span>"+text3+"</span> <i class='fa fa-minus-circle d' aria-hidden='true' id='delete' data-value="+text3+"></i></div>";
                $('#task').append(htmlTempl3);
                this.undoList.push(text3);
                $('#q1').text(this.undoList.length);
                for (var i = 0; i < this.doneList.length; i++) {
                    if (this.doneList[i] == text3) {
                        var pushIndex = i;
                    }
                }
                this.doneList.splice(pushIndex,1);
                $(this).parent().remove();
                $('#q2').text(this.doneList.length);
                window.localStorage.setItem('undoList',this.undoList);
                window.localStorage.setItem('doneList', this.doneList);*/
            }.bind(this))

        }

    }
})