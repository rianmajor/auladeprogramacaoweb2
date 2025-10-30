function navigate(page) {
    document.querySelectorAll('.page').forEach(sec => sec.classList.remove('active'));
    document.getElementById(page).classList.add('active');
}