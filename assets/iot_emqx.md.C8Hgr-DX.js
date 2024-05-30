import{_ as e,c as a,o as t,a4 as o}from"./chunks/framework.CCJHkvW2.js";const q=JSON.parse('{"title":"EMQX","description":"","frontmatter":{},"headers":[],"relativePath":"iot/emqx.md","filePath":"iot/emqx.md","lastUpdated":1708482714000}'),r={name:"iot/emqx.md"},s=o(`<h1 id="emqx" tabindex="-1">EMQX <a class="header-anchor" href="#emqx" aria-label="Permalink to &quot;EMQX&quot;">​</a></h1><h2 id="修改dashbord账号密码" tabindex="-1">修改Dashbord账号密码 <a class="header-anchor" href="#修改dashbord账号密码" aria-label="Permalink to &quot;修改Dashbord账号密码&quot;">​</a></h2><p>进入容器</p><pre><code>emqx_ctl admins passwd 账号 密码
</code></pre><h2 id="连接参数" tabindex="-1">连接参数 <a class="header-anchor" href="#连接参数" aria-label="Permalink to &quot;连接参数&quot;">​</a></h2><h2 id="保活周期-keep-alive" tabindex="-1">保活周期（Keep Alive） <a class="header-anchor" href="#保活周期-keep-alive" aria-label="Permalink to &quot;保活周期（Keep Alive）&quot;">​</a></h2><p>保活周期，是一个以秒为单位的时间间隔。客户端在无报文发送时，将按 Keep Alive 设定的值定时向服务端发送心跳报文，确保连接不被服务端断开。</p><p>在连接建立成功后，如果服务器没有在 Keep Alive 的 1.5 倍时间内收到来自客户端的任何包，则会认为和客户端之间的连接出现了问题，此时服务器便会断开和客户端的连接。</p><p><a href="https://www.emqx.com/zh/blog/mqtt-keep-alive" target="_blank" rel="noreferrer">更多细节可查看博客：MQTT 协议中的 Keep Alive 机制</a></p><h2 id="清除会话-clean-session" tabindex="-1">清除会话（Clean Session） <a class="header-anchor" href="#清除会话-clean-session" aria-label="Permalink to &quot;清除会话（Clean Session）&quot;">​</a></h2><p>为 false 时表示创建一个持久会话，在客户端断开连接时，会话仍然保持并保存离线消息，直到会话超时注销。为 true 时表示创建一个新的临时会话，在客户端断开时，会话自动销毁。</p><p>持久会话避免了客户端掉线重连后消息的丢失，并且免去了客户端连接后重复的订阅开销。这一功能在带宽小，网络不稳定的物联网场景中非常实用。</p><p>服务器为持久会话保存的消息数量取决于服务器的配置，比如 EMQ 提供的免费的公共 MQTT 服务器设置的离线消息保存时间为 5 分钟，最大消息数为 1000 条，且不保存 QoS 0 消息。</p><div class="tip custom-block"><p class="custom-block-title">注意</p><p>持久会话恢复的前提是客户端使用固定的 Client ID 再次连接，如果 Client ID 是动态的，那么连接成功后将会创建一个新的持久会话。</p></div>`,14),i=[s];function l(n,p,d,c,h,_){return t(),a("div",null,i)}const b=e(r,[["render",l]]);export{q as __pageData,b as default};