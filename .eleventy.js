export default async function(eleventyConfig) {
    //Pass images through to _site
    eleventyConfig.addPassthroughCopy("src/img")

    //Copy theme folder to _site/theme
    eleventyConfig.addPassthroughCopy("theme")

    return {
        dir: {
            input: "src",
            includes: "_includes",
            output: "_site",
        },
        templateFormats: ["md", "njk", "html"],
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk",
    };
}