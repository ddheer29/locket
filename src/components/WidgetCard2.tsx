import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { Colors } from '../constants/Colors'

const WidgetCard2: FC = () => {
  return (
    <View>
      <Text style={styles.text}>{'Tap the Plus button\nin the top left corner'}</Text>
    </View>
  )
}

export default WidgetCard2

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: 30,
    textAlign: 'center',
    marginTop: 20
  }
})