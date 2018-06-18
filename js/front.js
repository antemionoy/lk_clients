/*global $, document, Chart, LINECHART, data, options, window*/

'use strict';

function notReadMessage(notRead, parentBlock) {
    notRead.each(function() {
        $(this).find(parentBlock).append('<div class="сircle_not_read"></div>');
    });
}

function activeSearch() {

    $('#active_search').on('click', function() {
        $(this).parent().siblings('form').show().find('input').focus();
    });

    $('#close_form').on('click', function(e) {
        e.preventDefault();
        $(this).parents('#search_message').hide();
    });
}

function appHide() {

    $('.app_inset_block .application').hide();

    $('#btn_more').on('click', function() {
        $(this).closest('.area').find('.application').stop()
            .slideToggle().addClass('active');
    });

    $('#btn_pay').on('click', function() {
        $(this).closest('.area').find('.application').stop()
            .slideDown().addClass('active');
        $(this).closest('.area').find('.modal_price').addClass('active');
    });
}

function appModalFun(clickOpen, clickClose, modalItem) {

    clickOpen.on('click', function(e) {
        e.preventDefault();
        $(this).closest('.application_desc').find(modalItem).toggleClass('active');
    });

    clickClose.on('click', function(e) {
        e.preventDefault();
        $(this).closest('.application_desc').find(modalItem).removeClass('active');
    });

}

function accordion() {
    $('.acc_link').click(function(e) {
        e.preventDefault();

        var $_el = $(this);

        if ($_el.next().hasClass('show')) {
            $_el.next().removeClass('show');
            $_el.next().stop().slideUp(250);
            $_el.closest('li').removeClass('open');

        } else {
            $_el.parent().parent().find('li .inner').removeClass('show');
            $_el.parent().parent().find('li.open').removeClass('open');
            $_el.parent().parent().find('li .inner').slideUp(350);
            $_el.next().toggleClass('show');
            $_el.next().stop().slideToggle(250);
            $_el.closest('li').toggleClass('open');

        }
    });
}


function tabs(clickNavItem, parentBox, tabItem) {
    clickNavItem.on('click', function(e) {
        e.preventDefault();
        $(this)
            .addClass('selected').siblings().removeClass('selected')
            .closest(parentBox).find(tabItem).removeClass('active')
            .eq($(this).index()).addClass('active');
    });
}


function applicationHeight() {

    var appBox = $('.app_text');
    var appBtn = $('.app_arrow');
    var appBtnText = $('.app_arrow span');
    var appShadow = $('.app_text_fade');

    appBox.each(function() {
        if ($(this).outerHeight() >= 140) {
            $(this).addClass('height-fix');

        } else {
            $(this)
                .next(appBtn).hide()
                .next(appShadow).hide();
        }

    });

    $(appBtn).on('click', function(e) {
        e.preventDefault();
        $(this).prev(appBox).toggleClass('height-fix');
        $(this).next(appShadow).toggle();
        $(this).toggleClass('app_open');
        $(this).children('span').text('свернуть');

        if (!$(this).hasClass('app_open')) {
            $(this).children('span').text('развернуть');
        }

    });

}

function clickFormBtn() {
    $('.side-navbar .form-group button ').on('click', function() {
        if ($('.side-navbar').hasClass('shrinked')) {

            $('.side-navbar').removeClass('shrinked');
            $('.side-navbar .menu-btn').toggleClass('active');
            $('.content-inner').toggleClass('active');

            $(this).prev('input').focus();
        }

    });
}


function FixedSidebar() {
    if ($(window).width() >= 1024) {
        var fixed = $('.fixed');
        var areaTop = $('.header');

        if ($(window).scrollTop() >= areaTop.height()) {
            $('.side-navbar').addClass('fixed');
            $('.content-inner').addClass('left');
            $('.dropdown-menu').addClass('top');

        } else if ($(window).scrollTop() < areaTop.height()) {
            $('.side-navbar').removeClass('fixed');
            $('.content-inner').removeClass('left');
            $('.dropdown-menu').removeClass('top');
        }
    }
}


function mask() {
    var options = {
        onKeyPress: function(cep, e, field, options) {
            var masks = ['+7(999)999-99-99', '000-00-00'];
            var mask = (cep.length > 7) ? masks[0] : masks[0];
            $('input[type="tel"]').mask(mask, options);
        }
    };

    $('input[type="tel"]').mask('+7 (999) 999-99-99', options);
}


function snackBar() {
    $('#snackbarid').on('click', function() {
        $.snackbar({
            content: '<div class="messages messages-snack d-flex align-items-start justify-content-start"> \
                <div class="mess_avatar"> \
                    <span class="mess_number">№ 10101010</span>\
                    <img src="img/harek.jpg" alt="">\
                </div>\
                <div class="messages_right">\
                    <span class="mess_type">Дипломная работа - История развивающихся стран.</span>\
                    <span class="mess_time">15:00</span>\
                    <img class="avatar_in" src="img/cat.jpg" alt="">\
                    <div class="message_text">\
                        <span class="mess_name">Завгородний Антон</span> \
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem sequi vero, vitae distinctio adipisci commodi dolorum,\
                         doloribus assumenda voluptate aperiam. Repudiandae officiis incidunt debitis numquam, dicta accusamus natus!\
                        Totam autem quia, facere quam iusto modi, quidem dolor ad molestiae distinctio maxime consectetur quae molestias doloribus sequi eveniet a blanditiis quis,\
                        id excepturi, temporibus ipsum fugit rerum quas. Quos voluptatibus aspernatur a nulla deserunt consectetur tenetur, culpa id repellat omnis inventore quidem nesciunt, obcaecati,\
                        saepe provident facere eveniet libero laudantium!\
                        Veritatis deleniti qui corporis ab laudantium amet, doloribus officiis nobis\
                        doloremque dolore hic quae suscipit quidem saepe molestiae inventore mollitia esse.\
                    </div>\
                </div>\
            </div>',
            timeout: 0
        });
    });
}


function tableResponsive() {
    if ($(window).width() <= 1023) {
        $('table:not(.table-price)').addClass('table-responsive');
    } else {
        $('table').removeClass('table-responsive');
    }
}


function hideBottonHeader(){
    var header = $('.header');
    if ($(window).width() <= 767 && $(window).scrollTop() > header.height()) {
        header.addClass('show');
    }

    else{
        header.removeClass('show');
    }
}


$(document).ready(function() {
    // ------------------------------------------------------- //
    // Search Box
    // ------------------------------------------------------ //
    $('#search').on('click', function(e) {
        e.preventDefault();
        $('.search-box').fadeIn();
    });
    $('.dismiss').on('click', function() {
        $('.search-box').fadeOut();
    });

    // ------------------------------------------------------- //
    // Card Close
    // ------------------------------------------------------ //
    $('.card-close a.remove').on('click', function(e) {
        e.preventDefault();
        $(this).parents('.card').fadeOut();
    });

    // ------------------------------------------------------- //
    // Adding fade effect to dropdowns
    // ------------------------------------------------------ //
    $('.dropdown').on('show.bs.dropdown', function() {
        $(this).find('.dropdown-menu').first().stop(true, true).fadeIn();
    });

    $('.dropdown').on('click', function(e) {
        $(this).closest('main').find('.dropdown-menu').first().stop(true, true).fadeToggle();
    });

    $('.dropdown').on('hide.bs.dropdown', function() {
        $(this).find('.dropdown-menu').first().stop(true, true).fadeOut();
    });


    // ------------------------------------------------------- //
    // Login  form validation
    // ------------------------------------------------------ //
    $('#login-form').validate({
        messages: {
            loginUsername: 'Введите Имя',
            loginPassword: 'Введите пароль'
        }
    });

    // ------------------------------------------------------- //
    // Register form validation
    // ------------------------------------------------------ //
    $('#register-form').validate({
        messages: {
            registerUsername: 'Введите свое Имя',
            registerEmail: 'Укажите свой e-mail',
            registerPassword: 'Введите пароль'
        }
    });

    // ------------------------------------------------------- //
    // Sidebar Functionality
    // ------------------------------------------------------ //
    $('.toggle-btn').on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('active');

        $('.side-navbar').toggleClass('shrinked');
        $('.content-inner').toggleClass('active');

        if ($(window).outerWidth() > 1183) {
            if ($('.toggle-btn').hasClass('active')) {
                $('.navbar-header .brand-small').hide();
                $('.navbar-header .brand-big').show();
            } else {
                $('.navbar-header .brand-small').show();
                $('.navbar-header .brand-big').hide();
            }
        }

        if ($(window).outerWidth() < 1183) {
            $('.navbar-header .brand-small').show();

            if ($('.side-navbar').hasClass('shrinked')) {
                $('body').addClass('overflow');
            }

            else{
                $('body').removeClass('overflow');
            }
        }

    });

    // ------------------------------------------------------- //
    // Transition Placeholders
    // ------------------------------------------------------ //
    $('input.input-material').on('focus', function() {
        $(this).siblings('.label-material').addClass('active');
    });

    $('input.input-material').on('blur', function() {
        $(this).siblings('.label-material').removeClass('active');

        if ($(this).val() !== '') {
            $(this).siblings('.label-material').addClass('active');
        } else {
            $(this).siblings('.label-material').removeClass('active');
        }
    });

    // ------------------------------------------------------- //
    // External links to new window
    // ------------------------------------------------------ //
    $('.external').on('click', function(e) {

        e.preventDefault();
        window.open($(this).attr("href"));
    });

    // ------------------------------------------------------ //
    // For demo purposes, can be deleted
    // ------------------------------------------------------ //

    var stylesheet = $('link#theme-stylesheet');
    $("<link id='new-stylesheet' rel='stylesheet'>").insertAfter(stylesheet);
    var alternateColour = $('link#new-stylesheet');

    if ($.cookie("theme_csspath")) {
        alternateColour.attr("href", $.cookie("theme_csspath"));
    }

    $("#colour").change(function() {

        if ($(this).val() !== '') {

            var theme_csspath = 'css/style.' + $(this).val() + '.css';

            alternateColour.attr("href", theme_csspath);

            $.cookie("theme_csspath", theme_csspath, { expires: 365, path: document.URL.substr(0, document.URL.lastIndexOf('/')) });

        }

        return false;
    });

    $('.side-navbar, .modal_files, .chat-body').perfectScrollbar({
        suppressScrollX: false
    });

    $('i[data-toggle="tooltip"]').tooltip();

    $('.chat-footer textarea').textareaAutoSize();

    $(".owl-carousel").owlCarousel({
        loop: true,
        center: true,
        nav: true,
        responsive: {
            310: {
                items: 1
            },
            600: {
                items: 1
            },
            1200: {
                items: 1
            },
            1600: {
                items: 1
            }
        }
    });

    if ($('.js-dropzone').length)
        $('.js-dropzone').dropzone({
            url: "/ajax/uploadFiles/",
            parallelUploads: 2,
            thumbnailHeight: 100,
            thumbnailWidth: 100,
            maxFilesize: 30,
            previewTemplate: $(this).find('.preview-dropzone').html(),
            thumbnail: function(file, dataUrl) {
                if (file.previewElement) {
                    file.previewElement.classList.remove("dz-file-preview");
                    var images = file.previewElement.querySelectorAll("[data-dz-thumbnail]");
                    for (var i = 0; i < images.length; i++) {
                        var thumbnailElement = images[i];
                        thumbnailElement.alt = file.name;
                        thumbnailElement.src = dataUrl;
                    }
                    setTimeout(function() { file.previewElement.classList.add("dz-image-preview"); }, 1);
                }
            },
            success: function(file) {
                if (file.status != "success")
                    return;
                try {
                    var res = $.parseJSON(file.xhr.response);
                } catch (err) {

                }
                if (typeof res != 'object' || !res[0]) {
                    codreCommon.alert("Не удалось загрузить файл!", "danger", 3000);
                    return $(file.previewElement).remove();
                }
                $(file.previewElement).find('.work-message-photo-delete').attr('href', base + 'ajax/deleteFile/' + res[0].id + '/').show();
                $(file.previewElement).append('<input type="hidden" name="files_list[]" value="' + res[0].id + '" />');
                $(file.previewElement).find('.work-message-photo-text').html(res[0].name).show();
                $(file.previewElement).find('.work-message-photo-upload').fadeOut();
                if (res[0].icon)
                    $(file.previewElement).find('[data-dz-thumbnail]').attr('src', res[0].icon);

            }
        });


    // вызов функций

    tabs($('.tabs_nav a'), '.tabs-box', '.tabs-item');
    tabs($('.card_subheader a'), '.card-finances', '.table-item');

    clickFormBtn();
    FixedSidebar();
    applicationHeight();
    mask();
    accordion();
    appModalFun($('.app_chek'), $('.close'), $('.modal_files'));
    appModalFun($('.modal_price_btn'), $('.close'), $('.modal_price'));
    appHide();
    activeSearch();
    snackBar();

    notReadMessage($('.not_read'), '.news-item_header');
    notReadMessage($('.not_read'), '.messages_right');
    tableResponsive();
    hideBottonHeader();

});


$(window).scroll(function() {
    FixedSidebar();
    hideBottonHeader();
});


$(window).resize(function() {
    FixedSidebar();
    hideBottonHeader();
});
