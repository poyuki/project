// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function openModal() {
    let modal=$('#modal');
    $('#overlay').show();
    modal.css({
        'display':'flex',
        'margin-top':`-${modal.height()/2}px`,
        'margin-left':`-${modal.width()/2}px`,
    });
    
}
function hideModal() {
    $('#overlay').hide();
    $('#modal').hide();
}

function submitModal() {
    let val=($('#modal-body input').val()).trim(),html,
        id=$('form div:last')[0].id,idVal=id===''?0:parseInt(id);
    if (val!==''){
        html = `<div id="${idVal++}" class="params"><label for="pram-name-${idVal++}">${val}</label><input id="pram-name-${idVal++}">
                <i class="fas fa-minus" onclick="deleteParam(event)"></i></div>`;
        $('form i.fa-plus').before(html);
    }
    hideModal()
}
function deleteParam(ev) {
    let el=$(ev.currentTarget).closest('div');
    el.remove()
}

function submitForm(ev) {
    ev.preventDefault();
    let data={
        eventName:$('#event-name').val(),
        eventDate:$('#event-date').val(),
        eventTime:$('#event-time').val(),
        params:getParams()
    };

    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "SubmiteEvent",
        dataType: "json",
        data: JSON.stringify(data),
        success: function (response) {
            let message=$('#message');
            if (response === 'success') {
                message.addClass('success');
                message.show();
                message.html('<p>Мероприятеи успешнодобавленно! <a href="/">К расписанию</a></p>');
            }else {
                message.addClass('error');
                message.show();
                message.html('<p>При добавлении мероприятия произошла ошибка!&nbsp;<i class="fas fa-times" aria-hidden="true"></i></p>');
            }
        }
    });
    
    
    return false
}

function getParams() {
    let params=$('.params'),res=``;
    params.each((i,el)=>{
        let elem=$(el);
        if ((elem.children('input')).val() !== '') {
            res+=`${(elem.children('label')).text()}:${(elem.children('input')).val()};`
        }
    });
}