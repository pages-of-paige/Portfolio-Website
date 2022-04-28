$('.home').click(function() {
    $('#contactMePage').css('visibility', 'hidden')
    $('#aboutMePage').css('visibility', 'hidden')
    $('#projectsPage').css('visibility', 'hidden')
    $('#mainPage').css('visibility', 'visible')

})

$('.aboutMe').click(function() {
    $('#contactMePage').css('visibility', 'hidden')
    $('#mainPage').css('visibility', 'hidden')
    $('#projectsPage').css('visibility', 'hidden')
    $('#aboutMePage').css('visibility', 'visible')
})

$('.projects').click(function() {
    $('#contactMePage').css('visibility', 'hidden')
    $('#mainPage').css('visibility', 'hidden')
    $('#aboutMePage').css('visibility', 'hidden')
    $('#projectsPage').css('visibility', 'visible')
})

$('.contactMe').click(function() {
    $('#projectsPage').css('visibility', 'hidden')
    $('#mainPage').css('visibility', 'hidden')
    $('#aboutMePage').css('visibility', 'hidden')
    $('#contactMePage').css('visibility', 'visible')
})