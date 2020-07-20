import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, ScrollView, TextInput } from 'react-native';

const AddTaskScreen = () => {
    const [name, setName] = useState(null);

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.textStyle}>Add a Task Name:</Text>
                <TextInput
                    autoCapitalize='sentences'
                    autocorrect ={true}
                    value={name}
                    onChangeText={name => setName(name)}
                    style={styles.textInput}
                /> 
            </View>
            <View>
                <TouchableOpacity 
                    style={styles.touchableOpacity}
                > 
                    <Text 
                        style={styles.textStyle}
                        onPress={() => console.log('save')}
                    > 
                    Save 
                    </Text>
                </TouchableOpacity>
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

export default AddTaskScreen;