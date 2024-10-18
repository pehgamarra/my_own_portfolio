document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.certificate-card').forEach(item => {
        item.addEventListener('click', function () {
            var imgSrc = this.getAttribute('data-image');
            var modalImage = document.getElementById('modalImage');
            if (modalImage) {
                modalImage.src = imgSrc;
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
$('#projectModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget);
    var videoSrc = button.data('video');
    var modal = $(this);
    modal.find('#projectVideo').attr('src', videoSrc);
});
$('#projectModal').on('hidden.bs.modal', function () {
    var modal = $(this);
    modal.find('#projectVideo').attr('src', '');
});
});