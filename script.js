function genderTexte() {
  const texts = document.querySelectorAll("[data-gender-target]");

  texts.forEach((p) => {
    let text = p.textContent;

   text = text.replaceAll("Der Benutzer", "Die nutzende Person");
    text = text.replaceAll("der Benutzer", "die nutzende Person");
    text = text.replaceAll("Der Nutzer", "Die nutzende Person");
    text = text.replaceAll("der Nutzer", "die nutzende Person");
    text = text.replaceAll("Der Kunde", "Die kundige Person");
    text = text.replaceAll("der Kunde", "die kundige Person");
    text = text.replaceAll("Der Fachmann", "Die fachkundige Person");
    text = text.replaceAll("der Fachmann", "die fachkundige Person");
    text = text.replaceAll("Der Mechaniker", "Die fachkundige Person");
    text = text.replaceAll("der Mechaniker", "die fachkundige Person");
    text = text.replaceAll("Mitarbeiter", "Mitarbeitende");
    text = text.replaceAll("Der Monteur", "Die montierende Person");
    text = text.replaceAll("der Monteur", "die montierende Person");

    p.textContent = text;
  });
}

