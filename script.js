document.getElementById("form-adesao").addEventListener("submit", function(event) {
  event.preventDefault(); // Evitar envio padrão do formulário
  
  const nome = document.getElementById("nome").value;
  const morada = document.getElementById("morada").value;
  const telefone = document.getElementById("telefone").value;
  const email = document.getElementById("email").value;

  const mensagem = `Nome: ${nome}%0AMorada: ${morada}%0ATelefone: ${telefone}%0AEmail: ${email}`;
  const whatsappURL = `https://wa.me/351968677320?text=${mensagem}`;
  
  window.open(whatsappURL, "_blank");
});
