import React, {useState, useEffect} from 'react';
import {
  Pressable,
  View,
  TextInput,
  Text,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import styles from './styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlusCircle, faMinusCircle} from '@fortawesome/free-solid-svg-icons';

const GroceryListScreen = props => {
  console.log('card props:', props);
  const [toggleCheckBox, setToggleCheckBox] = useState(false); // delete item
  const [count, setCount] = useState(0);
  const [text, onChangeText] = useState(props.item.title);

  useEffect(() => {
    console.log('You clicked: ', count);
    
    if (count < 0) {
      setCount(0);
    }
    if (toggleCheckBox) {
      console.log('removeItem: ', props.item.title);
      props.removeItem(props.item.id);
    }
    
  }, [count, toggleCheckBox]); // Only re-run the effect if count changes


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
          <Pressable onPress={() => setCount(count + 1)}>
            <FontAwesomeIcon
              style={styles.buttonIcon}
              icon={faPlusCircle}
              size={22}
            />
          </Pressable>
        </View>
        <View style={styles.buttonContainer}>
          <Pressable onPress={() => setCount(count - 1)}>
            <FontAwesomeIcon
              style={styles.buttonIcon}
              icon={faMinusCircle}
              size={22}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default GroceryListScreen;
