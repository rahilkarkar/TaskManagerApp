// index.js
import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import TaskInput from './app/TaskInput';
import TaskItem from './app/TaskItem';

const Index = () => {
    const [tasks, setTasks] = useState([]);

    // Add a new task to the list
    const addTaskHandler = (taskText) => {
        if (taskText.trim().length > 0) {
            setTasks((currentTasks) => [
                ...currentTasks,
                { text: taskText, completed: false, id: Math.random().toString() },
            ]);
        }
    };

    // Mark task as complete or incomplete
    const toggleCompleteTaskHandler = (taskId) => {
        setTasks((currentTasks) =>
            currentTasks.map((task) =>
                task.id === taskId ? { ...task, completed: !task.completed } : task
            )
        );
    };

    // Delete a task from the list
    const deleteTaskHandler = (taskId) => {
        setTasks((currentTasks) => currentTasks.filter((task) => task.id !== taskId));
    };

    return (
        <View style={styles.screen}>
            <Text style={styles.header}>Task Manager</Text>
            <TaskInput onAddTask={addTaskHandler} />
            <FlatList
                data={tasks}
                keyExtractor={(item) => item.id}
                renderItem={(itemData) => (
                    <TaskItem
                        task={itemData.item}
                        onToggleComplete={toggleCompleteTaskHandler}
                        onDeleteTask={deleteTaskHandler}
                    />
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        padding: 50,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
});

export default Index;
