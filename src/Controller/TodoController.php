<?php

namespace App\Controller;

use App\Entity\Todo;
use App\Repository\TodoRepository;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api/todo", name="api_todo")
 */
class TodoController extends AbstractController
{
    /**
     * @var EntityManagerInterface
     */
    private $entityManager;
    private $todoRepository;


    public function __construct(EntityManagerInterface $entityManager, TodoRepository $todoRepository)
    { 
        $this->entityManager = $entityManager;
        $this->todoRepository = $todoRepository;
    }
    /**
     * @Route("/read", name="api_todo_read", methods={"GET"})
     */

    public function index(): Response
    {
       $todos = $this->todoRepository->findAll();

       $arrayOfTodos = [];

       foreach ($todos as $todo) {
           $arrayOfTodos[] = $todo->toArray();
       }
       return $this->json($arrayOfTodos);
    }

    /**
     * @Route("/create", name="api_todo_create", methods={"POST"})
     * @param Request $request
     * @return JsonResponse
     */
     
    public function create(Request $request)
    {
       $content = json_decode($request->getContent());

       $todo = new Todo();

       $todo->setName($content->name);
       $todo->setCustomer($content->customer);
       $todo->setCompany($content->company);
       $todo->setCpclient($content->cpclient);
       $todo->setCpcompany($content->cpcompany);
       $todo->setTelclient($content->telclient);
       $todo->settelcompany($content->telcompany);
       $todo->setInti1($content->inti1);
       $todo->setMontant1($content->montant1);
       $todo->setInti2($content->inti2);
       $todo->setMontant2($content->montant2);
       $todo->setMontantTotal($content->montantTotal);

       try{
        $this->entityManager->persist($todo);
        $this->entityManager->flush();
       }catch(Exception $exception) {
            return $this->json([
                'message' => ["text" => ["Le devis n'a pu être ajouté"], "level" => "error"]
            ]);
       }
       return $this->json([
        'todo' => $todo ->toArray(),
        'message' => ['text' => ['Le devis à été créé !', 'Devis :' . $content->name], 'level' => 'success']
    ]);
    }

    /**
     * @Route("/update/{id}", name="api_todo_update", methods={"PUT"})
     * @param Request $request
     * @param Todo $todo
     * @return JsonResponse
     */
    
    public function update(Request $request, Todo $todo)
    {
       $content = json_decode($request->getContent());

       $todo->setName($content->name);
       $todo->setCustomer($content->customer);
       $todo->setCompany($content->company);
       $todo->setCpclient($content->cpclient);
       $todo->setCpcompany($content->cpcompany);
       $todo->setTelclient($content->telclient);
       $todo->settelcompany($content->telcompany);
       $todo->setInti1($content->inti1);
       $todo->setMontant1($content->montant1);
       $todo->setInti2($content->inti2);
       $todo->setMontant2($content->montant2);
       $todo->setMontantTotal($content->montantTotal);

       try {
            $this->entityManager->flush();
       }catch(Exception $exception){
           //erreurmsg
       }

       return $this->json([
            'message' => 'Le devis à été mis à jour'
       ]);
    }

    /**
     * @Route("/delete/{id}", name="api_todo_delete", methods={"DELETE"})
     * @param Todo $todo
     * @return JsonResponse
     */
     
    public function delete(Todo $todo)
    {
       try{
        $this->entityManager->remove($todo);
        $this->entityManager->flush();
        
       }catch(Exception $exception) {
            //erreurmsg
       }

       return $this->json([
        'message' => 'Le devis à été supprimer',
    ]);
    }
}
