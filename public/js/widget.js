!function(){function e(){i=window.jQuery.noConflict(!0),t()}function t(){i(document).ready(function(e){var t=e("#sff_127__widget-container"),i='<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />';e("head").append(i);var o=function(){function i(){return'<style>#sff_127__iframe__container{position:fixed;left:0;right:0;top:0;bottom:0;background:rgba(0,0,0,0.7);z-index:999999}#sff_127__iframe__wrapper{width:90%;height:90%;max-width:1020px;left:50%;top:50%;-webkit-transform:translate(-50%, -50%);-ms-transform:translate(-50%, -50%);transform:translate(-50%, -50%);z-index:999999;position:absolute;overflow:auto;-webkit-overflow-scrolling:touch !important}#sff_127__form__iframe{margin:0 auto;display:block;position:relative;width:100%;height:100%;min-width:320px;min-height:320px}#sff_127__iframe__close-x{position:fixed;right:50px;top:30px;color:#000;opacity:.2;-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=20)";cursor:pointer;font-size:24px;z-index:99999;text-align:center;margin:0;font-family:Arial;display:none}#sff_127__iframe__close-x:hover{opacity:.7;-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=70)"}#sff_127__iframe__container.sff_127__iframe__embadable{background:transparent none repeat scroll 0 0;bottom:auto;left:auto;position:relative;right:auto;top:auto;z-index:9999}#sff_127__iframe__container.sff_127__iframe__embadable #sff_127__iframe__wrapper{height:1290px;left:auto;position:relative;top:auto;-webkit-transform:none;-ms-transform:none;transform:none;width:100%;z-index:9999}@media (max-width: 991px){#sff_127__iframe__close-x{right:35px}}@media (max-width: 1024px){#sff_127__iframe__wrapper{width:95%;height:95%}}</style>'}var o=window._ekomiServerUrl+"/get-widget",a={shopId:window._ekomiShopId,orderId:window._ekomiTransactionId,productIds:window._ekomiProductIds,formId:window._ekomiFormId,buttonStyles:window._ekomiButtonStyles,buttonText:window._ekomiButtonText,embedWidget:window._ekomiEmbedWidget,disableAutoClose:window._ekomiDisableAutoClose,ekomiEmail:window._ekomiEmail?window._ekomiEmail:""};e.post(o,a,function(o){json_data=JSON.parse(o);var a=window._ekomiWidgetWidth,n="";if(void 0!==window._ekomiEmbedWidget&&1==window._ekomiEmbedWidget){var _="sff_127__iframe__embadable";n="; height:"+window._ekomiWidgetHeight}var r='style="max-width:'+a+n+';"';if("success"==json_data.status){e("head").append(i());var s="";window._ekomiButtonStyles?(e("head").append("<link href='"+window._ekomiServerUrl+"/stylesheets/widget-fonts-css/widget-fonts.css?v="+(new Date).getTime()+"' type='text/css' rel='stylesheet' />"),e("head").append(json_data.css),t.html(json_data.button_html),s='style="display: none;"'):s='style="display: block;"';var f='<div id="sff_127__iframe__container" '+s+' class="'+_+'"><div id="sff_127__iframe__wrapper" '+r+'><p id="sff_127__iframe__close-x">x</p><iframe sandbox="allow-same-origin allow-scripts allow-popups allow-forms" id="sff_127__form__iframe" frameborder="0" src="'+json_data.link+'"></iframe></div></div>';t.append(f),e("#sff_127__iframe__close-x").on("click",function(){e("#sff_127__iframe__container").hide()}),e("#sff_127__widget_button").on("click",function(){e("#sff_127__iframe__container").show()}),e("#sff_127__iframe__container:not(.sff_127__iframe__embadable)").on("click",function(t){return e(t.target).is("iframe,#sff_127__widget_button")?void t.preventDefault():void e("#sff_127__iframe__container").hide()}),e(window).on("message",function(t){"close_sff_127_iframe"==t.originalEvent.data&&e("#sff_127__iframe__container").hide()}),e(window).on("message",function(t){"close_sff_127_iframe_animate"==t.originalEvent.data&&e("#sff_127__iframe__container").slideUp(3e3)})}else t.html(json_data.message)})};o()})}var i;if(void 0===window.jQuery||"1.11.3"!==window.jQuery.fn.jquery){var o=document.createElement("script");o.setAttribute("type","text/javascript"),o.setAttribute("src",window._ekomiServerUrl+"/script/js/jquery.min.js"),o.readyState?o.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||e()}:o.onload=e,(document.getElementsByTagName("head")[0]||document.documentElement).appendChild(o)}else i=window.jQuery,t();window.ekomiWidgetMain=t}();