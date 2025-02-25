import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../utils/Theme';
import SearchSVG from '../assets/SearchSVG';
import { Colors } from '../constants/Colors';
const { width, height } = Dimensions.get('window');

const WidgetScreen3 = () => {
  return (
    <View style={{
      height: height * 0.5, width: 320,
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <View style={styles.outerFrame}>

        <View
          style={{
            width: '100%',
            height: '94%',
            alignItems: 'center',
            justifyContent: 'flex-end',
            paddingVertical: 10,
            backgroundColor: 'rgb(46, 45, 45)',
            borderRadius: 16,
            overflow: 'hidden',
          }}
        >
          <View
            style={{
              backgroundColor: 'rgb(86, 85, 85)',
              width: 20,
              height: 3,
              borderRadius: 10,
              marginBottom: 14,
              alignItems: 'center',
            }}
          />
          <View style={styles.bottomRectangle}>
            <SearchSVG />
            <Text
              style={{
                color: 'rgb(188, 187, 187)',
                fontSize: 12,
              }}
            >Locket</Text>
          </View>

          {/* Grid of Small Squares */}
          <View style={styles.gridContainer}>
            {Array.from({ length: 6 }).map((_, index) => (
              <View key={index} style={styles.gridItem} />
            ))}
          </View>
        </View>

      </View>
    </View>
  )
}

export default WidgetScreen3

const styles = StyleSheet.create({
  outerFrame: {
    width: '60%',
    height: '80%',
    borderWidth: 10,
    borderColor: Colors.frameContainer,
    borderRadius: 30,
    transform: [{ rotate: '8deg' }],
    // backgroundColor: Colors.background,
    alignItems: 'center',
    justifyContent: 'flex-end',
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
    justifyContent: 'center',
    alignItems: 'center',
    // width: '90%',
    // justifyContent: 'space-between',

  },
  gridItem: {
    width: '42%',
    height: 70,
    backgroundColor: 'rgb(54, 53, 54)',
    borderRadius: 8,
    margin: 5,
  },
  bottomRectangle: {
    width: '94%',
    height: 32,
    backgroundColor: '#666',
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
    marginBottom: 4,
    // marginTop: 120
  },
})
