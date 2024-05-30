import{_ as n,c as a,o as s,a4 as e}from"./chunks/framework.CCJHkvW2.js";const _=JSON.parse('{"title":"nginx 配置","description":"","frontmatter":{},"headers":[],"relativePath":"deployment/nginx/config.md","filePath":"deployment/nginx/config.md","lastUpdated":1710736177000}'),t={name:"deployment/nginx/config.md"},p=e(`<h1 id="nginx-配置" tabindex="-1">nginx 配置 <a class="header-anchor" href="#nginx-配置" aria-label="Permalink to &quot;nginx 配置&quot;">​</a></h1><table><thead><tr><th><strong>符号</strong></th><th><strong>说明</strong></th></tr></thead><tbody><tr><td>location <code>= /uri</code></td><td><code>=</code> 开头表示精确匹配，只有完全匹配上才能生效</td></tr><tr><td>location <code>^~ /uri</code></td><td><code>^~</code> 开头对 URL 路径进行前缀匹配，并且在正则之前</td></tr><tr><td>location <code>~ pattern</code></td><td><code>~</code> 开头表示区分大小写的正则匹配</td></tr><tr><td>location <code>/uri</code></td><td>不带任何修饰符，也表示前缀匹配，但是在正则匹配之后，如果没有正则命中，命中最长的规则</td></tr><tr><td>location <code>/</code></td><td>通用匹配，任何未匹配到其它 location 的请求都会匹配到，相当于 switch 中的 default</td></tr></tbody></table><div class="language-text line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>= 表示精确匹配</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>^~ 表示uri以某个常规字符串开头,大多情况下用来匹配url路径，nginx不对url做编码，因此请求为/static/20%/aa，可以被规则^~ /static/ /aa匹配到（注意是空格，即所见即所得）。</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>~ 正则匹配(区分大小写)</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>~* 正则匹配(不区分大小写)</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>!~ 和 !~*  分别为区分大小写不匹配及不区分大小写不匹配 的正则</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>/ 任何请求都会匹配</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>`,3),l=[p];function c(i,r,o,d,b,u){return s(),a("div",null,l)}const g=n(t,[["render",c]]);export{_ as __pageData,g as default};
