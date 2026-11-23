import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/colors';
import StatCard from '../components/StatCard';
import ScheduleCard from '../components/ScheduleCard';
import TaskCard from '../components/TaskCard';

export default function HomeScreen({
  navigation,
  tasks = [],
  schedules = [],
  onToggleTask,
}) {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((item) => item.isCompleted).length;
  const pendingTasks = totalTasks - completedTasks;

  // Mengambil maksimal 3 tugas yang belum selesai untuk ditampilkan di beranda
  const upcomingTasks = tasks.filter((item) => !item.isCompleted).slice(0, 3);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Header Sambutan & Tombol Tambah */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Halo, Mahasiswa!</Text>
          <Text style={styles.subtitle}>Kelola jadwal & target kuliahmu hari ini</Text>
        </View>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate('AddTask')}
          activeOpacity={0.8}
        >
          <Ionicons name="add" size={20} color="#FFFFFF" />
          <Text style={styles.addButtonText}>Tugas</Text>
        </TouchableOpacity>
      </View>

      {/* Ringkasan Statistik Tugas */}
      <View style={styles.statsRow}>
        <StatCard
          label="Total Tugas"
          count={totalTasks}
          color={COLORS.primary}
          iconName="documents-outline"
        />
        <StatCard
          label="Selesai"
          count={completedTasks}
          color={COLORS.success}
          iconName="checkmark-circle-outline"
        />
        <StatCard
          label="Tertunda"
          count={pendingTasks}
          color={COLORS.warning}
          iconName="hourglass-outline"
        />
      </View>

      {/* Bagian Jadwal Kuliah Hari Ini */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Jadwal Kuliah Hari Ini</Text>
        <Text style={styles.sectionBadge}>{schedules.length} Mata Kuliah</Text>
      </View>

      {schedules.map((schedule) => (
        <ScheduleCard key={schedule.id} schedule={schedule} />
      ))}

      {/* Bagian Tugas Terdekat */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Tugas Prioritas</Text>
        <TouchableOpacity onPress={() => navigation.navigate('TasksTab')}>
          <Text style={styles.seeAllText}>Lihat Semua</Text>
        </TouchableOpacity>
      </View>

      {upcomingTasks.length > 0 ? (
        upcomingTasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onToggle={onToggleTask}
            onPress={(selectedTask) =>
              navigation.navigate('TaskDetail', { taskId: selectedTask.id })
            }
          />
        ))
      ) : (
        <View style={styles.emptyBox}>
          <Ionicons name="happy-outline" size={32} color={COLORS.success} />
          <Text style={styles.emptyText}>Semua tugas sudah selesai!</Text>
        </View>
      )}
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  greeting: {
    fontSize: 22,
    fontWeight: '800',
    color: COLORS.textPrimary,
  },
  subtitle: {
    fontSize: 13,
    color: COLORS.textSecondary,
    marginTop: 2,
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 10,
  },
  addButtonText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 14,
    marginLeft: 4,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: -4,
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
    marginTop: 4,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: COLORS.textPrimary,
  },
  sectionBadge: {
    fontSize: 12,
    fontWeight: '600',
    color: COLORS.primary,
    backgroundColor: COLORS.secondary,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  seeAllText: {
    fontSize: 13,
    fontWeight: '600',
    color: COLORS.primary,
  },
  emptyBox: {
    backgroundColor: COLORS.card,
    borderRadius: 12,
    padding: 24,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  emptyText: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.textSecondary,
    marginTop: 8,
  },
});