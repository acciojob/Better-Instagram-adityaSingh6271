document.addEventListener("DOMContentLoaded", function () {
  let draggedItem = null;

  // Add dragstart event listener to each draggable div
  document.querySelectorAll(".image").forEach(function (div) {
    div.addEventListener("dragstart", function (e) {
      draggedItem = div;
      setTimeout(function () {
        div.style.display = "none";
      }, 0);
    });

    div.addEventListener("dragend", function () {
      setTimeout(function () {
        draggedItem.style.display = "block";
        draggedItem = null;
      }, 0);
    });
  });

  // Add dragover event listener to each droppable div
  document.querySelectorAll(".image").forEach(function (div) {
    div.addEventListener("dragover", function (e) {
      e.preventDefault();
    });

    div.addEventListener("dragenter", function (e) {
      e.preventDefault();
      div.classList.add("selected");
    });

    div.addEventListener("dragleave", function () {
      div.classList.remove("selected");
    });

    div.addEventListener("drop", function () {
      if (draggedItem !== null) {
        // Swap the background images
        const tempBackground = draggedItem.style.backgroundImage;
        draggedItem.style.backgroundImage = div.style.backgroundImage;
        div.style.backgroundImage = tempBackground;

        // Reset classes
        div.classList.remove("selected");
        draggedItem = null;
      }
    });
  });
});
