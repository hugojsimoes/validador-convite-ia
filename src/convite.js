// Gerado com o prompt: "Crie uma função em JavaScript que valide convites para uma plataforma de colaboração.
// A função deve verificar se o e-mail é válido, se o domínio está em uma lista permitida
// e se ainda há convites disponíveis. Retorne um objeto com autorizado e mensagem."

function validarConvite(email, dominiosPermitidos, convitesDisponiveis) {
  if (!email || typeof email !== "string") {
    return {
      autorizado: false,
      mensagem: "E-mail inválido."
    };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {
      autorizado: false,
      mensagem: "Formato de e-mail inválido."
    };
  }

  const dominio = email.split("@")[1].toLowerCase();

  if (!dominiosPermitidos.includes(dominio)) {
    return {
      autorizado: false,
      mensagem: "Domínio de e-mail não permitido."
    };
  }

  if (convitesDisponiveis <= 0) {
    return {
      autorizado: false,
      mensagem: "Não há convites disponíveis."
    };
  }

  return {
    autorizado: true,
    mensagem: "Convite autorizado."
  };
}

module.exports = { validarConvite };
