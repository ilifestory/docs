import{_ as e,c as a,o as t,a4 as s}from"./chunks/framework.CCJHkvW2.js";const u=JSON.parse('{"title":"Reids 集群/分片","description":"","frontmatter":{},"headers":[],"relativePath":"db/redis.md","filePath":"db/redis.md","lastUpdated":1713833896000}'),l={name:"db/redis.md"},i=s('<h1 id="reids-集群-分片" tabindex="-1">Reids 集群/分片 <a class="header-anchor" href="#reids-集群-分片" aria-label="Permalink to &quot;Reids 集群/分片&quot;">​</a></h1><p>参考文献(<a href="https://www.cnblogs.com/HDMaxfun/p/15711892.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/HDMaxfun/p/15711892.html</a>)(<a href="https://blog.csdn.net/weixin_45596022/article/details/113281023" target="_blank" rel="noreferrer">https://blog.csdn.net/weixin_45596022/article/details/113281023</a>)</p><h2 id="redis-整存" tabindex="-1">Redis 整存 <a class="header-anchor" href="#redis-整存" aria-label="Permalink to &quot;Redis 整存&quot;">​</a></h2><ol><li><p>一组多从 多主多从/副本集(主从复制)</p></li><li><p>哨兵模式多主多从/副本集(主从复制)</p></li></ol><div class="warning custom-block"><p class="custom-block-title">不足</p><p>主从切换的过程中会丢失数据，因为只有一个 master。</p><p>只能单点写，没有解决水平扩容的问题。</p><p>如果数据量非常大，这个时候我们需要多个 master-slave 的 group，把数据分布到不同的 group 中。(就是下面的分片/分区/分布式存储)</p></div><ol start="3"><li>无中心集群/raft集群(每个节点都和其他所有节点连接，客户端连接任意主节点可以对整个集群中数据进行读写，所有的slave节点仅用于数据备份与故障转移。)</li></ol><h2 id="redis-分片-分区-分布式-存储" tabindex="-1">Redis 分片/分区/分布式 存储 <a class="header-anchor" href="#redis-分片-分区-分布式-存储" aria-label="Permalink to &quot;Redis 分片/分区/分布式 存储&quot;">​</a></h2><ol><li>哈希后 取模</li></ol><div class="warning custom-block"><p class="custom-block-title">不足</p><p>hash(key)%N，根据余数，决定映射到那一个节点。这种方式比较简单，属于静态的分片规则。但是一旦节点数量变化，新增或者减少，由于取模的 N 发生变化，数据需要重新分布。</p></div><ol start="2"><li>一致性哈希算法 将[0-16383]slot进行首尾相连，形成哈希环</li></ol><div class="warning custom-block"><p class="custom-block-title">不足</p><p>这样的一致性哈希算法有一个缺点，因为节点不一定是均匀地分布的，特别是在节点数比较少的情况下，所以数据不能得到均匀分布。解决这个问题的办法是引入虚拟节点（Virtual Node）。</p></div><ol start="3"><li>Redis 虚拟槽分区</li></ol>',12),r=[i];function o(d,c,n,p,h,_){return t(),a("div",null,r)}const b=e(l,[["render",o]]);export{u as __pageData,b as default};
