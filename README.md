## runner-docker

### O que é este projeto?
Node.js Docker Desktop Manager

#Monitors Docker containers.
#Automatically starts Docker Desktop.
#Allows forced shutdown.

### Pré-requisitos
* **Node.js e npm (ou yarn):** Certifique-se de ter o Node.js e npm (ou yarn) instalados em sua máquina. Você pode baixá-los em https://nodejs.org/.
* **TypeScript:** Certifique-se de ter o TypeScript instalado globalmente. Execute `npm install -g typescript` para instalá-lo.

### Como rodar o projeto

#### Desenvolvimento
1. **Clone o repositório:**
   ```bash
   git clone https://github.com/Tgiott/docker-initialize-cmd.git

2. **Instale Typescript global ou localmente, e instale os pacotes necessarios:**
   ```bash
   npm i -g Typescript && npm i
   
3. **Rode o Build  e execute :**
   ```bash
     npm run build && npm run start:prod


4. **Set variavel de ambiente:**
   ```bash
    set PATH=%PATH%;C:\your\new\path

5. ** Crie um .bat para executar o npm command **
   ```
     @echo off   
     cd /d "%~dp0"  // Move para o diretorio do .bat
     npm run start --silent // silencia saidas do npm
     popd   // retorna ao diretorio de origem

É só um quebra-galho, entao tem varios modos melhores de fazer isso, mas foi o que resolveu na hora. Enjoy hehe!
