import { Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react'
import CustomView from '../components/CustomView'
import { Colors } from '../constants/Colors'
import { useNavigation } from '@react-navigation/native'
import WidgetCard1 from '../components/WidgetCard1'
import WidgetCard2 from '../components/WidgetCard2'
import WidgetCard3 from '../components/WidgetCard3'

const { width, height } = Dimensions.get("window");
let currentIndex = 0

const AddWidgetScreen = () => {
  const navigation = useNavigation();
  const scrollViewRef = useRef(null);
  const [data, setData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleOnPressContinue = () => {
    navigation.navigate('LastScreen')
  }

  const renderTabs = ({ item, index }) => {
    return (
      <>
        <View key={index} style={styles.card}>
          {
            index === 0
              ? <WidgetCard1 />
              : index === 1
                ? <WidgetCard2 />
                : <WidgetCard3 />
          }
        </View>
      </>
    )
  }


  return (
    <CustomView>
      <Text style={styles.title}>{'Finally, add the widget\nto your home screen'}</Text>

      <View>
        <FlatList
          ref={scrollViewRef}
          data={[1, 2, 3]}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderTabs}
          horizontal
          pagingEnabled
          bounces={false}
          showsHorizontalScrollIndicator={false}
          onScroll={e => {
            let x = e?.nativeEvent?.contentOffset?.x;
            x = Number((x / width).toFixed(0))
            currentIndex = x
            setActiveIndex(x)
          }}
          scrollEventThrottle={16}
          contentContainerStyle={styles.scrollView}
          getItemLayout={(item, index) => (
            { length: width, offset: width * index, index }
          )}
        />
      </View>

      <TouchableOpacity
        style={[styles.continueButton, activeIndex === 2 && styles.continueButtonActive]}
        disabled={activeIndex < 2}
        onPress={handleOnPressContinue}
      >
        <Text style={[styles.continueText, activeIndex === 2 && styles.activeBtnText]}>
          I've enabled the widget
        </Text>
      </TouchableOpacity>
    </CustomView>
  )
}

export default AddWidgetScreen

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 30,
    textAlign: 'center',
    marginTop: 20
  },
  secondaryText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: Colors.text,
    textAlign: 'center',
    marginTop: 10
  },
  continueButton: {
    backgroundColor: '#333333',
    height: 50,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 70,
    width: width * 0.88,
    alignSelf: 'center'
  },
  continueButtonActive: {
    backgroundColor: Colors.btnColor,
  },
  continueText: {
    color: '#666666',
    fontSize: 16,
    fontWeight: '500',
  },
  activeBtnText: {
    color: Colors.btnText
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 16,
    borderBottomWidth: 1,
  },
  headerText: {
    marginTop: 24,
    paddingHorizontal: 16
  },
  lightText: {
    lineHeight: 14.52,
    marginTop: 8,
    paddingHorizontal: 16
  },
  container: {
    flex: 1
  },
  scrollView: {
    flexGrow: 1
  },
  card: {
    width: width,
    height: height * 0.6,
  },

  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold"
  },

  pageText: {
  },
})