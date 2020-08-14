import React, { useEffect, useCallback } from 'react';
import { connect, useDispatch } from 'react-redux';
import { StyleSheet, View, TouchableOpacity, Text, ScrollView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Task from '../components/Task';
import * as taskActions from '../actions';

const TaskScreen = ({navigation, tasks, taskKey}) => {

    const dispatch = useDispatch()

    const getTasksAction = useCallback(() => dispatch(taskActions.getTasks(), [dispatch]));
    const initialiseDbAction = useCallback(() => dispatch(taskActions.initialiseDb(), [dispatch]));

    useEffect(() => {
        initialiseDbAction()
    }, [])

    useEffect(() => {
        getTasksAction()
    }, [taskKey])

    console.log(tasks)

    return (
        <>
            <View>
                <Task Tasks={tasks} navigation={navigation} />
            </View>
            <View  style={styles.button}>
                <TouchableOpacity 
                    style={styles.touchableOpacity}
                    onPress={() => {
                        navigation.navigate('AddTasks')
                    }}
                >
                    <FontAwesomeIcon style={styles.icon} icon={faPlus} fill='white' size={24} />
                </TouchableOpacity>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        left: '70%',
        bottom: '5%',
        position: 'absolute'
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

const mapStateToProps = state => {
   return {
       tasks: state.taskReducer.tasks,
       taskKey: state.taskReducer.taskKey
   } 
}

export default connect(mapStateToProps, taskActions) (TaskScreen);