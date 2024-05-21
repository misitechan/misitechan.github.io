<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>漫威世界</title>
    <base target="_blank" />
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
    <link rel = "Shortcut Icon" href=./favicon.ico>
    <link rel="stylesheet" href="css/font_1s8v5vjnh5gi/iconfont.css">
    <link rel="stylesheet" href="css/font_sda2z25sqlh/iconfont.css">
    <link rel="stylesheet" href="css/swiper.min.css">
    <script type="text/javascript" src="jq/swiper.min.js"></script>
    <script src="jq/jquery-3.3.1.min.js"></script>
    <link rel="stylesheet" href="css/topbottom.css">
    <link rel="stylesheet" href="css/initial.css">
    <link rel="stylesheet" href="css/index.css">
    <script src="jq/nva.js"></script>
    <script>
        window.onload=function () {
            var swiper = new Swiper('.swiper-container', {
                effect: 'coverflow',
                grabCursor: true,
                centeredSlides: true,
                slidesPerView: 'auto',
                coverflowEffect: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows : true,
                },
                pagination: {
                    el: '.swiper-pagination',
                },
            });
            document.getElementById("bgAudio").volume = 0.2;
        }
    </script>
</head>
<body>
<audio src="music/media1.mp3" id="bgAudio" autoplay="autoplay"></audio>
<!--导航栏-->
<div>
    <div class="nva">
        <div class="toubu">
            <div class="logo">
                     <a href="#"><p>MARVEL</p></a>
            </div>
            <div class="list">
                <ul class="list1">
                    <li><a href="Index.html">首页</a></li>
                    <li><a href="Introduction.html">漫威介绍</a></li>
                    <li><a href="Character.html">英雄介绍</a>
                        <ul class="sub">
                            <a href="IRON-MAN.html" target="_self"><li>钢铁侠</li></a>
                            <a href="Rogers.html"><li>美国队长</li></a>
                            <a href="hulk.html"><li>浩克</li></a>
                            <a href="Thor.html"><li>雷神</li></a>
                            <a href="spider.html"><li>蜘蛛侠</li></a>
                        </ul>
                    </li>
                    <li><a href="Universe.html">影视作品</a>
                        <ul class="sub">
                            <a href="Universe.html"><li>电影宇宙</li></a>
                            <a href=""><li>漫威剧集</li></a>
                            <a href=""><li>漫画动漫</li></a>
                        </ul>
                    </li>
                    <li><a href="Related.html">关于</a></li>
                </ul>
            </div>
        </div>
    </div>
</div>
<!--轮播图-->
<div class="zhanshi">
        <div class="slideBox" id="slidebox">
                <img src="img/img1.jpg" alt=""style="display: block"/>
                <img src="img/img2.jpg" alt="" />
                <img src="img/img3.jpg" alt="" />
                <img src="img/img4.jpg" alt="" />
                <img src="img/img5.jpg" alt="" />
                <img src="img/img6.jpg" alt="" />
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>>
        <!-- 左右按钮-->
            <span class="iconfont icon-zuo" id="gopre"></span>
            <span class="iconfont icon-you" id="gonext"></span>
            <!--<script type="text/javascript" src="http://libs.baidu.com/jquery/1.11.1/jquery.js"></script>-->
        </div>
    <script src="jq/index.js" type="text/javascript" charset="UTF-8"></script>
</div>
<!--角色介绍-->
<div id="contents">
    <div class="intow">
        <span>M</span><span>a</span><span>j</span><span>o</span><span>r</span>
        <span>M</span><span>a</span><span>l</span><span>v</span><span>e</span><span>r</span>
        <span>H</span><span>e</span><span>r</span><span>o</span>
    </div>
    <div class="intow1">
    </div>
    <div class="intow2">
        <p>Marvel Comics is the comic book giant of the United States and Detective Comics.</p>
    <p> It was founded in 1939 and officially named Marvel in 1961. It was translated as "Amazing Manga" and used to be called "Time". "Timely Comics", Atlas Comics.</p>
    </div>
    <div class="contes">
    <section id="itemline">
    <div class="item">
        <a href="IRON-MAN.html" target="_blank">
            <div class="bg" style="background-image: url(img/js1.jpg);"></div>
        </a>
    <div class="year">
        <p>Iron Man</p>
    </div>
    <div class="content">
        <h1>LOREN IPSUM DOLOR SIT</h1>
        <P>
            钢铁侠（Iron Man）是由美国漫威电影工作室出品的一部科幻冒险电影，改编自同名系列漫画，
            由乔恩·费儒执导，小罗伯特·唐尼及格温妮斯·帕特洛、杰夫·布里吉斯等主演。该作也是“漫威电影宇宙”系列的首部电影。
            影片讲述了托尼·史塔克在遇难后改进了盔甲的功能，化身“钢铁侠”，以一个义务警察的身份保护了这个世界和平的故事
        </P>
    </div>
    </div>
    <div class="item">
        <a href="Rogers.html" target="_blank">
            <div class="bg" style="background-image: url(img/js2.jpg);"></div>
        </a>
        <div class="year">
            <p>Steve Rogers</p>
        </div>
        <div class="content">
            <h1>LOREN IPSUM DOLOR SIT</h1>
            <P>
                美国队长（Captain America）是美国漫威漫画旗下的超级英雄,由乔·西蒙和杰克·科比联合创造，被视为美国精神的象征。
                本名史蒂文·罗杰斯（Steven Rogers），原本是一名身体瘦弱的年轻人，在接受美国政府的改造后变成了“超级士兵”，
                使其力量、速度、耐力等各项体能都远超于常人，且还被美国政府赋予了由世界上最坚硬的金属之一振金制成的盾牌，从此史蒂夫以美国队长的身份，在二战中立下赫赫战功。
            </P>
        </div>
    </div>
    <div class="item">
        <a href="hulk.html" target="_blank">
            <div class="bg" style="background-image: url(img/js3.jpg);"></div>
        </a>
        <div class="year">
            <p>Hulk</p>
        </div>
        <div class="content">
            <h1>LOREN IPSUM DOLOR SIT</h1>
            <P>
                浩克（Hulk）是美国漫威漫画旗下的超级英雄，初次登场于《不可思议的浩克》，由斯坦·李和杰克·科比联合创造。
                本名罗伯特·布鲁斯·班纳（Robert Bruce Banner），是世界著名的物理学家，在一次意外中被自己制造出的伽马炸弹（Gamma Bomb）的放射线大量辐射，身体产生异变变成名为浩克的绿色怪物。
                由于变身后往往不受控制，所以为了不伤害身边的人，班纳游走于世界各地寻找控制愤怒的方法。
            </P>
        </div>
    </div>
    <div class="item">
        <a href="Thor.html" target="_blank">
            <div class="bg" style="background-image: url(img/js4.jpg);"></div>
        </a>
        <div class="year">
            <p>Thor</p>
        </div>
        <div class="content">
            <h1>LOREN IPSUM DOLOR SIT</h1>
            <P>
                雷神（Thor）是漫威影业出品的一部科幻动作电影，取材自漫威漫画，是漫威电影宇宙的第四部电影。由肯尼思·布拉纳执导，克里斯·海姆斯沃斯，汤姆·希德勒斯顿，娜塔丽·波特曼等主演。
                影片讲述了被放逐到地球的索尔·奥丁森学习如何成为一个真正英雄的故事。
            </P>
        </div>
    </div>
    </section>
</div>
</div>
<!--导演介绍-->
<div id="tribus">
    <div class="trinus-inone">
        <span>M</span><span>a</span><span>r</span><span>v</span><span>e</span><span>l</span>
        <span>D</span><span>i</span><span>r</span><span>e</span><span>c</span><span>t</span><span>o</span><span>r</span>
        <span>I</span><span>n</span><span>t</span><span>r</span><span>o</span><span>d</span><span>u</span><span>c</span><span>t</span><span>i</span><span>o</span><span>n</span>
        <div class="trinus-inone1">
            Marvel Cinematic Universe (MCU) is a common aerial world centered on superhero movies, series produced by Marvel Studios based on the characters in the Marvel comics publication.
        </div>
    </div>
    <div class="trinus-intow">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <div class="trinus-img">
                        <img src="img/rw1.jpg" alt="">
                    </div>
                    <div class="triuns-data">
                    <h3>Joe Russo<br><span>Marvel director</span></h3>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="trinus-img">
                        <img src="img/rw2.jpg" alt="">
                    </div>
                    <div class="triuns-data">
                        <h3>Anthony Russo<br><span>Marvel director</span></h3>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="trinus-img">
                        <img src="img/rw3.jpg" alt="">
                    </div>
                    <div class="triuns-data">
                        <h3>Joss Whedon<br><span>Marvel director</span></h3>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="trinus-img">
                        <a href="Introduction.html#contents-idt"><img src="img/rw4.jpg" alt="" class="trinus-move"></a>
                        <!--<img src="img/noise.png" alt="" class="trinus-move1"
                        style="border: none;">-->
                    </div>
                    <div class="triuns-data">
                        <h3>Stan Lee<br><span>Marvel Writer</span></h3>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="trinus-img">
                        <img src="img/rw5.png" alt="">
                    </div>
                    <div class="triuns-data">
                        <h3>Louis Leterrier<br><span>Marvel Writer</span></h3>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="trinus-img">
                        <img src="img/rw6.jpg" alt="">
                    </div>
                    <div class="triuns-data">
                        <h3>Kenneth Charles Branagh<br><span>Marvel director</span></h3>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="trinus-img">
                        <img src="img/rw7.jpg" alt="">
                    </div>
                    <div class="triuns-data">
                        <h3>steve<br><span>John doe</span></h3>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="trinus-img">
                        <img src="img/rw8.jpg" alt="">
                    </div>
                    <div class="triuns-data">
                        <h3>Christopher Markus<br><span>Marvel Writer</span></h3>
                    </div>
                </div>
            </div>
            <div class="trinus-more">
                <a href="Introduction.html">查看更多</a>
            </div>
       <!-- </div>
            &lt;!&ndash; Add Pagination &ndash;&gt;
            <div class="swiper-pagination"></div>
        </div>-->
        </div>
    </div>
</div>
<!--底部开始-->
<div class="footer">
    <div class="footer-web">
        <a href="javascript:;">千图网</a>
        <a href="javascript:;">素材网</a>
        <a href="javascript:;">JS网</a>
        <a href="javascript:;">jQuery插件库</a>
        <a href="javascript:;">矢量图标库</a>
        <a href="javascript:;">ColorHunt</a>
        <a href="javascript:;">GitHub</a>
    </div>
    <div class="footer-contact">
        <div class="footer-phones">
            <div><img src="img/rwm.png" alt=""></div>
            <div class="footer-phone">
                <p class="footer-top"><i class="iconfont icon-shouji"></i>&nbsp;17340535354</p>
                <p class="footer-bottom"><i class="iconfont icon-youxiang"></i>  1147262614@Gmail.com</p>
            </div>
            <div class="footer-address">
                <p class="contact-top"><span class="right">武汉工程职业技术学院</span></p>
                <p class="contact-bottom"><span class="right">Copyright © 2017-2019 ICP 备888888号</span></p>
            </div>
        </div>
    </div>
</div>
</body>
</html>
