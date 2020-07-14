import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const tasks = [
    { name: 'Drink 2L of water', key: '1' },
    { name: 'Take dog for a walk', key: '2' },
    { name: 'water plants', key: '3' },
    { name: 'eat 3 meals', key: '4' }
]

const Task = () => {
    return (
        <View>
            <FlatList
                keyExtractor={(task) => task.name}
                data={tasks}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.container}>
                            <Text style={styles.textStyle}>{item.name}</Text>
                            <TouchableOpacity
                                style={styles.touchableOpacity}
                                onPress={() => console.log(`Task Pressed ${item.name}`)}
                            >
                                <FontAwesomeIcon icon={ faChevronRight } fill='green' size={24}/>
                            </TouchableOpacity>
                        </View>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    },
    touchableOpacity: {
        justifyContent: 'space-around',
        padding: 10,
        position: 'absolute',
        marginLeft: '90%',
        fontSize: 18
    },
    textStyle: {
        marginVertical: 10,
        fontSize: 18,
        color: 'green',
        paddingLeft: 5
    }
});

export default Task;