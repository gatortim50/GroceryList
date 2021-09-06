import React from 'react';
import {FlatList, Text, SafeAreaView, Pressable, View} from 'react-native';
import GroceryCard from './GroceryCard';
import styles from './styles';
import DATA from './GroceryCardData';

const GroceryItemScreen = () => {
  const onAddItem = () => {
    console.log('add item');
  };

  const addItem = () => {
    return (
      <View style={styles.title}>
        <Pressable style={styles.button} onPress={() => onAddItem}>
          <Text style={styles.text}>+ Add Item</Text>
        </Pressable>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Grocery List</Text>
      <FlatList
        data={DATA}
        numColumns={1}
        renderItem={({item, index}) => <GroceryCard item={item} />}
        keyExtractor={(item, index) => index.toString()}
      />
      <View style={styles.addContainer}>
        <Pressable style={styles.header} onPress={() => onAddItem}>
          <Text style={styles.text}>+ Add Item</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default GroceryItemScreen;
