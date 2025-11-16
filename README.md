# 🎧 DJS02 – Web Component: Podcast Preview

This project focuses on building a clean, reusable Web Component that displays a podcast preview card. The component is designed to be modular, lightweight, and easy to plug into any project without relying on frameworks. It uses the Shadow DOM for encapsulation and exposes simple ways to pass data in and listen for events.

## 🚀 What This Component Does

`<podcast-preview>` is a custom HTML element that:

- Shows a podcast cover, title, genres, season count, and last updated date
- Accepts data through HTML attributes or a `.data` property
- Emits a `podcast-select` event when clicked or activated with the keyboard
- Keeps its styles and logic fully encapsulated
- Works independently of the main app

## 📁 Project Structure

DJS02
├─ src
│ ├─ components
│ │ ├─ PodcastPreview.js → Web Component logic + Shadow DOM
│ │ └─ createModal.js → Accessible modal controller
│ ├─ utils
│ │ ├─ DateUtils.js → Converts ISO dates to readable format
│ │ └─ GenreService.js → Maps genre IDs to names
│ └─ views
│ └─ createGrid.js → Renders multiple <podcast-preview> cards
├─ data.js → Podcast + genre dataset
├─ index.html → App demo (grid + modal)
├─ demo.html → Standalone Web Component demo
├─ styles.css → Global and modal styles
└─ README.md → Documentation

## ⚙️ Running the Project

1. Clone or download the repo
2. Open `index.html` in your browser
3. The podcast grid and modal interactions will load automatically

To test the component by itself, open `demo.html`.

## 🎮 Using the Component

### 1️⃣ Register the Component

```js
import "./src/components/podcastPreview.js";
```

---

### 2️⃣ Passing Data

**Option A — HTML Attributes**

```html
<podcast-preview
  pid="demo1"
  title="History Bites"
  image="https://picsum.photos/seed/history/400/400"
  genres="History, Education"
  seasons="2"
  updated="2025-09-20"
></podcast-preview>
```

**Option B — Using `.data`**

```js
const card = document.createElement("podcast-preview");
card.data = {
  id: "p1",
  title: "History Bites",
  image: "history.png",
  genres: [1, 3],
  seasons: 2,
  updated: "2025-09-20",
};
document.body.appendChild(card);
```

---

### 3️⃣ Listening for Events

```js
document.addEventListener("podcast-select", (e) => {
  console.log("Selected podcast:", e.detail);
});
```

You’ll get:
`{ id, title, image, genres, seasons, updated, description }`

---

## ♿ Accessibility Features

- Cards are keyboard-focusable
- Enter/Space activates the card
- Role="button" + aria attributes applied
- Modal uses role="dialog" and traps focus
- Escape key closes the modal
- Live region announces dialog openings
- Focus returns to the triggering card

---

## 🧪 Demo Page

`demo.html` shows the component running completely on its own.
It includes:

- Example with genre names
- Example with genre IDs
- Event logging
- No dependency on the main app

---

## 🧹 Code Quality

- ES6 modules
- Shadow DOM encapsulation
- JSDoc on helper utilities
- No frameworks — just HTML, CSS, and JS
- Clear, consistent naming
- Clean file structure

---

## ✅ Progress Summary

| Phase   | Description                   | Status       |
| ------- | ----------------------------- | ------------ |
| Phase 1 | Web Component + modal         | ✅ Completed |
| Phase 2 | Accessibility + events + demo | ✅ Completed |
| Phase 3 | Documentation                 | ✅ Completed |

This project delivers:

- A fully functional `<podcast-preview>` component
- An accessible modal system
- A standalone demo page
- Clean, maintainable code
- Complete documentation

---

**Author:** Lazio Barnett
**Project:** DJS02 – Web Component: Podcast Preview
**Course:** CodeSpace Software Development Program
