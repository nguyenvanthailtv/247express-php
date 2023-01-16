$(document).ready(function() {

    function addClass(btn,addEmlement,classname){
        $(btn).click(function(){
            $(addEmlement).addClass(classname);
        });
    }

    function removeClass(btn,removeEmlement,classname){
        $(btn).click(function(){
            $(removeEmlement).removeClass(classname);
        });
    }

    function countUp(startNumber,endNumber,clasname){
        $(clasname).text(startNumber);
        if(startNumber < endNumber){
            setTimeout(()=>countUp(startNumber+1,endNumber,clasname),10)
        }
    }

    // hiển thị ô tìm kiếm
    addClass('.btn-search','.search-wrapper','active');

    // đóng ô tìm kiếm
    removeClass('.btn-search--close','.search-wrapper','active');

    // hiển thị menu size < 1200px
    addClass('.btn-menu','.menu-wrapper','active');

    // đóng menu size < 1200px
    removeClass('#menu-close','.menu-wrapper','active');

    // hiển thị danh sách ngôn ngữ
    $('.box').click(function() {
        $('.box-language').slideToggle();
    });

    $('.btn-language').click(function() {
        $('.box-language').slideToggle();
    });

    // chọn ngôn ngữ trong menu
    $('.language__item').get().forEach(element => {
        $(element).click(function(e) {
            $('.language-active').text(e.target.innerText);

            $('.language__item.active').removeClass('active');
            $(this).addClass('active');

        });
    });

    // xóa lịch sử tìm kiếm
    $('.delete-hs').get().forEach(element => {
        $(element).click(function() {
            $(element).closest('.search__history__item').remove();
        });
    });

    // lấy lịch sử tìm kiếm
    $('.search__history__link').get().forEach(element => {
        $(element).click(function(e) {
            $('#search-input').val(e.target.innerText);
        });
    });

    // thêm lịch sử tìm kiếm
    $('#search-input').keypress(function(event){
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (event.keyCode == '13') {
            $('.search__history__list').prepend(`<li class="search__history__item"><a href="#" class="search__history__link">`+event.target.value+`<i class="fa-solid fa-xmark delete-hs "></i></a></li>`)
        }

    })

    //số tự tăng
    countUp(900,1000,'.t-like');
    countUp(50,159,'.t-location');
    countUp(20,64,'.t-province');
    countUp(0,12,'.t-exp');
    countUp(900,1000,'.t-employee');
    countUp(50,150,'.t-partner');
})
