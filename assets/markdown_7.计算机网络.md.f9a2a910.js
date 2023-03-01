import{_ as l,c as i,o as t,a as p}from"./app.3074115f.js";const g=JSON.parse('{"title":"网络协议","description":"","frontmatter":{},"headers":[{"level":2,"title":"IP","slug":"ip","link":"#ip","children":[]},{"level":2,"title":"UDP","slug":"udp","link":"#udp","children":[]},{"level":2,"title":"TCP","slug":"tcp","link":"#tcp","children":[]},{"level":2,"title":"HTTP","slug":"http","link":"#http","children":[]},{"level":2,"title":"HTTPS","slug":"https","link":"#https","children":[]},{"level":2,"title":"WebSocket","slug":"websocket","link":"#websocket","children":[]}],"relativePath":"markdown/7.计算机网络.md"}'),e={name:"markdown/7.计算机网络.md"},r=p('<h1 id="网络协议" tabindex="-1">网络协议 <a class="header-anchor" href="#网络协议" aria-hidden="true">#</a></h1><h2 id="ip" tabindex="-1"><strong>IP</strong> <a class="header-anchor" href="#ip" aria-hidden="true">#</a></h2><ul><li><p>IP 是网络层的协议，只负责把数据包送达目的主机。</p></li><li><p>交给对方电脑中的具体哪个应用，就需要 UDP 或 TCP 协议了。</p></li></ul><h2 id="udp" tabindex="-1"><strong>UDP</strong> <a class="header-anchor" href="#udp" aria-hidden="true">#</a></h2><ul><li>UDP 是传输层的协议，数据传输快但不可靠，传输过程中出错的数据包会丢失。</li><li>主要应用于在线视频、互动游戏等关注速度、不要求数据完整性的应用。</li></ul><h2 id="tcp" tabindex="-1"><strong>TCP</strong> <a class="header-anchor" href="#tcp" aria-hidden="true">#</a></h2><ul><li><p>TCP 是基于 IP 的传输层协议，应用于浏览器请求，邮件等要求数据传输可靠性的应用。</p></li><li><p>重传机制：速度传输慢但是对于传输过程中丢失的数据包，提供重传机制。</p></li><li><p>排序机制：用来保证把乱序的数据包组合成一个完整的文件。</p></li><li><p>三次握手：连接的发起 + 双方的确认。</p></li><li><p>四次挥手：客气挽留，确保数据的完整性。</p></li></ul><h2 id="http" tabindex="-1">HTTP <a class="header-anchor" href="#http" aria-hidden="true">#</a></h2><p><strong>HTTP</strong></p><ul><li>HTTP 是应用层的超文本传输协议，它定义了客户端和服务器之间交换报文的格式和方式，默认使用 80 端口。它使用 TCP 作为传输层协议，保证了数据传输的可靠性。</li><li>HTTP 支持客户端/服务器模式，客户端向服务器请求服务时，只需传送请求方法和路径。通信速度很快，每次连接只处理一个请求。服务器处理完客户的请求，并收到客户的应答后，即断开连接，采用这种方式可以节省传输时间。</li><li>HTTP 协议中的报文使用的是文本形式，直接暴露给外界，不安全。</li></ul><p><strong>协议格式</strong></p><ul><li><p><strong>请求报⽂有 4 部分组成</strong></p><ul><li>请求⾏：包含了请求⽅法、URL、HTTP 协议版本，它们之间⽤空格进行分隔。</li><li>请求头：请求头由键值对组成，每⾏⼀对，键值之间⽤英⽂冒号<code>:</code>进行分隔。</li><li>空⾏</li><li>请求体：请求体中放置 POST、PUT、PATCH 等请求方法所需要携带的数据。</li></ul></li><li><p><strong>响应报⽂有 4 部分组成</strong></p><ul><li><p>响应⾏：响应行由协议版本、状态码、状态码的原因短语 3 个内容组成，中间以空格分隔。</p></li><li><p>响应头：响应头由键值对组成，每⾏⼀对，键值之间⽤英⽂冒号<code>:</code>进行分隔。</p></li><li><p>空⾏</p></li><li><p>响应体：服务器响应的数据</p></li></ul></li></ul><p><strong>状态码</strong></p><ul><li>1xx：服务器收到请求，临时回应。</li><li>2xx：请求成功。 <ul><li>200：请求成功。</li></ul></li><li>3xx: 重定向。 <ul><li>301：永久性重定向，表示当前资源已经被转移，配合location，浏览器自动处理。</li><li>302：临时性重定向，表示当前资源已经被转移，配合location，浏览器自动处理。</li><li>304：所请求的资源未修改，服务器返回此状态码时，不会返回任何资源。</li></ul></li><li>4xx：客户端请求错误。 <ul><li>400：请求参数有语法错误，不能被服务器理解。</li><li>401：没登录，鉴权失败。</li><li>403：无权限。禁止访问，服务器收到请求，但是拒绝提供服务。</li><li>404：表示请求的资源不存在。</li></ul></li><li>5xx：服务端响应错误。 <ul><li>500：服务端错误。</li><li>502：网关错误。</li><li>503：由于超载，请求超时或停机维护，服务器目前无法使用，一段时间后可恢复正常，服务端暂时性错误，可以一会再试。</li></ul></li></ul><p><strong>请求方法</strong></p><ul><li><p>GET：向服务器获取数据。</p></li><li><p>POST：发送数据给服务器。</p></li><li><p>PUT：⽤于全量修改⽬标资源，看接口，也可以用于添加。</p></li></ul><ul><li>PATCH：用于对资源进行部分修改。</li></ul><ul><li>DELETE：⽤于删除指定的资源。</li></ul><p><strong>传递参数</strong></p><ul><li>GET、DELETE 参数是在地址栏中传递的。</li></ul><ul><li>PUT、PATCH、POST 参数是在请求体传递的。</li></ul><p><strong>GET 和 POST 请求的区别</strong></p><ul><li>应用场景 <ul><li>GET 方法用于对服务器资源不会产生影响的场景，比如说请求一个网页的资源。</li><li>POST 方法用于对服务器资源会产生影响的情景，比如注册用户这一类的操作。</li></ul></li><li>是否缓存 <ul><li>浏览器一般会对 GET 请求缓存</li><li>浏览器很少对 POST 请求缓存</li></ul></li><li>数据传输⽅式 <ul><li>GET 方法通过 URL 传输数据 （地址栏拼接参数），浏览器由于对 url 长度的限制，所以会影响 GET 请求发送数据时的长度。</li><li>POST 方法通过请求体传输，支持更多的数据类型。</li></ul></li><li>数据安全 <ul><li>GET 方法数据暴露在 URL 中，可通过浏览历史记录、缓存等很容易查到数据信息。</li><li>POST 方法数据因为在请求主体内，所以有⼀定的安全性保证。</li></ul></li><li>重复提交表单 <ul><li>GET 方法刷新、后退等浏览器操作都不会重新提交表单。</li><li>POST 方法可能会引起重复提交表单。</li></ul></li></ul><p><strong>POST 和 PUT 请求的区别</strong></p><ul><li><p>PUT 请求是向服务器端发送数据，从而修改数据的内容，但是不会增加数据的种类，可以理解为时<strong>更新数据</strong>。</p></li><li><p>POST 请求是向服务器端发送数据，它会创建新的内容，会改变数据的种类等资源。可以理解为是<strong>创建数据</strong>。</p></li></ul><p><strong>HTTP 缓存</strong></p><ul><li>命中强缓存后不会发送请求，没有命中强缓存后走协商缓存。</li></ul><h2 id="https" tabindex="-1">HTTPS <a class="header-anchor" href="#https" aria-hidden="true">#</a></h2><p><strong>https</strong></p><ul><li>http 是明文传输，不安全，HTTPS 是安全版的 HTTP。</li><li>HTTPS 在传输数据的过程中会对数据进行加密处理，保证安全性。</li><li>加密算法可以分为<code>对称加密算法</code>和<code>非对称加密算法</code>。</li><li>HTTPS 先用<code>非对称加密</code>, 传递对称加密的密钥，保证了密钥传输的安全。</li><li>后续使用<code>对称加密</code>, 进行数据传输，保证了传输数据安全。</li></ul><p><strong>对称加密</strong></p><ul><li>加密和解密使用相同的密钥。 <ul><li>秘钥是存放到服务器端的</li><li>首先浏览器端需要向服务器端请求到秘钥。</li><li>浏览器向服务器发送内容时，使用这个秘钥，将明文加密成密文。</li><li>服务器端收到浏览器发送过来的密文，使用相同的秘钥解密，拿到明文内容。</li></ul></li></ul><ul><li><p>优点：计算量小、加密速度快、加密效率高。</p></li><li><p>缺点：秘钥在传输的过程中可以被窃取到，一旦秘钥被窃取，整个加密过程就没有意义了。</p></li></ul><p><strong>非对称加密</strong></p><ul><li>非对称加密：通信的双方使用不同的秘钥进行加密和解密，即秘钥对（公钥 + 私钥），用公钥加密，用私钥解密。 <ul><li>公钥和私钥都是存放到服务器端的</li><li>首先浏览器端需要向服务器端请求到公钥。</li><li>浏览器向服务器发送内容时，使用这个公钥，将明文加密成密文。</li><li>服务器端收到浏览器发送过来的密文，使用私钥解密，拿到明文内容。</li></ul></li></ul><ul><li><p>优点：非对称加密与对称加密相比其安全性更好</p></li><li><p>缺点：</p><ul><li>加密和解密花费时间长、速度慢，只适合对少量数据进行加密。</li><li>用于解密的私钥虽然不能被窃取，但是在网络中传输的公钥能被篡改，也会使加密过程失效。</li></ul></li></ul><p><strong>对称加密 + 非对称加密</strong></p><ul><li><p>结合对称加密和非对称加密的特点，https 实际采用的是两者相结合的方式。</p></li><li><p>使用对称加密 + 非对称加密的数据传输过程：</p><ul><li>浏览器中存放对称加密的秘钥 A，服务器存放非对称加密的公钥 B 和私钥 B’</li><li>浏览器发送请求，向服务器端获取非对称加密的公钥 B。</li><li>浏览器使用公钥 B，将浏览器中的秘钥 A 加密后传给服务器。</li><li>服务器拿到后，用私钥 B’ 解密得到密钥 A。</li><li>这样双方就都拥有密钥 A 了，且别人无法知道它。之后双方所有数据都通过密钥 A 加密解密即可。</li></ul></li></ul><p><strong>数字证书</strong></p><ul><li><p>网站在使用HTTPS前，需要向<strong>CA机构</strong>申领一份<strong>数字证书</strong>，数字证书里含有证书持有者信息（该网站的信息）、公钥信息等。</p></li><li><p>服务器把证书传输给浏览器，浏览器从证书里获取公钥就行了，证书就如身份证，证明“该公钥对应该网站”。</p></li></ul><p><strong>数字签名</strong></p><ul><li>我们把证书原本的内容生成一份“签名”，比对证书内容和签名是否一致就能判别是否被篡改。这就是数字证书的“防伪技术”，这里的“签名”就叫<code>数字签名</code>。</li></ul><p><strong>浏览器验证过程</strong></p><ul><li>拿到证书，得到明文 T，签名 S。</li><li>用 CA 机构的公钥对 S 解密（由于 CA 是浏览器信任的机构，所以浏览器保有它的公钥），得到S’。</li><li>用证书里指明的 hash 算法对明文 T 进行 hash 得到 T’。</li><li>显然通过以上步骤，T’应当等于S‘，除非明文或签名被篡改。所以此时比较S’是否等于T’，等于则表明证书可信。</li></ul><h2 id="websocket" tabindex="-1">WebSocket <a class="header-anchor" href="#websocket" aria-hidden="true">#</a></h2><p><strong>即时通讯需求</strong></p><ul><li>HTTP 协议只能做到客户端请求服务器，服务器做出响应，做不到让服务器主动给客户端推送消息。</li><li>即时通信需求: 服务器数据一有更新, 希望推送给到浏览器。</li></ul><p><strong>WebSocket</strong></p><ul><li><p>这是基于 TCP 协议的全新、独⽴的协议，作⽤是在服务器和客户端之间建⽴实时的双向通信。</p></li><li><p>WebSocket 协议与 HTTP 协议保持兼容，但它不会融⼊ HTTP 协议，仅作为 HTML 5 的⼀部分。</p></li></ul><ul><li><p>优点：真正意义上的双向实时通信，性能好、延迟低。</p></li><li><p>缺点：由于是独⽴于 HTTP 的协议，因此要使用的话需要对项⽬作改造，使⽤复杂度会⾼一些，通常需要引⼊成熟的库 (如: Socket-io )，并且⽆法兼容低版本的浏览器。</p></li></ul>',50),o=[r];function n(s,u,T,a,d,c){return t(),i("div",null,o)}const P=l(e,[["render",n]]);export{g as __pageData,P as default};
