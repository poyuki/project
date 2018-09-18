// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


$('[data-toggle="datepicker"]').datepicker({
});

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
