import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../utils/Theme';
import { Colors } from '../constants/Colors';
const { width, height } = Dimensions.get('window');

const LastScreenWidget = () => {
  return (
    <View style={{
      height: height * 0.5, width: 300,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'transparent',
    }}>
      <View style={styles.outerFrame}>

        <View style={styles.profileImageContainer}>
          <View
            style={{
              width: '95%',
              height: '95%',
              borderRadius: 10,
              backgroundColor: 'rgb(54, 53, 54)',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          />
        </View>
        <View style={[styles.gridContainer, { width: '46%', marginLeft: 68, marginTop: 8 }]}>
          {Array.from({ length: 4 }).map((_, index) => (
            <View key={index} style={styles.gridItem} />
          ))}
        </View>
        <View style={styles.gridContainer}>
          {Array.from({ length: 10 }).map((_, index) => (
            <View key={index} style={styles.gridItem} />
          ))}
        </View>

        {/* Bottom Rectangle (Home Button / Dock) */}
        <View style={styles.bottomRectangle} />
      </View>
    </View>
  )
}

export default LastScreenWidget

const styles = StyleSheet.create({
  outerFrame: {
    width: '60%',
    height: '80%',
    borderWidth: 10,
    borderColor: Colors.frameYellow,
    borderRadius: 30,
    transform: [{ rotate: '-6deg' }],
    // backgroundColor: Colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5, // For Android shadow
  },

  profileImageContainer: {
    width: 54,
    height: 54,
    borderRadius: 10,
    backgroundColor: Colors.frameYellow,
    position: 'absolute',
    top: 24,
    left: 18,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '90%',
    // justifyContent: 'space-between',

  },
  gridItem: {
    width: 25,
    height: 25,
    backgroundColor: 'rgb(54, 53, 54)',
    borderRadius: 8,
    margin: 5,
  },
  bottomRectangle: {
    width: '88%',
    height: 32,
    backgroundColor: 'rgb(54, 53, 54)',
    borderRadius: 14,
    marginTop: 90
  },
})
