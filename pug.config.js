require('dotenv/config');

const markdownIt = require('markdown-it');

module.exports = {
  basedir: 'src',
  filters: {
    markdown: (text, _options) => (
      markdownIt({
        linkify: true,
        breaks: true,
        html: true,
        typographer: true,
      }).render(text)
    ),
  },
};
