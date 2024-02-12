module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/styles/style.css");
    eleventyConfig.addPassthroughCopy({"src/images":"images"});
    eleventyConfig.addHandlebarsShortcode("myShortcode", function() {
        // Available in 0.11.0 and above
        console.log( this.page );
        console.log( this.data );
    
        // For example:
        console.log( this.page.url );
        console.log( this.page.inputPath );
        console.log( this.page.fileSlug );
      });
    // Set custom directories for input, output, includes, and data
    return {
      dir: {
        input: "src",
        includes: "_includes",
        data: "_data",
        output: "_site"
      }
    };
  };