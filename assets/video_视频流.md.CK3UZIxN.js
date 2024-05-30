import{_ as s,c as n,o as a,a4 as e,e7 as l,e8 as t,e9 as p,ea as r,eb as o,ec as c,ed as i,ee as d}from"./chunks/framework.CCJHkvW2.js";const v=JSON.parse('{"title":"视频流","description":"","frontmatter":{},"headers":[],"relativePath":"video/视频流.md","filePath":"video/视频流.md","lastUpdated":1708482714000}'),y={name:"video/视频流.md"},b=e(`<h1 id="视频流" tabindex="-1">视频流 <a class="header-anchor" href="#视频流" aria-label="Permalink to &quot;视频流&quot;">​</a></h1><p>参考地址(<a href="https://vuepress.vuejs.org" target="_blank" rel="noreferrer">https://vuepress.vuejs.org</a>)</p><h2 id="http-flv、rtmp、hls对比" tabindex="-1">HTTP-FLV、RTMP、HLS对比 <a class="header-anchor" href="#http-flv、rtmp、hls对比" aria-label="Permalink to &quot;HTTP-FLV、RTMP、HLS对比&quot;">​</a></h2><table><thead><tr><th style="text-align:center;"><strong>协议名</strong></th><th style="text-align:center;"><strong>HTTP-FLV</strong></th><th style="text-align:center;"><strong>RTMP(Real-Time Messaging Protocol)</strong></th><th style="text-align:center;"><strong>HLS</strong></th></tr></thead><tbody><tr><td style="text-align:center;">传输方式</td><td style="text-align:center;">HTTP</td><td style="text-align:center;">TCP</td><td style="text-align:center;">HTTP</td></tr><tr><td style="text-align:center;">视频封装格式</td><td style="text-align:center;">flv</td><td style="text-align:center;">chunk(rtmp header+body（tag body))</td><td style="text-align:center;">TS</td></tr><tr><td style="text-align:center;">视频时延</td><td style="text-align:center;">低</td><td style="text-align:center;">低</td><td style="text-align:center;">高</td></tr><tr><td style="text-align:center;">数据格式</td><td style="text-align:center;">连续音视频流</td><td style="text-align:center;">连续音视频流</td><td style="text-align:center;">TS切片文件</td></tr><tr><td style="text-align:center;">web无插件播放</td><td style="text-align:center;">支持，通过flv.js</td><td style="text-align:center;">不支持，需要flash插件</td><td style="text-align:center;">支持，直接HTML5的video标签即可播放</td></tr><tr><td style="text-align:center;">防火墙或代理穿透</td><td style="text-align:center;">支持</td><td style="text-align:center;">不支持</td><td style="text-align:center;">支持</td></tr></tbody></table><h2 id="rtmp、rtsp对比" tabindex="-1">RTMP、RTSP对比 <a class="header-anchor" href="#rtmp、rtsp对比" aria-label="Permalink to &quot;RTMP、RTSP对比&quot;">​</a></h2><table><thead><tr><th style="text-align:center;"><strong>协议名</strong></th><th style="text-align:center;"><strong>RTSP(Real-Time Streaming Protocol)</strong></th><th style="text-align:center;"><strong>RTMP(Real-Time Messaging Protocol)</strong></th></tr></thead><tbody><tr><td style="text-align:center;">传输方式</td><td style="text-align:center;">依赖于 RTP协议（基于UDP协议）</td><td style="text-align:center;">TCP</td></tr><tr><td style="text-align:center;">支持移动端</td><td style="text-align:center;">不支持</td><td style="text-align:center;">支持</td></tr><tr><td style="text-align:center;">适用</td><td style="text-align:center;">RTSP 在许多监控 和闭路电视 (CCTV) 应用非常广泛，比如远程摄像头、在线视频和互联网直播等领域非常适合。</td><td style="text-align:center;">互联网音视频传输，它使用的是TCP传输，因为互联网环境相对较差，采用RTMP可以保证了视频的传输质量，但是其传输延迟相对较高，传输效率相对较低。</td></tr><tr><td style="text-align:center;">视频时延</td><td style="text-align:center;">低</td><td style="text-align:center;">低(比RTSP差)</td></tr></tbody></table><h2 id="nginx-http-flv-module与nginx-rtmp-module对比" tabindex="-1">nginx-http-flv-module与nginx-rtmp-module对比 <a class="header-anchor" href="#nginx-http-flv-module与nginx-rtmp-module对比" aria-label="Permalink to &quot;nginx-http-flv-module与nginx-rtmp-module对比&quot;">​</a></h2><table><thead><tr><th style="text-align:center;"><strong>Features</strong></th><th style="text-align:center;"><strong>nginx-http-flv-module</strong></th><th style="text-align:center;"><strong>nginx-rtmp-module</strong></th><th style="text-align:center;"><strong>Remarks</strong></th></tr></thead><tbody><tr><td style="text-align:center;">HTTP-FLV (播放)</td><td style="text-align:center;">√</td><td style="text-align:center;">x</td><td style="text-align:center;">支持 HTTPS-FLV 和 chunked 回复</td></tr><tr><td style="text-align:center;">GOP 缓存</td><td style="text-align:center;">√</td><td style="text-align:center;">x</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">虚拟主机</td><td style="text-align:center;">√</td><td style="text-align:center;">x</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">省略 listen 配置</td><td style="text-align:center;">√</td><td style="text-align:center;">See remarks</td><td style="text-align:center;">There MUST be at least one listen directive</td></tr><tr><td style="text-align:center;">纯音频支持</td><td style="text-align:center;">√</td><td style="text-align:center;">See remarks</td><td style="text-align:center;">Won&#39;t work if wait_video or wait_key is on</td></tr><tr><td style="text-align:center;">Single-track support for HLS</td><td style="text-align:center;">√</td><td style="text-align:center;">x</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">reuseport support</td><td style="text-align:center;">√ x</td><td style="text-align:center;"></td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">Timer for access log</td><td style="text-align:center;">√</td><td style="text-align:center;">x</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">JSON style statistics</td><td style="text-align:center;">√</td><td style="text-align:center;">x</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">Statistics for recordings</td><td style="text-align:center;">√</td><td style="text-align:center;">x</td><td style="text-align:center;"></td></tr></tbody></table><h2 id="docker安装nginx-http-flv-module" tabindex="-1">docker安装nginx-http-flv-module <a class="header-anchor" href="#docker安装nginx-http-flv-module" aria-label="Permalink to &quot;docker安装nginx-http-flv-module&quot;">​</a></h2><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#C3E88D;"> pull</span><span style="color:#C3E88D;"> mycujoo/nginx-http-flv-module</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#C3E88D;"> run</span><span style="color:#C3E88D;"> -d</span><span style="color:#C3E88D;"> -p</span><span style="color:#C3E88D;"> 80:80</span><span style="color:#C3E88D;"> -p</span><span style="color:#C3E88D;"> 1935:1935</span><span style="color:#C3E88D;"> --name</span><span style="color:#C3E88D;"> http-flv</span><span style="color:#C3E88D;"> mycujoo/nginx-http-flv-module:latest</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#C3E88D;"> exec</span><span style="color:#C3E88D;"> -it</span><span style="color:#C3E88D;"> http-flv</span><span style="color:#C3E88D;"> sh</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>配置文件目录</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">/opt/nginx/nginx.conf</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">daemon</span><span style="color:#C3E88D;"> off</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">error_log</span><span style="color:#C3E88D;"> /var/log/nginx/error.log</span><span style="color:#C3E88D;"> warn</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">events</span><span style="color:#C3E88D;"> {</span></span>
<span class="line"><span style="color:#FFCB6B;">    worker_connections</span><span style="color:#F78C6C;"> 1024</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">rtmp</span><span style="color:#C3E88D;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">    out_queue</span><span style="color:#F78C6C;">   4096</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#FFCB6B;">    out_cork</span><span style="color:#F78C6C;">    8</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#FFCB6B;">    max_streams</span><span style="color:#F78C6C;"> 64</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">    server</span><span style="color:#C3E88D;"> {</span></span>
<span class="line"><span style="color:#FFCB6B;">        listen</span><span style="color:#F78C6C;"> 1935</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">        application</span><span style="color:#C3E88D;"> live</span><span style="color:#C3E88D;"> {</span></span>
<span class="line"><span style="color:#FFCB6B;">            live</span><span style="color:#C3E88D;"> on</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#FFCB6B;">            gop_cache</span><span style="color:#C3E88D;"> on</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;"> #open GOP cache for reducing the wating time for the first picture of video</span></span>
<span class="line"><span style="color:#BABED8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">        drop_idle_publisher</span><span style="color:#C3E88D;"> 30s</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#FFCB6B;">        ping</span><span style="color:#C3E88D;"> 20s</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#FFCB6B;">        ping_timeout</span><span style="color:#C3E88D;"> 10s</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#FFCB6B;">        meta</span><span style="color:#C3E88D;"> on</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#FFCB6B;">        chunk_size</span><span style="color:#F78C6C;"> 4096</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#FFCB6B;">        wait_video</span><span style="color:#C3E88D;"> on</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#FFCB6B;">        wait_key</span><span style="color:#C3E88D;"> on</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">        application</span><span style="color:#C3E88D;"> hls</span><span style="color:#C3E88D;"> {</span></span>
<span class="line"><span style="color:#FFCB6B;">            live</span><span style="color:#C3E88D;"> on</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#FFCB6B;">            hls</span><span style="color:#C3E88D;"> on</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#FFCB6B;">            hls_fragment_naming</span><span style="color:#C3E88D;"> system</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#FFCB6B;">            hls_fragment</span><span style="color:#C3E88D;"> 5s</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#FFCB6B;">            hls_path</span><span style="color:#C3E88D;"> /opt/data/hls</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#FFCB6B;">            hls_nested</span><span style="color:#C3E88D;"> on</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">        }</span></span>
<span class="line"><span style="color:#BABED8;">    }</span></span>
<span class="line"><span style="color:#BABED8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">http</span><span style="color:#C3E88D;"> {</span></span>
<span class="line"><span style="color:#FFCB6B;">    include</span><span style="color:#C3E88D;">       mime.types</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#FFCB6B;">    default_type</span><span style="color:#C3E88D;">  application/octet-stream</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#FFCB6B;">    keepalive_timeout</span><span style="color:#F78C6C;">  65</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#FFCB6B;">    log_format</span><span style="color:#C3E88D;">  main</span><span style="color:#89DDFF;">  &#39;</span><span style="color:#C3E88D;">$remote_addr - $remote_user [$time_local] &quot;$request&quot; </span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#FFCB6B;">                        &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span></span>
<span class="line"><span style="color:#FFCB6B;">                        &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">    access_log</span><span style="color:#C3E88D;"> /var/log/nginx/access.log</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">    server</span><span style="color:#C3E88D;"> {</span></span>
<span class="line"><span style="color:#FFCB6B;">        listen</span><span style="color:#F78C6C;"> 80</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">        location</span><span style="color:#C3E88D;"> /live</span><span style="color:#C3E88D;"> {</span></span>
<span class="line"><span style="color:#FFCB6B;">            flv_live</span><span style="color:#C3E88D;"> on</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;"> #open flv live streaming (subscribe)</span></span>
<span class="line"><span style="color:#FFCB6B;">            chunked_transfer_encoding</span><span style="color:#C3E88D;">  off</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;"> #open &#39;Transfer-Encoding: chunked&#39; response</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">            add_header</span><span style="color:#89DDFF;"> &#39;</span><span style="color:#C3E88D;">Access-Control-Allow-Origin</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;"> &#39;</span><span style="color:#C3E88D;">*</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;"> #add additional HTTP header</span></span>
<span class="line"><span style="color:#FFCB6B;">            add_header</span><span style="color:#89DDFF;"> &#39;</span><span style="color:#C3E88D;">Access-Control-Allow-Credentials</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;"> &#39;</span><span style="color:#C3E88D;">true</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;"> #add additional HTTP header</span></span>
<span class="line"><span style="color:#BABED8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">         location</span><span style="color:#C3E88D;"> ~</span><span style="color:#C3E88D;"> ^/play/</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">.</span><span style="color:#C3E88D;">*</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;">\\.</span><span style="color:#C3E88D;">flv</span><span style="color:#C3E88D;"> {</span></span>
<span class="line"><span style="color:#FFCB6B;">            proxy_redirect</span><span style="color:#C3E88D;"> off</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#FFCB6B;">            proxy_pass</span><span style="color:#C3E88D;"> http://127.0.0.1/live?app=live</span><span style="color:#89DDFF;">&amp;</span><span style="color:#BABED8;">stream</span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;font-style:italic;">$1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">        location</span><span style="color:#C3E88D;"> /hls</span><span style="color:#C3E88D;"> {</span></span>
<span class="line"><span style="color:#FFCB6B;">            types</span><span style="color:#C3E88D;"> {</span></span>
<span class="line"><span style="color:#FFCB6B;">                application/vnd.apple.mpegurl</span><span style="color:#C3E88D;"> m3u8</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#FFCB6B;">                video/mp2t</span><span style="color:#C3E88D;"> ts</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">            }</span></span>
<span class="line"><span style="color:#FFCB6B;">            root</span><span style="color:#C3E88D;"> /opt/data</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#FFCB6B;">            add_header</span><span style="color:#C3E88D;"> Cache-Control</span><span style="color:#C3E88D;"> no-cache</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#FFCB6B;">            add_header</span><span style="color:#C3E88D;"> Access-Control-Allow-Origin</span><span style="color:#BABED8;"> *</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">        location</span><span style="color:#C3E88D;"> /stat</span><span style="color:#C3E88D;"> {</span></span>
<span class="line"><span style="color:#FFCB6B;">           rtmp_stat</span><span style="color:#C3E88D;"> all</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#FFCB6B;">           rtmp_stat_format</span><span style="color:#C3E88D;"> json</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">        location</span><span style="color:#C3E88D;"> /static</span><span style="color:#C3E88D;"> {</span></span>
<span class="line"><span style="color:#82AAFF;">            alias</span><span style="color:#C3E88D;"> /www/static</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">        location</span><span style="color:#C3E88D;"> =</span><span style="color:#C3E88D;"> /crossdomain.xml</span><span style="color:#C3E88D;"> {</span></span>
<span class="line"><span style="color:#FFCB6B;">            root</span><span style="color:#C3E88D;"> /www/static</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#FFCB6B;">            default_type</span><span style="color:#C3E88D;"> text/xml</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#FFCB6B;">            expires</span><span style="color:#C3E88D;"> 24h</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">        }</span></span>
<span class="line"><span style="color:#BABED8;">    }</span></span>
<span class="line"><span style="color:#BABED8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br></div></div><h2 id="下载推流软件" tabindex="-1">下载推流软件 <a class="header-anchor" href="#下载推流软件" aria-label="Permalink to &quot;下载推流软件&quot;">​</a></h2><p>下载推流软件 (<a href="https://cdn-fastly.obsproject.com/downloads/OBS-Studio-29.1.1-Full-Installer-x64.exe" target="_blank" rel="noreferrer">https://cdn-fastly.obsproject.com/downloads/OBS-Studio-29.1.1-Full-Installer-x64.exe</a>)</p><h2 id="推流地址-3种格式-1、http-flv2、rtmp-real-time-messaging-protocol-3、hls" tabindex="-1">推流地址 (3种格式 1、HTTP-FLV 2、RTMP(Real-Time Messaging Protocol) 3、HLS) <a class="header-anchor" href="#推流地址-3种格式-1、http-flv2、rtmp-real-time-messaging-protocol-3、hls" aria-label="Permalink to &quot;推流地址  (3种格式 1、HTTP-FLV	2、RTMP(Real-Time Messaging Protocol)	3、HLS)&quot;">​</a></h2><h3 id="rtmp协议推rtmp格式式流" tabindex="-1">rtmp协议推rtmp格式式流 <a class="header-anchor" href="#rtmp协议推rtmp格式式流" aria-label="Permalink to &quot;rtmp协议推rtmp格式式流&quot;">​</a></h3><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">rtmp://172.26.25.23:1935/live/xxx</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="rtmp协议推http-flv格式式流-同rtmp格式推流" tabindex="-1">rtmp协议推HTTP-FLV格式式流(同rtmp格式推流) <a class="header-anchor" href="#rtmp协议推http-flv格式式流-同rtmp格式推流" aria-label="Permalink to &quot;rtmp协议推HTTP-FLV格式式流(同rtmp格式推流)&quot;">​</a></h3><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">rtmp://172.26.25.23:1935/live/xxx</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="rtmp协议推hls格式流" tabindex="-1">rtmp协议推hls格式流 <a class="header-anchor" href="#rtmp协议推hls格式流" aria-label="Permalink to &quot;rtmp协议推hls格式流&quot;">​</a></h3><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">rtmp://172.26.25.23:1935/hls/xxx</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="`+l+'" alt="An image"></p><h2 id="演示推流" tabindex="-1">演示推流 <a class="header-anchor" href="#演示推流" aria-label="Permalink to &quot;演示推流&quot;">​</a></h2><p>推流工具</p><p><img src="'+t+'" alt="An image"></p><p>设置</p><p><img src="'+p+'" alt="An image"></p><p>推流</p><p><img src="'+r+'" alt="An image"></p><p>点击+号 上传视频</p><p><img src="'+o+'" alt="An image"></p><p>点击媒体源, 输入名称</p><p><img src="'+c+'" alt="An image"></p><p><img src="'+i+'" alt="An image"></p><h2 id="拉流" tabindex="-1">拉流 <a class="header-anchor" href="#拉流" aria-label="Permalink to &quot;拉流&quot;">​</a></h2><p>拉rtmp格式流</p><p>rtmp:</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">rtmp://172.26.25.23:1935/live/test</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>拉http-flv协议流</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">http://172.26.25.23:80/live?port</span><span style="color:#C3E88D;">=1935</span><span style="color:#89DDFF;">&amp;</span><span style="color:#BABED8;">app</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">live</span><span style="color:#89DDFF;">&amp;</span><span style="color:#BABED8;">stream</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">test</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>拉hls格式流</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">http://58.210.34.82:2014/flv-live/hls/test/index.m3u8</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="使用vlc查看视频流" tabindex="-1">使用VLC查看视频流 <a class="header-anchor" href="#使用vlc查看视频流" aria-label="Permalink to &quot;使用VLC查看视频流&quot;">​</a></h2><p>点击媒体-&gt;打开网络串流</p><p><img src="'+d+'" alt="An image"></p><h2 id="使用bilibili测试flv-js查看视频流" tabindex="-1">使用bilibili测试flv.js查看视频流 <a class="header-anchor" href="#使用bilibili测试flv-js查看视频流" aria-label="Permalink to &quot;使用bilibili测试flv.js查看视频流&quot;">​</a></h2><p><a href="http://bilibili.github.io/flv.js/demo/" target="_blank" rel="noreferrer">bilibili测试测试地址</a></p><p>http-flv:</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">http://58.210.34.82:2014/flv-live/live?port</span><span style="color:#C3E88D;">=1935</span><span style="color:#89DDFF;">&amp;</span><span style="color:#BABED8;">app</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">live</span><span style="color:#89DDFF;">&amp;</span><span style="color:#BABED8;">stream</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">test</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>',52),m=[b];function F(u,h,D,g,C,B){return a(),n("div",null,m)}const E=s(y,[["render",F]]);export{v as __pageData,E as default};
