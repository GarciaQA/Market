$('.product').on('click', function(e){
    e.preventDefault();
    $('#modal-details .modal-body *').remove();
    $(this).clone().appendTo("#modal-details .modal-body");
    $('#modal-details').modal('show');
});