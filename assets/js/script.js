const sobre = document.querySelector("#about");
const formulario = document.querySelector("#formulario");
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

async function getApiGithub() {
    try{
        const dadosPerfil = await fetch(`https://api.github.com/users/josifermaodev`);
        const perfil = await dadosPerfil.json();

        let conteudo = `

            <img class="about_image" src="${perfil.avatar_url}" alt="Foto do Perfil do Github - ${perfil.name}"/>
            <article id="about_texto" class="flex about_content">
                <h1>Sobre mim</h1>
                <p>
                    Sou Josiane Fermao, venho de uma família de agricultores de origem alemã no Espírito Santo e sou falante nativa de Pomerano. Já fui streamer, mas pausei essa atividade para focar na minha carreira e também quero aprimorar meu inglês. Estou em transição para o desenvolvimento Fullstack com JavaScript, tenho formação em Publicidade e Propaganda e experiência em e-commerce, o que me proporcionou visão estratégica e criatividade. Atualmente, estudo programação de forma autodidata e exploro novas tecnologias para criar aplicações de sucesso, unindo minha experiência em negócios à inovação. 
                </p>
                
                <div id="about_github" class="github_infos">
                    <a class="botao" href="${perfil.html_url}" target="_blank"> Github</a>
                    <p>${perfil.followers} Seguidores</p>
                    <p>${perfil.public_repos} Repositórios</p>
                </div>
            </article>
        
        `;

        sobre.innerHTML += conteudo;

    }catch(error){
        console.error(error);
    }
}

formulario.addEventListener("submit", function(event){
    event.preventDefault();
 
    const campoNome=document.querySelector("#nome");
    const txtNome=document.querySelector("#txtNome")
 
    if(campoNome.value.length<3){
        txtNome.innerHTML="O nome deve ter no mínimo 3 caracteres."
        campoNome.focus();
        return;
    }else{
        txtNome.innerHTML="";
    }
 
    const campoEmail=document.querySelector("#email");
    const txtEmail=document.querySelector("#txtEmail")
 
    if(!campoEmail.value.match(emailRegex)){
        txtEmail.innerHTML="Digite um e-mail válido."
        campoEmail.focus();
        return;
    }else{
        txtEmail.innerHTML="";
    }
 
    const campoAssunto=document.querySelector("#assunto");
    const txtAssunto=document.querySelector("#txtAssunto")
 
    if(campoAssunto.value.length<5){
        txtAssunto.innerHTML="O assunto deve ter no mínimo 5 caracteres."
        campoAssunto.focus();
        return;
    }else{
        txtAssunto.innerHTML="";
    }
 
    formulario.submit();
})

getApiGithub();