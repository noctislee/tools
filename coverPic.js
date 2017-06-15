/**
 * Created by NoctisLee on 2017/3/3.
 */
function draw(fn){
    var data1= new Array();
    //获取图片
    for(var i=0;i<$('#showBox img').length;i++){
        data1[i]=$('#showBox img').eq(i).attr('src');
    };
    //创建画布，承载新图
    var c=document.createElement('canvas'),
        ctx=c.getContext('2d'),
        len=data1.length;
    //获取屏幕的宽度
    var  clientWidth = document.documentElement.clientWidth;
//根据设计图中的canvas画布的占比进行设置
    c.width = 1920;
    c.height = 1080;
    ctx.rect(0,0,c.width,c.height);
    ctx.fillStyle='transparent';
    ctx.fill();
    //图片位置不同时
    var canvas1 = $('#myC')[0];
    var canvas2 = $('#textC')[0];
    var img = new Image;
    img.src = $('#showBox img').eq(1).attr('src');;
    ctx.drawImage(canvas1,0,0,1320,1080);
    ctx.drawImage(canvas2,1320,0,600,1080);
    ctx.drawImage(img,0,0,1920,1080);
    convertCanvasToImage(c);
    //多张图片，大小位置都相同时。
    // function drawing(n){
    //     if(n<len){
    //         var img=new Image;
    //         //img.crossOrigin = 'Anonymous'; //解决跨域
    //         img.src=data1[n];
    //         img.onload=function(){
    //             ctx.drawImage(img,0,0,c.width,c.height);
    //             drawing(n+1);//递归
    //         }
    //     }else{
    //         //保存生成作品图片
    //
    //         //Canvas2Image.saveAsJPEG(c); //保存到电脑
    //     }
    // }
    // drawing(0);
}
function convertCanvasToImage(canvas) {
    //转图片
    var hc_image = new Image();
    hc_image.crossOrigin="anonymous";//跨域准备
    hc_image = canvas.toDataURL();
    //hc_image.setAttribute('id',"");
};

function dataURItoBlob (base64Data) {
    //转blob对象
    var byteString;
    if (base64Data.split(',')[0].indexOf('base64') >= 0)
        byteString = atob(base64Data.split(',')[1]);
    else
        byteString = unescape(base64Data.split(',')[1]);
    var mimeString = base64Data.split(',')[0].split(':')[1].split(';')[0];
    var ia = new Uint8Array(byteString.length);
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ia], {type: mimeString});
}