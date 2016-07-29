<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

use Doctrine\ORM\Query;
use AppBundle\Entity\Article;

class DefaultController extends Controller
{
    /**
     * @Route("/", name="index")
     */
    public function indexAction(Request $request)
    {
        return $this->render('default/index.pug');
    }

    /**
     * Articles list.
     *
     * @Route("/articles", name="articles")
     */
    public function showArticlesListAction()
    {
        $em = $this->getDoctrine()->getManager();

        $articles = $em->getRepository('AppBundle:Article')->findAll(Query::HYDRATE_ARRAY);

        return $this->render('article/index.pug', [
            'articles' => $articles,
        ]);
    }

    /**
     * Show Article entity.
     *
     * @Route("/articles/{id}", name="article")
     */
    public function showArticleAction(Article $article)
    {
        return $this->render('article/article.pug', [
            'article' => $article,
        ]);
    }
}
