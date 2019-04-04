# JAVASCRIPT

## JS HTML DOM

### DOM HTML 改变 HTML 
HTML DOM 允许 JavaScript 改变 HTML 元素的内容。

1. 改变 HTML 输出流  
绝不要使用在文档加载之后使用 document.write()。这会覆盖该文档。  

2. 改变 HTML 内容
`document.getElementById(id).innerHTML=new HTML`

3. 改变 HTML 属性
`document.getElementById(id).attribute=new value`

- http://www.w3school.com.cn/js/js_htmldom_html.asp

---

### DOM CSS 改变 CSS
HTML DOM 允许 JavaScript 改变 HTML 元素的样式。  

1. 改变 HTML 样式
`document.getElementById(id).style.property=new style`

- 

## HTML DOM （文档对象模型）

### DOM
- 当网页被加载时，浏览器会创建页面的文档对象模型（Document Object Model）.

![1](https://yingvickycao.github.io/img/js/dom.png)

- HTML DOM 模型被构造为对象的树。

### 浏览器将这些系统对象组织成一个层次结构.

![1](https://yingvickycao.github.io/img/js/dom2.png)  

- Window, 对应于一个显示文档的窗口, 这个层次结构的根 
- Location, 对应于当前URL.
- History, 对应于用户曾经访问过的URL.
-  Document, 对应所加载的文档.

- http://www.w3school.com.cn/js/js_htmldom.asp

### window对象: 从浏览器程序的角度来看它
- 网页中的JavaScript就是在这个对象的环境中执行的, 可以引用这个对象的变量, 调用函数等 . 
#### `setTimeout`
#### `clearTimeout`


## `Date`
- 月以0开始

## JavaScript事件的分类
- 与整个网页有关的事件（Load, Unload, Focus, Blur)
- 与超链有关的事件（Click, MouseOver, MouseOut)
- 与表格（FORM）及其元素有关的事件
- 与图像（IMAGE）有关的事件（Load, Abort, Error)
- 定时事件（“timeout”）

### JavaScript HTML DOM 事件
HTML DOM 使 JavaScript 有能力对 HTML 事件做出反应。


### `onload` 和 `onunload` 事件  
- onload 和 onunload 事件会在用户进入或离开页面时被触发。  
- onload 事件可用于检测访问者的浏览器类型和浏览器版本，并基于这些信息来加载网页的正确版本。  
- onload 和 onunload 事件可用于处理 cookie。  

- http://www.w3school.com.cn/js/js_htmldom_events.asp

---

### `onchange()`  
- onchange 事件常结合对输入字段的验证来使用。
- 当离开输入字段时? 怎么样。

- http://www.w3school.com.cn/js/js_htmldom_events.asp

--- 

### `onmouseover` 和 `onmouseout` 事件
`onmouseover` 和 `onmouseout` 事件可用于在用户的鼠标移至 HTML 元素上方或移出元素时触发函数。

- http://www.w3school.com.cn/js/js_htmldom_events.asp
- http://www.w3school.com.cn/jsref/dom_obj_event.asp

---

### `onmousedown`、`onmouseup` 以及 `onclick` 事件
- onmousedown, onmouseup 以及 onclick 构成了鼠标点击事件的所有部分。
- 首先当点击鼠标按钮时，会触发 onmousedown 事件，当释放鼠标按钮时，会触发 onmouseup 事件，最后，当完成鼠标点击时，会触发 onclick 事件。   

- http://www.w3school.com.cn/js/js_htmldom_events.asp
- http://www.w3school.com.cn/jsref/dom_obj_event.asp

## 事件(event)及其处理
- 事件: 用户对网页的一些特定"操作"(这些操作通常直接对应鼠标的动作)

## 类型转换
- document.write将所有类型均转换为字符串型输出

### 转换成数值型可显示转换
`eval()` 计算某个字符串，并执行其中的的 JavaScript 代码。

--- 

### 转换为String(字符串)自动完成

## 变量声明及类型
- 当您向变量分配文本值时，应该用双引号或单引号包围这个值。
- 当您向变量赋的值是数值时，不要使用引号。如果您用引号包围数值，该值会被作为文本来处理。
- Value = undefined  
在计算机程序中，经常会声明无值的变量。未使用值来声明的变量，其值实际上是 undefined。
- 重新声明 JavaScript 变量 
如果重新声明 JavaScript 变量，该变量的值不会丢失：
- 变量类型随所存信息不同可发生改变

- JavaScript 数字  
JavaScript 只有一种数字类型。数字可以带小数点，也可以不带：

- Undefined 和 Null  
Undefined:表示变量不含有值。  
null:通过将变量的值设置为 null 来清空变量。

- JavaScript 变量均为对象。当您声明一个变量时，就创建了一个新的对象。

- http://www.w3school.com.cn/js/js_variables.asp
- http://www.w3school.com.cn/js/js_datatypes.asp

---

## 对象
- MCMA内核，客户端扩展（DOM文档对象模型），服务器端扩展

## 对象属性和方法
属性表示对象的状态  
方法表示对象的行为  

## 对话框和消息框
### `alert()` 消息输出对话框

---

### `prompt()`信息输入对话框 
- http://www.w3school.com.cn/jsref/met_win_prompt.asp
- http://www.w3school.com.cn/jsref/dom_obj_window.asp

---

### `confirm()` 确认消息对话框
- http://www.w3school.com.cn/jsref/met_win_confirm.asp
- http://www.w3school.com.cn/jsref/dom_obj_window.asp

---

## JavaScript 注释
```
// 第1种注释方式

/*
第2种注释方式
*/
```
---

## JavaScript 语句
- 分号用于分隔 JavaScript 语句。但是在 JavaScript 中，用分号来结束语句是可选的。
- JavaScript 代码（或者只有 JavaScript）是 JavaScript 语句的序列。
浏览器会按照编写顺序来执行每条语句。  
- JavaScript 对大小写是敏感的。
- JavaScript 是脚本语言。浏览器会在读取代码时，逐行地执行脚本代码。而对于传统编程来说，会在执行前对所有代码进行编译。

## JavaScript 使用
- HTML 中的脚本必须位于 `<script>` 与 `</script>` 标签之间。  
- 脚本可位于 HTML 的 `<body>` 或 `<head>` 部分中，或者同时存在于两个部分中。
通常的做法是把函数放入 `<head>` 部分中，或者放在页面底部。这样就可以把它们安置到同一处位置，不会干扰页面的内容。

=> `<head> 或 <body> 中的 JavaScript`

- http://www.w3school.com.cn/js/js_howto.asp

---

## JS主要能力
```
控制文档的内容和表现
控制浏览器的行为
和文档的内容相互作用
和用户交互
在客户方读写cookie 
对图像进行操作

```
---

## JS 无能为力之处:

```
图形 (对比Java有很强的图形能力)   
读写客户方文件 (和Java applet一样)   
网络 (对比Java applet可以和发出它的服务器连接)，除了可以引起浏览器去读一个URL外 
多线程 (Java支持多线程) => JS 只有一个线程。  
```


## JavaScript 的工作方式
- 源程序直接嵌入HTML文档中
- 浏览器解释执行

## JavaScript 使用

--- 

## JavaScript 所带来的好处：  
- 分担服务器的部分工作
- 减轻对网络的压力
- 改善与用户交互作用的质量

-- 

## JavaScript是脚本语言
- Python也是一种脚本语言。    
- JavaScript是跨平台，能用于客户端及服务器端的语言。    
- JavaScript！=Java