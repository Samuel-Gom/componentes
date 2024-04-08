function viewAndHiddenClick(btnId, sectionId) {
  // Obtener todos los botones
  const buttons = document.querySelectorAll('.block__button');
  // Obtener todas las secciones
  const sections = document.querySelectorAll('.content');

  // Remover la clase 'block__button--selected' de todos los botones
  buttons.forEach( function(btn) {
    btn.classList.remove('block__button--selected');
  } );
  // Remover la clase 'content--visible' de todas las secciones
  sections.forEach( function(section) {
    section.classList.remove('content--visible')
  } );

  // Agregar la clase 'block__button--selected' al botón seleccionado
  const selectedButton = document.getElementById(btnId);
  selectedButton.classList.add('block__button--selected');

  // Agregar la clase 'content--visible' a la sección correspondiente
  const selectedSection = document.getElementById(sectionId);
  selectedSection.classList.add('content--visible');
}

// Agregando los event listeners a los botones
document.getElementById('btn-1').addEventListener('click', () => viewAndHiddenClick('btn-1', 'section-1'));
document.getElementById('btn-2').addEventListener('click', () => viewAndHiddenClick('btn-2', 'section-2'));
document.getElementById('btn-3').addEventListener('click', () => viewAndHiddenClick('btn-3', 'section-3'));
document.getElementById('btn-4').addEventListener('click', () => viewAndHiddenClick('btn-4', 'section-4'));