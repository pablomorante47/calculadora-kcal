document.getElementById('calculator-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const gender = document.getElementById('gender').value;
  const age = parseFloat(document.getElementById('age').value);
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value);
  const activity = parseFloat(document.getElementById('activity').value);
  const goal = document.getElementById('goal').value;

  if (isNaN(age) || isNaN(weight) || isNaN(height) || isNaN(activity)) {
    alert('Por favor completa todos los campos correctamente');
    return;
  }

  let bmr;
  if (gender === 'male') {
    bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
  } else {
    bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
  }

  let totalKcal = bmr * activity;

  switch (goal) {
    case 'lose':
      totalKcal -= 500;
      break;
    case 'gain':
      totalKcal += 500;
      break;
    default:
      // No se realiza ningún ajuste para el mantenimiento de peso
  }

  const proteinas = weight * 2;
  const grasas = weight;
  const kcalProteinasGrasas = (proteinas * 4) + (grasas * 9);
  const carbohidratos = (totalKcal - kcalProteinasGrasas) / 4;

  document.getElementById('kcal').innerText = totalKcal.toFixed(2);
  document.getElementById('proteinas').innerText = proteinas.toFixed(2);
  document.getElementById('carbohidratos').innerText = carbohidratos.toFixed(2);
  document.getElementById('grasas').innerText = grasas.toFixed(2);

  document.getElementById('results').classList.remove('hidden');
});
