document.getElementById('file-picker').addEventListener('change', function (event) {
  const fileInput = event.target;
  const file = fileInput.files[0];
  
  if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
          document.getElementById('text-editor').value = e.target.result;
      };
      reader.readAsText(file);
  }
});

function saveChanges() {
  const content = document.getElementById('text-editor').value;
  const blob = new Blob([content], { type: 'text/plain' });
  const fileName = document.getElementById('file-picker').files[0].name;

  const link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  link.download = fileName;

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  document.getElementById('message').innerText = 'Changes saved successfully.';
  document.getElementById('error-message').innerText = '';
}