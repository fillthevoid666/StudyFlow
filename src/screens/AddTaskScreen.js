import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/colors';

export default function AddTaskScreen({ navigation, onAddTask }) {
  const [title, setTitle] = useState('');
  const [course, setCourse] = useState('');
  const [deadline, setDeadline] = useState('');
  const [priority, setPriority] = useState('Sedang');
  const [description, setDescription] = useState('');

  const priorities = ['Tinggi', 'Sedang', 'Rendah'];

  const handleSave = () => {
    if (!title.trim() || !course.trim()) {
      Alert.alert('Data Belum Lengkap', 'Judul tugas dan nama mata kuliah wajib diisi.');
      return;
    }

    const newTask = {
      id: `tsk-${Date.now()}`,
      title: title.trim(),
      course: course.trim(),
      deadline: deadline.trim() || 'Belum ditentukan',
      priority,
      description: description.trim() || 'Tidak ada catatan tambahan.',
      isCompleted: false,
    };

    onAddTask(newTask);
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.label}>Judul Tugas *</Text>
      <TextInput
        style={styles.input}
        placeholder="Contoh: Proyek UTS React Native"
        placeholderTextColor={COLORS.textSecondary}
        value={title}
        onChangeText={setTitle}
      />

      <Text style={styles.label}>Mata Kuliah *</Text>
      <TextInput
        style={styles.input}
        placeholder="Contoh: Aplikasi Berbasis Platform"
        placeholderTextColor={COLORS.textSecondary}
        value={course}
        onChangeText={setCourse}
      />

      <Text style={styles.label}>Tenggat Waktu (Deadline)</Text>
      <TextInput
        style={styles.input}
        placeholder="Contoh: 28 Nov 2026"
        placeholderTextColor={COLORS.textSecondary}
        value={deadline}
        onChangeText={setDeadline}
      />

      <Text style={styles.label}>Tingkat Prioritas</Text>
      <View style={styles.priorityRow}>
        {priorities.map((item) => {
          const isSelected = priority === item;
          return (
            <TouchableOpacity
              key={item}
              style={[styles.priorityOption, isSelected && styles.prioritySelected]}
              onPress={() => setPriority(item)}
              activeOpacity={0.7}
            >
              <Text
                style={[
                  styles.priorityOptionText,
                  isSelected && styles.prioritySelectedText,
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <Text style={styles.label}>Deskripsi / Catatan Tugas</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Tuliskan rincian instruksi tugas..."
        placeholderTextColor={COLORS.textSecondary}
        value={description}
        onChangeText={setDescription}
        multiline
        numberOfLines={4}
        textAlignVertical="top"
      />

      <TouchableOpacity style={styles.saveButton} onPress={handleSave} activeOpacity={0.85}>
        <Ionicons name="checkmark-circle-outline" size={20} color="#FFFFFF" />
        <Text style={styles.saveButtonText}>Simpan Tugas</Text>
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
  label: {
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.textPrimary,
    marginBottom: 6,
    marginTop: 12,
  },
  input: {
    backgroundColor: COLORS.card,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 14,
    color: COLORS.textPrimary,
  },
  textArea: {
    minHeight: 100,
  },
  priorityRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 2,
  },
  priorityOption: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: COLORS.card,
    alignItems: 'center',
    marginHorizontal: 4,
  },
  prioritySelected: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  priorityOptionText: {
    fontSize: 13,
    fontWeight: '600',
    color: COLORS.textSecondary,
  },
  prioritySelectedText: {
    color: '#FFFFFF',
  },
  saveButton: {
    flexDirection: 'row',
    backgroundColor: COLORS.primary,
    paddingVertical: 14,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 28,
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
    marginLeft: 8,
  },
});