export interface User {
  email: string;
  username: string;
  password: string;
}

export interface Note {
  id: string;
  title?: string;
  content: string;
  category: "Work" | "Study" | "Personal";
  dateAdded: string;
  lastEdited?: string | null;
}
