$(document).ready(function () {
    $('a.abstract').click(function () {
        $(this).parent().parent().parent().find(".abstract.hidden").toggleClass('open');
    });
    $('a.bibtex').click(function () {
        $(this).parent().parent().parent().find(".bibtex.hidden").toggleClass('open');
    });

    $('a.copybutton').click(function (event) {
        var buttonid = event.target.id;
        var range = document.createRange();
        var padid = "copy-";
        var newid = padid.concat(buttonid);

        var range = document.createRange();
        range.selectNode(document.getElementById(newid));
        window.getSelection().addRange(range);
        document.execCommand("copy");
        window.getSelection().removeAllRanges();// to deselect
    });
});
