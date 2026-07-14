# Validador de Convite com IA
![CI](https://github.com/hugojsimoes/validador-convite-ia/actions/workflows/ci.yml/badge.svg)

Projeto acadêmico desenvolvido para demonstrar como o GitHub Copilot pode acelerar a criação de código e testes, enquanto o GitHub Actions automatiza a execução dos testes no processo de CI/CD.

## Problema

A equipe da empresa fictícia enfrenta um dilema entre velocidade e qualidade. Quando acelera a entrega, a cobertura de testes cai e mais bugs aparecem. Quando investe mais tempo em testes e revisão, perde velocidade no roadmap.

## Solução proposta

Foi desenvolvido um protótipo de validador de convites para uma plataforma de colaboração. O projeto utiliza:
- GitHub Copilot para apoiar a criação da função principal e dos testes.
- GitHub Actions para executar os testes automaticamente a cada push.

## Função principal

A função `validarConvite()` verifica:
- se o e-mail é válido;
- se o domínio está na lista permitida;
- se existem convites disponíveis.

## Testes automatizados

Os testes validam cenários positivos e negativos, como e-mail inválido, domínio não autorizado e ausência de convites disponíveis. Cobertura de testes é útil para localizar partes sem teste, mas não deve ser confundida com qualidade automática.

## CI/CD com GitHub Actions

O workflow em `.github/workflows/ci.yml` instala as dependências e executa os testes automaticamente no GitHub a cada atualização no repositório.

## Caso real e fundamentação

A documentação do GitHub destaca que o Copilot pode ajudar na escrita de testes e código repetitivo, aumentando a produtividade do desenvolvedor, desde que haja revisão humana. O GitHub também fornece templates oficiais para build e test de projetos Node.js com Actions.

## Como executar localmente

```bash
npm install
npm test
```
