<img src="https://socialify.git.ci/mmelokuhlemaphisa/Notes-Application/image?language=1&owner=1&name=1&stargazers=1&theme=Light" alt="Notes-Application" width="640" height="320" />

# 📒 React Native Notes Application

A modern **React Native Notes App** built with **Expo Router**, designed to help users organize thoughts, manage notes, and stay productive.
This project fulfills all assessment requirements while delivering a clean UI and smooth user experience.

---

# 📌 OVERVIEW

This application allows users to:

* Register and log into an account
* Create, view, edit, and delete notes
* Search and sort notes efficiently
* Manage their profile information
* Experience secure navigation with protected routes

---

# 🔐 1. USER MANAGEMENT

## ✅ Authentication

### Register

* Email validation (`@` required)
* Password (minimum 6 characters + confirmation)
* Username (minimum 3 characters)
* Input validation with error message

### Login

* Email & password validation
* Secure authentication flow

---

## ✅ Authorization (Protected Routing)

* Logged-in users **cannot access** login/register screens
* Guests **cannot access** notes or profile screens
* Navigation changes dynamically based on authentication state


---

## ✅ Profile Management

* View profile details
* Update username, email, and password
* Password confirmation required
* Logout with confirmation

---

# 📝 2. NOTES MANAGEMENT

## ✅ Create Notes

Users can add notes with:

* Title (optional → defaults to *Untitled*)
* Note content (required)
* Category (Personal, Work, Study)
* Auto-generated date



---

## ✅ Read Notes

* View all notes in card format
* Includes:

  * Title
  * Content preview
  * Category badge
  * Date created
* View full note details
* Sorted by newest first (default)


---

## ✅ Update Notes

* Edit title, content, and category
* Automatically updates timestamp (`updatedAt`)
* Saves changes to storage



---

## ✅ Delete Notes

* Delete notes instantly
* Available directly from note cards


---

## 🔍 Search Function

* Real-time search
* Case-insensitive
* Matches title and content


---

## 🔃 Sorting Function

* Sort by:

  * Newest first (default)
  * Oldest first
* Toggle button with indicator



---

# 📁 PROJECT STRUCTURE

```
Notes-Application/
├── app/
│   ├── _layout.tsx
│   ├── index.tsx
│   ├── login.tsx
│   ├── register.tsx
│   ├── HomeScreen.tsx
│   ├── AddNoteScreen.tsx
│   ├── EditNoteScreen.tsx
│   ├── ViewNoteScreen.tsx
│   ├── ProfileScreen.tsx
│
├── components/
│   ├── NoteItem.tsx
│   └── NotesCard.tsx
│
├── utils/
│   ├── auth.tsx
│   └── storage.ts
│
└── package.json
```

---

#  UI/UX FEATURES

* Modern purple theme 
* Clean, minimal interface
* Card-based note layout
* Floating Action Button (FAB)
* Color-coded categories:

  * Personal → Blue
  * Work → Pink
  * Study → Cyan
* Responsive design
* Smooth navigation
* Keyboard-aware forms
* Empty & loading states

---

# TECH STACK

* **React Native**
* **Expo Router**
* **TypeScript**
* **AsyncStorage**
* **Context API (Auth Management)**
* **Expo Vector Icons**

---

# APPLICATION FLOW

1. User opens app → Landing Page
2. Registers or logs in
3. Redirected to Home Screen
4. Can manage notes (CRUD operations)
5. Profile accessible anytime
6. Logout returns user to landing page

---

# KEY FEATURES

*  Secure authentication system
* Full CRUD functionality
* Advanced search system
* Smart sorting
* Profile management
* Responsive mobile UI

---

# ✅ ASSESSMENT COMPLETION

All required features have been successfully implemented:

✔ User registration & login
✔ Protected navigation
✔ Profile management
✔ Add, view, edit, delete notes
✔ Search functionality
✔ Sorting system

---

# 👨‍💻 AUTHOR

**Melokuhle Maphisa**

---




