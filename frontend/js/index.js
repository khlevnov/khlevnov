var Prism = require('prismjs');
require('prismjs/components/prism-bash.min.js');
require('prismjs/components/prism-yaml.min.js');
require('prismjs/components/prism-php.min.js');
require('prismjs/components/prism-jade.min.js');
require('prismjs/plugins/line-numbers/prism-line-numbers.min.js');

Array.from(document.querySelectorAll('.code')).forEach(function(block) {
    var code = block.querySelector('code').innerHTML;
    var language = block.querySelector('code').dataset.language;
    var html = Prism.highlight(code, Prism.languages[language]);

    block.innerHTML = html;
});
