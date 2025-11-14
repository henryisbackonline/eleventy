module.exports = function(eleventyConfig) {
    return {
        dir: {
            input: 'src',
            includes: '_assets',
            output: '_site',
        },
        templateFormats: ['md', 'njk', 'html'],
        markdownTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
    };
}