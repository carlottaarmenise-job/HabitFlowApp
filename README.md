# 🌊 HabitFlow

**HabitFlow** è un'app mobile per il monitoraggio delle abitudini quotidiane. Aiuta gli utenti a creare, completare e visualizzare le loro abitudini in modo semplice ed efficace. Progettata per essere intuitiva, fluida e coerente con le abitudini reali dell'utente.

## 🧠 Funzionalità principali

- ✅ Aggiunta, modifica e cancellazione di abitudini
- 🔄 Tracciamento dei completamenti giornalieri
- 📊 Statistiche utente nel profilo
- 📆 Cronologia completamenti
- 💡 Sezione di ispirazione con consigli sulle abitudini
- 📤 Esportazione dei dati
- 🌓 Tema chiaro (dark mode disabilitata)
- 🔐 Architettura scalabile con Context API e AsyncStorage

---


## 🛠️ Tecnologie utilizzate

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [AsyncStorage](https://react-native-async-storage.github.io/async-storage/) per la persistenza locale
- [React Navigation](https://reactnavigation.org/) per la navigazione a stack
- [Ionicons](https://ionic.io/ionicons) per le icone
- Flat design e UX mobile-first

---

## 📁 Struttura del progetto

```
/HabitFlowApp
│
├── assets/                  # Icone, immagini
├── components/              # Componenti riutilizzabili
├── context/                 # HabitContext (state management)
├── screens/                 # Tutte le schermate principali
│   ├── HomeScreen.js
│   ├── AddHabitScreen.js
│   ├── HistoryScreen.js
│   ├── InspirationScreen.js
│   ├── ExportScreen.js
│   └── ProfileScreen.js
├── utils/                   # Funzioni di utilità (dateUtils.js, storage.js)
├── App.js                   # Entry point dell'app
└── README.md
```

---

## 🚀 Come eseguire il progetto

1. **Clona il repository:**

   ```bash
   git clone https://github.com/tuo-utente/HabitFlow.git
   cd HabitFlow
   ```

2. **Installa le dipendenze:**

   ```bash
   npm install
   ```

3. **Avvia l'app:**

   ```bash
   npm start
   ```

4. **Scansiona il QR code con l'app Expo Go (iOS/Android).**

---

## 📦 Build app standalone

Per creare una build:

```bash
npx expo export
```

Oppure:

```bash
eas build --platform android
```

---

## 👩‍🎨 Autrice

**Carlotta Armenise**  
App progettata e realizzata con passione 💙  
Logo e identità visiva inclusi nel progetto.

---

## 📄 Licenza

MIT License. Sentiti libero di contribuire o personalizzare l'app.

---