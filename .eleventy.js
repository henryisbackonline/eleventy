export default async function(eleventyConfig) {
    //Pass images through to _site
    eleventyConfig.addPassthroughCopy("src/img")

    //Copy theme folder to _site/theme
    eleventyConfig.addPassthroughCopy("theme")

    //Alias the layout themes to make my markdown frontmatter more readable
    eleventyConfig.addLayoutAlias("base", "_layouts/base.liquid")
    // eleventyConfig.addLayoutAlias("post", "_layouts/post.liquid") // don't have one of these yet, but I will soon

    return {
        dir: {
            input: "src",
            includes: "_includes",
            layouts: "_layouts",
            output: "_site",
        },
        templateFormats: ["md", "njk", "html"],
        markdownTemplateEngine: ["njk", "liquid"],
        htmlTemplateEngine: ["njk", "liquid"],
        dataTemplateEngine: ["njk", "liquid"] //add liquid template - i may switch to this only later
    };
}