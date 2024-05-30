import{_ as s,c as a,o as n,a4 as e}from"./chunks/framework.CCJHkvW2.js";const y=JSON.parse('{"title":"达梦数据库","description":"","frontmatter":{},"headers":[],"relativePath":"db/dm.md","filePath":"db/dm.md","lastUpdated":null}'),l={name:"db/dm.md"},p=e(`<h1 id="达梦数据库" tabindex="-1">达梦数据库 <a class="header-anchor" href="#达梦数据库" aria-label="Permalink to &quot;达梦数据库&quot;">​</a></h1><p>docker 安装</p><p>加载镜像</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#C3E88D;"> load</span><span style="color:#C3E88D;"> -i</span><span style="color:#C3E88D;"> /zhangling/dm8_20240422_x86_rh6_64_rq_std_8.1.3.100_pack2.tar</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>启动镜像</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#C3E88D;"> run</span><span style="color:#C3E88D;"> -d</span><span style="color:#C3E88D;"> -p</span><span style="color:#C3E88D;"> 15236:5236</span><span style="color:#C3E88D;"> --restart=always</span><span style="color:#C3E88D;"> --name</span><span style="color:#C3E88D;"> dm8</span><span style="color:#C3E88D;"> --privileged=true</span><span style="color:#C3E88D;"> -e</span><span style="color:#C3E88D;"> PAGE_SIZE=</span><span style="color:#F78C6C;">16</span><span style="color:#C3E88D;"> -e</span><span style="color:#C3E88D;"> LD_LIBRARY_PATH=/opt/dmdbms/bin</span><span style="color:#C3E88D;"> -e</span><span style="color:#C3E88D;">  EXTENT_SIZE=</span><span style="color:#F78C6C;">32</span><span style="color:#C3E88D;"> -e</span><span style="color:#C3E88D;"> BLANK_PAD_MODE=</span><span style="color:#F78C6C;">1</span><span style="color:#C3E88D;"> -e</span><span style="color:#C3E88D;"> LOG_SIZE=</span><span style="color:#F78C6C;">1024</span><span style="color:#C3E88D;"> -e</span><span style="color:#C3E88D;"> UNICODE_FLAG=</span><span style="color:#F78C6C;">1</span><span style="color:#C3E88D;"> -e</span><span style="color:#C3E88D;"> LENGTH_IN_CHAR=</span><span style="color:#F78C6C;">1</span><span style="color:#C3E88D;"> -e</span><span style="color:#C3E88D;"> INSTANCE_NAME=dm8</span><span style="color:#C3E88D;"> -v</span><span style="color:#C3E88D;"> /data/dm8:/opt/dmdbms/data</span><span style="color:#C3E88D;"> -e</span><span style="color:#C3E88D;"> CASE_SENSITIVE=</span><span style="color:#F78C6C;">0</span><span style="color:#C3E88D;"> dm8:dm8_20240422_rev215128_x86_rh6_64</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="账号" tabindex="-1">账号 <a class="header-anchor" href="#账号" aria-label="Permalink to &quot;账号&quot;">​</a></h2><p>SYSDBA/SYSDBA001</p><h2 id="二进制安装的dexp备份" tabindex="-1">二进制安装的dexp备份 <a class="header-anchor" href="#二进制安装的dexp备份" aria-label="Permalink to &quot;二进制安装的dexp备份&quot;">​</a></h2><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#C3E88D;"> /dm8/bin</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">./dexp</span><span style="color:#C3E88D;"> RBMIS/</span><span style="color:#BABED8;">\\&quot;</span><span style="color:#C3E88D;">1qaz@WSX3edc</span><span style="color:#BABED8;">\\&quot;</span><span style="color:#C3E88D;">@localhost:5236</span><span style="color:#C3E88D;"> file=tky202417.dmp</span><span style="color:#C3E88D;"> directory=/zhangling</span><span style="color:#C3E88D;"> full=y</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="二进制安装的-dmrman-备份" tabindex="-1">二进制安装的 DMRMAN 备份 <a class="header-anchor" href="#二进制安装的-dmrman-备份" aria-label="Permalink to &quot;二进制安装的 DMRMAN 备份&quot;">​</a></h2><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">.disql</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>输入用户名</p><p>输入密码</p><p>备份</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">BACKUP</span><span style="color:#C3E88D;"> DATABASE</span><span style="color:#C3E88D;"> FULL</span><span style="color:#C3E88D;"> BACKUPSET</span><span style="color:#89DDFF;"> &#39;</span><span style="color:#C3E88D;">/zhangling/dm_dmrman_bak/db_full_bak_01</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> compressed</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>报错</p><div class="language-txt line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>BACKUP DATABASE FULL BACKUPSET &#39;/zhangling/dm_dmrman_bak/db_full_bak_01&#39; compressed;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>第1 行附近出现错误[-8003]:缺少本地或者远程归档.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>已用时间: 70.092(毫秒). 执行号:0.</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>查看原因</p><div class="language-txt line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>select arch_mode from v$database;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>行号     arch_mode</span></span>
<span class="line"><span>---------- ---------</span></span>
<span class="line"><span>1          N</span></span>
<span class="line"><span></span></span>
<span class="line"><span>已用时间: 0.927(毫秒). 执行号:93437701.</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>解决办法</p><p>SQL&gt;</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">ALTER</span><span style="color:#C3E88D;"> DATABASE</span><span style="color:#C3E88D;"> MOUNT</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">ALTER</span><span style="color:#C3E88D;"> DATABASE</span><span style="color:#C3E88D;"> ADD</span><span style="color:#C3E88D;"> ARCHIVELOG</span><span style="color:#89DDFF;"> &#39;</span><span style="color:#C3E88D;">DEST = /dm/data/DAMENG/bak, TYPE = local, FILE_SIZE = 1024,SPACE_LIMIT = 2048,ARCH_FLUSH_BUF_SIZE=16,HANG_FLAG=1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">注意</p><p>备份地址不能随便写 必须是 /dm/data/DAMENG/bak</p></div><div class="language-txt line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>操作已执行</span></span>
<span class="line"><span>已用时间: 00:00:04.258. 执行号:0.</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>SQL&gt;</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">ALTER</span><span style="color:#C3E88D;"> DATABASE</span><span style="color:#C3E88D;"> ARCHIVELOG</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-txt line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>操作已执行</span></span>
<span class="line"><span>已用时间: 631.189(毫秒). 执行号:0.</span></span>
<span class="line"><span>SQL&gt;  ALTER DATABASE OPEN;</span></span>
<span class="line"><span>操作已执行</span></span>
<span class="line"><span>已用时间: 00:00:05.592. 执行号:0.</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>检查 SQL&gt;</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">select</span><span style="color:#BABED8;"> arch_mode from v$database</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-txt line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>行号     ARCH_MODE</span></span>
<span class="line"><span>---------- ---------</span></span>
<span class="line"><span>1          Y</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>继续备份</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">BACKUP</span><span style="color:#C3E88D;"> DATABASE</span><span style="color:#C3E88D;"> FULL</span><span style="color:#C3E88D;"> BACKUPSET</span><span style="color:#89DDFF;"> &#39;</span><span style="color:#C3E88D;">/dm/data/DAMENG/bak/db_full_bak_01</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> compressed</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="docker安装的还原" tabindex="-1">docker安装的还原 <a class="header-anchor" href="#docker安装的还原" aria-label="Permalink to &quot;docker安装的还原&quot;">​</a></h2><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#C3E88D;"> exec</span><span style="color:#C3E88D;"> -it</span><span style="color:#C3E88D;"> dm8</span><span style="color:#C3E88D;"> bash</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#C3E88D;"> /opt/dmdbms/bin</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">./dmrman</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>校验备份 RMAN&gt;</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>CHECK BACKUPSET &#39;/opt/dmdbms/data/DAMENG/bak/db_full_bak_01&#39;;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-txt line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>CHECK BACKUPSET &#39;/opt/dmdbms/data/DAMENG/bak/db_full_bak_01&#39;;</span></span>
<span class="line"><span>[Percent:100.00%][Speed:0.00M/s][Cost:00:00:02][Remaining:00:00:00]                                 </span></span>
<span class="line"><span>check backupset successfully.</span></span>
<span class="line"><span>time used: 00:00:02.277</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>备份</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">RESTORE</span><span style="color:#C3E88D;"> DATABASE</span><span style="color:#89DDFF;"> &#39;</span><span style="color:#C3E88D;">/opt/dmdbms/data/DAMENG/dm.ini</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> FROM</span><span style="color:#C3E88D;"> BACKUPSET</span><span style="color:#89DDFF;"> &#39;</span><span style="color:#C3E88D;">/opt/dmdbms/data/DAMENG/bak/db_full_bak_01</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>报错</p><div class="language-txt line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>RESTORE DATABASE &#39;/opt/dmdbms/data/DAMENG/dm.ini&#39; FROM BACKUPSET &#39;/opt/dmdbms/data/DAMENG/bak/db_full_bak_01&#39;;</span></span>
<span class="line"><span>file dm.key not found, use default license!</span></span>
<span class="line"><span>[-137]:DM server is running or exist other process which is operating the same database</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>解决</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">./DmService</span><span style="color:#C3E88D;"> stop</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>继续</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">RESTORE</span><span style="color:#C3E88D;"> DATABASE</span><span style="color:#89DDFF;"> &#39;</span><span style="color:#C3E88D;">/opt/dmdbms/data/DAMENG/dm.ini</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> FROM</span><span style="color:#C3E88D;"> BACKUPSET</span><span style="color:#89DDFF;"> &#39;</span><span style="color:#C3E88D;">/opt/dmdbms/data/DAMENG/bak/db_full_bak_01</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>报错</p><div class="language-txt line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>达梦数据库还原报错[-8024]:Fail to read write data file</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>修改备份文件的权限</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">chown</span><span style="color:#C3E88D;"> -R</span><span style="color:#C3E88D;"> dmdba:dinstall</span><span style="color:#C3E88D;"> /opt/dmdbms/data/DAMENG/bak/db_full_bak_01</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>切换到sysdba用户</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">su</span><span style="color:#C3E88D;"> -</span><span style="color:#C3E88D;"> dmdba</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>继续</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">RESTORE</span><span style="color:#C3E88D;"> DATABASE</span><span style="color:#89DDFF;"> &#39;</span><span style="color:#C3E88D;">/opt/dmdbms/data/DAMENG/dm.ini</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> FROM</span><span style="color:#C3E88D;"> BACKUPSET</span><span style="color:#89DDFF;"> &#39;</span><span style="color:#C3E88D;">/opt/dmdbms/data/DAMENG/bak/db_full_bak_01</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">recover</span><span style="color:#C3E88D;"> database</span><span style="color:#89DDFF;"> &#39;</span><span style="color:#C3E88D;">/opt/dmdbms/data/DAMENG/dm.ini</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> FROM</span><span style="color:#C3E88D;"> BACKUPSET</span><span style="color:#89DDFF;"> &#39;</span><span style="color:#C3E88D;">/opt/dmdbms/data/DAMENG/bak/db_full_bak_01</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">recover</span><span style="color:#C3E88D;"> database</span><span style="color:#89DDFF;"> &#39;</span><span style="color:#C3E88D;">/opt/dmdbms/data/DAMENG/dm.ini</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> update</span><span style="color:#C3E88D;"> db_magic</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>再启动服务</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">./DmService</span><span style="color:#C3E88D;"> start</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="二进制安装-增量备份" tabindex="-1">二进制安装 增量备份 <a class="header-anchor" href="#二进制安装-增量备份" aria-label="Permalink to &quot;二进制安装 增量备份&quot;">​</a></h2><p>BACKUP DATABASE INCREMENT WITH BACKUPDIR &#39;/dm/data/DAMENG/bak&#39; BACKUPSET &#39;/dm/data/DAMENG/bak/db_increment_from_db_full_bak_01&#39;;</p>`,64),o=[p];function t(r,i,c,d,b,m){return n(),a("div",null,o)}const h=s(l,[["render",t]]);export{y as __pageData,h as default};