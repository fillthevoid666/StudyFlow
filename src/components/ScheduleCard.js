import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/colors';

export default function ScheduleCard({ schedule }) {
  return (
    <View style={styles.card}>
      <View style={styles.accentBar} />
      <View style={styles.content}>
        <View style={styles.timeBadge}>
          <Ionicons name="time-outline" size={14} color={COLORS.primary} />
          <Text style={styles.timeText}>{schedule.time}</Text>
        </View>
        <Text style={styles.courseTitle}>{schedule.course}</Text>
        <View style={styles.metaRow}>
          <Ionicons name="location-outline" size={14} color={COLORS.textSecondary} />
          <Text style={styles.metaText}>{schedule.room}</Text>
        </View>
        <View style={styles.metaRow}>
          <Ionicons name="person-outline" size={14} color={COLORS.textSecondary} />
          <Text style={styles.metaText} numberOfLines={1}>
            {schedule.lecturer}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: COLORS.card,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
    overflow: 'hidden',
  },
  accentBar: {
    width: 5,
    backgroundColor: COLORS.primary,
  },
  content: {
    flex: 1,
    padding: 14,
  },
  timeBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.secondary,
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    marginBottom: 6,
  },
  timeText: {
    fontSize: 12,
    fontWeight: '600',
    color: COLORS.primary,
    marginLeft: 4,
  },
  courseTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: COLORS.textPrimary,
    marginBottom: 6,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  metaText: {
    fontSize: 12,
    color: COLORS.textSecondary,
    marginLeft: 6,
    flex: 1,
  },
});