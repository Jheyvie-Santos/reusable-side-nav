import './responsive-files/responsive.js';

$(document).ready(function() {
    // Function to load content based on pageId
    function loadContent(pageId) {
        const filename = pageId + '/' + pageId + '.html';
        const cssFile = 'pages/' + pageId + '/' + pageId + '.css';
        const jsFile = 'pages/' + pageId + '/' + pageId + '.js';
        const filePath = 'pages/' + filename;

        $.get(filePath, function(data) {
            $('.content').html(data);

            // Load CSS content
            $.get(cssFile, function(cssData) {
                $('<style>').html(cssData).appendTo('head');
            });

            // Load JavaScript file
            $.getScript(jsFile);
        });
    }

    // Load default content ('dashboard.html')
    loadContent('dashboard');

    // Click event listener for navigation
    $('.navigations ul li').click(function() {
        const pageId = $(this).attr('id');
        loadContent(pageId);
    });
});
