import{_ as e,c as n,o as a,a4 as t}from"./chunks/framework.CCJHkvW2.js";const f=JSON.parse('{"title":"求极限方法总结","description":"","frontmatter":{},"headers":[],"relativePath":"高数/极限/求极限方法总结.md","filePath":"高数/极限/求极限方法总结.md","lastUpdated":1708482714000}'),x={name:"高数/极限/求极限方法总结.md"},r=t(`<h1 id="求极限方法总结" tabindex="-1">求极限方法总结 <a class="header-anchor" href="#求极限方法总结" aria-label="Permalink to &quot;求极限方法总结&quot;">​</a></h1><h2 id="一-化简-等价无穷小替换" tabindex="-1">一 化简+等价无穷小替换 <a class="header-anchor" href="#一-化简-等价无穷小替换" aria-label="Permalink to &quot;一 化简+等价无穷小替换&quot;">​</a></h2><pre><code>求 (x⁽¹⁺ᕽ⁾/(1+x)ᕽ)-e⁻¹x

(x⁽¹⁺ᕽ⁾/(1+x)ᕽ)-e⁻¹x = x(xᕽ/(1+x)ᕽ)-e⁻¹

                   = x(x/1+x)ᕽ-e⁻¹

令 x = 1/t

x(xᕽ/(1+x)ᕽ)-e⁻¹ = (1/t)(Exp{(1/t)*ln(1/(1+t))}-e⁻¹) 

                = (1/t)(e⁻¹)*(Exp{(1/t)*ln(1/(1+t))+1}-1) 

                = (1/t)(e⁻¹)*(Exp{(1/t)*ln(1/(1+t))+1}-1) 
</code></pre><h2 id="二-泰勒公式-洛必达法则" tabindex="-1">二 泰勒公式+洛必达法则 <a class="header-anchor" href="#二-泰勒公式-洛必达法则" aria-label="Permalink to &quot;二 泰勒公式+洛必达法则&quot;">​</a></h2><pre><code>lim(x-&gt;0) (e⁽ᵗᵃⁿᵡ-ᵡ⁾-1)/x³ 

            = lim(x-&gt;0)(tanx-x)/x³ 

            = 1/6
</code></pre><h2 id="三-导数定义-拉格朗日" tabindex="-1">三 导数定义+拉格朗日 <a class="header-anchor" href="#三-导数定义-拉格朗日" aria-label="Permalink to &quot;三 导数定义+拉格朗日&quot;">​</a></h2><pre><code>①求 lim(x-&gt;∞) x²(arctan(x+1)-arctanx)

    原式 = lim(x-&gt;∞) x²(arctan(x+1)-arctanx)/((x+1)-x)

        = lim(x-&gt;∞) x²(arctanx)&#39; 
    
        = lim(x-&gt;∞) x²/(1+x²) = 1

②f&#39;(1) = -1 求 lim(x-&gt;0) {f(eᕽ²)-3f(1+sin²x)}/x²

    显然 f(1) = 0

    原式 = lim(x-&gt;0) {f(eᕽ²)-3f(1+sin²x)}/x²


        = lim(x-&gt;0) {[f(eᕽ²)-f(1)]*(eᕽ²-1)/(eᕽ²-1)}/x² - {[3f(1+sin²x)-3f(0)]*(1+sin²x)/(1+sin²x)}/x²


        = lim(x-&gt;0) f&#39;(1)(eᕽ²-1)/x² - 3f&#39;(1)(1+sin²x)/x²


        = f&#39;(1)*1 - 3f&#39;(1)*1 = 2
</code></pre><h2 id="四-∫01定积分" tabindex="-1">四 ∫₀¹定积分 <a class="header-anchor" href="#四-∫01定积分" aria-label="Permalink to &quot;四 ∫₀¹定积分&quot;">​</a></h2><pre><code>lim(n-&gt;∞) ∑(i=1-&gt;n) (i/n²)ln(1+i/n)
</code></pre><h2 id="五-单调有界性" tabindex="-1">五 单调有界性 <a class="header-anchor" href="#五-单调有界性" aria-label="Permalink to &quot;五 单调有界性&quot;">​</a></h2><pre><code>xₙeˣₙ⁺¹ = eˣⁿ - 1 ，x₁&gt;0 求 lim(x-&gt;∞)xₙ

eˣₙ⁺¹ = (eˣⁿ - 1)/xₙ  #拉格朗日
      
     = eᵋ (0&lt;ξ&lt;xₙ)

ξ = xₙ₊₁ 及 0&lt;xₙ₊₁&lt;xₙ

∵eˣⁿ &gt; 0 ∴lim(x-&gt;∞)xₙ存在

令lim(x-&gt;∞)xₙ = a 则 a * eᵃ = eᵃ -1 =&gt; a = 0
</code></pre><h2 id="六-夹逼准则" tabindex="-1">六 夹逼准则 <a class="header-anchor" href="#六-夹逼准则" aria-label="Permalink to &quot;六 夹逼准则&quot;">​</a></h2>`,12),i=[r];function l(o,c,d,s,h,_){return a(),n("div",null,i)}const p=e(x,[["render",l]]);export{f as __pageData,p as default};
