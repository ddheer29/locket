import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { Colors } from '../constants/Colors'
import WidgetScreen3 from '../frames/WidgetScreen3'

const WidgetCard3: FC = () => {
  return (
    <View>
      <WidgetScreen3 />
      <Text style={styles.text}>{'Search for Locket\nand add the widget'}</Text>
    </View>
  )
}

export default WidgetCard3

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