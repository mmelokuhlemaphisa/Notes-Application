import { Ionicons } from "@expo/vector-icons";
import { useIsFocused } from "@react-navigation/native";
import { useRouter } from "expo-router";
import React, { useCallback, useEffect, useState } from "react";
import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import NoteItem from "../components/NoteItem";
import { useAuth } from "../utils/auth";
import { deleteNote, getNotes, Note } from "../utils/storage";

export default function HomeScreen() {
  const router = useRouter();
  const { logout, user } = useAuth();
  const [notes, setNotes] = useState<Note[]>([]);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const isFocused = useIsFocused();

  const loadNotes = useCallback(async () => {
    let data = await getNotes();
    if (search) {
      data = data.filter(
        (n) =>
          n.title?.toLowerCase().includes(search.toLowerCase()) ||
          n.content.toLowerCase().includes(search.toLowerCase()),
      );
    }

    // Sort by date based on sortOrder
    data.sort((a, b) => {
      const dateA = new Date(b.createdAt).getTime();
      const dateB = new Date(a.createdAt).getTime();
      return sortOrder === "desc" ? dateA - dateB : dateB - dateA;
    });

    setNotes(data);
  }, [search, sortOrder]);

  useEffect(() => {
    if (isFocused) loadNotes();
  }, [isFocused, search, loadNotes, sortOrder]);

  const handleLogout = () => {
    logout();
    router.replace("/");
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#667eea" />

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <View>
            <Text style={styles.greeting}>
              Hello, {user?.username || "User"}!
            </Text>
            <Text style={styles.subtitle}>
              Ready to organize your thoughts?
            </Text>
          </View>
          <TouchableOpacity
            style={styles.profileButton}
            onPress={() => router.push("/ProfileScreen")}
          >
            <Ionicons name="person-circle" size={32} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Search and Sort Bar */}
        <View style={styles.searchContainer}>
          <Ionicons
            name="search-outline"
            size={20}
            color="#666"
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Search notes..."
            value={search}
            onChangeText={setSearch}
            placeholderTextColor="#999"
          />
          <TouchableOpacity
            style={styles.sortButton}
            onPress={() => setSortOrder(sortOrder === "desc" ? "asc" : "desc")}
          >
            <Ionicons
              name={sortOrder === "desc" ? "arrow-down" : "arrow-up"}
              size={20}
              color="#667eea"
            />
          </TouchableOpacity>
        </View>

        {/* Sort Indicator */}
        <Text style={styles.sortIndicator}>
          {sortOrder === "desc" ? "Newest First" : "Oldest First"}
        </Text>
      </View>

      {/* Notes List */}
      <View style={styles.content}>
        <View style={styles.notesHeader}>
          <Text style={styles.notesTitle}>Your Notes</Text>
          <Text style={styles.notesCount}>{notes.length} notes</Text>
        </View>

        {notes.length === 0 ? (
          <View style={styles.emptyState}>
            <Ionicons name="document-text-outline" size={64} color="#ccc" />
            <Text style={styles.emptyTitle}>No notes yet</Text>
            <Text style={styles.emptySubtitle}>
              Create your first note to get started
            </Text>
          </View>
        ) : (
          <FlatList
            data={notes}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <NoteItem
                note={item}
                onPress={() => router.push(`/ViewNoteScreen?noteId=${item.id}`)}
                onDelete={async () => {
                  await deleteNote(item.id);
                  loadNotes();
                }}
              />
            )}
            contentContainerStyle={styles.notesList}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>

      {/* Floating Action Button */}
      <TouchableOpacity
        style={styles.fab}
        onPress={() => router.push("/AddNoteScreen")}
      >
        <Ionicons name="add" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  header: {
    backgroundColor: "#667eea",
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  subtitle: {
    fontSize: 14,
    color: "#E8EAF6",
    marginTop: 2,
  },
  profileButton: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  searchIcon: {
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
    color: "#333",
  },
  sortButton: {
    padding: 8,
  },
  sortIndicator: {
    fontSize: 12,
    color: "#E8EAF6",
    textAlign: "right",
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  notesHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 15,
  },
  notesTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  notesCount: {
    fontSize: 14,
    color: "#666",
  },
  emptyState: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 100,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#666",
    marginTop: 16,
  },
  emptySubtitle: {
    fontSize: 16,
    color: "#999",
    textAlign: "center",
    marginTop: 8,
  },
  notesList: {
    paddingBottom: 100,
  },
  fab: {
    position: "absolute",
    bottom: 24,
    right: 24,
    backgroundColor: "#667eea",
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#667eea",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
});
