// components/TaskInput.js
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const TaskInput = (props) => {
    const [taskText, setTaskText] = useState('');

    const taskInputHandler = (enteredText) => {
        setTaskText(enteredText);
    };

    const addTask = () => {
        props.onAddTask(taskText);
        setTaskText(''); // Clear input after adding
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput
                placeholder="Enter Task"
                style={styles.input}
                value={taskText}
                onChangeText={taskInputHandler}
            />
            <Button title="Add Task" onPress={addTask} />
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    input: {
        width: '70%',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        padding: 10,
    },
});

export default TaskInput;
