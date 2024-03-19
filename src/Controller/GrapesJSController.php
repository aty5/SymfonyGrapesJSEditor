<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class GrapesJSController extends AbstractController
{
    #[Route('/grapesjs', name: 'app_grapes_js')]
    public function index(): Response
    {
        return $this->render('grapes_js/index.html.twig', [
            'controller_name' => 'GrapesJSController',
        ]);
    }
}
