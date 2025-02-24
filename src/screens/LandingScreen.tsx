import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Colors } from '../constants/Colors'
import LandingMobileFrame from '../frames/LandingMobileFrame'
import ContinueArrow from '../assets/ContinueArrow'

const LandingScreen = () => {
  const navigation = useNavigation()

  const handleOnPress = () => {
    navigation.navigate('PhoneNumberScreen');
  }

  return (
    <View style={styles.container}>
      <LandingMobileFrame />
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
            paddingHorizontal: 20,
            flexDirection: 'row',
            alignItems: 'center',
          }}
          onPress={handleOnPress}
        >
          <Text style={{
            color: Colors.btnText,
            fontWeight: 500,
            fontSize: 16,
            marginRight: 8,
          }}>
            Set up my Loacket
          </Text>
          <ContinueArrow color={Colors.btnText} size={20} />
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