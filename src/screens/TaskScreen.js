import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const mockTasks = [
    {name: 'Drink 2L of water', key: '1'},
    {name: 'Take dog for a walk', key: '2'},
    {name: 'water plants', key: '3'},
    {name: 'eat 3 meals', key: '4'}
]

const TaskScreen = () => {
    return (
        <View>
            <FlatList 
                keyExtractor={(task) => task.name}
                data={mockTasks} 
                renderItem={({ item }) => {
                    return ( 
                        <TouchableOpacity 
                            style={styles.touchableOpacity} 
                            onPress={() => console.log(`Task Pressed ${ item.name}`)}   
                        >
                            <Text style={styles.textStyle}>{item.name}</Text>
                        </TouchableOpacity>
                    )
                }} 
            />
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