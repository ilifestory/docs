import{_ as s,c as n,o as a,a4 as l}from"./chunks/framework.CCJHkvW2.js";const F=JSON.parse('{"title":"python web 框架","description":"","frontmatter":{},"headers":[],"relativePath":"ai/pythonWeb.md","filePath":"ai/pythonWeb.md","lastUpdated":null}'),p={name:"ai/pythonWeb.md"},e=l(`<h1 id="python-web-框架" tabindex="-1">python web 框架 <a class="header-anchor" href="#python-web-框架" aria-label="Permalink to &quot;python web 框架&quot;">​</a></h1><p>WSGI: Web Server Gateway Interface</p><h2 id="全栈框架" tabindex="-1">全栈框架 <a class="header-anchor" href="#全栈框架" aria-label="Permalink to &quot;全栈框架&quot;">​</a></h2><p>Django Pyramid TurboGears Web2py</p><h2 id="微型框架" tabindex="-1">微型框架 <a class="header-anchor" href="#微型框架" aria-label="Permalink to &quot;微型框架&quot;">​</a></h2><p>Flask Bottle CherryPy Falcon Hug FastAPI</p><h2 id="异步框架" tabindex="-1">异步框架 <a class="header-anchor" href="#异步框架" aria-label="Permalink to &quot;异步框架&quot;">​</a></h2><p>Sanic Tornado</p><h2 id="其他" tabindex="-1">其他 <a class="header-anchor" href="#其他" aria-label="Permalink to &quot;其他&quot;">​</a></h2><p>Dash</p><h2 id="asgi-wsgi" tabindex="-1">ASGI/WSGI <a class="header-anchor" href="#asgi-wsgi" aria-label="Permalink to &quot;ASGI/WSGI&quot;">​</a></h2><p>uvicorn 和 gunicorn 是两个用于运行 Python Web 应用程序的不同工具。</p><p>uvicorn (ASGI服务器)：</p><p>它不是一个 Web 框架，而是一个服务器(服务器里的服务，例如，它不是一个提供路径路由的框架，这是 FastAPI 框架提供的东西)</p><p>uvicorn 是一个 ASGI（Asynchronous Server Gateway Interface）服务器，用于异步 Python Web 应用程序。ASGI 是一种设计用于处理异步请求的接口规范， 与传统的 WSGI（Web Server Gateway Interface）有所不同。</p><p>uvicorn 支持异步框架，如 FastAPI 和 Starlette。它的设计目标是处理异步请求，并且能够充分发挥 Python 3.7+ 中引入的 asyncio 和 async/await 的优势。 通常情况下，你可以使用 uvicorn 来直接运行你的异步 Web 应用程序，例如：uvicorn myapp:app --host 0.0.0.0 --port 8000。</p><p>gunicorn (WSGI服务器)：</p><p>gunicorn 是一个 WSGI（Web Server Gateway Interface）服务器，用于运行传统的同步 Python Web 应用程序。WSGI 是 Python Web 应用程序与 Web 服务器之间的标准接口。</p><p>gunicorn 是一个可靠且广泛使用的服务器，支持多进程运行，可以处理大量的并发请求。它不仅支持同步框架，还可以通过使用 gevent 或 eventlet 等异步工作模型来支持异步框架。 通常情况下，你可以使用 gunicorn 来运行你的同步 Web 应用程序，例如：gunicorn myapp:app --bind 0.0.0.0:8000。</p><p>uvicorn： Uvicorn,是一个闪电般快速的ASGI服务器，基于uvloop和httptools构建。</p><p>Python Uvicorn 是一个快速的 ASGI（Asynchronous Server Gateway Interface）服务器，用于构建异步 Web 服务。它基于 asyncio 库， 支持高性能的异步请求处理，适用于各种类型的 Web 应用程序。</p><p>uvicorn是一个基于asyncio开发的一个轻量级高效的web服务器框架 使用uvloop可以实现asyncio服务器 基于ASGI(异步服务器网关接口)的最小应用程序接口</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">from</span><span style="color:#C3E88D;"> fastapi</span><span style="color:#C3E88D;"> import</span><span style="color:#C3E88D;"> FastAPI</span></span>
<span class="line"><span style="color:#FFCB6B;">import</span><span style="color:#C3E88D;"> uvicorn</span></span>
<span class="line"><span style="color:#FFCB6B;">import</span><span style="color:#C3E88D;"> video_list</span><span style="color:#676E95;font-style:italic;"> #引入模块</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">app</span><span style="color:#C3E88D;"> =</span><span style="color:#C3E88D;"> FastAPI</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">app.include_router(router</span><span style="color:#C3E88D;">=video_list.router</span><span style="color:#BABED8;">)  </span><span style="color:#676E95;font-style:italic;">#引入模块路由</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">@app.get(</span><span style="color:#FFCB6B;">&quot;/&quot;</span><span style="color:#BABED8;">)</span></span>
<span class="line"><span style="color:#FFCB6B;">async</span><span style="color:#C3E88D;"> def</span><span style="color:#C3E88D;"> root</span><span style="color:#89DDFF;">()</span><span style="color:#C3E88D;">:</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">    return</span><span style="color:#C3E88D;"> {</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">message</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">Hello World</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#FFCB6B;"> __name__</span><span style="color:#C3E88D;"> ==</span><span style="color:#89DDFF;"> &#39;</span><span style="color:#C3E88D;">__main__</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">:</span></span>
<span class="line"><span style="color:#FFCB6B;">    uvicorn.run(</span></span>
<span class="line"><span style="color:#BABED8;">        app</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">main:app</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">,</span></span>
<span class="line"><span style="color:#BABED8;">        host</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0.0.0.0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">,</span></span>
<span class="line"><span style="color:#BABED8;">        port</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">8899,</span></span>
<span class="line"><span style="color:#BABED8;">        workers</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">4,</span></span>
<span class="line"><span style="color:#BABED8;">        reload</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">True,</span></span>
<span class="line"><span style="color:#BABED8;">        debug</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">True</span><span style="color:#BABED8;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>当基于FastAPI的应用程序或者微服务代码编写完成后，可以部署到生产环境下运行。我们在开发、调试过程中采用命令行启动用的是 uvicorn ，在生产环境下， 应该使用进程管理器 gunicorn。 Gunicorn 是一个unix上被广泛使用的高性能的Python WSGI UNIX HTTP Server，和大多数的web框架兼容，并具有实现简单，轻量级，高性能等特点。</p><p>unicorn 是一个使用 WSGI 标准的应用服务器。</p><p>Flask 和 Django可以直接使用 Gunicorn 运行，但是FastAPI不能直接使用 Gunicorn，因为 FastAPI 使用最新的ASGI 标准。</p><p>Gunicorn 可以作为进程管理器使用，并且可以设定进程的类型，Uvicorn 可以作为 Gunicorn的进程类型。</p><p>使用这种组合，Gunicorn 将充当进程管理器，监听端口和IP。它会将接收到的数据传输到运行 Uvicorn 类的工作进程，然后，Uvicorn 将数据传输给 FastAPI。</p><p>uvicorn 在单进程上使用异步协程是有优势的，但是如果接口方法是同步的则走的多进程模式，也就是 workers 的数量，这时候就是多进程模式，uvicorn 不如 gunicorn，性能上会有些限制。</p><p>生产环境</p><p>安装 进程管理器gunicorn</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">pip</span><span style="color:#C3E88D;"> install</span><span style="color:#C3E88D;"> gunicorn</span></span>
<span class="line"><span style="color:#FFCB6B;">pip</span><span style="color:#C3E88D;"> install</span><span style="color:#C3E88D;"> uvloop</span></span>
<span class="line"><span style="color:#FFCB6B;">pip</span><span style="color:#C3E88D;"> install</span><span style="color:#C3E88D;"> httptools</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Gunicorn 是成熟的，功能齐全的服务器，Uvicorn 内部包含有 Guicorn 的 workers 类，允许你运行 ASGI 应用程序，这些 workers 继承了所有 Uvicorn 高性能的特点。</p><p>使用 Guicorn 来进行进程管理，我们可以动态增加或减少进程数量，平滑地重启工作进程，或者升级服务器而无需停机。</p><p>在生产环境中，Guicorn 大概是最简单的方式来管理 Uvicorn 了，生产环境部署我们推荐使用 Guicorn 和 Uvicorn 的 worker 类</p><h3 id="以命令行方式启动应用" tabindex="-1">以命令行方式启动应用 <a class="header-anchor" href="#以命令行方式启动应用" aria-label="Permalink to &quot;以命令行方式启动应用&quot;">​</a></h3><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">gunicorn</span><span style="color:#C3E88D;"> main:app</span><span style="color:#C3E88D;"> -b</span><span style="color:#C3E88D;"> 0.0.0.0:8899</span><span style="color:#C3E88D;"> -w</span><span style="color:#F78C6C;"> 4</span><span style="color:#C3E88D;"> -k</span><span style="color:#C3E88D;"> uvicorn.workers.UvicornWorker</span><span style="color:#C3E88D;"> --daemon</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">参数</p><p>-w 4: 设置工作进程数，可以根据需要进行调整。</p><p>-k uvicorn.workers.UvicornWorker: 指定Gunicorn使用Uvicorn Worker。</p><p>main:app: 指定FastAPI应用的模块和对象。main是你的应用文件的模块名，app是FastAPI实例的名称。</p><p>-b 0.0.0.0:8000: 指定绑定的主机和端口号。在这个例子中，FastAPI将在本地所有可用的网络接口上监听端口8000。</p></div><p>获取Gunicorn进程数</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">pstree</span><span style="color:#C3E88D;"> -ap</span><span style="color:#89DDFF;"> |</span><span style="color:#FFCB6B;"> grep</span><span style="color:#C3E88D;"> gunicorn</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>终止Gunicorn任务</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">kill</span><span style="color:#C3E88D;"> -HUP</span><span style="color:#F78C6C;"> 1090</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="以配置文件方式启动应用" tabindex="-1">以配置文件方式启动应用 <a class="header-anchor" href="#以配置文件方式启动应用" aria-label="Permalink to &quot;以配置文件方式启动应用&quot;">​</a></h3><p>编辑gunicorn.conf 文件，其内容如下：</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">import</span><span style="color:#C3E88D;"> multiprocessing</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 并行工作进程数 核心数*2+1个</span></span>
<span class="line"><span style="color:#FFCB6B;">workers</span><span style="color:#C3E88D;"> =</span><span style="color:#C3E88D;"> multiprocessing.cpu_count</span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> *</span><span style="color:#F78C6C;"> 2</span><span style="color:#C3E88D;"> +</span><span style="color:#F78C6C;"> 1</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 指定每个工作者的线程数</span></span>
<span class="line"><span style="color:#FFCB6B;">threads</span><span style="color:#C3E88D;"> =</span><span style="color:#F78C6C;"> 2</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 监听内网端口5000</span></span>
<span class="line"><span style="color:#FFCB6B;">bind</span><span style="color:#C3E88D;"> =</span><span style="color:#89DDFF;"> &#39;</span><span style="color:#C3E88D;">127.0.0.1:5000</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 设置守护进程</span></span>
<span class="line"><span style="color:#FFCB6B;">daemon</span><span style="color:#C3E88D;"> =</span><span style="color:#89DDFF;"> &#39;</span><span style="color:#C3E88D;">true</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 工作模式协程</span></span>
<span class="line"><span style="color:#FFCB6B;">worker_class</span><span style="color:#C3E88D;"> =</span><span style="color:#89DDFF;"> &#39;</span><span style="color:#C3E88D;">gevent</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 设置最大并发量</span></span>
<span class="line"><span style="color:#FFCB6B;">worker_connections</span><span style="color:#C3E88D;"> =</span><span style="color:#F78C6C;"> 2000</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 设置进程文件目录</span></span>
<span class="line"><span style="color:#FFCB6B;">pidfile</span><span style="color:#C3E88D;"> =</span><span style="color:#89DDFF;"> &#39;</span><span style="color:#C3E88D;">/var/run/gunicorn.pid</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 设置访问日志和错误信息日志路径</span></span>
<span class="line"><span style="color:#FFCB6B;">accesslog</span><span style="color:#C3E88D;"> =</span><span style="color:#89DDFF;"> &#39;</span><span style="color:#C3E88D;">/var/log/gunicorn_access.log</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#FFCB6B;">errorlog</span><span style="color:#C3E88D;"> =</span><span style="color:#89DDFF;"> &#39;</span><span style="color:#C3E88D;">/var/log/gunicorn_error.log</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 日志级别，这个日志级别指的是错误日志的级别，而访问日志的级别无法设置</span></span>
<span class="line"><span style="color:#FFCB6B;">loglevel</span><span style="color:#C3E88D;"> =</span><span style="color:#89DDFF;"> &#39;</span><span style="color:#C3E88D;">warning</span><span style="color:#89DDFF;">&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>启动应用：</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">gunicorn</span><span style="color:#C3E88D;"> -c</span><span style="color:#C3E88D;"> gunicorn.conf</span><span style="color:#C3E88D;"> main:app</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,47),o=[e];function r(c,t,i,y,u,b){return a(),n("div",null,o)}const d=s(p,[["render",r]]);export{F as __pageData,d as default};