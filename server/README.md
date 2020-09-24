# Conversor de imagem em texto
Um backend simplificado de um conversor de imagem em texto.


#Recursos da aplicação
|Rota|Método HTTP|Parâmetros Body| Parâmetros Header |
|-|-|-|-|-|
|http://localhost:3333|POST|{image: Imagem , language: string}| Nenhum

# Como executar esse projeto
Clone este repositório
<pre>git clone https://github.com/MiguelBragaGarcia/Image-to-Text-Converter.git</pre>
Instale todas as dendências do projeto
<pre>yarn install</pre>

Execute o sevidor
<pre>yarn dev</pre>

# Como teste a aplicação

Instale o [Insomnia](https://insomnia.rest/) em seu computador

Entre na pasta Insomnia e importe o arquivo "conversor.json"
