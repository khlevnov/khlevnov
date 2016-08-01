Array.from(document.querySelectorAll('.code')).forEach(function(block) {
    let code = block.querySelector('code'),
        codeContent = code.textContent,
        language = block.dataset.language,
        languages = [
            'bash',
            'yaml',
            'php',
            'jade'
        ];

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

        // Require plugins
        require('prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js');
        Prism.plugins.NormalizeWhitespace.setDefaults(normalizeWhitespaceConfig);

        // Require languages
        languages.forEach(function(language) {
            require.context(
                'prismjs/components/',
                false,
                /prism-(bash|yaml|php|jade)\.min\.js/
            )('prismjs/components/' + language + '.js');
        });

        highlightedCode = Prism.highlight(codeContent, Prism.languages[language])
        code.innerHTML = highlightedCode;
    });
});
