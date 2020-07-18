import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, ScrollView, TextInput } from 'react-native';

const AddTaskScreen = () => {
    const [name, setName] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>Add a Task Name:</Text>
            <TextInput
                autoCapitalize='sentences'
                value={name}
                onChangeText={name => setName(name)}
                style={styles.textInput}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 30
    },
    textStyle: {
        margin: 5,
        fontSize: 20
    },
    textInput: {
        borderWidth: 3,
        borderColor: 'green',
        borderRadius: 10,
        padding: 10
    }
})

export default AddTaskScreen;