import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, ScrollView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Task from '../components/Task';

const tasks = [
    { name: 'Drink 2L of water', key: '1' },
    { name: 'Take dog for a walk', key: '2' },
    { name: 'water plants', key: '3' },
    { name: 'eat 3 meals', key: '4' }
]

const TaskScreen = () => {
    return (
        <>
            <ScrollView>
                <Task Tasks={tasks} />
            </ScrollView>
            <View  style={styles.button}>
                <TouchableOpacity style={styles.touchableOpacity}>
                <FontAwesomeIcon style={styles.icon} icon={faPlus} fill='white' size={24} />
                </TouchableOpacity>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    button: {
        marginLeft: '70%',
        marginBottom: '5%',
    },
    touchableOpacity: {
        width: 80,
        height: 80,
        backgroundColor: 'green',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle: {
        marginVertical: 10,
        fontSize: 14,
        color: 'green'
    }
})

export default TaskScreen;