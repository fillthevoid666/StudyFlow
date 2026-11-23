import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/colors';

export default function TaskDetailScreen({
  route,
  navigation,
  tasks,
  onToggleTask,
  onDeleteTask,
}) {
  const { taskId } = route.params;
  const task = tasks.find((item) => item.id === taskId);

  // Mencegah error render sesaat setelah tugas dihapus
  if (!task) {
    return null;
  }

  const handleDelete = () => {
    Alert.alert(
      'Hapus Tugas',
      'Apakah Anda yakin ingin menghapus tugas ini dari daftar?',
      [
        { text: 'Batal', style: 'cancel' },
        {
          text: 'Hapus',
          style: 'destructive',
          onPress: () => {
            onDeleteTask(task.id);
            navigation.goBack();
          },
        },
      ]
    );
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.card}>
        {/* Status & Prioritas */}
        <View style={styles.badgeRow}>
          <View
            style={[
              styles.statusBadge,
              { backgroundColor: task.isCompleted ? '#D1FAE5' : '#FEF3C7' },
            ]}
          >
            <Ionicons
              name={task.isCompleted ? 'checkmark-circle' : 'time'}
              size={14}
              color={task.isCompleted ? COLORS.success : COLORS.warning}
            />
            <Text
              style={[
                styles.statusText,
                { color: task.isCompleted ? COLORS.success : COLORS.warning },
              ]}
            >
              {task.isCompleted ? 'Selesai' : 'Belum Selesai'}
            </Text>
          </View>

          <View style={styles.priorityTag}>
            <Text style={styles.priorityTagText}>Prioritas {task.priority}</Text>
          </View>
        </View>

        {/* Judul & Mata Kuliah */}
        <Text style={styles.title}>{task.title}</Text>

        <View style={styles.infoItem}>
          <Ionicons name="book-outline" size={18} color={COLORS.primary} />
          <Text style={styles.infoText}>{task.course}</Text>
        </View>

        <View style={styles.infoItem}>
          <Ionicons name="calendar-outline" size={18} color={COLORS.primary} />
          <Text style={styles.infoText}>Tenggat: {task.deadline}</Text>
        </View>

        <View style={styles.divider} />

        {/* Deskripsi Tugas */}
        <Text style={styles.sectionLabel}>Deskripsi Tugas</Text>
        <Text style={styles.description}>{task.description}</Text>
      </View>

      {/* Tombol Ubah Status */}
      <TouchableOpacity
        style={[
          styles.actionButton,
          { backgroundColor: task.isCompleted ? COLORS.warning : COLORS.success },
        ]}
        onPress={() => onToggleTask(task.id)}
        activeOpacity={0.85}
      >
        <Ionicons
          name={task.isCompleted ? 'refresh-outline' : 'checkmark-done-outline'}
          size={20}
          color="#FFFFFF"
        />
        <Text style={styles.actionButtonText}>
          {task.isCompleted ? 'Tandai Belum Selesai' : 'Tandai Selesai'}
        </Text>
      </TouchableOpacity>

      {/* Tombol Hapus Tugas */}
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={handleDelete}
        activeOpacity={0.85}
      >
        <Ionicons name="trash-outline" size={20} color={COLORS.danger} />
        <Text style={styles.deleteButtonText}>Hapus Tugas</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    padding: 16,
    paddingBottom: 32,
  },
  card: {
    backgroundColor: COLORS.card,
    borderRadius: 14,
    padding: 18,
    borderWidth: 1,
    borderColor: COLORS.border,
    marginBottom: 20,
  },
  badgeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '700',
    marginLeft: 5,
  },
  priorityTag: {
    backgroundColor: COLORS.secondary,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
  },
  priorityTagText: {
    fontSize: 12,
    fontWeight: '700',
    color: COLORS.primary,
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
    color: COLORS.textPrimary,
    marginBottom: 14,
    lineHeight: 26,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  infoText: {
    fontSize: 14,
    color: COLORS.textSecondary,
    marginLeft: 10,
    fontWeight: '500',
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.border,
    marginVertical: 14,
  },
  sectionLabel: {
    fontSize: 13,
    fontWeight: '700',
    color: COLORS.textPrimary,
    marginBottom: 6,
  },
  description: {
    fontSize: 14,
    color: COLORS.textSecondary,
    lineHeight: 21,
  },
  actionButton: {
    flexDirection: 'row',
    paddingVertical: 14,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
    marginLeft: 8,
  },
  deleteButton: {
    flexDirection: 'row',
    backgroundColor: '#FEE2E2',
    paddingVertical: 14,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteButtonText: {
    color: COLORS.danger,
    fontSize: 15,
    fontWeight: '700',
    marginLeft: 8,
  },
});