 <script>
        $(function () {
            //1.����һ���˵������¼�
            $(".list1>li").mouseenter(function () {
                //�õ������˵�
                var $sub = $(this).children(".sub");
                //ֹͣ��ǰ�˶�����
                $sub.stop();
                //�����˵�չ��
                $sub.slideDown(1000);
                })
                $(".list1>li").mouseleave(function () {
                //�õ������˵�
                var $sub = $(this).children(".sub");
                //ֹͣ��ǰ�˶�����
                    $sub.stop();
                //�����˵�����
                $sub.slideUp(1000);
            })
        })
    </script>