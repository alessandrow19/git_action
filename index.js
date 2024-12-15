const ambiente = process.env.NODE_ENV || 'development';

function soma(a, b) {
  console.log(`Ambiente atual: ${ambiente}`);
  return a + b;
}

module.exports = soma;

// Testando a função
console.log(`Resultado da soma: ${soma(3, 5)}`);
