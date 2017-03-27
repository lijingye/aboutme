/**
 * Created by hxsd on 2017/1/19.
 */
    window.onload=function(){
//放大镜---------------------------------------------------------------------------------------
        var bannerBox=document.getElementById('banner_box');
        var mirrorBox=document.getElementById("mir");
        var oSpan=bannerBox.getElementsByTagName('span')[0];
        var bigImg=mirrorBox.getElementsByTagName("img")[0];
        var bannerImg=document.getElementById('bannerImg');


        bannerBox.onmousemove=function(ev){
            ev=ev || window.event;
            var scrollTop=document.documentElement.scrollTop || document.body.scrollTop;//滚动条高度
            var scrollLeft=document.documentElement.scrollLeft || document.body.scrollLeft;//滚动条高度
            mirrorBox.style.display=oSpan.style.display="block";//当鼠标移到bannerBox时让放大镜显示
            //找到到ospan坐标
            var l=ev.clientX+scrollLeft-hxsd_tools.offsetLeft(bannerBox)-oSpan.offsetWidth/2;
            var t=ev.clientY+scrollTop-hxsd_tools.offsetTop(bannerBox)-oSpan.offsetHeight/2;
            //限制ospan的移动范围
            if(l<0){l=0};
            if(t<0){t=0};
            if(l>bannerBox.offsetWidth-oSpan.offsetWidth){l=bannerBox.offsetWidth-oSpan.offsetWidth};
            if(t>bannerBox.offsetHeight-oSpan.offsetHeight){t=bannerBox.offsetHeight-oSpan.offsetHeight};
            //计算移动的比率
            var rate_l=l/(bannerBox.offsetWidth-oSpan.offsetWidth);
            var rate_t=t/(bannerBox.offsetHeight-oSpan.offsetHeight);
            //移动oSpan
            oSpan.style.left=l+'px';
            oSpan.style.top=t+'px';
            //移动img
            bigImg.style.left=-rate_l*(bigImg.offsetWidth-mirrorBox.offsetWidth)+'px';
            bigImg.style.top=-rate_t*(bigImg.offsetHeight-mirrorBox.offsetHeight)+'px';
        };
        bannerBox.onmouseout=function(){
            mirrorBox.style.display=oSpan.style.display="none";//当鼠标移开bannerBox时让放大镜隐藏
        };

        //鼠标划过图片列表时，选择鼠标指定的li，并根据更新banner和mirror中的图
        var bannerImg_arr=["b57d0c55bNa8230260","b57d0c55cNa20597da","b57d0c55cNeb17a9b8","b57d0c55cN7cc6a427","b57d0c55cN02377681"];
        var bigImg_arr=["m57d0c55bNa8230260","m57d0c55cNa20597da","m57d0c55cNeb17a9b8","m57d0c55cN7cc6a427","m57d0c55cN02377681"];
        //找到到图片列表中的每一个li
        var picItems=document.getElementById('picItems');
        var aLi=picItems.getElementsByTagName('li');
        for( var i=0; i<aLi.length; i++){
            aLi[i].index=i;//发牌照
            //鼠标划过每一个li时切换ac
            aLi[i].onmousemove=function(){
                //清空所有li的ac  banner和mirror中的图片
                for( var j=0; j<aLi.length; j++){
                    aLi[j].className="";
                    bannerImg.src="images/"+""+".jpg"
                    bigImg.src="images/"+""+".jpg"
                };
                this.className="ac";
                bannerImg.src="images/"+bannerImg_arr[this.index]+".jpg"
                bigImg.src="images/"+bigImg_arr[this.index]+".jpg"
            };
        };

//choose部分的-----------------------------------------------------------
        var chooseShop=document.getElementById("chooseShop");
        var aDl=chooseShop.getElementsByTagName('dl');
        //找到每一个dl中的dd
        for( var m=0; m<aDl.length; m++){
            //鼠标划过对应的dl中的dd
            aDl[m].onmouseover=function(){
                var oDd=this.getElementsByTagName('dd')[0];
                var aA=oDd.getElementsByTagName('a');
                //鼠标划过每一个dd加上ac
                for( var n=0; n<aA.length; n++){
                    aA[n].onclick=function(){
                        for( var q=0; q<aA.length; q++){
                            aA[q].className="";
                        };
                        this.className="ac";
                    };
                };
            };
        };

//购物车数量-----------------------------------
        //找到按钮
        var addBtn=document.getElementById('addBtn');
        var redBtn=document.getElementById('redBtn');
        var numberBtn=document.getElementById('numberBtn');
        //点击addbtn增加value值
        addBtn.onclick=function(){
            numberBtn.value++;
        };
        redBtn.onclick=function(){
            numberBtn.value--;
            if(numberBtn.value<=1){
                numberBtn.value=1;
            };
        };


//----------产品推荐  选项卡-----------
        var navList=document.getElementById("navList");
        var aLiNav=navList.getElementsByTagName('li');
        var midWarp=document.getElementById("midWarp");
        var aMidInner=midWarp.getElementsByClassName("mid_inner");
        //点击每一个li切换ac
        for( var k=0; k<aLiNav.length; k++){
            aLiNav[k].index=k;
            aLiNav[k].onclick=function(){
                for( var K=0; K<aLiNav.length; K++){
                    aLiNav[K].className="";
                    aMidInner[K].className="mid_inner hide";
                };
                this.className="ac";
                aMidInner[this.index].className="mid_inner";
            };
        };

//------------选项卡-------------
        var midList=[
         {
         "className":"mid_inner",
         "cont":[
         {
         "pic":"57d2df44Na377ce98",
         "text":"插画师(亿色) iPhone7/6s/6钢化膜 苹果7/6/6s抗蓝光钢化玻璃膜 手机高清屏幕保护贴膜(送贴膜神器)",
         "number":18.90
         },
         {
         "pic":"57d2df44Na377ce98",
         "text":"插画师(亿色) iPhone7/6s/6钢化膜 苹果7/6/6s抗蓝光钢化玻璃膜 手机高清屏幕保护贴膜(送贴膜神器)",
         "number":18.90
         },
         {
         "pic":"57d2df44Na377ce98",
         "text":"插画师(亿色) iPhone7/6s/6钢化膜 苹果7/6/6s抗蓝光钢化玻璃膜 手机高清屏幕保护贴膜(送贴膜神器)",
         "number":18.90
         },
         {
         "pic":"57d2df44Na377ce98",
         "text":"插画师(亿色) iPhone7/6s/6钢化膜 苹果7/6/6s抗蓝光钢化玻璃膜 手机高清屏幕保护贴膜(送贴膜神器)",
         "number":18.90
         },
         {
         "pic":"57d2df44Na377ce98",
         "text":"插画师(亿色) iPhone7/6s/6钢化膜 苹果7/6/6s抗蓝光钢化玻璃膜 手机高清屏幕保护贴膜(送贴膜神器)",
         "number":18.90
         },
         {
         "pic":"57d2df44Na377ce98",
         "text":"插画师(亿色) iPhone7/6s/6钢化膜 苹果7/6/6s抗蓝光钢化玻璃膜 手机高清屏幕保护贴膜(送贴膜神器)",
         "number":18.90
         }
         ]
         },
         {
         "className":"mid_inner",
         "cont":[
         {
         "pic":"57d2df44Na377ce98",
         "text":"插画师(亿色) iPhone7/6s/6钢化膜 苹果7/6/6s抗蓝光钢化玻璃膜 手机高清屏幕保护贴膜(送贴膜神器)",
         "number":18.90
         },
         {
         "pic":"57d2df44Na377ce98",
         "text":"插画师(亿色) iPhone7/6s/6钢化膜 苹果7/6/6s抗蓝光钢化玻璃膜 手机高清屏幕保护贴膜(送贴膜神器)",
         "number":18.90
         },
         {
         "pic":"57d2df44Na377ce98",
         "text":"插画师(亿色) iPhone7/6s/6钢化膜 苹果7/6/6s抗蓝光钢化玻璃膜 手机高清屏幕保护贴膜(送贴膜神器)",
         "number":18.90
         },
         {
         "pic":"57d2df44Na377ce98",
         "text":"插画师(亿色) iPhone7/6s/6钢化膜 苹果7/6/6s抗蓝光钢化玻璃膜 手机高清屏幕保护贴膜(送贴膜神器)",
         "number":18.90
         },
         {
         "pic":"57d2df44Na377ce98",
         "text":"插画师(亿色) iPhone7/6s/6钢化膜 苹果7/6/6s抗蓝光钢化玻璃膜 手机高清屏幕保护贴膜(送贴膜神器)",
         "number":18.90
         },
         {
         "pic":"57d2df44Na377ce98",
         "text":"插画师(亿色) iPhone7/6s/6钢化膜 苹果7/6/6s抗蓝光钢化玻璃膜 手机高清屏幕保护贴膜(送贴膜神器)",
         "number":18.90
         }
         ]
         },
         ];
         var oMidWarp=document.getElementById('midWarp');
         var html='';
         for( x=0; x<midList.length; x++){
         html+='<div class="'+midList[x].className+'" id="box">'+
         '<ul class="clearfix" id="productList">';
         for( y=0; y<cont.length; y++){
         html+='<li>'+
         '<div class="pic"><a href="javascript:;"><img src="images/'+midList[x].cont[y].pic+'.jpg"></a></div>'+
         '<p><a href="javascript">'+midList[x].cont[y].text+'</a></p>'+
         '<form>'+
         '<input type="checkbox">¥'+midList[x].cont[y].number+
         '</form>'+
         '</li>';
         };
         html+='</ul>'+
         '</div>';
         };
         oMidWarp.innerHTML=html;



//--------mid 切换图片 --------------

        var productList=document.getElementById('productList');
        var aProduct=productList.children;
        var li_w=hxsd_tools.getStyle(aProduct[0],"width")+hxsd_tools.getStyle(aProduct[0],"marginRight");
        var oBox=document.getElementById('box');
        productList.style.width=li_w*aProduct.length+'px';
        var pBtn=document.getElementById('arrowPrev');
        var nBtn=document.getElementById('arrowNext');
        var iNow=0;

        //点击pbtn
        pBtn.onclick=function(){
            iNow--;
            if(iNow<0){
                iNow=0;
            };
            hxsd_tools.move(productList,{"left":-iNow*li_w})
        };
        nBtn.onclick=function(){
            iNow++;
            if(iNow>=(productList.offsetWidth-oBox.offsetWidth)/li_w){
                iNow=(productList.offsetWidth-oBox.offsetWidth)/li_w;
            };
            hxsd_tools.move(productList,{"left":-iNow*li_w});

        };





    }

