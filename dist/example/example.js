$(function () {

    var router = new Router({
        container: '#container',
        enterTimeout: 250,
        leaveTimeout: 250
    });

    // grid
    var home = {
        url: '/',
        className: 'home',
        render: function () {
            return $('#tpl_home').html();
        }
    };

    // button
    var button = {
        url: '/button',
        className: 'button',
        render: function () {
            return $('#tpl_button').html();
        }
    };

    // cell
    var cell = {
        url: '/cell',
        className: 'pcell',
        render: function () {
            return $('#tpl_cell').html();
        },
        bind: function (){
            $('.container').on('click', '#showTooltips', function (){
                $('.js_tooltips').show();
                setTimeout(function (){
                    $('.js_tooltips').hide();
                }, 3000);
            });
        }
    };

    // toast
    var toast = {
        url: '/toast',
        className: 'ptoast',
        render: function () {
            return $('#tpl_toast').html();
        },
        bind: function () {
            $('#container').on('click', '#showToast', function () {
                $('#toast').show();
                setTimeout(function () {
                    $('#toast').hide();
                }, 2000);
            }).on('click', '#showLoadingToast', function () {
                $('#loadingToast').show();
                setTimeout(function () {
                    $('#loadingToast').hide();
                }, 2000);
            });
        }
    };

    // dialog
    var dialog = {
        url: '/dialog',
        className: 'pdialog',
        render: function () {
            return $('#tpl_dialog').html();
        },
        bind: function () {
            $('#container').on('click', '#showDialog1', function () {
                $('#dialog1').show().on('click', '.btn-dialog', function () {
                    $('#dialog1').off('click').hide();
                });
            }).on('click', '#showDialog2', function () {
                $('#dialog2').show().on('click', '.btn-dialog', function () {
                    $('#dialog2').off('click').hide();
                });
            });

        }
    };

    // progress
    var progress = {
        url: '/progress',
        className: 'pprogress',
        render: function () {
            return $('#tpl_progress').html();
        },
        bind: function () {
            $('#container').on('click', '#btnStartProgress', function () {
                if ($(this).hasClass('weui_btn_disabled')) {
                    return;
                }

                $(this).addClass('weui_btn_disabled');

                var progress = 0;
                var $progress = $('.js_progress');

                function next() {
                    $progress.css({width: progress + '%'});
                    progress = ++progress % 100;
                    setTimeout(next, 30);
                }

                next();
            });
        }
    };

    // msg
    var msg = {
        url: '/msg',
        className: 'pmsg',
        render: function () {
            return $('#tpl_msg').html();
        }
    };

    // article
    var article = {
        url: '/article',
        className: 'particle',
        render: function () {
            return $('#tpl_article').html();
        }
    };

    // actionsheet
    var actionsheet = {
        url: '/actionsheet',
        className: 'pactionsheet',
        render: function () {
            return $('#tpl_actionsheet').html();
        },
        bind: function () {
            $('#container').on('click', '#showActionSheet', function () {
                var mask = $('#mask');
                var weuiActionsheet = $('#actionsheet');
                weuiActionsheet.addClass('actionsheet-toggle');
                mask.show()
                    .focus()//加focus是为了触发一次页面的重排(reflow or layout thrashing),使mask的transition动画得以正常触发
                    .addClass('fade-toggle').one('click', function () {
                    hideActionSheet(weuiActionsheet, mask);
                });
                $('#actionsheet-cancel').one('click', function () {
                    hideActionSheet(weuiActionsheet, mask);
                });
                mask.unbind('transitionend').unbind('webkitTransitionEnd');

                function hideActionSheet(weuiActionsheet, mask) {
                    weuiActionsheet.removeClass('actionsheet-toggle');
                    mask.removeClass('fade-toggle');
                    mask.on('transitionend', function () {
                        mask.hide();
                    }).on('webkitTransitionEnd', function () {
                        mask.hide();
                    })
                }
            });

            $('#container').on('click', '#showActionSheet2', function () {
                var mask = $('#mask2');
                var weuiActionsheet = $('#actionsheet2');
                weuiActionsheet.addClass('actionsheet-toggle');
                mask.show()
                    .focus()//加focus是为了触发一次页面的重排(reflow or layout thrashing),使mask的transition动画得以正常触发
                    .addClass('fade-toggle').one('click', function () {
                        hideActionSheet(weuiActionsheet, mask);
                    });
                $('#actionsheet-cancel2').one('click', function () {
                    hideActionSheet(weuiActionsheet, mask);
                });
                mask.unbind('transitionend').unbind('webkitTransitionEnd');

                function hideActionSheet(weuiActionsheet, mask) {
                    weuiActionsheet.removeClass('actionsheet-toggle');
                    mask.removeClass('fade-toggle');
                    mask.on('transitionend', function () {
                        mask.hide();
                    }).on('webkitTransitionEnd', function () {
                        mask.hide();
                    })
                }
            });
        }
    };

    // icons
    var icons = {
        url: '/icons',
        className: 'picons',
        render: function () {
            return $('#tpl_icons').html();
        }
    };

    // panel
    var panel = {
        url: '/panel',
        className: 'ppanel',
        render: function () {
            return $('#tpl_panel').html();
        }
    };

    // tab
    var tab = {
        url: '/tab',
        className: 'ptab',
        render: function () {
            return $('#tpl_tab').html();
        }
    };

    // navbar
    var navbar = {
        url: '/navbar',
        className: 'pnavbar',
        render: function () {
            return $('#tpl_navbar').html();
        },
        bind: function () {
            $('#container').on('click', '.navbar-item', function () {
                $(this).addClass('active').siblings('.active').removeClass('active');
            });
        }
    };

    // tabbar
    var tabbar = {
        url: '/tabbar',
        className: 'ptabbar',
        render: function () {
            return $('#tpl_tabbar').html();
        },
        bind: function () {
            $('#container').on('click', '.tabbar-item', function () {
                $(this).addClass('active').siblings('.active').removeClass('active');
            });
        }
    };

    // searchbar
    var searchbar = {
        url: '/searchbar',
        className: 'psearchbar',
        render: function () {
            return $('#tpl_searchbar').html();
        },
        bind: function () {
            $('#container').on('focus', '#search-input', function () {
                var $weuiSearchBar = $('#search-bar');
                $weuiSearchBar.addClass('search-focusing');
            }).on('blur', '#search-input', function () {
                var $weuiSearchBar = $('#search-bar');
                $weuiSearchBar.removeClass('search-focusing');
                if ($(this).val()) {
                    $('#search-text').hide();
                } else {
                    $('#search-text').show();
                }
            }).on('input', '#search-input', function () {
                var $searchShow = $("#search-show");
                if ($(this).val()) {
                    $searchShow.show();
                } else {
                    $searchShow.hide();
                }
            }).on('touchend', '#search-cancel', function () {
                $("#search-show").hide();
                $('#search-input').val('');
            }).on('touchend', '#search-clear', function () {
                $("#search-show").hide();
                $('#search-input').val('');
            });
        }
    }


    // tabbar
    var badge = {
        url: '/badge',
        className: 'pbadge',
        render: function () {
            return $('#tpl_badge').html();
        },
        bind: function () {

        }
    };

    router.push(home)
        .push(button)
        .push(cell)
        .push(toast)
        .push(dialog)
        .push(progress)
        .push(msg)
        .push(article)
        .push(actionsheet)
        .push(icons)
        .push(panel)
        .push(tab)
        .push(navbar)
        .push(tabbar)
        .push(searchbar)
        .push(badge)
        .setDefault('/')
        .init();


    // .container 设置了 overflow 属性, 导致 Android 手机下输入框获取焦点时, 输入法挡住输入框的 bug
    // 相关 issue: https://github.com/weui/weui/issues/15
    // 解决方法:
    // 0. .container 去掉 overflow 属性, 但此 demo 下会引发别的问题
    // 1. 参考 http://stackoverflow.com/questions/23757345/android-does-not-correctly-scroll-on-input-focus-if-not-body-element
    //    Android 手机下, input 或 textarea 元素聚焦时, 主动滚一把
    if (/Android/gi.test(navigator.userAgent)) {
        window.addEventListener('resize', function () {
            if (document.activeElement.tagName == 'INPUT' || document.activeElement.tagName == 'TEXTAREA') {
                window.setTimeout(function () {
                    document.activeElement.scrollIntoViewIfNeeded();
                }, 0);
            }
        })
    }
});
