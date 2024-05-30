import{_ as e,c as a,o as s,a4 as n,dY as i,dZ as r,d_ as l,d$ as p}from"./chunks/framework.CCJHkvW2.js";const _=JSON.parse('{"title":"docker 安装redis","description":"","frontmatter":{},"headers":[],"relativePath":"tool/redis.md","filePath":"tool/redis.md","lastUpdated":1707208808000}'),d={name:"tool/redis.md"},t=n('<h1 id="docker-安装redis" tabindex="-1">docker 安装redis <a class="header-anchor" href="#docker-安装redis" aria-label="Permalink to &quot;docker 安装redis&quot;">​</a></h1><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>docker run -d --name redismaster1 --restart=always --log-opt max-size=100m --log-opt max-file=2 -p 6379:6379 -p 16379:16379 --privileged=true -v /docker/redis/redismaster1/data:/data redis --cluster-enabled yes --appendonly yes --port 6379</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>docker run -d  --name redisslave1 --restart=always --log-opt max-size=100m --log-opt max-file=2 -p 6389:6389 -p 16389:16389 --privileged=true -v /docker/redis/redisslave1/data:/data redis  --appendonly yes  --cluster-enabled yes --port 6389</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>docker run -d --name redismaster2 --restart=always --log-opt max-size=100m --log-opt max-file=2 -p 6399:6399 -p 16399:16399  --privileged=true  -v /docker/redis/redismaster2/data:/data redis  --appendonly yes   --cluster-enabled yes --port 6399</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>docker  run -d  --name redisslave2 --restart=always --log-opt max-size=100m --log-opt max-file=2 -p 6309:6309 -p 16309:16309  --privileged=true  -v /docker/redis/redisslave2/data:/data redis  --appendonly yes  --cluster-enabled yes --port 6309</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>docker run -d --name redismaster3 --restart=always --log-opt max-size=100m --log-opt max-file=2 -p 6319:6319 -p 16319:16319  --privileged=true  -v /docker/redis/redismaster3/data:/data redis  --appendonly yes   --cluster-enabled yes --port 6319</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>docker run -d --name redisslave3  --restart=always --log-opt max-size=100m --log-opt max-file=2 -p 6329:6329 -p 16329:16329  --privileged=true -v /docker/redis/redisslave3/data:/data redis  --appendonly yes   --cluster-enabled yes --port 6329</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>docker exec -it redismaster1 bash</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>redis-cli --cluster create 172.26.25.16:6379 172.26.25.16:6389 172.26.25.16:6399 172.26.25.16:6309 172.26.25.16:6319 172.26.25.16:6329 --cluster-replicas 1</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="'+i+'" alt="An image"><img src="'+r+'" alt="An image"></p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>redis-cli -p 6379</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>cluster info</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="'+l+'" alt="An image"></p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>cluster nodes</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="'+p+'" alt="An image"></p>',15),o=[t];function c(m,u,b,v,g,h){return s(),a("div",null,o)}const k=e(d,[["render",c]]);export{_ as __pageData,k as default};