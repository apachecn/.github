// icons.js
// ====================================================================
// This file should not be included in your project.
// This is just a sample how to initialize plugins or components.
//
// - ThemeOn.net -


 $(document).ready(function() {
    jQuery.fn.selectText = function(){

        this.find('input').each(function() {
            if($(this).prev().length == 0 || !$(this).prev().hasClass('p_copy')) {
                $('<p class="p_copy" style="position: absolute; z-index: -1;"></p>').insertBefore($(this));
            }
            $(this).prev().html($(this).val());
        });

        var doc = document;
        var element = this[0];
        if (doc.body.createTextRange) {
            var range = document.body.createTextRange();
            range.moveToElementText(element);
            range.select();
        } else if (window.getSelection) {
            var selection = window.getSelection();
            var range = document.createRange();
            range.selectNodeContents(element);
            selection.removeAllRanges();
            selection.addRange(range);
        }
    };

    $('.demo-icon, .demo-prem-icon-list p').on('click',function(e){
        $(this).children('span').not('.text-muted').selectText();
    })
 });
