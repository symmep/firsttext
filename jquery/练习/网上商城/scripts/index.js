$(function () {
    //搜索框
    $("inputSearch").on("focus",function () {
        if(this.value == this.defaultValue){
            this.value = "";
        }

    }).on("blur",function () {
        if(this.value==""){
            this.value = this.defaultValue;
        }
    });
    //导航菜单
    $("#nav li").hover(function () {
        $(this).children(".jnNav").show();
    },function () {
        $(this).children(".jnNav").hide();
    });

})

