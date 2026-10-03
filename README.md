# KAPWA — Metro Manila Community Service & Skill Exchange Platform

> **"Everyone can need something, everyone can offer something."**  
> KAPWA is a community-driven service, skill exchange, and mutual-help platform tailored specifically for **Metro Manila, Philippines**.

---

## 🌟 Overview

**KAPWA** connects neighbors across Metro Manila through local services, skills exchange, volunteer initiatives, and mutual assistance. The platform features an interactive directory, an active Metro Manila live map, an AI mascot community guide, and direct messaging for community members.

---

## 🚀 Key Features

* **SaaS Directory Table:**
  * Clean, scannable table view with columns for *Member Name*, *City / Location*, *Service / Skill*, *Type*, *Status*, *Posted Date*, *Compensation*, *Distance*, and *Actions*.
  * Interactive category tabs (*Tech & Services*, *Skills & Tutoring*, *Jobs & Opps*, *Donate / Free*, *Volunteer*).
  * Direct city filter restricted strictly to **Metro Manila cities** (Quezon City, Manila, Makati, Taguig, Pasig, Mandaluyong, Marikina, San Juan, Caloocan, etc.).
  * Instant search bar with clear button (`✕`) and responsive sorting.
  * Pop-Out Browse Tab modal for a focused directory window.
* **Interactive Metro Manila Live Map:**
  * OpenStreetMap integration powered by **Leaflet.js** and **Leaflet.markercluster**.
  * Bounded specifically to Metro Manila coordinates (`[14.3800, 120.8000]` to `[14.8500, 121.2000]`).
  * 30+ categorized service and help pins with interactive popups and category filters.
* **Direct Community Messaging:**
  * Member Hover Popover cards with contact details.
  * Floating quick-message composer with auto-filled templates and recipient search.
* **Kap Community Guide (AI Chatbot):**
  * Built-in assistant to help users find services, volunteer drives, or post needs.
* **Fully Responsive:**
  * Optimized for desktop, tablet, and mobile with modern UI aesthetics.

---

## 📁 Project Structure

```text
iHELP/
├── index.html       # Main HTML markup & structure
├── styles.css       # Complete CSS design system, responsive styles, & animations
├── app.js           # Core logic: directory state, Leaflet map, modals, & chatbot
├── assets/          # Media assets (mascot, illustrations)
└── .gitignore       # Git ignore rules for IDE & OS files
```

---

## 💻 Getting Started Locally

No complex dependencies or build steps required. KAPWA runs natively in any modern web browser.

### Option 1: Double-Click
Simply open `index.html` in your web browser.

### Option 2: Local HTTP Server (Recommended)
Using Python:
```bash
python -m http.server 8080
```
Or using Node.js / npx:
```bash
npx serve .
```
Then visit `http://localhost:8080` in your browser.

---

## 🤝 Collaboration & Contribution Guide

We welcome contributions from team members and collaborators!

### 1. Clone the Repository
```bash
git clone <GITHUB_REPOSITORY_URL>
cd iHELP
```

### 2. Create a Feature Branch
```bash
git checkout -b feature/your-feature-name
```

### 3. Commit Guidelines
Use concise, descriptive commit messages:
* `feat:` for new features or sections
* `fix:` for bug fixes
* `style:` for UI/UX visual improvements
* `docs:` for documentation updates

Example:
```bash
git commit -m "feat: add filter for Marikina community listings"
```

### 4. Push & Open a Pull Request (PR)
```bash
git push origin feature/your-feature-name
```
Open a Pull Request on GitHub describing your changes for team review.

---

## 🗺️ Geographical Scope
* **Current Coverage:** Metro Manila, National Capital Region (NCR), Philippines only.
* All listings, map coordinates, and volunteer drives are localized to Metro Manila cities and districts.

---

## 📄 License
Created for community collaboration and educational exchange.
