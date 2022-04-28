$('.home').click(function() {
    $('#contactMePage').css('visibility', 'hidden')
    $('#aboutMePage').css('visibility', 'hidden')
    $('#projectsPage').css('visibility', 'hidden')
    $('#mainPage').css('visibility', 'visible')

})

$('.aboutMe, #aboutMe img').click(function() {
    $('#contactMePage').css('visibility', 'hidden')
    $('#mainPage').css('visibility', 'hidden')
    $('#projectsPage').css('visibility', 'hidden')
    $('#aboutMePage').css('visibility', 'visible')
})

$('.projects, #projects img').click(function() {
    $('#contactMePage').css('visibility', 'hidden')
    $('#mainPage').css('visibility', 'hidden')
    $('#aboutMePage').css('visibility', 'hidden')
    $('#projectsPage').css('visibility', 'visible')
})

$('.contactMe, #contactMe img').click(function() {
    $('#projectsPage').css('visibility', 'hidden')
    $('#mainPage').css('visibility', 'hidden')
    $('#aboutMePage').css('visibility', 'hidden')
    $('#contactMePage').css('visibility', 'visible')
})