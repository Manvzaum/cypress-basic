cypress-basic
Projeto de apredizado que contem todos os exercicios contruídos ao decorrer do curso.

Pré-requisitos

É necessário ter instalado na máquina o Node.js e npm para executar o projeto.

Na construção do projeto foi utilizado as versões v16.13.2 and 8.1.2 of Node.js and npm, respectivamente.

Instalação
Executo o comando npm install para baixar todas as dependencias.

Testes
Nota: arquivos que usaram credenciais foram configurados no arquivo .gitignore para que fique mascarado esses dados sensiveis no momento de deploy.

Para executar os teste use o cy:open para abrir a interface do cypress, para o modo headless use o comando cy:open:headless e também foi configurado comandos para executar no modo viewport simulando dispositivos mobile, use cy:open:mobile para abrir a interface do cypress simulando o mobile com resolução 410*860 e no modo headless cy:open:headless:mobile.

Esse projeto foi criado por Manuela Bole 💚