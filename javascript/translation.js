
const langToggle = document.getElementById("langToggle");

    const translations = {
      ro: {
        "nav-item-1": "ACASĂ",
        "nav-item-2": "DESPRE NOI",
        "nav-item-3": "ACTE & PROCEDURI",
        "nav-item-4": "TRADUCERI/LEGALIZĂRI",
        "nav-item-5": "CONTACT",
        "site-title": "SPN Popovici & Agachi",
        "short-desc": "Societatea Profesională Notarială Popovici & Agachi oferă servicii notariale de înaltă calitate, combinând expertiza juridică vastă cu o abordare personalizată pentru fiecare client. Asigurăm soluții eficiente și sigure pentru toate nevoile notariale, inclusiv autentificări, legalizări, succesiuni . Ne angajăm să respectăm cele mai înalte standarde de profesionalism și integritate, garantând astfel încrederea și satisfacția clienților noștri.",
      },
      en: {
        "nav-item-1": "HOME",
        "nav-item-2": "ABOUT US",
        "nav-item-3": "ACTS & PROCEDURES",
        "nav-item-4": "TRANSLATIONS/LEGALIZATIONS",
        "nav-item-5": "CONTACT",
        "site-title": "SPN Popovici & Agachi",
        "short-desc": "The Popovici & Agachi Professional Notarial Society offers high-quality notarial services, combining extensive legal expertise with a personalized approach for each client. We provide efficient and secure solutions for all notarial needs, including authentications, legalizations, and successions. We are committed to upholding the highest standards of professionalism and integrity, thereby ensuring the trust and satisfaction of our clients.",
      }
    };

    // Inițializare limbă
    let currentLang = localStorage.getItem("lang") || "ro";

    function updateLanguage() {
      const dict = translations[currentLang];
      for (let key in dict) {
        const el = document.getElementById(key);
        if (el) el.textContent = dict[key];
      }
      localStorage.setItem("lang", currentLang);
    }

    function updateFlag() {
      // Afișăm steagul limbii opuse
      if(currentLang === "ro") {
        langToggle.src = "en.svg"; // modifică path-ul după fișierul tău
      } else {
        langToggle.src = "ro.svg"; // modifică path-ul după fișierul tău
      }
    }

    // Click pe steag schimbă limba și steagul
    langToggle.addEventListener("click", () => {
      currentLang = currentLang === "ro" ? "en" : "ro";
      updateLanguage();
      updateFlag();
    });

    // Init
    updateLanguage();
    updateFlag();
