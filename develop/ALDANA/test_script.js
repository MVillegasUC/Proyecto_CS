// test_script.js

console.log('▶️ test_script.js cargado');

window.addEventListener('load', () => {
  const form = document.getElementById('contact-form');
  let alerts = [];
  window.alert = msg => alerts.push(msg);

  // 1) Test formulario completo → éxito
  document.getElementById('nombre').value           = 'Luis';
  document.getElementById('apellido-paterno').value = 'Aldana';
  document.getElementById('apellido-materno').value = 'Vilca';
  document.getElementById('ciudad').value           = 'Huancayo';
  document.getElementById('mensaje').value          = '¡Hola!';
  form.dispatchEvent(new Event('submit', { bubbles: true }));
  console.assert(
    alerts.pop() === 'Formulario enviado correctamente',
    '❌ Debe alertar éxito cuando todos los campos requeridos estén llenos'
  );
  console.log('✔️ Formulario válido: OK');

  // 2) Test formulario incompleto → error
  alerts = [];
  document.getElementById('nombre').value = '';
  form.dispatchEvent(new Event('submit', { bubbles: true }));
  console.assert(
    alerts.pop() === 'Por favor complete todos los campos requeridos',
    '❌ Debe alertar error cuando falte al menos un campo obligatorio'
  );
  console.log('✔️ Formulario inválido: OK');
});
