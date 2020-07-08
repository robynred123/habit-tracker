import React from 'react';
import { Text, Stylesheet } from 'react-native';

const TaskScreen = () => {
    return <Text style={styles.textStyle}>This is the components Screen</Text>
}

const styles = Stylesheet.create({
    textStyle: {
        fontSize: 14,
        color: 'green'
    }
})

export default TaskScreen;