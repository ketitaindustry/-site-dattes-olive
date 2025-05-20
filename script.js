
function switchLanguage(lang) {
  document.getElementById('en').style.display = lang === 'en' ? 'block' : 'none';
  document.getElementById('fr').style.display = lang === 'fr' ? 'block' : 'none';
}
function toggleMenu() {
  document.getElementById("navMenu").classList.toggle("active");
}
