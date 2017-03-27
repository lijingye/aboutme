/**
 * Created by hxsd on 2017/1/17.
 */
window.onload=function(){
	//左侧菜单展开----------------------------------------------------------------------------------
	(function(){
    var oUl=document.getElementById("list");
    var aLi=oUl.getElementsByTagName("li");
    var popup=document.getElementsByClassName("popup")[0];
    var aSection=popup.getElementsByClassName("section");
    var timer;
    //遍历ul下所有的li 增加ac类名
    function run(){
        for(var i=0;i<aLi.length;i++){
            aLi[i].className="";
        }
    }
    //鼠标移入当前li变为红色，同时对应子菜单出现
    for(var i=0;i<aLi.length;i++){
        aLi[i].onmouseenter=function(){
            clearTimeout(timer)
            run();
            this.className="ac";
            popup.style.display="block";
            var show_id=this.getAttribute("data-index");
            for(var j=0;j<aSection.length;j++){
                aSection[j].style.display="none";
            }
            document.getElementById("cate_item"+show_id).style.display="block";

        }
        aLi[i].onmouseleave=function(){
            clearTimeout(timer)
            timer=setTimeout(function(){
                popup.style.display="none";
                run();
            },100)
        }
    };
    popup.onmouseenter=function(){
        clearTimeout(timer);
        this.style.display="block";
    };
    popup.onmouseleave=function(){
        this.style.display="none";
        run();
    };})();
	/*	轮播图-------------------------------------------------------------------------
  (1) 图片数量是固定的;-- 按钮的个数自动生成;

      aLi.length; 图片的个数;

      循环--- html+="<li>"+i+"</li>"; ol.innerHTML=html; ol.className="sub";
*/
	(function(){
var obanner=document.getElementById("banner");
var oUl=obanner.getElementsByTagName("ul")[0];
var aLi=oUl.getElementsByTagName("li");
var oOl=obanner.getElementsByTagName("ol")[0];
var aBtn=oOl.getElementsByTagName("li");
var html="";
var timer;
var num=0;//实参
var oPrevBtn=document.getElementsByClassName("prevBtn")[0]
var oNextBtn=document.getElementsByClassName("nextBtn")[0]
for(var i=1;i<=aLi.length;i++){
	html+="<li>"+i+"</li>";
	oOl.innerHTML=html;
	//oOl.className="sub";
}
aBtn[0].className="ac";
	for(var j=0;j<aLi.length;j++){
		aBtn[j].index=j;
		aBtn[j].onclick=function(){
			
			// 关掉所有的li，打开当前li
			setTab(this.index);
			num=this.index;
		}
	};

//（2）按钮和图片可以自动切换;  按钮和图片同步显示;
function setTab(n){
		// 首先隐藏所有的li;
		for(var i=0;i<aLi.length;i++){
			aBtn[i].className="";
			aLi[i].className="hide";
		}
		
		// 打开指定的li
		aBtn[n].className="ac";
		aLi[n].className="";
	}
//图片自动播放、
	function start(){
	   
		timer=setInterval(function(){
			setTab(num);
			num++;
			if(num==aLi.length){num=0}
			
		},1000);	
	}
	start();
	oUl.onmouseover=function(){
	    clearInterval(timer);	
	}
	oUl.onmouseout=function(){
		clearInterval(timer);
		start();
		
		
	}
//(5) 点击左右的按钮，可以切换图片和按钮
oPrevBtn.onclick=function(){
	clearInterval(timer);
	setTab(num);
	num--;
	if(num<=0){num=aLi.length;};
	
}
oNextBtn.onclick=function(){
	clearInterval(timer);
	setTab(num);
	num++;
	if(num==aLi.length){num=0;};
	
};})()
//选项卡------------------------------------------------------------------------------------------------------
	(function(){
	var oUl=document.getElementsByClassName("nav")[0];
	var aLi=oUl.getElementsByTagName("li");
	var change=document.getElementsByClassName("change")[0];
	var li=change.getElementsByClassName("change_con");


	//循环给所有li做点击事件
	for(var i=0;i<aLi.length;i++){
		aLi[i].index=i;  //aLi[0].index=0;
		aLi[i].onmouseover=function(){
			setTab(this.index);
		};
		aLi[i].onmouseout=function(){
			this.className="active";
		}
	}
	//定义函数。显示指定li隐藏其他li
	function setTab(n){
		for(var i=0;i<aLi.length;i++){
			//隐藏所有li
			aLi[i].className="";
			li[i].style.display='none';

		}
		//指定的li取消隐藏
		aLi[n].className="active";
		li[n].style.display='block';
	}


}())

}