import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Entypo } from '@expo/vector-icons'


interface ButtonNewProps {
  size: number;
  focused: boolean;
}

export default function ButtonNew({ size, focused }: ButtonNewProps) {
  return (
    <View style={[styles.container, {
      backgroundColor: focused ? "#3eccf5" : "#6fdfff",
    }]}>
      <Entypo
        name="plus"
        size={size}
        color={focused ? "#fff" : "#f8f8f8"}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  }
})
