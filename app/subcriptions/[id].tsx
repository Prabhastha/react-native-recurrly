import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Link, useLocalSearchParams} from "expo-router";

const SubcriptionDetails = () => {
    const {id} = useLocalSearchParams<{id: string}>();
  return (
    <View>
      <Text>Subcription Details: {id}</Text>
        <Link href="/">Go Back</Link>
    </View>
  );
};

export default SubcriptionDetails;

