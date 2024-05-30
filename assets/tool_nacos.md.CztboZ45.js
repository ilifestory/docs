import{_ as e,c as l,o as p,a4 as a,j as s,a as n}from"./chunks/framework.CCJHkvW2.js";const C=JSON.parse('{"title":"docker 安装nacos","description":"","frontmatter":{},"headers":[],"relativePath":"tool/nacos.md","filePath":"tool/nacos.md","lastUpdated":1708482714000}'),o={name:"tool/nacos.md"},r=a('<h1 id="docker-安装nacos" tabindex="-1">docker 安装nacos <a class="header-anchor" href="#docker-安装nacos" aria-label="Permalink to &quot;docker 安装nacos&quot;">​</a></h1><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>docker pull nacos/nacos-server</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>docker run --env MODE=standalone --name nacos -d -p 8848:8848 nacos/nacos-server</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>cd /conf   (/home/nacos/conf)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>vim application.properties</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>',5),c=s("div",{class:"tip custom-block"},[s("p",{class:"custom-block-title"},"配置"),s("h1",{id:"spring",tabindex:"-1"},[n("spring "),s("a",{class:"header-anchor",href:"#spring","aria-label":'Permalink to "spring"'},"​")]),s("p",{"SERVER_SERVLET_CONTEXTPATH:nacos":""},"server.servlet.contextPath=$"),s("p",null,"server.contextPath=/nacos"),s("p",{"NACOS_APPLICATION_PORT:8848":""},"server.port=$"),s("p",null,[n("spring.datasource.platform=${SPRING_DATASOURCE_PLATFORM:"),s("strong",null,"mysql"),n("}")]),s("p",null,"nacos.cmdb.dumpTaskInterval=3600"),s("p",null,"nacos.cmdb.eventTaskInterval=10"),s("p",null,"nacos.cmdb.labelTaskInterval=300"),s("p",null,"nacos.cmdb.loadDataAtStart=false"),s("p",{"MYSQL_DATABASE_NUM:1":""},"db.num=$"),s("p",{"MYSQL_SERVICE_DB_PARAM:characterEncoding":"utf8&connectTimeout=1000&socketTimeout=3000&autoReconnect=true"},[n("db.url.0=jdbc:mysql://${MYSQL_SERVICE_HOST:"),s("strong",null,"172.26.25.7"),n("}😒{MYSQL_SERVICE_PORT:3306}/${MYSQL_SERVICE_DB_NAME:"),s("strong",null,"nacos-config"),n("}?$")]),s("p",{"MYSQL_SERVICE_DB_PARAM:characterEncoding":"utf8&connectTimeout=1000&socketTimeout=3000&autoReconnect=true"},"db.url.1=jdbc:mysql://${MYSQL_SERVICE_HOST}😒{MYSQL_SERVICE_PORT:3306}/${MYSQL_SERVICE_DB_NAME}?$"),s("p",null,[n("db.user=${MYSQL_SERVICE_USER:"),s("strong",null,"root"),n("}")]),s("p",null,[n("db.password=${MYSQL_SERVICE_PASSWORD:"),s("strong",null,"Qwer12#$"),n("}")]),s("h3",{id:"the-auth-system-to-use-currently-only-nacos-is-supported",tabindex:"-1"},[n("The auth system to use, currently only 'nacos' is supported: "),s("a",{class:"header-anchor",href:"#the-auth-system-to-use-currently-only-nacos-is-supported","aria-label":`Permalink to "The auth system to use, currently only 'nacos' is supported:"`},"​")]),s("p",{"NACOS_AUTH_SYSTEM_TYPE:nacos":""},"nacos.core.auth.system.type=$"),s("h3",{id:"the-token-expiration-in-seconds",tabindex:"-1"},[n("The token expiration in seconds: "),s("a",{class:"header-anchor",href:"#the-token-expiration-in-seconds","aria-label":'Permalink to "The token expiration in seconds:"'},"​")]),s("p",{"NACOS_AUTH_TOKEN_EXPIRE_SECONDS:18000":""},"nacos.core.auth.default.token.expire.seconds=$"),s("h3",{id:"the-default-token",tabindex:"-1"},[n("The default token: "),s("a",{class:"header-anchor",href:"#the-default-token","aria-label":'Permalink to "The default token:"'},"​")]),s("p",{"NACOS_AUTH_TOKEN:SecretKey012345678901234567890123456789012345678901234567890123456789":""},"nacos.core.auth.default.token.secret.key=$"),s("h3",{id:"turn-on-off-caching-of-auth-information-by-turning-on-this-switch-the-update-of-auth-information-would-have-a-15-seconds-delay",tabindex:"-1"},[n("Turn on/off caching of auth information. By turning on this switch, the update of auth information would have a 15 seconds delay. "),s("a",{class:"header-anchor",href:"#turn-on-off-caching-of-auth-information-by-turning-on-this-switch-the-update-of-auth-information-would-have-a-15-seconds-delay","aria-label":'Permalink to "Turn on/off caching of auth information. By turning on this switch, the update of auth information would have a 15 seconds delay."'},"​")]),s("p",{"NACOS_AUTH_CACHE_ENABLE:false":""},"nacos.core.auth.caching.enabled=$"),s("p",{"NACOS_AUTH_USER_AGENT_AUTH_WHITE_ENABLE:false":""},"nacos.core.auth.enable.userAgentAuthWhite=$"),s("p",{"NACOS_AUTH_IDENTITY_KEY:serverIdentity":""},"nacos.core.auth.server.identity.key=$"),s("p",{"NACOS_AUTH_IDENTITY_VALUE:security":""},"nacos.core.auth.server.identity.value=$"),s("p",{"TOMCAT_ACCESSLOG_ENABLED:false":""},"server.tomcat.accesslog.enabled=$"),s("p",null,'server.tomcat.accesslog.pattern=%h %l %u %t "%r" %s %b %D'),s("h1",{id:"default-current-work-dir",tabindex:"-1"},[n("default current work dir "),s("a",{class:"header-anchor",href:"#default-current-work-dir","aria-label":'Permalink to "default current work dir"'},"​")]),s("p",null,"server.tomcat.basedir="),s("h2",{id:"spring-security-config",tabindex:"-1"},[n("spring security config "),s("a",{class:"header-anchor",href:"#spring-security-config","aria-label":'Permalink to "spring security config"'},"​")]),s("h3",{id:"turn-off-security",tabindex:"-1"},[n("turn off security "),s("a",{class:"header-anchor",href:"#turn-off-security","aria-label":'Permalink to "turn off security"'},"​")]),s("p",null,[n("nacos.security.ignore.urls=${NACOS_SECURITY_IGNORE_URLS:/,/error,/"),s("strong",null,"/*.css,/"),n("/"),s("em",null,".js,/**/"),n(".html,/"),s("strong",null,"/*.map,/"),n("/"),s("em",null,".svg,/**/"),n(".png,/"),s("strong",null,"/*.ico,/console-fe/public/"),n(",/v1/auth/"),s("strong",null,",/v1/console/health/"),n(",/actuator/"),s("strong",null,",/v1/console/server/"),n("}")]),s("h1",{id:"metrics-for-elastic-search",tabindex:"-1"},[n("metrics for elastic search "),s("a",{class:"header-anchor",href:"#metrics-for-elastic-search","aria-label":'Permalink to "metrics for elastic search"'},"​")]),s("p",null,"management.metrics.export.elastic.enabled=false"),s("p",null,"management.metrics.export.influx.enabled=false"),s("p",null,"nacos.naming.distro.taskDispatchThreadCount=10"),s("p",null,"nacos.naming.distro.taskDispatchPeriod=200"),s("p",null,"nacos.naming.distro.batchSyncKeyCount=1000"),s("p",null,"nacos.naming.distro.initDataRatio=0.9"),s("p",null,"nacos.naming.distro.syncRetryDelay=5000"),s("p",null,"nacos.naming.data.warmup=true")],-1),t=a(`<div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>docker docker pull mysql:latest</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>docker run --name mysqlserver3306 --restart=always -v /docker/mysql/conf:/etc/mysql/conf.d -v /docker/mysql/logs:/logs -v /docker/mysql/data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=Qwer12#$ -d -i -p 3306:3306 mysql:latest</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="将现有的容器打包成镜像-然后在使用新的镜像运行容器时重新指定要映射的端口" tabindex="-1">将现有的容器打包成镜像，然后在使用新的镜像运行容器时重新指定要映射的端口 <a class="header-anchor" href="#将现有的容器打包成镜像-然后在使用新的镜像运行容器时重新指定要映射的端口" aria-label="Permalink to &quot;将现有的容器打包成镜像，然后在使用新的镜像运行容器时重新指定要映射的端口&quot;">​</a></h2><p>大概过程如下：</p><h3 id="先停止现有容器" tabindex="-1">先停止现有容器 <a class="header-anchor" href="#先停止现有容器" aria-label="Permalink to &quot;先停止现有容器&quot;">​</a></h3><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>docker stop container-name</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="将容器commit成为一个镜像" tabindex="-1">将容器commit成为一个镜像 <a class="header-anchor" href="#将容器commit成为一个镜像" aria-label="Permalink to &quot;将容器commit成为一个镜像&quot;">​</a></h3><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>docker commit container-name  new-image-name</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="用新镜像运行容器" tabindex="-1">用新镜像运行容器 <a class="header-anchor" href="#用新镜像运行容器" aria-label="Permalink to &quot;用新镜像运行容器&quot;">​</a></h3><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>docker run -it -d --name container-name -p p1:p1 -p p2:p2 new-image-name</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">示例</p><p>docker stop nacos</p><p>docker commit nacos nacos-grpc</p><p>docker run --env MODE=standalone --name nacos-grpc -d -p 8848:8848 -p 9848:9848 -p 9849:9849 nacos-grpc</p></div><p>开源地址 [<a href="https://github.com/nacos-group/nacos-docker.git" target="_blank" rel="noreferrer">https://github.com/nacos-group/nacos-docker.git</a>]</p><h2 id="单实例-nacos2-0-mysql8-0" tabindex="-1">单实例 nacos2.0+ &amp; mysql8.0+ <a class="header-anchor" href="#单实例-nacos2-0-mysql8-0" aria-label="Permalink to &quot;单实例 nacos2.0+ &amp; mysql8.0+&quot;">​</a></h2><h3 id="目录结构" tabindex="-1">目录结构 <a class="header-anchor" href="#目录结构" aria-label="Permalink to &quot;目录结构&quot;">​</a></h3><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>.</span></span>
<span class="line"><span>├─ evn(文件夹)</span></span>
<span class="line"><span>│  │</span></span>
<span class="line"><span>│  │</span></span>
<span class="line"><span>│  ├─ nacos-standlone-mysql.env</span></span>
<span class="line"><span>│  │      </span></span>
<span class="line"><span>│  │</span></span>
<span class="line"><span>│  └─ mysql.evn</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├─ images(文件夹)</span></span>
<span class="line"><span>│  │</span></span>
<span class="line"><span>│  │</span></span>
<span class="line"><span>│  └─ mysql8(文件夹)</span></span>
<span class="line"><span>│       │</span></span>
<span class="line"><span>│       │  </span></span>
<span class="line"><span>│       └─ Dockerfile</span></span>
<span class="line"><span>│  </span></span>
<span class="line"><span>└─ docker-compose.yml</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h3 id="下载地址" tabindex="-1"><a href="https://e.gitee.com/lingcloud_smarttech/repos/lingcloud_smarttech/oss-house/blob/master/docker-compose-nacos-mysql/docker-compose-2.x/nacos_Nyb4Tj.tar.gz" target="_blank" rel="noreferrer">下载地址</a> <a class="header-anchor" href="#下载地址" aria-label="Permalink to &quot;[下载地址](https://e.gitee.com/lingcloud_smarttech/repos/lingcloud_smarttech/oss-house/blob/master/docker-compose-nacos-mysql/docker-compose-2.x/nacos_Nyb4Tj.tar.gz)&quot;">​</a></h3><h3 id="脚本内容" tabindex="-1">脚本内容 <a class="header-anchor" href="#脚本内容" aria-label="Permalink to &quot;脚本内容&quot;">​</a></h3><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">version:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">3.8</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#FFCB6B;">services:</span></span>
<span class="line"><span style="color:#FFCB6B;">  nacos:</span></span>
<span class="line"><span style="color:#FFCB6B;">    image:</span><span style="color:#C3E88D;"> nacos/nacos-server:v2.2.0</span></span>
<span class="line"><span style="color:#FFCB6B;">    container_name:</span><span style="color:#C3E88D;"> nacos-standalone-mysql</span></span>
<span class="line"><span style="color:#FFCB6B;">    env_file:</span></span>
<span class="line"><span style="color:#FFCB6B;">      -</span><span style="color:#C3E88D;"> ./env/nacos-standlone-mysql.env</span></span>
<span class="line"><span style="color:#FFCB6B;">    volumes:</span></span>
<span class="line"><span style="color:#FFCB6B;">      -</span><span style="color:#C3E88D;"> /docker/nacos/standalone-logs/:/home/nacos/logs</span></span>
<span class="line"><span style="color:#FFCB6B;">    ports:</span></span>
<span class="line"><span style="color:#FFCB6B;">      -</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">8848:8848</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#FFCB6B;">      -</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">9848:9848</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#FFCB6B;">    depends_on:</span></span>
<span class="line"><span style="color:#FFCB6B;">      mysql:</span></span>
<span class="line"><span style="color:#FFCB6B;">        condition:</span><span style="color:#C3E88D;"> service_healthy</span></span>
<span class="line"><span style="color:#FFCB6B;">    restart:</span><span style="color:#C3E88D;"> always</span></span>
<span class="line"><span style="color:#FFCB6B;">  mysql:</span></span>
<span class="line"><span style="color:#FFCB6B;">    container_name:</span><span style="color:#C3E88D;"> mysql</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    # 通过下载的sql文件,做一个镜像</span></span>
<span class="line"><span style="color:#FFCB6B;">    build:</span></span>
<span class="line"><span style="color:#FFCB6B;">      context:</span><span style="color:#C3E88D;"> .</span></span>
<span class="line"><span style="color:#FFCB6B;">      dockerfile:</span><span style="color:#C3E88D;"> ./images/mysql8/Dockerfile</span></span>
<span class="line"><span style="color:#FFCB6B;">    image:</span><span style="color:#C3E88D;"> zhangling/mysql:latest</span></span>
<span class="line"><span style="color:#FFCB6B;">    security_opt:</span></span>
<span class="line"><span style="color:#FFCB6B;">        -</span><span style="color:#C3E88D;"> seccomp:unconfined</span></span>
<span class="line"><span style="color:#FFCB6B;">    env_file:</span></span>
<span class="line"><span style="color:#FFCB6B;">      -</span><span style="color:#C3E88D;"> ./env/mysql.env</span></span>
<span class="line"><span style="color:#FFCB6B;">    volumes:</span></span>
<span class="line"><span style="color:#FFCB6B;">      -</span><span style="color:#C3E88D;"> /docker/nacos-mysql/mysql:/var/lib/mysql</span></span>
<span class="line"><span style="color:#FFCB6B;">    ports:</span></span>
<span class="line"><span style="color:#FFCB6B;">      -</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">3306:3306</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#FFCB6B;">    healthcheck:</span></span>
<span class="line"><span style="color:#82AAFF;">      test</span><span style="color:#C3E88D;">:</span><span style="color:#BABED8;"> [ </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">CMD</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">,</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">mysqladmin</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;"> ,</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ping</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">,</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">-h</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">,</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">localhost</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;"> ]</span></span>
<span class="line"><span style="color:#FFCB6B;">      interval:</span><span style="color:#C3E88D;"> 5s</span></span>
<span class="line"><span style="color:#FFCB6B;">      timeout:</span><span style="color:#C3E88D;"> 10s</span></span>
<span class="line"><span style="color:#FFCB6B;">      retries:</span><span style="color:#F78C6C;"> 10</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><h2 id="nacos-standlone-mysql-env-的配置文件" tabindex="-1">nacos-standlone-mysql.env 的配置文件 <a class="header-anchor" href="#nacos-standlone-mysql-env-的配置文件" aria-label="Permalink to &quot;nacos-standlone-mysql.env 的配置文件&quot;">​</a></h2><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#BABED8;">PREFER_HOST_MODE</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">hostname</span></span>
<span class="line"><span style="color:#BABED8;">MODE</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">standalone</span></span>
<span class="line"><span style="color:#BABED8;">SPRING_DATASOURCE_PLATFORM</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">mysql</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 需要修改</span></span>
<span class="line"><span style="color:#BABED8;">MYSQL_SERVICE_HOST</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">172.26.25.4</span></span>
<span class="line"><span style="color:#BABED8;">MYSQL_SERVICE_DB_NAME</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">nacos_devtest</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 需要修改</span></span>
<span class="line"><span style="color:#BABED8;">MYSQL_SERVICE_PORT</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">3306</span></span>
<span class="line"><span style="color:#BABED8;">MYSQL_SERVICE_USER</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">nacos</span></span>
<span class="line"><span style="color:#BABED8;">MYSQL_SERVICE_PASSWORD</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">nacos</span></span>
<span class="line"><span style="color:#BABED8;">MYSQL_SERVICE_DB_PARAM</span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;">characterEncoding</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">utf8</span><span style="color:#89DDFF;">&amp;</span><span style="color:#BABED8;">connectTimeout</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">1000</span><span style="color:#89DDFF;">&amp;</span><span style="color:#BABED8;">socketTimeout</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">3000</span><span style="color:#89DDFF;">&amp;</span><span style="color:#BABED8;">autoReconnect</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">true</span><span style="color:#89DDFF;">&amp;</span><span style="color:#BABED8;">useSSL</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">false</span><span style="color:#89DDFF;">&amp;</span><span style="color:#BABED8;">allowPublicKeyRetrieval</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">true</span></span>
<span class="line"><span style="color:#BABED8;">NACOS_AUTH_IDENTITY_KEY</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">2222</span></span>
<span class="line"><span style="color:#BABED8;">NACOS_AUTH_IDENTITY_VALUE</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">2xxx</span></span>
<span class="line"><span style="color:#BABED8;">NACOS_AUTH_TOKEN</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">SecretKey012345678901234567890123456789012345678901234567890123456789</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="mysql8-0-的dockerfile" tabindex="-1">mysql8.0+ 的Dockerfile <a class="header-anchor" href="#mysql8-0-的dockerfile" aria-label="Permalink to &quot;mysql8.0+ 的Dockerfile&quot;">​</a></h2><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">FROM</span><span style="color:#C3E88D;"> mysql:latest</span></span>
<span class="line"><span style="color:#FFCB6B;">ADD</span><span style="color:#C3E88D;"> https://raw.githubusercontent.com/alibaba/nacos/develop/distribution/conf/mysql-schema.sql</span><span style="color:#C3E88D;"> /docker-entrypoint-initdb.d/nacos-mysql.sql</span></span>
<span class="line"><span style="color:#FFCB6B;">RUN</span><span style="color:#C3E88D;"> chown</span><span style="color:#C3E88D;"> -R</span><span style="color:#C3E88D;"> mysql:mysql</span><span style="color:#C3E88D;"> /docker-entrypoint-initdb.d/nacos-mysql.sql</span></span>
<span class="line"><span style="color:#FFCB6B;">EXPOSE</span><span style="color:#F78C6C;"> 3306</span></span>
<span class="line"><span style="color:#FFCB6B;">CMD</span><span style="color:#BABED8;"> [</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">mysqld</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;">, </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">--character-set-server=utf8mb4</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">,</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">--collation-server=utf8mb4_unicode_ci</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="mysql-env-的配置文件" tabindex="-1">mysql.env 的配置文件 <a class="header-anchor" href="#mysql-env-的配置文件" aria-label="Permalink to &quot;mysql.env 的配置文件&quot;">​</a></h2><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#BABED8;">MYSQL_ROOT_PASSWORD</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">Zhangling@</span></span>
<span class="line"><span style="color:#BABED8;">MYSQL_DATABASE</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">nacos_devtest</span></span>
<span class="line"><span style="color:#BABED8;">MYSQL_USER</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">nacos</span></span>
<span class="line"><span style="color:#BABED8;">MYSQL_PASSWORD</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">nacos</span></span>
<span class="line"><span style="color:#BABED8;">LANG</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">C.UTF-8</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,24),i=[r,c,t];function u(d,m,b,y,h,D){return p(),l("div",null,i)}const E=e(o,[["render",u]]);export{C as __pageData,E as default};
