import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { Colors } from '../constants/Colors'
import WidgetScreen1 from '../frames/WidgetScreen1'

const WidgetCard1: FC = () => {
  return (
    <View>
      <WidgetScreen1 />
      <Text style={styles.text}>{'Hold down on any app\nto edit your Home Screen'}</Text>
    </View>
  )
}

export default WidgetCard1

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