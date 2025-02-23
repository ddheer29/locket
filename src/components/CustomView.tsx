import React, { FC, ReactNode } from 'react';
import { SafeAreaView, StyleSheet, Text, View, ViewStyle } from 'react-native';
import LinearGradient from "react-native-linear-gradient";

interface CustomViewProps {
  children: ReactNode;
  style?: ViewStyle;
}

const CustomView: FC<CustomViewProps> = ({ children, style }) => {
  return (
    <LinearGradient
      colors={['#1a1a1a', '#000000']} style={styles.container}>
      <SafeAreaView />
      {children}
    </LinearGradient>
  );
};

export default CustomView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
