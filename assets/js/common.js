$(document).ready(function () {
    $('a.abstract').click(function () {
        $(this).parent().parent().find(".abstract.hidden").toggleClass('open');
    });
    $('a.bibtex').click(function () {
        $(this).parent().parent().find(".bibtex.hidden").toggleClass('open');
    });
    $('.navbar-nav').find('a').removeClass('waves-effect waves-light');
    $('div.card-project').click(function () {
        $(this).find(".hidden").toggleClass('open');
    });
    $('button.datasetbutton').click(function () {
        $(this).parent().parent().find(".hidden").toggleClass('open');
    });
    $('#download').on('click', function (evt) {
        evt.preventDefault(); //don't submit the form, which a button naturally does
        if (confirm('The database is very large! Are you sure you want to continue?"'))
            location.href = 'https://ioannismavromatis.com/dataset'; //redirect only on confirm
    });
});
