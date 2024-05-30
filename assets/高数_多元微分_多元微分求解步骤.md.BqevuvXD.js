import{_ as e,c as a,o as t,a4 as n,eW as r}from"./chunks/framework.CCJHkvW2.js";const y=JSON.parse('{"title":"多元微分求解步骤","description":"","frontmatter":{},"headers":[],"relativePath":"高数/多元微分/多元微分求解步骤.md","filePath":"高数/多元微分/多元微分求解步骤.md","lastUpdated":1708482714000}'),o={name:"高数/多元微分/多元微分求解步骤.md"},x=n('<h1 id="多元微分求解步骤" tabindex="-1">多元微分求解步骤 <a class="header-anchor" href="#多元微分求解步骤" aria-label="Permalink to &quot;多元微分求解步骤&quot;">​</a></h1><p><img src="'+r+`" alt="An image"></p><h2 id="_1求偏导数∂f-∂x-0-0" tabindex="-1">①求偏导数∂f/∂x|₍₀,₀₎ <a class="header-anchor" href="#_1求偏导数∂f-∂x-0-0" aria-label="Permalink to &quot;①求偏导数∂f/∂x|₍₀,₀₎&quot;">​</a></h2><pre><code>∂f/∂x|₍₀,₀₎ = lim₍ₓ-&gt;₀₎(f(x,0)-f(0,0)/x)

           = lim₍ₓ-&gt;₀₎(x-0/x)

           = lim(x/x) = 1
</code></pre><h2 id="_2-求偏导函数∂f-∂x" tabindex="-1">② 求偏导函数∂f/∂x <a class="header-anchor" href="#_2-求偏导函数∂f-∂x" aria-label="Permalink to &quot;② 求偏导函数∂f/∂x&quot;">​</a></h2><pre><code>当 x≠0且y≠0,∂f/∂x = (xy)&#39;₍ₓ₎ = y

当 y=0,∂f/∂x = (x)&#39;₍ₓ₎ = 1

当 x=0,∂f/∂x = (y)&#39;₍ₓ₎ = 0
</code></pre><h2 id="_3-求偏导数∂2f-∂x∂y-0-0" tabindex="-1">③ 求偏导数∂²f/∂x∂y|₍₀,₀₎ <a class="header-anchor" href="#_3-求偏导数∂2f-∂x∂y-0-0" aria-label="Permalink to &quot;③ 求偏导数∂²f/∂x∂y|₍₀,₀₎&quot;">​</a></h2><pre><code>∂²f/∂x∂y|₍₀,₀₎ = lim₍ᵧ-&gt;₀₎(f&#39;ₓ(0,y) - f&#39;ₓ(0,0)/y)

              = lim₍ᵧ-&gt;₀₎(0-1/y)

              = 不存在
</code></pre><h2 id="_4-求偏导函数∂2f-∂x∂y" tabindex="-1">④ 求偏导函数∂²f/∂x∂y <a class="header-anchor" href="#_4-求偏导函数∂2f-∂x∂y" aria-label="Permalink to &quot;④ 求偏导函数∂²f/∂x∂y&quot;">​</a></h2><pre><code>当 x≠0且y≠0,∂f²/∂x∂y = (y)&#39;₍ᵧ₎ = 1

当 y=0,∂f²/∂x∂y = (x)&#39;₍ᵧ₎ = 0

当 x=0,∂f²/∂x∂y = (0)&#39;₍ᵧ₎ = 0
</code></pre>`,10),_=[x];function f(i,c,d,l,s,h){return t(),a("div",null,_)}const m=e(o,[["render",f]]);export{y as __pageData,m as default};
