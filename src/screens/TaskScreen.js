import React, { useEffect, useCallback } from 'react';
import { connect, useDispatch } from 'react-redux';
import { StyleSheet, View, TouchableOpacity, Text, ScrollView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Task from '../components/Task';
import * as taskActions from '../actions';

const TaskScreen = (props) => {
    let tasks = this.props.tasks

    console.log(props)

    const dispatch = useDispatch()

    const getTasksAction = useCallback(() => dispatch(taskActions.getTasks(), [dispatch]));

    useEffect(() => {
        getTasksAction()
    })

    return (
        <>
            <View>
               {tasks && (<Task Tasks={tasks} navigation={this.props.navigation} />)}
            </View>
            <View  style={styles.button}>
                <TouchableOpacity 
                    style={styles.touchableOpacity}
                    onPress={() => {
                        this.props.navigation.navigate('AddTasks')
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
    console.log(state)
   return {
       tasks: state.taskReducer.tasks,
       taskKey: state.taskReducer.taskKey
   } 
}

export default connect(mapStateToProps, taskActions) (TaskScreen);