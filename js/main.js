// If an image is not added yet, show a soft placeholder with the file path,
// so you know exactly which file to put into the images folder.
document.querySelectorAll('img').forEach((img) => {
  const showPlaceholder = () => {
    const box = document.createElement('div');
    box.className = 'placeholder';
    box.textContent = 'Add image: ' + img.getAttribute('src').replace(/^(\.\.\/)+/, '');
    img.replaceWith(box);
  };
  if (img.complete && img.naturalWidth === 0) showPlaceholder();
  else img.addEventListener('error', showPlaceholder);
});
