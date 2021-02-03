<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210203103750 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE todo (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(30) NOT NULL, customer VARCHAR(255) NOT NULL, company VARCHAR(255) NOT NULL, cpclient VARCHAR(255) NOT NULL, cpcompany VARCHAR(255) NOT NULL, telclient VARCHAR(255) NOT NULL, telcompany VARCHAR(255) NOT NULL, inti1 VARCHAR(255) NOT NULL, montant1 VARCHAR(255) NOT NULL, inti2 VARCHAR(255) NOT NULL, montant2 VARCHAR(255) NOT NULL, montant_total VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE todo');
    }
}
