const productArray = [
  { id: 'acme-anvils', name: 'Acme Anvils' },
  { id: 'road-runner-traps', name: 'Road Runner Traps' },
  { id: 'rocket-skates', name: 'Rocket Skates' },
  { id: 'portable-holes', name: 'Portable Holes' },
  { id: 'invisible-paint', name: 'Invisible Paint' }
];

const selectElement = document.querySelector('#productName');

productArray.forEach(product => {
  const option = document.createElement('option');
  option.value = product.id;
  option.textContent = product.name;
  selectElement.appendChild(option);
});
