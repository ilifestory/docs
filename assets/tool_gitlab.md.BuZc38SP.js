import{_ as a,c as s,o as e,a4 as n}from"./chunks/framework.CCJHkvW2.js";const g=JSON.parse('{"title":"docker 安装gitlab","description":"","frontmatter":{},"headers":[],"relativePath":"tool/gitlab.md","filePath":"tool/gitlab.md","lastUpdated":1715332530000}'),l={name:"tool/gitlab.md"},p=n(`<h1 id="docker-安装gitlab" tabindex="-1">docker 安装gitlab <a class="header-anchor" href="#docker-安装gitlab" aria-label="Permalink to &quot;docker 安装gitlab&quot;">​</a></h1><p>参考文献(<a href="https://blog.csdn.net/weixin_40918067/article/details/116894419" target="_blank" rel="noreferrer">https://blog.csdn.net/weixin_40918067/article/details/116894419</a>)</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>docker pull gitlab/gitlab-ce:latest</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>docker run -d --name gitlab --restart always --privileged  -p 18443:443 -p 1880:80 -p 1822:22 -v /etc/localtime:/etc/localtime:ro -v /docker/gitlab/config:/etc/gitlab -v /docker/gitlab/logs:/var/log/gitlab -v /docker/gitlab/data:/var/opt/gitlab gitlab/gitlab-ce</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>查看root密码</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>cat /etc/gitlab/initial_root_password</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="修改配置文件" tabindex="-1">修改配置文件 <a class="header-anchor" href="#修改配置文件" aria-label="Permalink to &quot;修改配置文件&quot;">​</a></h2><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>vim /docker/gitlab/config/gitlab.rb</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">修改如下</p><p>配置http协议所使用的访问地址,不加端口号默认为80</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>external_url &#39;http://192.168.6.21:1880&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>配置ssh协议所使用的访问地址和端口</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>gitlab_rails[&#39;gitlab_ssh_host&#39;] = &#39;192.168.6.21&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>此端口是run时22端口映射的1822端口</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>gitlab_rails[&#39;gitlab_shell_ssh_port&#39;] = 1822</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div><h2 id="修改端口" tabindex="-1">修改端口 <a class="header-anchor" href="#修改端口" aria-label="Permalink to &quot;修改端口&quot;">​</a></h2><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>vim  /etc/gitlab/gitlab.rb</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>nginx[&#39;listen_port&#39;] = 80</p></div><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>gitlab-ctl reconfigure</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>或</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>sudo gitlab-ctl reconfigure</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>先重启服务</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>gitlab-ctl restart</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="修改病毒" tabindex="-1">修改病毒 <a class="header-anchor" href="#修改病毒" aria-label="Permalink to &quot;修改病毒&quot;">​</a></h2><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>crontab -e</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>*/1 * * * * sh /shs/kill_rcu_bj.sh</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>systemctl reload crond.service</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>sh的脚本</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#BABED8;">step</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">2</span><span style="color:#676E95;font-style:italic;"> #间隔的秒数，不能大于60</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#89DDFF;"> ((</span><span style="color:#BABED8;"> i </span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;"> 0</span><span style="color:#89DDFF;">;</span><span style="color:#BABED8;"> i </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F78C6C;"> 60</span><span style="color:#89DDFF;">;</span><span style="color:#BABED8;"> i</span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;">(i</span><span style="color:#89DDFF;">+</span><span style="color:#BABED8;">step</span><span style="color:#89DDFF;">) )</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">;</span><span style="color:#89DDFF;font-style:italic;"> do</span><span style="color:#BABED8;">  </span></span>
<span class="line"><span style="color:#FFCB6B;">killall</span><span style="color:#C3E88D;"> -9</span><span style="color:#C3E88D;"> rcu_bj</span></span>
<span class="line"><span style="color:#FFCB6B;">sleep</span><span style="color:#BABED8;"> $step  </span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">done</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">exit</span><span style="color:#F78C6C;"> 0</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>`,23),i=[p];function t(r,o,c,d,b,u){return e(),s("div",null,i)}const h=a(l,[["render",t]]);export{g as __pageData,h as default};
