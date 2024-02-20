(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[c[0x0]] = c;
    return '';
}
function regTextVar(a, b) {
    var c = ![];
    b = b['toLowerCase']();
    var d = function () {
        var m = this['get']('data');
        m['updateText'](m['translateObjs'][a]);
    };
    var e = function (m) {
        var n = m['data']['nextSelectedIndex'];
        if (n >= 0x0) {
            var o = m['source']['get']('items')[n];
            var p = function () {
                o['unbind']('start', p, this);
                d['call'](this);
            };
            o['bind']('start', p, this);
        } else
            d['call'](this);
    };
    var f = function (m) {
        return function (n) {
            if (m in n) {
                d['call'](this);
            }
        }['bind'](this);
    };
    var g = function (m, n) {
        return function (o, p) {
            if (m == o && n in p) {
                d['call'](this);
            }
        }['bind'](this);
    };
    var h = function (m, n, o) {
        for (var p = 0x0; p < m['length']; ++p) {
            var q = m[p];
            var r = q['get']('selectedIndex');
            if (r >= 0x0) {
                var s = n['split']('.');
                var t = q['get']('items')[r];
                if (o !== undefined && !o['call'](this, t))
                    continue;
                for (var u = 0x0; u < s['length']; ++u) {
                    if (t == undefined)
                        return '';
                    t = 'get' in t ? t['get'](s[u]) : t[s[u]];
                }
                return t;
            }
        }
        return '';
    };
    var i = function (m) {
        var n = m['get']('player');
        return n !== undefined && n['get']('viewerArea') == this['getMainViewer']();
    };
    switch (b) {
    case 'title':
    case 'subtitle':
        var k = function () {
            switch (b) {
            case 'title':
                return 'media.label';
            case 'subtitle':
                return 'media.data.subtitle';
            }
        }();
        if (k) {
            return function () {
                var m = this['_getPlayListsWithViewer'](this['getMainViewer']());
                if (!c) {
                    for (var n = 0x0; n < m['length']; ++n) {
                        m[n]['bind']('changing', e, this);
                    }
                    c = !![];
                }
                return h['call'](this, m, k, i);
            };
        }
        break;
    default:
        if (b['startsWith']('quiz.') && 'Quiz' in TDV) {
            var l = undefined;
            var k = function () {
                switch (b) {
                case 'quiz.questions.answered':
                    return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                case 'quiz.question.count':
                    return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                case 'quiz.items.found':
                    return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                case 'quiz.item.count':
                    return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                case 'quiz.score':
                    return TDV['Quiz']['PROPERTY']['SCORE'];
                case 'quiz.score.total':
                    return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                case 'quiz.time.remaining':
                    return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                case 'quiz.time.elapsed':
                    return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                case 'quiz.time.limit':
                    return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                case 'quiz.media.items.found':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                case 'quiz.media.item.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                case 'quiz.media.questions.answered':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                case 'quiz.media.question.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                case 'quiz.media.score':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                case 'quiz.media.score.total':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                case 'quiz.media.index':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                case 'quiz.media.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                case 'quiz.media.visited':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                default:
                    var m = /quiz\.([\w_]+)\.(.+)/['exec'](b);
                    if (m) {
                        l = m[0x1];
                        switch ('quiz.' + m[0x2]) {
                        case 'quiz.score':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                        case 'quiz.score.total':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                        case 'quiz.media.items.found':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                        case 'quiz.media.item.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                        case 'quiz.media.questions.answered':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                        case 'quiz.media.question.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                        case 'quiz.questions.answered':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                        case 'quiz.question.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                        case 'quiz.items.found':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                        case 'quiz.item.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                        case 'quiz.media.score':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                        case 'quiz.media.score.total':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                        }
                    }
                }
            }();
            if (k) {
                return function () {
                    var m = this['get']('data')['quiz'];
                    if (m) {
                        if (!c) {
                            if (l != undefined)
                                if (l == 'global') {
                                    var o = this['get']('data')['quizConfig'];
                                    var q = o['objectives'];
                                    for (var s = 0x0, u = q['length']; s < u; ++s) {
                                        m['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], g['call'](this, q[s]['id'], k), this);
                                    }
                                } else {
                                    m['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], g['call'](this, l, k), this);
                                }
                            else
                                m['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], f['call'](this, k), this);
                            c = !![];
                        }
                        try {
                            var v = 0x0;
                            if (l != undefined) {
                                if (l == 'global') {
                                    var o = this['get']('data')['quizConfig'];
                                    var q = o['objectives'];
                                    for (var s = 0x0, u = q['length']; s < u; ++s) {
                                        v += m['getObjective'](q[s]['id'], k);
                                    }
                                } else {
                                    v = m['getObjective'](l, k);
                                }
                            } else {
                                v = m['get'](k);
                                if (k == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                    v += 0x1;
                            }
                            return v;
                        } catch (w) {
                            return undefined;
                        }
                    }
                };
            }
        }
        break;
    }
    return '';
}
function createQuizConfig(player, a) {
    var b = {};
    b['player'] = player;
    b['playList'] = a;
    function c(f) {
        for (var g = 0x0; g < f['length']; ++g) {
            var h = f[g];
            if ('id' in h)
                player[h['id']] = h;
        }
    }
    if (b['questions']) {
        c(b['questions']);
        for (var d = 0x0; d < b['questions']['length']; ++d) {
            var e = b['questions'][d];
            c(e['options']);
        }
    }
    if (b['objectives']) {
        c(b['objectives']);
    }
    if (b['califications']) {
        c(b['califications']);
    }
    if (b['score']) {
        player[b['score']['id']] = b['score'];
    }
    if (b['question']) {
        player[b['question']['id']] = b['question'];
    }
    if (b['timeout']) {
        player[b['timeout']['id']] = b['timeout'];
    }
    player['get']('data')['translateObjs'] = translateObjs;
    return b;
}
var script = {"start":"this.init()","borderSize":0,"borderRadius":0,"class":"Player","gap":10,"width":"100%","paddingLeft":0,"paddingTop":0,"id":"rootPlayer","mouseWheelEnabled":true,"defaultMenu":["fullscreen","mute","rotation"],"paddingBottom":0,"paddingRight":0,"desktopMipmappingEnabled":false,"horizontalAlign":"left","backgroundColorRatios":[0],"scrollBarColor":"#000000","scrollBarMargin":2,"verticalAlign":"top","backgroundOpacity":1,"vrPolyfillScale":0.75,"contentOpaque":false,"scripts":{"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"shareSocial":TDV.Tour.Script.shareSocial,"historyGoForward":TDV.Tour.Script.historyGoForward,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"getKey":TDV.Tour.Script.getKey,"getMainViewer":TDV.Tour.Script.getMainViewer,"getOverlays":TDV.Tour.Script.getOverlays,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"quizStart":TDV.Tour.Script.quizStart,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"setMapLocation":TDV.Tour.Script.setMapLocation,"showWindow":TDV.Tour.Script.showWindow,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"downloadFile":TDV.Tour.Script.downloadFile,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"historyGoBack":TDV.Tour.Script.historyGoBack,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"openLink":TDV.Tour.Script.openLink,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"init":TDV.Tour.Script.init,"clone":TDV.Tour.Script.clone,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"initAnalytics":TDV.Tour.Script.initAnalytics,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"cloneCamera":TDV.Tour.Script.cloneCamera,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"resumePlayers":TDV.Tour.Script.resumePlayers,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"executeJS":TDV.Tour.Script.executeJS,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"registerKey":TDV.Tour.Script.registerKey,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"unregisterKey":TDV.Tour.Script.unregisterKey,"showPopupImage":TDV.Tour.Script.showPopupImage,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"quizFinish":TDV.Tour.Script.quizFinish,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"existsKey":TDV.Tour.Script.existsKey,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"setValue":TDV.Tour.Script.setValue,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"getPixels":TDV.Tour.Script.getPixels,"textToSpeech":TDV.Tour.Script.textToSpeech,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"cloneBindings":TDV.Tour.Script.cloneBindings,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"isPanorama":TDV.Tour.Script.isPanorama,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"setLocale":TDV.Tour.Script.setLocale,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"initQuiz":TDV.Tour.Script.initQuiz,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"mixObject":TDV.Tour.Script.mixObject,"getComponentByName":TDV.Tour.Script.getComponentByName,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getMediaByName":TDV.Tour.Script.getMediaByName,"playAudioList":TDV.Tour.Script.playAudioList,"quizShowScore":TDV.Tour.Script.quizShowScore,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"translate":TDV.Tour.Script.translate,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia},"toolTipHorizontalAlign":"center","height":"100%","backgroundColor":["#FFFFFF"],"defaultVRPointer":"laser","layout":"absolute","overflow":"hidden","scrollBarOpacity":0.5,"backgroundPreloadEnabled":true,"definitions": [{"closeButtonPaddingTop":0,"closeButtonPaddingBottom":0,"borderSize":0,"data":{"name":"Window7939"},"closeButtonPaddingRight":0,"class":"Window","bodyBackgroundColorDirection":"vertical","veilOpacity":0.4,"showEffect":{"easing":"cubic_in_out","duration":500,"class":"FadeInEffect"},"closeButtonIconHeight":20,"hideEffect":{"easing":"cubic_in_out","duration":500,"class":"FadeOutEffect"},"shadowHorizontalLength":3,"shadowColor":"#000000","headerBorderSize":0,"closeButtonIconWidth":20,"titleFontFamily":"Arial","closeButtonIconLineWidth":2,"paddingLeft":0,"closeButtonIconColor":"#B2B2B2","shadowVerticalLength":0,"id":"window_D3F5F117_C77A_BB62_4192_45714EF03E3A","paddingRight":0,"modal":true,"closeButtonRollOverBackgroundColorRatios":[],"closeButtonPressedBorderColor":"#000000","bodyBackgroundColor":["#FFFFFF","#DDDDDD","#FFFFFF"],"bodyPaddingRight":0,"headerBackgroundColor":["#DDDDDD","#EEEEEE","#FFFFFF"],"titleFontWeight":"normal","closeButtonBackgroundColorRatios":[],"footerBackgroundColorRatios":[0,0.9,1],"bodyBorderSize":0,"bodyPaddingTop":0,"titleFontColor":"#000000","backgroundOpacity":1,"bodyBorderColor":"#000000","veilColor":["#000000","#000000"],"closeButtonPressedIconLineWidth":3,"scrollBarOpacity":0.5,"toolTipHorizontalAlign":"center","titleFontSize":"1.29vmin","backgroundColor":[],"closeButtonPressedBorderSize":0,"bodyPaddingBottom":0,"layout":"vertical","titlePaddingBottom":5,"overflow":"scroll","closeButtonPressedBackgroundColor":[],"closeButtonPressedBackgroundColorRatios":[],"veilColorRatios":[0,1],"footerHeight":5,"headerPaddingRight":0,"footerBackgroundColor":["#FFFFFF","#EEEEEE","#DDDDDD"],"closeButtonBorderSize":0,"bodyBackgroundOpacity":0,"closeButtonBorderColor":"#000000","footerBorderSize":0,"headerBackgroundOpacity":0,"shadowOpacity":0.5,"minHeight":0,"titleFontStyle":"normal","titlePaddingTop":5,"minWidth":0,"closeButtonRollOverBackgroundColor":[],"closeButtonRollOverBorderColor":"#000000","shadowBlurRadius":6,"headerPaddingLeft":10,"gap":10,"veilHideEffect":{"easing":"cubic_in_out","duration":500,"class":"FadeOutEffect"},"scrollBarWidth":10,"borderRadius":5,"closeButtonPressedBackgroundOpacity":0,"closeButtonRollOverBackgroundOpacity":0,"titlePaddingRight":5,"closeButtonPressedIconColor":"#FFFFFF","headerBackgroundColorRatios":[0,0.1,1],"headerPaddingTop":10,"children":["this.viewer_uidD3FB6A1E_C76A_4962_41E4_027458405338"],"paddingTop":0,"closeButtonRollOverBorderSize":0,"horizontalAlign":"center","closeButtonBackgroundOpacity":0,"paddingBottom":0,"veilShowEffect":{"easing":"cubic_in_out","duration":500,"class":"FadeInEffect"},"closeButtonBorderRadius":11,"headerVerticalAlign":"middle","titleHorizontalAlign":"left","backgroundColorRatios":[],"shadowSpread":1,"footerBackgroundColorDirection":"vertical","scrollBarMargin":2,"verticalAlign":"middle","contentOpaque":false,"footerBorderColor":"#000000","headerBackgroundColorDirection":"vertical","headerBorderColor":"#000000","headerPaddingBottom":5,"bodyBackgroundColorRatios":[0,0.5,1],"closeButtonPaddingLeft":0,"closeButtonRollOverIconLineWidth":2,"titlePaddingLeft":5,"closeButtonRollOverIconColor":"#FFFFFF","bodyPaddingLeft":0,"veilColorDirection":"horizontal","scrollBarVisible":"rollOver","scrollBarColor":"#000000","closeButtonBackgroundColor":[],"propagateClick":false,"footerBackgroundOpacity":0,"shadow":true,"backgroundColorDirection":"vertical","titleTextDecoration":"none"},{"image":{"class":"ImageResource","levels":[{"url":"media/album_D28EEA2F_C77B_C9A1_41C3_C0EB983EFD2E_0.jpeg","class":"ImageResourceLevel"}]},"label":trans('album_D28EEA2F_C77B_C9A1_41C3_C0EB983EFD2E_0.label'),"height":1200,"duration":5000,"class":"Photo","width":1600,"thumbnailUrl":"media/album_D28EEA2F_C77B_C9A1_41C3_C0EB983EFD2E_0_t.jpg","data":{"label":"WhatsApp Image 2024-02-20 at 11.14.18"},"id":"album_D28EEA2F_C77B_C9A1_41C3_C0EB983EFD2E_0"},{"class":"Panorama","partial":false,"overlays":["this.overlay_C90009ED_C76A_4AA6_41E2_5E3B517AE59E"],"pitch":0,"id":"panorama_CB4E5C84_C767_C966_41D7_78D9AB910258","thumbnailUrl":"media/panorama_CB4E5C84_C767_C966_41D7_78D9AB910258_t.jpg","hfovMin":"135%","label":trans('panorama_CB4E5C84_C767_C966_41D7_78D9AB910258.label'),"hfovMax":130,"frames":[{"thumbnailUrl":"media/panorama_CB4E5C84_C767_C966_41D7_78D9AB910258_t.jpg","class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"width":12288,"url":"media/panorama_CB4E5C84_C767_C966_41D7_78D9AB910258_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":2048,"colCount":24,"rowCount":4,"tags":"ondemand"},{"width":6144,"url":"media/panorama_CB4E5C84_C767_C966_41D7_78D9AB910258_0/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":1024,"colCount":12,"rowCount":2,"tags":"ondemand"},{"width":3072,"url":"media/panorama_CB4E5C84_C767_C966_41D7_78D9AB910258_0/{face}/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":512,"colCount":6,"rowCount":1,"tags":["ondemand","preload"]},{"width":9216,"url":"media/panorama_CB4E5C84_C767_C966_41D7_78D9AB910258_0/{face}/vr/0.jpg","class":"TiledImageResourceLevel","height":1536,"colCount":6,"rowCount":1,"tags":"mobilevr"},{"width":12288,"url":"media/panorama_CB4E5C84_C767_C966_41D7_78D9AB910258_0/{face}/vr2gen/0.jpg","class":"TiledImageResourceLevel","height":2048,"colCount":6,"rowCount":1,"tags":"mobilevr2gen"}]}}],"data":{"label":"IMG_20221009_104729_00_001(1)"},"hfov":360,"vfov":180},{"toolTipPaddingTop":4,"propagateClick":false,"toolTipBorderSize":1,"borderSize":0,"progressBackgroundColorDirection":"vertical","toolTipTextShadowColor":"#000000","class":"ViewerArea","playbackBarProgressBackgroundColorDirection":"vertical","subtitlesEnabled":true,"progressLeft":0,"paddingLeft":0,"id":"MainViewer","subtitlesFontColor":"#FFFFFF","playbackBarBackgroundColor":["#FFFFFF"],"progressBackgroundOpacity":1,"subtitlesTextShadowVerticalLength":1,"playbackBarHeadBackgroundColorDirection":"vertical","subtitlesTextDecoration":"none","playbackBarHeight":10,"playbackBarHeadWidth":6,"surfaceReticleOpacity":0.6,"paddingRight":0,"surfaceReticleColor":"#FFFFFF","playbackBarProgressBorderSize":0,"toolTipShadowColor":"#333138","subtitlesTextShadowBlurRadius":0,"progressBorderColor":"#000000","width":"100%","playbackBarBackgroundColorDirection":"vertical","toolTipPaddingRight":6,"toolTipTextShadowOpacity":0,"toolTipFontFamily":"Arial","playbackBarRight":0,"vrPointerSelectionTime":2000,"subtitlesFontFamily":"Arial","toolTipShadowVerticalLength":0,"vrPointerSelectionColor":"#FF6600","toolTipHorizontalAlign":"center","height":"100%","playbackBarHeadShadowHorizontalLength":0,"toolTipFontColor":"#606060","progressBarBackgroundColor":["#3399FF"],"transitionDuration":500,"progressBackgroundColor":["#FFFFFF"],"progressBarOpacity":1,"toolTipDisplayTime":600,"playbackBarProgressBorderRadius":0,"subtitlesOpacity":1,"subtitlesPaddingTop":5,"playbackBarProgressBackgroundColor":["#3399FF"],"subtitlesTop":0,"subtitlesTextShadowHorizontalLength":1,"firstTransitionDuration":0,"surfaceReticleSelectionColor":"#FFFFFF","subtitlesShadow":false,"vrPointerColor":"#FFFFFF","subtitlesGap":0,"playbackBarBackgroundOpacity":1,"toolTipFontSize":"1.11vmin","minHeight":50,"surfaceReticleSelectionOpacity":1,"minWidth":100,"progressBottom":0,"toolTipFontStyle":"normal","subtitlesFontWeight":"normal","subtitlesHorizontalAlign":"center","subtitlesBackgroundColor":"#000000","toolTipBorderColor":"#767676","subtitlesTextShadowColor":"#000000","borderRadius":0,"toolTipFontWeight":"normal","playbackBarHeadShadowOpacity":0.7,"playbackBarHeadShadowBlurRadius":3,"toolTipOpacity":1,"progressBackgroundColorRatios":[0],"subtitlesVerticalAlign":"bottom","playbackBarLeft":0,"translationTransitionDuration":1000,"progressHeight":10,"toolTipBackgroundColor":"#F6F6F6","subtitlesPaddingBottom":5,"displayTooltipInTouchScreens":true,"paddingTop":0,"subtitlesPaddingLeft":5,"toolTipTextShadowBlurRadius":3,"toolTipBorderRadius":3,"progressBorderSize":0,"paddingBottom":0,"subtitlesBackgroundOpacity":0.2,"progressBarBorderSize":0,"playbackBarHeadShadowColor":"#000000","playbackBarProgressBackgroundColorRatios":[0],"progressBarBorderRadius":0,"playbackBarHeadHeight":15,"subtitlesPaddingRight":5,"playbackBarHeadShadowVerticalLength":0,"subtitlesBottom":50,"playbackBarBorderColor":"#FFFFFF","subtitlesFontSize":"3vmin","subtitlesTextShadowOpacity":1,"playbackBarBorderRadius":0,"playbackBarHeadBackgroundColorRatios":[0,1],"displayTooltipInSurfaceSelection":true,"toolTipShadowBlurRadius":3,"toolTipPaddingBottom":4,"doubleClickAction":"toggle_fullscreen","toolTipShadowOpacity":1,"toolTipShadowSpread":0,"playbackBarProgressBorderColor":"#000000","progressRight":0,"progressBarBackgroundColorDirection":"vertical","playbackBarHeadShadow":true,"subtitlesBorderSize":0,"playbackBarHeadBorderSize":0,"playbackBarHeadOpacity":1,"transitionMode":"blending","progressOpacity":1,"progressBarBorderColor":"#000000","progressBarBackgroundColorRatios":[0],"playbackBarHeadBorderRadius":0,"toolTipShadowHorizontalLength":0,"toolTipPaddingLeft":6,"playbackBarOpacity":1,"subtitlesBorderColor":"#FFFFFF","progressBorderRadius":0,"playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarProgressOpacity":1,"shadow":false,"playbackBarHeadBorderColor":"#000000","playbackBarBorderSize":0,"playbackBarBottom":5,"data":{"name":"Main Viewer"}},{"items":[{"player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","camera":"this.panorama_CB4E5C84_C767_C966_41D7_78D9AB910258_camera","class":"PanoramaPlayListItem","media":"this.panorama_CB4E5C84_C767_C966_41D7_78D9AB910258"},{"player":"this.MainViewerPhotoAlbumPlayer","class":"PhotoAlbumPlayListItem","media":"this.album_D28EEA2F_C77B_C9A1_41C3_C0EB983EFD2E","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 0)","end":"this.trigger('tourEnded')"}],"class":"PlayList","id":"mainPlayList"},{"items":[{"player":"this.viewer_uidD3FB6A1E_C76A_4962_41E4_027458405338VideoPlayer","class":"VideoPlayListItem","begin":"this.fixTogglePlayPauseButton(this.viewer_uidD3FB6A1E_C76A_4962_41E4_027458405338VideoPlayer)","media":"this.video_C8CDD3DC_C76A_5EE7_41B8_0B39909BD9A5","start":"this.viewer_uidD3FB6A1E_C76A_4962_41E4_027458405338VideoPlayer.set('displayPlaybackBar', true); this.viewer_uidD3FB6A1E_C76A_4962_41E4_027458405338VideoPlayer.set('displayPlayOverlay', true); this.viewer_uidD3FB6A1E_C76A_4962_41E4_027458405338VideoPlayer.set('clickAction', 'play_pause'); this.changeBackgroundWhilePlay(this.playList_D46F2730_C77A_47BF_41E7_B51677FF2E7E, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_D46F2730_C77A_47BF_41E7_B51677FF2E7E, 0)"}],"class":"PlayList","id":"playList_D46F2730_C77A_47BF_41E7_B51677FF2E7E"},{"viewerArea":"this.MainViewer","zoomEnabled":true,"class":"PanoramaPlayer","aaEnabled":true,"arrowKeysAction":"translate","touchControlMode":"drag_rotation","mouseControlMode":"drag_rotation","displayPlaybackBar":true,"gyroscopeVerticalDraggingEnabled":true,"surfaceSelectionEnabled":false,"id":"MainViewerPanoramaPlayer"},{"video":"this.videores_D690AED7_C766_46E1_41CA_95E2A7B379E0","class":"Video","loop":false,"height":1080,"width":1080,"thumbnailUrl":"media/video_C8CDD3DC_C76A_5EE7_41B8_0B39909BD9A5_t.jpg","id":"video_C8CDD3DC_C76A_5EE7_41B8_0B39909BD9A5","label":trans('video_C8CDD3DC_C76A_5EE7_41B8_0B39909BD9A5.label'),"data":{"label":"Design sem nome"},"scaleMode":"fit_inside"},{"playList":"this.album_D28EEA2F_C77B_C9A1_41C3_C0EB983EFD2E_AlbumPlayList","label":trans('album_D28EEA2F_C77B_C9A1_41C3_C0EB983EFD2E.label'),"loop":false,"data":{"label":"\u00c1lbum de Fotos WhatsApp Image 2024-02-20 at 11.14.18"},"class":"PhotoAlbum","thumbnailUrl":"media/album_D28EEA2F_C77B_C9A1_41C3_C0EB983EFD2E_t.png","id":"album_D28EEA2F_C77B_C9A1_41C3_C0EB983EFD2E"},{"hoverFactor":0,"initialPosition":{"yaw":0,"pitch":0,"class":"PanoramaCameraPosition"},"class":"PanoramaCamera","automaticZoomSpeed":10,"initialSequence":"this.sequence_CD388FD4_C767_C6E7_41D6_AE069C144A07","id":"panorama_CB4E5C84_C767_C966_41D7_78D9AB910258_camera"},{"viewerArea":"this.MainViewer","class":"PhotoAlbumPlayer","id":"MainViewerPhotoAlbumPlayer"},{"toolTipPaddingTop":4,"propagateClick":false,"toolTipBorderSize":1,"borderSize":0,"progressBackgroundColorDirection":"vertical","toolTipTextShadowColor":"#000000","class":"ViewerArea","playbackBarProgressBackgroundColorDirection":"vertical","subtitlesEnabled":true,"progressLeft":0,"paddingLeft":0,"id":"viewer_uidD3FB6A1E_C76A_4962_41E4_027458405338","subtitlesFontColor":"#FFFFFF","playbackBarBackgroundColor":["#FFFFFF"],"progressBackgroundOpacity":1,"subtitlesTextShadowVerticalLength":1,"playbackBarHeadBackgroundColorDirection":"vertical","subtitlesTextDecoration":"none","playbackBarHeight":10,"playbackBarHeadWidth":6,"surfaceReticleOpacity":0.6,"paddingRight":0,"surfaceReticleColor":"#FFFFFF","playbackBarProgressBorderSize":0,"toolTipShadowColor":"#333138","subtitlesTextShadowBlurRadius":0,"progressBorderColor":"#000000","width":"100%","playbackBarBackgroundColorDirection":"vertical","toolTipPaddingRight":6,"toolTipTextShadowOpacity":0,"toolTipFontFamily":"Arial","playbackBarRight":0,"vrPointerSelectionTime":2000,"subtitlesFontFamily":"Arial","toolTipShadowVerticalLength":0,"vrPointerSelectionColor":"#FF6600","toolTipHorizontalAlign":"center","height":"100%","playbackBarHeadShadowHorizontalLength":0,"toolTipFontColor":"#606060","progressBarBackgroundColor":["#3399FF"],"transitionDuration":500,"progressBackgroundColor":["#FFFFFF"],"progressBarOpacity":1,"toolTipDisplayTime":600,"playbackBarProgressBorderRadius":0,"subtitlesOpacity":1,"subtitlesPaddingTop":5,"playbackBarProgressBackgroundColor":["#3399FF"],"subtitlesTop":0,"subtitlesTextShadowHorizontalLength":1,"firstTransitionDuration":0,"surfaceReticleSelectionColor":"#FFFFFF","subtitlesShadow":false,"vrPointerColor":"#FFFFFF","subtitlesGap":0,"playbackBarBackgroundOpacity":1,"toolTipFontSize":"1.11vmin","minHeight":50,"surfaceReticleSelectionOpacity":1,"minWidth":100,"progressBottom":2,"toolTipFontStyle":"normal","subtitlesFontWeight":"normal","subtitlesHorizontalAlign":"center","subtitlesBackgroundColor":"#000000","toolTipBorderColor":"#767676","subtitlesTextShadowColor":"#000000","borderRadius":0,"toolTipFontWeight":"normal","playbackBarHeadShadowOpacity":0.7,"playbackBarHeadShadowBlurRadius":3,"toolTipOpacity":1,"progressBackgroundColorRatios":[0],"subtitlesVerticalAlign":"bottom","playbackBarLeft":0,"translationTransitionDuration":1000,"progressHeight":10,"toolTipBackgroundColor":"#F6F6F6","subtitlesPaddingBottom":5,"displayTooltipInTouchScreens":true,"paddingTop":0,"subtitlesPaddingLeft":5,"toolTipTextShadowBlurRadius":3,"toolTipBorderRadius":3,"progressBorderSize":0,"paddingBottom":0,"subtitlesBackgroundOpacity":0.2,"progressBarBorderSize":0,"playbackBarHeadShadowColor":"#000000","playbackBarProgressBackgroundColorRatios":[0],"progressBarBorderRadius":0,"playbackBarHeadHeight":15,"subtitlesPaddingRight":5,"playbackBarHeadShadowVerticalLength":0,"subtitlesBottom":10,"playbackBarBorderColor":"#FFFFFF","subtitlesFontSize":"3vmin","subtitlesTextShadowOpacity":1,"playbackBarBorderRadius":0,"playbackBarHeadBackgroundColorRatios":[0,1],"displayTooltipInSurfaceSelection":true,"toolTipShadowBlurRadius":3,"toolTipPaddingBottom":4,"doubleClickAction":"toggle_fullscreen","toolTipShadowOpacity":1,"toolTipShadowSpread":0,"playbackBarProgressBorderColor":"#000000","progressRight":0,"progressBarBackgroundColorDirection":"vertical","playbackBarHeadShadow":true,"subtitlesBorderSize":0,"playbackBarHeadBorderSize":0,"playbackBarHeadOpacity":1,"transitionMode":"blending","progressOpacity":1,"progressBarBorderColor":"#000000","progressBarBackgroundColorRatios":[0],"playbackBarHeadBorderRadius":0,"toolTipShadowHorizontalLength":0,"toolTipPaddingLeft":6,"playbackBarOpacity":1,"subtitlesBorderColor":"#FFFFFF","progressBorderRadius":0,"playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarProgressOpacity":1,"shadow":false,"playbackBarHeadBorderColor":"#000000","playbackBarBorderSize":0,"playbackBarBottom":0,"data":{"name":"ViewerArea8771"}},{"class":"HotspotPanoramaOverlay","useHandCursor":true,"maps":[],"areas":["this.HotspotPanoramaOverlayArea_C9F27A4B_C76A_49E2_41D7_855C30F6891C"],"items":["this.HotspotPanoramaOverlayTextImage_C90F49ED_C76A_4AA6_41E4_0D78F9304275"],"data":{"label":"GIRO EXTERNO 360\u00b0"},"id":"overlay_C90009ED_C76A_4AA6_41E2_5E3B517AE59E"},{"viewerArea":"this.viewer_uidD3FB6A1E_C76A_4962_41E4_027458405338","class":"VideoPlayer","displayPlaybackBar":true,"clickAction":"play_pause","displayPlayOverlay":true,"id":"viewer_uidD3FB6A1E_C76A_4962_41E4_027458405338VideoPlayer"},{"width":1080,"hasAudio":false,"id":"videores_D690AED7_C766_46E1_41CA_95E2A7B379E0","height":1080,"class":"VideoResource","levels":["this.videolevel_D3794C21_C766_495E_41DC_9C5D536AC2CB","this.videolevel_D3057898_C76A_496E_41DE_AD47A451D92D"]},{"items":[{"camera":{"easing":"linear","initialPosition":{"x":0.5,"zoomFactor":1,"class":"PhotoCameraPosition","y":0.5},"class":"MovementPhotoCamera","targetPosition":{"x":0.68,"zoomFactor":1.1,"class":"PhotoCameraPosition","y":0.37},"duration":5000,"scaleMode":"fit_outside"},"class":"PhotoPlayListItem","media":"this.album_D28EEA2F_C77B_C9A1_41C3_C0EB983EFD2E_0"}],"class":"PhotoPlayList","id":"album_D28EEA2F_C77B_C9A1_41C3_C0EB983EFD2E_AlbumPlayList"},{"class":"PanoramaCameraSequence","id":"sequence_CD388FD4_C767_C6E7_41D6_AE069C144A07","movements":[{"yawDelta":18.5,"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":323,"easing":"linear","class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":18.5,"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawSpeed":7.96}],"restartMovementOnUserInteraction":false},{"id":"HotspotPanoramaOverlayArea_C9F27A4B_C76A_49E2_41D7_855C30F6891C","click":"this.showPopupMedia(this.window_D3F5F117_C77A_BB62_4192_45714EF03E3A, this.video_C8CDD3DC_C76A_5EE7_41B8_0B39909BD9A5, this.playList_D46F2730_C77A_47BF_41E7_B51677FF2E7E, '90%', '90%', false)","class":"HotspotPanoramaOverlayArea","mapColor":"any"},{"verticalAlign":"top","class":"HotspotPanoramaOverlayImage","roll":5.07,"horizontalAlign":"left","pitch":0.22,"id":"HotspotPanoramaOverlayTextImage_C90F49ED_C76A_4AA6_41E4_0D78F9304275","image":{"class":"ImageResource","levels":["this.imlevel_D5B3DD76_C77A_4BA2_41BC_CB6CB8E0D890"]},"distance":50,"yaw":-2.18,"rotationY":-6.07,"rotationX":4.12,"data":{"label":"GIRO EXTERNO 360\u00b0"},"hfov":22.03,"vfov":11.24},{"width":1080,"bitrate":2624,"url":trans('videolevel_D3794C21_C766_495E_41DC_9C5D536AC2CB.url'),"class":"VideoResourceLevel","posterURL":trans('videolevel_D3794C21_C766_495E_41DC_9C5D536AC2CB.posterURL'),"height":1080,"type":"application/x-mpegurl","framerate":30,"id":"videolevel_D3794C21_C766_495E_41DC_9C5D536AC2CB"},{"width":1080,"bitrate":2624,"url":trans('videolevel_D3057898_C76A_496E_41DE_AD47A451D92D.url'),"class":"VideoResourceLevel","posterURL":trans('videolevel_D3057898_C76A_496E_41DE_AD47A451D92D.posterURL'),"height":1080,"type":"video/mp4","framerate":30,"id":"videolevel_D3057898_C76A_496E_41DE_AD47A451D92D"},{"height":756.01,"width":1494.93,"url":trans('imlevel_D5B3DD76_C77A_4BA2_41BC_CB6CB8E0D890.url'),"class":"ImageResourceLevel","id":"imlevel_D5B3DD76_C77A_4BA2_41BC_CB6CB8E0D890"}],"mediaActivationMode":"window","children":["this.MainViewer"],"scrollBarVisible":"rollOver","minHeight":0,"propagateClick":false,"downloadEnabled":true,"minWidth":0,"shadow":false,"mobileMipmappingEnabled":false,"scrollBarWidth":10,"backgroundColorDirection":"vertical","data":{"defaultLocale":"pt","name":"Player588","locales":{"pt":"locale/pt.txt"},"textToSpeechConfig":{"speechOnInfoWindow":false,"volume":1,"pitch":1,"rate":1,"speechOnQuizQuestion":false,"stopBackgroundAudio":false,"speechOnTooltip":false}}};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['history'] = {};
script['scripts']['createQuizConfig'] = createQuizConfig;
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2022.1.14.js.map
})();
//Generated with v2022.1.14, Tue Feb 20 2024