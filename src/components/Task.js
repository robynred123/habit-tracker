import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Task = ( { navigation, Tasks } ) => {
    return (
        <View>
            <FlatList
                keyExtractor={(item) => item.key}
                data={Tasks}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.container}>
                            <Text style={styles.textStyle}>{item.name}</Text>
                            <TouchableOpacity
                                style={styles.touchableOpacity}
                                onPress={() => { navigation.navigate('EditTasks') }}
                            >
                            <FontAwesomeIcon style={styles.icon} icon={faChevronRight} fill='green' size={24} />
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
        flexDirection: 'row',
        padding: 5,
    },
    touchableOpacity: {
        padding: 15,
        position: 'absolute',
        marginLeft: '85%',
    },
    icon: {
        padding: 10,
        justifyContent: 'space-around',
    },
    textStyle: {
        marginVertical: 10,
        fontSize: 18,
        paddingLeft: '5%'
    }
});

export default Task;