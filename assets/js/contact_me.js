
$(document).ready(function() {
    $('#contactForm').submit(function() {
        window.open('', 'formpopup', 'width=400,height=400,resizeable,scrollbars');
        this.target = 'formpopup';
    });
});
