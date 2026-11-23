import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/colors';

export default function TaskCard({ task, onPress, onToggle }) {
  const getPriorityStyle = (priority) => {
    switch (priority) {
      case 'Tinggi':
        return { bg: '#FEE2E2', text: COLORS.danger };
      case 'Sedang':
        return { bg: '#FEF3C7', text: COLORS.warning };
      default:
        return { bg: '#D1FAE5', text: COLORS.success };
    }
  };

  const priorityStyle = getPriorityStyle(task.priority);

  return (
    <View style={styles.card}>
      <TouchableOpacity
        style={styles.checkButton}
        onPress={() => onToggle(task.id)}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      >
        <Ionicons
          name={task.isCompleted ? 'checkbox' : 'square-outline'}
          size={24}
          color={task.isCompleted ? COLORS.success : COLORS.textSecondary}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.infoContainer}
        onPress={() => onPress(task)}
        activeOpacity={0.7}
      >
        <View style={styles.topRow}>
          <Text style={styles.courseTag} numberOfLines={1}>
            {task.course}
          </Text>
          <View style={[styles.priorityBadge, { backgroundColor: priorityStyle.bg }]}>
            <Text style={[styles.priorityText, { color: priorityStyle.text }]}>
              {task.priority}
            </Text>
          </View>
        </View>

        <Text
          style={[styles.title, task.isCompleted && styles.titleCompleted]}
          numberOfLines={2}
        >
          {task.title}
        </Text>

        <View style={styles.footerRow}>
          <Ionicons name="calendar-outline" size={13} color={COLORS.textSecondary} />
          <Text style={styles.deadlineText}>Tenggat: {task.deadline}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.card,
    borderRadius: 12,
    padding: 14,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  checkButton: {
    marginRight: 12,
  },
  infoContainer: {
    flex: 1,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  courseTag: {
    fontSize: 11,
    fontWeight: '600',
    color: COLORS.primary,
    flex: 1,
    marginRight: 8,
  },
  priorityBadge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
  },
  priorityText: {
    fontSize: 11,
    fontWeight: '700',
  },
  title: {
    fontSize: 15,
    fontWeight: '700',
    color: COLORS.textPrimary,
    marginBottom: 6,
  },
  titleCompleted: {
    textDecorationLine: 'line-through',
    color: COLORS.textSecondary,
  },
  footerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  deadlineText: {
    fontSize: 12,
    color: COLORS.textSecondary,
    marginLeft: 5,
  },
});