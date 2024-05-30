import{_ as s,c as a,o as n,a4 as e}from"./chunks/framework.CCJHkvW2.js";const y=JSON.parse('{"title":"docker常用指令","description":"","frontmatter":{},"headers":[],"relativePath":"deployment/docker/docker常用指令.md","filePath":"deployment/docker/docker常用指令.md","lastUpdated":1709263990000}'),l={name:"deployment/docker/docker常用指令.md"},o=e(`<h1 id="docker常用指令" tabindex="-1">docker常用指令 <a class="header-anchor" href="#docker常用指令" aria-label="Permalink to &quot;docker常用指令&quot;">​</a></h1><h2 id="修改-restart-属性" tabindex="-1">修改 restart 属性 <a class="header-anchor" href="#修改-restart-属性" aria-label="Permalink to &quot;修改 restart 属性&quot;">​</a></h2><p>docker update --restart=always 容器名称|容器ID</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#C3E88D;"> update</span><span style="color:#C3E88D;"> --restart=always</span><span style="color:#C3E88D;"> xxx</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#C3E88D;"> update</span><span style="color:#C3E88D;"> --restart=no</span><span style="color:#C3E88D;"> xxx</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="修改配置文件-需停止docker服务" tabindex="-1">修改配置文件（需停止docker服务） <a class="header-anchor" href="#修改配置文件-需停止docker服务" aria-label="Permalink to &quot;修改配置文件（需停止docker服务）&quot;">​</a></h2><p>1、停止docker服务</p><div class="warning custom-block"><p class="custom-block-title">关键</p><p>修改之前必须停止docker服务</p></div><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">systemctl</span><span style="color:#C3E88D;"> stop</span><span style="color:#C3E88D;"> docker.service</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>2、修改配置文件, 目录位置如下，然后保存退出</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">vim</span><span style="color:#C3E88D;"> /var/lib/docker/containers/container-ID/config.v2.json</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  &quot;</span><span style="color:#C792EA;">MountPoints</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#89DDFF;">    &quot;</span><span style="color:#FFCB6B;">/home</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#89DDFF;">      &quot;</span><span style="color:#F78C6C;">Source</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">/docker</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">      &quot;</span><span style="color:#F78C6C;">Destination</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">/home</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">      &quot;</span><span style="color:#F78C6C;">RW</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> true,</span></span>
<span class="line"><span style="color:#89DDFF;">      &quot;</span><span style="color:#F78C6C;">Name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">      &quot;</span><span style="color:#F78C6C;">Driver</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">      &quot;</span><span style="color:#F78C6C;">Type</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">bind</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">      &quot;</span><span style="color:#F78C6C;">Propagation</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">rprivate</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">      &quot;</span><span style="color:#F78C6C;">Spec</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#89DDFF;">        &quot;</span><span style="color:#F07178;">Type</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">bind</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">        &quot;</span><span style="color:#F07178;">Source</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">//docker/</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">        &quot;</span><span style="color:#F07178;">Target</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">/home</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">      }</span></span>
<span class="line"><span style="color:#89DDFF;">    }</span></span>
<span class="line"><span style="color:#89DDFF;">  }</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="查看容器详情" tabindex="-1">查看容器详情 <a class="header-anchor" href="#查看容器详情" aria-label="Permalink to &quot;查看容器详情&quot;">​</a></h2><p>docker inspect 容器名称|容器ID</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#C3E88D;"> inspect</span><span style="color:#C3E88D;"> xxx</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="创建docker-网络" tabindex="-1">创建docker 网络 <a class="header-anchor" href="#创建docker-网络" aria-label="Permalink to &quot;创建docker 网络&quot;">​</a></h2><p>docker network create --subnet=[ip范围] [网络驱动名]</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#C3E88D;"> docker</span><span style="color:#C3E88D;"> network</span><span style="color:#C3E88D;"> create</span><span style="color:#C3E88D;"> --subnet=172.172.172.0/24</span><span style="color:#C3E88D;"> zentaonet</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="docker-run-设置log文件数量和大小" tabindex="-1">docker run 设置log文件数量和大小 <a class="header-anchor" href="#docker-run-设置log文件数量和大小" aria-label="Permalink to &quot;docker run 设置log文件数量和大小&quot;">​</a></h2><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>--log-opt max-size=10m --log-opt max-file=5</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="清除docker-log日志" tabindex="-1">清除docker log日志 <a class="header-anchor" href="#清除docker-log日志" aria-label="Permalink to &quot;清除docker log日志&quot;">​</a></h2><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">truncate</span><span style="color:#C3E88D;"> -s</span><span style="color:#F78C6C;"> 0</span><span style="color:#C3E88D;"> /var/lib/docker/containers/下的容器里/容器.log</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="全局范围内设置日志大小" tabindex="-1">全局范围内设置日志大小 <a class="header-anchor" href="#全局范围内设置日志大小" aria-label="Permalink to &quot;全局范围内设置日志大小&quot;">​</a></h2><p>修改docker <code>daemon.json</code>文件，配置日志文件参数</p><p>默认 /etc/docker/daemon.json</p><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  &quot;</span><span style="color:#C792EA;">log-driver</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">json-file</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">  &quot;</span><span style="color:#C792EA;">log-opts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#89DDFF;">    &quot;</span><span style="color:#FFCB6B;">max-size</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">10m</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">    &quot;</span><span style="color:#FFCB6B;">max-file</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">3</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  }</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>刷新配置</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">systemctl</span><span style="color:#C3E88D;"> daemon-reload</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>重启docker</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">systemctl</span><span style="color:#C3E88D;"> restart</span><span style="color:#C3E88D;"> docker</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="删除-none" tabindex="-1">删除 none <a class="header-anchor" href="#删除-none" aria-label="Permalink to &quot;删除 none&quot;">​</a></h2><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#C3E88D;"> rmi</span><span style="color:#89DDFF;"> $(</span><span style="color:#FFCB6B;">docker</span><span style="color:#C3E88D;"> images</span><span style="color:#C3E88D;"> -f</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">dangling=true</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;"> -q</span><span style="color:#89DDFF;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="安装tar镜像" tabindex="-1">安装tar镜像 <a class="header-anchor" href="#安装tar镜像" aria-label="Permalink to &quot;安装tar镜像&quot;">​</a></h2><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#C3E88D;"> load</span><span style="color:#C3E88D;"> -i</span><span style="color:#C3E88D;"> nfs-subdir-external-provisioner.tar</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,34),p=[o];function r(t,c,i,d,D,F){return n(),a("div",null,p)}const b=s(l,[["render",r]]);export{y as __pageData,b as default};
