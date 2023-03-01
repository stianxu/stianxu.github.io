import{_ as s,c as l,o as n,a}from"./app.3074115f.js";const F=JSON.parse('{"title":"CSS","description":"","frontmatter":{},"headers":[{"level":2,"title":"CSS3 新特性","slug":"css3-新特性","link":"#css3-新特性","children":[]},{"level":2,"title":"link 和 @import 引入 CSS","slug":"link-和-import-引入-css","link":"#link-和-import-引入-css","children":[]},{"level":2,"title":"CSS 选择器及其优先级","slug":"css-选择器及其优先级","link":"#css-选择器及其优先级","children":[]},{"level":2,"title":"伪类和伪元素","slug":"伪类和伪元素","link":"#伪类和伪元素","children":[]},{"level":2,"title":"隐藏元素的方法","slug":"隐藏元素的方法","link":"#隐藏元素的方法","children":[]},{"level":2,"title":"z-index 属性","slug":"z-index-属性","link":"#z-index-属性","children":[]},{"level":2,"title":"可继承与不可继承属性","slug":"可继承与不可继承属性","link":"#可继承与不可继承属性","children":[]},{"level":2,"title":"display 的属性值","slug":"display-的属性值","link":"#display-的属性值","children":[]},{"level":2,"title":"line-height 属性","slug":"line-height-属性","link":"#line-height-属性","children":[]},{"level":2,"title":"margin 和 padding 属性","slug":"margin-和-padding-属性","link":"#margin-和-padding-属性","children":[]},{"level":2,"title":"transition 和 animation 属性","slug":"transition-和-animation-属性","link":"#transition-和-animation-属性","children":[]},{"level":2,"title":"静态布局","slug":"静态布局","link":"#静态布局","children":[]},{"level":2,"title":"流式布局","slug":"流式布局","link":"#流式布局","children":[]},{"level":2,"title":"自适应布局","slug":"自适应布局","link":"#自适应布局","children":[]},{"level":2,"title":"响应式布局","slug":"响应式布局","link":"#响应式布局","children":[]},{"level":2,"title":"弹性布局","slug":"弹性布局","link":"#弹性布局","children":[]},{"level":2,"title":"布局单位","slug":"布局单位","link":"#布局单位","children":[]},{"level":2,"title":"浮动","slug":"浮动","link":"#浮动","children":[]},{"level":2,"title":"定位","slug":"定位","link":"#定位","children":[]},{"level":2,"title":"让元素水平居中的方法","slug":"让元素水平居中的方法","link":"#让元素水平居中的方法","children":[]},{"level":2,"title":"盒模型","slug":"盒模型","link":"#盒模型","children":[]},{"level":2,"title":"BFC","slug":"bfc","link":"#bfc","children":[]},{"level":2,"title":"移动端视口和二倍图","slug":"移动端视口和二倍图","link":"#移动端视口和二倍图","children":[]},{"level":2,"title":"媒体查询","slug":"媒体查询","link":"#媒体查询","children":[]},{"level":2,"title":"CSS 优化","slug":"css-优化","link":"#css-优化","children":[]},{"level":2,"title":"CSS Sprite","slug":"css-sprite","link":"#css-sprite","children":[]},{"level":2,"title":"CSS 预处理器","slug":"css-预处理器","link":"#css-预处理器","children":[]}],"relativePath":"markdown/2.CSS.md"}'),p={name:"markdown/2.CSS.md"},t=a(`<h1 id="css" tabindex="-1">CSS <a class="header-anchor" href="#css" aria-hidden="true">#</a></h1><h2 id="css3-新特性" tabindex="-1">CSS3 新特性 <a class="header-anchor" href="#css3-新特性" aria-hidden="true">#</a></h2><p><strong>CSS3 盒模型</strong></p><ul><li>通过修改元素的 box-sizing 属性来改变元素的盒模型 <ul><li><p><code>box-sizing: content-box;</code>表示标准盒模型（默认值）</p></li><li><p><code>box-sizing: border-box;</code>表示 IE 盒模型（怪异盒模型）</p></li></ul></li></ul><p><strong>CSS3 新增属性</strong></p><ul><li>边框圆角（border-radius），设置边框的圆角效果</li><li>阴影效果（text-shadow / box-shadow），为（文本 / 盒子）添加阴影效果</li><li>过渡属性（transition）设置过渡效果</li><li>2D/3D 转换（transform）对元素实现移动、缩放、旋转等效果</li></ul><h2 id="link-和-import-引入-css" tabindex="-1">link 和 @import 引入 CSS <a class="header-anchor" href="#link-和-import-引入-css" aria-hidden="true">#</a></h2><p><strong>相同点</strong></p><ul><li>两者都是外部引用 CSS 的方式。</li></ul><p><strong>不同点</strong></p><ul><li>link 是 HTML 标签，除了加载 CSS 外，还可以定义其他事务，@import 属于 CSS 范畴，只能加载 CSS。</li><li>link 引用 CSS 时，在页面载入时同时加载，@import 需要页面网页完全载入以后加载。</li><li>link 是 HTML 标签，无兼容问题，@import 是在 CSS2.1 提出的，低版本的浏览器不支持。</li><li>link 支持操作 DOM 去改变样式，而 @import 不支持。</li></ul><h2 id="css-选择器及其优先级" tabindex="-1">CSS 选择器及其优先级 <a class="header-anchor" href="#css-选择器及其优先级" aria-hidden="true">#</a></h2><p><strong>CSS 选择器</strong></p><table><thead><tr><th><strong>选择器</strong></th><th><strong>格式</strong></th><th><strong>优先级权重</strong></th></tr></thead><tbody><tr><td>id 选择器</td><td>#id</td><td>100</td></tr><tr><td>类选择器</td><td>.classname</td><td>10</td></tr><tr><td>属性选择器</td><td>a[ref=&quot;main&quot;]</td><td>10</td></tr><tr><td>伪类选择器</td><td>li:last-child</td><td>10</td></tr><tr><td>标签选择器</td><td>div</td><td>1</td></tr><tr><td>伪元素选择器</td><td>li:after</td><td>1</td></tr><tr><td>相邻兄弟选择器</td><td>h1+p</td><td>0</td></tr><tr><td>子选择器</td><td>ul&gt;li</td><td>0</td></tr><tr><td>后代选择器</td><td>li a</td><td>0</td></tr><tr><td>通配符选择器</td><td>*</td><td>0</td></tr></tbody></table><p><strong>选择器的优先级</strong></p><ul><li>!important &gt; 行内样式 &gt; id 选择器 &gt; 类选择器 &gt; 标签选择器 &gt; 通配符 * &gt; 继承</li></ul><p><strong>注意事项</strong></p><ul><li>如果优先级相同，则最后出现的样式生效。</li></ul><h2 id="伪类和伪元素" tabindex="-1"><strong>伪类和伪元素</strong> <a class="header-anchor" href="#伪类和伪元素" aria-hidden="true">#</a></h2><p><strong>伪类</strong></p><ul><li>伪类是选择器的一种，用来匹配元素的特殊状态。</li><li>伪类以冒号<code>:</code>为前缀，可被添加到选择器的末尾。 <ul><li><code>:hover</code>设置鼠标悬停在元素上时的样式。</li><li><code>:focus</code>设置元素获得焦点时的样式。</li><li><code>:checked</code>设置元素被选中时的样式。</li></ul></li></ul><p><strong>伪元素</strong></p><ul><li>在元素的内容之前或之后插入内容，用来创建元素的隶属元素。</li><li>这些隶属元素可以在界面中展示，但在 DOM 中不体现。 <ul><li><code>::before</code>和<code>::after</code>。</li></ul></li></ul><p><strong>伪元素双冒号与单冒号</strong></p><ul><li><p><code>:after</code>与<code>::after</code>效果都是相同的，都是伪元素的写法。</p></li><li><p><code>:after</code>是 CSS2 的写法，<code>::after</code>是 CSS3 的写法。</p></li></ul><h2 id="隐藏元素的方法" tabindex="-1">隐藏元素的方法 <a class="header-anchor" href="#隐藏元素的方法" aria-hidden="true">#</a></h2><table><thead><tr><th>方式</th><th>说明</th></tr></thead><tbody><tr><td>opacity: 0</td><td>通过将元素的透明度设置为 0，实现看起来隐藏的效果<br>占用空间，可以进行交互</td></tr><tr><td>visibility: hidden</td><td>将元素设置为不可见<br>占据空间，不可进行交互</td></tr><tr><td>overflow: hidden</td><td>只会隐藏元素溢出的部分<br>占据空间，不可进行交互</td></tr><tr><td>display: none</td><td>可以彻底隐藏元素并从文档流中消失<br>不占据空间，不可进行交互，不影响布局</td></tr><tr><td>transform: scale(0,0)</td><td>通过将元素进行缩放，缩小为 0<br>占据空间，不可进行交互</td></tr><tr><td>left: -9999px</td><td>通过将元素定位到屏幕外面，达到看起来隐藏的效果</td></tr><tr><td>z-index: -9999</td><td>通过将元素的层级置于最底层，让其他元素覆盖住它，达到看起来隐藏的效果</td></tr></tbody></table><h2 id="z-index-属性" tabindex="-1">z-index 属性 <a class="header-anchor" href="#z-index-属性" aria-hidden="true">#</a></h2><p><strong>z-index</strong></p><ul><li><p>可以将它看做三维坐标系中的 z 轴方向上的图层层叠顺序。</p></li><li><p>元素默认的 z-index 为 0，可通过修改 z-index 来控制设置了postion 值的元素的图层位置。</p></li><li><p>可以将这种关系想象成一摞书本，通过 z-index 可以改变一本书在这摞书中的上下位置。</p></li><li><p>如果父辈元素有定位，且配置了z-index,，优先按照父辈元素定位的 z-index 进行比较层级。</p></li></ul><h2 id="可继承与不可继承属性" tabindex="-1">可继承与不可继承属性 <a class="header-anchor" href="#可继承与不可继承属性" aria-hidden="true">#</a></h2><p><strong>无继承性的属性</strong></p><ul><li><p>盒子模型的属性</p><ul><li>width、height、margin、padding、border</li></ul></li><li><p>背景属性</p><ul><li>background、background-color、background-image、background-position</li></ul></li><li><p>定位属性</p><ul><li>float、position、top、right、bottom、left、min-width、min-height、max-width、max-height、z-index</li></ul></li></ul><p><strong>有继承性的属性</strong></p><ul><li><p>字体系列属性</p><ul><li>font-family、font-weight、font-size、font-style</li></ul></li><li><p>文本系列属性</p><ul><li>text-indent、text-align、line-height、color</li></ul></li></ul><h2 id="display-的属性值" tabindex="-1">display 的属性值 <a class="header-anchor" href="#display-的属性值" aria-hidden="true">#</a></h2><p><strong>display 属性值</strong></p><table><thead><tr><th><strong>属性值</strong></th><th><strong>作用</strong></th></tr></thead><tbody><tr><td>none</td><td>元素不显示，并且会把元素从文档流中移除。</td></tr><tr><td>block</td><td>块类型。默认宽度为父元素宽度，可设置宽高，元素独占一行，换行显示。</td></tr><tr><td>inline</td><td>行内元素类型。默认宽度为内容宽度，不可设置宽高，元素不会独占一行，同行显示。</td></tr><tr><td>inline-block</td><td>默认宽度为内容宽度，可以设置宽高，元素不会独占一行，同行显示。</td></tr><tr><td>table</td><td>元素会作为块级表格来显示。</td></tr></tbody></table><h2 id="line-height-属性" tabindex="-1"><strong>line-height</strong> 属性 <a class="header-anchor" href="#line-height-属性" aria-hidden="true">#</a></h2><p><strong>line-height 的概念</strong></p><ul><li>line-height 指一行文本的高度，包含了字间距，实际上是下一行基线到上一行基线距离。</li><li>一个容器没有设置高度，那么撑开容器高度的是 line-height，而不是容器内的文本内容。</li><li>把 line-height 值设置为 height 一样大小的值可以实现单行文字的垂直居中。</li></ul><p><strong>line-height 的赋值方式</strong></p><ul><li>带单位：px 是固定值，而 em 会参考父元素 font-size 值计算自身的行高。</li><li>纯数字：会把比例传递给后代。例如，父级行高为 1.5，子元素字体为 18px，则子元素行高为 1.5 * 18 = 27px。</li><li>百分比：将计算后的值传递给后代。</li></ul><h2 id="margin-和-padding-属性" tabindex="-1"><strong>margin 和 padding</strong> 属性 <a class="header-anchor" href="#margin-和-padding-属性" aria-hidden="true">#</a></h2><p><strong>margin</strong></p><ul><li>需要在 border 外侧添加空白，且空白处不需要背景（色）时，使用 margin。</li></ul><p><strong>padding</strong></p><ul><li>需要在 border 内测添加空白，且空白处需要背景（色）时，使用 padding。</li></ul><h2 id="transition-和-animation-属性" tabindex="-1">transition 和 animation 属性 <a class="header-anchor" href="#transition-和-animation-属性" aria-hidden="true">#</a></h2><p><strong>transition</strong></p><ul><li><strong>transition 是过渡属性</strong>，强调过度，它的实现需要触发一个事件（比如鼠标移动上去，焦点，点击等）才执行动画。</li><li>它可以设置一个开始关键帧，一个结束关键帧。</li></ul><p><strong>animation</strong></p><ul><li><strong>animation 是动画属性</strong>，它的实现不需要触发事件，设定好时间之后可以自己执行，且可以循环一个动画。</li><li>它可以设置多个关键帧（用 @keyframe 定义）完成动画。</li></ul><h2 id="静态布局" tabindex="-1"><strong>静态布局</strong> <a class="header-anchor" href="#静态布局" aria-hidden="true">#</a></h2><p><strong>静态布局</strong></p><ul><li>网页中所有元素的单位都是 px，不管浏览器尺寸是多少，网页布局始终按照最初写代码的布局来显示，也就是说所有的屏幕看到的页面都是一样的。</li><li>一般 PC 端网站都是按照这种方式来布局的，如果要在移动端显示，一般用的是另外的一套布局。</li><li>屏幕太小的话，页面会出现滚动条，屏幕太大的话，页面会有很多的空白，整体页面布局不紧凑。</li></ul><h2 id="流式布局" tabindex="-1">流式布局 <a class="header-anchor" href="#流式布局" aria-hidden="true">#</a></h2><p><strong>流式布局</strong></p><ul><li><p>页面最外层的容器的宽度使用 百分比 搭配 min-width 和 max-width 来设置，高度一般还是使用 px 来设置。</p></li><li><p>它的宽度是随着视口的变化而变化的，屏幕大小变化，页面元素的大小也会跟着变化，但是布局不变。</p></li><li><p>因为页面的宽度是随着屏幕的大小来变化的，但是高度还是固定的，就会导致在大屏幕上宽度被拉的很长，但是高度不变，导致内容在一行显示很长，阅读习惯不好。 在小屏幕上容易发生内容重叠，导致页面布局混乱。</p></li></ul><h2 id="自适应布局" tabindex="-1">自适应布局 <a class="header-anchor" href="#自适应布局" aria-hidden="true">#</a></h2><p><strong>自适应布局</strong></p><ul><li>分别为不同的分辨率的屏幕定义布局。每一个静态布局对应一个分辨率范围。</li><li>针对不同分辨率采用 @media 媒体查询 给不同范围的屏幕分别写一套样式布局，每一套样式布局采用的还是静态布局的方式。</li><li>在每个静态布局中，页面元素的尺寸不随屏幕大小的变化而变化。除非屏幕尺寸变化让页面从这个静态布局变成了另外一个静态布局。</li><li>自适应布局虽然有好几套样式布局，但是对于用户来说网页是一样的，只是页面的元素的大小发生了变化。</li><li>自适应布局在 PC 端和 移动端 都会用到，一般要么针对 PC 端做自适应布局，要么针对移动端做自适应布局。如果要想同时兼容移动端和pc端，最好使用响应式布局。</li><li>自适应布局的实现：添加元标签，尽量少使用绝对宽度，字体使用相对大小，媒体查询。</li></ul><h2 id="响应式布局" tabindex="-1">响应式布局 <a class="header-anchor" href="#响应式布局" aria-hidden="true">#</a></h2><p><strong>响应式布局</strong></p><ul><li>响应式布局也会用到媒体查询，它可以识别屏幕大小，可以根据屏幕大小调整页面的布局。</li></ul><ul><li>屏幕大小变化，元素的大小和位置也会发生改变。</li><li>能同时适应 PC 和 移动端，在不同屏幕大小都有一个良好的布局。</li><li>响应式布局的应用场景就是需要同时兼容 PC 端和移动端的样式的布局一般都采用这种响应式布局，还有一些公司是 PC 端有一套样式，移动端也有一套样式，比如京东就是这样。</li><li>响应式布局的三个原则：移动优先，@media 媒体查询，流式布局。 <ul><li>移动优先指的是优先设置移动端，也就是小屏的布局，然后针对不同屏幕使用渐进增强。</li><li>写好小屏幕样式之后，需要测试一下小屏幕的各种适配情况，然后再使用媒体查询去根据不同的屏幕范围加载对应的样式。</li><li>尽量少给主容器元素设置具体的宽度，使用 vw 或者 百分比 的流式布局，其他的尺寸尽量使用相对单位。</li></ul></li></ul><h2 id="弹性布局" tabindex="-1">弹性布局 <a class="header-anchor" href="#弹性布局" aria-hidden="true">#</a></h2><p><strong>弹性布局</strong></p><ul><li><p>布局的传统解决方案，基于盒模型，依赖 <code>display</code>属性 + <code>position</code>属性 + <code>float</code>属性，它对于那些特殊布局非常不方便。</p></li><li><p>CSS3 新增 flex 布局，可以简便、完整、响应式地实现各种页面布局，可以通过将一个元素的 display 属性值设置为 flex，从而使它成为一个 flex 容器，它的所有 子元素 都会成为它的项目。一个容器默认有两条轴：一个是水平的主轴，一个是与主轴垂直的交叉轴。</p></li></ul><p><strong>调整主轴方向</strong></p><ul><li><p>可以使用 <code>flex-direction</code> 来指定主轴的方向。</p><ul><li><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">row：主轴方向为水平向右。</span></span>
<span class="line"><span style="color:#A6ACCD;">column：主轴方向为竖直向下。</span></span>
<span class="line"><span style="color:#FFCB6B;">row-reverse</span><span style="color:#A6ACCD;">: 主轴方向为水平向左。</span></span>
<span class="line"><span style="color:#FFCB6B;">column-reverse</span><span style="color:#A6ACCD;">: 主轴方向是竖直向上。</span></span>
<span class="line"></span></code></pre></div></li></ul></li></ul><p><strong>主轴上的排列方式</strong></p><ul><li><p>可以使用 <code>justify-content</code> 来指定元素在主轴上的排列方式。</p><ul><li><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">flex-start</span><span style="color:#A6ACCD;">: 弹性盒子元素将向起始位置对齐</span></span>
<span class="line"><span style="color:#FFCB6B;">flex-end</span><span style="color:#A6ACCD;">: 弹性盒子元素将向结束位置对齐。</span></span>
<span class="line"><span style="color:#FFCB6B;">center</span><span style="color:#A6ACCD;">: 弹性盒子元素将向行中间位置对齐</span></span>
<span class="line"><span style="color:#FFCB6B;">space-around</span><span style="color:#A6ACCD;">: 弹性盒子元素会平均地分布在行里</span></span>
<span class="line"><span style="color:#FFCB6B;">space-between</span><span style="color:#A6ACCD;">:第一个贴左边，最后一个贴右边，其他盒子均分，保证每个盒子之间的空隙是相等的。</span></span>
<span class="line"></span></code></pre></div></li></ul></li></ul><p><strong>交叉轴上的排列方式</strong></p><ul><li><p>可以使用 <code>align-items</code> 来指定元素在交叉轴上的排列方式。</p><ul><li><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">flex-start</span><span style="color:#A6ACCD;">： 元素在侧轴的起始位置对齐。 </span></span>
<span class="line"><span style="color:#FFCB6B;">flex-end</span><span style="color:#A6ACCD;">： 元素在侧轴的结束位置对齐。</span></span>
<span class="line"><span style="color:#A6ACCD;">center： 元素在侧轴上居中对齐。</span></span>
<span class="line"><span style="color:#A6ACCD;">stretch： 元素的高度会被拉伸到最大（不给高度时</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> 才拉伸）。</span></span>
<span class="line"></span></code></pre></div></li></ul></li></ul><p><strong>控制 flex 容器是否换行</strong></p><ul><li><p>可以使用 <code>flex-wrap</code> 属性控制 flex 容器是单行或者多行，默认不换行。</p><ul><li><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">nowrap： 不换行（默认），如果宽度溢出，会压缩子盒子的宽度。</span></span>
<span class="line"><span style="color:#A6ACCD;">wrap： 当宽度不够的时候，会换行。</span></span>
<span class="line"></span></code></pre></div></li></ul></li></ul><p><strong>设置多行排列方式</strong></p><ul><li><p>可以使用 <code>align-content</code> 用来设置多行的 flex 容器的排列方式。</p><ul><li><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">flex-start</span><span style="color:#A6ACCD;">： 各行向侧轴的起始位置堆叠。 </span></span>
<span class="line"><span style="color:#FFCB6B;">flex-end</span><span style="color:#A6ACCD;">： 各行向弹性盒容器的结束位置堆叠。</span></span>
<span class="line"><span style="color:#A6ACCD;">center： 各行向弹性盒容器的中间位置堆叠。</span></span>
<span class="line"><span style="color:#FFCB6B;">space-around</span><span style="color:#A6ACCD;">： 各行在侧轴中平均分布。 </span></span>
<span class="line"><span style="color:#FFCB6B;">space-between</span><span style="color:#A6ACCD;">： 第一行贴上边，最后一个行贴下边</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">其他行在弹性盒容器中平均分布。 </span></span>
<span class="line"><span style="color:#A6ACCD;">stretch：拉伸，不设置高度的情况下。</span></span>
<span class="line"></span></code></pre></div></li></ul></li></ul><p><strong>flex:1 效果</strong></p><ul><li>添加 flex: 1 的子元素会占据父元素剩余空间。</li></ul><ul><li>多个子元素添加 flex: 1，平均分配父元素剩余空间。</li></ul><h2 id="布局单位" tabindex="-1">布局单位 <a class="header-anchor" href="#布局单位" aria-hidden="true">#</a></h2><p><strong>px 像素</strong></p><ul><li>绝对单位。代表像素数量，页面会按照给出的精确像素进行展示。</li></ul><p><strong>百分比</strong></p><ul><li>相对单位，当浏览器的宽度或者高度发生变化时，通过百分比单位可以使得浏览器中的组件的宽和高随着浏览器的变化而变化，从而实现响应式的效果。</li></ul><p><strong>em 和 rem</strong></p><ul><li>相对单位，em 相对于父元素的 font-size 倍数，rem 相对于根元素 font-size 倍数，可以理解为 root em。</li></ul><p><strong>vw / vh</strong></p><ul><li>相对单位，vw 表示相对于视口的宽度，vh 表示相对于视口高度。</li></ul><ul><li>1vw = 视口宽度的 1%，1vh = 视口宽度的 1%。</li></ul><p><strong>rem 布局的原理</strong></p><ul><li><p>使用 rem 为单位</p></li><li><p>动态的设置 html font-size (媒体查询, js 设置，插件设置都可以)</p></li></ul><h2 id="浮动" tabindex="-1">浮动 <a class="header-anchor" href="#浮动" aria-hidden="true">#</a></h2><p><strong>浮动的定义</strong></p><ul><li>容器不设高度且子元素浮动时，容器高度不能被内容撑开。 此时，内容会溢出到容器外面而影响布局。这种现象被称为浮动（溢出）。</li><li>当前 flex 已成为主流布局方式，适应性强，且稳定，所以浮动使用率目前已逐步降低。</li></ul><p><strong>清除浮动的方式</strong></p><ul><li>父级设置高度 或 添加<code>overflow:hidden</code>或者<code>overflow:auto</code><ul><li>通过触发 BFC 方式（就是负责接管自己的宽高），实现清除浮动。</li></ul></li><li>额外标签 clear: both <ul><li>最后一个浮动元素之后添加一个空的 div 标签，并添加<code>clear:both</code>样式。</li></ul></li></ul><ul><li><p>双伪元素 + clearfix 类</p><ul><li><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">clearfix</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">before</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">clearfix</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">after</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> block</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* 伪元素默认是 inline 的，inline 元素无法帮我们做清除浮动的事情。 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">content</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">clearfix</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">after</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">clear</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> both</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div></li></ul></li></ul><h2 id="定位" tabindex="-1">定位 <a class="header-anchor" href="#定位" aria-hidden="true">#</a></h2><p><strong>static 正常文档流定位</strong></p><ul><li><p>此时设置 top、right、bottom、left 以及 z-index 都无效。</p></li><li><p>块级元素遵循从上往下纵向排列，行级元素遵循从左到右排列。</p></li></ul><p><strong>relative 相对定位</strong></p><ul><li>这个 <strong>“相对”</strong> 是指相对于正常文档流的位置。</li></ul><p><strong>absolute 绝对定位</strong></p><ul><li><p>当前元素相对于 **最近的非 static 定位的祖先元素 **来确定自己的偏移位置。</p></li><li><p>例如，当前为 absolute 的元素的父元素、祖父元素都为 relative，则当前元素会相对于父元素进行偏移定位。</p></li></ul><p><strong>fixed 固定定位</strong></p><ul><li>当前元素相对于屏幕视口 viewport 来确定自己的位置。并且当屏幕滚动时，当前元素的位置也不会发生改变。</li></ul><p><strong>sticky 粘性定位</strong></p><ul><li>当它的父元素在视口区域、并进入 top 值给定的范围内时，当前元素就以 fixed 的方式进行定位，否则就以 relative 的方式进行定位。</li></ul><h2 id="让元素水平居中的方法" tabindex="-1">让元素水平居中的方法 <a class="header-anchor" href="#让元素水平居中的方法" aria-hidden="true">#</a></h2><p><strong>通过为块级元素设置左右的 margin 为 auto，实现让元素居中</strong></p><ul><li><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">/* block + margin */</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">child</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* 需要设置宽度 */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> block</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* 设置成table可以不设置宽度 */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">margin</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> auto</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div></li></ul><p><strong>转成行内块, 给父盒子设置 text-align: center</strong></p><ul><li><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">/* inline-block + text-align */</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">parent</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#B2CCD6;">text-align</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> center</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">child</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> inline-block</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div></li></ul><p><strong>使用 flex 提供的子元素居中排列功能，对元素进行居中</strong></p><ul><li><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">father</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> flex</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">justify-content</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> center</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div></li></ul><p><strong>使用 定位布局 + 位移 / 外边距</strong></p><ul><li><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">/* absolute + transform/margin */</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">parent</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> relative</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">child</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> absolute</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">left</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">50%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">transform</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">translateX</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">-50%</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div></li></ul><h2 id="盒模型" tabindex="-1">盒模型 <a class="header-anchor" href="#盒模型" aria-hidden="true">#</a></h2><p><strong>两种盒模型</strong></p><ul><li>标准盒模型、怪异（IE）盒模型（主流）</li></ul><p><strong>盒模型组成</strong></p><ul><li>分别是 margin、border、padding 和 content 。</li></ul><p><strong>区别在于设置 width 和 height 时，所对应的范围不同</strong></p><ul><li><p>标准盒模型的 width 和 height 属性的范围只包含了 content。</p></li><li><p>IE 盒模型的 width 和 height 属性的范围包含了 border、padding 和 content。</p></li></ul><p><strong>通过修改元素的 box-sizing 属性来改变元素的盒模型</strong></p><ul><li><p><code>box-sizing: content-box</code>表示标准盒模型（默认值）</p></li><li><p><code>box-sizing: border-box</code>表示 IE 盒模型（怪异盒模型）</p></li></ul><h2 id="bfc" tabindex="-1">BFC <a class="header-anchor" href="#bfc" aria-hidden="true">#</a></h2><p><strong>什么是 BFC</strong></p><ul><li>BFC 的全称是 Block Formatting Context，块级格式化上下文。BFC 指一块独立的区域，与外部的元素不互相产生影响。将处于 BFC 区域内和区域外的元素进行互相隔离。</li></ul><p><strong>满足下列条件之一就可触发 BFC</strong></p><ul><li>HTML 根元素</li><li>position 值为 <code>absolute</code> 或 <code>fixed</code></li><li>float 值不为 <code>none</code></li><li>overflow 值不为 <code>visible</code></li><li>display 值为 <code>inline-block</code>、<code>table-cell</code> 或 <code>table-caption</code></li></ul><p><strong>BFC 的应用场景</strong></p><ul><li><strong>解决上下 margin 合并问题</strong>，让这两个相邻块级子元素分属于不同的 BFC。 <ul><li>上盒子设置下外边距为 10px，下盒子设置上外边距为 10px，我们期望它们之间的间距是 20px，但实际效果却只有 10px。</li><li>让其中一个盒子触发 BFC，从而达到间隔 20px 的期望效果。</li></ul></li><li><strong>清除浮动</strong><ul><li>容器不设高度且子元素浮动时，容器高度不能被内容撑开。通过为容器添加 BFC 触发条件，可以让它的高度变回正常状态。</li><li>让被覆盖的盒子触发 BFC，防止被浮动元素覆盖。</li></ul></li></ul><h2 id="移动端视口和二倍图" tabindex="-1">移动端视口和二倍图 <a class="header-anchor" href="#移动端视口和二倍图" aria-hidden="true">#</a></h2><p><strong>PC 端和移动端区别</strong></p><ul><li><p>PC 端</p><ul><li><p>屏幕大，网页固定版型</p></li><li><p>PC 端浏览器繁多，更多考虑兼容性问题。（布局： 浮动 + 定位 + 标准流）</p></li></ul></li><li><p>移动端</p><ul><li><p>手机屏幕小，网页宽度多数为 100%，是适配手机屏幕宽度</p></li><li><p>移动端则基本不需要考虑兼容性问题，放心大胆使用 CSS 新特性</p></li></ul></li></ul><p><strong>物理分辨率和逻辑分辨率</strong></p><ul><li>物理分辨率 <ul><li>硬件所支持的，屏幕出厂就设定无法修改</li></ul></li><li>逻辑分辨率 <ul><li>软件可以达到的， 我们开发中写的是逻辑分辨率</li></ul></li></ul><p><strong>视口</strong></p><ul><li>视口（viewport）就是浏览器显示页面内容的<strong>屏幕区域</strong>。</li></ul><p><strong>二倍图</strong></p><ul><li>二倍图存在就是为了让页面中图片更加清晰</li><li>网页美工的设计稿基本是 750px</li><li>拿到设计稿利用像素大厨选择 2X， 进行缩小一半，按照提示的单位开发即可</li></ul><h2 id="媒体查询" tabindex="-1">媒体查询 <a class="header-anchor" href="#媒体查询" aria-hidden="true">#</a></h2><p><strong>媒体查询</strong></p><ul><li>媒体查询是自 CSS3 开始加入的一个功能。它可以进行响应式适配展示。</li></ul><p><strong>媒体查询由两部分组成</strong></p><ul><li>一个可选的媒体类型（如 screen、print 等）</li><li>零个或多个媒体功能限定表达式（如 min-width: 768px、max-width: 991px 等）</li></ul><ul><li>这两部分最终都会被解析为 true 或 false 值，整个媒体查询值为 true，则和该媒体查询关联的样式就生效，否则就不生效。</li></ul><p><strong>使用示例</strong></p><ul><li><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">/* 在css样式表的定义中直接使用媒体查询 */</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">container</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">600px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">200px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> pink</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">margin</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> auto</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">@media</span><span style="color:#A6ACCD;"> screen </span><span style="color:#89DDFF;">and</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">max-width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">767px</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">container</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">@media</span><span style="color:#A6ACCD;"> screen </span><span style="color:#89DDFF;">and</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">min-width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">768px</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">and</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">max-width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">991px</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">container</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">750px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">@media</span><span style="color:#A6ACCD;"> screen </span><span style="color:#89DDFF;">and</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">min-width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">992px</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">and</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">max-width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1199px</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">container</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">980px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">@media</span><span style="color:#A6ACCD;"> screen </span><span style="color:#89DDFF;">and</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">min-width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1200px</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">container</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1170px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">@media</span><span style="color:#A6ACCD;"> screen </span><span style="color:#89DDFF;">and</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1200px</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">container</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> skyblue</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div></li></ul><h2 id="css-优化" tabindex="-1">CSS 优化 <a class="header-anchor" href="#css-优化" aria-hidden="true">#</a></h2><p><strong>加载渲染性能</strong></p><ul><li>css 压缩，将写好的 css 进行打包压缩，可以减小文件体积。</li><li>减少使用 @import，建议使用 link，后者在页面加载时一起加载，前者是等待页面加载完成之后再进行加载。</li><li>css sprite ，css 雪碧图，减少页面的请求次数</li></ul><p><strong>选择器性能</strong></p><ul><li><p>避免使用通配规则，如<code>*{}</code> ，只对需要用到的元素进行选择。</p></li><li><p>尽量少的去对标签进行选择，少的去使用后代选择器，更多的使用类来关联每一个标签元素。</p></li><li><p>选择器优化嵌套，尽量避免层级过深。</p></li><li><p>了解哪些属性是可以通过继承而来的，然后避免对这些属性重复指定规则。</p></li></ul><p><strong>可维护性</strong></p><ul><li><p>将具有相同属性的样式抽离出来，提高 css 的可维护性。</p></li><li><p>样式与内容分离，将 css 代码定义到外部 css 中。</p></li></ul><h2 id="css-sprite" tabindex="-1">CSS Sprite <a class="header-anchor" href="#css-sprite" aria-hidden="true">#</a></h2><p><strong>精灵图</strong></p><ul><li>将一个页面涉及到的所有图片都包含到一张大图中去，然后利用 CSS 的 background-image，background-repeat，background-position 属性的组合进行背景定位。</li></ul><p><strong>精灵图优点</strong></p><ul><li>减少网页的 http请求，提高页面性能，这是<code>CSS Sprites</code>最大的优点。</li><li>减少图片的字节，把 3 张图片合并成 1 张图片的字节总是小于这 3 张图片的字节总和。</li></ul><p><strong>精灵图缺点</strong></p><ul><li>不利于维护，页面背景有少许改动时，就要改这张合并的图片。并且用户端需要重新下载整张大图，这就降低了浏览器缓存的优势。</li><li>随着 HTTP2 的逐渐普及，HTTP2 的多路复用机制可以解决请求多个小图片所创建多个 HTTP 请求的消耗，让 CSS Sprites 存在的价值降低。</li><li>图片如果放大，会失真。</li></ul><p><strong>代替方案</strong></p><ul><li>iconfont 字体图标</li><li>svg 矢量图</li></ul><h2 id="css-预处理器" tabindex="-1">CSS 预处理器 <a class="header-anchor" href="#css-预处理器" aria-hidden="true">#</a></h2><p><strong>预处理器</strong></p><ul><li><code>less</code>，<code>sass</code>，<code>stylus</code>，为<code>css</code>增加一些编程特性，无需考虑浏览器的兼容问题，可以在<code>CSS</code>中使用变量，简单的逻辑程序，函数等在编程语言中的一些基本的性能，可以让<code>css</code>更加的简洁，增加适应性以及可读性，可维护性等。</li></ul><p><strong>使用原因</strong></p><ul><li>结构清晰， 便于扩展。</li><li>可以很方便的屏蔽浏览器私有语法的差异。</li><li>可以轻松实现多重继承。</li><li>完美的兼容了<code>CSS</code>代码，可以应用到老项目中。</li></ul><h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td></td><td></td></tr><tr><td></td><td></td></tr><tr><td></td><td></td></tr><tr><td></td><td></td></tr><tr><td></td><td></td></tr><tr><td></td><td></td></tr></tbody></table>`,176),o=[t];function e(i,r,c,d,C,D){return n(),l("div",null,o)}const h=s(p,[["render",e]]);export{F as __pageData,h as default};
