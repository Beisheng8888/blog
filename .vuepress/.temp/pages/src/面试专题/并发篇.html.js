export const data = JSON.parse("{\"key\":\"v-5fe7d5be\",\"path\":\"/src/%E9%9D%A2%E8%AF%95%E4%B8%93%E9%A2%98/%E5%B9%B6%E5%8F%91%E7%AF%87.html\",\"title\":\"并发篇\",\"lang\":\"zh-CN\",\"frontmatter\":{\"category\":[\"面试\"],\"description\":\"并发篇 1. 线程状态 六种状态及转换 image-20210831090722658 分别是 新建 当一个线程对象被创建，但还未调用 start 方法时处于新建状态 此时未与操作系统底层线程关联 可运行 调用了 start 方法，就会由新建进入可运行 此时与底层线程关联，由操作系统调度执行 终结 线程内代码已经执行完毕，由可运行进入终结 此时会取消与底层线程关联 阻塞 当获取锁失败后，由可运行进入 Monitor 的阻塞队列阻塞，此时不占用 cpu 时间 当持锁线程释放锁时，会按照一定规则唤醒阻塞队列中的阻塞线程，唤醒后的线程进入可运行状态 等待 当获取锁成功后，但由于条件不满足，调用了 wait() 方法，此时从可运行状态释放锁进入 Monitor 等待集合等待，同样不占用 cpu 时间 当其它持锁线程调用 notify() 或 notifyAll() 方法，会按照一定规则唤醒等待集合中的等待线程，恢复为可运行状态 有时限等待 当获取锁成功后，但由于条件不满足，调用了 wait(long) 方法，此时从可运行状态释放锁进入 Monitor 等待集合进行有时限等待，同样不占用 cpu 时间 当其它持锁线程调用 notify() 或 notifyAll() 方法，会按照一定规则唤醒等待集合中的有时限等待线程，恢复为可运行状态，并重新去竞争锁 如果等待超时，也会从有时限等待状态恢复为可运行状态，并重新去竞争锁 还有一种情况是调用 sleep(long) 方法也会从可运行状态进入有时限等待状态，但与 Monitor 无关，不需要主动唤醒，超时时间到自然恢复为可运行状态\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://github.com/Beisheng8888/blog/src/%E9%9D%A2%E8%AF%95%E4%B8%93%E9%A2%98/%E5%B9%B6%E5%8F%91%E7%AF%87.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Mr.Jh\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"并发篇\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"并发篇 1. 线程状态 六种状态及转换 image-20210831090722658 分别是 新建 当一个线程对象被创建，但还未调用 start 方法时处于新建状态 此时未与操作系统底层线程关联 可运行 调用了 start 方法，就会由新建进入可运行 此时与底层线程关联，由操作系统调度执行 终结 线程内代码已经执行完毕，由可运行进入终结 此时会取消与底层线程关联 阻塞 当获取锁失败后，由可运行进入 Monitor 的阻塞队列阻塞，此时不占用 cpu 时间 当持锁线程释放锁时，会按照一定规则唤醒阻塞队列中的阻塞线程，唤醒后的线程进入可运行状态 等待 当获取锁成功后，但由于条件不满足，调用了 wait() 方法，此时从可运行状态释放锁进入 Monitor 等待集合等待，同样不占用 cpu 时间 当其它持锁线程调用 notify() 或 notifyAll() 方法，会按照一定规则唤醒等待集合中的等待线程，恢复为可运行状态 有时限等待 当获取锁成功后，但由于条件不满足，调用了 wait(long) 方法，此时从可运行状态释放锁进入 Monitor 等待集合进行有时限等待，同样不占用 cpu 时间 当其它持锁线程调用 notify() 或 notifyAll() 方法，会按照一定规则唤醒等待集合中的有时限等待线程，恢复为可运行状态，并重新去竞争锁 如果等待超时，也会从有时限等待状态恢复为可运行状态，并重新去竞争锁 还有一种情况是调用 sleep(long) 方法也会从可运行状态进入有时限等待状态，但与 Monitor 无关，不需要主动唤醒，超时时间到自然恢复为可运行状态\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"og:updated_time\",\"content\":\"2023-07-19T01:48:53.000Z\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"Mr.Jh\"}],[\"meta\",{\"property\":\"article:modified_time\",\"content\":\"2023-07-19T01:48:53.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"并发篇\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":\\\"2023-07-19T01:48:53.000Z\\\",\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Mr.Jh\\\",\\\"url\\\":\\\"https://github.com/Beisheng8888\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"1. 线程状态\",\"slug\":\"_1-线程状态\",\"link\":\"#_1-线程状态\",\"children\":[]},{\"level\":2,\"title\":\"2. 线程池\",\"slug\":\"_2-线程池\",\"link\":\"#_2-线程池\",\"children\":[]},{\"level\":2,\"title\":\"3. wait vs sleep\",\"slug\":\"_3-wait-vs-sleep\",\"link\":\"#_3-wait-vs-sleep\",\"children\":[]},{\"level\":2,\"title\":\"4. lock vs synchronized\",\"slug\":\"_4-lock-vs-synchronized\",\"link\":\"#_4-lock-vs-synchronized\",\"children\":[]},{\"level\":2,\"title\":\"5. volatile\",\"slug\":\"_5-volatile\",\"link\":\"#_5-volatile\",\"children\":[]},{\"level\":2,\"title\":\"6. 悲观锁 vs 乐观锁\",\"slug\":\"_6-悲观锁-vs-乐观锁\",\"link\":\"#_6-悲观锁-vs-乐观锁\",\"children\":[]},{\"level\":2,\"title\":\"7. Hashtable vs ConcurrentHashMap\",\"slug\":\"_7-hashtable-vs-concurrenthashmap\",\"link\":\"#_7-hashtable-vs-concurrenthashmap\",\"children\":[]},{\"level\":2,\"title\":\"8. ThreadLocal\",\"slug\":\"_8-threadlocal\",\"link\":\"#_8-threadlocal\",\"children\":[]}],\"git\":{\"createdTime\":1689574668000,\"updatedTime\":1689731333000,\"contributors\":[{\"name\":\"北省\",\"email\":\"jih6666@126.com\",\"commits\":3}]},\"readingTime\":{\"minutes\":11.32,\"words\":3396},\"filePathRelative\":\"src/面试专题/并发篇.md\",\"localizedDate\":\"2023年7月17日\",\"excerpt\":\"<h1> 并发篇</h1>\\n<h2> 1. 线程状态</h2>\\n<p><strong>六种状态及转换</strong></p>\\n<figure><figcaption>image-20210831090722658</figcaption></figure>\\n<p>分别是</p>\\n<ul>\\n<li>新建\\n<ul>\\n<li>当一个线程对象被创建，但还未调用 start 方法时处于<strong>新建</strong>状态</li>\\n<li>此时未与操作系统底层线程关联</li>\\n</ul>\\n</li>\\n<li>可运行\\n<ul>\\n<li>调用了 start 方法，就会由<strong>新建</strong>进入<strong>可运行</strong></li>\\n<li>此时与底层线程关联，由操作系统调度执行</li>\\n</ul>\\n</li>\\n<li>终结\\n<ul>\\n<li>线程内代码已经执行完毕，由<strong>可运行</strong>进入<strong>终结</strong></li>\\n<li>此时会取消与底层线程关联</li>\\n</ul>\\n</li>\\n<li>阻塞\\n<ul>\\n<li>当获取锁失败后，由<strong>可运行</strong>进入 Monitor 的阻塞队列<strong>阻塞</strong>，此时不占用 cpu 时间</li>\\n<li>当持锁线程释放锁时，会按照一定规则唤醒阻塞队列中的<strong>阻塞</strong>线程，唤醒后的线程进入<strong>可运行</strong>状态</li>\\n</ul>\\n</li>\\n<li>等待\\n<ul>\\n<li>当获取锁成功后，但由于条件不满足，调用了 wait() 方法，此时从<strong>可运行</strong>状态释放锁进入 Monitor 等待集合<strong>等待</strong>，同样不占用 cpu 时间</li>\\n<li>当其它持锁线程调用 notify() 或 notifyAll() 方法，会按照一定规则唤醒等待集合中的<strong>等待</strong>线程，恢复为<strong>可运行</strong>状态</li>\\n</ul>\\n</li>\\n<li>有时限等待\\n<ul>\\n<li>当获取锁成功后，但由于条件不满足，调用了 wait(long) 方法，此时从<strong>可运行</strong>状态释放锁进入 Monitor 等待集合进行<strong>有时限等待</strong>，同样不占用 cpu 时间</li>\\n<li>当其它持锁线程调用 notify() 或 notifyAll() 方法，会按照一定规则唤醒等待集合中的<strong>有时限等待</strong>线程，恢复为<strong>可运行</strong>状态，并重新去竞争锁</li>\\n<li>如果等待超时，也会从<strong>有时限等待</strong>状态恢复为<strong>可运行</strong>状态，并重新去竞争锁</li>\\n<li>还有一种情况是调用 sleep(long) 方法也会从<strong>可运行</strong>状态进入<strong>有时限等待</strong>状态，但与 Monitor 无关，不需要主动唤醒，超时时间到自然恢复为<strong>可运行</strong>状态</li>\\n</ul>\\n</li>\\n</ul>\",\"autoDesc\":true}")
