const translations = {
  ru: {
    skip: "К содержимому",
    caption: "Человек по ту сторону экрана",
    directory: "каталог",
    navAbout: "Обо мне",
    navProjects: "Проекты",
    navContact: "На связи",
    sidebarNote: "Лучше смотреть с любопытством. Разрешение экрана - любое",
    eyebrow: "ЛИЧНАЯ СТРАНИЦА / НЕ РЕЗЮМЕ",
    hello: "Привет, я",
    intro: "Здесь живут мои проекты, интересы и маленький кусочек меня. Без ленты рекомендаций - просто моя страничка в интернете",
    codeNote: "Пишу Rfetch на Rust и экспериментирую с настройкой терминала",
    theatreNote: "С 2021 по 2025 занимался в театральной студии. Да, жизнь бывает не только перед монитором",
    languagesTitle: "Учусь говорить с миром",
    languagesIntro: "Учу английский и польский. По одному уроку за раз",
    english: "Английский",
    polish: "Польский",
    duolingoScore: "Оценка Duolingo",
    projectsTitle: "Сделано с любопытством",
    rfetchDescription: "Аналог fastfetch на Rust. Информация о системе, ASCII-логотипы и немного любви к терминалу",
    archived: "Архив",
    konsoleDescription: "Моя кастомизация Konsole. Небольшой архив того, как терминал становится своим",
    contactTitle: "Не теряемся",
    contactIntro: "Другие места в интернете, где меня можно найти",
    donationTitle: "На новые эксперименты",
    donationIntro: "Если хочется поддержать - можно и так. Спасибо ♥",
    copy: "Копировать",
    copied: "Адрес скопирован. Спасибо за поддержку!",
    copyFailed: "Не удалось скопировать. Можно выделить и скопировать адрес вручную",
    backTop: "↑ Наверх",
    description: "John Babich / babichgh - личная страница, проекты, языки и немного старого интернета",
  },
  en: {
    skip: "Skip to content",
    caption: "The human on the other side of the screen",
    directory: "directory",
    navAbout: "About me",
    navProjects: "Projects",
    navContact: "Say hello",
    sidebarNote: "Best viewed with curiosity. Any screen resolution will do",
    eyebrow: "PERSONAL HOMEPAGE / NOT A RÉSUMÉ",
    hello: "Hey, I'm",
    intro: "A home for my projects, interests, and a little bit of me. No recommendation feed - just my own page on the internet",
    codeNote: "Building Rfetch in Rust and experimenting with terminal customization",
    theatreNote: "I attended a theatre studio from 2021 to 2025. Yes, life happens away from the screen, too",
    languagesTitle: "Learning to talk to the world",
    languagesIntro: "Learning English and Polish. One lesson at a time",
    english: "English",
    polish: "Polish",
    duolingoScore: "Duolingo score",
    projectsTitle: "Made out of curiosity",
    rfetchDescription: "A fastfetch clone written in Rust. System info, ASCII logos, and a little love for the terminal",
    archived: "Archived",
    konsoleDescription: "My Konsole customization. A small archive of making a terminal feel like home",
    contactTitle: "Let's stay in touch",
    contactIntro: "Other places on the internet where you can find me",
    donationTitle: "Fuel for new experiments",
    donationIntro: "If you'd like to support what I do, here's one way. Thank you ♥",
    copy: "Copy address",
    copied: "Address copied. Thanks for your support!",
    copyFailed: "Couldn't copy. You can select the address and copy it manually",
    backTop: "↑ Back to top",
    description: "John Babich / babichgh - a personal homepage, projects, languages, and a little old-school internet",
  },
};

let currentLanguage = "ru";
let copyStatusKey = "";

function setLanguage(language) {
  if (!Object.hasOwn(translations, language)) return;
  currentLanguage = language;
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = translations[language][element.dataset.i18n];
  });
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.lang === language));
  });
  document.querySelector('meta[name="description"]').content = translations[language].description;
  document.getElementById("copy-status").textContent = copyStatusKey ? translations[language][copyStatusKey] : "";
  try { localStorage.setItem("homepage-language", language); } catch { /* Storage may be disabled. */ }
}

let initialLanguage = navigator.language.toLowerCase().startsWith("ru") ? "ru" : "en";
try {
  const savedLanguage = localStorage.getItem("homepage-language");
  if (savedLanguage && Object.hasOwn(translations, savedLanguage)) initialLanguage = savedLanguage;
} catch { /* Use the browser language when storage is unavailable. */ }
setLanguage(initialLanguage);

document.querySelectorAll("[data-lang]").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

// Replace href="#" in index.html with your profile URLs. Placeholders do nothing.
document.querySelectorAll(".social-links a").forEach((link) => {
  link.addEventListener("click", (event) => {
    if (link.getAttribute("href") === "#") event.preventDefault();
  });
});
document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("copy-wallet").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(document.getElementById("ton-address").textContent.trim());
    copyStatusKey = "copied";
  } catch {
    copyStatusKey = "copyFailed";
  }
  document.getElementById("copy-status").textContent = translations[currentLanguage][copyStatusKey];
});
