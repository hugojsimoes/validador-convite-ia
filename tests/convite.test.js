const { validarConvite } = require("../src/convite");

describe("validarConvite", () => {
  const dominiosPermitidos = ["empresa.com", "parceiro.com"];

  test("deve autorizar convite para e-mail válido, domínio permitido e convites disponíveis", () => {
    const resultado = validarConvite("user@empresa.com", dominiosPermitidos, 3);

    expect(resultado).toEqual({
      autorizado: true,
      mensagem: "Convite autorizado."
    });
  });

  test("deve recusar quando o e-mail estiver vazio", () => {
    const resultado = validarConvite("", dominiosPermitidos, 3);

    expect(resultado).toEqual({
      autorizado: false,
      mensagem: "E-mail inválido."
    });
  });

  test("deve recusar quando o formato do e-mail for inválido", () => {
    const resultado = validarConvite("email-invalido", dominiosPermitidos, 3);

    expect(resultado).toEqual({
      autorizado: false,
      mensagem: "Formato de e-mail inválido."
    });
  });

  test("deve recusar quando o domínio não for permitido", () => {
    const resultado = validarConvite("user@gmail.com", dominiosPermitidos, 3);

    expect(resultado).toEqual({
      autorizado: false,
      mensagem: "Domínio de e-mail não permitido."
    });
  });

  test("deve recusar quando não houver convites disponíveis", () => {
    const resultado = validarConvite("user@empresa.com", dominiosPermitidos, 0);

    expect(resultado).toEqual({
      autorizado: false,
      mensagem: "Não há convites disponíveis."
    });
  });
});
