import{_ as a,c as n,o as t,a4 as e}from"./chunks/framework.CCJHkvW2.js";const b=JSON.parse('{"title":"求极限方法总结","description":"","frontmatter":{},"headers":[],"relativePath":"高数/积分/求积分方法总结.md","filePath":"高数/积分/求积分方法总结.md","lastUpdated":1708482714000}'),x={name:"高数/积分/求积分方法总结.md"},o=e(`<h1 id="求极限方法总结" tabindex="-1">求极限方法总结 <a class="header-anchor" href="#求极限方法总结" aria-label="Permalink to &quot;求极限方法总结&quot;">​</a></h1><h2 id="一-基本公式" tabindex="-1">一 基本公式 <a class="header-anchor" href="#一-基本公式" aria-label="Permalink to &quot;一 基本公式&quot;">​</a></h2><pre><code>∫1/cosxdx = ln|1/cosx + tanx| + C

∫1/cos²xdx = tanx + C

∫1/(a*cos²x+sin²x)dx = ∫1/(cos²x(a+tan²x)) = ∫1/(a+tan²x)dtan²x

∫1/cos³xdx = 

∫1/(a²+x²)dx = (1/a)*arctan(x/a) + C

∫1/(a²-x²)¹ᶪ²dx = arcsin(x/a) + C

∫1/(x²±a²)¹ᶪ²dx = ln|x±(x²±a²)¹ᶪ²| + C

∫1/(1+cosx)dx = ∫1/(1+2cox²(x/2)-1) = ∫1/2cox²(x/2) = 2tan(x/2) + C

∫1/(1+a*cos²x)dx = ∫1/(sin²x+(a+1)cos²x)dx = ∫1/(cos²x(tan²x+(a+1)))dx
                 = ∫1/(tan²x+(a+1))dtan²x = (a+1)¹ᶪ²arctan(tanx/(a+1)¹ᶪ²)

∫1/(sinx+cosx)²dx = ∫1/(sin²x+cos²x+sin2x)dx = ∫1/(1+cos(2x-∏/2))dx 
                  = ∫1/(1+(cos²(x-∏/4)-1))dx = ∫1/(cos²(x-∏/4))dx
                  = tan(x-∏/4) + C

∫1/(sinx-cosx)²dx = (令x=∏-t) -∫1/(sint+cost)²dt
                  = -∫1/(sin²t+cos²t+sin2t)dt = -∫1/(1+cos(2t-∏/2))dt 
                  = -∫1/(1+(cos²(t-∏/4)-1))dt = -∫1/(cos²(t-∏/4))dt
                  = -tan(t-∏/4) + C
</code></pre><h2 id="二-凑微分" tabindex="-1">二 凑微分 <a class="header-anchor" href="#二-凑微分" aria-label="Permalink to &quot;二 凑微分&quot;">​</a></h2><pre><code>∫arctanx¹ᶪ²/(x³+2x²+x)¹ᶪ²dx = ∫arctanx¹ᶪ²/(x(1+x)²)¹ᶪ²dx + C = ∫arctanx¹ᶪ²d2*arctanx¹ᶪ²

∫arcsinx¹ᶪ²/(x(1-x))¹ᶪ²dx = ∫arctanx¹ᶪ²d2*arcsinx¹ᶪ²dx
</code></pre><h2 id="三-换元" tabindex="-1">三 换元 <a class="header-anchor" href="#三-换元" aria-label="Permalink to &quot;三 换元&quot;">​</a></h2><h2 id="四-分步积分法" tabindex="-1">四 分步积分法 <a class="header-anchor" href="#四-分步积分法" aria-label="Permalink to &quot;四 分步积分法&quot;">​</a></h2><h2 id="五-有理函数积分" tabindex="-1">五 有理函数积分 <a class="header-anchor" href="#五-有理函数积分" aria-label="Permalink to &quot;五 有理函数积分&quot;">​</a></h2><h2 id="六-区间再现-积分再现" tabindex="-1">六 区间再现/积分再现 <a class="header-anchor" href="#六-区间再现-积分再现" aria-label="Permalink to &quot;六 区间再现/积分再现&quot;">​</a></h2><h2 id="七-奇偶性周期性" tabindex="-1">七 奇偶性周期性 <a class="header-anchor" href="#七-奇偶性周期性" aria-label="Permalink to &quot;七 奇偶性周期性&quot;">​</a></h2><h2 id="八-点火公式" tabindex="-1">八 点火公式 <a class="header-anchor" href="#八-点火公式" aria-label="Permalink to &quot;八 点火公式&quot;">​</a></h2>`,11),r=[o];function d(c,s,i,h,l,_){return t(),n("div",null,r)}const m=a(x,[["render",d]]);export{b as __pageData,m as default};
