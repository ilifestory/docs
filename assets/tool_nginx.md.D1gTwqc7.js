import{_ as e,c as n,o as a,a4 as s}from"./chunks/framework.CCJHkvW2.js";const g=JSON.parse('{"title":"docker安裝nginx","description":"","frontmatter":{},"headers":[],"relativePath":"tool/nginx.md","filePath":"tool/nginx.md","lastUpdated":1707190539000}'),t={name:"tool/nginx.md"},i=s('<h1 id="docker安裝nginx" tabindex="-1">docker安裝nginx <a class="header-anchor" href="#docker安裝nginx" aria-label="Permalink to &quot;docker安裝nginx&quot;">​</a></h1><p>第一步</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>docker pull nginx</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>第二步 启动nginx</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>docker run --name nginx -p 80:80 -p 81:81 -p 82:82 -d nginx</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>',5),o=[i];function r(p,l,c,d,_,m){return a(),n("div",null,o)}const h=e(t,[["render",r]]);export{g as __pageData,h as default};