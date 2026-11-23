import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/colors';

export default function ProfileScreen({ tasks }) {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((item) => item.isCompleted).length;
  const progressPercent =
    totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Kartu Header Profil */}
      <View style={styles.profileHeader}>
        <View style={styles.avatarCircle}>
          <Ionicons name="school" size={40} color={COLORS.primary} />
        </View>
        <Text style={styles.appName}>StudyFlow Mobile</Text>
        <Text style={styles.appTagline}>
          Asisten Manajemen Tugas & Jadwal Kuliah
        </Text>
      </View>

      {/* Kartu Progres Penyelesaian Tugas */}
      <View style={styles.card}>
        <View style={styles.progressHeader}>
          <Text style={styles.cardTitle}>Progres Penyelesaian Tugas</Text>
          <Text style={styles.percentText}>{progressPercent}%</Text>
        </View>

        <View style={styles.progressBarBg}>
          <View
            style={[styles.progressBarFill, { width: `${progressPercent}%` }]}
          />
        </View>

        <Text style={styles.progressDetail}>
          {completedTasks} dari {totalTasks} tugas telah diselesaikan
        </Text>
      </View>

      {/* Kartu Identitas Pengembang (Sesuai Ketentuan UTS) */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Informasi Pengembang</Text>

        <View style={styles.memberBox}>
          <Ionicons name="person-circle-outline" size={26} color={COLORS.primary} />
          <View style={styles.memberInfo}>
            <Text style={styles.memberName}>I Wayan Abi Bimantara</Text>
            <Text style={styles.memberNim}>NIM: 240040076 — Teknologi Informasi</Text>
          </View>
        </View>

        {/* Hapus blok memberBox di bawah ini jika mengerjakan secara individu */}
        <View style={styles.memberBox}>
          <Ionicons name="person-circle-outline" size={26} color={COLORS.textSecondary} />
          <View style={styles.memberInfo}>
            <Text style={styles.memberName}>Anggota Kelompok 2 (Opsional)</Text>
            <Text style={styles.memberNim}>NIM: Isi NIM atau hapus jika individu</Text>
          </View>
        </View>

        <View style={styles.divider} />

        <View style={styles.metaRow}>
          <Ionicons name="business-outline" size={16} color={COLORS.textSecondary} />
          <Text style={styles.metaText}>ITB STIKOM Bali</Text>
        </View>
        <View style={styles.metaRow}>
          <Ionicons name="code-slash-outline" size={16} color={COLORS.textSecondary} />
          <Text style={styles.metaText}>
            UTS Aplikasi Berbasis Platform — React Native Expo
          </Text>
        </View>
      </View>
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
  profileHeader: {
    alignItems: 'center',
    backgroundColor: COLORS.card,
    borderRadius: 14,
    padding: 22,
    borderWidth: 1,
    borderColor: COLORS.border,
    marginBottom: 16,
  },
  avatarCircle: {
    width: 76,
    height: 76,
    borderRadius: 38,
    backgroundColor: COLORS.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  appName: {
    fontSize: 20,
    fontWeight: '800',
    color: COLORS.textPrimary,
  },
  appTagline: {
    fontSize: 13,
    color: COLORS.textSecondary,
    marginTop: 4,
    textAlign: 'center',
  },
  card: {
    backgroundColor: COLORS.card,
    borderRadius: 14,
    padding: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: COLORS.textPrimary,
    marginBottom: 12,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  percentText: {
    fontSize: 16,
    fontWeight: '800',
    color: COLORS.primary,
    marginBottom: 12,
  },
  progressBarBg: {
    height: 10,
    backgroundColor: COLORS.secondary,
    borderRadius: 6,
    overflow: 'hidden',
    marginBottom: 8,
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: COLORS.primary,
    borderRadius: 6,
  },
  progressDetail: {
    fontSize: 12,
    color: COLORS.textSecondary,
  },
  memberBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.background,
    padding: 10,
    borderRadius: 10,
    marginBottom: 8,
  },
  memberInfo: {
    marginLeft: 10,
    flex: 1,
  },
  memberName: {
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.textPrimary,
  },
  memberNim: {
    fontSize: 12,
    color: COLORS.textSecondary,
    marginTop: 1,
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.border,
    marginVertical: 12,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  metaText: {
    fontSize: 13,
    color: COLORS.textSecondary,
    marginLeft: 8,
  },
});