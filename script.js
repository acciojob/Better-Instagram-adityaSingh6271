document.addEventListener('DOMContentLoaded', () => {
  const divs = document.querySelectorAll('.image');

  let draggedItem = null;

  divs.forEach(div => {
    div.setAttribute('draggable', true); // Add draggable attribute
    div.addEventListener('dragstart', dragStart);
    div.addEventListener('dragover', dragOver);
    div.addEventListener('dragenter', dragEnter);
    div.addEventListener('dragleave', dragLeave);
    div.addEventListener('drop', dragDrop);
    div.addEventListener('dragend', dragEnd);
  });

  function dragStart() {
    draggedItem = this;
    setTimeout(() => {
      this.style.opacity = '0.5'; // Reduce opacity instead of setting display to 'none'
    }, 0);
  }

  function dragOver(e) {
    e.preventDefault();
  }

  function dragEnter() {
    this.classList.add('selected');
  }

  function dragLeave() {
    this.classList.remove('selected');
  }

  function dragDrop() {
    if (draggedItem !== this) {
      const temp = this.innerHTML;
      this.innerHTML = draggedItem.innerHTML;
      draggedItem.innerHTML = temp;
    }

    this.classList.remove('selected');
  }

  function dragEnd() {
    this.style.opacity = '1'; // Restore opacity after the drag operation
    draggedItem = null;
  });

  // Clean up event listeners when the component is no longer needed
  document.addEventListener('beforeunload', () => {
    divs.forEach(div => {
      div.removeAttribute('draggable'); // Remove draggable attribute
      div.removeEventListener('dragstart', dragStart);
      div.removeEventListener('dragover', dragOver);
      div.removeEventListener('dragenter', dragEnter);
      div.removeEventListener('dragleave', dragLeave);
      div.removeEventListener('drop', dragDrop);
      div.removeEventListener('dragend', dragEnd);
    });
  });
});
