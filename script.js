function calcularIMC() {
    const pesoInput = document.getElementById('weight');
    const alturaInput = document.getElementById('height');
    const valueElement = document.getElementById('value');
    const descricaoElement = document.getElementById('descricao');
  
    const peso = parseFloat(pesoInput.value);
    const altura = parseFloat(alturaInput.value);
  
    if (isNaN(peso) || isNaN(altura) || altura <= 0) {
      alert('Por favor, insira valores numéricos válidos para peso e altura.');
      return;
    }
  
    const bmi = (peso / (altura * altura)).toFixed(2);
  
    
    valueElement.textContent = bmi;
    document.getElementById('info').classList.remove('hidden');
  
    let descricao = '';
    if (bmi < 18.5) {
      descricao = 'Cuidado! Você está abaixo do peso!';
    } else if (bmi >= 18.5 && bmi < 25) {
      descricao = 'Parabéns! Seu peso está normal.';
    } else if (bmi >= 25 && bmi < 30) {
      descricao = 'Atenção! Você está acima do peso.';
    } else {
      descricao = 'Cuidado! Você está obeso.';
    }
  

    descricaoElement.textContent = descricao;
  }
  

  function handleCalcButtonClick(event) {
    event.preventDefault();
    calcularIMC();
  }
  

  const calcularButton = document.getElementById('calcular');
  calcularButton.addEventListener('click', handleCalcButtonClick);
  