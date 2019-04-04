# CSS

## CSS 框模型 (Box Model)
盒模型包含(外补丁)margin，(背景颜色)background-color，(背景图片)background-image，(内补丁) padding ，(内容)content，(边框)border。  

CSS 框模型概述   
![盒模型](http://www.w3school.com.cn/i/ct_boxmodel.gif)
- 元素框的最内部分是实际的内容，直接包围内容的是内边距。  
- 内边距呈现了元素的背景。  
- 内边距的边缘是边框。  
- 边框以外是外边距。  
- 外边距默认是透明的，因此不会遮挡其后的任何元素。   
- 在 CSS 中，width 和 height 指的是内容区域的宽度和高度。   
- 增加内边距、边框和外边距不会影响内容区域的尺寸，但是会增加元素框的总尺寸。  

- 外边距可以是负值，而且在很多情况下都要使用负值的外边距。
- 内边距、边框和外边距可以应用于一个元素的所有边，也可以应用于单独的边。

假设框的每个边上有 10 个像素的外边距和 5 个像素的内边距。如果希望这个元素框达到 100 个像素，就需要将内容的宽度设置为 70 像素，请看下图：  
![box sample](http://www.w3school.com.cn/i/ct_css_boxmodel_example.gif)      

- 背景应用于由内容和内边距、边框组成的区域。=> `android:background`
Chrome inspect时，“80 * 80”, 80 就是背景.  s    

- 根据 W3C 的规范，元素内容占据的空间是由 width 属性设置的，而内容周围的 padding 和 border 值是另外计算的。
- 边框内的空白是内边距，边框外的空白是外边距
- http://www.w3school.com.cn/css/css_boxmodel.asp

## CSS 单位
- http://www.w3school.com.cn/cssref/css_units.asp

### 长度
- px 相对长度单位。像素（Pixel）  
像素是相对于显示器屏幕分辨率而言的。譬如，WONDOWS的用户所使用的分辨率一般是96像素/英寸。而MAC的用户所使用的分辨率一般是72像素/英寸。  
- em 相对长度单位
- cm
- mm
- in
- pt 绝对长度单位。点（Point）
`1in = 2.54cm = 25.4 mm = 72pt = 6pc`

---

### 颜色  
- `rgb ( R , G , B )`
- 十六进制 `#RRGGBB`
- Color Name

---

## 伪类
```
selector : pseudo-class {property: value}

```

```
selector.class : pseudo-class {property: value}

```

### 锚伪类 => NO
```
a:link {color: #FF0000}		/* 未访问的链接 */
a:visited {color: #00FF00}	/* 已访问的链接 */
a:hover {color: #FF00FF}	/* 鼠标移动到链接上 */
a:active {color: #0000FF}	/* 选定的链接 */

```
- QA：多次调试时，发现，link颜色无效，总是显示visited颜色？
记忆Cookies的原因，所有访问过的的超链接都被自动采用a:visited里的颜色。   
如果在html.html中加上一个新的超链接则就会显示为红色。  
或者清楚缓存后，再次调试，则会显示红色。  

- 在 CSS 定义中，a:hover 必须被置于 a:link 和 a:visited 之后，才是有效的。
- 在 CSS 定义中，a:active 必须被置于 a:hover 之后，才是有效的。
- 伪类名称对大小写不敏感。
- http://www.w3school.com.cn/css/css_pseudo_classes.asp


## 选择符
### `*` 通配选择符

## CSS 列表属性（List）
### `list-style-type` 设置列表项标记的类型。 => android listview item 开头的图标
- http://www.w3school.com.cn/cssref/pr_list-style-type.asp
- http://www.w3school.com.cn/cssref/index.asp

## CSS 边框属性（Border 和 Outline）

### `border-width` 设置四条边框的宽度。 => `android:backgrpund=xml drawable `   
- http://www.w3school.com.cn/cssref/pr_border-width.asp
- http://www.w3school.com.cn/cssref/index.asp

---

### `border-color` 设置四条边框的颜色 => `android:backgrpund=xml drawable `  
- `border-color`的值复制规则 = `margin` 的值复制规则
- http://www.w3school.com.cn/cssref/pr_border-color.asp
- http://www.w3school.com.cn/cssref/index.asp

---

### `border-style` 设置四条边框的样式。 => `android:backgrpund=xml drawable `  
- http://www.w3school.com.cn/cssref/pr_border-style.asp  
- http://www.w3school.com.cn/cssref/index.asp  

## CSS 尺寸属性（Dimension）

---

### `height` 设置元素的高度 => `android:height`
- 对于 img 对象来说，仅指定此属性，其 width 值将根据图片源尺寸等比例缩放。  
- 按照样式表的规则，对象的实际高度为其下列属性值之和：  
- 对应的脚本特性为 height 。其值为一字符串，所以不可用于脚本(Scripts)中的计算。  
请使用 style 对象的 posHeight ， pixelHeight ，以及对象的offsetHeight 等特性。

```
margin-top + border-top + padding-top 
+ height 
+ padding-bottom + border-bottom + margin-bottom

```
- http://www.w3school.com.cn/cssref/pr_dim_height.asp
- http://www.w3school.com.cn/cssref/index.asp

## CSS 定位属性（Positioning）

### `visibility` 元素是否可见。=> `android:visble="visible/invisible"`  
- `visibility:hidden`：与 `display：none`属性不同，此属性为隐藏的对象保留其占据的物理空间。
- `visibility:collapse`: 当在表格元素中使用时，此值可删除一行或一列，但是它不会影响表格的布局。被行或列占据的空间会留给其他内容使用。  
如果此值被用在其他的元素上，会呈现为 "hidden"。
- http://www.w3school.com.cn/cssref/pr_class_visibility.asp
- http://www.w3school.com.cn/cssref/index.asp

--- 

### `display` 规定元素应该生成的框的类型。	
- 对于 HTML 等文档类型，如果使用 display 不谨慎会很危险，因为可能违反 HTML 中已经定义的显示层次结构。对于 XML，由于 XML 没有内置的这种层次结构，所有 display 是绝对必要的。
- block：此元素将显示为块级元素，此元素前后会带有换行符。
- none：此元素不会被显示。  
- inline：默认。此元素会被显示为内联元素，元素前后没有换行符。
- none：隐藏对象。=> `android:visble="gone"`
- http://www.w3school.com.cn/cssref/pr_class_display.asp
- http://www.w3school.com.cn/cssref/index.asp

---

### `overflow` 规定当内容溢出元素框时发生的事情。=> NO	
- 如果值为 scroll，不论是否需要，用户代理都会提供一种滚动机制。因此，有可能即使元素框中可以放下所有内容也会出现滚动条。
- visible 默认值。内容不会被修剪，会呈现在元素框之外。     
visible :　默认值。不剪切内容也不添加滚动条。假如显式声明此默认值，对象将以包含对象的 window 或 frame 的尺寸裁切。并且 clip 属性设置将失效  
- auto :　在必需时对象内容才会被裁切或显示滚动条hidden :　不显示超过对象尺寸的内容
- scroll :　总是显示滚动条
- http://www.w3school.com.cn/cssref/pr_pos_overflow.asp
- http://www.w3school.com.cn/cssref/index.asp

---

### `overflow-x`语法 = `overflow`

---

### `overflow-y`语法 = `overflow`

---

### `float` 规定框是否应该浮动。=> NO    
- 浮动对象的 display 属性将被忽略。
- 跟随浮动对象的对象将移动到浮动对象的位置。浮动对象会向左或向右移动直到遇到边框( border 、内补丁( padding 、外补丁( margin 或者另一个块对象( block-level )为止。
- http://www.w3school.com.cn/cssref/pr_class_clear.asp

### `clear` clear 属性规定元素的哪一侧不允许其他浮动元素。=> NO    
- http://www.w3school.com.cn/cssref/pr_class_clear.asp
- https://blog.csdn.net/u014607184/article/details/51820508

--- 

### `top` 设置定位元素的上外边距边界与其包含块上边界之间的偏移。=> NO	  
- 必须定义 position 属性值为 absolute 或者 relative 此取值方可生效。
- 正往下降，负往上升。
- http://www.w3school.com.cn/cssref/pr_pos_top.asp

---

### `z-index` 设置元素的堆叠顺序。=> NO	  	
- 高高在上。   
如两个绝对定位对象的此属性具有同样的 number 值，那么将依据它们在HTML文档中声明的顺序层叠。s
- Z-index 仅能在定位元素上奏效
- 此属性仅仅作用于 position 属性值为 relative 或 absolute 的对象。这个属性不会作用于窗口控件，如 select 对象。  
- http://www.w3school.com.cn/cssref/index.asp

---

### `position` 规定元素的定位类型。=>NO	  
- 任何元素都可以定位
- http://www.w3school.com.cn/cssref/pr_class_position.asp

#### `position: absolute` 绝对位置 => FrameLayout 
- 绝对或固定元素会生成一个块级框，而不论该元素本身是什么类型。  
- 通过绝对定位，元素可以放置到页面上的任何位置。
- 仅仅表示固定某个位置. != 界面滑动，它不动。就像 android 中滑动用 ScrollView。   
- 要激活对象的绝对(absolute)定位，必须指定left，right，top，bottom 属性中的至少一个，并且设置此属性值为 absolute 。  
否则上述属性会使用他们的默认值 auto ，这将导致对象遵从正常的HTML布局规则，在前一个对象之后立即被呈递。   
- 在绝对(absolute)定位对象之后的文本或对象在被定位对象被拖离正常文档流之前会占有它的自然空间。   
- 放置绝对(absolute)定位对象在可视区域之外会导致滚动条出现。

#### `position: relative` 相对位置 => RelativeLayout 
- 相对定位元素会相对于它在正常流中的默认位置偏移。
- `relative` 会保持对象在正常的HTML流中。
- 在相对(relative)定位对象之后的文本或对象占有他们自己的空间而不会覆盖被定位对象的自然空间。
- 放置相对(relative)定位对象在可视区域之外，滚动条不会出现。 

## CSS 背景属性（Background）
### `background-attachment` 设置背景图像是否固定或者随着页面的其余部分滚动。=>NO	  	
- http://www.w3school.com.cn/cssref/pr_background-attachment.asp
- http://www.w3school.com.cn/cssref/index.asp

---

### `background-position-y` 设置或检索对象的背景图像纵坐标位置 => NO   
- 必须先指定 background-image 属性。
- 该属性定位不受对象的补丁属性( padding )设置影响。

---

### `background-position-x` 设置或检索对象的背景图像横坐标位置 => NO 
- 必须先指定 background-image 属性。
- 该属性定位不受对象的补丁属性( padding )设置影响。

---

### `background-position` 设置背景图像的开始位置。 => NO 	
- 必须先指定 background-image 属性。
- 该属性定位不受对象的补丁属性( padding )设置影响。
- http://www.w3school.com.cn/cssref/pr_background-position.asp
- https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-position
- http://www.w3school.com.cn/cssref/index.asp

---

### `background-image` 设置元素的背景图像。 => `android:background/src="@drawable/"` 	
- 默认地，背景图像位于元素的左上角，并在水平和垂直方向上重复。
- 元素的背景占据了元素的全部尺寸，包括内边距和边框，但不包括外边距。
- http://www.w3school.com.cn/cssref/pr_background-image.asp

---

### `background-color` 规定要使用的背景颜色。 => `android:background/src="@color/"` 	 
- `background-color` 属性为元素设置一种纯色。这种颜色会填充元素的内容、内边距和边框区域，扩展到元素边框的外边界（但不包括外边距）。如果边框有透明部分（如虚线边框），会透过这些透明部分显示出背景色。
- `transparent` 背景颜色为透明。
- 当背景颜色与背景图像( background-image )都被设定了时，背景图片将覆盖于背景颜色之上。  

- http://www.w3school.com.cn/cssref/pr_background-color.asp
- http://www.w3school.com.cn/cssref/pr_background.asp

---

### `background`  在一个声明中设置所有的背景属性。 => `android:background` 	
background 简写属性在一个声明中设置所有的背景属性。  
可以设置如下属性：  
- background-color
- background-position
- background-size
- background-repeat
- background-origin
- background-clip
- background-attachment
- background-image
- 通常建议使用这个属性，而不是分别使用单个属性，因为这个属性在较老的浏览器中能够得到更好的支持，而且需要键入的字母也更少。  
```
 body {

            background: #ff0000 url("https://mdn.mozillademos.org/files/11983/starsolid.gif") no-repeat fixed center;
        }
```

- http://www.w3school.com.cn/cssref/pr_background.asp  

## CSS 文本属性（Text）

### `word-wrap` 允许对长的不可分割的单词进行分割并换行到下一行。=> NO	
- http://www.w3school.com.cn/cssref/pr_word-wrap.asp
- http://www.w3school.com.cn/cssref/index.asp

---

### `white-space` 规定如何处理元素中的空白。=> NO	    
- http://www.w3school.com.cn/cssref/pr_text_white-space.asp
- http://www.w3school.com.cn/cssref/index.asp  

---

### `word-break` 规定自动换行的处理方法 => NO  
- http://www.w3school.com.cn/cssref/pr_word-break.asp  
- http://www.w3school.com.cn/cssref/index.asp  

---

### `text-align` 规定文本的水平对齐方式 => `android:grivity`  
- 文本的垂直居中？`height` = `line-height`。  
- http://www.w3school.com.cn/cssref/pr_text_text-align.asp
- http://www.w3school.com.cn/cssref/index.asp

---

### `vertical-align` 元素的垂直对齐方式 => `android:layout_grivity`  
- 允许指定负长度值和负百分比值。这会使元素降低而不是升高
- 在表单元格中，这个属性会设置单元格框中的单元格内容的对齐方式。
- http://www.w3school.com.cn/cssref/pr_pos_vertical-align.asp
- http://www.w3school.com.cn/cssref/index.asp

--- 

### `text-overflow` 规定当文本溢出包含元素时发生的事情。 => `android:ellipsize`  
- 要强制溢出发生并且应用 ellipsis 值，作者必须设置对象的 white-space 属性值为 nowrap 。
- http://www.w3school.com.cn/cssref/pr_text-overflow.asp
- http://www.w3school.com.cn/cssref/index.asp

---

### `text-indent`  文本块首行的缩进 => `android:letterSpacing`
- 允许使用负值。如果使用负值，那么首行会被缩进到左边
- 用于定义块级元素中第一个内容行的缩进。这最常用于建立一个“标签页”效果。允许指定负值，这会产生一种“悬挂缩进”的效果。
- 默认值：0。
- % 定义基于父元素宽度的百分比的缩进。  
- https://blog.csdn.net/zhangphil/article/details/51312791
- http://www.w3school.com.cn/cssref/pr_text_text-indent.asp
- http://www.w3school.com.cn/cssref/index.asp

---

### `letter-spacing` 字母间距
- normal 就相当于值为 0
- 允许使用负值，这会让字母之间挤得更紧。
- http://www.w3school.com.cn/cssref/pr_text_letter-spacing.asp  
- http://www.w3school.com.cn/cssref/index.asp  

--- 

## 字体属性  
### `font-variant`  规定是否以小型大写字母的字体显示文本。	  
- `font-variant` 属性设置小型大写字母的字体显示文本，这意味着所有的小写字母均会被转换为大写，但是所有使用小型大写字体的字母与其余文本相比，其字体尺寸更小。
- http://www.w3school.com.cn/cssref/pr_font_font-variant.asp
- http://www.w3school.com.cn/cssref/index.asp

---

### `line-height` 设置行间的距离（行高）  =>  `android:minHeight`
- 该属性会影响行框的布局。在应用到一个块级元素时，它定义了该元素中基线之间的最小距离而不是最大距离。
- line-height 与 font-size 的计算值之差（在 CSS 中成为“行间距”）分为两半，分别加到一个文本行内容的顶部和底部。可以包含这些内容的最小框就是行框。
CSS 中 `行间距`  = line-height - font-size      
=>    
 `android:lineSpacingExtra`(设置行间距，如”8dp”) / `android:lineSpacingMultiplier`(设置行间距的倍数，如”1.5″)  
- https://www.cnblogs.com/yejiurui/p/3822683.html   
- http://www.w3school.com.cn/cssref/pr_dim_line-height.asp  

### `font-weight`  字体的粗细 => ```android:textStyle="bold/normal" ```  
- [100 * 1,100 * 9] 400 等同于 normal，而 700 等同于 bold。
- http://www.w3school.com.cn/cssref/pr_font_weight.asp
- http://www.w3school.com.cn/cssref/index.asp
- https://blog.csdn.net/tablle/article/details/51803647
- https://zhidao.baidu.com/question/1609567656269856907.html

### `font-size` 文本的字体尺寸 => `android:textSize`
-  value：name / 比较级 / 百分数 / length / % / inherit   
- http://www.w3school.com.cn/cssref/pr_font_font-size.asp
- http://www.w3school.com.cn/cssref/index.asp

### `font-family`文本的字体系列   => `android:textStyle` + `android:fontFamily`
- http://www.w3school.com.cn/cssref/pr_font_font-family.asp
- http://www.w3school.com.cn/cssref/index.asp

- font-family 属性的值是用于某个元素的字体族名称或/及类族名称的一个优先表。浏览器会使用它可识别的第一个值。
#### 声明方式有二种
有两种类型的字体系列名称：  
1. 指定的系列名称：具体字体的名称，比如："times"、"courier"、"arial"。  
font-family : name  
2. 通常字体系列名称：比如："serif"、"sans-serif"、"cursive"、"fantasy"、"monospace"    
font-family :ncursive | fantasy | monospace | serif | sans-serif

提示：使用逗号分割每个值，并始终提供一个类族名称作为最后的选择。  

- 使用某种特定的字体系列（Geneva）完全取决于用户机器上该字体系列是否可用；这个属性没有指示任何字体下载。因此，强烈推荐使用一个通用字体系列名作为后路。

### `color` 字体颜色，即文本的颜色  => `android:textColor`
- http://www.w3school.com.cn/cssref/pr_text_color.asp
- http://www.w3school.com.cn/cssref/index.asp

### `font-style` 字体样式  =>  `android:textStyle`
- http://www.w3school.com.cn/cssref/pr_font_font-style.asp
- http://www.w3school.com.cn/cssref/index.asp

## `padding` 内边距 => android padding
- http://www.w3school.com.cn/css/css_padding.asp
- 内边距（padding）是(X)HTML元素的边框与元素之间的距离，适用于任何元素。  
- 元素的内边距在边框和内容区之间  
- CSS  `padding`属性定义元素边框与元素内容之间的空白区域。

### CSS 内边距属性
padding
padding-top
padding-right
padding-bottom
padding-left

### 值复制：同 margin  
### 属性值的排列顺序：同 margin   

---

## CSS 外边距属性（Margin）
### margin 外边距/外补丁 => `android margin`

- http://www.w3school.com.cn/css/css_margin.asp
- http://www.w3school.com.cn/css/css_margin_collapsing.asp

- 外边距值不从父元素中继承
- CSS中将元素居中的最好的方法是把元素左右外边距属性值设定为auto。   
对于常用的浏览器，这只需要设定width规则，左外边距话和右外边距都为给定的auto值   
- 外补丁总是透明( transparent )的。
- 对于内联对象来说，上下外补丁如果被设置了，将是用于计算环绕内联对象的边框区域的。它们的值不会影响内联对象所在行的高度( height )

### CSS 外边距属性
margin  
margin-top    
margin-right    
margin-bottom    
margin-left    

```
h2 {
  margin-top: 20px;
  margin-right: 30px;
  margin-bottom: 30px;
  margin-left: 20px;
  }
```
等价于
```
p {margin: 20px 30px 30px 20px;}

```

### 属性值的排列顺序：  
top -> right -> bottom -> left，即top 开始，顺时针   

### [margin/padding]值复制
CSS 定义了一些规则，允许为外边距指定少于 4 个值。规则如下：   
- 如果缺少左外边距的值，则使用右外边距的值。left <= right  
- 如果缺少下外边距的值，则使用上外边距的值。bottom <= top
- 如果缺少右外边距的值，则使用上外边距的值。right <= top   

```
h1 {margin: 0.25em 1em 0.5em;}	/* 等价于 0.25em 1em 0.5em 1em */
h2 {margin: 0.5em 1em;}		/* 等价于 0.5em 1em 0.5em 1em */
p {margin: 1px;}			/* 等价于 1px 1px 1px 1px */

```
![值复制](http://www.w3school.com.cn/i/ct_css_margin_value.gif)


---

## 维度：宽度和高度   
设定值可以使长度、百分比或auto。所有这些值会受到样式表里其他规则的负面影响，也受到(X)HTML中它们包含的元素的影响。  
例如，margin、padding、border或者自元素都可能对结果产生连锁反应。  

---

## use `<div>`分块

## 注释    
/* ... */ 

---

## CSS选择器种类
### 包含选择符
- 元素1里包含元素2，只对在元素1里的元素2定义，对单独的元素1或元素2无定义
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>css contain_selector 包含选择符</title>

    <style type="text/css">
        /*包含选择符 */
        /* 对 div 或 p 没有定义， 仅仅对 在 div 中的 p 定义 */
        div p{
            background-color: lawngreen;
        }

    </style>
</head>
<body>

    <p>段落</p>
    <div style="border: #31b0d5 2px solid">
        <p>段落</p>
        <p>段落2</p>
        <h3>title 3 level</h3>
    </div>
</body>
</html>
```

### ID 选择器 => id, #
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>CSS id 选择器 </title>

    <style type="text/css">

        #red{
            color: red;
        }

        #green{
            color: #00ff00;
        }

        /* id 选择器常常用于建立派生选择器 */
        /* id 为 green && 元素是p */
        #green p{
            background: #0f0f0f;
        }

        /* 一个选择器，多种用法 */
        /* id 为 green && 元素是button */
        #green button{
            background: #985f0d;
        }
    </style>
</head>
<body>

    <p id="red">红色</p>
    <!--<p id="red">红色</p>-->

    <div id="green">绿色
        <p>段落</p>
        <button type="button">button</button>

    </div>
</body>
</html>
```

- id 属性只能在每个 HTML 文档中出现一次
- id 选择器常常用于建立派生选择器。
- id 选择器作为派生选择器也可以被使用很多次
- id 选择符局限性很大，只能单独定义某个元素的样式，一般只在特殊情况下使用。
- id 选择器 VS 类选择器:     
ID只能在一个页面中出现一次,而class可以多次运用.   


### 类选择器 => class, .
- 在 CSS 中，类选择器以一个点号显示
```
 .red{
    background: red;
  }

```

```
<p class="red">A</p>
```
- 类名的第一个字符不能使用数字！
- 元素基于它们的类而被选择

```
.red{
   background: red;
}

 /* 类名为 red 的 h2  => 类型为h2 && 类名为 red */
h2.red {
    background: royalblue;
}

 /* p 且 类名为 right  => p元素 && 类名为right */
p.right {
    text-align: right;
}
```

- http://www.w3school.com.cn/css/css_syntax_class_selector.asp


### 选择器的分组
```
  h1,p{
            color: red;
      }
``
- 被分组的选择器就可以分享相同的声明
- 摆脱父元素的规则？    
创建一个针对 它 的特殊规则.
- http://www.w3school.com.cn/css/css_syntax_pro.asp

## CSS的定义
CSS的定义是由三个部分构成: 选择符(selector)，属性(properties)和属性的取值(value)    

`selector {property: value}`  

```
h1 {color:red; font-size:14px;}

``
- 定义不止一个声明，则需要用分号将每个声明分开
- 大多数有经验的设计师会在每条声明的末尾都加上分号，这么做的好处是，当你从现有的规则中增减声明时，会尽可能地减少出错的可能性。
- 是否包含空格不会影响 CSS 在浏览器的工作效果，同样，与 XHTML 不同，CSS 对大小写不敏感。  
不过存在一个例外：如果涉及到与 HTML 文档一起工作的话，class 和 id 名称对大小写是敏感的。  
- http://www.w3school.com.cn/css/css_syntax.asp

## CSS  
- css = Cascading Style Sheet = 层叠样式表单  => android style

### CSS 语法
 CSS的定义是由三个部分构成: 选择器(selector)，属性(property)和属性的取值(value)。

![CSS 语法](http://www.w3school.com.cn/i/ct_css_selector.gif)

### 使用CSS布局的优点
- 表现和内容相分离   
- 提高页面浏览速度  
对于同一个页面视觉效果，采用CSS布局的页面容量要比TABLE编码的页面文件容量小得多
- 易于维护和改版   

### 如何引入样式
1.  在`<head>`中使用link 引入 css 文件  

`use_css.html`

```  
<head>
    <link type="text/css" rel="stylesheet" href="use_css.css">
</head>

```

```
<p id="p1">A</p>
```

`use_css.css`
```
#p1{
    background: red;
    width: 50%;
}
```

2.  在`<head>`中直接写style。

`use_css.html`

```
<head>
    <meta charset="UTF-8">
    <title>Use css - 定义内部样式块对象 (Embedding a Style Block) </title>

    <!-- 将style对象的type属性设置为“text/css”，是允许不支持这类型的浏览器忽略样式表单。 -->
    <style type="text/css">
        #p1 {
            background: green;
            width: 50%;
        }
    </style>

</head>
```

`<p id="p1">A</p>`

3.  在标记中直接写style。  
`use_css.html`  
```
<p style="background: #5bc0de; width: 50%">A</p>
```

### 层叠次序 => android style 属性与xml 属性

当同一个 HTML 元素被不止一个样式定义时，会使用哪个样式呢？    
一般而言，所有的样式会根据下面的规则层叠于一个新的虚拟样式表中，其中数字 4 拥有最高的优先权。     

1.浏览器缺省设置  
2.外部样式表  
3.内部样式表（位于 `<head>` 标签内部）  
4.内联样式（在 HTML 元素内部）     
因此，内联样式（在 HTML 元素内部）拥有最高的优先权，这意味着它将优先于以下的样式声明：`<head>`标签中的样式声明，外部样式表中的样式声明，或者浏览器中的样式声明（缺省值）。  

=> java ， 县官不如现管。   

- http://www.w3school.com.cn/css/css_jianjie.asp