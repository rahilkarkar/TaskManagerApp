// components/TaskItem.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const TaskItem = (props) => {
    return (
        <View style={styles.taskItem}>
            <Text style={props.task.completed ? styles.completedTask : styles.taskText}>
                {props.task.text}
            </Text>
            <Button
                title={props.task.completed ? 'Undo' : 'Complete'}
                onPress={() => props.onToggleComplete(props.task.id)}
            />
            <Button title="Delete" onPress={() => props.onDeleteTask(props.task.id)} />
        </View>
    );
};

const styles = StyleSheet.create({
    taskItem: {
        padding: 10,
        backgroundColor: '#f9f9f9',
        borderColor: '#ddd',
        borderWidth: 1,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    taskText: {
        fontSize: 16,
    },
    completedTask: {
        fontSize: 16,
        textDecorationLine: 'line-through',
        color: 'gray',
    },
});

export default TaskItem;
