import{_ as s,c as n,o as a,a4 as l,aQ as e}from"./chunks/framework.CCJHkvW2.js";const E=JSON.parse('{"title":"安装Comfyui","description":"","frontmatter":{},"headers":[],"relativePath":"ai/comfyui.md","filePath":"ai/comfyui.md","lastUpdated":1713833896000}'),p={name:"ai/comfyui.md"},t=l(`<h1 id="安装comfyui" tabindex="-1">安装Comfyui <a class="header-anchor" href="#安装comfyui" aria-label="Permalink to &quot;安装Comfyui&quot;">​</a></h1><p>AUTOMATIC1111一般指 webui</p><p>其对应就是comfyui</p><p>镜像地址</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#C3E88D;"> pull</span><span style="color:#C3E88D;"> registry.cn-beijing.aliyuncs.com/codewithgpu/comfyanonymous-comfyui:HqVNaPsLZI</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>启动镜像</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#C3E88D;"> run</span><span style="color:#C3E88D;"> -d</span><span style="color:#C3E88D;"> -p</span><span style="color:#C3E88D;"> 8899:8888</span><span style="color:#C3E88D;"> -p</span><span style="color:#C3E88D;"> 6099:6006</span><span style="color:#C3E88D;"> -v</span><span style="color:#C3E88D;"> /docker/comfyui:/comfyui</span><span style="color:#C3E88D;"> --name</span><span style="color:#C3E88D;"> comfyui-boot</span><span style="color:#C3E88D;"> 172.26.25.7:8070/custom/comfyui-boot</span><span style="color:#C3E88D;"> /bin/bash</span><span style="color:#C3E88D;"> -c</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">while true; do sleep 1; done</span><span style="color:#89DDFF;">&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>进入容器</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#C3E88D;"> exec</span><span style="color:#C3E88D;"> -it</span><span style="color:#C3E88D;"> comfyui-boot</span><span style="color:#C3E88D;"> bash</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="启动jupyter" tabindex="-1">启动jupyter <a class="header-anchor" href="#启动jupyter" aria-label="Permalink to &quot;启动jupyter&quot;">​</a></h2><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">vim</span><span style="color:#C3E88D;"> /root/.jupyter/jupyter_notebook_config.py</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;"># Configuration file for jupyter-notebook.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">c</span><span style="color:#C3E88D;"> =</span><span style="color:#C3E88D;"> get_config</span><span style="color:#89DDFF;">()</span><span style="color:#676E95;font-style:italic;">  #noqa</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#------------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># Application(SingletonConfigurable) configuration</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#------------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## This is an application.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## The date format used by logging formatters for %(asctime)s</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: &#39;%Y-%m-%d %H:%M:%S&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.Application.log_datefmt = &#39;%Y-%m-%d %H:%M:%S&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## The Logging format template</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: &#39;[%(name)s]%(highlevel)s %(message)s&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.Application.log_format = &#39;[%(name)s]%(highlevel)s %(message)s&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Set the log level by value or name.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Choices: any of [0, 10, 20, 30, 40, 50, &#39;DEBUG&#39;, &#39;INFO&#39;, &#39;WARN&#39;, &#39;ERROR&#39;, &#39;CRITICAL&#39;]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: 30</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.Application.log_level = 30</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Configure additional log handlers.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  The default stderr logs handler is configured by the log_level, log_datefmt</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  and log_format settings.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  This configuration can be used to configure additional handlers (e.g. to</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  output the log to a file) or for finer control over the default handlers.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  If provided this should be a logging configuration dictionary, for more</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  information see:</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  https://docs.python.org/3/library/logging.config.html#logging-config-</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  dictschema</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  This dictionary is merged with the base logging configuration which defines</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  the following:</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  * A logging formatter intended for interactive use called</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#    \`\`console\`\`.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  * A logging handler that writes to stderr called</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#    \`\`console\`\` which uses the formatter \`\`console\`\`.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  * A logger with the name of this application set to \`\`DEBUG\`\`</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#    level.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  This example adds a new handler that writes to a file:</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  .. code-block:: python</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#     c.Application.logging_config = {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#         &#39;handlers&#39;: {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#             &#39;file&#39;: {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#                 &#39;class&#39;: &#39;logging.FileHandler&#39;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#                 &#39;level&#39;: &#39;DEBUG&#39;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#                 &#39;filename&#39;: &#39;&lt;path/to/file&gt;&#39;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#             }</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#         },</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#         &#39;loggers&#39;: {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#             &#39;&lt;application-name&gt;&#39;: {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#                 &#39;level&#39;: &#39;DEBUG&#39;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#                 # NOTE: if you don&#39;t list the default &quot;console&quot;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#                 # handler here then it will be disabled</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#                 &#39;handlers&#39;: [&#39;console&#39;, &#39;file&#39;],</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#             },</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#         }</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#     }</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: {}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.Application.logging_config = {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Instead of starting the Application, dump configuration to stdout</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: False</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.Application.show_config = False</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Instead of starting the Application, dump configuration to stdout (as JSON)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: False</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.Application.show_config_json = False</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#------------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># JupyterApp(Application) configuration</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#------------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Base class for Jupyter applications</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Answer yes to any prompts.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: False</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.JupyterApp.answer_yes = False</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Full path of a config file.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: &#39;&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.JupyterApp.config_file = &#39;&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Specify a config file to load.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: &#39;&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.JupyterApp.config_file_name = &#39;&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Generate default config file.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: False</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.JupyterApp.generate_config = False</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## The date format used by logging formatters for %(asctime)s</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  See also: Application.log_datefmt</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.JupyterApp.log_datefmt = &#39;%Y-%m-%d %H:%M:%S&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## The Logging format template</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  See also: Application.log_format</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.JupyterApp.log_format = &#39;[%(name)s]%(highlevel)s %(message)s&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Set the log level by value or name.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  See also: Application.log_level</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.JupyterApp.log_level = 30</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  See also: Application.logging_config</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.JupyterApp.logging_config = {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Instead of starting the Application, dump configuration to stdout</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  See also: Application.show_config</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.JupyterApp.show_config = False</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Instead of starting the Application, dump configuration to stdout (as JSON)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  See also: Application.show_config_json</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.JupyterApp.show_config_json = False</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#------------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># NotebookApp(JupyterApp) configuration</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#------------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Set the Access-Control-Allow-Credentials: true header</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: False</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.NotebookApp.allow_credentials = False</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Set the Access-Control-Allow-Origin header</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          Use &#39;*&#39; to allow any origin to access your server.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          Takes precedence over allow_origin_pat.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: &#39;&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.NotebookApp.allow_origin = &#39;&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Use a regular expression for the Access-Control-Allow-Origin header</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          Requests from an origin matching the expression will get replies with:</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#              Access-Control-Allow-Origin: origin</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          where \`origin\` is the origin of the request.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          Ignored if allow_origin is set.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: &#39;&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.NotebookApp.allow_origin_pat = &#39;&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Allow password to be changed at login for the notebook server.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#                      While loggin in with a token, the notebook server UI will give the opportunity to</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#                      the user to enter a new password at the same time that will replace</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#                      the token login mechanism.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#                      This can be set to false to prevent changing password from</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  the UI/API.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: True</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.NotebookApp.allow_password_change = True</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Allow requests where the Host header doesn&#39;t point to a local server</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#         By default, requests get a 403 forbidden response if the &#39;Host&#39; header</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#         shows that the browser thinks it&#39;s on a non-local domain.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#         Setting this option to True disables this check.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#         This protects against &#39;DNS rebinding&#39; attacks, where a remote web server</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#         serves you a page and then changes its DNS to send later requests to a</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#         local IP, bypassing same-origin checks.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#         Local IP addresses (such as 127.0.0.1 and ::1) are allowed as local,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#         along with hostnames configured in local_hostnames.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: False</span></span>
<span class="line"><span style="color:#FFCB6B;">c.NotebookApp.allow_remote_access</span><span style="color:#C3E88D;"> =</span><span style="color:#C3E88D;"> True</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Whether to allow the user to run the notebook as root.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: False</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.NotebookApp.allow_root = False</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Answer yes to any prompts.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  See also: JupyterApp.answer_yes</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.NotebookApp.answer_yes = False</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Reload the webapp when changes are made to any Python src files.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: False</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.NotebookApp.autoreload = False</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## DEPRECATED use base_url</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: &#39;/&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.NotebookApp.base_project_url = &#39;/&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## The base URL for the notebook server.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#                                 Leading and trailing slashes can be omitted,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#                                 and will automatically be added.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: &#39;/&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.NotebookApp.base_url = &#39;/&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Specify what command to use to invoke a web</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#                        browser when opening the notebook. If not specified, the</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#                        default browser will be determined by the \`webbrowser\`</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#                        standard library module, which allows setting of the</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#                        BROWSER environment variable to override it.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: &#39;&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.NotebookApp.browser = &#39;&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## The full path to an SSL/TLS certificate file.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: &#39;&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.NotebookApp.certfile = &#39;&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## The full path to a certificate authority certificate for SSL/TLS client</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  authentication.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: &#39;&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.NotebookApp.client_ca = &#39;&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Full path of a config file.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  See also: JupyterApp.config_file</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.NotebookApp.config_file = &#39;&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Specify a config file to load.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  See also: JupyterApp.config_file_name</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.NotebookApp.config_file_name = &#39;&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## The config manager class to use</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: &#39;notebook.services.config.manager.ConfigManager&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.NotebookApp.config_manager_class = &#39;notebook.services.config.manager.ConfigManager&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## The notebook manager class to use.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: &#39;notebook.services.contents.largefilemanager.LargeFileManager&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.NotebookApp.contents_manager_class = &#39;notebook.services.contents.largefilemanager.LargeFileManager&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Extra keyword arguments to pass to \`set_secure_cookie\`. See tornado&#39;s</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  set_secure_cookie docs for details.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: {}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.NotebookApp.cookie_options = {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## The random bytes used to secure cookies.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          By default this is a new random number every time you start the Notebook.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          Set it to a value in a config file to enable logins to persist across server sessions.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          Note: Cookie secrets should be kept private, do not share config files with</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          cookie_secret stored in plaintext (you can read the value from a file).</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: b&#39;&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.NotebookApp.cookie_secret = b&#39;&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## The file where the cookie secret is stored.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: &#39;&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.NotebookApp.cookie_secret_file = &#39;&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Override URL shown to users.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          Replace actual URL, including protocol, address, port and base URL,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          with the given value when displaying URL to the users. Do not change</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          the actual connection URL. If authentication token is enabled, the</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          token is added to the custom URL automatically.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          This option is intended to be used when the URL to display to the user</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          cannot be determined reliably by the Jupyter notebook server (proxified</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          or containerized setups for example).</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: &#39;&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.NotebookApp.custom_display_url = &#39;&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## The default URL to redirect to from \`/\`</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: &#39;/tree&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.NotebookApp.default_url = &#39;/tree&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Disable cross-site-request-forgery protection</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          Jupyter notebook 4.3.1 introduces protection from cross-site request forgeries,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          requiring API requests to either:</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          - originate from pages served by this server (validated with XSRF cookie and token), or</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          - authenticate with a token</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          Some anonymous compute resources still desire the ability to run code,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          completely without authentication.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          These services can disable all authentication and security checks,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          with the full knowledge of what that implies.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: False</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.NotebookApp.disable_check_xsrf = False</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Whether to enable MathJax for typesetting math/TeX</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          MathJax is the javascript library Jupyter uses to render math/LaTeX. It is</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          very large, so you may want to disable it if you have a slow internet</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          connection, or for offline use of the notebook.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          When disabled, equations etc. will appear as their untransformed TeX</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  source.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: True</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.NotebookApp.enable_mathjax = True</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## extra paths to look for Javascript notebook extensions</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: []</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.NotebookApp.extra_nbextensions_path = []</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## handlers that should be loaded at higher priority than the default services</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: []</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.NotebookApp.extra_services = []</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Extra paths to search for serving static files.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          This allows adding javascript/css to be available from the notebook server machine,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          or overriding individual files in the IPython</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: []</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.NotebookApp.extra_static_paths = []</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Extra paths to search for serving jinja templates.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          Can be used to override templates from notebook.templates.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: []</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.NotebookApp.extra_template_paths = []</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: &#39;&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.NotebookApp.file_to_run = &#39;&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Generate default config file.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  See also: JupyterApp.generate_config</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.NotebookApp.generate_config = False</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Extra keyword arguments to pass to \`get_secure_cookie\`. See tornado&#39;s</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  get_secure_cookie docs for details.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: {}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.NotebookApp.get_secure_cookie_kwargs = {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Deprecated: Use minified JS file or not, mainly use during dev to avoid JS</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  recompilation</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: False</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.NotebookApp.ignore_minified_js = False</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## (bytes/sec)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          Maximum rate at which stream output can be sent on iopub before they are</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          limited.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: 1000000</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.NotebookApp.iopub_data_rate_limit = 1000000</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## (msgs/sec)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          Maximum rate at which messages can be sent on iopub before they are</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          limited.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: 1000</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.NotebookApp.iopub_msg_rate_limit = 1000</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## The IP address the notebook server will listen on.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: &#39;localhost&#39;</span></span>
<span class="line"><span style="color:#FFCB6B;">c.NotebookApp.ip</span><span style="color:#C3E88D;"> =</span><span style="color:#89DDFF;"> &#39;&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Supply extra arguments that will be passed to Jinja environment.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: {}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.NotebookApp.jinja_environment_options = {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Extra variables to supply to jinja templates when rendering.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: {}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.NotebookApp.jinja_template_vars = {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## The kernel manager class to use.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: &#39;notebook.services.kernels.kernelmanager.MappingKernelManager&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.NotebookApp.kernel_manager_class = &#39;notebook.services.kernels.kernelmanager.MappingKernelManager&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## The kernel spec manager class to use. Should be a subclass of</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  \`jupyter_client.kernelspec.KernelSpecManager\`.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  The Api of KernelSpecManager is provisional and might change without warning</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  between this version of Jupyter and the next stable one.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: &#39;jupyter_client.kernelspec.KernelSpecManager&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.NotebookApp.kernel_spec_manager_class = &#39;jupyter_client.kernelspec.KernelSpecManager&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## The full path to a private key file for usage with SSL/TLS.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: &#39;&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.NotebookApp.keyfile = &#39;&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Hostnames to allow as local when allow_remote_access is False.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#         Local IP addresses (such as 127.0.0.1 and ::1) are automatically accepted</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#         as local as well.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: [&#39;localhost&#39;]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.NotebookApp.local_hostnames = [&#39;localhost&#39;]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## The date format used by logging formatters for %(asctime)s</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  See also: Application.log_datefmt</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.NotebookApp.log_datefmt = &#39;%Y-%m-%d %H:%M:%S&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## The Logging format template</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  See also: Application.log_format</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.NotebookApp.log_format = &#39;[%(name)s]%(highlevel)s %(message)s&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Set the log level by value or name.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  See also: Application.log_level</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.NotebookApp.log_level = 30</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  See also: Application.logging_config</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.NotebookApp.logging_config = {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## The login handler class to use.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: &#39;notebook.auth.login.LoginHandler&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.NotebookApp.login_handler_class = &#39;notebook.auth.login.LoginHandler&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## The logout handler class to use.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: &#39;notebook.auth.logout.LogoutHandler&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.NotebookApp.logout_handler_class = &#39;notebook.auth.logout.LogoutHandler&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## The MathJax.js configuration file that is to be used.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: &#39;TeX-AMS-MML_HTMLorMML-full,Safe&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.NotebookApp.mathjax_config = &#39;TeX-AMS-MML_HTMLorMML-full,Safe&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## A custom url for MathJax.js.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          Should be in the form of a case-sensitive url to MathJax,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          for example:  /static/components/MathJax/MathJax.js</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: &#39;&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.NotebookApp.mathjax_url = &#39;&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Sets the maximum allowed size of the client request body, specified in the</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Content-Length request header field. If the size in a request exceeds the</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  configured value, a malformed HTTP message is returned to the client.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Note: max_body_size is applied even in streaming mode.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: 536870912</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.NotebookApp.max_body_size = 536870912</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Gets or sets the maximum amount of memory, in bytes, that is allocated for use</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  by the buffer manager.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: 536870912</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.NotebookApp.max_buffer_size = 536870912</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Gets or sets a lower bound on the open file handles process resource limit.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  This may need to be increased if you run into an OSError: [Errno 24] Too many</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  open files. This is not applicable when running on Windows.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: 0</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.NotebookApp.min_open_files_limit = 0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Dict of Python modules to load as notebook server extensions.Entry values can</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  be used to enable and disable the loading ofthe extensions. The extensions</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  will be loaded in alphabetical order.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: {}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.NotebookApp.nbserver_extensions = {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## The directory to use for notebooks and kernels.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: &#39;&#39;</span></span>
<span class="line"><span style="color:#FFCB6B;">c.NotebookApp.notebook_dir</span><span style="color:#C3E88D;"> =</span><span style="color:#89DDFF;"> &#39;</span><span style="color:#C3E88D;">/root</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Whether to open in a browser after starting.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#                          The specific browser used is platform dependent and</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#                          determined by the python standard library \`webbrowser\`</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#                          module, unless it is overridden using the --browser</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#                          (NotebookApp.browser) configuration option.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: True</span></span>
<span class="line"><span style="color:#FFCB6B;">c.NotebookApp.open_browser</span><span style="color:#C3E88D;"> =</span><span style="color:#C3E88D;"> False</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Hashed password to use for web authentication.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#                        To generate, type in a python/IPython shell:</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#                          from notebook.auth import passwd; passwd()</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#                        The string should be of the form type:salt:hashed-</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  password.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: &#39;&#39;</span></span>
<span class="line"><span style="color:#FFCB6B;">c.NotebookApp.password</span><span style="color:#C3E88D;"> =</span><span style="color:#89DDFF;"> &#39;&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Forces users to use a password for the Notebook server.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#                        This is useful in a multi user environment, for instance when</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#                        everybody in the LAN can access each other&#39;s machine through ssh.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#                        In such a case, serving the notebook server on localhost is not secure</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#                        since any user can connect to the notebook server via ssh.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: False</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.NotebookApp.password_required = False</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## The port the notebook server will listen on (env: JUPYTER_PORT).</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: 8888</span></span>
<span class="line"><span style="color:#FFCB6B;">c.NotebookApp.port</span><span style="color:#C3E88D;"> =</span><span style="color:#F78C6C;"> 8888</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## The number of additional ports to try if the specified port is not available</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  (env: JUPYTER_PORT_RETRIES).</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: 50</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.NotebookApp.port_retries = 50</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## DISABLED: use %pylab or %matplotlib in the notebook to enable matplotlib.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: &#39;disabled&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.NotebookApp.pylab = &#39;disabled&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## If True, display a button in the dashboard to quit</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          (shutdown the notebook server).</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: True</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.NotebookApp.quit_button = True</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## (sec) Time window used to</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          check the message and data rate limits.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: 3</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.NotebookApp.rate_limit_window = 3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Reraise exceptions encountered loading server extensions?</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: False</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.NotebookApp.reraise_server_extension_failures = False</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## DEPRECATED use the nbserver_extensions dict instead</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: []</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.NotebookApp.server_extensions = []</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## The session manager class to use.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: &#39;notebook.services.sessions.sessionmanager.SessionManager&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.NotebookApp.session_manager_class = &#39;notebook.services.sessions.sessionmanager.SessionManager&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Instead of starting the Application, dump configuration to stdout</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  See also: Application.show_config</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.NotebookApp.show_config = False</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Instead of starting the Application, dump configuration to stdout (as JSON)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  See also: Application.show_config_json</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.NotebookApp.show_config_json = False</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Shut down the server after N seconds with no kernels or terminals running and</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  no activity. This can be used together with culling idle kernels</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  (MappingKernelManager.cull_idle_timeout) to shutdown the notebook server when</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  it&#39;s not in use. This is not precisely timed: it may shut down up to a minute</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  later. 0 (the default) disables this automatic shutdown.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: 0</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.NotebookApp.shutdown_no_activity_timeout = 0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## The UNIX socket the notebook server will listen on.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: &#39;&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.NotebookApp.sock = &#39;&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## The permissions mode for UNIX socket creation (default: 0600).</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: &#39;0600&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.NotebookApp.sock_mode = &#39;0600&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Supply SSL options for the tornado HTTPServer.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#              See the tornado docs for details.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: {}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.NotebookApp.ssl_options = {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Supply overrides for terminado. Currently only supports &quot;shell_command&quot;. On</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Unix, if &quot;shell_command&quot; is not provided, a non-login shell is launched by</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  default when the notebook server is connected to a terminal, a login shell</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  otherwise.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: {}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.NotebookApp.terminado_settings = {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Set to False to disable terminals.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#           This does *not* make the notebook server more secure by itself.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#           Anything the user can in a terminal, they can also do in a notebook.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#           Terminals may also be automatically disabled if the terminado package</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#           is not available.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: True</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.NotebookApp.terminals_enabled = True</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Token used for authenticating first-time connections to the server.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          The token can be read from the file referenced by JUPYTER_TOKEN_FILE or set directly</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          with the JUPYTER_TOKEN environment variable.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          When no password is enabled,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          the default is to generate a new, random token.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          Setting to an empty string disables authentication altogether, which</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  is NOT RECOMMENDED.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: &#39;&lt;generated&gt;&#39;</span></span>
<span class="line"><span style="color:#FFCB6B;">c.NotebookApp.token</span><span style="color:#C3E88D;"> =</span><span style="color:#89DDFF;"> &#39;&#39;</span></span>
<span class="line"><span style="color:#FFCB6B;">c.NotebookApp.terminado_settings</span><span style="color:#C3E88D;"> =</span><span style="color:#C3E88D;"> {</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">shell_command</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> :</span><span style="color:#BABED8;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/bin/bash</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">]}</span></span>
<span class="line"><span style="color:#FFCB6B;">c.NotebookApp.terminals_enabled</span><span style="color:#C3E88D;"> =</span><span style="color:#C3E88D;"> True</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Supply overrides for the tornado.web.Application that the Jupyter notebook</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  uses.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: {}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.NotebookApp.tornado_settings = {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Whether to trust or not X-Scheme/X-Forwarded-Proto and X-Real-Ip/X-Forwarded-</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  For headerssent by the upstream reverse proxy. Necessary if the proxy handles</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  SSL</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: False</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.NotebookApp.trust_xheaders = False</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Disable launching browser by redirect file</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          For versions of notebook &gt; 5.7.2, a security feature measure was added that</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          prevented the authentication token used to launch the browser from being visible.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          This feature makes it difficult for other users on a multi-user system from</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          running code in your Jupyter session as you.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          However, some environments (like Windows Subsystem for Linux (WSL) and Chromebooks),</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          launching a browser using a redirect file can lead the browser failing to load.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          This is because of the difference in file structures/paths between the runtime and</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          the browser.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          Disabling this setting to False will disable this behavior, allowing the browser</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          to launch by using a URL and visible token (as before).</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: True</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.NotebookApp.use_redirect_file = True</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## DEPRECATED, use tornado_settings</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: {}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.NotebookApp.webapp_settings = {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Specify Where to open the notebook on startup. This is the</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          \`new\` argument passed to the standard library method \`webbrowser.open\`.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          The behaviour is not guaranteed, but depends on browser support. Valid</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          values are:</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#           - 2 opens a new tab,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#           - 1 opens a new window,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#           - 0 opens in an existing window.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          See the \`webbrowser.open\` documentation for details.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: 2</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.NotebookApp.webbrowser_open_new = 2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Set the tornado compression options for websocket connections.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  This value will be returned from</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  :meth:\`WebSocketHandler.get_compression_options\`. None (default) will disable</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  compression. A dict (even an empty one) will enable compression.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  See the tornado docs for WebSocketHandler.get_compression_options for details.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: None</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.NotebookApp.websocket_compression_options = None</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## The base URL for websockets,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          if it differs from the HTTP server (hint: it almost certainly doesn&#39;t).</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          Should be in the form of an HTTP origin: ws[s]://hostname[:port]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: &#39;&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.NotebookApp.websocket_url = &#39;&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#------------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># ConnectionFileMixin(LoggingConfigurable) configuration</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#------------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Mixin for configurable classes that work with connection files</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## JSON file in which to store connection info [default: kernel-&lt;pid&gt;.json]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#      This file will contain the IP, ports, and authentication key needed to connect</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#      clients to this kernel. By default, this file will be created in the security dir</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#      of the current profile, but can be specified by absolute path.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: &#39;&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.ConnectionFileMixin.connection_file = &#39;&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## set the control (ROUTER) port [default: random]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: 0</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.ConnectionFileMixin.control_port = 0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## set the heartbeat port [default: random]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: 0</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.ConnectionFileMixin.hb_port = 0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## set the iopub (PUB) port [default: random]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: 0</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.ConnectionFileMixin.iopub_port = 0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Set the kernel&#39;s IP address [default localhost].</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          If the IP address is something other than localhost, then</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          Consoles on other machines will be able to connect</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          to the Kernel, so be careful!</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: &#39;&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.ConnectionFileMixin.ip = &#39;&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## set the shell (ROUTER) port [default: random]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: 0</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.ConnectionFileMixin.shell_port = 0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## set the stdin (ROUTER) port [default: random]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: 0</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.ConnectionFileMixin.stdin_port = 0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Choices: any of [&#39;tcp&#39;, &#39;ipc&#39;] (case-insensitive)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: &#39;tcp&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.ConnectionFileMixin.transport = &#39;tcp&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#------------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># KernelManager(ConnectionFileMixin) configuration</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#------------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Manages a single kernel in a subprocess on this host.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#      This version starts kernels with Popen.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Should we autorestart the kernel if it dies.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: True</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.KernelManager.autorestart = True</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## JSON file in which to store connection info [default: kernel-&lt;pid&gt;.json]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  See also: ConnectionFileMixin.connection_file</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.KernelManager.connection_file = &#39;&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## set the control (ROUTER) port [default: random]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  See also: ConnectionFileMixin.control_port</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.KernelManager.control_port = 0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## set the heartbeat port [default: random]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  See also: ConnectionFileMixin.hb_port</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.KernelManager.hb_port = 0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## set the iopub (PUB) port [default: random]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  See also: ConnectionFileMixin.iopub_port</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.KernelManager.iopub_port = 0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Set the kernel&#39;s IP address [default localhost].</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  See also: ConnectionFileMixin.ip</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.KernelManager.ip = &#39;&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## set the shell (ROUTER) port [default: random]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  See also: ConnectionFileMixin.shell_port</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.KernelManager.shell_port = 0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Time to wait for a kernel to terminate before killing it, in seconds. When a</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  shutdown request is initiated, the kernel will be immediately sent an</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  interrupt (SIGINT), followedby a shutdown_request message, after 1/2 of</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  \`shutdown_wait_time\`it will be sent a terminate (SIGTERM) request, and finally</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  at the end of \`shutdown_wait_time\` will be killed (SIGKILL). terminate and</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  kill may be equivalent on windows.  Note that this value can beoverridden by</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  the in-use kernel provisioner since shutdown times mayvary by provisioned</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  environment.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: 5.0</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.KernelManager.shutdown_wait_time = 5.0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## set the stdin (ROUTER) port [default: random]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  See also: ConnectionFileMixin.stdin_port</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.KernelManager.stdin_port = 0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  See also: ConnectionFileMixin.transport</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.KernelManager.transport = &#39;tcp&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#------------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># Session(Configurable) configuration</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#------------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Object for handling serialization and sending of messages.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#      The Session object handles building messages and sending them</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#      with ZMQ sockets or ZMQStream objects.  Objects can communicate with each</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#      other over the network via Session objects, and only need to work with the</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#      dict-based IPython message spec. The Session will handle</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#      serialization/deserialization, security, and metadata.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#      Sessions support configurable serialization via packer/unpacker traits,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#      and signing with HMAC digests via the key/keyfile traits.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#      Parameters</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#      ----------</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#      debug : bool</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          whether to trigger extra debugging statements</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#      packer/unpacker : str : &#39;json&#39;, &#39;pickle&#39; or import_string</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          importstrings for methods to serialize message parts.  If just</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          &#39;json&#39; or &#39;pickle&#39;, predefined JSON and pickle packers will be used.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          Otherwise, the entire importstring must be used.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          The functions must accept at least valid JSON input, and output</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  *bytes*.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          For example, to use msgpack:</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          packer = &#39;msgpack.packb&#39;, unpacker=&#39;msgpack.unpackb&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#      pack/unpack : callables</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          You can also set the pack/unpack callables for serialization directly.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#      session : bytes</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          the ID of this Session object.  The default is to generate a new UUID.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#      username : unicode</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          username added to message headers.  The default is to ask the OS.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#      key : bytes</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          The key used to initialize an HMAC signature.  If unset, messages</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          will not be signed or checked.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#      keyfile : filepath</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          The file containing a key.  If this is set, \`key\` will be initialized</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          to the contents of the file.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Threshold (in bytes) beyond which an object&#39;s buffer should be extracted to</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  avoid pickling.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: 1024</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.Session.buffer_threshold = 1024</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Whether to check PID to protect against calls after fork.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          This check can be disabled if fork-safety is handled elsewhere.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: True</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.Session.check_pid = True</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Threshold (in bytes) beyond which a buffer should be sent without copying.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: 65536</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.Session.copy_threshold = 65536</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Debug output in the Session</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: False</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.Session.debug = False</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## The maximum number of digests to remember.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          The digest history will be culled when it exceeds this value.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: 65536</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.Session.digest_history_size = 65536</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## The maximum number of items for a container to be introspected for custom serialization.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          Containers larger than this are pickled outright.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: 64</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.Session.item_threshold = 64</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## execution key, for signing messages.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: b&#39;&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.Session.key = b&#39;&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## path to file containing execution key.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: &#39;&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.Session.keyfile = &#39;&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Metadata dictionary, which serves as the default top-level metadata dict for</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  each message.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: {}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.Session.metadata = {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## The name of the packer for serializing messages.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#              Should be one of &#39;json&#39;, &#39;pickle&#39;, or an import name</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#              for a custom callable serializer.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: &#39;json&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.Session.packer = &#39;json&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## The UUID identifying this session.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: &#39;&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.Session.session = &#39;&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## The digest scheme used to construct the message signatures.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          Must have the form &#39;hmac-HASH&#39;.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: &#39;hmac-sha256&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.Session.signature_scheme = &#39;hmac-sha256&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## The name of the unpacker for unserializing messages.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          Only used with custom functions for \`packer\`.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: &#39;json&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.Session.unpacker = &#39;json&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Username for the Session. Default is your system username.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: &#39;username&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.Session.username = &#39;username&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#------------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># MultiKernelManager(LoggingConfigurable) configuration</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#------------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## A class for managing multiple kernels.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## The name of the default kernel to start</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: &#39;python3&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.MultiKernelManager.default_kernel_name = &#39;python3&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## The kernel manager class.  This is configurable to allow</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          subclassing of the KernelManager for customized behavior.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: &#39;jupyter_client.ioloop.IOLoopKernelManager&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.MultiKernelManager.kernel_manager_class = &#39;jupyter_client.ioloop.IOLoopKernelManager&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Share a single zmq.Context to talk to all my kernels</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: True</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.MultiKernelManager.shared_context = True</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#------------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># MappingKernelManager(MultiKernelManager) configuration</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#------------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## A KernelManager that handles notebook mapping and HTTP error handling</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## White list of allowed kernel message types.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          When the list is empty, all message types are allowed.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: []</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.MappingKernelManager.allowed_message_types = []</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Whether messages from kernels whose frontends have disconnected should be buffered in-memory.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          When True (default), messages are buffered and replayed on reconnect,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          avoiding lost messages due to interrupted connectivity.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          Disable if long-running kernels will produce too much output while</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          no frontends are connected.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: True</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.MappingKernelManager.buffer_offline_messages = True</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Whether to consider culling kernels which are busy.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          Only effective if cull_idle_timeout &gt; 0.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: False</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.MappingKernelManager.cull_busy = False</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Whether to consider culling kernels which have one or more connections.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          Only effective if cull_idle_timeout &gt; 0.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: False</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.MappingKernelManager.cull_connected = False</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Timeout (in seconds) after which a kernel is considered idle and ready to be culled.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          Values of 0 or lower disable culling. Very short timeouts may result in kernels being culled</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          for users with poor network connections.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: 0</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.MappingKernelManager.cull_idle_timeout = 0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## The interval (in seconds) on which to check for idle kernels exceeding the</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  cull timeout value.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: 300</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.MappingKernelManager.cull_interval = 300</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## The name of the default kernel to start</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  See also: MultiKernelManager.default_kernel_name</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.MappingKernelManager.default_kernel_name = &#39;python3&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Timeout for giving up on a kernel (in seconds).</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          On starting and restarting kernels, we check whether the</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          kernel is running and responsive by sending kernel_info_requests.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          This sets the timeout in seconds for how long the kernel can take</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          before being presumed dead.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          This affects the MappingKernelManager (which handles kernel restarts)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          and the ZMQChannelsHandler (which handles the startup).</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: 60</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.MappingKernelManager.kernel_info_timeout = 60</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## The kernel manager class.  This is configurable to allow</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  See also: MultiKernelManager.kernel_manager_class</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.MappingKernelManager.kernel_manager_class = &#39;jupyter_client.ioloop.IOLoopKernelManager&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: &#39;&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.MappingKernelManager.root_dir = &#39;&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Share a single zmq.Context to talk to all my kernels</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  See also: MultiKernelManager.shared_context</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.MappingKernelManager.shared_context = True</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#------------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># KernelSpecManager(LoggingConfigurable) configuration</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#------------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## A manager for kernel specs.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## List of allowed kernel names.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          By default, all installed kernels are allowed.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: set()</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.KernelSpecManager.allowed_kernelspecs = set()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## If there is no Python kernelspec registered and the IPython</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          kernel is available, ensure it is added to the spec list.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: True</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.KernelSpecManager.ensure_native_kernel = True</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## The kernel spec class.  This is configurable to allow</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          subclassing of the KernelSpecManager for customized behavior.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: &#39;jupyter_client.kernelspec.KernelSpec&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.KernelSpecManager.kernel_spec_class = &#39;jupyter_client.kernelspec.KernelSpec&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Deprecated, use \`KernelSpecManager.allowed_kernelspecs\`</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: set()</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.KernelSpecManager.whitelist = set()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#------------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># ContentsManager(LoggingConfigurable) configuration</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#------------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Base class for serving files and directories.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#      This serves any text or binary file,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#      as well as directories,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#      with special handling for JSON notebook documents.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#      Most APIs take a path argument,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#      which is always an API-style unicode path,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#      and always refers to a directory.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#      - unicode, not url-escaped</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#      - &#39;/&#39;-separated</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#      - leading and trailing &#39;/&#39; will be stripped</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#      - if unspecified, path defaults to &#39;&#39;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#        indicating the root path.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Allow access to hidden files</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: False</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.ContentsManager.allow_hidden = False</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: None</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.ContentsManager.checkpoints = None</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: &#39;notebook.services.contents.checkpoints.Checkpoints&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.ContentsManager.checkpoints_class = &#39;notebook.services.contents.checkpoints.Checkpoints&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: {}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.ContentsManager.checkpoints_kwargs = {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## handler class to use when serving raw file requests.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          Default is a fallback that talks to the ContentsManager API,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          which may be inefficient, especially for large files.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          Local files-based ContentsManagers can use a StaticFileHandler subclass,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          which will be much more efficient.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          Access to these files should be Authenticated.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: &#39;notebook.files.handlers.FilesHandler&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.ContentsManager.files_handler_class = &#39;notebook.files.handlers.FilesHandler&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Extra parameters to pass to files_handler_class.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          For example, StaticFileHandlers generally expect a \`path\` argument</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          specifying the root directory from which to serve files.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: {}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.ContentsManager.files_handler_params = {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Glob patterns to hide in file and directory listings.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: [&#39;__pycache__&#39;, &#39;*.pyc&#39;, &#39;*.pyo&#39;, &#39;.DS_Store&#39;, &#39;*.so&#39;, &#39;*.dylib&#39;, &#39;*~&#39;]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.ContentsManager.hide_globs = [&#39;__pycache__&#39;, &#39;*.pyc&#39;, &#39;*.pyo&#39;, &#39;.DS_Store&#39;, &#39;*.so&#39;, &#39;*.dylib&#39;, &#39;*~&#39;]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Python callable or importstring thereof</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          To be called on a contents model prior to save.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          This can be used to process the structure,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          such as removing notebook outputs or other side effects that</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          should not be saved.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          It will be called as (all arguments passed by keyword)::</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#              hook(path=path, model=model, contents_manager=self)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          - model: the model to be saved. Includes file contents.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#            Modifying this dict will affect the file that is stored.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          - path: the API path of the save destination</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          - contents_manager: this ContentsManager instance</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: None</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.ContentsManager.pre_save_hook = None</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: &#39;/&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.ContentsManager.root_dir = &#39;/&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## The base name used when creating untitled directories.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: &#39;Untitled Folder&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.ContentsManager.untitled_directory = &#39;Untitled Folder&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## The base name used when creating untitled files.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: &#39;untitled&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.ContentsManager.untitled_file = &#39;untitled&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## The base name used when creating untitled notebooks.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: &#39;Untitled&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.ContentsManager.untitled_notebook = &#39;Untitled&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#------------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># FileManagerMixin(Configurable) configuration</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#------------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Mixin for ContentsAPI classes that interact with the filesystem.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Provides facilities for reading, writing, and copying both notebooks and</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  generic files.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Shared by FileContentsManager and FileCheckpoints.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Note ---- Classes using this mixin must provide the following attributes:</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  root_dir : unicode</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#      A directory against against which API-style paths are to be resolved.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  log : logging.Logger</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## By default notebooks are saved on disk on a temporary file and then if successfully written, it replaces the old ones.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#        This procedure, namely &#39;atomic_writing&#39;, causes some bugs on file system without operation order enforcement (like some networked fs).</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#        If set to False, the new notebook is written directly on the old one which could fail (eg: full filesystem or quota )</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: True</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.FileManagerMixin.use_atomic_writing = True</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#------------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># FileContentsManager(FileManagerMixin, ContentsManager) configuration</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#------------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Allow access to hidden files</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  See also: ContentsManager.allow_hidden</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.FileContentsManager.allow_hidden = False</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  See also: ContentsManager.checkpoints</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.FileContentsManager.checkpoints = None</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  See also: ContentsManager.checkpoints_class</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.FileContentsManager.checkpoints_class = &#39;notebook.services.contents.checkpoints.Checkpoints&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  See also: ContentsManager.checkpoints_kwargs</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.FileContentsManager.checkpoints_kwargs = {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## If True (default), deleting files will send them to the</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          platform&#39;s trash/recycle bin, where they can be recovered. If False,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          deleting files really deletes them.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: True</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.FileContentsManager.delete_to_trash = True</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## handler class to use when serving raw file requests.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  See also: ContentsManager.files_handler_class</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.FileContentsManager.files_handler_class = &#39;notebook.files.handlers.FilesHandler&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Extra parameters to pass to files_handler_class.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  See also: ContentsManager.files_handler_params</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.FileContentsManager.files_handler_params = {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  See also: ContentsManager.hide_globs</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.FileContentsManager.hide_globs = [&#39;__pycache__&#39;, &#39;*.pyc&#39;, &#39;*.pyo&#39;, &#39;.DS_Store&#39;, &#39;*.so&#39;, &#39;*.dylib&#39;, &#39;*~&#39;]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Python callable or importstring thereof</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          to be called on the path of a file just saved.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          This can be used to process the file on disk,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          such as converting the notebook to a script or HTML via nbconvert.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          It will be called as (all arguments passed by keyword)::</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#              hook(os_path=os_path, model=model, contents_manager=instance)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          - path: the filesystem path to the file just written</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          - model: the model representing the file</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          - contents_manager: this ContentsManager instance</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: None</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.FileContentsManager.post_save_hook = None</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Python callable or importstring thereof</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  See also: ContentsManager.pre_save_hook</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.FileContentsManager.pre_save_hook = None</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: &#39;&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.FileContentsManager.root_dir = &#39;&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## DEPRECATED, use post_save_hook. Will be removed in Notebook 5.0</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: False</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.FileContentsManager.save_script = False</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## The base name used when creating untitled directories.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  See also: ContentsManager.untitled_directory</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.FileContentsManager.untitled_directory = &#39;Untitled Folder&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## The base name used when creating untitled files.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  See also: ContentsManager.untitled_file</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.FileContentsManager.untitled_file = &#39;untitled&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## The base name used when creating untitled notebooks.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  See also: ContentsManager.untitled_notebook</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.FileContentsManager.untitled_notebook = &#39;Untitled&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## By default notebooks are saved on disk on a temporary file and then if</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  successfully written, it replaces the old ones.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  See also: FileManagerMixin.use_atomic_writing</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.FileContentsManager.use_atomic_writing = True</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#------------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># NotebookNotary(LoggingConfigurable) configuration</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#------------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## A class for computing and verifying notebook signatures.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## The hashing algorithm used to sign notebooks.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Choices: any of [&#39;sha3_384&#39;, &#39;blake2b&#39;, &#39;sha3_512&#39;, &#39;blake2s&#39;, &#39;sha224&#39;, &#39;sha3_224&#39;, &#39;sha256&#39;, &#39;sha384&#39;, &#39;sha3_256&#39;, &#39;md5&#39;, &#39;sha1&#39;, &#39;sha512&#39;]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: &#39;sha256&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.NotebookNotary.algorithm = &#39;sha256&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## The storage directory for notary secret and database.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: &#39;&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.NotebookNotary.data_dir = &#39;&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## The sqlite file in which to store notebook signatures.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          By default, this will be in your Jupyter data directory.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          You can set it to &#39;:memory:&#39; to disable sqlite writing to the filesystem.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: &#39;&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.NotebookNotary.db_file = &#39;&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## The secret key with which notebooks are signed.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: b&#39;&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.NotebookNotary.secret = b&#39;&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## The file where the secret key is stored.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: &#39;&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.NotebookNotary.secret_file = &#39;&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## A callable returning the storage backend for notebook signatures.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#           The default uses an SQLite database.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: traitlets.Undefined</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.NotebookNotary.store_factory = traitlets.Undefined</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#------------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># GatewayKernelManager(MappingKernelManager) configuration</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#------------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Kernel manager that supports remote kernels hosted by Jupyter Kernel or</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Enterprise Gateway.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## White list of allowed kernel message types.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  See also: MappingKernelManager.allowed_message_types</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.GatewayKernelManager.allowed_message_types = []</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Whether messages from kernels whose frontends have disconnected should be</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  buffered in-memory.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  See also: MappingKernelManager.buffer_offline_messages</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.GatewayKernelManager.buffer_offline_messages = True</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Whether to consider culling kernels which are busy.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  See also: MappingKernelManager.cull_busy</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.GatewayKernelManager.cull_busy = False</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Whether to consider culling kernels which have one or more connections.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  See also: MappingKernelManager.cull_connected</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.GatewayKernelManager.cull_connected = False</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Timeout (in seconds) after which a kernel is considered idle and ready to be</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  culled.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  See also: MappingKernelManager.cull_idle_timeout</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.GatewayKernelManager.cull_idle_timeout = 0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## The interval (in seconds) on which to check for idle kernels exceeding the</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  cull timeout value.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  See also: MappingKernelManager.cull_interval</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.GatewayKernelManager.cull_interval = 300</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## The name of the default kernel to start</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  See also: MultiKernelManager.default_kernel_name</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.GatewayKernelManager.default_kernel_name = &#39;python3&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Timeout for giving up on a kernel (in seconds).</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  See also: MappingKernelManager.kernel_info_timeout</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.GatewayKernelManager.kernel_info_timeout = 60</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## The kernel manager class.  This is configurable to allow</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  See also: MultiKernelManager.kernel_manager_class</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.GatewayKernelManager.kernel_manager_class = &#39;jupyter_client.ioloop.IOLoopKernelManager&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  See also: MappingKernelManager.root_dir</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.GatewayKernelManager.root_dir = &#39;&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Share a single zmq.Context to talk to all my kernels</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  See also: MultiKernelManager.shared_context</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.GatewayKernelManager.shared_context = True</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#------------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># GatewayKernelSpecManager(KernelSpecManager) configuration</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#------------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## List of allowed kernel names.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  See also: KernelSpecManager.allowed_kernelspecs</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.GatewayKernelSpecManager.allowed_kernelspecs = set()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## If there is no Python kernelspec registered and the IPython</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  See also: KernelSpecManager.ensure_native_kernel</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.GatewayKernelSpecManager.ensure_native_kernel = True</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## The kernel spec class.  This is configurable to allow</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  See also: KernelSpecManager.kernel_spec_class</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.GatewayKernelSpecManager.kernel_spec_class = &#39;jupyter_client.kernelspec.KernelSpec&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Deprecated, use \`KernelSpecManager.allowed_kernelspecs\`</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  See also: KernelSpecManager.whitelist</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.GatewayKernelSpecManager.whitelist = set()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#------------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># GatewayClient(SingletonConfigurable) configuration</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#------------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## This class manages the configuration.  It&#39;s its own singleton class so that we</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#         can share these values across all objects.  It also contains some helper methods</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          to build request arguments out of the various config options.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## The authorization token used in the HTTP headers.  (JUPYTER_GATEWAY_AUTH_TOKEN</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  env var)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: None</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.GatewayClient.auth_token = None</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## The filename of CA certificates or None to use defaults.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  (JUPYTER_GATEWAY_CA_CERTS env var)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: None</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.GatewayClient.ca_certs = None</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## The filename for client SSL certificate, if any.  (JUPYTER_GATEWAY_CLIENT_CERT</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  env var)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: None</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.GatewayClient.client_cert = None</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## The filename for client SSL key, if any.  (JUPYTER_GATEWAY_CLIENT_KEY env var)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: None</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.GatewayClient.client_key = None</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## The time allowed for HTTP connection establishment with the Gateway server.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          (JUPYTER_GATEWAY_CONNECT_TIMEOUT env var)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: 40.0</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.GatewayClient.connect_timeout = 40.0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## A comma-separated list of environment variable names that will be included, along with</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#           their values, in the kernel startup request.  The corresponding \`env_whitelist\` configuration</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#           value must also be set on the Gateway server - since that configuration value indicates which</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#           environmental values to make available to the kernel. (JUPYTER_GATEWAY_ENV_WHITELIST env var)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: &#39;&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.GatewayClient.env_whitelist = &#39;&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Additional HTTP headers to pass on the request.  This value will be converted to a dict.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#            (JUPYTER_GATEWAY_HEADERS env var)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: &#39;{}&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.GatewayClient.headers = &#39;{}&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## The password for HTTP authentication.  (JUPYTER_GATEWAY_HTTP_PWD env var)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: None</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.GatewayClient.http_pwd = None</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## The username for HTTP authentication. (JUPYTER_GATEWAY_HTTP_USER env var)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: None</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.GatewayClient.http_user = None</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## The gateway API endpoint for accessing kernel resources</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  (JUPYTER_GATEWAY_KERNELS_ENDPOINT env var)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: &#39;/api/kernels&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.GatewayClient.kernels_endpoint = &#39;/api/kernels&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## The gateway API endpoint for accessing kernelspecs</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  (JUPYTER_GATEWAY_KERNELSPECS_ENDPOINT env var)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: &#39;/api/kernelspecs&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.GatewayClient.kernelspecs_endpoint = &#39;/api/kernelspecs&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## The gateway endpoint for accessing kernelspecs resources</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#              (JUPYTER_GATEWAY_KERNELSPECS_RESOURCE_ENDPOINT env var)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: &#39;/kernelspecs&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.GatewayClient.kernelspecs_resource_endpoint = &#39;/kernelspecs&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## The time allowed for HTTP request completion. (JUPYTER_GATEWAY_REQUEST_TIMEOUT</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  env var)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: 40.0</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.GatewayClient.request_timeout = 40.0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## The url of the Kernel or Enterprise Gateway server where</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          kernel specifications are defined and kernel management takes place.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          If defined, this Notebook server acts as a proxy for all kernel</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          management and kernel specification retrieval.  (JUPYTER_GATEWAY_URL env var)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: None</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.GatewayClient.url = None</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## For HTTPS requests, determines if server&#39;s certificate should be validated or not.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          (JUPYTER_GATEWAY_VALIDATE_CERT env var)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: True</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.GatewayClient.validate_cert = True</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## The websocket url of the Kernel or Enterprise Gateway server.  If not provided, this value</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          will correspond to the value of the Gateway url with &#39;ws&#39; in place of &#39;http&#39;.  (JUPYTER_GATEWAY_WS_URL env var)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: None</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.GatewayClient.ws_url = None</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#------------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># TerminalManager(LoggingConfigurable) configuration</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#------------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## </span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Timeout (in seconds) in which a terminal has been inactive and ready to be culled.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#          Values of 0 or lower disable culling.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: 0</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.TerminalManager.cull_inactive_timeout = 0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## The interval (in seconds) on which to check for terminals exceeding the</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  inactive timeout value.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  Default: 300</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># c.TerminalManager.cull_interval = 300</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br><span class="line-number">198</span><br><span class="line-number">199</span><br><span class="line-number">200</span><br><span class="line-number">201</span><br><span class="line-number">202</span><br><span class="line-number">203</span><br><span class="line-number">204</span><br><span class="line-number">205</span><br><span class="line-number">206</span><br><span class="line-number">207</span><br><span class="line-number">208</span><br><span class="line-number">209</span><br><span class="line-number">210</span><br><span class="line-number">211</span><br><span class="line-number">212</span><br><span class="line-number">213</span><br><span class="line-number">214</span><br><span class="line-number">215</span><br><span class="line-number">216</span><br><span class="line-number">217</span><br><span class="line-number">218</span><br><span class="line-number">219</span><br><span class="line-number">220</span><br><span class="line-number">221</span><br><span class="line-number">222</span><br><span class="line-number">223</span><br><span class="line-number">224</span><br><span class="line-number">225</span><br><span class="line-number">226</span><br><span class="line-number">227</span><br><span class="line-number">228</span><br><span class="line-number">229</span><br><span class="line-number">230</span><br><span class="line-number">231</span><br><span class="line-number">232</span><br><span class="line-number">233</span><br><span class="line-number">234</span><br><span class="line-number">235</span><br><span class="line-number">236</span><br><span class="line-number">237</span><br><span class="line-number">238</span><br><span class="line-number">239</span><br><span class="line-number">240</span><br><span class="line-number">241</span><br><span class="line-number">242</span><br><span class="line-number">243</span><br><span class="line-number">244</span><br><span class="line-number">245</span><br><span class="line-number">246</span><br><span class="line-number">247</span><br><span class="line-number">248</span><br><span class="line-number">249</span><br><span class="line-number">250</span><br><span class="line-number">251</span><br><span class="line-number">252</span><br><span class="line-number">253</span><br><span class="line-number">254</span><br><span class="line-number">255</span><br><span class="line-number">256</span><br><span class="line-number">257</span><br><span class="line-number">258</span><br><span class="line-number">259</span><br><span class="line-number">260</span><br><span class="line-number">261</span><br><span class="line-number">262</span><br><span class="line-number">263</span><br><span class="line-number">264</span><br><span class="line-number">265</span><br><span class="line-number">266</span><br><span class="line-number">267</span><br><span class="line-number">268</span><br><span class="line-number">269</span><br><span class="line-number">270</span><br><span class="line-number">271</span><br><span class="line-number">272</span><br><span class="line-number">273</span><br><span class="line-number">274</span><br><span class="line-number">275</span><br><span class="line-number">276</span><br><span class="line-number">277</span><br><span class="line-number">278</span><br><span class="line-number">279</span><br><span class="line-number">280</span><br><span class="line-number">281</span><br><span class="line-number">282</span><br><span class="line-number">283</span><br><span class="line-number">284</span><br><span class="line-number">285</span><br><span class="line-number">286</span><br><span class="line-number">287</span><br><span class="line-number">288</span><br><span class="line-number">289</span><br><span class="line-number">290</span><br><span class="line-number">291</span><br><span class="line-number">292</span><br><span class="line-number">293</span><br><span class="line-number">294</span><br><span class="line-number">295</span><br><span class="line-number">296</span><br><span class="line-number">297</span><br><span class="line-number">298</span><br><span class="line-number">299</span><br><span class="line-number">300</span><br><span class="line-number">301</span><br><span class="line-number">302</span><br><span class="line-number">303</span><br><span class="line-number">304</span><br><span class="line-number">305</span><br><span class="line-number">306</span><br><span class="line-number">307</span><br><span class="line-number">308</span><br><span class="line-number">309</span><br><span class="line-number">310</span><br><span class="line-number">311</span><br><span class="line-number">312</span><br><span class="line-number">313</span><br><span class="line-number">314</span><br><span class="line-number">315</span><br><span class="line-number">316</span><br><span class="line-number">317</span><br><span class="line-number">318</span><br><span class="line-number">319</span><br><span class="line-number">320</span><br><span class="line-number">321</span><br><span class="line-number">322</span><br><span class="line-number">323</span><br><span class="line-number">324</span><br><span class="line-number">325</span><br><span class="line-number">326</span><br><span class="line-number">327</span><br><span class="line-number">328</span><br><span class="line-number">329</span><br><span class="line-number">330</span><br><span class="line-number">331</span><br><span class="line-number">332</span><br><span class="line-number">333</span><br><span class="line-number">334</span><br><span class="line-number">335</span><br><span class="line-number">336</span><br><span class="line-number">337</span><br><span class="line-number">338</span><br><span class="line-number">339</span><br><span class="line-number">340</span><br><span class="line-number">341</span><br><span class="line-number">342</span><br><span class="line-number">343</span><br><span class="line-number">344</span><br><span class="line-number">345</span><br><span class="line-number">346</span><br><span class="line-number">347</span><br><span class="line-number">348</span><br><span class="line-number">349</span><br><span class="line-number">350</span><br><span class="line-number">351</span><br><span class="line-number">352</span><br><span class="line-number">353</span><br><span class="line-number">354</span><br><span class="line-number">355</span><br><span class="line-number">356</span><br><span class="line-number">357</span><br><span class="line-number">358</span><br><span class="line-number">359</span><br><span class="line-number">360</span><br><span class="line-number">361</span><br><span class="line-number">362</span><br><span class="line-number">363</span><br><span class="line-number">364</span><br><span class="line-number">365</span><br><span class="line-number">366</span><br><span class="line-number">367</span><br><span class="line-number">368</span><br><span class="line-number">369</span><br><span class="line-number">370</span><br><span class="line-number">371</span><br><span class="line-number">372</span><br><span class="line-number">373</span><br><span class="line-number">374</span><br><span class="line-number">375</span><br><span class="line-number">376</span><br><span class="line-number">377</span><br><span class="line-number">378</span><br><span class="line-number">379</span><br><span class="line-number">380</span><br><span class="line-number">381</span><br><span class="line-number">382</span><br><span class="line-number">383</span><br><span class="line-number">384</span><br><span class="line-number">385</span><br><span class="line-number">386</span><br><span class="line-number">387</span><br><span class="line-number">388</span><br><span class="line-number">389</span><br><span class="line-number">390</span><br><span class="line-number">391</span><br><span class="line-number">392</span><br><span class="line-number">393</span><br><span class="line-number">394</span><br><span class="line-number">395</span><br><span class="line-number">396</span><br><span class="line-number">397</span><br><span class="line-number">398</span><br><span class="line-number">399</span><br><span class="line-number">400</span><br><span class="line-number">401</span><br><span class="line-number">402</span><br><span class="line-number">403</span><br><span class="line-number">404</span><br><span class="line-number">405</span><br><span class="line-number">406</span><br><span class="line-number">407</span><br><span class="line-number">408</span><br><span class="line-number">409</span><br><span class="line-number">410</span><br><span class="line-number">411</span><br><span class="line-number">412</span><br><span class="line-number">413</span><br><span class="line-number">414</span><br><span class="line-number">415</span><br><span class="line-number">416</span><br><span class="line-number">417</span><br><span class="line-number">418</span><br><span class="line-number">419</span><br><span class="line-number">420</span><br><span class="line-number">421</span><br><span class="line-number">422</span><br><span class="line-number">423</span><br><span class="line-number">424</span><br><span class="line-number">425</span><br><span class="line-number">426</span><br><span class="line-number">427</span><br><span class="line-number">428</span><br><span class="line-number">429</span><br><span class="line-number">430</span><br><span class="line-number">431</span><br><span class="line-number">432</span><br><span class="line-number">433</span><br><span class="line-number">434</span><br><span class="line-number">435</span><br><span class="line-number">436</span><br><span class="line-number">437</span><br><span class="line-number">438</span><br><span class="line-number">439</span><br><span class="line-number">440</span><br><span class="line-number">441</span><br><span class="line-number">442</span><br><span class="line-number">443</span><br><span class="line-number">444</span><br><span class="line-number">445</span><br><span class="line-number">446</span><br><span class="line-number">447</span><br><span class="line-number">448</span><br><span class="line-number">449</span><br><span class="line-number">450</span><br><span class="line-number">451</span><br><span class="line-number">452</span><br><span class="line-number">453</span><br><span class="line-number">454</span><br><span class="line-number">455</span><br><span class="line-number">456</span><br><span class="line-number">457</span><br><span class="line-number">458</span><br><span class="line-number">459</span><br><span class="line-number">460</span><br><span class="line-number">461</span><br><span class="line-number">462</span><br><span class="line-number">463</span><br><span class="line-number">464</span><br><span class="line-number">465</span><br><span class="line-number">466</span><br><span class="line-number">467</span><br><span class="line-number">468</span><br><span class="line-number">469</span><br><span class="line-number">470</span><br><span class="line-number">471</span><br><span class="line-number">472</span><br><span class="line-number">473</span><br><span class="line-number">474</span><br><span class="line-number">475</span><br><span class="line-number">476</span><br><span class="line-number">477</span><br><span class="line-number">478</span><br><span class="line-number">479</span><br><span class="line-number">480</span><br><span class="line-number">481</span><br><span class="line-number">482</span><br><span class="line-number">483</span><br><span class="line-number">484</span><br><span class="line-number">485</span><br><span class="line-number">486</span><br><span class="line-number">487</span><br><span class="line-number">488</span><br><span class="line-number">489</span><br><span class="line-number">490</span><br><span class="line-number">491</span><br><span class="line-number">492</span><br><span class="line-number">493</span><br><span class="line-number">494</span><br><span class="line-number">495</span><br><span class="line-number">496</span><br><span class="line-number">497</span><br><span class="line-number">498</span><br><span class="line-number">499</span><br><span class="line-number">500</span><br><span class="line-number">501</span><br><span class="line-number">502</span><br><span class="line-number">503</span><br><span class="line-number">504</span><br><span class="line-number">505</span><br><span class="line-number">506</span><br><span class="line-number">507</span><br><span class="line-number">508</span><br><span class="line-number">509</span><br><span class="line-number">510</span><br><span class="line-number">511</span><br><span class="line-number">512</span><br><span class="line-number">513</span><br><span class="line-number">514</span><br><span class="line-number">515</span><br><span class="line-number">516</span><br><span class="line-number">517</span><br><span class="line-number">518</span><br><span class="line-number">519</span><br><span class="line-number">520</span><br><span class="line-number">521</span><br><span class="line-number">522</span><br><span class="line-number">523</span><br><span class="line-number">524</span><br><span class="line-number">525</span><br><span class="line-number">526</span><br><span class="line-number">527</span><br><span class="line-number">528</span><br><span class="line-number">529</span><br><span class="line-number">530</span><br><span class="line-number">531</span><br><span class="line-number">532</span><br><span class="line-number">533</span><br><span class="line-number">534</span><br><span class="line-number">535</span><br><span class="line-number">536</span><br><span class="line-number">537</span><br><span class="line-number">538</span><br><span class="line-number">539</span><br><span class="line-number">540</span><br><span class="line-number">541</span><br><span class="line-number">542</span><br><span class="line-number">543</span><br><span class="line-number">544</span><br><span class="line-number">545</span><br><span class="line-number">546</span><br><span class="line-number">547</span><br><span class="line-number">548</span><br><span class="line-number">549</span><br><span class="line-number">550</span><br><span class="line-number">551</span><br><span class="line-number">552</span><br><span class="line-number">553</span><br><span class="line-number">554</span><br><span class="line-number">555</span><br><span class="line-number">556</span><br><span class="line-number">557</span><br><span class="line-number">558</span><br><span class="line-number">559</span><br><span class="line-number">560</span><br><span class="line-number">561</span><br><span class="line-number">562</span><br><span class="line-number">563</span><br><span class="line-number">564</span><br><span class="line-number">565</span><br><span class="line-number">566</span><br><span class="line-number">567</span><br><span class="line-number">568</span><br><span class="line-number">569</span><br><span class="line-number">570</span><br><span class="line-number">571</span><br><span class="line-number">572</span><br><span class="line-number">573</span><br><span class="line-number">574</span><br><span class="line-number">575</span><br><span class="line-number">576</span><br><span class="line-number">577</span><br><span class="line-number">578</span><br><span class="line-number">579</span><br><span class="line-number">580</span><br><span class="line-number">581</span><br><span class="line-number">582</span><br><span class="line-number">583</span><br><span class="line-number">584</span><br><span class="line-number">585</span><br><span class="line-number">586</span><br><span class="line-number">587</span><br><span class="line-number">588</span><br><span class="line-number">589</span><br><span class="line-number">590</span><br><span class="line-number">591</span><br><span class="line-number">592</span><br><span class="line-number">593</span><br><span class="line-number">594</span><br><span class="line-number">595</span><br><span class="line-number">596</span><br><span class="line-number">597</span><br><span class="line-number">598</span><br><span class="line-number">599</span><br><span class="line-number">600</span><br><span class="line-number">601</span><br><span class="line-number">602</span><br><span class="line-number">603</span><br><span class="line-number">604</span><br><span class="line-number">605</span><br><span class="line-number">606</span><br><span class="line-number">607</span><br><span class="line-number">608</span><br><span class="line-number">609</span><br><span class="line-number">610</span><br><span class="line-number">611</span><br><span class="line-number">612</span><br><span class="line-number">613</span><br><span class="line-number">614</span><br><span class="line-number">615</span><br><span class="line-number">616</span><br><span class="line-number">617</span><br><span class="line-number">618</span><br><span class="line-number">619</span><br><span class="line-number">620</span><br><span class="line-number">621</span><br><span class="line-number">622</span><br><span class="line-number">623</span><br><span class="line-number">624</span><br><span class="line-number">625</span><br><span class="line-number">626</span><br><span class="line-number">627</span><br><span class="line-number">628</span><br><span class="line-number">629</span><br><span class="line-number">630</span><br><span class="line-number">631</span><br><span class="line-number">632</span><br><span class="line-number">633</span><br><span class="line-number">634</span><br><span class="line-number">635</span><br><span class="line-number">636</span><br><span class="line-number">637</span><br><span class="line-number">638</span><br><span class="line-number">639</span><br><span class="line-number">640</span><br><span class="line-number">641</span><br><span class="line-number">642</span><br><span class="line-number">643</span><br><span class="line-number">644</span><br><span class="line-number">645</span><br><span class="line-number">646</span><br><span class="line-number">647</span><br><span class="line-number">648</span><br><span class="line-number">649</span><br><span class="line-number">650</span><br><span class="line-number">651</span><br><span class="line-number">652</span><br><span class="line-number">653</span><br><span class="line-number">654</span><br><span class="line-number">655</span><br><span class="line-number">656</span><br><span class="line-number">657</span><br><span class="line-number">658</span><br><span class="line-number">659</span><br><span class="line-number">660</span><br><span class="line-number">661</span><br><span class="line-number">662</span><br><span class="line-number">663</span><br><span class="line-number">664</span><br><span class="line-number">665</span><br><span class="line-number">666</span><br><span class="line-number">667</span><br><span class="line-number">668</span><br><span class="line-number">669</span><br><span class="line-number">670</span><br><span class="line-number">671</span><br><span class="line-number">672</span><br><span class="line-number">673</span><br><span class="line-number">674</span><br><span class="line-number">675</span><br><span class="line-number">676</span><br><span class="line-number">677</span><br><span class="line-number">678</span><br><span class="line-number">679</span><br><span class="line-number">680</span><br><span class="line-number">681</span><br><span class="line-number">682</span><br><span class="line-number">683</span><br><span class="line-number">684</span><br><span class="line-number">685</span><br><span class="line-number">686</span><br><span class="line-number">687</span><br><span class="line-number">688</span><br><span class="line-number">689</span><br><span class="line-number">690</span><br><span class="line-number">691</span><br><span class="line-number">692</span><br><span class="line-number">693</span><br><span class="line-number">694</span><br><span class="line-number">695</span><br><span class="line-number">696</span><br><span class="line-number">697</span><br><span class="line-number">698</span><br><span class="line-number">699</span><br><span class="line-number">700</span><br><span class="line-number">701</span><br><span class="line-number">702</span><br><span class="line-number">703</span><br><span class="line-number">704</span><br><span class="line-number">705</span><br><span class="line-number">706</span><br><span class="line-number">707</span><br><span class="line-number">708</span><br><span class="line-number">709</span><br><span class="line-number">710</span><br><span class="line-number">711</span><br><span class="line-number">712</span><br><span class="line-number">713</span><br><span class="line-number">714</span><br><span class="line-number">715</span><br><span class="line-number">716</span><br><span class="line-number">717</span><br><span class="line-number">718</span><br><span class="line-number">719</span><br><span class="line-number">720</span><br><span class="line-number">721</span><br><span class="line-number">722</span><br><span class="line-number">723</span><br><span class="line-number">724</span><br><span class="line-number">725</span><br><span class="line-number">726</span><br><span class="line-number">727</span><br><span class="line-number">728</span><br><span class="line-number">729</span><br><span class="line-number">730</span><br><span class="line-number">731</span><br><span class="line-number">732</span><br><span class="line-number">733</span><br><span class="line-number">734</span><br><span class="line-number">735</span><br><span class="line-number">736</span><br><span class="line-number">737</span><br><span class="line-number">738</span><br><span class="line-number">739</span><br><span class="line-number">740</span><br><span class="line-number">741</span><br><span class="line-number">742</span><br><span class="line-number">743</span><br><span class="line-number">744</span><br><span class="line-number">745</span><br><span class="line-number">746</span><br><span class="line-number">747</span><br><span class="line-number">748</span><br><span class="line-number">749</span><br><span class="line-number">750</span><br><span class="line-number">751</span><br><span class="line-number">752</span><br><span class="line-number">753</span><br><span class="line-number">754</span><br><span class="line-number">755</span><br><span class="line-number">756</span><br><span class="line-number">757</span><br><span class="line-number">758</span><br><span class="line-number">759</span><br><span class="line-number">760</span><br><span class="line-number">761</span><br><span class="line-number">762</span><br><span class="line-number">763</span><br><span class="line-number">764</span><br><span class="line-number">765</span><br><span class="line-number">766</span><br><span class="line-number">767</span><br><span class="line-number">768</span><br><span class="line-number">769</span><br><span class="line-number">770</span><br><span class="line-number">771</span><br><span class="line-number">772</span><br><span class="line-number">773</span><br><span class="line-number">774</span><br><span class="line-number">775</span><br><span class="line-number">776</span><br><span class="line-number">777</span><br><span class="line-number">778</span><br><span class="line-number">779</span><br><span class="line-number">780</span><br><span class="line-number">781</span><br><span class="line-number">782</span><br><span class="line-number">783</span><br><span class="line-number">784</span><br><span class="line-number">785</span><br><span class="line-number">786</span><br><span class="line-number">787</span><br><span class="line-number">788</span><br><span class="line-number">789</span><br><span class="line-number">790</span><br><span class="line-number">791</span><br><span class="line-number">792</span><br><span class="line-number">793</span><br><span class="line-number">794</span><br><span class="line-number">795</span><br><span class="line-number">796</span><br><span class="line-number">797</span><br><span class="line-number">798</span><br><span class="line-number">799</span><br><span class="line-number">800</span><br><span class="line-number">801</span><br><span class="line-number">802</span><br><span class="line-number">803</span><br><span class="line-number">804</span><br><span class="line-number">805</span><br><span class="line-number">806</span><br><span class="line-number">807</span><br><span class="line-number">808</span><br><span class="line-number">809</span><br><span class="line-number">810</span><br><span class="line-number">811</span><br><span class="line-number">812</span><br><span class="line-number">813</span><br><span class="line-number">814</span><br><span class="line-number">815</span><br><span class="line-number">816</span><br><span class="line-number">817</span><br><span class="line-number">818</span><br><span class="line-number">819</span><br><span class="line-number">820</span><br><span class="line-number">821</span><br><span class="line-number">822</span><br><span class="line-number">823</span><br><span class="line-number">824</span><br><span class="line-number">825</span><br><span class="line-number">826</span><br><span class="line-number">827</span><br><span class="line-number">828</span><br><span class="line-number">829</span><br><span class="line-number">830</span><br><span class="line-number">831</span><br><span class="line-number">832</span><br><span class="line-number">833</span><br><span class="line-number">834</span><br><span class="line-number">835</span><br><span class="line-number">836</span><br><span class="line-number">837</span><br><span class="line-number">838</span><br><span class="line-number">839</span><br><span class="line-number">840</span><br><span class="line-number">841</span><br><span class="line-number">842</span><br><span class="line-number">843</span><br><span class="line-number">844</span><br><span class="line-number">845</span><br><span class="line-number">846</span><br><span class="line-number">847</span><br><span class="line-number">848</span><br><span class="line-number">849</span><br><span class="line-number">850</span><br><span class="line-number">851</span><br><span class="line-number">852</span><br><span class="line-number">853</span><br><span class="line-number">854</span><br><span class="line-number">855</span><br><span class="line-number">856</span><br><span class="line-number">857</span><br><span class="line-number">858</span><br><span class="line-number">859</span><br><span class="line-number">860</span><br><span class="line-number">861</span><br><span class="line-number">862</span><br><span class="line-number">863</span><br><span class="line-number">864</span><br><span class="line-number">865</span><br><span class="line-number">866</span><br><span class="line-number">867</span><br><span class="line-number">868</span><br><span class="line-number">869</span><br><span class="line-number">870</span><br><span class="line-number">871</span><br><span class="line-number">872</span><br><span class="line-number">873</span><br><span class="line-number">874</span><br><span class="line-number">875</span><br><span class="line-number">876</span><br><span class="line-number">877</span><br><span class="line-number">878</span><br><span class="line-number">879</span><br><span class="line-number">880</span><br><span class="line-number">881</span><br><span class="line-number">882</span><br><span class="line-number">883</span><br><span class="line-number">884</span><br><span class="line-number">885</span><br><span class="line-number">886</span><br><span class="line-number">887</span><br><span class="line-number">888</span><br><span class="line-number">889</span><br><span class="line-number">890</span><br><span class="line-number">891</span><br><span class="line-number">892</span><br><span class="line-number">893</span><br><span class="line-number">894</span><br><span class="line-number">895</span><br><span class="line-number">896</span><br><span class="line-number">897</span><br><span class="line-number">898</span><br><span class="line-number">899</span><br><span class="line-number">900</span><br><span class="line-number">901</span><br><span class="line-number">902</span><br><span class="line-number">903</span><br><span class="line-number">904</span><br><span class="line-number">905</span><br><span class="line-number">906</span><br><span class="line-number">907</span><br><span class="line-number">908</span><br><span class="line-number">909</span><br><span class="line-number">910</span><br><span class="line-number">911</span><br><span class="line-number">912</span><br><span class="line-number">913</span><br><span class="line-number">914</span><br><span class="line-number">915</span><br><span class="line-number">916</span><br><span class="line-number">917</span><br><span class="line-number">918</span><br><span class="line-number">919</span><br><span class="line-number">920</span><br><span class="line-number">921</span><br><span class="line-number">922</span><br><span class="line-number">923</span><br><span class="line-number">924</span><br><span class="line-number">925</span><br><span class="line-number">926</span><br><span class="line-number">927</span><br><span class="line-number">928</span><br><span class="line-number">929</span><br><span class="line-number">930</span><br><span class="line-number">931</span><br><span class="line-number">932</span><br><span class="line-number">933</span><br><span class="line-number">934</span><br><span class="line-number">935</span><br><span class="line-number">936</span><br><span class="line-number">937</span><br><span class="line-number">938</span><br><span class="line-number">939</span><br><span class="line-number">940</span><br><span class="line-number">941</span><br><span class="line-number">942</span><br><span class="line-number">943</span><br><span class="line-number">944</span><br><span class="line-number">945</span><br><span class="line-number">946</span><br><span class="line-number">947</span><br><span class="line-number">948</span><br><span class="line-number">949</span><br><span class="line-number">950</span><br><span class="line-number">951</span><br><span class="line-number">952</span><br><span class="line-number">953</span><br><span class="line-number">954</span><br><span class="line-number">955</span><br><span class="line-number">956</span><br><span class="line-number">957</span><br><span class="line-number">958</span><br><span class="line-number">959</span><br><span class="line-number">960</span><br><span class="line-number">961</span><br><span class="line-number">962</span><br><span class="line-number">963</span><br><span class="line-number">964</span><br><span class="line-number">965</span><br><span class="line-number">966</span><br><span class="line-number">967</span><br><span class="line-number">968</span><br><span class="line-number">969</span><br><span class="line-number">970</span><br><span class="line-number">971</span><br><span class="line-number">972</span><br><span class="line-number">973</span><br><span class="line-number">974</span><br><span class="line-number">975</span><br><span class="line-number">976</span><br><span class="line-number">977</span><br><span class="line-number">978</span><br><span class="line-number">979</span><br><span class="line-number">980</span><br><span class="line-number">981</span><br><span class="line-number">982</span><br><span class="line-number">983</span><br><span class="line-number">984</span><br><span class="line-number">985</span><br><span class="line-number">986</span><br><span class="line-number">987</span><br><span class="line-number">988</span><br><span class="line-number">989</span><br><span class="line-number">990</span><br><span class="line-number">991</span><br><span class="line-number">992</span><br><span class="line-number">993</span><br><span class="line-number">994</span><br><span class="line-number">995</span><br><span class="line-number">996</span><br><span class="line-number">997</span><br><span class="line-number">998</span><br><span class="line-number">999</span><br><span class="line-number">1000</span><br><span class="line-number">1001</span><br><span class="line-number">1002</span><br><span class="line-number">1003</span><br><span class="line-number">1004</span><br><span class="line-number">1005</span><br><span class="line-number">1006</span><br><span class="line-number">1007</span><br><span class="line-number">1008</span><br><span class="line-number">1009</span><br><span class="line-number">1010</span><br><span class="line-number">1011</span><br><span class="line-number">1012</span><br><span class="line-number">1013</span><br><span class="line-number">1014</span><br><span class="line-number">1015</span><br><span class="line-number">1016</span><br><span class="line-number">1017</span><br><span class="line-number">1018</span><br><span class="line-number">1019</span><br><span class="line-number">1020</span><br><span class="line-number">1021</span><br><span class="line-number">1022</span><br><span class="line-number">1023</span><br><span class="line-number">1024</span><br><span class="line-number">1025</span><br><span class="line-number">1026</span><br><span class="line-number">1027</span><br><span class="line-number">1028</span><br><span class="line-number">1029</span><br><span class="line-number">1030</span><br><span class="line-number">1031</span><br><span class="line-number">1032</span><br><span class="line-number">1033</span><br><span class="line-number">1034</span><br><span class="line-number">1035</span><br><span class="line-number">1036</span><br><span class="line-number">1037</span><br><span class="line-number">1038</span><br><span class="line-number">1039</span><br><span class="line-number">1040</span><br><span class="line-number">1041</span><br><span class="line-number">1042</span><br><span class="line-number">1043</span><br><span class="line-number">1044</span><br><span class="line-number">1045</span><br><span class="line-number">1046</span><br><span class="line-number">1047</span><br><span class="line-number">1048</span><br><span class="line-number">1049</span><br><span class="line-number">1050</span><br><span class="line-number">1051</span><br><span class="line-number">1052</span><br><span class="line-number">1053</span><br><span class="line-number">1054</span><br><span class="line-number">1055</span><br><span class="line-number">1056</span><br><span class="line-number">1057</span><br><span class="line-number">1058</span><br><span class="line-number">1059</span><br><span class="line-number">1060</span><br><span class="line-number">1061</span><br><span class="line-number">1062</span><br><span class="line-number">1063</span><br><span class="line-number">1064</span><br><span class="line-number">1065</span><br><span class="line-number">1066</span><br><span class="line-number">1067</span><br><span class="line-number">1068</span><br><span class="line-number">1069</span><br><span class="line-number">1070</span><br><span class="line-number">1071</span><br><span class="line-number">1072</span><br><span class="line-number">1073</span><br><span class="line-number">1074</span><br><span class="line-number">1075</span><br><span class="line-number">1076</span><br><span class="line-number">1077</span><br><span class="line-number">1078</span><br><span class="line-number">1079</span><br><span class="line-number">1080</span><br><span class="line-number">1081</span><br><span class="line-number">1082</span><br><span class="line-number">1083</span><br><span class="line-number">1084</span><br><span class="line-number">1085</span><br><span class="line-number">1086</span><br><span class="line-number">1087</span><br><span class="line-number">1088</span><br><span class="line-number">1089</span><br><span class="line-number">1090</span><br><span class="line-number">1091</span><br><span class="line-number">1092</span><br><span class="line-number">1093</span><br><span class="line-number">1094</span><br><span class="line-number">1095</span><br><span class="line-number">1096</span><br><span class="line-number">1097</span><br><span class="line-number">1098</span><br><span class="line-number">1099</span><br><span class="line-number">1100</span><br><span class="line-number">1101</span><br><span class="line-number">1102</span><br><span class="line-number">1103</span><br><span class="line-number">1104</span><br><span class="line-number">1105</span><br><span class="line-number">1106</span><br><span class="line-number">1107</span><br><span class="line-number">1108</span><br><span class="line-number">1109</span><br><span class="line-number">1110</span><br><span class="line-number">1111</span><br><span class="line-number">1112</span><br><span class="line-number">1113</span><br><span class="line-number">1114</span><br><span class="line-number">1115</span><br><span class="line-number">1116</span><br><span class="line-number">1117</span><br><span class="line-number">1118</span><br><span class="line-number">1119</span><br><span class="line-number">1120</span><br><span class="line-number">1121</span><br><span class="line-number">1122</span><br><span class="line-number">1123</span><br><span class="line-number">1124</span><br><span class="line-number">1125</span><br><span class="line-number">1126</span><br><span class="line-number">1127</span><br><span class="line-number">1128</span><br><span class="line-number">1129</span><br><span class="line-number">1130</span><br><span class="line-number">1131</span><br><span class="line-number">1132</span><br><span class="line-number">1133</span><br><span class="line-number">1134</span><br><span class="line-number">1135</span><br><span class="line-number">1136</span><br><span class="line-number">1137</span><br><span class="line-number">1138</span><br><span class="line-number">1139</span><br><span class="line-number">1140</span><br><span class="line-number">1141</span><br><span class="line-number">1142</span><br><span class="line-number">1143</span><br><span class="line-number">1144</span><br><span class="line-number">1145</span><br><span class="line-number">1146</span><br><span class="line-number">1147</span><br><span class="line-number">1148</span><br><span class="line-number">1149</span><br><span class="line-number">1150</span><br><span class="line-number">1151</span><br><span class="line-number">1152</span><br><span class="line-number">1153</span><br><span class="line-number">1154</span><br><span class="line-number">1155</span><br><span class="line-number">1156</span><br><span class="line-number">1157</span><br><span class="line-number">1158</span><br><span class="line-number">1159</span><br><span class="line-number">1160</span><br><span class="line-number">1161</span><br><span class="line-number">1162</span><br><span class="line-number">1163</span><br><span class="line-number">1164</span><br><span class="line-number">1165</span><br><span class="line-number">1166</span><br><span class="line-number">1167</span><br><span class="line-number">1168</span><br><span class="line-number">1169</span><br><span class="line-number">1170</span><br><span class="line-number">1171</span><br><span class="line-number">1172</span><br><span class="line-number">1173</span><br><span class="line-number">1174</span><br><span class="line-number">1175</span><br><span class="line-number">1176</span><br><span class="line-number">1177</span><br><span class="line-number">1178</span><br><span class="line-number">1179</span><br><span class="line-number">1180</span><br><span class="line-number">1181</span><br><span class="line-number">1182</span><br><span class="line-number">1183</span><br><span class="line-number">1184</span><br><span class="line-number">1185</span><br><span class="line-number">1186</span><br><span class="line-number">1187</span><br><span class="line-number">1188</span><br><span class="line-number">1189</span><br><span class="line-number">1190</span><br><span class="line-number">1191</span><br><span class="line-number">1192</span><br><span class="line-number">1193</span><br><span class="line-number">1194</span><br><span class="line-number">1195</span><br><span class="line-number">1196</span><br><span class="line-number">1197</span><br><span class="line-number">1198</span><br><span class="line-number">1199</span><br><span class="line-number">1200</span><br><span class="line-number">1201</span><br><span class="line-number">1202</span><br><span class="line-number">1203</span><br><span class="line-number">1204</span><br><span class="line-number">1205</span><br><span class="line-number">1206</span><br><span class="line-number">1207</span><br><span class="line-number">1208</span><br><span class="line-number">1209</span><br><span class="line-number">1210</span><br><span class="line-number">1211</span><br><span class="line-number">1212</span><br><span class="line-number">1213</span><br><span class="line-number">1214</span><br><span class="line-number">1215</span><br><span class="line-number">1216</span><br><span class="line-number">1217</span><br><span class="line-number">1218</span><br><span class="line-number">1219</span><br><span class="line-number">1220</span><br><span class="line-number">1221</span><br><span class="line-number">1222</span><br><span class="line-number">1223</span><br><span class="line-number">1224</span><br><span class="line-number">1225</span><br><span class="line-number">1226</span><br><span class="line-number">1227</span><br><span class="line-number">1228</span><br><span class="line-number">1229</span><br><span class="line-number">1230</span><br><span class="line-number">1231</span><br><span class="line-number">1232</span><br><span class="line-number">1233</span><br><span class="line-number">1234</span><br><span class="line-number">1235</span><br><span class="line-number">1236</span><br><span class="line-number">1237</span><br><span class="line-number">1238</span><br><span class="line-number">1239</span><br><span class="line-number">1240</span><br><span class="line-number">1241</span><br><span class="line-number">1242</span><br><span class="line-number">1243</span><br><span class="line-number">1244</span><br><span class="line-number">1245</span><br><span class="line-number">1246</span><br><span class="line-number">1247</span><br><span class="line-number">1248</span><br><span class="line-number">1249</span><br><span class="line-number">1250</span><br><span class="line-number">1251</span><br><span class="line-number">1252</span><br><span class="line-number">1253</span><br><span class="line-number">1254</span><br><span class="line-number">1255</span><br><span class="line-number">1256</span><br><span class="line-number">1257</span><br><span class="line-number">1258</span><br><span class="line-number">1259</span><br><span class="line-number">1260</span><br><span class="line-number">1261</span><br><span class="line-number">1262</span><br><span class="line-number">1263</span><br><span class="line-number">1264</span><br><span class="line-number">1265</span><br><span class="line-number">1266</span><br><span class="line-number">1267</span><br><span class="line-number">1268</span><br><span class="line-number">1269</span><br><span class="line-number">1270</span><br><span class="line-number">1271</span><br><span class="line-number">1272</span><br><span class="line-number">1273</span><br><span class="line-number">1274</span><br><span class="line-number">1275</span><br><span class="line-number">1276</span><br><span class="line-number">1277</span><br><span class="line-number">1278</span><br><span class="line-number">1279</span><br><span class="line-number">1280</span><br><span class="line-number">1281</span><br><span class="line-number">1282</span><br><span class="line-number">1283</span><br><span class="line-number">1284</span><br><span class="line-number">1285</span><br><span class="line-number">1286</span><br><span class="line-number">1287</span><br><span class="line-number">1288</span><br><span class="line-number">1289</span><br><span class="line-number">1290</span><br><span class="line-number">1291</span><br><span class="line-number">1292</span><br><span class="line-number">1293</span><br><span class="line-number">1294</span><br><span class="line-number">1295</span><br><span class="line-number">1296</span><br><span class="line-number">1297</span><br><span class="line-number">1298</span><br><span class="line-number">1299</span><br><span class="line-number">1300</span><br><span class="line-number">1301</span><br><span class="line-number">1302</span><br><span class="line-number">1303</span><br><span class="line-number">1304</span><br><span class="line-number">1305</span><br><span class="line-number">1306</span><br><span class="line-number">1307</span><br><span class="line-number">1308</span><br><span class="line-number">1309</span><br><span class="line-number">1310</span><br><span class="line-number">1311</span><br><span class="line-number">1312</span><br><span class="line-number">1313</span><br><span class="line-number">1314</span><br><span class="line-number">1315</span><br><span class="line-number">1316</span><br><span class="line-number">1317</span><br><span class="line-number">1318</span><br><span class="line-number">1319</span><br><span class="line-number">1320</span><br><span class="line-number">1321</span><br><span class="line-number">1322</span><br><span class="line-number">1323</span><br><span class="line-number">1324</span><br><span class="line-number">1325</span><br><span class="line-number">1326</span><br><span class="line-number">1327</span><br><span class="line-number">1328</span><br><span class="line-number">1329</span><br><span class="line-number">1330</span><br><span class="line-number">1331</span><br><span class="line-number">1332</span><br><span class="line-number">1333</span><br><span class="line-number">1334</span><br><span class="line-number">1335</span><br></div></div><p>后台启动jupyter</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">nohup</span><span style="color:#C3E88D;"> jupyter-lab</span><span style="color:#C3E88D;"> --config</span><span style="color:#C3E88D;"> /root/.jupyter/jupyter_notebook_config.py</span><span style="color:#C3E88D;"> --allow-root</span><span style="color:#89DDFF;"> &gt;</span><span style="color:#C3E88D;"> jupyter.log</span><span style="color:#89DDFF;"> 2&gt;&amp;1</span><span style="color:#89DDFF;"> &amp;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">nohup</span><span style="color:#C3E88D;"> jupyter-lab</span><span style="color:#C3E88D;"> --config</span><span style="color:#C3E88D;"> jupyter_notebook_config.py</span><span style="color:#C3E88D;"> --allow-root</span><span style="color:#89DDFF;"> &gt;</span><span style="color:#C3E88D;"> jupyter.log</span><span style="color:#89DDFF;"> 2&gt;&amp;1</span><span style="color:#89DDFF;"> &amp;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="启动comfy-ui" tabindex="-1">启动comfy-ui <a class="header-anchor" href="#启动comfy-ui" aria-label="Permalink to &quot;启动comfy-ui&quot;">​</a></h2><p><img src="`+e+'" alt="An image"></p><h2 id="instantid" tabindex="-1">instantID <a class="header-anchor" href="#instantid" aria-label="Permalink to &quot;instantID&quot;">​</a></h2><p>参考文献(<a href="https://zhuanlan.zhihu.com/p/682107843" target="_blank" rel="noreferrer">https://zhuanlan.zhihu.com/p/682107843</a>)</p><p>更新Comfyui为最新</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#C3E88D;"> clone</span><span style="color:#C3E88D;"> https://github.com/comfyanonymous/ComfyUI.git</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol><li>复制custom_nodes</li></ol><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">cp</span><span style="color:#C3E88D;"> -r</span><span style="color:#C3E88D;"> ./custom_nodes/</span><span style="color:#BABED8;">*</span><span style="color:#C3E88D;"> /root/ComfyUI/custom_nodes/</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="2"><li>复制insightface</li></ol><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">cp</span><span style="color:#C3E88D;"> -r</span><span style="color:#C3E88D;"> insightface</span><span style="color:#C3E88D;"> /root/ComfyUI/models/</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="3"><li>复制instantid</li></ol><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">cp</span><span style="color:#C3E88D;"> -r</span><span style="color:#C3E88D;"> instantid</span><span style="color:#C3E88D;"> /root/ComfyUI/models/</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="4"><li>复制controlnet</li></ol><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">cp</span><span style="color:#C3E88D;"> -r</span><span style="color:#C3E88D;"> controlnet/</span><span style="color:#BABED8;">*</span><span style="color:#C3E88D;"> /root/ComfyUI/models/controlnet/</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="5"><li>复制checkpoints</li></ol><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">cp</span><span style="color:#C3E88D;"> checkpoints/</span><span style="color:#BABED8;">*</span><span style="color:#C3E88D;"> /root/ComfyUI/models/checkpoints/</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>',31),i=[t];function c(o,r,b,y,u,m){return a(),n("div",null,i)}const h=s(p,[["render",c]]);export{E as __pageData,h as default};
