// home.js

// GitHub
// function updateGitHub(repository) {
//     $('#github-watch img').attr('src', 'https://img.shields.io/github/watchers/' + repository + '.svg?style=social&label=Watch');
//     $('#github-star img').attr('src', 'https://img.shields.io/github/stars/' + repository + '.svg?style=social&label=Star');
//     $('#github-fork img').attr('src', 'https://img.shields.io/github/forks/' + repository + '.svg?style=social&label=Fork');
// };
// var repository = $('meta[name=repository]').attr('content');
// updateGitHub(repository);
// setInterval(function () {
//     if (!document.hidden) {
//         updateGitHub(repository);
//     };
// }, 60000);

// version
// dayjs.locale('zh-cn');
// dayjs.extend(dayjs_plugin_relativeTime);
// function updateVersion(timestamp) {
//     $('#version img').attr('src', 'https://img.shields.io/badge/%E6%9B%B4%E6%96%B0%E4%BA%8E-' + encodeURIComponent(dayjs(timestamp).fromNow()) + '-brightgreen.svg');
// };
// var updateAt = $('meta[name=updated_at]').attr('content');
// updateVersion(updateAt);
// setInterval(function () {
//     if (!document.hidden) {
//         updateVersion(updateAt);
//     };
// }, 60000);

// visit
// function updateVisit() {
//     $.getJSON(analyticsAPI.url, {
//         'module': 'API',
//         'method': 'VisitsSummary.getUniqueVisitors',
//         'idSite': analyticsAPI.id,
//         'period': 'day',
//         'date': 'today',
//         'format': 'JSON',
//         'token_auth': analyticsAPI.token
//     }, function (data) {
//         $('#today-visitors img').attr('src', 'https://img.shields.io/badge/%E4%BB%8A%E6%97%A5%E8%AE%BF%E5%AE%A2-' + encodeURIComponent(data.value) + '-brightgreen.svg');
//     });
//     $.getJSON(analyticsAPI.url, {
//         'module': 'API',
//         'method': 'Live.getCounters',
//         'idSite': analyticsAPI.id,
//         'lastMinutes': '30',
//         'format': 'JSON',
//         'token_auth': analyticsAPI.token
//     }, function (data) {
//         $('#live-visitors img').attr('src', 'https://img.shields.io/badge/%E5%BD%93%E5%89%8D%E5%9C%A8%E7%BA%BF-' + encodeURIComponent(data[0].visitors) + '-brightgreen.svg');
//     });
// };
//updateVisit();
// setInterval(function () {
//     if (!document.hidden) {
//         updateVisit();
//     };
// }, 60000);

// search
$('#search-services').dropdown();
if (Cookies.get('byr_navi_previous_search_service_option') === undefined || Cookies.get('byr_navi_previous_search_service_option') === '' || $('#' + Cookies.get('byr_navi_previous_search_service_option')).length === 0) {
    Cookies.set('byr_navi_previous_search_service_option', $('#search-services').val(), { expires: 365 });
} else {
    $('#search-services').dropdown('set selected', Cookies.get('byr_navi_previous_search_service_option'));
};

$('#search-button').click(function () {
    var service = $('#' + $('#search-services').val());
    var query = $('#search-query').val();
    query = encodeURIComponent(query);
    if (query) {
        Cookies.set('byr_navi_previous_search_service_option', service.val(), { expires: 365 });
        window.open('search/?service=' + encodeURIComponent(service.text()) + '&query=' + query + '&next=' + encodeURIComponent(service.attr('data-url') + query.replace(new RegExp(service.attr('data-transcode-from'), 'g'), service.attr('data-transcode-to')) + service.attr('data-suffix')), '_blank');
    } else {
        $('#search-div').addClass('error');
        $('#search-query').attr('placeholder', '?????????????????????');
    };
});

$('#search-query').click(function () {
    $(this).select();
});

$(document).ready(function () {
    $('#search-query').focus();
});

$(window).keyup(function (event) {
    var windowTop = $(window).scrollTop();
    var windowHeight = $(window).innerHeight();
    var windowBottom = windowTop + windowHeight;
    var searchBoxTop = $('#search-div').offset().top;
    var searchBoxHeight = $('#search-div').innerHeight();
    var searchBoxBottom = searchBoxTop + searchBoxHeight;
    if (event.key === 'Enter' && searchBoxBottom > windowTop && searchBoxTop < windowBottom) {
        var service = $('#' + $('#search-services').val());
        var query = $('#search-query').val();
        query = encodeURIComponent(query);
        if (query) {
            if ($('#search-query:focus').length > 0) {
                Cookies.set('byr_navi_previous_search_service_option', service.val(), { expires: 365 });
                window.open('search/?service=' + encodeURIComponent(service.text()) + '&query=' + query + '&next=' + encodeURIComponent(service.attr('data-url') + query + service.attr('data-suffix')), '_blank');
            } else {
                $('#search-query').focus().select();
            };
        } else {
            $('#search-div').addClass('error');
            $('#search-query').attr('placeholder', '?????????????????????').focus();
        };
    };
});

$('#search-query').keyup(function (event) {
    if (event.key) {
        if ($('#search-query').val()) {
            $('#search-div').removeClass('error');
            $('#search-query').attr('placeholder', '????????????');
        };
    };
});

$('.shortcuts .ui.label').each(function () {
    $(this).click(function () {
        var service = $('#' + $(this).attr('data-search-service-id'));
        var query = $('#search-query').val();
        query = encodeURIComponent(query);
        if (query) {
            Cookies.set('byr_navi_previous_search_service_option', service.val(), { expires: 365 });
            $('#search-services').dropdown('set selected', service.val());
            window.open('search/?service=' + encodeURIComponent(service.text()) + '&query=' + query + '&next=' + encodeURIComponent(service.attr('data-url') + query + service.attr('data-suffix')), '_blank');
        } else {
            $('#search-div').addClass('error');
            $('#search-query').attr('placeholder', '?????????????????????');
        };
    });
});

// query suggestions
var sugParams = {
    "XOffset": -3, //??????????????????????????????,??????px
    "YOffset": -2, //??????????????????????????????,??????px
    // "width": $('#search-query').innerWidth(), //????????????????????????px
    "fontColor": "rgba(0, 0, 0, 0.87)", //?????????????????????
    "fontColorHI": "rgba(0, 0, 0, 0.87)", //????????????????????????????????????
    "fontSize": "14px", //????????????
    "fontFamily": "Lato, 'Helvetica Neue', Arial, Helvetica, sans-serif", //????????????
    "borderColor": "rgba(34, 36, 38, 0.14902)", //????????????????????????
    "bgcolorHI": "rgba(0, 0, 0, 0.05)", //??????????????????????????????
    "sugSubmit": false //?????????????????????????????????????????????
};
BaiduSuggestion.bind('search-query', sugParams);
