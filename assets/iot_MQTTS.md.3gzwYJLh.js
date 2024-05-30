import{_ as s,c as a,o as n,a4 as e,bX as l}from"./chunks/framework.CCJHkvW2.js";const u=JSON.parse('{"title":"MQTTS配置","description":"","frontmatter":{},"headers":[],"relativePath":"iot/MQTTS.md","filePath":"iot/MQTTS.md","lastUpdated":1708482714000}'),p={name:"iot/MQTTS.md"},o=e('<h1 id="mqtts配置" tabindex="-1">MQTTS配置 <a class="header-anchor" href="#mqtts配置" aria-label="Permalink to &quot;MQTTS配置&quot;">​</a></h1><p>参考文献地址 (<a href="https://www.emqx.com/zh/blog/emqx-server-ssl-tls-secure-connection-configuration-guide" target="_blank" rel="noreferrer">https://www.emqx.com/zh/blog/emqx-server-ssl-tls-secure-connection-configuration-guide</a>)</p><p><img src="'+l+`" alt="An image"></p><h2 id="自签名证书" tabindex="-1">自签名证书 <a class="header-anchor" href="#自签名证书" aria-label="Permalink to &quot;自签名证书&quot;">​</a></h2><h3 id="根证书" tabindex="-1">根证书 <a class="header-anchor" href="#根证书" aria-label="Permalink to &quot;根证书&quot;">​</a></h3><p>首先，我们需要一个自签名的 CA 证书。生成这个证书需要有一个私钥为它签名，可以执行以下命令来生成私钥：</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">openssl</span><span style="color:#C3E88D;"> genrsa</span><span style="color:#C3E88D;"> -out</span><span style="color:#C3E88D;"> ca.key</span><span style="color:#F78C6C;"> 2048</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>这个命令将生成一个密钥长度为 2048 的密钥并保存在 ca.key 中。有了这个密钥，就可以用它来生成 EMQX 的根证书了：</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">openssl</span><span style="color:#C3E88D;"> req</span><span style="color:#C3E88D;"> -x509</span><span style="color:#C3E88D;"> -new</span><span style="color:#C3E88D;"> -nodes</span><span style="color:#C3E88D;"> -key</span><span style="color:#C3E88D;"> ca.key</span><span style="color:#C3E88D;"> -sha256</span><span style="color:#C3E88D;"> -days</span><span style="color:#F78C6C;"> 3650</span><span style="color:#C3E88D;"> -out</span><span style="color:#C3E88D;"> ca.pem</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="实体证书-emqx为例" tabindex="-1">实体证书（EMQX为例） <a class="header-anchor" href="#实体证书-emqx为例" aria-label="Permalink to &quot;实体证书（EMQX为例）&quot;">​</a></h3><h4 id="实体-在这里指的是-emqx-也需要一个自己的私钥对来保证它对自己证书的控制权。生成这个密钥的过程和上面类似" tabindex="-1">实体（在这里指的是 EMQX）也需要一个自己的私钥对来保证它对自己证书的控制权。生成这个密钥的过程和上面类似： <a class="header-anchor" href="#实体-在这里指的是-emqx-也需要一个自己的私钥对来保证它对自己证书的控制权。生成这个密钥的过程和上面类似" aria-label="Permalink to &quot;实体（在这里指的是 EMQX）也需要一个自己的私钥对来保证它对自己证书的控制权。生成这个密钥的过程和上面类似：&quot;">​</a></h4><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">openssl</span><span style="color:#C3E88D;"> genrsa</span><span style="color:#C3E88D;"> -out</span><span style="color:#C3E88D;"> emqx.key</span><span style="color:#F78C6C;"> 2048</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="新建-openssl-cnf-文件" tabindex="-1">新建 openssl.cnf 文件 <a class="header-anchor" href="#新建-openssl-cnf-文件" aria-label="Permalink to &quot;新建 openssl.cnf 文件&quot;">​</a></h4><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#BABED8;">req</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#FFCB6B;">default_bits</span><span style="color:#C3E88D;">  =</span><span style="color:#F78C6C;"> 2048</span></span>
<span class="line"><span style="color:#FFCB6B;">distinguished_name</span><span style="color:#C3E88D;"> =</span><span style="color:#C3E88D;"> req_distinguished_name</span></span>
<span class="line"><span style="color:#FFCB6B;">req_extensions</span><span style="color:#C3E88D;"> =</span><span style="color:#C3E88D;"> req_ext</span></span>
<span class="line"><span style="color:#FFCB6B;">x509_extensions</span><span style="color:#C3E88D;"> =</span><span style="color:#C3E88D;"> v3_req</span></span>
<span class="line"><span style="color:#FFCB6B;">prompt</span><span style="color:#C3E88D;"> =</span><span style="color:#C3E88D;"> no</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#BABED8;">req_distinguished_name</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#FFCB6B;">countryName</span><span style="color:#C3E88D;"> =</span><span style="color:#C3E88D;"> CN</span></span>
<span class="line"><span style="color:#FFCB6B;">stateOrProvinceName</span><span style="color:#C3E88D;"> =</span><span style="color:#C3E88D;"> Zhejiang</span></span>
<span class="line"><span style="color:#FFCB6B;">localityName</span><span style="color:#C3E88D;"> =</span><span style="color:#C3E88D;"> Hangzhou</span></span>
<span class="line"><span style="color:#FFCB6B;">organizationName</span><span style="color:#C3E88D;"> =</span><span style="color:#C3E88D;"> EMQX</span></span>
<span class="line"><span style="color:#FFCB6B;">commonName</span><span style="color:#C3E88D;"> =</span><span style="color:#C3E88D;"> Server</span><span style="color:#C3E88D;"> certificate</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#BABED8;">req_ext</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#FFCB6B;">subjectAltName</span><span style="color:#C3E88D;"> =</span><span style="color:#C3E88D;"> @alt_names</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#BABED8;">v3_req</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#FFCB6B;">subjectAltName</span><span style="color:#C3E88D;"> =</span><span style="color:#C3E88D;"> @alt_names</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#BABED8;">alt_names</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#FFCB6B;">IP.1</span><span style="color:#C3E88D;"> =</span><span style="color:#C3E88D;"> BROKER_ADDRESS</span></span>
<span class="line"><span style="color:#FFCB6B;">DNS.1</span><span style="color:#C3E88D;"> =</span><span style="color:#C3E88D;"> BROKER_ADDRESS</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>📝 req_distinguished_name ：根据情况进行修改，</p><p>📝 alt_names： BROKER_ADDRESS 修改为 EMQX 服务器实际的 IP 或 DNS 地址，例如：IP.1 = 127.0.0.1，或 DNS.1 = broker.xxx.com</p><h4 id="然后以这个密钥和配置签发一个证书请求" tabindex="-1">然后以这个密钥和配置签发一个证书请求： <a class="header-anchor" href="#然后以这个密钥和配置签发一个证书请求" aria-label="Permalink to &quot;然后以这个密钥和配置签发一个证书请求：&quot;">​</a></h4><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">openssl</span><span style="color:#C3E88D;"> req</span><span style="color:#C3E88D;"> -new</span><span style="color:#C3E88D;"> -key</span><span style="color:#C3E88D;"> ./emqx.key</span><span style="color:#C3E88D;"> -config</span><span style="color:#C3E88D;"> openssl.cnf</span><span style="color:#C3E88D;"> -out</span><span style="color:#C3E88D;"> emqx.csr</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="然后以根证书来签发-实体-emqx-证书" tabindex="-1">然后以根证书来签发 实体（EMQX） 证书： <a class="header-anchor" href="#然后以根证书来签发-实体-emqx-证书" aria-label="Permalink to &quot;然后以根证书来签发 实体（EMQX） 证书：&quot;">​</a></h4><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">openssl</span><span style="color:#C3E88D;"> x509</span><span style="color:#C3E88D;"> -req</span><span style="color:#C3E88D;"> -in</span><span style="color:#C3E88D;"> ./emqx.csr</span><span style="color:#C3E88D;"> -CA</span><span style="color:#C3E88D;"> ca.pem</span><span style="color:#C3E88D;"> -CAkey</span><span style="color:#C3E88D;"> ca.key</span><span style="color:#C3E88D;"> -CAcreateserial</span><span style="color:#C3E88D;"> -out</span><span style="color:#C3E88D;"> emqx.pem</span><span style="color:#C3E88D;"> -days</span><span style="color:#F78C6C;"> 3650</span><span style="color:#C3E88D;"> -sha256</span><span style="color:#C3E88D;"> -extensions</span><span style="color:#C3E88D;"> v3_req</span><span style="color:#C3E88D;"> -extfile</span><span style="color:#C3E88D;"> openssl.cnf</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="验证-emqx-实体证书-确定证书是否正确" tabindex="-1">验证 EMQX 实体证书，确定证书是否正确: <a class="header-anchor" href="#验证-emqx-实体证书-确定证书是否正确" aria-label="Permalink to &quot;验证 EMQX 实体证书，确定证书是否正确:&quot;">​</a></h4><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#C3E88D;"> openssl</span><span style="color:#C3E88D;"> verify</span><span style="color:#C3E88D;"> -CAfile</span><span style="color:#C3E88D;"> ca.pem</span><span style="color:#C3E88D;"> emqx.pem</span></span>
<span class="line"><span style="color:#FFCB6B;">emqx.pem:</span><span style="color:#C3E88D;"> OK</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="ssl-tls-启用及验证" tabindex="-1">SSL/TLS 启用及验证 <a class="header-anchor" href="#ssl-tls-启用及验证" aria-label="Permalink to &quot;SSL/TLS 启用及验证&quot;">​</a></h3><h4 id="在-emqx-中-mqtt-ssl-的默认监听端口为-8883。emqx-配置将前文中通过-openssl-工具生成的-emqx-pem、emqx-key-及-ca-pem-文件拷贝到-emqx-的-etc-certs-目录下-并参考如下配置修改-emqx-conf" tabindex="-1">在 EMQX 中 mqtt:ssl 的默认监听端口为 8883。EMQX 配置将前文中通过 OpenSSL 工具生成的 emqx.pem、emqx.key 及 ca.pem 文件拷贝到 EMQX 的 etc/certs/ 目录下，并参考如下配置修改 emqx.conf： <a class="header-anchor" href="#在-emqx-中-mqtt-ssl-的默认监听端口为-8883。emqx-配置将前文中通过-openssl-工具生成的-emqx-pem、emqx-key-及-ca-pem-文件拷贝到-emqx-的-etc-certs-目录下-并参考如下配置修改-emqx-conf" aria-label="Permalink to &quot;在 EMQX 中 mqtt:ssl 的默认监听端口为 8883。EMQX 配置将前文中通过 OpenSSL 工具生成的 emqx.pem、emqx.key 及 ca.pem 文件拷贝到 EMQX 的 etc/certs/ 目录下，并参考如下配置修改 emqx.conf：&quot;">​</a></h4><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">## listener.ssl.$name is the IP address and port that the MQTT/SSL</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Value: IP:Port | Port</span></span>
<span class="line"><span style="color:#FFCB6B;">listener.ssl.external</span><span style="color:#C3E88D;"> =</span><span style="color:#F78C6C;"> 8883</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Path to the file containing the user&#39;s private PEM-encoded key.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Value: File</span></span>
<span class="line"><span style="color:#FFCB6B;">listener.ssl.external.keyfile</span><span style="color:#C3E88D;"> =</span><span style="color:#C3E88D;"> etc/certs/emqx.key</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## 注意：如果 emqx.pem 是证书链，请确保第一个证书是服务器的证书，而不是 CA 证书。</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Path to a file containing the user certificate.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Value: File</span></span>
<span class="line"><span style="color:#FFCB6B;">listener.ssl.external.certfile</span><span style="color:#C3E88D;"> =</span><span style="color:#C3E88D;"> etc/certs/emqx.pem</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## 注意：ca.pem 用于保存服务器的中间 CA 证书和根 CA 证书。可以附加其他受信任的 CA，用来进行客户端证书验证。</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Path to the file containing PEM-encoded CA certificates. The CA certificates</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Value: File</span></span>
<span class="line"><span style="color:#FFCB6B;">listener.ssl.external.cacertfile</span><span style="color:#C3E88D;"> =</span><span style="color:#C3E88D;"> etc/certs/ca.pem</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## 加上双向验证</span></span>
<span class="line"><span style="color:#FFCB6B;">listener.ssl.external.verify</span><span style="color:#C3E88D;"> =</span><span style="color:#C3E88D;"> verify_peer</span></span>
<span class="line"><span style="color:#FFCB6B;">listener.ssl.external.fail_if_no_peer_cert</span><span style="color:#C3E88D;"> =</span><span style="color:#89DDFF;"> true</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h4 id="如果是mqtt5版本-前面操作都一样-配置文件得修改成如下" tabindex="-1">如果是mqtt5版本，前面操作都一样，配置文件得修改成如下 <a class="header-anchor" href="#如果是mqtt5版本-前面操作都一样-配置文件得修改成如下" aria-label="Permalink to &quot;如果是mqtt5版本，前面操作都一样，配置文件得修改成如下&quot;">​</a></h4><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">listeners.ssl.default</span><span style="color:#C3E88D;"> {</span></span>
<span class="line"><span style="color:#FFCB6B;">  //端口</span></span>
<span class="line"><span style="color:#FFCB6B;">  bind</span><span style="color:#C3E88D;"> =</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">0.0.0.0:8883</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#FFCB6B;">  //</span><span style="color:#C3E88D;"> 最大连接数</span></span>
<span class="line"><span style="color:#FFCB6B;">  max_connections</span><span style="color:#C3E88D;"> =</span><span style="color:#F78C6C;"> 512000</span></span>
<span class="line"><span style="color:#FFCB6B;">  //</span><span style="color:#C3E88D;"> ssl参数</span></span>
<span class="line"><span style="color:#FFCB6B;">  ssl_options</span><span style="color:#C3E88D;"> {</span></span>
<span class="line"><span style="color:#FFCB6B;">    keyfile</span><span style="color:#C3E88D;"> =</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">/etc/emqx/certs/emqx.key</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#FFCB6B;">    certfile</span><span style="color:#C3E88D;"> =</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">/etc/emqx/certs/emqx.pem</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#FFCB6B;">    cacertfile</span><span style="color:#C3E88D;"> =</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">/etc/emqx/certs/ca.pem</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#FFCB6B;">    verify</span><span style="color:#C3E88D;"> =</span><span style="color:#C3E88D;"> verify_peer</span></span>
<span class="line"><span style="color:#FFCB6B;">    fail_if_no_peer_cert</span><span style="color:#C3E88D;"> =</span><span style="color:#89DDFF;"> true</span></span>
<span class="line"><span style="color:#BABED8;">  }</span></span>
<span class="line"><span style="color:#BABED8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>`,27),r=[o];function t(c,i,y,m,b,C){return n(),a("div",null,r)}const D=s(p,[["render",t]]);export{u as __pageData,D as default};