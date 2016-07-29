<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\ORM\Query;

class DefaultController extends Controller
{
    /**
     * @Route("/", name="index")
     */
    public function indexAction(Request $request)
    {
        return $this->render('default/index.html.pug');
    }

    /**
     * Blog list.
     *
     * @Route("/blog", name="blog")
     */
    public function blogAction()
    {
        $em = $this->getDoctrine()->getManager();

        $articles = $em->getRepository('AppBundle:Article')->findAll(Query::HYDRATE_ARRAY);

        return $this->render('blog/index.pug', [
            'articles' => $articles,
        ]);
    }

    /**
     * Part of page.
     *
     * @Route("/widget", name="widget")
     */
    public function widgetAction()
    {
        return $this->render('widget.pug');
    }
}
