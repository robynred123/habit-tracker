import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const HomeScreen = ({ navigation }) => {
  return  (
    <View>
      <Text style={styles.text}>Home</Text>
      <Button 
        title="View your Tasks"
        onPress={() => navigation.navigate('Tasks')}
      /> 
    </View>
  ) 
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
