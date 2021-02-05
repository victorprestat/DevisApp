<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Dompdf\Dompdf;
use Dompdf\Options;

class PdfCreatorController extends AbstractController
{
    #[Route('/pdf', name: 'pdf_creator')]
    public function generate_pdf(){

        
    
        $options = new Options();
        $options->set('defaultFont', 'Roboto');
        
       
        $dompdf = new Dompdf($options);
        
        $data = array(
          'headline' => 'my headline'
        );
        $html = $this->renderView('pdf_creator/index.html.twig', [
            'headline' => "Mes devis"
        ]);
        
       
        $dompdf->loadHtml($html);
        $dompdf->setPaper('A4', 'portrait');
        $dompdf->render();
        $dompdf->stream("mesdevis.pdf", [
            "Attachment" => true
        ]);
        return new Response("Le fichier à été téléchargé");
    }
}
