//your code here
document.addEventListener('DOMContentLoaded', () => {
  const divs = document.querySelectorAll('.image');

  let draggedItem = null;

  divs.forEach(div => {
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
      this.style.display = 'none';
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
    this.style.display = 'flex';
    draggedItem = null;
  }
});
