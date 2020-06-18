import React, {useState} from 'react';
import { StyleSheet, Text, View, Button,  ScrollView, SafeAreaView, FlatList } from 'react-native';
import { dogs, pets, cats } from './breeds'
import Item from './Item'

const catsanddogs = [cats, dogs]
export default function App() {
  const [petIndex, setpetIndex] = useState(0)

  return (
    <View style={styles.container}>
      
      <SafeAreaView>
        {/* <ScrollView>
          {dogs.map((item, index) => {
            return <Item title={`${index}${item.breed}`} key={index}></Item>
          })}
        </ScrollView> */}
        <Button title='Cats' onPress= {() => setpetIndex(0)}/>
        <Button title='Dogs' onPress={() => setpetIndex(1)}/>

        <FlatList
          
          data = {catsanddogs[petIndex]}
          renderItem = {({item, index}) => {
            return <Item title={`${index} ${item.breed}`} data={item}/>
          }}
          keyExtractor = {item => item.breed}
        />

      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    backgroundColor: 'tomato',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
