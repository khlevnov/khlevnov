Array.from(document.querySelectorAll('.code')).forEach(function(block) {
    let code = block.querySelector('code'),
        codeContent = code.textContent,
        language = block.dataset.language;

    require.ensure([], function(require) {
        // Require core
        let Prism = require('prismjs'),
            normalizeWhitespaceConfig = {
            	'remove-trailing': true,
            	'remove-indent': true,
            	'left-trim': true,
            	'right-trim': true,
            	'indent': 0
            },
            highlightedCode;

        // Require languages
        require('prismjs/components/prism-bash.min.js');
        require('prismjs/components/prism-yaml.min.js');
        require('prismjs/components/prism-php.min.js');
        require('prismjs/components/prism-jade.min.js');

        // Require plugins
        require('prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js');
        Prism.plugins.NormalizeWhitespace.setDefaults(normalizeWhitespaceConfig);

        highlightedCode = Prism.highlight(codeContent, Prism.languages[language])
        code.innerHTML = highlightedCode;
    });
});
