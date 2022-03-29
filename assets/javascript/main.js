
// Função Principal calculoDoImc: Aqui estarão todas as funções, variáveis, condicionais que serão necessárias para a execução do script de cálculo do imc

function calculoDoImc () {
  // 1º parar o envio do formulário quando clicar no botão
  // pegar a id formulário
  const form = document.querySelector('#formulario');
  form.addEventListener('submit', pararEnvioDoFormulario);

  //criar a função pararEnviodoFormulário
  function pararEnvioDoFormulario (e) {
    e.preventDefault();
    // 2º Pegar os ids e valores dos inputs de peso e altura
    // selecionar os ids dos inputs de peso e altura
    const inputPeso = form.querySelector('#peso');
    const inputAltura = form.querySelector('#altura');
    // pegar o valor que a pessoa digitar no input de peso e altura
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    // 3º passo - Validações dos campos
    /* criar uma condicional de validação, caso o usuário não coloque valores nos inputs */
    inputPeso.style.border = 'none';
    inputAltura.style.border = 'none';

    if(inputPeso.value === '' && inputAltura.value === '') {
      alert('Digite seu peso e altura para continuarmos.');
      inputPeso.style.border = '2px solid red';
      inputAltura.style.border = '2px solid red';
      return;
    } else if(inputPeso.value === '') {
      alert('Digite o seu peso para continuarmos.'); 
      inputPeso.style.border = '2px solid red';
      return;
    } else if(inputAltura.value === '') {
      alert('Digite a sua altura para continuarmos.');
      inputAltura.style.border = '2px solid red';
      return;
    }

    // Validação caso o usuário coloque letras ao invés de número nos inputs
    if(!peso) {
      alert('Peso inválido!' , false);
      return;
    }

    if(!altura) {
      alert('Altura inválida!', false);
      return;
    }

    // 4º passo: Fazer o cálculo do imc através dos valores armazenados na variáveis de peso e altura. Primeiro vamos criar a função para calcular e retornar o valor do imc e chamar a função na variável imc
    function calcularImc (peso, altura) {
      const imc = peso / altura ** 2;
      return imc.toFixed(2);
    }
    const imc = calcularImc(peso, altura);

    // 5º passo: Fazer o resultado aparecer abaixo do botão de Calcular. Para isso precisamos criar uma função que gere um parágrafo via JS e depois uma função para escrever a mensagem do resultado.
    
      const resultado = document.querySelector('#imc-resultado');
      resultado.innerHTML = '';

      // criar um parágrafo dentro da div resultado
      function criarParagrafo () {
        const p = document.createElement('p');
        return p;
      }
      const p = criarParagrafo();
      // adicionar a classe imc-resultado ao meu parágrafo criado.
      p.classList.add('imc-resultado');      

      // 6º passo: Inserir o reultado de acordo com o valor do imc - criar condicional dos resultados.
      // criar um array com os níveis dos resultados
      function getNivelImc () {
      
      const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
      'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
      // fazer a minha condicional 
      if (imc >= 39.9) return nivel[5];
      if (imc >= 34.9) return nivel[4];
      if (imc >= 29.9) return nivel[3];
      if (imc >= 24.9) return nivel[2];
      if (imc >= 18.5) return nivel[1];
      if (imc < 18.5) return nivel[0];
      }

      const nivelImc = getNivelImc();

      // fazer uma verificação de cores em relação ao resultado gerado
      if(imc >= 18.5 && imc < 24.9) {
        p.classList.add('resultado-verde');
      } else {
        p.classList.add('resultado-vermelho');
      }

      p.innerHTML = `Seu imc é: ${imc} (${nivelImc})`;
      resultado.appendChild(p);      
  }
}
