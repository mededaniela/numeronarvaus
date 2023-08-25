import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, View, Text, Button, Alert } from 'react-native';
import { useState } from 'react';
import { useWindowDimensions } from 'react-native';

export default function App() {

  const [guess, setGuess] = useState("");
  const [realnumber, setRealnumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [answer, setAnswer] = useState("");
  const [count, setCount] = useState(0);

  const { height, width, scale, fontScale } = useWindowDimensions();

  const buttonPressed = () => {
    if (guess > realnumber) {    
      setAnswer("Your guess " + guess + " is too high!");  }
    else if (guess < realnumber) {
      setAnswer("Your guess " + guess + " is too low!");
    }
    else {
      Alert.alert("You guessed the number in " + count + " guesses");
    }
    };

  return (
    <View style={wholestyle.container}>
      <View style={styles.container}>
        <Text>Guess a number between 1-100:</Text>
        <Text>{answer}</Text>
        <TextInput style={{ width: 200, borderColor: 'gray', borderWidth: 1 }} keyboardType='numeric'
          onChangeText={guess => setGuess(guess)} value={guess} />
      </View>
      <View style={buttonstyles.container}>
      <Button onPress={() => { buttonPressed(); setCount(count + 1); }} title="Make a guess" />
      </View>
    </View>
  );
}

const wholestyle = StyleSheet.create({
  container: {
    flex: 1,
    margin: 150,
  },
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const buttonstyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'space-between',
    justifyContent: 'center',
  },
});