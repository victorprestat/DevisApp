<?php

namespace App\Entity;

use App\Repository\TodoRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=TodoRepository::class)
 */
class Todo
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $customer;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $company;

    /**
     * @ORM\Column(type="integer")
     */
    private $cpclient;

    /**
     * @ORM\Column(type="integer")
     */
    private $cpcompany;

    /**
     * @ORM\Column(type="integer")
     */
    private $telclient;

    /**
     * @ORM\Column(type="integer")
     */
    private $telcompany;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $inti1;

    /**
     * @ORM\Column(type="integer")
     */
    private $montant1;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $inti2;

    /**
     * @ORM\Column(type="integer")
     */
    private $montant2;

    /**
     * @ORM\Column(type="integer")
     */
    private $montantTotal;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getCustomer(): ?string
    {
        return $this->customer;
    }

    public function setCustomer(string $customer): self
    {
        $this->customer = $customer;

        return $this;
    }

    public function getCompany(): ?string
    {
        return $this->company;
    }

    public function setCompany(string $company): self
    {
        $this->company = $company;

        return $this;
    }

    public function getCpclient(): ?int
    {
        return $this->cpclient;
    }

    public function setCpclient(int $cpclient): self
    {
        $this->cpclient = $cpclient;

        return $this;
    }

    public function getCpcompany(): ?int
    {
        return $this->cpcompany;
    }

    public function setCpcompany(int $cpcompany): self
    {
        $this->cpcompany = $cpcompany;

        return $this;
    }

    public function getTelclient(): ?int
    {
        return $this->telclient;
    }

    public function setTelclient(int $telclient): self
    {
        $this->telclient = $telclient;

        return $this;
    }

    public function getTelcompany(): ?int
    {
        return $this->telcompany;
    }

    public function setTelcompany(int $telcompany): self
    {
        $this->telcompany = $telcompany;

        return $this;
    }

    public function getInti1(): ?string
    {
        return $this->inti1;
    }

    public function setInti1(string $inti1): self
    {
        $this->inti1 = $inti1;

        return $this;
    }

    public function getMontant1(): ?int
    {
        return $this->montant1;
    }

    public function setMontant1(int $montant1): self
    {
        $this->montant1 = $montant1;

        return $this;
    }

    public function getInti2(): ?string
    {
        return $this->inti2;
    }

    public function setInti2(string $inti2): self
    {
        $this->inti2 = $inti2;

        return $this;
    }

    public function getMontant2(): ?int
    {
        return $this->montant2;
    }

    public function setMontant2(int $montant2): self
    {
        $this->montant2 = $montant2;

        return $this;
    }

    public function getMontantTotal(): ?int
    {
        return $this->montantTotal;
    }

    public function setMontantTotal(int $montantTotal): self
    {
        $this->montantTotal = $montantTotal;

        return $this;
    }

    public function toArray()
    {
        return ['id' => $this->id, 'name' => $this->name, 'customer' => $this->customer, 'company' => $this->company, 'cpclient' => $this->cpclient, 'cpcompany' => $this->cpcompany, 'telclient' => $this->telclient, 'telcompany' => $this->telcompany, 'inti1' => $this->inti1, 'montant1' => $this->montant1, 'inti2' => $this->inti2, 'montant2' => $this->montant2, 'montantTotal' => $this->montantTotal];
    }
}
