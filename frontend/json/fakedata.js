module.exports = {
    "articles": [
        {
            "title": "Интеграция Pug в Symfony, часть 1",
            "text": "\
<p>В этом цикле статей пойдет речь об одном из самых удобных шаблонизаторов — Pug (бывший Jade). Этот шаблонизатор родной для своей среды — node.js, однако его можно прикрутить и в качестве основного шаблонизатора Symfony. В этой статье об этом и пойдет речь.<br />Во второй части мы рассмотрим вопрос использования шаблонов для верстки, а также их унификацию и наполнение рыбными данными.</p>\n\
<p>Для начала установим нужный пакет pug-php/pug-symfony с помощью composer:</p>\n\
<pre class=\"code language-bash\"><code data-language=\"bash\">composer require pug-php/pug-symfony</code></pre>\n\
<p>В файле app/config/services.yml подключим новый движок шаблонов</p>\n\
<pre class=\"code language-yaml\"><code data-language=\"yaml\">services:\n\
    templating.engine.pug:\n\
        class: Pug\\PugSymfonyEngine\n\
        arguments: [\"@kernel\", \"@templating.helper.assets\", \"@templating.helper.router\"]</code></pre>\n\
<p>Добавим новое расширение .pug в секцию templating файла app/config/config.yml</p>\n\
<pre class=\"code language-yaml\"><code data-language=\"yaml\">templating:\n\
    engines: ['pug', 'twig', 'php']</code></pre>\n\
<p>Сделаем новый вид, создав новый файл с раширением pug в директории <b>app/Resources/views</b> со следующим содержимым:</p>\n\
<pre class=\"code language-jade\"><code data-language=\"jade\">h1\n\
  | Hello\n\
  =name</code></pre>\n\
<p>Создадим новый контроллер для отображения этого шаблона</p>\n\
<pre class=\"code language-php\"><code data-language=\"php\">/**\n\
 * @Route(\"/contact\")\n\
 */\n\
public function contactAction()\n\
{\n\
    return $this-&gt;render('contact/contact.html.pug', [\n\
        'name' =&gt; 'Bob',\n\
    ]);\n\
}</code></pre>\n\
"
        },
        {
            "title": "Еще одна статья",
            "text": "<p>Текст второй статьи</p>"
        }
    ]
}
