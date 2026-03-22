/* Script para validação do formulário de contato
   Objetivo: Verificar campos vazios e formato de e-mail
*/

// 1. Selecionamos o formulário pelo ID que criamos no HTML
const form = document.getElementById('formContato');

// 2. Adicionamos um "ouvinte" para o evento de envio (submit)
form.addEventListener('submit', function(event) {
    
    // Impede o formulário de recarregar a página (comportamento padrão)
    event.preventDefault();

    // 3. Pegamos os valores dos campos
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    // 4. Lógica de Validação Simples
    if (nome === "" || email === "" || mensagem === "") {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
    }

    // 5. Validação de formato de e-mail (usando Expressão Regular)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Por favor, insira um e-mail válido.");
        return;
    }

    // 6. Simulação de envio com sucesso
    alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`);

    // Limpa o formulário após o "envio"
    form.reset();
});