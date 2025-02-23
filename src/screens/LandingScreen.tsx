import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Colors } from '../constants/Colors'

const LandingScreen = () => {
  const navigation = useNavigation()

  const handleOnPress = () => {
    navigation.navigate('PhoneNumberScreen');
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={{
          color: Colors.white,
          fontWeight: 600,
          fontSize: 30
        }}>Locket</Text>
      </View>
      <Text style={{
        color: Colors.text,
        fontWeight: 600,
        fontSize: 20,
        marginTop: 24,
      }}>Live pics from your friends,</Text>
      <Text style={{
        color: Colors.text,
        fontWeight: 600,
        fontSize: 20,
        marginTop: 8,
      }}>on your home screen</Text>
      <View>
        <TouchableOpacity
          style={{
            backgroundColor: Colors.btnColor,
            paddingVertical: 16,
            borderRadius: 100,
            marginTop: 24,
            paddingHorizontal: 20
          }}
          onPress={handleOnPress}
        >
          <Text style={{
            color: Colors.btnText,
            fontWeight: 500,
            fontSize: 16
          }}>
            Set up my Loacket
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default LandingScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(16, 15, 14)',
  }
})