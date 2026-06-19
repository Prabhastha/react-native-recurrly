import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { styled } from "nativewind"
import {SafeAreaView as RNSafeAreaView} from 'react-native-safe-area-context'
const SafeAreaView = styled(RNSafeAreaView);

const Subcriptions = () => {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
        <Text>Subcriptions</Text>
    </SafeAreaView>

  );
};

export default Subcriptions;

