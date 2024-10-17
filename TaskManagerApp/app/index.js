import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import TaskInput from './TaskInput';
import TaskItem from './TaskItem';

const App = () => {
    const [tasks, setTasks] = useState([]);

    const addTaskHandler = (taskText, urgency) => {
        if (taskText.trim().length > 0) {
            setTasks((currentTasks) => [
                ...currentTasks,
                { text: taskText, completed: false, urgency, id: Math.random().toString() },
            ]);
        }
    };

    const toggleCompleteTaskHandler = (taskId) => {
        setTasks((currentTasks) =>
            currentTasks.map((task) =>
                task.id === taskId ? { ...task, completed: !task.completed } : task
            )
        );
    };

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
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 50,
        backgroundColor: '#f0f8ff',
    },
    header: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
        textAlign: 'center',
    },
});

export default App;
