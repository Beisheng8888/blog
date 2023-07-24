<template><div><h1 id="git-分布式版本控制工具" tabindex="-1"><a class="header-anchor" href="#git-分布式版本控制工具" aria-hidden="true">#</a> Git 分布式版本控制工具</h1>
<ul>
<li>Git概述</li>
<li>Git代码托管服务</li>
<li>Git常用命令</li>
<li>在IDEA中使用Git</li>
</ul>
<h2 id="_1-前言" tabindex="-1"><a class="header-anchor" href="#_1-前言" aria-hidden="true">#</a> 1. 前言</h2>
<h3 id="_1-1-什么是git" tabindex="-1"><a class="header-anchor" href="#_1-1-什么是git" aria-hidden="true">#</a> 1.1 什么是Git</h3>
<p>Git是一个分布式版本控制工具，主要用于管理开发过程中的源代码文件（Java类、xml文件、html页面等），在软件开发过程中被广泛使用。</p>
<p>在IDEA开发工具中可以集成Git（后面会讲解Git安装和集成过程）：</p>
<p><img src="@source/必会工具/assets/image-20210924171926037.png" alt="image-20210924171926037"></p>
<p>集成后在IDEA中可以看到Git相关图标：<img src="@source/必会工具/assets/image-20210924172028329.png" alt="image-20210924172028329"></p>
<p>可以通过启动两个IDEA窗口模拟两个开发人员来展示Git的使用：</p>
<p><img src="@source/必会工具/assets/image-20210926080623416.png" alt="image-20210926080623416"></p>
<p>其他的版本控制工具：</p>
<ul>
<li>SVN  (集中式)</li>
<li>CVS</li>
<li>VSS</li>
</ul>
<h3 id="_1-2-使用git能做什么" tabindex="-1"><a class="header-anchor" href="#_1-2-使用git能做什么" aria-hidden="true">#</a> 1.2 使用Git能做什么</h3>
<ul>
<li>代码回溯：Git在管理文件过程中会记录日志，方便回退到历史版本</li>
<li>版本切换：Git存在分支的概念，一个项目可以有多个分支（版本），可以任意切换</li>
<li>多人协作：Git支持多人协作，即一个团队共同开发一个项目，每个团队成员负责一部分代码，通过Git就可以管理和协调</li>
<li>远程备份：Git通过仓库管理文件，在Git中存在远程仓库，如果本地文件丢失还可以从远程仓库获取</li>
</ul>
<h2 id="_2-git概述" tabindex="-1"><a class="header-anchor" href="#_2-git概述" aria-hidden="true">#</a> 2. Git概述</h2>
<h3 id="_2-1-git简介" tabindex="-1"><a class="header-anchor" href="#_2-1-git简介" aria-hidden="true">#</a> 2.1 Git简介</h3>
<p>Git 是一个分布式版本控制工具，通常用来对软件开发过程中的源代码文件进行管理。通过Git 仓库来存储和管理这些文件，Git 仓库分为两种：</p>
<ul>
<li>本地仓库：开发人员自己电脑上的 Git 仓库</li>
<li>远程仓库：远程服务器上的 Git 仓库</li>
</ul>
<p><img src="@source/必会工具/assets/image-20210924173708313.png" alt="img"></p>
<p>解释说明：</p>
<blockquote>
<p>commit：提交,将本地文件和版本信息保存到本地仓库</p>
<p>push：推送,将本地仓库文件和版本信息上传到远程仓库</p>
<p>pull：拉取,将远程仓库文件和版本信息下载到本地仓库</p>
</blockquote>
<h3 id="_2-2-git下载与安装" tabindex="-1"><a class="header-anchor" href="#_2-2-git下载与安装" aria-hidden="true">#</a> 2.2 Git下载与安装</h3>
<p>下载地址： https://git-scm.com/download</p>
<p><img src="@source/必会工具/assets/image-20210924174639182.png" alt="image-20210924174639182"></p>
<p>下载完成后得到安装文件：<img src="@source/必会工具/assets/image-20210924174717172.png" alt="image-20210924174717172"></p>
<p>直接双击完成安装即可，安装完成后可以在任意目录下点击鼠标右键，如果能够看到如下菜单则说明安装成功：</p>
<p><img src="@source/必会工具/assets/image-20210924174934683.png" alt="image-20210924174934683"></p>
<p>Git GUI Here：打开Git 图形界面</p>
<p><img src="@source/必会工具/assets/image-20210924175209242.png" alt="image-20210924175209242"></p>
<p>Git Bash Here：打开Git 命令行</p>
<p><img src="@source/必会工具/assets/image-20210924175314485.png" alt="image-20210924175314485"></p>
<p>Git安装目录结构如下：</p>
<p><img src="@source/必会工具/assets/image-20210926094227522.png" alt="image-20210926094227522"></p>
<h2 id="_3-git代码托管服务" tabindex="-1"><a class="header-anchor" href="#_3-git代码托管服务" aria-hidden="true">#</a> 3. Git代码托管服务</h2>
<h3 id="_3-1-常用的git代码托管服务" tabindex="-1"><a class="header-anchor" href="#_3-1-常用的git代码托管服务" aria-hidden="true">#</a> 3.1 常用的Git代码托管服务</h3>
<p>Git中存在两种类型的仓库，即<strong>本地仓库</strong>和<strong>远程仓库</strong>。那么我们如何搭建Git<strong>远程仓库</strong>呢？</p>
<p>我们可以借助互联网上提供的一些代码托管服务来实现，其中比较常用的有GitHub、码云、GitLab等。</p>
<table>
<thead>
<tr>
<th>名称</th>
<th>网址</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>gitHub</td>
<td>https://github.com/</td>
<td>一个面向开源及私有软件项目的托管平台，因为只支持Git 作为唯一的版本库格式进行托管，故名gitHub</td>
</tr>
<tr>
<td>码云</td>
<td>https://gitee.com/</td>
<td>国内的一个代码托管平台，由于服务器在国内，所以相比于GitHub，码云速度会更快</td>
</tr>
<tr>
<td>GitLab</td>
<td>https://about.gitlab.com/</td>
<td>一个用于仓库管理系统的开源项目，使用Git作为代码管理工具，并在此基础上搭建起来的web服务</td>
</tr>
<tr>
<td>BitBucket</td>
<td>https://bitbucket.org/</td>
<td>一家源代码托管网站，采用Mercurial和Git作为分布式版本控制系统，同时提供商业计划和免费账户</td>
</tr>
</tbody>
</table>
<h3 id="_3-2-码云代码托管服务" tabindex="-1"><a class="header-anchor" href="#_3-2-码云代码托管服务" aria-hidden="true">#</a> 3.2 码云代码托管服务</h3>
<p>码云网址：https://gitee.com/</p>
<p><img src="@source/必会工具/assets/image-20210926082758518.png" alt="image-20210926082758518"></p>
<p>使用码云的操作流程如下：</p>
<ol>
<li>注册码云账号</li>
<li>登录码云</li>
<li>创建远程仓库</li>
<li>邀请其他用户成为仓库成员</li>
</ol>
<h4 id="_3-2-1-注册码云账号" tabindex="-1"><a class="header-anchor" href="#_3-2-1-注册码云账号" aria-hidden="true">#</a> 3.2.1 注册码云账号</h4>
<p>注册网址： https://gitee.com/signup</p>
<p><img src="@source/必会工具/assets/image-20210926083229013.png" alt="image-20210926083229013"></p>
<h4 id="_3-2-2-登录码云" tabindex="-1"><a class="header-anchor" href="#_3-2-2-登录码云" aria-hidden="true">#</a> 3.2.2 登录码云</h4>
<p>注册完成后可以使用刚刚注册的邮箱进行登录（地址： https://gitee.com/login ）</p>
<p><img src="@source/必会工具/assets/image-20210926083328306.png" alt="image-20210926083328306"></p>
<h4 id="_3-2-3-创建远程仓库" tabindex="-1"><a class="header-anchor" href="#_3-2-3-创建远程仓库" aria-hidden="true">#</a> 3.2.3 创建远程仓库</h4>
<p>登录成功后可以创建远程仓库，操作方式如下：</p>
<p><img src="@source/必会工具/assets/image-20210926083510298.png" alt="image-20210926083510298"></p>
<p>页面跳转到新建仓库页面：</p>
<p><img src="@source/必会工具/assets/image-20210926083629924.png" alt="image-20210926083629924"></p>
<p>解释说明：</p>
<blockquote>
<p>仓库名称：必填，每个仓库都需要有一个名称，同一个码云账号下的仓库名称不能重复</p>
<p>路径：访问远程仓库时会使用到，一般无需手动指定，和仓库名称自动保持一致</p>
<p>开源：所有人都可以查看此仓库</p>
<p>私有：只有此仓库的成员可见，其他人不可见</p>
</blockquote>
<p>创建完成后可以查看仓库信息：</p>
<p><img src="@source/必会工具/assets/image-20210926090131032.png" alt="image-20210926090131032"></p>
<p><strong>注意</strong>：每个Git远程仓库都会对应一个网络地址，点击【克隆/下载】按钮，在弹出窗口点击【复制】按钮即可复制网络地址，地址如下：</p>
<p>https://gitee.com/beisheng/myGitRepo.git</p>
<h4 id="_3-2-4-邀请其他用户成为仓库成员" tabindex="-1"><a class="header-anchor" href="#_3-2-4-邀请其他用户成为仓库成员" aria-hidden="true">#</a> 3.2.4 邀请其他用户成为仓库成员</h4>
<p>前面已经在码云上创建了自己的远程仓库，目前仓库成员只有自己一个人（身份为管理员）。在企业实际开发中，一个项目往往是由多个人共同开发完成的，为了使多个参与者都有权限操作远程仓库，就需要邀请其他项目参与者成为当前仓库的成员。</p>
<p>点击管理按钮进入仓库管理页面，左侧菜单中可以看到【仓库成员管理】：</p>
<p><img src="@source/必会工具/assets/image-20210926090608272.png" alt="image-20210926090608272"></p>
<p>点击【开发者】菜单，跳转到如下页面：</p>
<p><img src="@source/必会工具/assets/image-20210926091027151.png" alt="image-20210926091027151"></p>
<p>点击【添加仓库成员】菜单下的【邀请用户】菜单，跳转到如下页面：</p>
<p><img src="@source/必会工具/assets/image-20210926091204422.png" alt="image-20210926091204422"></p>
<p>可以看到邀请用户有多种方式：链接邀请、直接添加、通过仓库邀请成员</p>
<p><strong>注意</strong>：被邀请用户必须为码云的注册用户，否则无法成为仓库成员</p>
<h2 id="_4-git常用命令" tabindex="-1"><a class="header-anchor" href="#_4-git常用命令" aria-hidden="true">#</a> 4. Git常用命令</h2>
<h3 id="_4-1-git全局设置" tabindex="-1"><a class="header-anchor" href="#_4-1-git全局设置" aria-hidden="true">#</a> 4.1 Git全局设置</h3>
<p>当安装Git后首先要做的事情是设置用户名称和email地址。这是非常重要的，因为每次Git提交都会使用该用户信息。在Git 命令行中执行下面命令：</p>
<p><strong>设置用户信息</strong></p>
<p>git config --global user.name &quot;beisheng&quot;</p>
<p>git config --global user.email &quot;hello@beisheng.cn&quot;</p>
<p><strong>查看配置信息</strong></p>
<p>git config --list</p>
<p><img src="@source/必会工具/assets/image-20210926092820321.png" alt="image-20210926092820321"></p>
<p>注意：上面设置的user.name和user.email并不是我们在注册码云账号时使用的用户名和邮箱，此处可以任意设置。</p>
<h3 id="_4-2-获取git仓库" tabindex="-1"><a class="header-anchor" href="#_4-2-获取git仓库" aria-hidden="true">#</a> 4.2 获取Git仓库</h3>
<p>要使用Git对我们的代码进行管理，首先需要获得Git仓库。</p>
<p>获取Git仓库通常有两种方式：</p>
<ul>
<li>在本地初始化Git仓库（不常用）</li>
<li>从远程仓库克隆（常用）</li>
</ul>
<h4 id="_4-2-1-在本地初始化git仓库" tabindex="-1"><a class="header-anchor" href="#_4-2-1-在本地初始化git仓库" aria-hidden="true">#</a> 4.2.1 在本地初始化Git仓库</h4>
<p><strong>操作步骤如下</strong>：</p>
<ol>
<li>在任意目录下创建一个空目录（例如repo1）作为我们的本地Git仓库</li>
<li>进入这个目录中，点击右键打开Git bash窗口</li>
<li>执行命令<strong>git</strong> <strong>init</strong></li>
</ol>
<p>如果在当前目录中看到.git文件夹（此文件夹为隐藏文件夹）则说明Git仓库创建成功</p>
<p><img src="@source/必会工具/assets/image-20210926093721515.png" alt="image-20210926093721515"></p>
<h4 id="_4-2-2-从远程仓库克隆" tabindex="-1"><a class="header-anchor" href="#_4-2-2-从远程仓库克隆" aria-hidden="true">#</a> 4.2.2 从远程仓库克隆</h4>
<p>可以通过Git提供的命令从远程仓库进行克隆，将远程仓库克隆到本地</p>
<p><strong>命令格式</strong>：git clone 远程仓库地址</p>
<p><img src="@source/必会工具/assets/image-20210926094404332.png" alt="image-20210926094404332"></p>
<h3 id="_4-3-工作区、暂存区、版本库" tabindex="-1"><a class="header-anchor" href="#_4-3-工作区、暂存区、版本库" aria-hidden="true">#</a> 4.3 工作区、暂存区、版本库</h3>
<p>为了更好的学习Git，我们需要了解Git相关的一些概念，这些概念在后面的学习中会经常提到。</p>
<p><strong>版本库</strong>：前面看到的.git隐藏文件夹就是版本库，版本库中存储了很多配置信息、日志信息和文件版本信息等</p>
<p><strong>工作区</strong>：包含.git文件夹的目录就是工作区，也称为工作目录，主要用于存放开发的代码</p>
<p><strong>暂存区</strong>：.git文件夹中有很多文件，其中有一个index文件就是暂存区，也可以叫做stage。暂存区是一个临时保存修改文件的地方</p>
<p><img src="@source/必会工具/assets/image-20210926094831386.png" alt="image-20210926094831386"></p>
<h3 id="_4-4-git工作区中文件的状态" tabindex="-1"><a class="header-anchor" href="#_4-4-git工作区中文件的状态" aria-hidden="true">#</a> 4.4 Git工作区中文件的状态</h3>
<p>Git工作区中的文件存在两种状态：</p>
<ul>
<li>
<p>untracked 未跟踪（未被纳入版本控制）</p>
</li>
<li>
<p>tracked 已跟踪（被纳入版本控制）</p>
<p>​     1）Unmodified 未修改状态</p>
<p>​     2）Modified 已修改状态</p>
<p>​     3）Staged 已暂存状态</p>
</li>
</ul>
<p><strong>注意</strong>：文件的状态会随着我们执行Git的命令发生变化</p>
<h3 id="_4-5-本地仓库操作" tabindex="-1"><a class="header-anchor" href="#_4-5-本地仓库操作" aria-hidden="true">#</a> 4.5 本地仓库操作</h3>
<p>本地仓库常用命令如下：</p>
<ul>
<li>git status 查看文件状态</li>
<li>git add 将文件的修改加入暂存区</li>
<li>git reset 将暂存区的文件取消暂存或者是切换到指定版本</li>
<li>git commit 将暂存区的文件修改提交到版本库</li>
<li>git log  查看日志</li>
</ul>
<h4 id="_4-5-1-git-status" tabindex="-1"><a class="header-anchor" href="#_4-5-1-git-status" aria-hidden="true">#</a> 4.5.1 git status</h4>
<p>git status 命令用于查看文件状态</p>
<p><img src="@source/必会工具/assets/image-20210926095623297.png" alt="image-20210926095623297"></p>
<p>注意：由于工作区中文件状态的不同，执行 git status 命令后的输出也会不同</p>
<h4 id="_4-5-2-git-add" tabindex="-1"><a class="header-anchor" href="#_4-5-2-git-add" aria-hidden="true">#</a> 4.5.2 git add</h4>
<p>git add 命令的作用是将文件的修改加入暂存区，命令格式：git add fileName</p>
<p><img src="@source/必会工具/assets/image-20210926100003056.png" alt="image-20210926100003056"></p>
<p>加入暂存区后再执行 git status 命令，可以发现文件的状态已经发生变化。</p>
<h4 id="_4-5-3-git-reset" tabindex="-1"><a class="header-anchor" href="#_4-5-3-git-reset" aria-hidden="true">#</a> 4.5.3 git reset</h4>
<p>git reset 命令的作用是将暂存区的文件<strong>取消暂存</strong>或者是<strong>切换到指定版本</strong></p>
<p>取消暂存命令格式：git reset 文件名</p>
<p><img src="@source/必会工具/assets/image-20210926101346514.png" alt="image-20210926101346514"></p>
<p>切换到指定版本命令格式：git reset --hard 版本号</p>
<p><img src="@source/必会工具/assets/image-20210926101401721.png" alt="image-20210926101401721"></p>
<p>注意：每次Git提交都会产生新的版本号，通过版本号就可以回到历史版本</p>
<blockquote>
<p>reset --hard 会把内容和版本号都回退到指定版本，并舍弃后续所有版本。所以一般不推荐使用。</p>
<p>推荐使用--hard配合--soft进行回退</p>
<p>前提：先通过git log 把最新版本和老版本版本号记录下来</p>
<ol>
<li>reset --hard 把内容切回指定版本</li>
<li>reset --soft 把版本号切到原先最新的版本。此时，内容是历史版本，版本号是最新的。相当于进行了一次修改操作</li>
<li>commit，提交一个新的版本，内容就是历史的内容。</li>
</ol>
</blockquote>
<h4 id="_4-5-4-git-commit" tabindex="-1"><a class="header-anchor" href="#_4-5-4-git-commit" aria-hidden="true">#</a> 4.5.4 git commit</h4>
<p>git commit 命令的作用是将暂存区的文件修改提交到版本库，命令格式：git commit -m msg 文件名</p>
<p><img src="@source/必会工具/assets/image-20210926101859601.png" alt="image-20210926101859601"></p>
<p>解释说明：</p>
<blockquote>
<p>-m：代表message，每次提交时需要设置，会记录到日志中</p>
<p>可以使用通配符*一次提交多个文件</p>
</blockquote>
<blockquote>
<p>git commit -am 消息</p>
<p>​		一次性提交工作区中的所有文件，无需add。</p>
</blockquote>
<h4 id="_4-5-5-git-log" tabindex="-1"><a class="header-anchor" href="#_4-5-5-git-log" aria-hidden="true">#</a> 4.5.5 git log</h4>
<p>git log 命令的作用是查看提交日志</p>
<p><img src="@source/必会工具/assets/image-20210926102305539.png" alt="image-20210926102305539"></p>
<p>通过git log命令查看日志，可以发现每次提交都会产生一个版本号，提交时设置的message、提交人、邮箱、提交时间等信息都会记录到日志中</p>
<h3 id="_4-6-远程仓库操作" tabindex="-1"><a class="header-anchor" href="#_4-6-远程仓库操作" aria-hidden="true">#</a> 4.6 远程仓库操作</h3>
<p>前面执行的命令操作都是针对的本地仓库，本节我们会学习关于远程仓库的一些操作，具体包括：</p>
<ul>
<li>git remote  查看远程仓库</li>
<li>git remote add 添加远程仓库</li>
<li>git clone 从远程仓库克隆</li>
<li>git pull 从远程仓库拉取</li>
<li>git push 推送到远程仓库</li>
</ul>
<h4 id="_4-6-1-git-remote" tabindex="-1"><a class="header-anchor" href="#_4-6-1-git-remote" aria-hidden="true">#</a> 4.6.1 git remote</h4>
<p>如果要查看已经配置的远程仓库服务器，可以执行 git remote 命令，它会列出每一个远程服务器的简称。</p>
<p>如果已经克隆了远程仓库，那么至少应该能看到 origin ，这是 Git 克隆的仓库服务器的默认名字。</p>
<p><img src="@source/必会工具/assets/image-20210926103746721.png" alt="image-20210926103746721"></p>
<p>解释说明：</p>
<blockquote>
<p>可以通过-v参数查看远程仓库更加详细的信息</p>
<p>本地仓库配置的远程仓库都需要一个简称，后续在和远程仓库交互时会使用到这个简称</p>
</blockquote>
<h4 id="_4-6-2-git-remote-add" tabindex="-1"><a class="header-anchor" href="#_4-6-2-git-remote-add" aria-hidden="true">#</a> 4.6.2 git remote add</h4>
<p>添加远程仓库命令格式：git remote add 简称 远程仓库地址</p>
<p><img src="@source/必会工具/assets/image-20210926104723901.png" alt="image-20210926104723901"></p>
<p>注意：一个本地仓库可以关联多个远程仓库</p>
<h4 id="_4-6-3-git-clone" tabindex="-1"><a class="header-anchor" href="#_4-6-3-git-clone" aria-hidden="true">#</a> 4.6.3 git clone</h4>
<p>如果你想获得一份已经存在了的 Git 远程仓库的拷贝，这时就要用到 git clone 命令。 Git 克隆的是该 Git 仓库服务器上的几乎所有数据（包括日志信息、历史记录等）。</p>
<p>克隆仓库的命令格式： git clone 远程仓库地址</p>
<p><img src="@source/必会工具/assets/image-20210926105017148.png" alt="image-20210926105017148"></p>
<h4 id="_4-6-4-git-push" tabindex="-1"><a class="header-anchor" href="#_4-6-4-git-push" aria-hidden="true">#</a> 4.6.4 git push</h4>
<p>将本地仓库内容推送到远程仓库，命令格式：git push 远程仓库简称 分支名称</p>
<p><img src="@source/必会工具/assets/image-20210926105413681.png" alt="image-20210926105413681"></p>
<p>在使用git push命令将本地文件推送至码云远程仓库时，如果是第一次操作，需要进行身份认证，认证通过才可以推送，如下：</p>
<p><img src="@source/必会工具/assets/image-20210926105913504.png" alt="image-20210926105913504"></p>
<p>注意：上面的用户名和密码对应的就是我们在码云上注册的用户名和密码，认证通过后会将用户名和密码保存到windows系统中（如下图），后续再推送则无需重复输入用户名和密码。</p>
<p><img src="@source/必会工具/assets/image-20210926110810630.png" alt="image-20210926110810630"></p>
<p>推送完成后可以到远程仓库中查看文件的变化。</p>
<p>解释说明：</p>
<blockquote>
<p>一个仓库可以有多个分支，默认情况下在创建仓库后会自动创建一个master分支</p>
<p>后面会讲解分支相关的操作</p>
</blockquote>
<h4 id="_4-6-5-git-pull" tabindex="-1"><a class="header-anchor" href="#_4-6-5-git-pull" aria-hidden="true">#</a> 4.6.5 git pull</h4>
<p><strong>git</strong> <strong>pull</strong> 命令的作用是从远程仓库获取最新版本并合并到本地仓库</p>
<p>命令格式：git pull 远程仓库简称 分支名称</p>
<p><img src="@source/必会工具/assets/image-20210926111013002.png" alt="image-20210926111013002"></p>
<p><strong>注意</strong>：如果当前本地仓库不是从远程仓库克隆，而是本地创建的仓库，并且仓库中存在文件，此时再从远程仓库拉取文件的时候会报错（fatal: refusing to merge unrelated histories ）</p>
<p>解决此问题可以在git pull命令后加入参数--allow-unrelated-histories</p>
<blockquote>
<p>仓库最好从远程克隆进行操作，否则就有可能产生未关联历史记录的错误。</p>
</blockquote>
<blockquote>
<p>如果代码产生了冲突，需要手动合并解决冲突。</p>
<p>如何可以降低产生冲突的概率？</p>
<ol>
<li>修改代码之前先拉取（pull）</li>
<li>修改时间尽可能短，勤提交。</li>
<li>提交的代码至少要编译通过。</li>
</ol>
</blockquote>
<h3 id="_4-7-分支操作" tabindex="-1"><a class="header-anchor" href="#_4-7-分支操作" aria-hidden="true">#</a> 4.7 分支操作</h3>
<p>分支是Git 使用过程中非常重要的概念。使用分支意味着你可以把你的工作从开发主线上分离开来，以免影响开发主线。</p>
<p>本地仓库和远程仓库中都有分支，同一个仓库可以有多个分支，各个分支相互独立，互不干扰。</p>
<p>通过git init 命令创建本地仓库时默认会创建一个master分支。</p>
<p>本节我们会学习关于分支的相关命令，具体命令如下：</p>
<ul>
<li>git branch                                     查看分支</li>
<li>git branch [name]                       创建分支</li>
<li>git checkout [name]                    切换分支</li>
<li>git push [shortName] [name]   推送至远程仓库分支</li>
<li>git merge [name]                        合并分支</li>
</ul>
<h4 id="_4-7-1-查看分支" tabindex="-1"><a class="header-anchor" href="#_4-7-1-查看分支" aria-hidden="true">#</a> 4.7.1 查看分支</h4>
<p>查看分支命令：git branch</p>
<p>git branch 		列出所有本地分支</p>
<p>git branch -r 	列出所有远程分支</p>
<p>git branch -a 	列出所有本地分支和远程分支</p>
<p><img src="@source/必会工具/assets/image-20210926124843275.png" alt="image-20210926124843275"></p>
<h4 id="_4-7-2-创建分支" tabindex="-1"><a class="header-anchor" href="#_4-7-2-创建分支" aria-hidden="true">#</a> 4.7.2 创建分支</h4>
<p>创建分支命令格式：git branch 分支名称</p>
<blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 新建一个分支，指向指定commit</span>
<span class="token function">git</span> branch <span class="token punctuation">[</span>branch<span class="token punctuation">]</span> <span class="token punctuation">[</span>commit<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
<p><img src="@source/必会工具/assets/image-20210926125053711.png" alt="image-20210926125053711"></p>
<h4 id="_4-7-3-切换分支" tabindex="-1"><a class="header-anchor" href="#_4-7-3-切换分支" aria-hidden="true">#</a> 4.7.3 切换分支</h4>
<p>一个仓库中可以有多个分支，切换分支命令格式：git checkout 分支名称</p>
<p><img src="@source/必会工具/assets/image-20210926125259155.png" alt="image-20210926125259155"></p>
<p>注意：在命令行中会显示出当前所在分支，如上图所示。</p>
<h4 id="_4-7-4-推送至远程仓库分支" tabindex="-1"><a class="header-anchor" href="#_4-7-4-推送至远程仓库分支" aria-hidden="true">#</a> 4.7.4 推送至远程仓库分支</h4>
<p>推送至远程仓库分支命令格式：git push 远程仓库简称 分支命令</p>
<p><img src="@source/必会工具/assets/image-20210926125628894.png" alt="image-20210926125628894"></p>
<p>推送完成后可以查看远程仓库：</p>
<p><img src="@source/必会工具/assets/image-20210926125810878.png" alt="image-20210926125810878"></p>
<h4 id="_4-7-5-合并分支" tabindex="-1"><a class="header-anchor" href="#_4-7-5-合并分支" aria-hidden="true">#</a> 4.7.5 合并分支</h4>
<p>合并分支就是将两个分支的文件进行合并处理，命令格式：git merge 分支命令</p>
<p><img src="@source/必会工具/assets/image-20210926130213015.png" alt="image-20210926130213015"></p>
<p>注意：分支合并时需注意合并的方向，如上图所示，在Master分支执行操作，结果就是将b3分支合并到Master分支。</p>
<h3 id="_4-8-标签操作" tabindex="-1"><a class="header-anchor" href="#_4-8-标签操作" aria-hidden="true">#</a> 4.8 标签操作</h3>
<p>Git 中的标签，指的是某个分支某个特定时间点的状态。通过标签，可以很方便的切换到标记时的状态。</p>
<p>比较有代表性的是人们会使用这个功能来标记发布结点（v1.0 、v1.2等）。下面是mybatis-plus的标签：</p>
<p><img src="@source/必会工具/assets/image-20210926130452557.png" alt="image-20210926130452557"></p>
<p>在本节中，我们将学习如下和标签相关的命令：</p>
<ul>
<li>git tag                                                查看标签</li>
<li>git tag [name]                                  创建标签</li>
<li>git push [shortName] [name]       将标签推送至远程仓库</li>
<li>git checkout -b [branch] [name]   检出标签</li>
</ul>
<h4 id="_4-8-1-查看标签" tabindex="-1"><a class="header-anchor" href="#_4-8-1-查看标签" aria-hidden="true">#</a> 4.8.1 查看标签</h4>
<p>查看标签命令：git tag</p>
<p><img src="@source/必会工具/assets/image-20210926151333473.png" alt="image-20210926151333473"></p>
<h4 id="_4-8-2-创建标签" tabindex="-1"><a class="header-anchor" href="#_4-8-2-创建标签" aria-hidden="true">#</a> 4.8.2 创建标签</h4>
<p>创建标签命令：git tag 标签名</p>
<p><img src="@source/必会工具/assets/image-20210926151452581.png" alt="image-20210926151452581"></p>
<h4 id="_4-8-3-将标签推送至远程仓库" tabindex="-1"><a class="header-anchor" href="#_4-8-3-将标签推送至远程仓库" aria-hidden="true">#</a> 4.8.3 将标签推送至远程仓库</h4>
<p>将标签推送至远程仓库命令：git push 远程仓库简称 标签名</p>
<p><img src="@source/必会工具/assets/image-20210926151621286.png" alt="image-20210926151621286"></p>
<p>推送完成后可以在远程仓库中查看标签。</p>
<h4 id="_4-8-4-检出标签" tabindex="-1"><a class="header-anchor" href="#_4-8-4-检出标签" aria-hidden="true">#</a> 4.8.4 检出标签</h4>
<p>检出标签时需要新建一个分支来指向某个标签，检出标签的命令格式：git checkout -b 分支名 标签名</p>
<p><img src="@source/必会工具/assets/image-20210926152111514.png" alt="image-20210926152111514"></p>
<h2 id="_5-在idea中使用git" tabindex="-1"><a class="header-anchor" href="#_5-在idea中使用git" aria-hidden="true">#</a> 5. 在IDEA中使用Git</h2>
<p>通过Git命令可以完成Git相关操作，为了简化操作过程，我们可以在IEDA中配置Git，配置好后就可以在IDEA中通过图形化的方式来操作Git。</p>
<h3 id="_5-1-在idea中配置git" tabindex="-1"><a class="header-anchor" href="#_5-1-在idea中配置git" aria-hidden="true">#</a> 5.1 在IDEA中配置Git</h3>
<p>在IDEA中使用Git，本质上还是使用的本地安装的Git软件，所以需要提前安装好Git并在IDEA中配置Git。</p>
<p>Git安装目录：</p>
<p><img src="@source/必会工具/assets/image-20210926152847948.png" alt="image-20210926152847948"></p>
<p>解释说明：</p>
<blockquote>
<p>git.exe：Git安装目录下的可执行文件，前面执行的git命令，其实就是执行的这个文件</p>
</blockquote>
<p>IDEA中的配置：</p>
<p><img src="@source/必会工具/assets/image-20210926152950420.png" alt="image-20210926152950420"></p>
<p>说明：如果Git安装在默认目录中（C:\Program Files\Git），则IDEA中无需再手动配置，直接就可以使用。</p>
<h3 id="_5-2-获取git仓库" tabindex="-1"><a class="header-anchor" href="#_5-2-获取git仓库" aria-hidden="true">#</a> 5.2 获取Git仓库</h3>
<p>在IDEA中获取Git仓库有两种方式：</p>
<ul>
<li>本地初始化仓库，本质就是执行 git init 命令</li>
<li>从远程仓库克隆，本质就是执行 git clone 命令</li>
</ul>
<h4 id="_5-2-1-本地初始化仓库" tabindex="-1"><a class="header-anchor" href="#_5-2-1-本地初始化仓库" aria-hidden="true">#</a> 5.2.1 本地初始化仓库</h4>
<p>在IDEA中通过如下操作可以在本地初始化一个本地仓库，其实底层就是执行的 git init 命令。操作过程如下：</p>
<p>1）依次选择菜单【VCS】---【Import into Version Control】---【Create Git Repository】</p>
<p><img src="@source/必会工具/assets/image-20210926153806414.png" alt="image-20210926153806414"></p>
<p>2）在弹出的【Create Git Repository】对话框中选择当前项目根目录，点击【OK】按钮：</p>
<p><img src="@source/必会工具/assets/image-20210926154201744.png" alt="image-20210926154201744"></p>
<p>操作完成后可以看到当前项目根目录下出现了.git隐藏目录：</p>
<p><img src="@source/必会工具/assets/image-20210926154757082.png" alt="image-20210926154757082"></p>
<p>操作完成后可以在IDEA的工具栏中看到Git的相关操作图标：<img src="@source/必会工具/assets/image-20210926154933876.png" alt="image-20210926154933876"></p>
<h4 id="_5-2-2-从远程仓库克隆" tabindex="-1"><a class="header-anchor" href="#_5-2-2-从远程仓库克隆" aria-hidden="true">#</a> 5.2.2 从远程仓库克隆</h4>
<p>在IDEA中从远程仓库克隆本质就是执行的 git clone 命令，具体操作过程如下：</p>
<p>1）在IDEA开始窗口中点击【Get from Version Control】</p>
<p><img src="@source/必会工具/assets/image-20210926155434202.png" alt="image-20210926155434202"></p>
<p>2）在弹出的【Get from Version Control】窗口中输入远程仓库的URL地址和对应的本地仓库存放目录，点击【Clone】按钮进行仓库克隆操作</p>
<p><img src="@source/必会工具/assets/image-20210926155750107.png" alt="image-20210926155750107"></p>
<h3 id="_5-3-git忽略文件" tabindex="-1"><a class="header-anchor" href="#_5-3-git忽略文件" aria-hidden="true">#</a> 5.3 Git忽略文件</h3>
<p>在Git工作区中有一个特殊的文件 .gitignore，通过此文件可以指定工作区中的哪些文件不需要Git管理。我们在码云上创建Git远程仓库时可以指定生成此文件，如下：</p>
<p><img src="@source/必会工具/assets/image-20210926161050169.png" alt="image-20210926161050169"></p>
<p>创建完成后效果如下：</p>
<p><img src="@source/必会工具/assets/image-20210926161233052.png" alt="image-20210926161233052"></p>
<p>解释说明：</p>
<blockquote>
<p>1）我们在使用Git管理项目代码时，并不是所有文件都需要Git管理，例如Java项目中编译的.class文件、开发工具自带的配置文件等，这些文件没有必要交给Git管理，所以也就不需要提交到Git版本库中</p>
<p>2）注意忽略文件的名称是固定的，不能修改</p>
<p>3）添加到忽略列表中的文件后续Git工具就会忽略它</p>
</blockquote>
<p>一个参考的.gitignore文件内容如下：</p>
<div class="language-file line-numbers-mode" data-ext="file"><pre v-pre class="language-file"><code>.git
logs
rebel.xml
target/
!.mvn/wrapper/maven-wrapper.jar
log.path_IS_UNDEFINED
.DS_Store
offline_user.md
*.class

### IntelliJ IDEA ###
.idea
*.iws
*.iml
*.ipr
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<ol>
<li>忽略文件必须在第一次提交之前设置完毕</li>
<li>忽略文件名字固定，就叫 .gitignore</li>
<li>忽略文件的位置固定的，必须在.git目录的同级目录，也就是工作区的根。</li>
</ol>
</blockquote>
<p>在工作目录下创建一个文件，名称为  .gitignore</p>
<p># no .a files  以.a结尾的所有文件被忽略</p>
<p>*.a</p>
<p># but do track lib.a, even though you're ignoring .a files above</p>
<p># lib.a会被版本控制，是在上面配置的基础上排除lib.a的忽略</p>
<p>!lib.a</p>
<p># only ignore the TODO file in the current directory, not subdir/TODO</p>
<p># 忽略当前目录下的TODO文件，并不是TODO子目录</p>
<p>/TODO</p>
<p># ignore all files in the build/ directory  忽略所有的build子目录下的资源，包含该目录本身</p>
<p>build/</p>
<p># ignore doc/notes.txt, but not doc/server/arch.txt  忽略doc目录下的所有以.txt结尾的直接子文件，但是不会忽略子目录中的txt文件</p>
<p>doc/*.txt</p>
<p># ignore all .pdf files in the doc/ directory 忽略doc目录下的所有pdf文件，包含子目录中的也忽略</p>
<p>doc/**/*.pdf</p>
<h3 id="_5-4-本地仓库操作" tabindex="-1"><a class="header-anchor" href="#_5-4-本地仓库操作" aria-hidden="true">#</a> 5.4 本地仓库操作</h3>
<p>本地仓库操作：</p>
<ul>
<li>将文件加入暂存区，本质就是执行 git add 命令</li>
<li>将暂存区的文件提交到版本库，本质就是执行 git commit 命令</li>
<li>查看日志，本质就是执行 git log 命令</li>
</ul>
<h4 id="_5-4-1-将文件加入暂存区" tabindex="-1"><a class="header-anchor" href="#_5-4-1-将文件加入暂存区" aria-hidden="true">#</a> 5.4.1 将文件加入暂存区</h4>
<p>当在Git工作区新增文件或者对已有文件修改后，就需要将文件的修改加入暂存区，具体操作如下：</p>
<p><img src="@source/必会工具/assets/image-20210926162515597.png" alt="image-20210926162515597"></p>
<h4 id="_5-4-2-将暂存区文件提交到版本库" tabindex="-1"><a class="header-anchor" href="#_5-4-2-将暂存区文件提交到版本库" aria-hidden="true">#</a> 5.4.2 将暂存区文件提交到版本库</h4>
<p>将暂存区文件提交到版本库，可以选择一个文件进行提交，也可以选择整个项目提交多个文件。在IEDA中对文件的提交进行了简化操作，也就是如果文件修改后，无需再加入暂存区，可以直接提交。</p>
<p>1）提交一个文件：</p>
<p><img src="@source/必会工具/assets/image-20210926162809740.png" alt="image-20210926162809740"></p>
<p>可以看到，如果选中一个文件提交，则菜单名称为【Commit File...】</p>
<p>2）提交多个文件：</p>
<p><img src="@source/必会工具/assets/image-20210926162843891.png" alt="image-20210926162843891"></p>
<p>可以看到，如果提交多个文件，则菜单名称为【Commit Directory...】</p>
<p>由于提交操作属于高频操作，所以为了进一步方便操作，在IDEA的工具栏中提供了提交操作的快捷按钮：<img src="@source/必会工具/assets/image-20210926163535277.png" alt="image-20210926163535277"></p>
<h4 id="_5-4-3-查看日志" tabindex="-1"><a class="header-anchor" href="#_5-4-3-查看日志" aria-hidden="true">#</a> 5.4.3 查看日志</h4>
<p>查看日志，既可以查看整个仓库的提交日志，也可以查看某个文件的提交日志。</p>
<p>1）查看整个项目的提交日志：</p>
<p><img src="@source/必会工具/assets/image-20210926163902184.png" alt="image-20210926163902184"></p>
<p><img src="@source/必会工具/assets/image-20210926164138430.png" alt="image-20210926164138430"></p>
<p>2）查看某个文件的提交日志</p>
<p><img src="@source/必会工具/assets/image-20210926164210056.png" alt="image-20210926164210056"></p>
<p><img src="@source/必会工具/assets/image-20210926164233935.png" alt="image-20210926164233935"></p>
<h3 id="_5-5-远程仓库操作" tabindex="-1"><a class="header-anchor" href="#_5-5-远程仓库操作" aria-hidden="true">#</a> 5.5 远程仓库操作</h3>
<p>远程仓库操作：</p>
<ul>
<li>查看远程仓库，本质就是执行 git remote 命令</li>
<li>添加远程仓库，本质就是执行 git remote add 命令</li>
<li>推送至远程仓库，本质就是执行 git push 命令</li>
<li>从远程仓库拉取，本质就是执行 git pull 命令</li>
</ul>
<h4 id="_5-5-1-查看远程仓库" tabindex="-1"><a class="header-anchor" href="#_5-5-1-查看远程仓库" aria-hidden="true">#</a> 5.5.1 查看远程仓库</h4>
<p>操作过程如下：</p>
<p><img src="@source/必会工具/assets/image-20210926165935756.png" alt="image-20210926165935756"></p>
<p>在弹出的【Git Remotes】窗口中可以看到配置的远程仓库：</p>
<p><img src="@source/必会工具/assets/image-20210926170143160.png" alt="image-20210926170143160"></p>
<h4 id="_5-5-2-添加远程仓库" tabindex="-1"><a class="header-anchor" href="#_5-5-2-添加远程仓库" aria-hidden="true">#</a> 5.5.2 添加远程仓库</h4>
<p>一个本地仓库可以配置多个远程仓库，在【Git Remotes】窗口中点击【+】来添加一个新的远程仓库：</p>
<p><img src="@source/必会工具/assets/image-20210926170653126.png" alt="image-20210926170653126"></p>
<h4 id="_5-5-3-推送至远程仓库" tabindex="-1"><a class="header-anchor" href="#_5-5-3-推送至远程仓库" aria-hidden="true">#</a> 5.5.3 推送至远程仓库</h4>
<p>可以通过如下操作将本地仓库文件推送至远程仓库：</p>
<p><img src="@source/必会工具/assets/image-20210926170908769.png" alt="image-20210926170908769"></p>
<p>在弹出的【Push Commits】窗口中可以看到本次推送的文件，点击【Push】按钮即可推送至远程仓库：</p>
<p><img src="@source/必会工具/assets/image-20210926171058705.png" alt="image-20210926171058705"></p>
<p>由于推送至远程仓库操作属于高频操作，所以可以通过IDEA工具栏中的提交快捷按钮同时完成提交和推送：</p>
<p><img src="@source/必会工具/assets/image-20210926171408649.png" alt="image-20210926171408649"></p>
<p>点击【Commit and Push...】按钮同时完成提交和推送操作</p>
<h4 id="_5-5-4-从远程仓库拉取" tabindex="-1"><a class="header-anchor" href="#_5-5-4-从远程仓库拉取" aria-hidden="true">#</a> 5.5.4 从远程仓库拉取</h4>
<p>可以通过如下操作从远程仓库拉取：</p>
<p><img src="@source/必会工具/assets/image-20210926171646041.png" alt="image-20210926171646041"></p>
<p>由于从远程仓库拉取文件属于高频操作，所以在IDEA的工具栏中提供了对应的快捷按钮：<img src="@source/必会工具/assets/image-20210926171919288.png" alt="image-20210926171919288"></p>
<p>在弹出的【Update Project】窗口中点击【OK】：</p>
<p><img src="@source/必会工具/assets/image-20210926171950911.png" alt="image-20210926171950911"></p>
<h3 id="_5-6-分支操作" tabindex="-1"><a class="header-anchor" href="#_5-6-分支操作" aria-hidden="true">#</a> 5.6 分支操作</h3>
<p>分支操作：</p>
<ul>
<li>查看分支，本质就是执行 git branch 命令</li>
<li>创建分支，本质就是执行 git branch 分支名 命令</li>
<li>切换分支，本质就是执行 git checkout 命令</li>
<li>将分支推送到远程仓库，本质就是执行 git push 命令</li>
<li>合并分支，本质就是执行 git merge 命令</li>
</ul>
<h4 id="_5-6-1-查看分支" tabindex="-1"><a class="header-anchor" href="#_5-6-1-查看分支" aria-hidden="true">#</a> 5.6.1 查看分支</h4>
<p>可以通过如下操作查看分支：</p>
<p><img src="@source/必会工具/assets/image-20210926172752562.png" alt="image-20210926172752562"></p>
<p>在弹出的窗口中可以看到本地分支和远程分支：</p>
<p><img src="@source/必会工具/assets/image-20210926172903493.png" alt="image-20210926172903493"></p>
<p>由于分支操作属于高频操作，所以在IDEA的状态栏中提供了分支操作的快捷按钮：</p>
<p><img src="@source/必会工具/assets/image-20210926173622605.png" alt="image-20210926173622605"></p>
<p>点击【master】快捷按钮即可弹出【Git Branches】分支窗口：</p>
<p><img src="@source/必会工具/assets/image-20210926173744979.png" alt="image-20210926173744979"></p>
<h4 id="_5-6-2-创建分支" tabindex="-1"><a class="header-anchor" href="#_5-6-2-创建分支" aria-hidden="true">#</a> 5.6.2 创建分支</h4>
<p>在【Git Branches】分支窗口中点击【New Branch】，弹出如下窗口：</p>
<p><img src="@source/必会工具/assets/image-20210926173903894.png" alt="image-20210926173903894"></p>
<p>在弹出的【Create New Branch】窗口中输入新分支的名称，点击【Create】按钮完成分支创建</p>
<h4 id="_5-6-3-切换分支" tabindex="-1"><a class="header-anchor" href="#_5-6-3-切换分支" aria-hidden="true">#</a> 5.6.3 切换分支</h4>
<p>通过如下操作可以切换分支：</p>
<p><img src="@source/必会工具/assets/image-20210926174358500.png" alt="image-20210926174358500"></p>
<h4 id="_5-6-4-将分支推送到远程仓库" tabindex="-1"><a class="header-anchor" href="#_5-6-4-将分支推送到远程仓库" aria-hidden="true">#</a> 5.6.4 将分支推送到远程仓库</h4>
<p>通过如下操作可以将分支推送到远程仓库：</p>
<p><img src="@source/必会工具/assets/image-20210926175004502.png" alt="image-20210926175004502"></p>
<h4 id="_5-6-5-合并分支" tabindex="-1"><a class="header-anchor" href="#_5-6-5-合并分支" aria-hidden="true">#</a> 5.6.5 合并分支</h4>
<p>通过下面操作可以进行分支的合并：</p>
<p><img src="@source/必会工具/assets/image-20210926175216197.png" alt="image-20210926175216197"></p>
</div></template>


