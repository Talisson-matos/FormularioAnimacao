document.addEventListener("DOMContentLoaded", function() {
    const videos = document.querySelectorAll(".video-de-fundo");
    let currentVideo = 0;

    function switchVideo() {
        videos[currentVideo].style.opacity = 0;
        currentVideo = (currentVideo + 1) % videos.length;
        videos[currentVideo].style.opacity = 1;
    }

    // Inicia com o primeiro vídeo visível
    videos[currentVideo].style.opacity = 1;

    setInterval(switchVideo, 11000); // Troca a cada 3 segundos
});

document.getElementById("registration-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o comportamento padrão de envio do formulário

    // Captura os valores dos campos do formulário
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const nascimento = document.getElementById("nascimento").value;
    const cpf = document.getElementById("cpf").value;
    const phone = document.getElementById("phone").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;

    // Verifica se os campos estão preenchidos corretamente (opcional)
    if (!firstName || !lastName || !email || !senha || !nascimento || !cpf || !phone || !gender) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Salva os dados no localStorage
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("email", email);
    localStorage.setItem("senha", senha);
    localStorage.setItem("nascimento", nascimento);
    localStorage.setItem("cpf", cpf);
    localStorage.setItem("phone", phone);
    localStorage.setItem("gender", gender);

    // Redireciona para a página do "banco de dados"
    window.location.href = "bancoDeDados.html";
});

