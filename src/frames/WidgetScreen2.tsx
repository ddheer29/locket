import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../utils/Theme';
const { width, height } = Dimensions.get('window');

const WidgetScreen2 = () => {
  return (
    <View style={{
      height: height * 0.5, width: 300,
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <View style={styles.outerFrame}>

        {/* Grid of Small Squares */}
        <View style={styles.gridContainer}>
          {Array.from({ length: 18 }).map((_, index) => (
            <View key={index} style={styles.gridItem} />
          ))}
        </View>

        {/* Bottom Rectangle (Home Button / Dock) */}
        <View style={styles.bottomRectangle} />
      </View>
    </View>
  )
}

export default WidgetScreen2

const styles = StyleSheet.create({
  outerFrame: {
    width: '60%',
    height: '80%',
    borderWidth: 10,
    borderColor: Color.text,
    borderRadius: 30,
    transform: [{ rotate: '8deg' }],
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
    width: 50,
    height: 50,
    borderRadius: 10,
    backgroundColor: 'yellow',
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
    resizeMode: 'cover',
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
    backgroundColor: 'gray',
    borderRadius: 8,
    margin: 5,
  },
  bottomRectangle: {
    width: '88%',
    height: 32,
    backgroundColor: 'gray',
    borderRadius: 14,
    marginTop: 120
  },
})
