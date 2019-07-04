var sliderHouseTimer = 5;
var inHour = 730;
var showAnketa = null;
var overlayLink = null;
var overlayLinkIsMenu = false;
var lastTopPosition = 0;
var sliderTimer =4000;

function isPhone() {
    // Adapted from http://www.detectmobilebrowsers.com
    var ua = navigator.userAgent || navigator.vendor || window.opera;
    // Checks for iOs, Android, Blackberry, Opera Mini, and Windows mobile devices
    // var nativeOnDevice = ['Android', 'BlackBerry', 'iPhone', 'iPad', 'iPod', 'Opera Mini', 'IEMobile', 'Silk'];
    var nativeOnDevice = ['iPhone', 'iPad', 'iPod'];
    for (var i = 0; i < nativeOnDevice.length; i++) {
        if (ua.toString().toLowerCase().indexOf(nativeOnDevice[i].toLowerCase()) > 0) {
            return nativeOnDevice[i];
        }
    }
    return false;
};

$(document).ready(function() {

    $('.image-nohover').click(function() {
        var el = this;
        $('.image-nohover').each(function() {
            if (el == this) {
                $(this).toggleClass('image-nohover--big');
            } else {
                $(this).removeClass('image-nohover--big');
            }
        });
    });

    $('[data-w-id="8a3efa4b-d2e2-173c-e465-c0abcb02321e"]').click(function(e) {
        showHideOverlay(this, true);
    });

    $('[data-w-id="f0caf195-f574-ab75-3112-2728621d3e53"]').click(function(e) {
        e.preventDefault();     
        $('[data-w-id="92744006-7621-29be-b16e-d808550c8a14"]')[0].click();
        return false;
    });

    $('.overlay').click(function() {
        if (overlayLink) {
            overlayLink.click();
        };
    });

    $('.form-success-message-btn').click(function() {
        history.back();
    });

    var showHideOverlay = function(el, isMenu) {
        var menuEl = $('[data-w-id="d0468277-67db-b980-f48f-08d4b7e5a53d"]');
        $('.overlay').toggleClass('overlay--visible');
        if (!overlayLink) {
            overlayLink = el;
            overlayLinkIsMenu = isMenu;
            menuEl.addClass('menu--bg');
        } else {
            overlayLink = null;
            menuEl.removeClass('menu--bg');
        }
    };

    $('[data-w-id="92744006-7621-29be-b16e-d808550c8a14"]').click(function(e) {
        if (isPhone()) {
            e.preventDefault();
            document.location.href = 'form.html';
            return false;
        } else {
            showHideOverlay(this, false);
        }
    });

    $('.div-block-62 a').click(function() {
        $('[data-w-id="8a3efa4b-d2e2-173c-e465-c0abcb02321e"]')[0].click();
    });

    // sliders
    $('.sliderHouse').each(function() {
        var el = $(this),
            image = el.find('.sliderHouse__image'),
            links = el.find('.sliderHouse__link'),
            progress = el.find('.sliderHouse__progress'),
            currentImage,
            stopped = false;

        var onResize = function() {
            if ($(this).width() > 991) {
                if (stopped) {
                    stopped = false;
                    changeSlide();
                }
            } else {
                if (!stopped) {
                    stopped = true;
                    progress.width(0);
                    progress.clearQueue().stop();
                }
            }
        };
        onResize();
        $(window).resize(onResize);

        var setActive = function(link) {
            var imageUrl = link.data('image');
            if (!link.hasClass('active') && imageUrl && currentImage != imageUrl) {
                image.fadeOut(function() {
                    image.css({ backgroundImage: 'url('+imageUrl+')'});
                    image.fadeIn();
                    currentImage = imageUrl;
                });
                link.addClass('active');
            }
        };
        currentImage = links.first('.active').data('image');
        setActive(links.first('.active'));

        var changeSlide = function(linkOut) {
            if (stopped) {
                return;
            }
            var time = sliderHouseTimer * 1000;
            if (linkOut) {
                var currentWidth = progress.width() / linkOut.outerWidth() * 100;
                if (currentWidth > 0) {
                    time = time - (time / 100 * currentWidth)
                }
            }
            progress.animate({ width: '100%'}, time, function() {
                links.each(function() {
                    if ($(this).hasClass('active')) {
                        $(this).removeClass('active');
                    } else {
                        $(this).after(progress);
                        setActive($(this));
                    }
                });
                progress.width(0);
                changeSlide();
            });
        };        
        changeSlide();

        links.mouseover(function() {
            progress.clearQueue().stop();
        });

        links.mouseout(function() {
            changeSlide($(this));
        });

        links.click(function() {
            links.each(function() {
                $(this).removeClass('active');
            });
            setActive($(this));
            progress.width(0);
            $(this).after(progress);          
        });
    });

    // calculator
    var calculate = function() {
        var calc = $('.calculator');
        var days = calc.find('.calculator__days .active').data('calc');
        var hours = calc.find('.calculator__hours .active').data('calc');
        var period = calc.find('.calculator__period .active').data('calc');

        var hoursInWeek = (7 - (7 - days)) * hours;        
        var profit = period / 7 * hoursInWeek * inHour;
        profit = profit - (profit % 1000);
        calc.find('.calculator__result').hide();
        calc.find('.calculator__result').html('~'+ new Intl.NumberFormat('ru-RU').format(profit.toFixed(0)) +'₽');
        calc.find('.calculator__result').show();
    };
    $('.calculator__days [data-calc], .calculator__hours [data-calc], .calculator__period [data-calc]').click(function() {
        $(this).parent().find('.calculator__active').css({left: $(this).index() * 33.333333 + '%'});
        $(this).parent().find('> div').removeClass('active');
        $(this).addClass('active');
        calculate();
    });
    calculate();

    // calculator touch
    var touches = {};
    var touchesMove = {};
    var touchCallback = function(el) {
        var t = touches[el.attr('class')];
        var tm = touchesMove[el.attr('class')];
        if (t && tm) {
            if (t.pageX !== tm.pageX && Math.abs(tm.pageX - t.pageX) > 70) {
                if (tm.pageX - t.pageX > 0) {
                    el.find('.active').next().click();
                } else {
                    el.find('.active').prev().click();
                }
                touches[el.attr('class')] = tm;
            }
        }
    };
    $('.calculator__days, .calculator__hours, .calculator__period').on({ 'touchstart' : function(e){
        touches[$(this).attr('class')] = e.touches[0];
        e.stopPropagation();
    }});
    $('.calculator__days, .calculator__hours, .calculator__period').on({ 'touchmove' : function(e){
        touchesMove[$(this).attr('class')] = e.touches[0];
        touchCallback($(this));
        e.stopPropagation();
    }});
    $('.calculator__days, .calculator__hours, .calculator__period').on({ 'touchend' : function(e){
        touchCallback($(this));
        e.stopPropagation();
    }});

    // anketa
    
    /*$('#email-form [name="phone"]').mask('+7 (999) 999-9999', {
        completed: function() {
            this.removeClass('error');
        },
        autoclear: false
    });
    /*
   new Cleave('#email-form [name="phone"]', {
        phone: true,
        prefix: '+7 ',
        phoneRegionCode: 'ru'
    });*/
    $('#email-form [name="phone"]').on('focus', function(e) {
        //console.log(e)
    });
    var maskPhone = new IMask($('#email-form [name="phone"]').get(0), {
        mask: '+7 (000) 000-00-00',
        lazy: true
    });
    maskPhone.on("complete", function (e) {
        $('#email-form [name="phone"]').removeClass('error');
    });

    $('#email-form [name="phone"]').on('focus', function() {
        maskPhone.updateOptions({
            lazy: false
        });
    });
    $('#email-form [name="phone"]').on('blur', function() {
        maskPhone.updateOptions({
            lazy: $(this).val() == '+7 (___) ___-__-__'
        });
    });


    $('#email-form [name="photo"]').change(function(e) {
        var fn = $(this).val().replace(/C:\\fakepath\\/i, '').trim();
        if (!fn) {
            $('.email-form__photo').addClass('error');
        } else {
            $('.email-form__photo').removeClass('error');
        }
        var files = this.files;
        if (files.length > 1) {
            fn = 'Выбрано '+files.length+' фото';
        }
        $('.email-form__photo span').html(fn || 'Выберите фото');
    });

    var validateEmail = function(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    
    var validate = function(fields) {
        var valid = true;
        var data = new FormData(document.getElementById('email-form'));
        fields.forEach(function(field) {
            if (!data.get(field)) {
                valid = false;
                $('#email-form [name="'+field+'"]').addClass('error');
            } else {
                if (field == 'email' && !validateEmail(data.get(field))) {
                    valid = false;
                    $('#email-form [name="'+field+'"]').addClass('error');
                } else if (field == 'phone' && data.get(field).match(/\d+/g).map(Number).join('').length != 11) {
                    valid = false;
                    $('#email-form [name="'+field+'"]').addClass('error');
                } else if (field == 'age' && !Number(data.get(field)) || Number(data.get(field)) < 18) {
                    valid = false;
                    $('#email-form [name="'+field+'"]').addClass('error');
                } else {
                    $('#email-form [name="'+field+'"]').removeClass('error');
                }
            }
        });
        return valid;
    };
    
    $('#email-form input').keyup(function() {
        validate([$(this).attr('name')]);
    });

    $('#email-form input').change(function() {
        validate([$(this).attr('name')]);
    });

    $('.form-submit').click(function(e) {
        if (!validate(['name', 'phone', 'email', 'age', 'level', 'resume'])) {
            e.preventDefault();
        }
        if ($('.email-form__photo span').html() == 'Выберите фото') {
            e.preventDefault();
            $('.email-form__photo').addClass('error');
        }
        $('#email-form .error:first').each(function() {
            if ($('body').hasClass('form')) {
                $("html, body").animate({scrollTop: $(this).position().top - 50}, 500, 'swing');
            } else {
                $('.anketa-form .w-form').stop().animate({scrollTop: $(this).position().top + 50}, 500, 'swing');
            }
        });
        /*
        e.preventDefault();
        $('.form-submit').addClass('form-submit__disabled').val('...');

        $('#email-form').fadeOut(function() {
            $(window).scrollTop(0);
            $('.success-message').fadeIn();
        });*/
    });

    $('#email-form').submit(function(e) {
        e.preventDefault();
        $('.error-message').fadeOut();
        $('.form-submit').addClass('form-submit__disabled').val('...');

        var data = new FormData(this);
        var rc = grecaptcha.getResponse();
        if (!rc) {
            $('.error-message').html('Проверьте правильность ввода капчи.').fadeIn();
            $('.form-submit').removeClass('form-submit__disabled').val('Отправить анкету');
            return;
        }

        var files = $('#email-form [name="photo"]')[0].files;
        for(var i=0; i<files.length; i++){
            data.append("photo_"+i, files[i]); 
        }
        data.delete('photo');
        
        data.append('captcha', rc);
        var xhr = new XMLHttpRequest();
        $('.overlay-loading').fadeIn();
        xhr.open('POST', 'mail/');
        setProgress(0);
        var percentComplete = 0;
        var interval = null;
        $('.pie-wrapper').removeClass('long');

        xhr.upload.onprogress = function(e) {
            percentComplete = (e.loaded / e.total) * 50;
            setProgress(percentComplete);
            if (percentComplete >= 50) {
                $('.pie-wrapper').addClass('long');
                percentComplete ++;
                setProgress(percentComplete);
                interval = setInterval(function() {
                    if (percentComplete >= 99) {
                        clearInterval(interval);
                        return;
                    }
                    percentComplete ++;
                    setProgress(percentComplete);
                }, 150);
            }
        };
        xhr.onload = function(e) {
            $('.overlay-loading').fadeOut();
            clearInterval(interval);
            setProgress(100);
            var res = xhr.responseText.trim();
            if (res == 'OK') {
                $('#email-form').fadeOut(function() {
                    $(window).scrollTop(0);
                    $('.success-message').fadeIn();
                });
                yaCounter51796634.reachGoal('zayavka');
            } else {
                if (res == 'PHOTO') {
                    $('.error-message').html('Фотография должна быть картинкой.').fadeIn();
                } else if (res == 'CAPTCHA') {
                    $('.error-message').html('Проверьте правильность ввода капчи.').fadeIn();
                } else {
                    $('.error-message').html('Ой, ошибочка, перезагрузите страницу.').fadeIn();
                }
            }
            $('.form-submit').removeClass('form-submit__disabled').val('Отправить анкету');
        };
        xhr.send(data);
    });

    // white events
    $('[data-w-id="2f821d41-0255-3808-72d5-abad12bc4bb5"], [data-w-id="c8d04cd6-8831-26ae-4822-e9521460f3d6"], [data-w-id="13eb1a7ab-f5fd-fbf3-0dfd-00968a8ec006"]').click(function() {
        if ($(this).attr('data-w-id') == '13eb1a7ab-f5fd-fbf3-0dfd-00968a8ec006') {
            $('[data-w-id="2f821d41-0255-3808-72d5-abad12bc4bb5"]')[0].click();
        } else {
            showHideOverlay(this, false);
            showAnketa = this;
        }
    });
    $('.success-message .button').click(function(e) {
        e.preventDefault();
        /*if (showAnketa) {
            showAnketa.click();
        }*/
        grecaptcha.reset();
        $('#email-form').get(0).reset()
        $('.form-submit').removeClass('form-submit__disabled').val('Отправить анкету');
        $('.email-form__photo span').html('Выберите фото');

        $('.success-message').fadeOut(function() {
            $('#email-form').fadeIn();
        });
    });
    setTimeout(function() {
        $('.anketa-form').show();
    }, 1000);

    var touchStart = 0;
    $(document).on('touchstart', function(e) {
        touchStart = e.touches[0].clientX;
    });
    $(document).on('touchmove', function(e) {
        if (overlayLink) {
            if (overlayLinkIsMenu) {
                if (touchStart - e.touches[0].clientX > 150) {
                    overlayLink.click();
                }
            } else if (e.touches[0].clientX - touchStart > 150) {
                overlayLink.click();
            }
        }
    });

    // dialog
    if ($('body').hasClass('white')) {
        var dStarted = false;

        var getFirstHiddenDialogMessage = function(parent) {
            return parent.find('.dmesg:not(.dmesg-visible)').first();
        };

        var showNextDialogPoint = function(dPoints) {
            var point = dPoints.find('div:not(.point--visible)').first();
            if (point.length == 0) {
                dPoints.find('div').removeClass('point--visible');
            } else {
                point.addClass('point--visible');
            }
        };

        var showNextDialogMessage = function(parent, dPoints) {
            var msg = getFirstHiddenDialogMessage(parent);
            if (msg.length == 0) {
                return;
            }
            if (dPoints.hasClass('points')) {
                dPoints.css('top', msg.offset().top);
            }
            msg.before(dPoints);            
            var worlds = msg.text().trim().split(' ').length;
            dPoints.fadeIn(300, function() {
                var total = worlds + 2;
                if (total > 10) {
                    total = 10;
                }
                for(var i=1; i<total; i++) {
                    setTimeout(function() {
                        showNextDialogPoint(dPoints);
                    }, i * 300);
                };
                setTimeout(function() {
                    dPoints.fadeOut(300, function() {
                        msg.addClass('dmesg-visible');                        
                        setTimeout(function() {
                            showNextDialogMessage(parent, dPoints);
                        }, 300);
                    });
                }, total * 300);
            })
        };

        var dStartFunction = function() {
            if (dStarted) {
                return;
            }            
            if ($(window).height() + window.scrollY >= getFirstHiddenDialogMessage($('.dialog-section')).offset().top) {
                dStarted = true;
                showNextDialogMessage($('.dialog-section'), $('.points'));
            }            
        };

        $(window).scroll(dStartFunction);
        var showHeadblock = false;
        $(window).scroll(function() {
            if (showHeadblock) {
                return;
            }
            if ($(window).height() + window.scrollY >= $('#w-node-b56dc72c8c96-f22fc0d6').offset().top) {
                $('.headblock').each(function(i) {
                    var el = $(this);
                    setTimeout(function() {
                        el.css({opacity: 1, transform: 'translateY(0px)'});
                    }, (i+1) * 500);
                });
                showHeadblock = true;
            }
        });
        dStartFunction();
        showNextDialogMessage($('.dialog-phone'), $('.points-min'));
    }

    // sliders 2
    var createPreviews = function(selector) {        
        var slider = $(selector);
        var previews = $('<div class="sliders-preview animated fadeInUp" style="display: none"  data-simplebar><div class="sliders-preview__container"></div></div>');
        previews.on('touchstart', function(e){
            e.stopPropagation();
        });
        previews.appendTo(slider);

        var images = slider.find('.w-slide img');
        var loaded = 0;
        var countC = slider.closest('.slider-container').find('.slider-count');
        
        countC.html('1 / '+images.length);
        if (images.length < 2) {
            previews.addClass('w-hidden');
            slider.find('.left-arrow,.right-arrow').addClass('w-hidden');
        }
        images.each(function(i) {
            var link = $('<a href="#" class="slide-preview"><div><span></span></div></a>');
            var img = $(this).clone().removeClass('iphone').get(0);            
            $(img).appendTo(link.find('div'));

            link.get(0)._sliderIndex = i;
            link.click(function(e) {
                e.preventDefault();                
                slider.find('.w-slider-nav div').eq(this._sliderIndex).trigger('tap');
            });
            link.appendTo(previews.find('.sliders-preview__container'));
            if (i == 0) {
                link.addClass('active');
            }

            img.onload = function(e) {
                link.css({backgroundImage: 'url('+img.src+')'});
                loaded++;
                if (loaded == images.length) {
                    previews.show();
                    setTimeout(function() {
                        previews.removeClass('animated fadeInUp');
                    }, 1000);
                }
            };
        });
    };
   

    $('.progress-slider .w-slide').each(function() {
        $(this).css({backgroundImage: 'url('+$(this).find('img').eq(0).attr('src')+')'});
    });

    var moveSlidersToPseudo = function() {
        $('.slider-container').each(function() {
            $(this).find('.w-slider')
                .appendTo($(this).find('.sliders'))
        });
    };

    var moveSlidersFromPseudo = function() {
        $('.slider-container').each(function() {
            $(this).find('.w-slider.only-small')
                .appendTo($(this).find('.sliders-small'))
        });
    };

    var onResize = function() {
        if ($(window).width() < 992) {
            moveSlidersFromPseudo();
        } else {
            moveSlidersToPseudo();
        }
    };
    onResize();    
    $(window).resize(onResize);
    
    window._SliderWrapper = function(e) {
        var previews = e.el.find('.sliders-preview__container > a');
        previews.removeClass('active')
            .eq(e.index).addClass('active');

        var c =  e.el.closest('.slider-container');
        c.find('.slider-count').html(e.index+1+' / '+e.anchors.length);
        if (c.hasClass('iphone')) {
            setTimeout(function() {
                if(c.find('.pay-slider.iphone.active .sliders-preview .active').index() == 0) {
                    $('.slider-iphone-message').addClass('active');
                } else {
                    $('.slider-iphone-message').removeClass('active');
                }
            }, 700);
            $('.slider-iphone-message').removeClass('active');   
        }
    };
    
    createPreviews('.main-slider');
    createPreviews('.cond-slider');
    createPreviews('.cond-slider2');
    createPreviews('.prod-slider');
    createPreviews('.prod-slider2');
    createPreviews('.pay-slider');
    createPreviews('.pay-slider2');

    /****************************************************** */
    
    $('.slider-container').each(function() {
        $(this).get(0)._lastAction = Date.now();
        $(this).get(0)._currentSlider = $(this).find('.progress-slider').eq(0);  
        $(this).get(0)._currentSliderIndex = 0;      
    });


    var changeSlider = function(c, after) {
        var cb = function() {
            c.find('.progress-slider').each(function() {
                if ($(this).hasClass('active')) {
                    $(this).addClass('pseudo-slider')
                            .removeClass('active');
                } else {
                    $(this).addClass('active')
                            .removeClass('pseudo-slider');
                }
            });
            c.get(0)._currentSlider = c.find('.progress-slider.active').eq(0);  
            c.get(0)._currentSliderIndex = c.get(0)._currentSliderIndex == 0 ? 1 : 0;            

            c.find('.sliders').fadeIn();            
            c.get(0)._currentSlider.find('.w-slider-nav div').eq(0).trigger('tap');
            c.get(0)._currentSlider.find('.slide-preview').removeClass('active').eq(0).addClass('active');
            c.find('.slider-link').removeClass('active').eq(c.get(0)._currentSliderIndex).addClass('active');

            if (c.hasClass('.main-slider')) {
                c.find('.slider-count').html('1 / '+$('.main-sliders img').length);
            } else {
                if (c.get(0)._currentSlider.find('.slide-preview').length < 2) {
                    c.find('.slider-count').hide();
                } else {
                    c.find('.slider-count').show();
                }
            }
            c.find('.slider-count').html('1 / '+c.get(0)._currentSlider.find('.slide-preview').length);
            window.dispatchEvent(new Event('resize'));

            if (c.hasClass('iphone')) {
                setTimeout(function() {
                    if(c.find('.pay-slider.iphone.active .sliders-preview .active').index() == 0) {
                        $('.slider-iphone-message').addClass('active');
                    } else {
                        $('.slider-iphone-message').removeClass('active');
                    }
                }, 300);
                $('.slider-iphone-message').removeClass('active');                
            }
        };

        if ($(window).width() > 991) {
            c.find('.sliders').fadeOut(function() {
                cb();
                if (after) {
                    after();
                }
            });
        } else {
            cb();
            if (after) {
                after();
            }
        }
    };

    setInterval(function() {
        $('.slider-container').each(function() {            
            if (Date.now() - this._lastAction >= sliderTimer) {                
                var previews = this._currentSlider.find('.sliders-preview__container > a');      
                var currentSlide = this._currentSlider.find('.slide-preview.active');
                if (currentSlide.index() == previews.length - 1) {
                    changeSlider($(this));
                } else {
                    $(this).get(0)._currentSlider.find('.right-arrow').trigger('tap');                    
                }
            }
        });
    }, sliderTimer);

    $('.slider-link').click(function() {
        var c = $(this).closest('.slider-container');
        if ($(this).hasClass('small-link') && c.get(0)._currentSliderIndex == 0) {
            changeSlider(c);
        }
        if (!$(this).hasClass('small-link') && c.get(0)._currentSliderIndex > 0) {
            changeSlider(c);
        }
        c.find('.slider-link').removeClass('active').eq($(this).hasClass('small-link') ? 1 : 0).addClass('active');
    });

    $('.slider-link,.right-arrow,.left-arrow,.slide-preview').click(function() {
        $(this).closest('.slider-container').get(0)._lastAction = Date.now();
    });

    setTimeout(function() {
        $('.slider-iphone-message').addClass('active');
    }, 200);

    setProgress(0);



});

function setProgress(value) {
    //console.log('setProgress', Math.ceil(value))
    if (value < 50) {
        $('.pie').removeClass('more50');
        $('.pie .left-side').hide();
        $('.pie .right-side').css({
            transform: 'rotate('+(3.6 * value)+'deg)' 
        });
    } else {
        $('.pie .right-side').css({
            transform: 'rotate(180deg)' 
        });
        $('.pie').addClass('more50');
        $('.pie .left-side').css({
            transform: 'rotate('+(3.6 * value)+'deg)' 
        }).show();
    }
    $('.pie-wrapper .precentage').html(Math.ceil(value));
};

$(document).ready(function() {
    var resizeMainSlider = function() {
        if ($(window).width() < 767) {
            $('.main-slider .w-slider-mask').height(($(window).width() * 1.77777778));
        } else {
            $('.main-slider .w-slider-mask').height('90vh');
        }
    }

    resizeMainSlider()

    window.addEventListener('resize', resizeMainSlider)
})