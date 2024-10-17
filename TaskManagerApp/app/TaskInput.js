import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Picker } from 'react-native';

const TaskInput = (props) => {
    const [taskText, setTaskText] = useState('');
    const [urgency, setUrgency] = useState('Medium Urgency');

    const taskInputHandler = (enteredText) => {
        setTaskText(enteredText);
    };

    const addTask = () => {
        props.onAddTask(taskText, urgency);
        setTaskText('');
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput
                placeholder="Enter a new task"
                placeholderTextColor="#999"
                style={styles.input}
                value={taskText}
                onChangeText={taskInputHandler}
            />
            <Picker
                selectedValue={urgency}
                style={styles.picker}
                onValueChange={(itemValue) => setUrgency(itemValue)}
            >
                <Picker.Item label="High Urgency" value="High Urgency" />
                <Picker.Item label="Medium Urgency" value="Medium Urgency" />
                <Picker.Item label="Low Urgency" value="Low Urgency" />
            </Picker>
            <Button title="Add" onPress={addTask} color="#007BFF" />
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        elevation: 2,
    },
    input: {
        width: '100%',
        borderColor: '#ddd',
        borderBottomWidth: 1,
        fontSize: 16,
        paddingVertical: 5,
        marginBottom: 10,
    },
    picker: {
        height: 50,
        width: '100%',
        marginBottom: 10,
    },
});

export default TaskInput;
