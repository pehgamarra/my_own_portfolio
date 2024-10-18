console.log("Certificate popup script loaded");

$(document).ready(function() {
    let currentImageIndex = 0;
    let images = [];

    $('.certificate-card').on('click', function() {
        images = $(this).data('images').split('|');
        var skills = $(this).data('skills');
        
        currentImageIndex = 0;
        updateModalImage();
        
        var skillsList = $('#certificateSkills');
        skillsList.empty();
        
        if (typeof skills === 'string') {
            skills = skills.split(',').map(function(item) {
                return item.trim();
            });
        }
        
        if (Array.isArray(skills)) {
            skills.forEach(function(skill) {
                skillsList.append('<li>' + skill + '</li>');
            });
        }
        
        $('#certificateModal').modal('show');
    });

    function updateModalImage() {
        $('#modalImage').attr('src', images[currentImageIndex]);
        updateNavigationButtons();
    }

    function updateNavigationButtons() {
        $('#prevCertificate').prop('disabled', currentImageIndex === 0);
        $('#nextCertificate').prop('disabled', currentImageIndex === images.length - 1);
    }

    $('#prevCertificate').on('click', function() {
        if (currentImageIndex > 0) {
            currentImageIndex--;
            updateModalImage();
        }
    });

    $('#nextCertificate').on('click', function() {
        if (currentImageIndex < images.length - 1) {
            currentImageIndex++;
            updateModalImage();
        }
    });

    $('#certificateModal').on('hidden.bs.modal', function () {
        $('body').removeClass('modal-open');
        $('.modal-backdrop').remove();
    });
});
