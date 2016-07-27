module.exports = {
    "articles": [
        {
            "title": "Интеграция Pug в Symfony, часть 1",
            "text": "\
<p>В этом цикле статей пойдет речь об одном из самых удобных шаблонизаторов — Pug (бывший Jade). Этот шаблонизатор родной для своей среды — node.js, однако его можно прикрутить и в качестве основного шаблонизатора Symfony. В этой статье об этом и пойдет речь.<br />Во второй части мы рассмотрим вопрос использования шаблонов для верстки, а также их унификацию и наполнение рыбными данными.</p>\n\
<p>Для начала установим нужный пакет pug-php/pug-symfony с помощью composer:</p>\n\
<pre class=\"code\">\n\
    <code data-language=\"bash\">\n\
composer require pug-php/pug-symfony\n\
    </code>\n\
</pre>\n\
<p>В файле app/config/services.yml подключим новый движок шаблонов</p>\n\
<pre class=\"code\">\n\
    <code data-language=\"yaml\">\n\
services:\n\
    templating.engine.pug:\n\
        class: Pug\\PugSymfonyEngine\n\
        arguments: [\"@kernel\", \"@templating.helper.assets\", \"@templating.helper.router\"]\n\
    </code>\n\
</pre>\n\
<p>Добавим новое расширение .pug в секцию templating файла app/config/config.yml</p>\n\
<pre class=\"code\">\n\
    <code data-language=\"yaml\">\n\
templating:\n\
    engines: ['pug', 'twig', 'php']\n\
    </code>\n\
</pre>\n\
"
        },
        {
            "title": "Еще одна статья",
            "text": "<p>Текст второй статьи</p>"
        }
    ]
}
