import React, {useState, useEffect} from 'react';
import {
  Button,
  Pressable,
  View,
  TouchableOpacity,
  TextInput,
  Text,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import styles from './styles';

const GroceryListScreen = props => {
  const [active, setActive] = useState(true);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [count, setCount] = useState(0);
  const [text, onChangeText] = useState(props.item.title);

  const buttonStyle = {
    color: active ? 'yellow' : 'gray',
    fontStyle: active ? 'normal' : 'italic',
    fontSize: active ? 30 : 15,
    fontWeight: active ? 'bold' : 'normal',
    borderColor: active ? 'yellow' : 'gray',
    borderWidth: active ? 2 : 1,
  };
  console.log('active: ', active);
  console.log('buttonStyle: ', buttonStyle);
  return (
    <View style={styles.cardContainer}>
      <View style={styles.rowContainer}>
        <View style={styles.checkboxContainer}>
          <CheckBox
            lineWidth={1}
            boxType={'square'}
            onCheckColor={'red'}
            onTintColor={'gray'}
            animationDuration={1}
            onAnimationType={'fill'}
            disabled={false}
            value={toggleCheckBox}
            onValueChange={newValue => setToggleCheckBox(newValue)}
          />
        </View>
        <View style={styles.textinputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
          />
        </View>
        <View style={styles.countContainer}>
          <Text style={styles.count}>{count}</Text>
        </View>

      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.countButton}
          onPress={() => setCount(count + 1)}>
          <Text style={styles.text}>+</Text>
        </Pressable>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.countButton}
          onPress={() => setCount(count - 1)}>
          <Text style={styles.text}>"-"</Text>
        </Pressable>
      </View>
      </View>
    </View>
  );
};

export default GroceryListScreen;
