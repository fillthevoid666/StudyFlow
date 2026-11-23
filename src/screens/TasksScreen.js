import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/colors';
import FilterChip from '../components/FilterChip';
import TaskCard from '../components/TaskCard';

export default function TasksScreen({ navigation, tasks, onToggleTask }) {
  const [selectedFilter, setSelectedFilter] = useState('Semua');
  const [searchQuery, setSearchQuery] = useState('');

  const filters = ['Semua', 'Belum Selesai', 'Selesai'];

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch =
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.course.toLowerCase().includes(searchQuery.toLowerCase());

    if (selectedFilter === 'Belum Selesai') {
      return matchesSearch && !task.isCompleted;
    }
    if (selectedFilter === 'Selesai') {
      return matchesSearch && task.isCompleted;
    }
    return matchesSearch;
  });

  return (
    <View style={styles.container}>
      {/* Kolom Pencarian */}
      <View style={styles.searchContainer}>
        <Ionicons name="search-outline" size={20} color={COLORS.textSecondary} />
        <TextInput
          style={styles.searchInput}
          placeholder="Cari judul tugas atau mata kuliah..."
          placeholderTextColor={COLORS.textSecondary}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        {searchQuery.length > 0 && (
          <TouchableOpacity onPress={() => setSearchQuery('')}>
            <Ionicons name="close-circle" size={18} color={COLORS.textSecondary} />
          </TouchableOpacity>
        )}
      </View>

      {/* Baris Filter Status */}
      <View style={styles.filterRow}>
        {filters.map((filter) => (
          <FilterChip
            key={filter}
            label={filter}
            isActive={selectedFilter === filter}
            onPress={() => setSelectedFilter(filter)}
          />
        ))}
      </View>

      {/* Daftar Tugas Menggunakan FlatList */}
      <FlatList
        data={filteredTasks}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <TaskCard
            task={item}
            onToggle={onToggleTask}
            onPress={(selectedTask) =>
              navigation.navigate('TaskDetail', { taskId: selectedTask.id })
            }
          />
        )}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Ionicons name="folder-open-outline" size={44} color={COLORS.textSecondary} />
            <Text style={styles.emptyTitle}>Tidak ada tugas ditemukan</Text>
            <Text style={styles.emptySubtitle}>
              Ubah kata kunci pencarian atau tekan tombol + di bawah untuk menambah tugas.
            </Text>
          </View>
        }
      />

      {/* Tombol Melayang (Floating Action Button) Tambah Tugas */}
      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate('AddTask')}
        activeOpacity={0.85}
      >
        <Ionicons name="add" size={28} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingHorizontal: 16,
    paddingTop: 14,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.card,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: COLORS.border,
    marginBottom: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: COLORS.textPrimary,
    marginLeft: 8,
  },
  filterRow: {
    flexDirection: 'row',
    marginBottom: 14,
  },
  listContent: {
    paddingBottom: 90,
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
    paddingHorizontal: 24,
  },
  emptyTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.textPrimary,
    marginTop: 12,
  },
  emptySubtitle: {
    fontSize: 13,
    color: COLORS.textSecondary,
    textAlign: 'center',
    marginTop: 4,
    lineHeight: 19,
  },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 24,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
});