Array.from(document.querySelectorAll('.code')).forEach(function(block) {
    var Prism = require('prismjs');

    require('prismjs/components/prism-bash.min.js');
    require('prismjs/components/prism-yaml.min.js');
    require('prismjs/components/prism-php.min.js');
    require('prismjs/components/prism-jade.min.js');

    require('prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.min.js');

    Prism.plugins.NormalizeWhitespace.setDefaults({
    	'remove-trailing': true,
    	'remove-indent': true,
    	'left-trim': true,
    	'right-trim': true,
    	'indent': 0,
    	'tabs-to-spaces': 4
    });

    var code = block.querySelector('code').innerHTML;
    var language = block.querySelector('code').dataset.language;
    var html = Prism.highlight(code, Prism.languages[language]);
    block.innerHTML = html;
});
