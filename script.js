function switchLanguage(lang) {
  const enSection = document.getElementById('en');
  const frSection = document.getElementById('fr');
  if (lang === 'en') {
    enSection.style.display = 'block';
    frSection.style.display = 'none';
  } else if (lang === 'fr') {
    enSection.style.display = 'none';
    frSection.style.display = 'block';
  }
}
