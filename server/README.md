# Conversor de imagem em texto
Um simples backend de uma aplicação de conversão de imagens em textos.


# Recursos da aplicação
|Rota                 |Método HTTP|Parâmetros Body| Parâmetros Header |
|---------------------|-----------|---------------|-------------------|
|http://localhost:3333/process|POST       |{image: Imagem , language: string}| Nenhum

# Como executar esse projeto

Execute o sevidor
<pre>yarn dev</pre>

# Como teste a aplicação

Instale o [Insomnia](https://insomnia.rest/) em seu computador

Entre na pasta Insomnia e importe o arquivo "conversor.json"
