create database cantina;

use cantina;

create table cliente(
    idCli int primary key auto_increment not null,
    nome varchar(20) not null,
    pagamento varchar(20) not null
);

create table fornecedor(
    idForn int primary key auto_increment not null,
    nome varchar(20) not null,
    cnpj int(14) not null unique,
    email varchar(20) not null unique
);

CREATE TABLE telefone(
    idTel int primary key auto_increment not null,
    numero int(11) not null unique,
    idCli INT(11) not null,
    idForn INT(11) not null,
    FOREIGN KEY (idForn) REFERENCES fornecedor(idForn),
    FOREIGN KEY (idCli) REFERENCES cliente(idCli)

);

CREATE TABLE produtos(
    idProd int primary key auto_increment not null,
    descricao VARCHAR(30),
    preco FLOAT(10,5) NOT NULL,
    nome varchar(20) not null,
    validade date NOT NULL,
    idForn INT NOT NULL,
    FOREIGN KEY (idForn) REFERENCES fornecedor(idForn)
);

CREATE TABLE pedidos(
    IdPed int primary key auto_increment not null,
    idCli INT(11) not null,
    idProd INT(11) not null,
    idTel INT (11) NOT NULL,
    datalancamento date not null,
    total FLOAT (10,5) NOT NULL,
    FOREIGN KEY (idCli) REFERENCES cliente(idCli),
    FOREIGN KEY (idProd) REFERENCES produtos(idProd),
    FOREIGN KEY (idTel) REFERENCES telefone(idTel)
);