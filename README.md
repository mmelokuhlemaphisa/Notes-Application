<img src="https://socialify.git.ci/mmelokuhlemaphisa/Notes-Application/image?language=1&owner=1&name=1&stargazers=1&theme=Light" alt="Notes-Application" width="640" height="320" />

# React Native Notes Application - Assessment Requirements

### 1. USER MANAGEMENT

#### ✅ Authentication

- **Register with:**
  - ✅ Email address (validated with @ symbol check)
  - ✅ Password (minimum 6 characters, confirmation required)
  - ✅ Username (minimum 3 characters required)
  - **Location:** `app/register.tsx`
  - **Features:** Input validation, error messages, password confirmation

- **Login with credentials**
  - ✅ Email validation
  - ✅ Password verification
  - ✅ Username entry
  - **Location:** `app/login.tsx`
  - **Features:** Secure authentication, form validation

#### ✅ Authorization (Protected Routing)

- ✅ Logged-in users **cannot** see registration/login pages
- ✅ Non-logged-in users **cannot** see notes/profile screens
- ✅ Dynamic stack navigation based on authentication state
- **Location:** `app/_layout.tsx`
- **Implementation:** Conditional rendering of stacks based on `isLoggedIn` state

#### ✅ Profile Management

- ✅ Users can view their profile information
- ✅ Users can update email address
- ✅ Users can update username
- ✅ Users can update password with confirmation
- ✅ Input validation for all fields
- ✅ Logout with confirmation dialog
- **Location:** `app/ProfileScreen.tsx`
- **Features:** Edit mode toggle, save/cancel buttons, detailed form validation

---

### 2. NOTES MANAGEMENT

#### ✅ Add Function (CREATE)

- **Notes can include:**
  - ✅ Note text (required, minimum 1 character)
  - ✅ Date added (automatically generated with `new Date().toISOString()`)
  - ✅ Category (Personal, Work, Study)
  - ✅ Title (optional - defaults to "Untitled" if empty)
- **Location:** `app/AddNoteScreen.tsx`
- **Features:**
  - Keyboard-aware form
  - Category picker
  - Input validation
  - Floating action button from home screen

#### ✅ Read Function (VIEW)

- ✅ Users can view all their saved notes
- ✅ Notes displayed in card format with:
  - Title
  - Preview of content
  - Category badge (color-coded)
  - Date created
- ✅ View individual note details
- ✅ Notes sorted by date (newest first by default)
- **Locations:** `app/HomeScreen.tsx`, `app/ViewNoteScreen.tsx`, `components/NoteItem.tsx`

#### ✅ Update Function (EDIT)

- ✅ Users can edit existing notes
- ✅ Edit title, content, and category
- ✅ **Timestamp updated when edited** (stored in `updatedAt` field)
- ✅ Changes saved to AsyncStorage
- **Location:** `app/EditNoteScreen.tsx`
- **Features:**
  - Pre-filled form fields
  - Save/cancel functionality
  - Validation before saving

#### ✅ Delete Function (DELETE)

- ✅ Users can delete notes with one tap
- ✅ Delete button on each note card
- ✅ Notes removed from AsyncStorage immediately
- **Location:** `components/NoteItem.tsx`
- **Features:** Trash icon button, instant deletion

#### ✅ Search Function

- ✅ Search by typing words that match note titles or content
- ✅ Filters notes in real-time as user types
- ✅ Case-insensitive matching
- ✅ Matches against both title and content text
- **Location:** `app/HomeScreen.tsx`
- **Implementation:** Live filtering with `.filter()` and `.includes()`

#### ✅ Sorting Function

- ✅ Sort by date added (ascending)
- ✅ Sort by date added (descending) ← Default
- ✅ Toggle button with visual indicator
- ✅ Displays current sort order (Newest First / Oldest First)
- **Location:** `app/HomeScreen.tsx`
- **Features:**
  - Sort button in search bar with arrow icon
  - Visual indicator showing current sort order
  - One-tap toggle between ascending/descending

---

## 📁 PROJECT STRUCTURE

```
Notes-Application/
├── app/
│   ├── _layout.tsx                 (Protected routing)
│   ├── index.tsx                   (Landing page)
│   ├── login.tsx                   (Login screen)
│   ├── register.tsx                (Registration screen)
│   ├── HomeScreen.tsx              (Notes list with search & sort)
│   ├── AddNoteScreen.tsx           (Add notes)
│   ├── EditNoteScreen.tsx          (Edit notes)
│   ├── ViewNoteScreen.tsx          (View single note)
│   ├── ProfileScreen.tsx           (Profile management)
│   └── navigation/                 (Navigation config)
├── components/
│   ├── NoteItem.tsx                (Note card component)
│   └── NotesCard.tsx
├── utils/
│   ├── auth.tsx                    (Auth context with updateProfile)
│   └── storage.ts                  (AsyncStorage operations)
└── package.json
```

---

## 🎨 UI/UX FEATURES

- ✅ Modern material design with purple theme (#667eea)
- ✅ Gradient headers with rounded corners
- ✅ Card-based note display with shadows and elevation
- ✅ Color-coded category badges (Personal: blue, Work: pink, Study: cyan)
- ✅ Icons from Expo Vector Icons (Ionicons) throughout
- ✅ Floating Action Button for quick note creation
- ✅ Responsive layouts that work on different screen sizes
- ✅ Smooth transitions and keyboard-aware views
- ✅ Empty state messages for better UX
- ✅ Loading states for screens
- ✅ Proper touch feedback and visual cues

---

## 🚀 TECHNICAL IMPLEMENTATION

### Authentication Flow

1. User lands on landing page
2. Can register or login
3. On successful auth, redirected to HomeScreen
4. Protected routing prevents accessing login/register if logged in
5. Logout clears user state and redirects to landing page

### Data Management

- **AsyncStorage** used as local database
- **Storage operations:**
  - `addNote()` - Add new note with UUID
  - `getNotes()` - Retrieve all notes
  - `updateNote()` - Update existing note with new timestamp
  - `deleteNote()` - Remove note by ID

### State Management

- **Auth Context:** Manages user state and authentication
- **Local State:** Component-level state for form data
- **useCallback hooks:** Optimize note loading

### Navigation

- **expo-router:** File-based routing system
- **Protected stacks:** Different stacks for authenticated/unauthenticated users
- **useRouter hook:** For programmatic navigation
- **useLocalSearchParams:** For passing route parameters

---

## ✨ KEY FEATURES IMPLEMENTED

1. **Secure Authentication**
   - Password validation (min 6 chars)
   - Email validation
   - Username validation (min 3 chars)
   - Password confirmation on registration

2. **Complete CRUD Operations**
   - Create notes with optional title
   - Read/View all notes with search
   - Update notes with timestamp tracking
   - Delete notes instantly

3. **Advanced Search**
   - Real-time filtering
   - Case-insensitive matching
   - Searches both title and content

4. **Flexible Sorting**
   - Date ascending/descending
   - Toggle with visual indicator
   - Maintains sort during search

5. **Profile Management**
   - Edit username
   - Change email
   - Update password
   - Logout with confirmation

6. **Responsive Design**
   - Works on all screen sizes
   - Keyboard-aware forms
   - Touch-friendly interfaces
   - Accessibility considerations

---

## ✅ ASSESSMENT COMPLETION

**All requirements from the assessment have been successfully implemented:**

- ✅ User registration with email, password, username
- ✅ User login with credential verification
- ✅ Protected routing preventing unauthorized access
- ✅ Profile/account management screen
- ✅ Add notes with metadata
- ✅ View all notes with clean UI
- ✅ Edit notes with updated timestamps
- ✅ Delete notes
- ✅ Real-time search functionality
- ✅ Sort by date (ascending & descending)

**Plus additional enhancements:**

- Professional UI/UX design
- Input validation and error handling
- Better error messages
- Loading states
- Empty state indicators
- Profile picture placeholder
- Logout confirmation
- Color-coded categories

---

**Ready for Assessment & Deployment! 🎉**

