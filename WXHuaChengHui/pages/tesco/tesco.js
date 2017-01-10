//获取应用实例
var app = getApp()

Page({
    data:{
        // text:'init data',
        // array:[{msg:'1'},{msg:'2'}]
        text: '文本',
        array: [{text: '数组'}],
        object: {
             text: '字典'
             },
             newField:{text:'哈哈哈大笑'}
    },

    changeText: function (){
        this.setData({
            text:'史小贩是个sb'
        })
    },

    changeItemInArray: function (){
        this.setData({
            'array[0].text':'史小贩是个二货'
        })
    },

    changeItemInObject: function (){
        this.setData({
            'object.text': '史小贩是个傻蛋'
        })
    },

    addNewField: function(){
        this.setData({
            'newField.text':'增加一条数据'
        })
    }
    // onLoad: function () {
    //     app.set
    // },

    // viewTap:function() {
    //     console.log('view tap');
    // }
})
