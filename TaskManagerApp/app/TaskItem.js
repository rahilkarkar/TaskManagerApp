import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const TaskItem = (props) => {
    const urgencyColors = {
        "High Urgency": '#dc3545',
        "Medium Urgency": '#ffc107',
        "Low Urgency": '#28a745',
    };

    return (
        <View style={[styles.taskItem, { borderLeftColor: urgencyColors[props.task.urgency] }]}>
            <Text
                style={
                    props.task.completed
                        ? [styles.completedTask, { color: '#999' }]
                        : styles.taskText
                }
            >
                {props.task.text} ({props.task.urgency})
            </Text>
            <View style={styles.buttons}>
                <Button
                    title={props.task.completed ? 'Undo' : 'Complete'}
                    onPress={() => props.onToggleComplete(props.task.id)}
                    color={props.task.completed ? '#28a745' : '#007BFF'}
                />
                <Button title="Delete" onPress={() => props.onDeleteTask(props.task.id)} color="#dc3545" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    taskItem: {
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 10,
        borderLeftWidth: 5,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        elevation: 2,
    },
    taskText: {
        fontSize: 16,
        flex: 1,
    },
    completedTask: {
        fontSize: 16,
        textDecorationLine: 'line-through',
        color: '#999',
        flex: 1,
    },
    buttons: {
        flexDirection: 'row',
        gap: 10,
    },
});

export default TaskItem;
