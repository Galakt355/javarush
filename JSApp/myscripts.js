document.getElementById('toggleDetails').addEventListener('click', () => {
    document.querySelectorAll('details').forEach(detail => {
      detail.open = !detail.open;
    });
  });