import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Item({title, data}) {
  // gives the object keys as an array
  const data_array = Object.keys(data).filter((key) => {
    return key !== 'breed'
  })

  return(
    <View style={styles.item}>
      <Text style={styles.text}>{title}</Text>
      {data_array.map((key) => {
        return <Text>{key}:{data[key]}</Text>
      })}

    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    marginTop: 20,
    backgroundColor: 'pink',
  }
});
