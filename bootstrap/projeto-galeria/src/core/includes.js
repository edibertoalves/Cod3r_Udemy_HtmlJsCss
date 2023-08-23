import $ from 'jquery';

const loadHtmlSuccessBallbacks = []

export function onLoadHtmlSuccess(callback){
    if (!loadHtmlSuccessBallbacks.includes(callback)) {
        loadHtmlSuccessBallbacks.push(callback)
    }
}

function loadIncludes(parent) {
    if (!parent)
        parent = 'body'

    $(parent).find('[wm-include]').each(function(i, e){
        const url = $(e).attr('wm-include');

        $.ajax({
            url: url,
            success: function (data) {
                $(e).html(data)
                $(e).removeAttr('wm-include')

                loadHtmlSuccessBallbacks.forEach(callback => callback(data))
                loadIncludes(e)
            }
        });
    })
}

loadIncludes()