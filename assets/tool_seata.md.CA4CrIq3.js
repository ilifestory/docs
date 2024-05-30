import{_ as s,c as n,o as a,a4 as l}from"./chunks/framework.CCJHkvW2.js";const u=JSON.parse('{"title":"docker 安装seata","description":"","frontmatter":{},"headers":[],"relativePath":"tool/seata.md","filePath":"tool/seata.md","lastUpdated":1707190539000}'),p={name:"tool/seata.md"},e=l(`<h1 id="docker-安装seata" tabindex="-1">docker 安装seata <a class="header-anchor" href="#docker-安装seata" aria-label="Permalink to &quot;docker 安装seata&quot;">​</a></h1><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>docker pull seataio/seata-server:latest</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>docker run -d --name seata-server -p 8091:8091 -e SEATA_IP=192.168.201.32 -e SEATA_PORT=8091 -v /otn/dockerdata/seata-latest/seata-server:/seata-server  -e STORE_MODE=db --restart=always seataio/seata-server:latest</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>容器中加入vim命令</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>apt-get update</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>apt-get install vim</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="修改yaml配置文件" tabindex="-1">修改yaml配置文件 <a class="header-anchor" href="#修改yaml配置文件" aria-label="Permalink to &quot;修改yaml配置文件&quot;">​</a></h2><div class="language-yaml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#F07178;">server</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">  port</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 7091</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">spring</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">  application</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">    name</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> seata-server</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">console</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">  user</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">    username</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> admin</span></span>
<span class="line"><span style="color:#F07178;">    password</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> admin</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">logging</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">  config</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> classpath:logback-spring.xml</span></span>
<span class="line"><span style="color:#F07178;">  file</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">    path</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> \${user.home}/logs/seata</span></span>
<span class="line"><span style="color:#F07178;">  extend</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">    logstash-appender</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">      destination</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> 127.0.0.1:4560</span></span>
<span class="line"><span style="color:#F07178;">    kafka-appender</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">      bootstrap-servers</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> 127.0.0.1:9092</span></span>
<span class="line"><span style="color:#F07178;">      topic</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> logback_to_logstash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">seata</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">  config</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    # support: nacos 、 consul 、 apollo 、 zk  、 etcd3</span></span>
<span class="line"><span style="color:#F07178;">    type</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> nacos</span></span>
<span class="line"><span style="color:#F07178;">    nacos</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">      server-addr</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> 192.168.201.252:8848</span></span>
<span class="line"><span style="color:#F07178;">      namespace</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">      group</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> SEATA_GROUP</span></span>
<span class="line"><span style="color:#F07178;">      username</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> nacos</span></span>
<span class="line"><span style="color:#F07178;">      password</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> nacos</span></span>
<span class="line"><span style="color:#F07178;">      data-id</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> seataServer.properties</span></span>
<span class="line"><span style="color:#F07178;">    consul</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">      server-addr</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> 127.0.0.1:8500</span></span>
<span class="line"><span style="color:#F07178;">      acl-token</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">      key</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> seata.properties</span></span>
<span class="line"><span style="color:#F07178;">    apollo</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">      appId</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> seata-server</span></span>
<span class="line"><span style="color:#F07178;">      apollo-meta</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> http://192.168.1.204:8801</span></span>
<span class="line"><span style="color:#F07178;">      apollo-config-service</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> http://192.168.1.204:8080</span></span>
<span class="line"><span style="color:#F07178;">      namespace</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> application</span></span>
<span class="line"><span style="color:#F07178;">      apollo-access-key-secret</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">      cluster</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> seata</span></span>
<span class="line"><span style="color:#F07178;">    zk</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">      server-addr</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> 127.0.0.1:2181</span></span>
<span class="line"><span style="color:#F07178;">      session-timeout</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 6000</span></span>
<span class="line"><span style="color:#F07178;">      connect-timeout</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 2000</span></span>
<span class="line"><span style="color:#F07178;">      username</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">      password</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">      node-path</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> /seata/seata.properties</span></span>
<span class="line"><span style="color:#F07178;">    etcd3</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">      server-addr</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> http://localhost:2379</span></span>
<span class="line"><span style="color:#F07178;">      key</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> seata.properties</span></span>
<span class="line"><span style="color:#F07178;">  registry</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    # support: nacos 、 eureka 、 redis 、 zk  、 consul 、 etcd3 、 sofa</span></span>
<span class="line"><span style="color:#F07178;">    type</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> nacos</span></span>
<span class="line"><span style="color:#F07178;">    preferred-networks</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> 30.240.*</span></span>
<span class="line"><span style="color:#F07178;">    nacos</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">      application</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> seata-server</span></span>
<span class="line"><span style="color:#F07178;">      server-addr</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> 192.168.201.252:8848</span></span>
<span class="line"><span style="color:#F07178;">      group</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> SEATA_GROUP</span></span>
<span class="line"><span style="color:#F07178;">      namespace</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">      cluster</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> default</span></span>
<span class="line"><span style="color:#F07178;">      username</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> nacos</span></span>
<span class="line"><span style="color:#F07178;">      password</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> nacos</span></span>
<span class="line"><span style="color:#F07178;">    eureka</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">      service-url</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> http://localhost:8761/eureka</span></span>
<span class="line"><span style="color:#F07178;">      application</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> default</span></span>
<span class="line"><span style="color:#F07178;">      weight</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 1</span></span>
<span class="line"><span style="color:#F07178;">    redis</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">      server-addr</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> localhost:6379</span></span>
<span class="line"><span style="color:#F07178;">      db</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 0</span></span>
<span class="line"><span style="color:#F07178;">      password</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">      cluster</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> default</span></span>
<span class="line"><span style="color:#F07178;">      timeout</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 0</span></span>
<span class="line"><span style="color:#F07178;">    zk</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">      cluster</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> default</span></span>
<span class="line"><span style="color:#F07178;">      server-addr</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> 127.0.0.1:2181</span></span>
<span class="line"><span style="color:#F07178;">      session-timeout</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 6000</span></span>
<span class="line"><span style="color:#F07178;">      connect-timeout</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 2000</span></span>
<span class="line"><span style="color:#F07178;">      username</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;&quot;</span></span>
<span class="line"><span style="color:#F07178;">      password</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;&quot;</span></span>
<span class="line"><span style="color:#F07178;">    consul</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">      cluster</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> default</span></span>
<span class="line"><span style="color:#F07178;">      server-addr</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> 127.0.0.1:8500</span></span>
<span class="line"><span style="color:#F07178;">      acl-token</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">    etcd3</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">      cluster</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> default</span></span>
<span class="line"><span style="color:#F07178;">      server-addr</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> http://localhost:2379</span></span>
<span class="line"><span style="color:#F07178;">    sofa</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">      server-addr</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> 127.0.0.1:9603</span></span>
<span class="line"><span style="color:#F07178;">      application</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> default</span></span>
<span class="line"><span style="color:#F07178;">      region</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> DEFAULT_ZONE</span></span>
<span class="line"><span style="color:#F07178;">      datacenter</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> DefaultDataCenter</span></span>
<span class="line"><span style="color:#F07178;">      cluster</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> default</span></span>
<span class="line"><span style="color:#F07178;">      group</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> SEATA_GROUP</span></span>
<span class="line"><span style="color:#F07178;">      address-wait-time</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 3000</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  server</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">    service-port</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 8091</span><span style="color:#676E95;font-style:italic;"> #If not configured, the default is &#39;\${server.port} + 1000&#39;</span></span>
<span class="line"><span style="color:#F07178;">    max-commit-retry-timeout</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> -1</span></span>
<span class="line"><span style="color:#F07178;">    max-rollback-retry-timeout</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> -1</span></span>
<span class="line"><span style="color:#F07178;">    rollback-retry-timeout-unlock-enable</span><span style="color:#89DDFF;">:</span><span style="color:#FF9CAC;"> false</span></span>
<span class="line"><span style="color:#F07178;">    enableCheckAuth</span><span style="color:#89DDFF;">:</span><span style="color:#FF9CAC;"> true</span></span>
<span class="line"><span style="color:#F07178;">    retryDeadThreshold</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 130000</span></span>
<span class="line"><span style="color:#F07178;">    recovery</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">      committing-retry-period</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 1000</span></span>
<span class="line"><span style="color:#F07178;">      asyn-committing-retry-period</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 1000</span></span>
<span class="line"><span style="color:#F07178;">      rollbacking-retry-period</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 1000</span></span>
<span class="line"><span style="color:#F07178;">      timeout-retry-period</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 1000</span></span>
<span class="line"><span style="color:#F07178;">    undo</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">      log-save-days</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 7</span></span>
<span class="line"><span style="color:#F07178;">      log-delete-period</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 86400000</span></span>
<span class="line"><span style="color:#F07178;">  store</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    # support: file 、 db 、 redis</span></span>
<span class="line"><span style="color:#F07178;">    mode</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> db</span></span>
<span class="line"><span style="color:#F07178;">    session</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">      mode</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> db</span></span>
<span class="line"><span style="color:#F07178;">    lock</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">      mode</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> db</span></span>
<span class="line"><span style="color:#F07178;">    file</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">      dir</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> sessionStore</span></span>
<span class="line"><span style="color:#F07178;">      max-branch-session-size</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 16384</span></span>
<span class="line"><span style="color:#F07178;">      max-global-session-size</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 512</span></span>
<span class="line"><span style="color:#F07178;">      file-write-buffer-cache-size</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 16384</span></span>
<span class="line"><span style="color:#F07178;">      session-reload-read-size</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 100</span></span>
<span class="line"><span style="color:#F07178;">      flush-disk-mode</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> async</span></span>
<span class="line"><span style="color:#F07178;">    db</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">      datasource</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> druid</span></span>
<span class="line"><span style="color:#F07178;">      db-type</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> mysql</span></span>
<span class="line"><span style="color:#F07178;">      driver-class-name</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> com.mysql.jdbc.Driver</span></span>
<span class="line"><span style="color:#F07178;">      url</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> jdbc:mysql://192.168.201.32:3306/ry-seata?rewriteBatchedStatements=true</span></span>
<span class="line"><span style="color:#F07178;">      user</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> otn_user</span></span>
<span class="line"><span style="color:#F07178;">      password</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> Weibei001#</span></span>
<span class="line"><span style="color:#F07178;">      min-conn</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 5</span></span>
<span class="line"><span style="color:#F07178;">      max-conn</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 100</span></span>
<span class="line"><span style="color:#F07178;">      global-table</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> global_table</span></span>
<span class="line"><span style="color:#F07178;">      branch-table</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> branch_table</span></span>
<span class="line"><span style="color:#F07178;">      lock-table</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> lock_table</span></span>
<span class="line"><span style="color:#F07178;">      distributed-lock-table</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> distributed_lock</span></span>
<span class="line"><span style="color:#F07178;">      query-limit</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 100</span></span>
<span class="line"><span style="color:#F07178;">      max-wait</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 5000</span></span>
<span class="line"><span style="color:#F07178;">    redis</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">      mode</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> single</span></span>
<span class="line"><span style="color:#F07178;">      database</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 0</span></span>
<span class="line"><span style="color:#F07178;">      min-conn</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 1</span></span>
<span class="line"><span style="color:#F07178;">      max-conn</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 10</span></span>
<span class="line"><span style="color:#F07178;">      password</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">      max-total</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 100</span></span>
<span class="line"><span style="color:#F07178;">      query-limit</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 100</span></span>
<span class="line"><span style="color:#F07178;">      single</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">        host</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 127.0.0.1</span></span>
<span class="line"><span style="color:#F07178;">        port</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 6379</span></span>
<span class="line"><span style="color:#F07178;">      sentinel</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">        master-name</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">        sentinel-hosts</span><span style="color:#89DDFF;">:</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  security</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">      secretKey</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> SeataSecretKey0c382ef121d778043159209298fd40bf3850a017</span></span>
<span class="line"><span style="color:#F07178;">      tokenValidityInMilliseconds</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 1800000</span></span>
<span class="line"><span style="color:#F07178;">      ignore</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">        urls</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> /,/**/*.css,/**/*.js,/**/*.html,/**/*.map,/**/*.svg,/**/*.png,/**/*.ico,/console-fe/public/**,/api/v1/auth/login</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  metrics</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">    enabled</span><span style="color:#89DDFF;">:</span><span style="color:#FF9CAC;"> false</span></span>
<span class="line"><span style="color:#F07178;">    registry-type</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> compact</span></span>
<span class="line"><span style="color:#F07178;">    exporter-list</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> prometheus</span></span>
<span class="line"><span style="color:#F07178;">    exporter-prometheus-port</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 9898</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br></div></div><h2 id="type为file" tabindex="-1">type为file <a class="header-anchor" href="#type为file" aria-label="Permalink to &quot;type为file&quot;">​</a></h2><div class="language-yaml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#F07178;">server</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">  port</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 7091</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">spring</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">  application</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">    name</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> seata-server</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">logging</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">  config</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> classpath:logback-spring.xml</span></span>
<span class="line"><span style="color:#F07178;">  file</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">    path</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> \${user.home}/logs/seata</span></span>
<span class="line"><span style="color:#F07178;">  extend</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">    logstash-appender</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">      destination</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> 127.0.0.1:4560</span></span>
<span class="line"><span style="color:#F07178;">    kafka-appender</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">      bootstrap-servers</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> 127.0.0.1:9092</span></span>
<span class="line"><span style="color:#F07178;">      topic</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> logback_to_logstash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">console</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">  user</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">    username</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> admin</span></span>
<span class="line"><span style="color:#F07178;">    password</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> admin</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">seata</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">  config</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    # support: nacos, consul, apollo, zk, etcd3</span></span>
<span class="line"><span style="color:#F07178;">    type</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> file</span></span>
<span class="line"><span style="color:#F07178;">  registry</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    # support: nacos, eureka, redis, zk, consul, etcd3, sofa</span></span>
<span class="line"><span style="color:#F07178;">    type</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> file</span></span>
<span class="line"><span style="color:#F07178;">  store</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    # support: file 、 db 、 redis</span></span>
<span class="line"><span style="color:#F07178;">    mode</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> file</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  server:</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#    service-port: 8091 #If not configured, the default is &#39;\${server.port} + 1000&#39;</span></span>
<span class="line"><span style="color:#F07178;">  security</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">    secretKey</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> SeataSecretKey0c382ef121d778043159209298fd40bf3850a017</span></span>
<span class="line"><span style="color:#F07178;">    tokenValidityInMilliseconds</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 1800000</span></span>
<span class="line"><span style="color:#F07178;">    ignore</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">      urls</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> /,/**/*.css,/**/*.js,/**/*.html,/**/*.map,/**/*.svg,/**/*.png,/**/*.ico,/console-fe/public/**,/api/v1/auth/login</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br></div></div><div class="language-yaml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#F07178;">server</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">  port</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 7091</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">spring</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">  application</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">    name</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> seata-server</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">logging</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">  config</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span></span>
<span class="line"><span style="color:#F07178;">    classpath</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> logback-spring.xml</span></span>
<span class="line"><span style="color:#F07178;">  file</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">    path</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> \${user.home}/logs/seata</span></span>
<span class="line"><span style="color:#F07178;">  extend</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">    logstash-appender</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">      destination</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> 127.0.0.1:4560</span></span>
<span class="line"><span style="color:#F07178;">    kafka-appender</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">      bootstrap-servers</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> 127.0.0.1:9092</span></span>
<span class="line"><span style="color:#F07178;">      topic</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> logback_to_logstash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">seata</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">  config</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    # support: nacos 、 consul 、 apollo 、 zk  、 etcd3</span></span>
<span class="line"><span style="color:#F07178;">    type</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> file</span></span>
<span class="line"><span style="color:#F07178;">    nacos</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">      server-addr</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> 127.0.0.1:8848</span></span>
<span class="line"><span style="color:#F07178;">      namespace</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">      group</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> SEATA_GROUP</span></span>
<span class="line"><span style="color:#F07178;">      username</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">      password</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">      data-id</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> seataServer.properties</span></span>
<span class="line"><span style="color:#F07178;">    consul</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">      server-addr</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> 127.0.0.1:8500</span></span>
<span class="line"><span style="color:#F07178;">      acl-token</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">      key</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> seata.properties</span></span>
<span class="line"><span style="color:#F07178;">    apollo</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">      appId</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> seata-server</span></span>
<span class="line"><span style="color:#F07178;">      apollo-meta</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> http://192.168.1.204:8801</span></span>
<span class="line"><span style="color:#F07178;">      apollo-config-service</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> http://192.168.1.204:8080</span></span>
<span class="line"><span style="color:#F07178;">      namespace</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> application</span></span>
<span class="line"><span style="color:#F07178;">      apollo-access-key-secret</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">      cluster</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> seata</span></span>
<span class="line"><span style="color:#F07178;">    zk</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">      server-addr</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> 127.0.0.1:2181</span></span>
<span class="line"><span style="color:#F07178;">      session-timeout</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 6000</span></span>
<span class="line"><span style="color:#F07178;">      connect-timeout</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 2000</span></span>
<span class="line"><span style="color:#F07178;">      username</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">      password</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">      node-path</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> /seata/seata.properties</span></span>
<span class="line"><span style="color:#F07178;">    etcd3</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">      server-addr</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> http://localhost:2379</span></span>
<span class="line"><span style="color:#F07178;">      key</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> seata.properties</span></span>
<span class="line"><span style="color:#F07178;">  registry</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    # support: nacos 、 eureka 、 redis 、 zk  、 consul 、 etcd3 、 sofa</span></span>
<span class="line"><span style="color:#F07178;">    type</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> file</span></span>
<span class="line"><span style="color:#F07178;">    preferred-networks</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> 30.240.*</span></span>
<span class="line"><span style="color:#F07178;">    nacos</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">      application</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> seata-server</span></span>
<span class="line"><span style="color:#F07178;">      server-addr</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> 127.0.0.1:8848</span></span>
<span class="line"><span style="color:#F07178;">      group</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> SEATA_GROUP</span></span>
<span class="line"><span style="color:#F07178;">      namespace</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">      cluster</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> default</span></span>
<span class="line"><span style="color:#F07178;">      username</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">      password</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">    eureka</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">      service-url</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> http://localhost:8761/eureka</span></span>
<span class="line"><span style="color:#F07178;">      application</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> default</span></span>
<span class="line"><span style="color:#F07178;">      weight</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 1</span></span>
<span class="line"><span style="color:#F07178;">    redis</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">      server-addr</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> localhost:6379</span></span>
<span class="line"><span style="color:#F07178;">      db</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 0</span></span>
<span class="line"><span style="color:#F07178;">      password</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">      cluster</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> default</span></span>
<span class="line"><span style="color:#F07178;">      timeout</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 0</span></span>
<span class="line"><span style="color:#F07178;">    zk</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">      cluster</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> default</span></span>
<span class="line"><span style="color:#F07178;">      server-addr</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> 127.0.0.1:2181</span></span>
<span class="line"><span style="color:#F07178;">      session-timeout</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 6000</span></span>
<span class="line"><span style="color:#F07178;">      connect-timeout</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 2000</span></span>
<span class="line"><span style="color:#F07178;">      username</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;&quot;</span></span>
<span class="line"><span style="color:#F07178;">      password</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;&quot;</span></span>
<span class="line"><span style="color:#F07178;">    consul</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">      cluster</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> default</span></span>
<span class="line"><span style="color:#F07178;">      server-addr</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> 127.0.0.1:8500</span></span>
<span class="line"><span style="color:#F07178;">      acl-token</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">    etcd3</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">      cluster</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> default</span></span>
<span class="line"><span style="color:#F07178;">      server-addr</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> http://localhost:2379</span></span>
<span class="line"><span style="color:#F07178;">    sofa</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">      server-addr</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> 127.0.0.1:9603</span></span>
<span class="line"><span style="color:#F07178;">      application</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> default</span></span>
<span class="line"><span style="color:#F07178;">      region</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> DEFAULT_ZONE</span></span>
<span class="line"><span style="color:#F07178;">      datacenter</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> DefaultDataCenter</span></span>
<span class="line"><span style="color:#F07178;">      cluster</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> default</span></span>
<span class="line"><span style="color:#F07178;">      group</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> SEATA_GROUP</span></span>
<span class="line"><span style="color:#F07178;">      address-wait-time</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 3000</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  server</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">    service-port</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 8091</span><span style="color:#676E95;font-style:italic;"> #If not configured, the default is &#39;\${server.port} + 1000&#39;</span></span>
<span class="line"><span style="color:#F07178;">    max-commit-retry-timeout</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> -1</span></span>
<span class="line"><span style="color:#F07178;">    max-rollback-retry-timeout</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> -1</span></span>
<span class="line"><span style="color:#F07178;">    rollback-retry-timeout-unlock-enable</span><span style="color:#89DDFF;">:</span><span style="color:#FF9CAC;"> false</span></span>
<span class="line"><span style="color:#F07178;">    enableCheckAuth</span><span style="color:#89DDFF;">:</span><span style="color:#FF9CAC;"> true</span></span>
<span class="line"><span style="color:#F07178;">    retryDeadThreshold</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 130000</span></span>
<span class="line"><span style="color:#F07178;">    recovery</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">      committing-retry-period</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 1000</span></span>
<span class="line"><span style="color:#F07178;">      asyn-committing-retry-period</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 1000</span></span>
<span class="line"><span style="color:#F07178;">      rollbacking-retry-period</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 1000</span></span>
<span class="line"><span style="color:#F07178;">      timeout-retry-period</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 1000</span></span>
<span class="line"><span style="color:#F07178;">    undo</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">      log-save-days</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 7</span></span>
<span class="line"><span style="color:#F07178;">      log-delete-period</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 86400000</span></span>
<span class="line"><span style="color:#F07178;">  store</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    # support: file 、 db 、 redis</span></span>
<span class="line"><span style="color:#F07178;">    mode</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> file</span></span>
<span class="line"><span style="color:#F07178;">    session</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">      mode</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> file</span></span>
<span class="line"><span style="color:#F07178;">    lock</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">      mode</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> file</span></span>
<span class="line"><span style="color:#F07178;">    file</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">      dir</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> sessionStore</span></span>
<span class="line"><span style="color:#F07178;">      max-branch-session-size</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 16384</span></span>
<span class="line"><span style="color:#F07178;">      max-global-session-size</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 512</span></span>
<span class="line"><span style="color:#F07178;">      file-write-buffer-cache-size</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 16384</span></span>
<span class="line"><span style="color:#F07178;">      session-reload-read-size</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 100</span></span>
<span class="line"><span style="color:#F07178;">      flush-disk-mode</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> async</span></span>
<span class="line"><span style="color:#F07178;">    db</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">      datasource</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> druid</span></span>
<span class="line"><span style="color:#F07178;">      db-type</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> mysql</span></span>
<span class="line"><span style="color:#F07178;">      driver-class-name</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> com.mysql.jdbc.Driver</span></span>
<span class="line"><span style="color:#F07178;">      url</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> jdbc:mysql://127.0.0.1:3306/seata?rewriteBatchedStatements=true</span></span>
<span class="line"><span style="color:#F07178;">      user</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> mysql</span></span>
<span class="line"><span style="color:#F07178;">      password</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> mysql</span></span>
<span class="line"><span style="color:#F07178;">      min-conn</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 5</span></span>
<span class="line"><span style="color:#F07178;">      max-conn</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 100</span></span>
<span class="line"><span style="color:#F07178;">      global-table</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> global_table</span></span>
<span class="line"><span style="color:#F07178;">      branch-table</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> branch_table</span></span>
<span class="line"><span style="color:#F07178;">      lock-table</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> lock_table</span></span>
<span class="line"><span style="color:#F07178;">      distributed-lock-table</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> distributed_lock</span></span>
<span class="line"><span style="color:#F07178;">      query-limit</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 100</span></span>
<span class="line"><span style="color:#F07178;">      max-wait</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 5000</span></span>
<span class="line"><span style="color:#F07178;">    redis</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">      mode</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> single</span></span>
<span class="line"><span style="color:#F07178;">      database</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 0</span></span>
<span class="line"><span style="color:#F07178;">      min-conn</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 1</span></span>
<span class="line"><span style="color:#F07178;">      max-conn</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 10</span></span>
<span class="line"><span style="color:#F07178;">      password</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">      max-total</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 100</span></span>
<span class="line"><span style="color:#F07178;">      query-limit</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 100</span></span>
<span class="line"><span style="color:#F07178;">      single</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">        host</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 127.0.0.1</span></span>
<span class="line"><span style="color:#F07178;">        port</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 6379</span></span>
<span class="line"><span style="color:#F07178;">      sentinel</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">        master-name</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">        sentinel-hosts</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">  metrics</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">    enabled</span><span style="color:#89DDFF;">:</span><span style="color:#FF9CAC;"> false</span></span>
<span class="line"><span style="color:#F07178;">    registry-type</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> compact</span></span>
<span class="line"><span style="color:#F07178;">    exporter-list</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> prometheus</span></span>
<span class="line"><span style="color:#F07178;">    exporter-prometheus-port</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 9898</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br></div></div>`,11),o=[e];function r(c,t,i,F,y,b){return a(),n("div",null,o)}const m=s(p,[["render",r]]);export{u as __pageData,m as default};
