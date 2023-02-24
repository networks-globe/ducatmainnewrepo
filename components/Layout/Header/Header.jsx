import React, { useEffect } from 'react'
import Link from 'next/link';
import jQuery from 'jquery';
import MobileNavigation from './MobileNavigation';

export default function Header() {

    function headerResource() {

        jQuery(document).ready(function () {

            (function (factory) {
                if (typeof define === 'function' && define.amd) {
                    define(["jquery"], factory)
                } else if (typeof module === 'object' && module.exports) {
                    module.exports = factory(jQuery)
                } else {
                    factory(jQuery)
                }

                jQuery(".horizontal-main").sticky({ topSpacing: 0 })
            }(function (jQuery) {
                var slice = Array.prototype.slice;
                var splice = Array.prototype.splice;
                var defaults = {
                    topSpacing: 0,
                    bottomSpacing: 0,
                    className: 'is-sticky',
                    wrapperClassName: 'sticky-wrapper',
                    center: !1,
                    getWidthFrom: '',
                    widthFromWrapper: !0,
                    responsiveWidth: !1,
                    zIndex: 'inherit'
                },
                    jQuerywindow = jQuery(window),
                    jQuerydocument = jQuery(document),
                    sticked = [],
                    windowHeight = jQuerywindow.height(),
                    scroller = function () {
                        var scrollTop = jQuerywindow.scrollTop(),
                            documentHeight = jQuerydocument.height(),
                            dwh = documentHeight - windowHeight,
                            extra = (scrollTop > dwh) ? dwh - scrollTop : 0;
                        for (var i = 0, l = sticked.length; i < l; i++) {
                            var s = sticked[i],
                                elementTop = s.stickyWrapper.offset().top,
                                etse = elementTop - s.topSpacing - extra;
                            s.stickyWrapper.css('height', s.stickyElement.outerHeight());
                            if (scrollTop <= etse) {
                                if (s.currentTop !== null) {
                                    s.stickyElement.css({ 'width': '', 'position': '', 'top': '', 'z-index': '' });
                                    s.stickyElement.parent().removeClass(s.className);
                                    s.stickyElement.trigger('sticky-end', [s]);
                                    s.currentTop = null
                                }
                            } else {
                                var newTop = documentHeight - s.stickyElement.outerHeight() - s.topSpacing - s.bottomSpacing - scrollTop - extra;
                                if (newTop < 0) {
                                    newTop = newTop + s.topSpacing
                                } else {
                                    newTop = s.topSpacing
                                }
                                if (s.currentTop !== newTop) {
                                    var newWidth;
                                    if (s.getWidthFrom) {
                                        padding = s.stickyElement.innerWidth() - s.stickyElement.width();
                                        newWidth = jQuery(s.getWidthFrom).width() - padding || null
                                    } else if (s.widthFromWrapper) {
                                        newWidth = s.stickyWrapper.width()
                                    }
                                    if (newWidth == null) {
                                        newWidth = s.stickyElement.width()
                                    }
                                    s.stickyElement.css('width', newWidth).css('position', 'fixed').css('top', newTop).css('z-index', s.zIndex);
                                    s.stickyElement.parent().addClass(s.className);
                                    if (s.currentTop === null) {
                                        s.stickyElement.trigger('sticky-start', [s])
                                    } else {
                                        s.stickyElement.trigger('sticky-update', [s])
                                    }
                                    if (s.currentTop === s.topSpacing && s.currentTop > newTop || s.currentTop === null && newTop < s.topSpacing) {
                                        s.stickyElement.trigger('sticky-bottom-reached', [s])
                                    } else if (s.currentTop !== null && newTop === s.topSpacing && s.currentTop < newTop) {
                                        s.stickyElement.trigger('sticky-bottom-unreached', [s])
                                    }
                                    s.currentTop = newTop
                                }
                                var stickyWrapperContainer = s.stickyWrapper.parent();
                                var unstick = (s.stickyElement.offset().top + s.stickyElement.outerHeight() >= stickyWrapperContainer.offset().top + stickyWrapperContainer.outerHeight()) && (s.stickyElement.offset().top <= s.topSpacing);
                                if (unstick) {
                                    s.stickyElement.css('position', 'absolute').css('top', '').css('bottom', 0).css('z-index', '')
                                } else {
                                    s.stickyElement.css('position', 'fixed').css('top', newTop).css('bottom', '').css('z-index', s.zIndex)
                                }
                            }
                        }
                    },
                    resizer = function () {
                        windowHeight = jQuerywindow.height();
                        for (var i = 0, l = sticked.length; i < l; i++) {
                            var s = sticked[i];
                            var newWidth = null;
                            if (s.getWidthFrom) {
                                if (s.responsiveWidth) {
                                    newWidth = jQuery(s.getWidthFrom).width()
                                }
                            } else if (s.widthFromWrapper) {
                                newWidth = s.stickyWrapper.width()
                            }
                            if (newWidth != null) {
                                s.stickyElement.css('width', newWidth)
                            }
                        }
                    },
                    methods = {
                        init: function (options) {
                            return this.each(function () {
                                var o = jQuery.extend({}, defaults, options);
                                var stickyElement = jQuery(this);
                                var stickyId = stickyElement.attr('id');
                                var wrapperId = stickyId ? stickyId + '-' + defaults.wrapperClassName : defaults.wrapperClassName;
                                var wrapper = jQuery('<div></div>').attr('id', wrapperId).addClass(o.wrapperClassName);
                                stickyElement.wrapAll(function () {
                                    if (jQuery(this).parent("#" + wrapperId).length == 0) {
                                        return wrapper
                                    }
                                });
                                var stickyWrapper = stickyElement.parent();
                                if (o.center) {
                                    stickyWrapper.css({ width: stickyElement.outerWidth(), marginLeft: "auto", marginRight: "auto" })
                                }
                                if (stickyElement.css("float") === "right") {
                                    stickyElement.css({ "float": "none" }).parent().css({ "float": "right" })
                                }
                                o.stickyElement = stickyElement;
                                o.stickyWrapper = stickyWrapper;
                                o.currentTop = null;
                                sticked.push(o);
                                methods.setWrapperHeight(this);
                                methods.setupChangeListeners(this)
                            })
                        },
                        setWrapperHeight: function (stickyElement) {
                            var element = jQuery(stickyElement);
                            var stickyWrapper = element.parent();
                            if (stickyWrapper) {
                                stickyWrapper.css('height', element.outerHeight())
                            }
                        },
                        setupChangeListeners: function (stickyElement) {
                            if (window.MutationObserver) {
                                var mutationObserver = new window.MutationObserver(function (mutations) {
                                    if (mutations[0].addedNodes.length || mutations[0].removedNodes.length) {
                                        methods.setWrapperHeight(stickyElement)
                                    }
                                });
                                mutationObserver.observe(stickyElement, {
                                    subtree: !0,
                                    childList: !0
                                })
                            } else {
                                if (window.addEventListener) {
                                    stickyElement.addEventListener('DOMNodeInserted', function () {
                                        methods.setWrapperHeight(stickyElement)
                                    }, !1);
                                    stickyElement.addEventListener('DOMNodeRemoved', function () {
                                        methods.setWrapperHeight(stickyElement)
                                    }, !1)
                                } else if (window.attachEvent) {
                                    stickyElement.attachEvent('onDOMNodeInserted', function () {
                                        methods.setWrapperHeight(stickyElement)
                                    });
                                    stickyElement.attachEvent('onDOMNodeRemoved', function () {
                                        methods.setWrapperHeight(stickyElement)
                                    })
                                }
                            }
                        },
                        update: scroller,
                        unstick: function (options) {
                            return this.each(function () {
                                var that = this;
                                var unstickyElement = jQuery(that);
                                var removeIdx = -1;
                                var i = sticked.length;
                                while (i-- > 0) {
                                    if (sticked[i].stickyElement.get(0) === that) {
                                        splice.call(sticked, i, 1);
                                        removeIdx = i
                                    }
                                }
                                if (removeIdx !== -1) {
                                    unstickyElement.unwrap();
                                    unstickyElement.css({
                                        'width': '',
                                        'position': '',
                                        'top': '',
                                        'float': '',
                                        'z-index': ''
                                    })
                                }
                            })
                        }
                    };
                if (window.addEventListener) {
                    window.addEventListener('scroll', scroller, !1);
                    window.addEventListener('resize', resizer, !1)
                } else if (window.attachEvent) {
                    window.attachEvent('onscroll', scroller);
                    window.attachEvent('onresize', resizer)
                }
                jQuery.fn.sticky = function (method) {
                    if (methods[method]) {
                        return methods[method].apply(this, slice.call(arguments, 1))
                    } else if (typeof method === 'object' || !method) {
                        return methods.init.apply(this, arguments)
                    } else {
                        jQuery.error('Method ' + method + ' does not exist on jQuery.sticky')
                    }
                };
                jQuery.fn.unstick = function (method) {
                    if (methods[method]) {
                        return methods[method].apply(this, slice.call(arguments, 1))
                    } else if (typeof method === 'object' || !method) {
                        return methods.unstick.apply(this, arguments)
                    } else {
                        jQuery.error('Method ' + method + ' does not exist on jQuery.sticky')
                    }
                };
                jQuery(function () {
                    setTimeout(scroller, 0)
                })
            }))
        });
    }

    useEffect(() => {
        headerResource();
    }, []);

    return (
        <>
            <div className="header-main">
                <div className="top-bar search-background">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 col-12">
                                <div className="top-bar-left d-flex">
                                    <div className="clearfix">
                                        <ul className="socials">
                                            <li>
                                                <a className="social-icon text-dark"  href="https://www.facebook.com/ducatEducation"><i className="fa fa-facebook text-light" style={{ fontSize: "16px" }}></i></a>
                                            </li>
                                            <li>
                                                <a className="social-icon text-dark"  href="https://twitter.com/Ducat_education"><i className="fa fa-twitter text-light" style={{ fontSize: "16px" }}></i></a>
                                            </li>
                                            <li>
                                                <a className="social-icon text-dark"  href="https://www.linkedin.com/company/ducateducation"><i className="fa fa-linkedin text-light" style={{ fontSize: "16px" }}></i></a>
                                            </li>
                                            <li>
                                                <a className="social-icon text-dark"  href="https://www.youtube.com/c/DucatIndiatraining"><i className="fa fa-youtube text-light" style={{ fontSize: "16px" }}></i></a>
                                            </li>
                                            <li>
                                                <a className="social-icon text-dark"  href="https://www.instagram.com/ducateducation/"><i className="fa fa-instagram text-light" style={{ fontSize: "16px" }}></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 col-12">
                                <div className="top-bar-right">
                                    <ul className="custom">
                                        <li>
                                            <a  href="https://wa.me/+919999993213" className="text-dark"><i className="fa fa-whatsapp me-1 text-light" style={{ fontSize: "16px" }}></i>
                                                <span className='text-light' style={{ fontSize: "16px" }}>+91 99-9999-3213</span></a>
                                        </li>
                                        <li>
                                            <a href="tel:7070905090" className="text-dark"><i className="fa fa-phone me-1 text-light" style={{ fontSize: "16px" }}></i>
                                                <span className='text-light' style={{ fontSize: "16px" }}>+91 70-70-90-50-90</span></a>
                                        </li>
                                        <li>
                                            <a href="mailto:info@ducatindia.com" className="text-dark"><i className="fa fa-envelope me-1 text-light" style={{ fontSize: "16px" }}></i>
                                                <span className='text-light' style={{ fontSize: "16px" }}>info@ducatindia.com</span></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <MobileNavigation></MobileNavigation>
            </div>
        </>
    )
}
