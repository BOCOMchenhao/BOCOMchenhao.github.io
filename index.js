//个人贷款计算
$(".oneSubmit").click(function() {
    var fuzhai,shouru,huankuan;

    fuzhai = parseFloat($("#one-fuzhai").val());
    shouru = parseFloat($("#one-shouru").val());
    huankuan = parseFloat($("#one-huankuan").val());

    if(fuzhai == 0) {
        console.log(huankuan*2)
        if(shouru >= huankuan*2) {
            passCal();
            return;
        } else {
            failCal();
            return;
        }
    } else {
        if(shouru >= huankuan*2 + fuzhai) {
            passCal();
            return;
        } else {
            failCal();
            return;
        }
    }
});


//组合贷款计算
$(".twoSubmit").click(function() {
    var fuzhai,shouru,huankuan;

    fuzhai = parseFloat($("#two-fuzhai").val());
    shouru = parseFloat($("#two-shouru").val());
    fuzhai2 = parseFloat($("#two-other-fuzhai").val());
    shouru2 = parseFloat($("#two-other-shouru").val());
    huankuan = parseFloat($("#two-huankuan").val());

    if(fuzhai == 0 && fuzhai2 == 0) {
        if(shouru + shouru2 >= huankuan*2) {
            passCal();
            return;
        } else {
            failCal();
            return;
        }
    } else {
        if(shouru + shouru2 >= huankuan*2 + fuzhai + fuzhai2) {
            passCal();
            return;
        } else {
            failCal();
            return;
        }
    }

});

//标签切换
$(".myTabsLabel").click(function() {
    $(".oneSubmit").show();
    $(".twoSubmit").show();
    $(".alert").hide();
});

//审核通过
function passCal(){
    $(".alert-success").show();
    $(".oneSubmit").hide();
    $(".twoSubmit").hide();
};

//审核不通过
function failCal(){
    $(".alert-danger").show();
    $(".oneSubmit").hide();
    $(".twoSubmit").hide();
};

//提示框关闭，页面重新加载
$(".close").click(function() {
    location.reload();
});
