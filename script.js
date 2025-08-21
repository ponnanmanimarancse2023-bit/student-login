document.getElementById('photo').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function() {
        const photoPreview = document.getElementById('photo-preview');
        photoPreview.innerHTML = `<img src="${reader.result}" alt="Photo Preview" style="max-width: 100%; height: auto; border-radius: 5px; margin-top: 10px;">`;
    };

    if (file) {
        reader.readAsDataURL(file);
    }
});
