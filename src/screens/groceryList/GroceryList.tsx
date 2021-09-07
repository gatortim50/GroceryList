import React, { useState, useEffect } from 'react';
import {
  FlatList,
  Text,
  SafeAreaView,
  Pressable,
  View,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import GroceryCard from './GroceryCard';
import styles from './styles';
// import DATA from './GroceryCardData';
const DATA= [
  {
    id: 1,
    title: 'Paper Towel',
  },
  {
    id: 2,
    title: 'Milk',
  },
];

const GroceryItemScreen = () => {
  const [data, setData] = useState(DATA);
  const [count, setCount] = useState(0);
  const [newItem, setNewItem] = useState({item: 1, title: " "});
  const onAddItem = (id) => {
    console.log('add item');
    let arr = DATA.filter(function(item) {
      // setNewItem(item)
      return item.id == id + 1;
    })
    setData(arr);
  };

  const removeItem = (id) => {
    console.log('delete item: ', id);
    let arr = DATA.filter(function(item) {
      setCount(count + 1);
      return item.id !== id
    })
    setData(arr);
  };

  useEffect(() => {
    console.log('DATA: ', data);

  }, [data]); // Only re-run the effect if data changes

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Grocery List</Text>
      <FlatList
        data={data}
        numColumns={1}
        renderItem={({item, index}) => 
          <GroceryCard item={item} 
          removeItem={removeItem}
        />}
        // keyExtractor={(item, index) => index.toString()}
        keyExtractor={(item) => item.id.toString()}
      />
      <View style={styles.addContainer}>
        <Pressable style={styles.header} onPress={() => onAddItem(item.id)}>
          <Text style={styles.subHeader}>
            <FontAwesomeIcon
              style={styles.addHeader}
              icon={faPlus}
              size={18}
            />
            Add Item
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default GroceryItemScreen;
