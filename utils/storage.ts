import AsyncStorage from "@react-native-async-storage/async-storage";

export type Note = {
  id: string;
  title?: string;
  content: string;
  category: string;
  createdAt: string;
  updatedAt?: string;
};

const NOTES_KEY = "NOTES_STORAGE";

export const getNotes = async (): Promise<Note[]> => {
  const data = await AsyncStorage.getItem(NOTES_KEY);
  return data ? JSON.parse(data) : [];
};

export const saveNotes = async (notes: Note[]) => {
  await AsyncStorage.setItem(NOTES_KEY, JSON.stringify(notes));
};

export const addNote = async (note: Note) => {
  const notes = await getNotes();
  notes.push(note);
  await saveNotes(notes);
};

export const updateNote = async (note: Note) => {
  let notes = await getNotes();
  notes = notes.map((n) => (n.id === note.id ? note : n));
  await saveNotes(notes);
};

export const deleteNote = async (id: string) => {
  let notes = await getNotes();
  notes = notes.filter((n) => n.id !== id);
  await saveNotes(notes);
};
