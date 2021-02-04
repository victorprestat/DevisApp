<?php

namespace App\Form;

use App\Entity\Todo;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\TelType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\Type;
use Symfony\Component\Validator\Constraints\NotBlank;

class TodoType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name', TextType::class, [
                'constraints' => [
                    new NotBlank(['message' => 'Votre intitulé de devis ne peut pas être vide.']),
                    new Type(['type' => 'string' , 'message' => 'Doit etre du texte']),
                    new Length([
                        'min' => 1,
                        'max' => 20,

                        'minMessage' => 'Entrez un intitulé complet',
                        'maxMessage' => 'Votre intitulé{{ value }} comporte trop de caractères, vous ne pouvez pas en rentrer plus de {{ limit }}',
                    ])
                ]
            ])
            ->add('customer', TextAreaType::class, [
                'constraints' => [
                    new NotBlank(['message' => 'Vous devez rentrer un client.'])
                ]
            ])
            ->add('company', TextAreaType::class, [
                'constraints' => [
                    new NotBlank(['message' => 'Vous devez rentrer une société.'])
                ]
            ])
            ->add('cpclient', TextAreaType::class, [
                'constraints' => [
                    new Type(['digit', 'message' => 'Vous devez rentrer un code postal valide.'])
                ]
            ])
            ->add('cpcompany', TextAreaType::class, [
                'constraints' => [
                    new Type(['digit', 'message' => 'Vous devez rentrer un code postal valide.'])
                ]
            ])
            ->add('telclient', TelType::class, [
                'constraints' => [
                    new NotBlank(['message' => 'Vous devez rentrer un numéro de téléphone valide.'])
                ]
            ])
            ->add('telcompany', TelType::class, [
                'constraints' => [
                    new NotBlank(['message' => 'Vous devez rentrer un numéro de téléphone valide.'])
                ]
            ])
            ->add('inti1', TextAreaType::class, [
                'constraints' => [
                    new NotBlank(['message' => 'Vous devez rentrer un premier intitulé.'])
                ]
            ])
            ->add('montant1', TextAreaType::class, [
                'constraints' => [
                    new Type(['digit', 'message' => 'Vous devez rentrer un montant valide.'])
                ]
            ])
            ->add('inti2', TextAreaType::class, [
                'constraints' => [
                    new NotBlank(['message' => 'Vous devez rentrer un second intitulé.'])
                ]
            ])
            ->add('montant2', TextAreaType::class, [
                'constraints' => [
                    new Type(['digit', 'message' => 'Vous devez rentrer un montant valide.'])
                ]
            ])
            ->add('montantTotal', TextAreaType::class, [
                'constraints' => [
                    new Type(['digit', 'message' => 'Vous devez rentrer un montant valide.'])
                ]
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Todo::class,
            'csrf_protection' => false,
        ]);
    }
}
