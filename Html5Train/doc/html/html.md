# HTML

## Reference:
- W3School HTML http://www.w3school.com.cn/html/html_lists.asp
- MDN HTML https://developer.mozilla.org/zh-CN/docs/Web/HTML

## `<form>`  表单
- form是一个block标记元素
- form中不能再嵌套

### method 
- name 组件名，对应 接受方的变量。  

- method=get  
传递的数据量被限制为URL的长度2048KB，而且这种方法很不安全  

- method=post  
POST将数据通过HTTP协议传递给处理信息网址，这种方法安全且无数据大小限制，使用广泛   

### `<input type="text"/>`  用户可输入文本的单行输入字段 => android EditText, maxLine = 1
- 定义单行的输入字段，用户可在其中输入文本。默认宽度为 20 个字符。
- http://www.w3school.com.cn/tags/tag_form.asp
- http://www.w3school.com.cn/tags/att_input_type.asp

### `<input type="submit"/>` and ` <button type="submit"</button> ` 提交按钮 => android button + request + jump page click event
- 提交按钮用于向服务器发送表单数据。数据会发送到表单的 action 属性中指定的页面。
- http://www.w3school.com.cn/tags/att_input_type.asp
- http://www.w3school.com.cn/tags/tag_form.asp

### `<input type="reset"/>` and ` <button type="reset"</button> ` 重置按钮 => android button + clear input
- 置按钮会清除表单中的所有数据
- http://www.w3school.com.cn/tags/att_input_type.asp

### `<input type="hidden"/>` 隐藏字段  => android visible="gone"
- 隐藏字段对于用户是不可见的。隐藏字段通常会存储一个默认值，它们的值也可以由 JavaScript 进行修改。

### `<input type="password"` 密码 => android EditTxt inputType="password"

### `<input type="image">` 嵌入的图像  => android ImageButton/ImageView
- 每出现一次，一个 Image 对象就会被创建。

- http://www.w3school.com.cn/tags/att_input_type.asp 
- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/image

### `<input type="file">`
在 HTML 文档中 `<input type="file">` 标签每出现一次，一个 FileUpload 对象就会被创建。

###  `<input type="checkbox">` 多选框 => android CheckBox 

### `<button>` Button  => android Button
-  `<button>`控件 与 `<input type="button">`   
- 请始终为按钮规定 type 属性。Internet Explorer 的默认类型是 "button"，而其他浏览器中（包括 W3C 规范）的默认值是 "submit"。
- 注释：如果在 HTML 表单中使用 button 元素，不同的浏览器会提交不同的按钮值。请使用 input 元素在 HTML 表单中创建按钮。
- 重要事项：如果在 HTML 表单中使用 button 元素，不同的浏览器会提交不同的值。Internet Explorer 将提交`<button>` 与 `<button/>` 之间的文本，而其他浏览器将提交 value 属性的内容。请在 HTML 表单中使用 input 元素来创建按钮。


###  `<label>` => android TextView  
```
<label for="male">Male &nbsp;&nbsp;</label>
```

### `<input type="radio">` 单选框  => android radioButton
When inout type = radio, name == android group name

```
<input type="radio" id="male" name="sex">
```

### `<textarea>` 文本域(Textarea)  
```
 <textarea rows="10" cols="30">
This example cannot be edited,because our editor uses a textarea for input,
            and your browser does not
allow a textarea inside a textarea.
</textarea>
```

### `<fieldset>` 分组 => android ViewGroup + 边框
- 围绕数据的Fieldset
- 对组件进行分组。外面加一个边框，把form一堆标签框起来。 


### `<legend>` 分组的标题 => android ViewGroup 的 tag    
- legend 元素为 fieldset 元素定义标题（caption）。

### `<select>` 单选或多选列表  => android spinner / 类似android radiogroup，但方向不同
- 下拉列表框是一个可选列表.
- 默认选中第一行。

### `<option>`  单选或多选列表的选项 => android spinner item / 类似android radioButton，但方向不同
- `selected`设置默认选中的行。即预选值。   
预选值指预先指定的首选项。   

```
<option value="ok" selected="selected">70 ~ 60</option>
```

## `<optgroup>` ,=> 类似android radiogroup，但方向不同。   
- `<optgroup>` 标签定义选项组 , 用来组合选项.   

---

## `<img>` 添加图片
- 空标记元素 + inline标记元素  
- 
```
<img src=“图片地址”/>
```
- 默认情况下，图片底部与文字底部平齐
- HTML中的图片只显示三中格式GIF、JPE(JPEG)和PNG. 显示其他格式的图片 -> `<a>` 
- 从技术上讲，`<img>` 标签并不会在网页中插入图像，而是从网页上链接图像。`<img> `标签创建的是被引用图像的占位空间。
- longdesc HTML 4 only  
URL 描述要显示图像的URL描述，是对 alt 文本的补充。  
```
<img longdesc="URL">

```
- 通过usemap属性绑定map标记元素

## `<map>` 图片地图  

## `<a>` 链接
-  `<a>` 文字链接  
-  `<a>` + `<img>`图片链接  
- 通过`../`来返回上一级目录
- 链接锚点  
创建锚点：锚点的创建，通过设置元素的id 或 name 属性值即可实现    
`name`属性 HTML 4 only. HTML5 已废弃，使用 全局属性 id 来代替。  
- 通过a标记的target属性，可以设置新网页开启的窗口
- 邮件链接. 点击后，会自动跳转到 Emal app，并弹出界面,让用户操作。  
`<a href="mailto:47613354@qq.com"> 联系拉登 </a>`    


## 特殊字符
- 在 HTML 中，某些字符是预留的。
- 字符实体  
```
&entity_name;

或者

&#entity_number;
```

使用实体名而不是数字的好处是，名称易于记忆。不过坏处是，浏览器也许并不支持所有实体名称（对实体数字的支持却很好）。  

- HTML 中的预留字符必须被替换为字符实体。也就是特殊字符用别的形式表示。  
有些特殊字符与标记字符冲突，在HTML里显示不出来，就要通过下面的转义字符显示:  
```
空格：&nbsp；
&：&amp；
‘：&apos；
<：&lt；
>：&gt；
©：&copy；
®：&reg
等等
```

HTML 常见特殊字符 http://www.w3school.com.cn/html/html_entities.asp    
HTML ISO-8859-1 参考手册 http://www.w3school.com.cn/tags/html_ref_entities.html

## 类元素标识符
- 要获得div和span的引用，要通过标识符，即id和class
- id,是指某一个实例
- class(类)，的是一类对象
- 基本上所有的标记元素都有id和class属性，但是这个两个属性对下面的标记不适用：   
base、basefont、head、html、meta、param、script、style、title     

## `AS3`?  
ActionScript 通常简称为AS，它是Flash 平台的语言。AS编写的程序，最终可以编译成SWF、SWC。SWF 就是我们常说的Flash 动画。但是现在SWF 已经不仅仅是动画，而是RIA 的载体。ActionScript 有3个版本，分别是1.0版（AS1），2.0版（AS2）和3.0版（AS3）。只有Flash Player 9及以上播放器才支持AS3编译的SWF。这三个版本的差别非常大，现在最流行的版本是AS3。   
所以as3程序员就是指做flash开发的 而不是flash设计  


## `<span>` 被用来组合文档中的行内元素。
- 使用 `<span>` 来组合行内元素，以便通过样式来格式化它们。
- 它是inline标记元素，和其他的inline元素一样，它只能包含inline标记元素。

## `<div>` 分块
- HTML中有两个顶级类标记:`<div>`和`<span>`：  
`<div>` 和`<span>`都没有预设的格式。 => 加上div 和 span 前后，文本变现没有任何差异。        
通过它们的id或class属性结合CSS进行定制。  

- 一种block标记元素，他可以定义一个元素，也可以用来给HTML网页分块
- `<div>` 可定义文档中的分区或节（division/section）。 也就是分块。
- `<div>` 标签可以把文档分割为独立的、不同的部分。它可以用作严格的组织工具，并且不使用任何格式与其关联。   

- 可以对同一个 `<div>` 元素应用 `class` 或 `id` 属性，但是更常见的情况是只应用其中一种。这两者的主要差异是，`class` 用于元素组（类似的元素，或者可以理解为某一类元素），而 `id` 用于标识单独的唯一的元素。


## `<sup>` 上标。
- 定义上标文本。
- 改变文本的位置会改变含义。
- 不能用于样式上的目的。这时应该使用 CSS样式： `vertical-align` 属性的 `super` 值能实现相同效果。

## `<sub>` 下标。
- 定义下标文本。
- 改变文本的位置会改变含义。
- 不能用于样式上的目的。这时应该使用 CSS样式： `vertical-align` 属性的 `sub` 值能实现相同效果。

## `<s>` 不再相关，或者不再准确
- 使用 `<s>` 元素来表示不再相关，或者不再准确的事情

## `del>` 删除
- 定义文档中已被删除的文本。
- 使用删除线来渲染文本
- 请与 `<ins>` 一同使用，来描述文档中的更新和修正。
- `<strike>`（已废弃） 元素， `<s>`（已废弃）元素， `text-decoration:line-through` 属性， 效果同`del>`。

## `<ins>` 插入
- 定义已经被插入文档中的文本
- 带有下划线
- HTML `<s>` 元素 使用删除线来渲染文本。使用 `<s>` 元素来表示不再相关，或者不再准确的事情。但是当表示文档编辑时，不提倡使用 `<s>` ；为此，提倡使用 `<del>` 和 `<ins>` 元素。
- 请与 `<del>` 一同使用，来描述文档中的更新和修正。

## `<kbd>` 键盘输入
- 它表示文本是从键盘上键入的。它经常用在与计算机相关的文档或手册中。
- HTML键盘输入元素(`<kbd>`) 用于表示用户输入，它将产生一个行内元素，以浏览器的默认monospace字体显示。
- 通过定义CSS规则可以改变kbd的默认字体。用户首选项设置可能会比该CSS规则具有更高优先级。

## `<samp>` 标识计算机程序输出
- 通常使用浏览器缺省的 monotype 字体（例如 Lucida Console）。
- 可以使用 CSS 选择器 samp 定义规则来覆盖浏览器的缺省字体。不过，用户设置的偏好可能会优先于指定的 CSS 使用。

## small  小一号字体
- 每个 `<small>` 标签都把文本的字体变小一号，直到达到下限的一号字。
- HTML 中的`<small>`元素將使文本的字体变小一号.
- `<small>` =  CSS `font-size:1.2em`

## big 大一号字体
- The HTML Big Element (`<big>`) 会使字体加大一号（例如从小号(small)到中号(medium)，从大号(large)到加大(x-large)），最大不超过浏览器的最大字体。
- 每一个 `<big>` 标签都可以使字体大一号，直到上限 7 号文本
- depressed .替代方案是使用 `CSS font-size:1.2em` 属性来。

## `<b>` 粗体
- HTML提醒注意（Bring Attention To）元素 / 粗体（Boldface）元素 / 粗体
- 你不应将 `<b>` 元素用于显示粗体文字；替代方案是使用 CSS `font-weight` 属性来创建粗体文字。

## i 斜体

## tt 等宽字体
- 类似打字机或者等宽的文本效果
- 这个元素已废弃。使用更加适当的元素，例如带有 CSS 的 `<code>` 或者 `<span>` 来代替。


## var 定义变量
- 斜体
- 表示变量的名称，或者由用户提供的值。
- 显示算机编程代码范例，可以用 `<code>` ,`var`,`<pre>` ，`<tt>(depressed)`标签

## code 定义计算机代码文本。
- HTML <code> 元素呈现一段计算机代码. 默认情况下, 它以浏览器的默认等宽字体显示.
- CSS 规则可以覆盖浏览器默认的 code 标签字体样式. 但用户设置的浏览器字体选项可能会超过 CSS 的优先级, 使之无效.

## dfn 定义特殊术语,词或者网页流行词
- `<dfn>` 还可能有助于创建文档的索引或术语表
- `<dfn>` 标签尽量少用为妙

## cite 参考文献引用
- cite = Citation
- 按照惯例，引用的文本将以斜体显示。
- 它可以使你或者其他人从文档中自动摘录参考书目。 也就是：方便搜索引擎或其他平台的查询或现实。   

## acronym 首字母缩写
- [Depressed]acronym = Acronym
- by the way => BTW
- HTML5 中不支持 `<acronym>` 标签。请使用 `<abbr>` 标签代替。    
HTML5 中不支持 `<acronym>` 标签，但是在 HTML 4.01 中支持。  

## `<abbr> 缩写 => 单词的缩写
- please -> pls

## HTML5 i 强调文本 - 斜体
- HTML5 i = em
- - = italic = 斜体字

## em 强调文本 - 斜体
- 不要滥用强调

## strong 强调文本 - 加粗

## br 换行
- `<br/>`

## address 地址 
- 强调标记内容是地址，但是不是所有的地址都可以用它，比如Email地址

## pre 预格式化
- `<pre>`标记可以为我保留这个空格，完全按照我们输入的结果显示
- `<pre>` 标签的一个常见应用就是用来表示计算机的源代码。

## blockquote 长引用
- 浏览器通常会对 blockquote 元素进行缩进处理。
- `cite` 属性规定引用的来源。 主流浏览器均不支持 cite 属性。不过，搜索引擎可能会使用该属性获得更多有关引用的信息。  

## `<q>` 短的引用
- 浏览器通常会在 q 元素周围包围引号（“引用文字“）。

## `<br/>`
- `<br/>` 元素是一个空的 HTML 元素。由于关闭标签没有任何意义，因此它没有结束标签。
- `<br>` 还是 `<br />`?    
在 XHTML、XML 以及未来的 HTML 版本中，不允许使用没有结束标签（闭合标签）的 HTML 元素。   
即使 `<br>` 在所有浏览器中的显示都没有问题，使用 `<br />` 也是更长远的保障。  

## P 段落
- `<p></p>`标记中可以包含文字、图片及其他的inline标记，但是不能有block标记包括其他的p标记
- 使用空的段落标记 `<p></p>` 去插入一个空行是个坏习惯。用 `<br />` 标签代替它
- 浏览器忽略了源代码中的排版（省略了多余的空格和换行）。    
对于 HTML，您无法通过在 HTML 代码中添加额外的空格或换行来改变输出的效果。    
当显示页面时，浏览器会移除源代码中多余的空格和空行。所有连续的空格或空行都会被算作一个空格。需要注意的是，HTML 代码中的所有连续的空行（换行）也被显示为一空格。  

## 自定义列表 dl  
- dl = definition lists = 自定义列表  
- dt = definition term = 自定义列表组(序号)  
- dd = definition description = 自定义列表描述  
- dl中只能包含dt和dd两种标记，而且dt中不能包含block标记，但是dd可以包含。  


## 无序列表 ul
- ul = unordered lists = 无序列表
- li = list item  
- ul type="disc/circle/square"

## 有序列表 ol
- ol = unordered lists = 有序列表
- li = list item  

## H1`H6
- 只有h1到 h6
- h7就是 p

## HTML标记三种类型   
块元素 Block、 行内元素 inline、empty是HTML标记三种类型  
- Inline是指可以在语句内不会换行的标记。 可以嵌套在 block 标记中。
- block ：自动添加换行。  

Empty 标记元素：  
```
<br/>
```
### Block？
p  

### inline

### Empty标记 有哪些？  
1. `<br/>`

## HTML  
严格意义上HTML算不上是一种编程语言，而是一种标记语言.
