# 选择器
## 元素选择器
```
$("p") 选取 <p> 元素。

$("p.intro") 选取所有 class="intro" 的 <p> 元素。

$("p#demo") 选取所有 id="demo" 的 <p> 元素。
```
## 属性选择器
```
$("[href]") 选取所有带有 href 属性的元素。

$("[href='#']") 选取所有带有 href 值等于 "#" 的元素。

$("[href!='#']") 选取所有带有 href 值不等于 "#" 的元素。

$("[href$='.jpg']") 选取所有 href 值以 ".jpg" 结尾的元素。
```
##css选择器
```
$("p").css("background-color","red"); 选取所有p元素的背景颜色更改为红色。
```
# JQ事件

方法 | 说明
---|---
bind() | 绑定方法到制定元素
blur() | 失去焦点
focus() | 获得焦点
keypress() |点击一下按键（相当于keydown()与keyup()）
keydown() | 按下按键
keyup() | 松开按键
change() | 发生改变
click() | 单机鼠标
dblclick() | 双击鼠标

[其余常用的参考](http://www.w3school.com.cn/jquery/jquery_ref_events.asp/)

# DOM操作
[文档操作](http://www.w3school.com.cn/jquery/jquery_ref_manipulation.asp)

[属性操作](http://www.w3school.com.cn/jquery/jquery_ref_attributes.asp)

[css操作](http://www.w3school.com.cn/jquery/jquery_ref_css.asp)