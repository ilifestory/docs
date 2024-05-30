import{_ as s,c as n,o as a,a4 as l}from"./chunks/framework.CCJHkvW2.js";const u=JSON.parse('{"title":"Docker","description":"","frontmatter":{},"headers":[],"relativePath":"deployment/docker/docker.md","filePath":"deployment/docker/docker.md","lastUpdated":1708482714000}'),e={name:"deployment/docker/docker.md"},t=l(`<h1 id="docker" tabindex="-1">Docker <a class="header-anchor" href="#docker" aria-label="Permalink to &quot;Docker&quot;">​</a></h1><p>参考文献 (<a href="http://doc.ruoyi.vip/ruoyi-cloud/cloud/dokcer.html" target="_blank" rel="noreferrer">http://doc.ruoyi.vip/ruoyi-cloud/cloud/dokcer.html</a>)</p><h2 id="查看容器的元信息。" tabindex="-1">查看容器的元信息。 <a class="header-anchor" href="#查看容器的元信息。" aria-label="Permalink to &quot;查看容器的元信息。&quot;">​</a></h2><p>docker inspect 容器名称|容器ID</p><p>也可以直接执行下面的命令直接输出 IP 地址。</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>docker inspect --format=&#39;{{.NetworkSettings.IPAddress}}&#39; 容器名称|容器ID</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>docker volume inspect 数据卷名称 可以查看该数据卷对应宿主机的目录地址。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">--privileged=true</p><p>目录挂载操作可能会出现权限不足的提示。这是因为CentOS7中的安全模块SELinux把权限禁掉了，在docker run时通过--privileged=true给该容器加权限来解决挂载的目录没有权限的问题。</p></div><h2 id="文件拷贝" tabindex="-1">文件拷贝 <a class="header-anchor" href="#文件拷贝" aria-label="Permalink to &quot;文件拷贝&quot;">​</a></h2><pre><code>docker cp 需要拷贝的文件或目录 容器名称:容器目录

也可以将文件从容器内拷贝出来。

docker cp 容器名称:容器目录 需要拷贝的文件或目录
</code></pre><h2 id="匿名挂载" tabindex="-1">匿名挂载 <a class="header-anchor" href="#匿名挂载" aria-label="Permalink to &quot;匿名挂载&quot;">​</a></h2><p>匿名挂载只需要写容器目录即可，容器外对应的目录会在/var/lib/docker/volumes中生成。</p><pre><code># 匿名挂载
docker run -di -v /usr/local/data --name centos7-02 centos:7
# 查看 volume 数据卷信息
docker volume ls
</code></pre><h2 id="通过docker-commit来实现镜像的构建" tabindex="-1">通过docker commit来实现镜像的构建 <a class="header-anchor" href="#通过docker-commit来实现镜像的构建" aria-label="Permalink to &quot;通过docker commit来实现镜像的构建&quot;">​</a></h2><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 创建容器</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 拉取镜像</span></span>
<span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#C3E88D;"> pull</span><span style="color:#C3E88D;"> centos:7</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 创建容器</span></span>
<span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#C3E88D;"> run</span><span style="color:#C3E88D;"> -di</span><span style="color:#C3E88D;"> --name</span><span style="color:#C3E88D;"> centos7</span><span style="color:#C3E88D;"> centos:7</span></span>
<span class="line"><span style="color:#FFCB6B;">拷贝资源</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 将宿主机的 jdk 和 tomcat 拷贝至容器</span></span>
<span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#C3E88D;"> cp</span><span style="color:#C3E88D;"> jdk-8u111-linux-x64.tar.gz</span><span style="color:#C3E88D;"> centos7:/root</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#C3E88D;"> cp</span><span style="color:#C3E88D;"> apache-tomcat-8.5.27.tar.gz</span><span style="color:#C3E88D;"> centos7:/root</span></span>
<span class="line"><span style="color:#FFCB6B;">安装资源</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 进入容器</span></span>
<span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#C3E88D;"> exec</span><span style="color:#C3E88D;"> -it</span><span style="color:#C3E88D;"> centos7</span><span style="color:#C3E88D;"> /bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 切换至 /root 目录</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#C3E88D;"> root/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 创建 java 和 tomcat 目录</span></span>
<span class="line"><span style="color:#FFCB6B;">mkdir</span><span style="color:#C3E88D;"> -p</span><span style="color:#C3E88D;"> /usr/local/java</span></span>
<span class="line"><span style="color:#FFCB6B;">mkdir</span><span style="color:#C3E88D;"> -p</span><span style="color:#C3E88D;"> /usr/local/tomcat</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 将 jdk 和 tomcat 解压至容器 /usr/local/java 和 /usr/local/tomcat 目录中</span></span>
<span class="line"><span style="color:#FFCB6B;">tar</span><span style="color:#C3E88D;"> -zxvf</span><span style="color:#C3E88D;"> jdk-8u111-linux-x64.tar.gz</span><span style="color:#C3E88D;"> -C</span><span style="color:#C3E88D;"> /usr/local/java/</span></span>
<span class="line"><span style="color:#FFCB6B;">tar</span><span style="color:#C3E88D;"> -zxvf</span><span style="color:#C3E88D;"> apache-tomcat-8.5.27.tar.gz</span><span style="color:#C3E88D;"> -C</span><span style="color:#C3E88D;"> /usr/local/tomcat/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 配置 jdk 环境变量</span></span>
<span class="line"><span style="color:#FFCB6B;">vi</span><span style="color:#C3E88D;"> /etc/profile</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 在环境变量文件中添加以下内容</span></span>
<span class="line"><span style="color:#C792EA;">export</span><span style="color:#BABED8;"> JAVA_HOME</span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;">/usr/local/java/jdk1.8.0_111/</span></span>
<span class="line"><span style="color:#C792EA;">export</span><span style="color:#BABED8;"> PATH</span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;">$PATH:$JAVA_HOME/bin</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 重新加载环境变量文件</span></span>
<span class="line"><span style="color:#82AAFF;">source</span><span style="color:#C3E88D;"> /etc/profile</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 测试环境变量是否配置成功</span></span>
<span class="line"><span style="color:#FFCB6B;">java</span><span style="color:#C3E88D;"> -version</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 删除容器内 jdk 和 tomcat</span></span>
<span class="line"><span style="color:#FFCB6B;">rm</span><span style="color:#C3E88D;"> jdk-8u111-linux-x64.tar.gz</span><span style="color:#C3E88D;"> apache-tomcat-8.5.27.tar.gz</span><span style="color:#C3E88D;"> -rf</span></span>
<span class="line"><span style="color:#FFCB6B;">构建镜像</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#docker commit [OPTIONS] CONTAINER [REPOSITORY[:TAG]]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#docker commit -a=&quot;zhangling&quot; -m=&quot;jdk8 and tomcat8&quot; centos7 mycentos:7</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  #-a：提交的镜像作者；</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  #-c：使用 Dockerfile 指令来创建镜像；</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  #-m：提交时的说明文字；</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  #-p：在 commit 时，将容器暂停。</span></span>
<span class="line"><span style="color:#BABED8;">  </span></span>
<span class="line"><span style="color:#FFCB6B;">使用构建的镜像创建容器</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 创建容器</span></span>
<span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#C3E88D;"> run</span><span style="color:#C3E88D;"> -di</span><span style="color:#C3E88D;"> --name</span><span style="color:#C3E88D;"> mycentos7</span><span style="color:#C3E88D;"> -p</span><span style="color:#C3E88D;"> 8080:8080</span><span style="color:#C3E88D;"> mycentos:7</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 进入容器</span></span>
<span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#C3E88D;"> exec</span><span style="color:#C3E88D;"> -it</span><span style="color:#C3E88D;"> mycentos7</span><span style="color:#C3E88D;"> /bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 重新加载配置文件</span></span>
<span class="line"><span style="color:#82AAFF;">source</span><span style="color:#C3E88D;"> /etc/profile</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 测试 java 环境变量</span></span>
<span class="line"><span style="color:#FFCB6B;">java</span><span style="color:#C3E88D;"> -version</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 启动 tomcat</span></span>
<span class="line"><span style="color:#FFCB6B;">/usr/local/tomcat/apache-tomcat-8.5.27/bin/startup.sh</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br></div></div><h2 id="dockerfile-常用指令" tabindex="-1">Dockerfile 常用指令 <a class="header-anchor" href="#dockerfile-常用指令" aria-label="Permalink to &quot;Dockerfile 常用指令&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">指令</th><th style="text-align:left;">语法</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">FROM</td><td style="text-align:left;">FROM (image):(tag)</td><td style="text-align:left;">指明构建的新镜像是来自于哪个基础镜像，如果没有选择tag，那么默认值为latest</td></tr><tr><td style="text-align:left;">MAINTAINER</td><td style="text-align:left;">MAINTAINER (name)</td><td style="text-align:left;">指明镜像维护者及其联系方式（一般是邮箱地址）。官方说明已过时，推荐使用LABEL</td></tr><tr><td style="text-align:left;">LABEL</td><td style="text-align:left;">LABEL (key)=(value) ...</td><td style="text-align:left;">功能是为镜像指定标签。也可以使用LABEL来指定镜像作者</td></tr><tr><td style="text-align:left;">RUN</td><td style="text-align:left;">RUN (command)</td><td style="text-align:left;">构建镜像时运行的Shell命令，比如构建的新镜像中我们想在/usr/local目录下创建一个java目录</td></tr><tr><td style="text-align:left;">ADD</td><td style="text-align:left;">ADD (src)... (dest)</td><td style="text-align:left;">拷贝文件或目录到镜像中。src 可以是一个本地文件，还可以是一个url。然后自动下载和解压</td></tr><tr><td style="text-align:left;">COPY</td><td style="text-align:left;">COPY (src)... (dest)</td><td style="text-align:left;">拷贝文件或目录到镜像中。用法同 ADD，只是不支持自动下载和解压</td></tr><tr><td style="text-align:left;">EXPOSE</td><td style="text-align:left;">EXPOSE port [(port)/(protocol)...]</td><td style="text-align:left;">暴露容器运行时的监听端口给外部，可以指定端口是监听 TCP 还是 UDP，如果未指定协议，则默认为 TCP</td></tr><tr><td style="text-align:left;">ENV</td><td style="text-align:left;">ENV (key)=(value) ...</td><td style="text-align:left;">设置容器内环境变量</td></tr><tr><td style="text-align:left;">CMD</td><td style="text-align:left;">CMD [&quot;executable&quot;,&quot;param1&quot;,&quot;param2&quot;]</td><td style="text-align:left;">启动容器时执行的Shell命令。在Dockerfile中只能有一条CMD指令。如果设置了多条CMD，只有最后一条会生效</td></tr><tr><td style="text-align:left;">ENTRYPOINT</td><td style="text-align:left;">ENTRYPOINT [&quot;executable&quot;, &quot;param1&quot;, &quot;param2&quot;]</td><td style="text-align:left;">启动容器时执行的 Shell 命令，同 CMD 类似，不会被 docker run 命令行指定的参数所覆盖，如果设置了多条ENTRYPOINT，只有最后一条会生效</td></tr><tr><td style="text-align:left;">WORKDIR</td><td style="text-align:left;">WORKDIR param</td><td style="text-align:left;">为 RUN、CMD、ENTRYPOINT 以及 COPY 和 AND 设置工作目录</td></tr><tr><td style="text-align:left;">VOLUME</td><td style="text-align:left;">VOLUME [&quot;param&quot;]</td><td style="text-align:left;">指定容器挂载点到宿主机自动生成的目录或其他容器。一般的使用场景为需要持久化存储数据时</td></tr></tbody></table><p>docker run -d --name emqx5 --restart=always --privileged=true -v /docker/emqx5/bin:/opt/emqx/bin -v /docker/emqx5/data:/opt/emqx/data -v /docker/emqx5/etc:/opt/emqx/etc -v /docker/emqx5/log:/opt/emqx/log -p 1883:1883 -p 28083:8083 -p 28084:8084 -p 8883:8883 -p 18083:18083 emqx/emqx:5.1.4</p><p>docker run -d --name emqx5 --restart=always --privileged=true -v /docker/emqx5/bin:/opt/emqx/bin -v /docker/emqx5/data:/opt/emqx/data -v /docker/emqx5/etc:/opt/emqx/etc -v /docker/emqx5/log:/opt/emqx/log -v /docker/emqx5/lib:/opt/emqx/lib -p 1883:1883 -p 28083:8083 -p 28084:8084 -p 8883:8883 -p 18083:18083 emqx/emqx:5.1.4</p>`,18),p=[t];function r(o,c,i,d,b,y){return a(),n("div",null,p)}const E=s(e,[["render",r]]);export{u as __pageData,E as default};
