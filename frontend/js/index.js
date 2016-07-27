//require('core-js/fn/array/from');

var Prism = require('prismjs');
Array.from(document.querySelectorAll('.code')).forEach(function(block) {
    var code = block.innerHTML;
    var language = block.querySelector('code').dataset.language;
    var html = Prism.highlight(code, Prism.languages.javascript);

    block.innerHTML = html;
});
