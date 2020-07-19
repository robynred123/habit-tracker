import React, { useState, useReducer } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, ScrollView, TextInput } from 'react-native';

const EditTaskScreen = () => {
    const [ name, setName ] = useState(null);

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.textStyle}>Task Name:</Text>
                <TextInput
                    autoCapitalize='sentences'
                    value={name}
                    onChangeText={name => setName(name)}
                    style={styles.textInput}
                />
            </View>
        </ScrollView>
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

export default EditTaskScreen;