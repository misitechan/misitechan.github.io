 <script>
        $(function () {
            //1.监听一级菜单移入事件
            $(".list1>li").mouseenter(function () {
                //拿到二级菜单
                var $sub = $(this).children(".sub");
                //停止当前运动动画
                $sub.stop();
                //二级菜单展开
                $sub.slideDown(1000);
                })
                $(".list1>li").mouseleave(function () {
                //拿到二级菜单
                var $sub = $(this).children(".sub");
                //停止当前运动动画
                    $sub.stop();
                //二级菜单收起
                $sub.slideUp(1000);
            })
        })
    </script>