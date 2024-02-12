module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/styles/style.css");
    eleventyConfig.addPassthroughCopy({"src/images":"images"});
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