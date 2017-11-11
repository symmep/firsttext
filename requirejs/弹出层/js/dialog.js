require.config({
    paths:{
        jquery:'jquery-1.12.4'
    }
});
define(["jquery"],function ($) {
    function  Dialog(setting){
        this.$container = $('<div class="dialog-container"></div>');
        this.$mask = $('<div class="dialog-mask"></div>');
        this.$main = $('<div class="dialog-main"></div>');
        this.$title = $('<div class="dialog-title"></div>');
        this.$item = $('<div class="dialog-title-item"></div>');
        this.$close = $('<div class="dialog-title-close">[X]</div>');
        this.$content = $('<div class="dialog-content"></div>');
        this.defaulstSettings = {
            width: 400,
            height: 300,
            title:'弹出层',
            content:""
        };
        $.extend(this.defaulstSettings,setting);
    }
    Dialog.prototype.open = function () {
        this.$container.append(this.$mask).append(this.$main);
        this.$main.append(this.$title).append(this.$content);
        this.$title.append(this.$item).append(this.$close);
        $('body').append(this.$container);

        this.$item.html(this.defaulstSettings.title);
        this.$main.css({
            widht:this.defaulstSettings.width,
            height:this.defaulstSettings.height,
            marginTop:-this.defaulstSettings.width/2,
            marginLeft:-this.defaulstSettings.height/2
        });
        if(this.defaulstSettings.content.indexOf(".html") != -1){
            this.$content.load(this.defaulstSettings.content);
        }else{
            this.$content.html(this.defaulstSettings.content);
        }
        this.$close.on("click",function () {
            this.close();
        }.bind(this));
    };
    Dialog.prototype.close = function () {
        this.$container.remove();
    };
    return Dialog;
});
