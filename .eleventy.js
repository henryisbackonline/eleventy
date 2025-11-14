module.exports = function(eleventyConfig) {
    return {
        dir: {
            input: 'src',
            includes: '_includes',
            layouts: '_includes/layouts',
            output: '_site',
        },
        templateFormats: ['md', 'njk', 'html'],
        markdownTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
    };
}