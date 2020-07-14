import React from 'react';
import { StyleSheet, View } from 'react-native';
import Task from '../components/Task';

const TaskScreen = () => {
    return (
        <View>
            <Task/>
        </View>
    )
}

const styles = StyleSheet.create({
    touchableOpacity: {
        borderWidth: 0.5,
        padding: 2
    },
    textStyle: {
        marginVertical: 10,
        fontSize: 14,
        color: 'green'
    }
})

export default TaskScreen;